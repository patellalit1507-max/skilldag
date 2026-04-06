const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const path = require("path");
const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const questions = require("./questions");
const pythonQuestions = require("./python-questions");
const modules = require("./modules");
const aimlModules = require("./modules-aiml");
const quizQuestions = require("./quiz-questions");
const firestoreDb = require("./firestore-db");

const roadmaps = [
  { id: "data-engineering", title: "Data Engineering", icon: "pipeline", modules },
  { id: "ai-ml", title: "AI / ML Mastery", icon: "brain", modules: aimlModules },
];

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ==================== AUTH MIDDLEWARE ====================

async function authOptional(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token) {
    try {
      const session = await firestoreDb.getSession(token);
      if (session) {
        req.user = { id: session.uid, username: session.username, displayName: session.display_name };
      }
    } catch {}
  }
  next();
}

async function authRequired(req, res, next) {
  await authOptional(req, res, () => {
    if (!req.user) return res.status(401).json({ error: "Authentication required" });
    next();
  });
}

// ==================== HEALTH CHECK ====================

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// ==================== AUTH ENDPOINTS ====================

app.post("/api/register", async (req, res) => {
  const { username, password, displayName } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }
  if (username.length < 3 || username.length > 30) {
    return res.status(400).json({ error: "Username must be 3-30 characters" });
  }
  if (password.length < 4) {
    return res.status(400).json({ error: "Password must be at least 4 characters" });
  }

  const hash = bcrypt.hashSync(password, 10);
  const name = displayName || username;

  try {
    const user = await firestoreDb.createUser(username, hash, name);
    const token = uuidv4();
    await firestoreDb.createSession(token, user.id);

    res.json({
      token,
      user: { id: user.id, username: user.username, displayName: user.display_name },
    });
  } catch (err) {
    if (err.message === "USERNAME_TAKEN") {
      return res.status(409).json({ error: "Username already taken" });
    }
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
    const user = await firestoreDb.getUserByUsername(username);
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = uuidv4();
    await firestoreDb.createSession(token, user.id);

    res.json({
      token,
      user: { id: user.id, username: user.username, displayName: user.display_name },
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/api/logout", authRequired, async (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  await firestoreDb.deleteSession(token);
  res.json({ ok: true });
});

app.get("/api/me", authRequired, (req, res) => {
  res.json({ user: req.user });
});

// ==================== PROGRESS ENDPOINTS ====================

app.get("/api/progress", authRequired, async (req, res) => {
  try {
    const rows = await firestoreDb.getProgress(req.user.id);
    const progress = {};
    rows.forEach((r) => {
      if (!progress[r.module_id]) progress[r.module_id] = [];
      progress[r.module_id].push({ questionId: r.question_id, solvedAt: r.solved_at });
    });
    res.json({ progress });
  } catch (err) {
    res.status(500).json({ error: "Failed to load progress" });
  }
});

app.post("/api/progress", authRequired, async (req, res) => {
  const { module_id, question_id } = req.body;
  if (!module_id || question_id == null) {
    return res.status(400).json({ error: "module_id and question_id are required" });
  }
  try {
    await firestoreDb.saveProgress(req.user.id, module_id, question_id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to save progress" });
  }
});

app.get("/api/activity", authRequired, async (req, res) => {
  try {
    const data = await firestoreDb.getActivityData(req.user.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load activity data" });
  }
});

// ==================== ROADMAPS & MODULES ====================

app.get("/api/roadmaps", (req, res) => {
  res.json(roadmaps.map(r => ({
    id: r.id,
    title: r.title,
    icon: r.icon,
    moduleCount: r.modules.length,
  })));
});

app.get("/api/modules", (req, res) => {
  const roadmapId = req.query.roadmap;
  const roadmap = roadmapId ? roadmaps.find(r => r.id === roadmapId) : roadmaps[0];
  if (!roadmap) return res.status(404).json({ error: "Roadmap not found" });
  res.json(roadmap.modules.map(({ id, title, shortTitle, description, icon, level, col, deps, type, color, questionFilter }) => ({
    id, title, shortTitle, description, icon, level, col, deps, type, color, questionFilter,
  })));
});

// ==================== SQL ====================

const FORBIDDEN = /\b(INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|REPLACE|ATTACH|DETACH|PRAGMA|VACUUM|REINDEX)\b/i;

function createDbForQuestion(question) {
  const db = new Database(":memory:");
  for (const stmt of question.schema.split(";").filter((s) => s.trim())) {
    db.exec(stmt);
  }
  for (const stmt of question.seed.split(";").filter((s) => s.trim())) {
    db.exec(stmt);
  }
  return db;
}

app.get("/api/questions", (req, res) => {
  const ids = req.query.ids ? req.query.ids.split(",").map(Number) : null;
  let filtered = questions;
  if (ids) filtered = questions.filter((q) => ids.includes(q.id));
  res.json(
    filtered.map(({ id, title, difficulty, problem, schema, seed, expectedOutput }) => ({
      id, title, difficulty, problem, schema, seed, expectedOutput,
    }))
  );
});

app.get("/api/questions/:id/answer", (req, res) => {
  const q = questions.find((q) => q.id === parseInt(req.params.id));
  if (!q) return res.status(404).json({ error: "Question not found" });
  res.json({ answer: q.answer });
});

app.post("/run-query", (req, res) => {
  const { query, question_id } = req.body;

  if (!query || !question_id) {
    return res.status(400).json({ error: "query and question_id are required" });
  }

  const trimmed = query.trim().replace(/;+$/, "");
  const upper = trimmed.toUpperCase().trimStart();
  if (!upper.startsWith("SELECT") && !upper.startsWith("WITH")) {
    return res.status(400).json({ error: "Only SELECT queries are allowed." });
  }
  if (FORBIDDEN.test(trimmed)) {
    return res.status(400).json({ error: "Forbidden SQL keyword detected." });
  }

  const question = questions.find((q) => q.id === question_id);
  if (!question) return res.status(404).json({ error: "Question not found." });

  let db;
  try {
    db = createDbForQuestion(question);
    const userResult = db.prepare(trimmed).all();
    const correct = JSON.stringify(userResult) === JSON.stringify(question.expectedOutput);
    res.json({ correct, userResult, expectedOutput: question.expectedOutput });
  } catch (err) {
    res.status(400).json({ error: err.message });
  } finally {
    if (db) db.close();
  }
});

// ==================== PYTHON ====================

const PYTHON_FORBIDDEN = /\b(import\s+os|import\s+sys|import\s+subprocess|import\s+shutil|__import__|eval\s*\(|exec\s*\(|open\s*\(|compile\s*\()\b/;

app.get("/api/python-questions", (req, res) => {
  const ids = req.query.ids ? req.query.ids.split(",").map(Number) : null;
  let filtered = pythonQuestions;
  if (ids) filtered = pythonQuestions.filter((q) => ids.includes(q.id));
  res.json(
    filtered.map(({ id, title, difficulty, problem, signature, starter, testCases }) => ({
      id, title, difficulty, problem, signature, starter,
      testCases: testCases.map(({ input, expected }) => ({ input, expected })),
    }))
  );
});

app.get("/api/python-questions/:id/answer", (req, res) => {
  const q = pythonQuestions.find((q) => q.id === parseInt(req.params.id));
  if (!q) return res.status(404).json({ error: "Question not found" });
  res.json({ answer: q.answer });
});

app.post("/run-python", (req, res) => {
  const { code, question_id } = req.body;

  if (!code || !question_id) {
    return res.status(400).json({ error: "code and question_id are required" });
  }
  if (PYTHON_FORBIDDEN.test(code)) {
    return res.status(400).json({ error: "Forbidden operation detected. Imports of os/sys/subprocess, eval, exec, and open are not allowed." });
  }

  const question = pythonQuestions.find((q) => q.id === question_id);
  if (!question) return res.status(404).json({ error: "Question not found." });

  const testLines = question.testCases.map((tc) => `results.append(repr(${tc.input}))`).join("\n");
  const script = `import json\n${code}\n\nresults = []\n${testLines}\nprint(json.dumps(results))\n`;

  let tmpFile;
  try {
    tmpFile = path.join(os.tmpdir(), `sql_practice_py_${Date.now()}.py`);
    fs.writeFileSync(tmpFile, script, "utf8");
    const output = execFileSync("python3", [tmpFile], {
      timeout: 5000, maxBuffer: 1024 * 1024, encoding: "utf8",
    }).trim();

    const userResults = JSON.parse(output);
    const testResults = question.testCases.map((tc, i) => ({
      input: tc.input, expected: tc.expected, actual: userResults[i],
      passed: userResults[i] === tc.expected,
    }));
    res.json({ correct: testResults.every((t) => t.passed), testResults });
  } catch (err) {
    let message = err.stderr || err.message || "Unknown error";
    if (err.killed) message = "Time limit exceeded (5s)";
    message = message.replace(/File ".*?"/g, 'File "<code>"');
    res.status(400).json({ error: message });
  } finally {
    if (tmpFile) { try { fs.unlinkSync(tmpFile); } catch {} }
  }
});

// ==================== QUIZ ====================

app.get("/api/quiz-questions/:moduleId", (req, res) => {
  const moduleId = req.params.moduleId;
  const filtered = quizQuestions.filter((q) => q.moduleId === moduleId);
  res.json(filtered.map(({ id, moduleId, question, options }) => ({
    id, moduleId, question, options,
  })));
});

app.post("/run-quiz", (req, res) => {
  const { question_id, selected } = req.body;

  if (question_id == null || selected == null) {
    return res.status(400).json({ error: "question_id and selected are required" });
  }

  const question = quizQuestions.find((q) => q.id === question_id);
  if (!question) return res.status(404).json({ error: "Question not found." });

  const correct = selected === question.correct;
  res.json({ correct, correctAnswer: question.correct, explanation: question.explanation });
});

app.get("/api/quiz-questions/:moduleId/:id/answer", (req, res) => {
  const q = quizQuestions.find((q) => q.id === parseInt(req.params.id));
  if (!q) return res.status(404).json({ error: "Question not found" });
  res.json({ correctAnswer: q.correct, explanation: q.explanation });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SkillDAG running at http://localhost:${PORT}`);
});
