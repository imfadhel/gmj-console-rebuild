<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button 
    @click="toggleTheme" 
    class="relative p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 overflow-hidden group"
    aria-label="Toggle theme"
  >
    <div class="relative w-5 h-5 flex items-center justify-center">
      <Sun 
        class="absolute w-5 h-5 transition-transform duration-500 ease-in-out"
        :class="colorMode === 'dark' ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'"
      />
      <Moon 
        class="absolute w-5 h-5 transition-transform duration-500 ease-in-out"
        :class="colorMode === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'"
      />
    </div>
  </button>
</template>
