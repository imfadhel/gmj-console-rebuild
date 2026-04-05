<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../domain/composables/useAuth'
import ThemeToggle from '../components/ui/ThemeToggle.vue'
import EarthBackground from '../components/ui/EarthBackground.vue'
import AuthInput from '../components/auth/AuthInput.vue'
import SocialLogin from '../components/auth/SocialLogin.vue'
import { Loader2 } from 'lucide-vue-next'

definePageMeta({
  middleware: 'guest'
})

const router = useRouter()
const { register, socialLogin, loading, error, success, resetState } = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = async () => {
  await register(name.value, email.value, password.value)
  if (success.value) {
    setTimeout(() => {
      resetState()
      router.push('/login')
    }, 2500)
  }
}

const handleSocialLogin = async (provider: string) => {
  await socialLogin(provider)
  if (success.value) {
    setTimeout(() => {
      resetState()
      router.push('/')
    }, 1500)
  }
}
</script>

<template>
  <div class="flex min-h-screen bg-white dark:bg-slate-950 font-sans transition-colors duration-500">
    <!-- Left Column: Earth Background Component -->
    <div class="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden items-end p-12">
      <!-- Background Earth animation component -->
      <div class="absolute inset-0 z-0">
        <EarthBackground />
      </div>
      <!-- Subtle top gradient for contrast if needed -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10 pointer-events-none"></div>
      
      <!-- Text overlay at the bottom left -->
      <div 
        class="relative z-20 w-full max-w-lg mb-8"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
      >
        <h2 class="text-white text-4xl md:text-5xl font-display font-medium leading-[1.15] tracking-tight mb-8">
          "Siap untuk eSIM dan nikmati koneksi tanpa kartu fisik."
        </h2>
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-lg font-display shadow-lg shadow-primary-500/30">
            G
          </div>
          <div>
            <p class="text-white font-medium">GMJ Roaming</p>
            <p class="text-slate-400 text-sm">Create an account to start</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Register Form -->
    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center relative p-8 sm:p-12">
      <div class="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <div 
        v-motion 
        :initial="{ opacity: 0, x: 20 }" 
        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 100 } }"
        class="w-full max-w-[420px]"
      >
        <!-- Logo and Greeting -->
        <div class="flex flex-col items-center text-center px-4 mb-10">
          <img src="~/assets/logo-dark.svg" alt="GMJ Logo" class="h-10 w-auto mb-8 hidden dark:block" />
          <img src="~/assets/logo-dark.svg" alt="GMJ Logo" class="h-10 w-auto mb-8 block dark:hidden" style="filter: brightness(0.2);" />
          
          <h1 class="text-3xl font-display font-semibold text-slate-900 dark:text-white capitalize">
            Create an account
          </h1>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-3">
            Join GMJ Console today
          </p>
        </div>

        <!-- Feedback Alerts -->
        <div 
          v-if="error" 
          v-motion
          :initial="{ opacity: 0, y: -10 }"
          :enter="{ opacity: 1, y: 0 }"
          class="mb-6 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 focus:outline-none text-sm text-red-600 dark:text-red-400 font-medium text-center"
        >
          {{ error }}
        </div>
        
        <div 
          v-if="success" 
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1 }"
          class="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 text-sm text-green-600 dark:text-green-400 font-medium flex items-center justify-center gap-2"
        >
          <Loader2 class="w-4 h-4 animate-spin" />
          {{ success }}
        </div>

        <!-- Register Form -->
        <form @submit.prevent="handleRegister" class="space-y-4">
          <AuthInput 
            id="name" 
            label="Name" 
            type="text" 
            v-model="name" 
            placeholder="John Doe" 
            required 
          />
          
          <AuthInput 
            id="email" 
            label="Email" 
            type="email" 
            v-model="email" 
            placeholder="johndoe@mail.com" 
            required 
          />
          
          <AuthInput 
            id="password" 
            label="Password" 
            type="password" 
            v-model="password" 
            placeholder="Password" 
            required 
          />

          <button 
            type="submit" 
            :disabled="loading"
            class="w-full flex justify-center items-center py-3.5 px-4 rounded-lg shadow-md shadow-primary-500/20 text-sm font-bold text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors mt-6"
          >
            <Loader2 v-if="loading" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
            <span v-else class="tracking-wide">Sign Up</span>
          </button>
        </form>

        <SocialLogin @social-login="handleSocialLogin" />

        <p class="mt-8 text-center text-[13px] font-medium text-slate-500 dark:text-slate-400">
          Already have an account?
          <NuxtLink to="/login" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors underline decoration-primary-300/50">
            Log in
          </NuxtLink>
        </p>

      </div>
    </div>
  </div>
</template>
