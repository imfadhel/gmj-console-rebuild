import type { User } from '../../domain/types/AuthTypes';
import api from '../api/axiosInstance';

export class AuthRepository {
  static async login(email: string, password: string): Promise<{user: User, token: string}> {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data; // { user, token }
    } catch (error: any) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.error || 'Autentikasi gagal');
      }
      throw new Error('Tidak bisa terhubung ke server');
    }
  }

  static async register(name: string, email: string, password: string): Promise<{user: User, token: string}> {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.error || 'Registrasi gagal');
      }
      throw new Error('Tidak bisa terhubung ke server');
    }
  }

  static async socialLogin(provider: string): Promise<{user: User, token: string}> {
    try {
      const response = await api.post('/auth/social-login', { provider });
      return response.data;
    } catch (error: any) {
      throw new Error('Social login gagal');
    }
  }
}
