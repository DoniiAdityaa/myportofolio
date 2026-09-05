<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, Save } from '@lucide/vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const route = useRoute()
const projectId = route.params.id

const form = ref({
  title: 'Laundriin — Laundry Management & POS',
  slug: 'laundriin',
  category: 'mobile',
  summary: 'Full-featured laundry POS app with dual roles (Admin/Staff), Bluetooth thermal printer integration, income analytics, and Wablas WhatsApp relay.',
  body: 'Full markdown case study...',
  techStack: 'Flutter, Firebase, BLoC, Bluetooth ESC/POS',
  coverImageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80',
  liveUrl: 'https://cendanalaundry.com',
  repoUrl: 'https://github.com/DoniiAdityaa',
  status: 'published',
  featured: true
})
</script>

<template>
  <div class="max-w-4xl space-y-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <NuxtLink to="/admin/projects" class="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
          <ArrowLeft class="w-4 h-4" />
        </NuxtLink>
        <h1 class="text-2xl font-heading font-bold text-white">Edit Project #{{ projectId }}</h1>
      </div>
    </div>

    <form class="rounded-2xl border border-slate-800/80 bg-[#0f172a]/60 p-6 sm:p-8 space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Project Title</label>
          <input
            v-model="form.title"
            type="text"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Slug</label>
          <input
            v-model="form.slug"
            type="text"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Category</label>
          <select
            v-model="form.category"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="mobile">Mobile (Flutter)</option>
            <option value="freelance">Freelance / Client</option>
            <option value="web">Web Application</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Status</label>
          <select
            v-model="form.status"
            class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div class="flex items-center pt-6">
          <label class="inline-flex items-center gap-2 cursor-pointer text-sm text-slate-300">
            <input type="checkbox" v-model="form.featured" class="rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0" />
            <span>Featured on Home</span>
          </label>
        </div>
      </div>

      <div>
        <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Summary</label>
        <textarea
          v-model="form.summary"
          rows="2"
          class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div class="pt-4 border-t border-slate-800 flex justify-end gap-3">
        <NuxtLink to="/admin/projects" class="px-5 py-2.5 rounded-xl text-sm font-medium bg-slate-800 text-slate-300 hover:bg-slate-700">
          Cancel
        </NuxtLink>
        <button
          type="button"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white"
        >
          <Save class="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>
    </form>
  </div>
</template>
