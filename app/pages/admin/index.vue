<script setup lang="ts">
import { FolderGit2, Award, Inbox, Plus, ArrowUpRight } from '@lucide/vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const stats = [
  { label: 'Total Projects', value: '3', icon: FolderGit2, to: '/admin/projects' },
  { label: 'Certificates', value: '2', icon: Award, to: '/admin/certificates' },
  { label: 'Unread Messages', value: '0', icon: Inbox, to: '/admin/messages' },
]
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-heading font-bold text-white">Dashboard Overview</h1>
        <p class="text-xs sm:text-sm text-slate-400">Welcome to your portfolio CMS management hub.</p>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/admin/projects/new"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20"
        >
          <Plus class="w-4 h-4" />
          <span>New Project</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <NuxtLink
        v-for="stat in stats"
        :key="stat.label"
        :to="stat.to"
        class="p-6 rounded-2xl bg-[#0f172a]/60 border border-slate-800/80 hover:border-slate-700 transition-all group"
      >
        <div class="flex items-center justify-between text-slate-400 mb-4">
          <component :is="stat.icon" class="w-5 h-5 text-blue-400" />
          <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
        <div class="text-3xl font-heading font-bold text-white">{{ stat.value }}</div>
        <div class="text-xs font-mono text-slate-400 mt-1">{{ stat.label }}</div>
      </NuxtLink>
    </div>

    <!-- Quick action links & recent activity preview -->
    <div class="rounded-2xl bg-[#0f172a]/60 border border-slate-800/80 p-6 space-y-4">
      <h2 class="font-heading font-semibold text-white text-base">Quick Workflow</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <NuxtLink
          to="/admin/projects"
          class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-colors text-sm text-slate-300"
        >
          Manage Projects →
        </NuxtLink>
        <NuxtLink
          to="/admin/certificates"
          class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-colors text-sm text-slate-300"
        >
          Manage Certificates →
        </NuxtLink>
        <NuxtLink
          to="/admin/skills"
          class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-colors text-sm text-slate-300"
        >
          Manage Skills →
        </NuxtLink>
        <NuxtLink
          to="/admin/settings"
          class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-colors text-sm text-slate-300"
        >
          Site & Bio Settings →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
