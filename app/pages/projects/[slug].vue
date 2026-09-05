<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

// Placeholder data — will connect to Firestore in Phase 1
const project = {
  title: 'Laundriin — Laundry Management & POS',
  subtitle: 'Full-stack mobile POS app for a laundry business client',
  category: 'mobile',
  role: 'Solo Developer (End-to-End)',
  period: '2023 — 2024',
  client: 'Cendana Laundry, Jepara',
  techStack: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'BLoC Pattern', 'Bluetooth ESC/POS', 'Wablas API', 'Dart'],
  coverImageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1600&q=80',
  liveUrl: '',
  repoUrl: 'https://github.com/DoniiAdityaa',
  gallery: [
    'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80',
  ],
  overview: 'Cendana Laundry needed to replace paper invoices and manual tracking with a reliable mobile tool. The owner needed real-time order visibility across Admin and Staff roles, a way to print customer receipts on-the-spot using a Bluetooth thermal printer, and automatic WhatsApp notifications to inform customers when their laundry is ready.',
  solution: 'Built a production Flutter application with a BLoC state management architecture, offline-resilient local caching using Hive, and Cloud Firestore for real-time multi-staff order sync. Bluetooth ESC/POS integration allows 58mm/80mm receipt printing directly from the app. WhatsApp notifications are sent automatically via Wablas API relay.',
  highlights: [
    'Dual role system: Admin (full access) and Staff (order operations only)',
    'Bluetooth thermal printer: 58mm and 80mm ESC/POS receipt support',
    'Real-time Firestore sync — changes visible across devices instantly',
    'Automated WhatsApp customer notification via Wablas API',
    'Income analytics with monthly/weekly charts',
    'Status tracking: masuk → proses → selesai → diambil',
  ],
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 pt-28 pb-24">
    <!-- Back -->
    <div class="mb-10">
      <NuxtLink to="/projects" class="text-sm text-white/40 hover:text-white transition-colors">
        ← Back to Projects
      </NuxtLink>
    </div>

    <!-- Header -->
    <div class="space-y-4 max-w-3xl mb-12">
      <div class="text-xs font-mono text-white/30 uppercase tracking-widest">{{ project.category }} · {{ project.period }}</div>
      <h1 class="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
        {{ project.title }}
      </h1>
      <p class="text-lg text-white/50 leading-relaxed">{{ project.subtitle }}</p>

      <!-- Action links -->
      <div class="flex flex-wrap items-center gap-3 pt-2">
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          View Repository ↗
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-white/40 transition-colors"
        >
          Live Demo ↗
        </a>
      </div>
    </div>

    <!-- Cover image — full width, large -->
    <div class="rounded-2xl overflow-hidden bg-[#141416] aspect-video mb-16">
      <img
        :src="project.coverImageUrl"
        :alt="project.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Two-column content: narrative left, metadata right -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
      <!-- Case study narrative -->
      <div class="space-y-10">
        <div class="space-y-3">
          <h2 class="text-xl font-bold text-white">Problem & Background</h2>
          <p class="text-white/50 leading-relaxed text-sm">{{ project.overview }}</p>
        </div>

        <div class="space-y-3">
          <h2 class="text-xl font-bold text-white">The Solution</h2>
          <p class="text-white/50 leading-relaxed text-sm">{{ project.solution }}</p>
        </div>

        <div class="space-y-3">
          <h2 class="text-xl font-bold text-white">Key Highlights</h2>
          <ul class="space-y-2.5">
            <li
              v-for="item in project.highlights"
              :key="item"
              class="flex items-start gap-3 text-sm text-white/50"
            >
              <span class="mt-1.5 w-1 h-1 rounded-full bg-white/40 shrink-0"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Gallery -->
        <div class="space-y-3">
          <h2 class="text-xl font-bold text-white">Gallery</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="(img, i) in project.gallery"
              :key="i"
              class="rounded-xl overflow-hidden aspect-video bg-[#141416]"
            >
              <img :src="img" :alt="`Screenshot ${i + 1}`" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar metadata -->
      <div class="space-y-8 lg:sticky lg:top-24 h-fit">
        <div class="rounded-2xl bg-[#141416] border border-white/[0.06] p-6 space-y-5">
          <div>
            <div class="text-[11px] font-mono uppercase tracking-wider text-white/30 mb-1">Client</div>
            <div class="text-sm text-white font-medium">{{ project.client }}</div>
          </div>
          <div>
            <div class="text-[11px] font-mono uppercase tracking-wider text-white/30 mb-1">My Role</div>
            <div class="text-sm text-white font-medium">{{ project.role }}</div>
          </div>
          <div>
            <div class="text-[11px] font-mono uppercase tracking-wider text-white/30 mb-1">Period</div>
            <div class="text-sm text-white font-medium">{{ project.period }}</div>
          </div>
          <div>
            <div class="text-[11px] font-mono uppercase tracking-wider text-white/30 mb-2">Tech Stack</div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/[0.08]"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
