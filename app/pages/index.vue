<script setup lang="ts">
// Hero + Featured Projects + Contact CTA — following khafidhasukma.id structure

const featuredProjects = [
  {
    id: 'laundriin',
    slug: 'laundriin',
    title: 'Laundriin — Laundry Management & POS',
    description: 'Full-featured laundry management & point-of-sale mobile app built for Cendana Laundry. Features dual roles (Admin/Staff), Bluetooth thermal printer integration (58mm/80mm ESC/POS), real-time Firestore sync, income analytics charts, and WhatsApp customer notification relay via Wablas API.',
    techStack: ['Flutter', 'Firebase', 'BLoC', 'Bluetooth ESC/POS', 'Wablas API'],
    coverImageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'mau-coffee',
    slug: 'mau-coffee-pos',
    title: 'Mau Coffee — Point of Sale & Cash Drawer',
    description: 'Hardware-integrated POS for coffee shop chains with offline-first order queue, ESC/POS kitchen receipt printing, and automatic cash drawer trigger via serial port. Backend built on Node.js/Express with REST API consumed by Flutter client using Dio.',
    techStack: ['Flutter', 'Dio', 'Node.js', 'Express', 'ESC/POS', 'MySQL'],
    coverImageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'lpk-surya-kencana',
    slug: 'lpk-surya-kencana',
    title: 'LPK Surya Kencana — Driving School CMS',
    description: 'Company profile and admin portal for a driving school client (Pak Azzam). Features registration management, scheduling, package pricing pages, and a custom CMS backend built with Laravel. Full freelance project from proposal to delivery.',
    techStack: ['Laravel', 'Tailwind CSS', 'MySQL', 'Blade'],
    coverImageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section — full viewport, large bold type -->
    <section class="min-h-[88vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-16">
      <!-- Subtle ambient glow from top (like the reference) -->
      <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-3xl rounded-full pointer-events-none" aria-hidden="true"></div>

      <div class="space-y-6 max-w-4xl">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-white">
          Hi there, I'm a Flutter<br />Mobile Developer with<br />
          <span class="text-white/50">real product experience.</span>
        </h1>

        <p class="text-lg text-white/50 max-w-2xl leading-relaxed">
          Built production apps with hardware integration (Bluetooth printers, cash drawers), BaaS architecture (Firebase), and clean state management (BLoC/Cubit). Based in Jepara, Indonesia.
        </p>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            See my work →
          </NuxtLink>

          <a
            href="#"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Projects — horizontal cards exactly like reference -->
    <section class="max-w-5xl mx-auto px-6 pb-24 space-y-5">
      <div class="space-y-1 mb-10">
        <h2 class="text-3xl font-bold text-white">Featured Projects</h2>
        <p class="text-white/40 text-sm max-w-xl">
          A selection of production mobile and web applications built for real clients.
        </p>
      </div>

      <!-- Horizontal project card: large image left, text right -->
      <article
        v-for="project in featuredProjects"
        :key="project.id"
        class="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 pb-12 border-b border-white/[0.06] last:border-0 last:pb-0"
      >
        <!-- Cover image — large, rounded -->
        <div class="rounded-2xl overflow-hidden bg-[#141416] aspect-video">
          <img
            :src="project.coverImageUrl"
            :alt="project.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Text content -->
        <div class="md:w-[380px] shrink-0 flex flex-col justify-between gap-6 py-1">
          <div class="space-y-3">
            <h3 class="text-xl font-bold text-white leading-tight">
              {{ project.title }}
            </h3>
            <p class="text-sm text-white/50 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tech stack icon-like badges -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/8"
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

      <div class="pt-4">
        <NuxtLink
          to="/projects"
          class="text-sm text-white/40 hover:text-white transition-colors"
        >
          View all projects →
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
