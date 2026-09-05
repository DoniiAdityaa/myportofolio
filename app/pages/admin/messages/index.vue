<script setup lang="ts">
import { Mail, Check, Trash2 } from '@lucide/vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const messages = [
  {
    id: '1',
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    message: 'Halo Doni, kami tertarik dengan aplikasi Laundriin buatanmu. Apakah available untuk project mobile freelance?',
    read: false,
    date: 'Sep 3, 2026'
  }
]
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-2xl font-heading font-bold text-white">Contact Messages Inbox</h1>
      <p class="text-xs text-slate-400">Incoming inquiries from prospective clients and recruiters.</p>
    </div>

    <div class="space-y-4">
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="p-6 rounded-2xl border transition-all"
        :class="msg.read ? 'bg-[#0f172a]/40 border-slate-800/80 text-slate-400' : 'bg-[#0f172a]/80 border-blue-500/30 shadow-md shadow-blue-500/5'"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-3">
              <span class="font-heading font-bold text-white text-base">{{ msg.name }}</span>
              <span class="text-xs font-mono text-slate-400">&lt;{{ msg.email }}&gt;</span>
              <span v-if="!msg.read" class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-500/15 text-blue-400 border border-blue-500/30">
                New
              </span>
            </div>
            <div class="text-xs font-mono text-slate-500">{{ msg.date }}</div>
          </div>

          <div class="flex items-center gap-2">
            <button class="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-emerald-400" title="Mark read">
              <Check class="w-4 h-4" />
            </button>
            <button class="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-red-400" title="Delete">
              <Trash2 class="w-4 h-4" />
            </button>
          </div>
        </div>

        <p class="mt-4 text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/60">
          {{ msg.message }}
        </p>
      </div>
    </div>
  </div>
</template>
