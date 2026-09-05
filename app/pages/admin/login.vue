<script setup lang="ts">
import { ref } from 'vue'
import { Lock, Mail, ArrowRight, ShieldCheck } from '@lucide/vue'

definePageMeta({
  layout: false // standalone clean layout for login
})

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const authStore = useAuthStore()

async function handleLogin() {
  loading.value = true
  errorMessage.value = ''
  try {
    // In Phase 1: Firebase Auth signInWithEmailAndPassword
    // For Phase 0 scaffold verification, simple bypass to enter admin panel
    authStore.setUser({ email: email.value, uid: 'admin-doni' } as any)
    await navigateTo('/admin')
  } catch (err: any) {
    errorMessage.value = err.message || 'Login failed. Please check your credentials.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-[#070a12] text-slate-100">
    <div class="w-full max-w-md space-y-8 p-8 rounded-3xl bg-[#0e1626] border border-slate-800/80 shadow-2xl">
      <div class="text-center space-y-2">
        <div class="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
          <ShieldCheck class="w-6 h-6" />
        </div>
        <h1 class="text-2xl font-heading font-bold text-white">Admin Authentication</h1>
        <p class="text-xs font-mono text-slate-400">Restricted access — Doni Aditya only</p>
      </div>

      <div
        v-if="errorMessage"
        class="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400"
      >
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Email</label>
          <div class="relative">
            <Mail class="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              v-model="email"
              type="email"
              required
              placeholder="admin@example.com"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Password</label>
          <div class="relative">
            <Lock class="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              v-model="password"
              type="password"
              required
              placeholder="••••••••"
              class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white transition-all text-sm shadow-md shadow-blue-600/20"
        >
          <span>{{ loading ? 'Signing in...' : 'Sign In' }}</span>
          <ArrowRight class="w-4 h-4" />
        </button>
      </form>

      <div class="text-center pt-2">
        <NuxtLink to="/" class="text-xs text-slate-500 hover:text-slate-400 transition-colors">
          ← Return to public site
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
