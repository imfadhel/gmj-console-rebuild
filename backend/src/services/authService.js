const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey123';
const JWT_EXPIRES_IN = '24h';

class AuthService {
  async registerUser(name, email, password) {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email sudah terdaftar.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await userRepository.createUser(name, email, hashedPassword);
    
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return { user: newUser, token };
  }

  async loginUser(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Email atau kata sandi tidak valid.');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('Email atau kata sandi tidak valid.');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Filter out password from user object
    const { password: _, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
  }
}

module.exports = new AuthService();
