<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedCategory = ref<'all' | 'mobile' | 'web' | 'freelance'>('all')

const allProjects = [
  {
    id: 'laundriin',
    slug: 'laundriin',
    title: 'Laundriin — Laundry Management & POS',
    description: 'Full-featured laundry management & point-of-sale mobile app built for Cendana Laundry. Features dual roles (Admin/Staff), Bluetooth thermal printer integration, real-time Firestore sync, and WhatsApp notification relay.',
    category: 'mobile',
    techStack: ['Flutter', 'Firebase', 'BLoC', 'Bluetooth ESC/POS', 'Wablas API'],
    coverImageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'mau-coffee',
    slug: 'mau-coffee-pos',
    title: 'Mau Coffee — Point of Sale & Cash Drawer',
    description: 'Hardware-integrated POS for coffee shop chains with offline-first order queue, ESC/POS kitchen receipt printing, and automatic cash drawer trigger.',
    category: 'mobile',
    techStack: ['Flutter', 'Dio', 'Node.js', 'Express', 'ESC/POS', 'MySQL'],
    coverImageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'lpk-surya-kencana',
    slug: 'lpk-surya-kencana',
    title: 'LPK Surya Kencana — Driving School CMS',
    description: 'Company profile and admin portal for driving school client. Full freelance project from proposal to delivery — registration, scheduling, and CMS backend.',
    category: 'freelance',
    techStack: ['Laravel', 'Tailwind CSS', 'MySQL', 'Blade'],
    coverImageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile (Flutter)' },
  { id: 'freelance', label: 'Client / Freelance' },
  { id: 'web', label: 'Web Applications' },
]

const filtered = computed(() =>
  selectedCategory.value === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory.value)
)
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 pt-28 pb-24 space-y-10">
    <div class="space-y-2">
      <h1 class="text-4xl font-bold text-white">Projects</h1>
      <p class="text-white/40 max-w-xl">
        Production applications built for real clients and end-users — from mobile POS to web CMS.
      </p>
    </div>

    <!-- Category filters -->
    <div class="flex flex-wrap gap-2 pb-2 border-b border-white/[0.06]">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="selectedCategory = cat.id as any"
        class="px-4 py-1.5 rounded-full text-sm transition-colors"
        :class="selectedCategory === cat.id
          ? 'bg-white text-black font-semibold'
          : 'text-white/50 hover:text-white border border-white/10 hover:border-white/20'"
      >
        {{ cat.label }}
      </button>
    </div>

    <!-- Horizontal project list — same structure as homepage -->
    <div class="space-y-10">
      <article
        v-for="project in filtered"
        :key="project.id"
        class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 pb-10 border-b border-white/[0.06] last:border-0 last:pb-0"
      >
        <div class="rounded-2xl overflow-hidden bg-[#141416] aspect-video">
          <img
            :src="project.coverImageUrl"
            :alt="project.title"
            class="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div class="md:w-[360px] shrink-0 flex flex-col justify-between gap-6 py-1">
          <div class="space-y-3">
            <div class="text-xs font-mono text-white/30 uppercase tracking-wider">{{ project.category }}</div>
            <h2 class="text-xl font-bold text-white leading-tight">{{ project.title }}</h2>
            <p class="text-sm text-white/50 leading-relaxed">{{ project.description }}</p>

            <div class="flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/[0.08]"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            View Case Study
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>
