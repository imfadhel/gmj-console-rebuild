<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
    <!-- Gradient Background overlay for depth -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/30 via-transparent to-transparent dark:from-primary-900/20"></div>
    
    <!-- Stay Connected Globe Concept -->
    <div class="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-10 dark:opacity-20 animate-spin-slow">
      <!-- Outer dashed ring -->
      <div class="absolute inset-0 rounded-full border border-dashed border-primary-500/50 scale-[1.2]"></div>
      
      <!-- Inner dashed ring -->
      <div class="absolute inset-8 rounded-full border border-dashed border-secondary-500/40"></div>

      <!-- Globe mesh abstract representing connected dots -->
      <svg class="w-full h-full text-slate-800 dark:text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="0.3">
        <!-- Latitudes -->
        <ellipse cx="50" cy="50" rx="45" ry="15" />
        <ellipse cx="50" cy="50" rx="45" ry="30" />
        <ellipse cx="50" cy="50" rx="45" ry="45" />
        
        <!-- Longitudes -->
        <ellipse cx="50" cy="50" rx="15" ry="45" />
        <ellipse cx="50" cy="50" rx="30" ry="45" />
        
        <!-- Dots for connection nodes -->
        <circle cx="50" cy="5" r="1" fill="currentColor"/>
        <circle cx="50" cy="95" r="1" fill="currentColor"/>
        <circle cx="5" cy="50" r="1" fill="currentColor"/>
        <circle cx="95" cy="50" r="1" fill="currentColor"/>
        
        <circle cx="35" cy="20" r="1" fill="currentColor" class="text-primary-500"/>
        <circle cx="65" cy="20" r="1" fill="currentColor" class="text-secondary-500"/>
        <circle cx="20" cy="35" r="1" fill="currentColor"/>
        <circle cx="80" cy="35" r="1" fill="currentColor"/>
        
        <circle cx="35" cy="80" r="1" fill="currentColor" class="text-secondary-500"/>
        <circle cx="65" cy="80" r="1" fill="currentColor" class="text-primary-500"/>
        <circle cx="20" cy="65" r="1" fill="currentColor"/>
        <circle cx="80" cy="65" r="1" fill="currentColor"/>
      </svg>
      
      <!-- Connective moving dot 1 -->
      <div class="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_2px_#0B9BE2] animate-pulse"></div>
      
      <!-- Connective moving dot 2 -->
      <div class="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-secondary-500 shadow-[0_0_8px_2px_#E7935B] animate-pulse delay-75"></div>
      
      <!-- Connective moving dot 3 -->
      <div class="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_10px_2px_#0B9BE2] animate-pulse delay-150"></div>
    </div>
  </div>
</template>
