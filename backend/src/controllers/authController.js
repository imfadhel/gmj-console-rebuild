const authService = require('../services/authService');

class AuthController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Mohon lengkapi semua data.' });
      }

      const result = await authService.registerUser(name, email, password);
      return res.status(201).json(result);
    } catch (error) {
      if (error.message === 'Email sudah terdaftar.') {
        return res.status(409).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Terjadi kesalahan pada server saat registrasi.' });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Email dan kata sandi diperlukan.' });
      }

      const result = await authService.loginUser(email, password);
      return res.status(200).json(result);
    } catch (error) {
      if (error.message === 'Email atau kata sandi tidak valid.') {
        return res.status(401).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Terjadi kesalahan pada server saat login.' });
    }
  }
  
  async socialLogin(req, res) {
    // Simulasi untuk sekarang (tanpa OAuth Flow sesungguhnya)
    const { provider } = req.body;
    return res.status(200).json({
      user: {
        id: `social_${Date.now()}`,
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.com`
      },
      token: 'dummy_social_token'
    });
  }
}

module.exports = new AuthController();
