import { reactive, toRefs } from 'vue'
import { useCookie } from '#app'
import type { AuthState } from '../types/AuthTypes'
import { AuthRepository } from '../../data/repositories/AuthRepository'

const state = reactive<AuthState>({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  success: null
})

export function useAuth() {
  // Nuxt 3 useCookie untuk menyimpan JWT token (harus di dalam composable context)
  const authToken = useCookie('auth_token', { maxAge: 60 * 60 * 24 }) // 24 hours

  const login = async (email: string, password: string) => {
    state.loading = true
    state.error = null
    state.success = null
    
    try {
      const { user, token } = await AuthRepository.login(email, password)
      
      state.user = user
      state.isAuthenticated = true
      state.success = 'Login berhasil! Mengalihkan...'
      
      // Simpan token
      authToken.value = token
    } catch (err: any) {
      state.error = err.message || 'Terjadi kesalahan saat login.'
      state.isAuthenticated = false
    } finally {
      state.loading = false
    }
  }

  const register = async (name: string, email: string, password: string) => {
    state.loading = true
    state.error = null
    state.success = null

    try {
      // Kita panggil repository tapi tidak menyimpan token agar user harus login manual
      await AuthRepository.register(name, email, password)
      
      state.success = 'Registrasi berhasil! Silakan login dengan akun Anda.'
    } catch (err: any) {
      state.error = err.message || 'Terjadi kesalahan saat registrasi.'
      state.isAuthenticated = false
    } finally {
      state.loading = false
    }
  }

  const socialLogin = async (provider: string) => {
    state.loading = true
    state.error = null
    state.success = null
    
    try {
      const { user, token } = await AuthRepository.socialLogin(provider)
      state.user = user
      state.isAuthenticated = true
      state.success = `Login dengan ${provider} berhasil!`
      authToken.value = token
    } catch (err: any) {
      state.error = err.message || `Login dengan ${provider} gagal.`
    } finally {
      state.loading = false
    }
  }

  const logout = () => {
    state.user = null
    state.isAuthenticated = false
    state.error = null
    state.success = null
    authToken.value = null // Hapus token
  }

  const resetState = () => {
    state.error = null
    state.success = null
  }

  return {
    ...toRefs(state),
    authToken,
    login,
    register,
    socialLogin,
    logout,
    resetState
  }
}
