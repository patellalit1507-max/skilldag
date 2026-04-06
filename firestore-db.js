const { Firestore } = require("@google-cloud/firestore");

const db = new Firestore();

// Collection references
const usersCol = db.collection("users");
const sessionsCol = db.collection("sessions");
const progressCol = db.collection("progress");

// ==================== USERS ====================

async function createUser(username, passwordHash, displayName) {
  // Check uniqueness first (Firestore has no unique constraint)
  const existing = await getUserByUsername(username);
  if (existing) throw new Error("USERNAME_TAKEN");

  const docRef = await usersCol.add({
    username,
    username_lower: username.toLowerCase(),
    password_hash: passwordHash,
    display_name: displayName,
    created_at: new Date().toISOString(),
  });
  return { id: docRef.id, username, display_name: displayName };
}

async function getUserByUsername(username) {
  const snap = await usersCol
    .where("username_lower", "==", username.toLowerCase())
    .limit(1)
    .get();
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() };
}

async function getUserById(userId) {
  const doc = await usersCol.doc(userId).get();
  if (!doc.exists) return null;
  const data = doc.data();
  return { id: doc.id, username: data.username, display_name: data.display_name, created_at: data.created_at };
}

// ==================== SESSIONS ====================

async function createSession(token, userId) {
  await sessionsCol.doc(token).set({
    user_id: userId,
    created_at: new Date().toISOString(),
  });
}

async function getSession(token) {
  const doc = await sessionsCol.doc(token).get();
  if (!doc.exists) return null;
  const session = doc.data();
  const user = await getUserById(session.user_id);
  if (!user) return null;
  return {
    token,
    uid: user.id,
    username: user.username,
    display_name: user.display_name,
  };
}

async function deleteSession(token) {
  await sessionsCol.doc(token).delete();
}

// ==================== PROGRESS ====================

async function saveProgress(userId, moduleId, questionId) {
  // Use composite key to enforce uniqueness
  const docId = `${userId}_${moduleId}_${questionId}`;
  await progressCol.doc(docId).set({
    user_id: userId,
    module_id: moduleId,
    question_id: questionId,
    solved_at: new Date().toISOString(),
  }, { merge: true });
}

async function getProgress(userId) {
  const snap = await progressCol.where("user_id", "==", userId).get();
  const rows = [];
  snap.forEach((doc) => {
    const d = doc.data();
    rows.push({ module_id: d.module_id, question_id: d.question_id, solved_at: d.solved_at });
  });
  return rows;
}

async function getActivityData(userId) {
  const snap = await progressCol.where("user_id", "==", userId).get();
  const dailyCounts = {};
  snap.forEach((doc) => {
    const d = doc.data();
    if (d.solved_at) {
      const date = d.solved_at.slice(0, 10);
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    }
  });

  // Filter to last 365 days
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - 364);
  const cutoffStr = cutoff.toISOString().slice(0, 10);

  const filtered = {};
  for (const [date, count] of Object.entries(dailyCounts)) {
    if (date >= cutoffStr) filtered[date] = count;
  }

  // Calculate streaks
  const activeDates = Object.keys(dailyCounts).sort();
  let currentStreak = 0;
  let longestStreak = 0;

  if (activeDates.length > 0) {
    // Longest streak
    let run = 1;
    for (let i = 1; i < activeDates.length; i++) {
      const prev = new Date(activeDates[i - 1] + "T00:00:00");
      const curr = new Date(activeDates[i] + "T00:00:00");
      const diff = (curr - prev) / (1000 * 60 * 60 * 24);
      if (diff === 1) { run++; } else { run = 1; }
      if (run > longestStreak) longestStreak = run;
    }
    if (activeDates.length === 1 || longestStreak === 0) longestStreak = 1;

    // Current streak — count back from today or yesterday
    const todayStr = today.toISOString().slice(0, 10);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    let checkDate;
    if (dailyCounts[todayStr]) {
      checkDate = new Date(today);
    } else if (dailyCounts[yesterdayStr]) {
      checkDate = new Date(yesterday);
    }

    if (checkDate) {
      currentStreak = 1;
      while (true) {
        checkDate.setDate(checkDate.getDate() - 1);
        const ds = checkDate.toISOString().slice(0, 10);
        if (dailyCounts[ds]) { currentStreak++; } else { break; }
      }
    }
  }

  return { dailyCounts: filtered, currentStreak, longestStreak };
}

module.exports = {
  db,
  createUser,
  getUserByUsername,
  getUserById,
  createSession,
  getSession,
  deleteSession,
  saveProgress,
  getProgress,
  getActivityData,
};
