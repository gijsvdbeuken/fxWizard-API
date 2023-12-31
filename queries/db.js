import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM User");
  return rows;
}

export async function getUser(id) {
  const [rows] = await pool.query(`SELECT * FROM User WHERE id = ?`, [id]);
  return rows[0];
}

export async function createUser(name, email, password) {
  const [result] = await pool.query(
    `INSERT INTO User (Username, Email, Password) VALUES (?, ?, ?)`,
    [name, email, password]
  );
  const id = result.insertId;
  return getUser(id);
}

export async function loginTheUser(email, password) {
  const [rows] = await pool.query(
    "SELECT * FROM User WHERE Email = ? AND Password = ?",
    [email, password]
  );
  return rows.length === 1;
}
