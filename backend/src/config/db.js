const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "gmj_db",
  password: process.env.DB_PASSWORD || "postgres",
  port: process.env.DB_PORT || 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Gagal terhubung ke database:", err.stack);
  }
  console.log("Koneksi PostgreSQL berhasil!");
  release();
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
