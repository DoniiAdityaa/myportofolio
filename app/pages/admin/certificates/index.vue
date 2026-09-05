<script setup lang="ts">
import { Plus, Edit3, Trash2 } from '@lucide/vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const certificates = [
  { id: '1', title: 'Belajar Fundamental Aplikasi Flutter', issuer: 'Dicoding Indonesia', year: '2024' },
  { id: '2', title: 'Menjadi Flutter Developer Expert', issuer: 'Dicoding Indonesia', year: '2024' },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-heading font-bold text-white">Certificates Management</h1>
        <p class="text-xs text-slate-400">Upload credentials and manage verification URLs.</p>
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors"
      >
        <Plus class="w-4 h-4" />
        <span>Add Certificate</span>
      </button>
    </div>

    <div class="rounded-2xl border border-slate-800/80 bg-[#0f172a]/60 overflow-hidden">
      <table class="w-full text-left text-sm text-slate-300">
        <thead class="bg-slate-900/80 border-b border-slate-800 text-xs font-mono uppercase text-slate-400">
          <tr>
            <th class="px-6 py-4">Title</th>
            <th class="px-6 py-4">Issuer</th>
            <th class="px-6 py-4">Year</th>
            <th class="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60">
          <tr v-for="cert in certificates" :key="cert.id" class="hover:bg-slate-850/40 transition-colors">
            <td class="px-6 py-4 font-medium text-white">{{ cert.title }}</td>
            <td class="px-6 py-4 text-slate-400">{{ cert.issuer }}</td>
            <td class="px-6 py-4 font-mono text-xs">{{ cert.year }}</td>
            <td class="px-6 py-4 text-right space-x-2">
              <button class="inline-flex items-center p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-blue-400">
                <Edit3 class="w-4 h-4" />
              </button>
              <button class="inline-flex items-center p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-red-400">
                <Trash2 class="w-4 h-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
