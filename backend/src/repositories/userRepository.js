const db = require("../config/db");

class UserRepository {
  async findByEmail(email) {
    const query = "SELECT * FROM users WHERE email = $1";
    const { rows } = await db.query(query, [email]);
    return rows[0];
  }

  async createUser(name, email, hashedPassword) {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, created_at;
    `;
    const { rows } = await db.query(query, [name, email, hashedPassword]);
    return rows[0];
  }
}

module.exports = new UserRepository();
