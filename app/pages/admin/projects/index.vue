<script setup lang="ts">
import { Plus, Edit3, Trash2, ExternalLink } from '@lucide/vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const projects = [
  { id: '1', title: 'Laundriin — Laundry Management & POS', category: 'mobile', status: 'published', order: 1 },
  { id: '2', title: 'Mau Coffee — Point of Sale & Cash Drawer', category: 'mobile', status: 'published', order: 2 },
  { id: '3', title: 'LPK Surya Kencana — Driving School CMS', category: 'freelance', status: 'published', order: 3 },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-heading font-bold text-white">Projects Management</h1>
        <p class="text-xs text-slate-400">Add, edit, reorder, or publish case studies.</p>
      </div>

      <NuxtLink
        to="/admin/projects/new"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors"
      >
        <Plus class="w-4 h-4" />
        <span>Add Project</span>
      </NuxtLink>
    </div>

    <!-- Table of projects -->
    <div class="rounded-2xl border border-slate-800/80 bg-[#0f172a]/60 overflow-hidden">
      <table class="w-full text-left text-sm text-slate-300">
        <thead class="bg-slate-900/80 border-b border-slate-800 text-xs font-mono uppercase text-slate-400">
          <tr>
            <th class="px-6 py-4">Title</th>
            <th class="px-6 py-4">Category</th>
            <th class="px-6 py-4">Status</th>
            <th class="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/60">
          <tr v-for="proj in projects" :key="proj.id" class="hover:bg-slate-850/40 transition-colors">
            <td class="px-6 py-4 font-medium text-white">{{ proj.title }}</td>
            <td class="px-6 py-4 font-mono text-xs">{{ proj.category }}</td>
            <td class="px-6 py-4">
              <span class="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {{ proj.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <NuxtLink
                :to="`/admin/projects/${proj.id}/edit`"
                class="inline-flex items-center p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Edit3 class="w-4 h-4" />
              </NuxtLink>
              <button
                class="inline-flex items-center p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-red-400 transition-colors"
              >
                <Trash2 class="w-4 h-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
