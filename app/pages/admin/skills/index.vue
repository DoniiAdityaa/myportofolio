<script setup lang="ts">
import { Plus, Trash2, GripVertical } from '@lucide/vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const skills = [
  { id: '1', name: 'Flutter', category: 'mobile', order: 1 },
  { id: '2', name: 'Dart', category: 'mobile', order: 2 },
  { id: '3', name: 'BLoC / Cubit', category: 'mobile', order: 3 },
  { id: '4', name: 'Firebase', category: 'backend', order: 4 },
  { id: '5', name: 'Tailwind CSS', category: 'web', order: 5 },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-heading font-bold text-white">Skills Arsenal</h1>
        <p class="text-xs text-slate-400">Manage tech stack badges and display ordering.</p>
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors"
      >
        <Plus class="w-4 h-4" />
        <span>Add Skill</span>
      </button>
    </div>

    <div class="rounded-2xl border border-slate-800/80 bg-[#0f172a]/60 p-4 space-y-2">
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
      >
        <div class="flex items-center gap-3">
          <GripVertical class="w-4 h-4 text-slate-600 cursor-grab" />
          <span class="font-medium text-white text-sm">{{ skill.name }}</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
            {{ skill.category }}
          </span>
        </div>

        <button class="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-slate-800 transition-colors">
          <Trash2 class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>
