const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "app.db"));

// Enable WAL mode for better concurrent reads
db.pragma("journal_mode = WAL");

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    display_name TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    module_id TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    solved_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id),
    UNIQUE(user_id, module_id, question_id)
  );
`);

// Prepared statements
const stmts = {
  createUser: db.prepare("INSERT INTO users (username, password_hash, display_name) VALUES (?, ?, ?)"),
  getUserByUsername: db.prepare("SELECT * FROM users WHERE username = ?"),
  getUserById: db.prepare("SELECT id, username, display_name, created_at FROM users WHERE id = ?"),

  createSession: db.prepare("INSERT INTO sessions (token, user_id) VALUES (?, ?)"),
  getSession: db.prepare("SELECT s.*, u.id as uid, u.username, u.display_name FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.token = ?"),
  deleteSession: db.prepare("DELETE FROM sessions WHERE token = ?"),

  saveProgress: db.prepare("INSERT OR IGNORE INTO progress (user_id, module_id, question_id) VALUES (?, ?, ?)"),
  getProgress: db.prepare("SELECT module_id, question_id, solved_at FROM progress WHERE user_id = ?"),
  getModuleProgress: db.prepare("SELECT question_id, solved_at FROM progress WHERE user_id = ? AND module_id = ?"),
  deleteProgress: db.prepare("DELETE FROM progress WHERE user_id = ? AND module_id = ? AND question_id = ?"),
};

module.exports = { db, stmts };
