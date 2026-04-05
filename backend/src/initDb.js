const db = require("./config/db");

const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(query);
    console.log("Tabel 'users' berhasil dibuat atau sudah ada.");
  } catch (error) {
    console.error("Gagal membuat tabel users:", error);
  }
};

if (require.main === module) {
  createUsersTable().then(() => process.exit());
}

module.exports = createUsersTable;
