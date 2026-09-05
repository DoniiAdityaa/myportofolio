<script setup lang="ts">
import { 
  LayoutDashboard, 
  FolderGit2, 
  Award, 
  Cpu, 
  Inbox, 
  Settings, 
  LogOut, 
  Globe 
} from '@lucide/vue'

const adminNav = [
  { label: 'Dashboard', to: '/admin', icon: LayoutDashboard },
  { label: 'Projects', to: '/admin/projects', icon: FolderGit2 },
  { label: 'Certificates', to: '/admin/certificates', icon: Award },
  { label: 'Skills', to: '/admin/skills', icon: Cpu },
  { label: 'Messages', to: '/admin/messages', icon: Inbox },
  { label: 'Settings', to: '/admin/settings', icon: Settings },
]
</script>

<template>
  <div class="flex min-h-screen bg-[#070a12] text-slate-100">
    <!-- Admin Sidebar -->
    <aside class="w-64 border-r border-slate-800/80 bg-[#090d16] flex flex-col shrink-0">
      <div class="h-16 border-b border-slate-800/80 px-6 flex items-center justify-between">
        <div class="flex items-center gap-2 font-heading font-bold text-white tracking-tight">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          CMS Admin
        </div>
        <NuxtLink to="/" target="_blank" class="text-xs text-slate-400 hover:text-white flex items-center gap-1">
          <Globe class="w-3.5 h-3.5" />
          Live
        </NuxtLink>
      </div>

      <!-- Navigation links -->
      <nav class="p-4 space-y-1 flex-1">
        <NuxtLink
          v-for="item in adminNav"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
          active-class="!text-blue-400 bg-blue-500/10 border border-blue-500/20"
        >
          <component :is="item.icon" class="w-4 h-4" />
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Logout / User footer -->
      <div class="p-4 border-t border-slate-800/80">
        <NuxtLink
          to="/admin/login"
          class="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut class="w-4 h-4" />
          Sign Out
        </NuxtLink>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0">
      <header class="h-16 border-b border-slate-800/80 px-8 flex items-center justify-between bg-[#090d16]/50 backdrop-blur-md">
        <h1 class="text-sm font-medium text-slate-400">Admin Control Panel</h1>
        <div class="flex items-center gap-3 text-xs text-slate-400">
          <span>Logged in as <strong>Doni</strong></span>
        </div>
      </header>

      <main class="flex-1 p-8 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
