<script setup lang="ts">
import { useAuth } from '../domain/composables/useAuth'

definePageMeta({
  middleware: 'auth'
})

const { user, logout } = useAuth()
const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-500 flex flex-col">
    <!-- Navbar -->
    <header class="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-4 px-6 sm:px-12 flex justify-between items-center z-10 sticky top-0 shadow-sm">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-primary-500 flex flex-shrink-0 items-center justify-center text-white font-bold font-display shadow-sm">
          G
        </div>
        <h1 class="text-xl font-display font-semibold tracking-tight text-slate-800 dark:text-white hidden sm:block">GMJ Console</h1>
      </div>
      
      <div class="flex items-center gap-4 text-sm font-medium">
        <span class="text-slate-600 dark:text-slate-300">Halo, <strong class="text-primary-600 dark:text-primary-400 capitalize">{{ user?.name || 'Admin' }}</strong></span>
        <div class="h-5 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
        <button 
          @click="handleLogout" 
          class="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
        >
          Logout
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow p-6 sm:p-12 relative overflow-hidden">
      <div class="max-w-4xl mx-auto z-10 relative">        
        <!-- Welcome Card -->
        <div class="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 sm:p-12 shadow-sm text-center">
          <div class="mx-auto w-20 h-20 bg-primary-50 dark:bg-primary-900/20 rounded-full flex flex-shrink-0 items-center justify-center mb-6 ring-8 ring-primary-50/50 dark:ring-primary-900/10">
            <svg class="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Mulai Bereksplorasi</h2>
          <p class="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Selamat datang di Dashboard GMJ Roaming Console. 
            Saat ini koneksi sistem tertuju pada backend Anda dengan mulus melalui sistem state Nuxt.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
