<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/', hash: '' },
  { label: 'About', to: '/about', hash: '' },
  { label: 'Projects', to: '/projects', hash: '' },
  { label: 'Contact', to: '/contact', hash: '' },
]

const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#0a0a0c]">
    <!-- Floating Pill Navigation — exactly like khafidhasukma.id -->
    <header class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav class="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-[#1a1a1e]/90 backdrop-blur-xl border border-white/10 shadow-lg">
        <!-- Logo mark -->
        <div class="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center mr-2 shrink-0">
          <span class="text-xs font-bold text-white leading-none">D</span>
        </div>

        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-3 py-1.5 rounded-full text-sm transition-colors duration-200"
          :class="isActive(link.to)
            ? 'text-[#d4a853] font-medium'
            : 'text-white/60 hover:text-white'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1 pt-16">
      <slot />
    </main>

    <!-- Minimal Footer -->
    <footer class="border-t border-white/5 py-8 mt-24">
      <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <span>© {{ new Date().getFullYear() }} Doni Aditya Pratama. All rights reserved.</span>
        <div class="flex items-center gap-5">
          <a href="https://github.com/DoniiAdityaa" target="_blank" rel="noopener" class="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:text-white transition-colors">LinkedIn</a>
          <NuxtLink to="/admin/login" class="hover:text-white/60 transition-colors text-xs">Admin</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
