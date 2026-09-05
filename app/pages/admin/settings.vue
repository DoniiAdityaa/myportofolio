<script setup lang="ts">
import { ref } from 'vue'
import { Save, User, Globe, Share2 } from '@lucide/vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const profile = ref({
  name: 'Doni Aditya Pratama',
  role: 'Flutter Mobile Developer',
  tagline: 'Flutter Developer with Dio/BLoC expertise',
  email: 'doniaditya@example.com',
  location: 'Jepara, Jawa Tengah, Indonesia',
  bio: 'Mobile Developer specializing in Flutter...',
  github: 'https://github.com/DoniiAdityaa',
  linkedin: 'https://linkedin.com',
})

const siteSettings = ref({
  seoTitle: 'Doni Aditya — Flutter Mobile Developer',
  seoDescription: 'Personal portfolio and case studies of Doni Aditya, Flutter Mobile Developer.',
  theme: 'dark'
})
</script>

<template>
  <div class="max-w-4xl space-y-8">
    <div>
      <h1 class="text-2xl font-heading font-bold text-white">Profile & Site Settings</h1>
      <p class="text-xs text-slate-400">Configure global metadata, personal bio, and social links.</p>
    </div>

    <!-- Bio & Identity form -->
    <div class="rounded-2xl border border-slate-800/80 bg-[#0f172a]/60 p-6 sm:p-8 space-y-6">
      <div class="flex items-center gap-2 text-white font-heading font-semibold text-lg border-b border-slate-800 pb-3">
        <User class="w-5 h-5 text-blue-400" />
        <h2>Personal Information</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Full Name</label>
          <input
            v-model="profile.name"
            type="text"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Role / Title</label>
          <input
            v-model="profile.role"
            type="text"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Tagline</label>
        <input
          v-model="profile.tagline"
          type="text"
          class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Email</label>
          <input
            v-model="profile.email"
            type="email"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Location</label>
          <input
            v-model="profile.location"
            type="text"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Bio (Markdown)</label>
        <textarea
          v-model="profile.bio"
          rows="4"
          class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 font-mono"
        ></textarea>
      </div>

      <!-- Social Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">GitHub URL</label>
          <input
            v-model="profile.github"
            type="url"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">LinkedIn URL</label>
          <input
            v-model="profile.linkedin"
            type="url"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div class="flex justify-end pt-4 border-t border-slate-800">
        <button
          type="button"
          class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white"
        >
          <Save class="w-4 h-4" />
          <span>Save Profile</span>
        </button>
      </div>
    </div>
  </div>
</template>
