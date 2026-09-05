<script setup lang="ts">
import { ref } from 'vue'

const certificates = [
  {
    id: '1',
    title: 'Belajar Fundamental Aplikasi Flutter',
    issuer: 'Dicoding Indonesia',
    issueDate: '2024',
    category: 'Course',
    credentialUrl: 'https://www.dicoding.com',
    fileUrl: 'https://images.unsplash.com/photo-1589330694653-dad6bc01cf0e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Menjadi Flutter Developer Expert',
    issuer: 'Dicoding Indonesia',
    issueDate: '2024',
    category: 'Course',
    credentialUrl: 'https://www.dicoding.com',
    fileUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80',
  },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 pt-28 pb-24 space-y-10">
    <div class="space-y-2 max-w-2xl">
      <h1 class="text-4xl font-bold text-white">Certificates</h1>
      <p class="text-white/40">Official credentials and course completions.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="cert in certificates"
        :key="cert.id"
        class="rounded-2xl bg-[#141416] border border-white/[0.06] overflow-hidden hover:border-white/12 transition-colors"
      >
        <div class="aspect-[4/3] overflow-hidden">
          <img
            :src="cert.fileUrl"
            :alt="cert.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="p-5 space-y-3">
          <div>
            <div class="text-xs font-mono text-white/30 uppercase tracking-wider mb-1">{{ cert.category }} · {{ cert.issueDate }}</div>
            <h3 class="text-sm font-semibold text-white leading-snug">{{ cert.title }}</h3>
            <div class="text-xs text-white/40 mt-0.5">{{ cert.issuer }}</div>
          </div>
          <a
            v-if="cert.credentialUrl"
            :href="cert.credentialUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
          >
            Verify credential ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
