<script setup lang="ts">
import { ref } from 'vue'

// Accordion for experience and education — like khafidhasukma.id
const openExp = ref<number | null>(0)
const openEdu = ref<number | null>(0)

const experience = [
  {
    role: 'Mobile Developer Intern',
    company: 'Can Creative (PT Cipta Anya Nugraha)',
    period: '2023 · Semarang, Indonesia — Onsite',
    logo: null,
    description: 'Developed and maintained Flutter mobile application features. Integrated REST APIs using Dio, performed debugging and code reviews, and contributed to the product development cycle in a professional team environment.',
    tech: 'Flutter, Dart, Dio, REST API, Git',
  },
  {
    role: 'Freelance Mobile & Web Developer',
    company: 'Independent / Self-Employed',
    period: '2023 – Present · Remote',
    logo: null,
    description: 'End-to-end development of client projects including a Bluetooth-integrated POS system (Mau Coffee), a driving school CMS/company profile (LPK Surya Kencana), and the laundry management app Laundriin.',
    tech: 'Flutter, Laravel, Firebase, Node.js, MySQL, Tailwind CSS',
  },
]

const education = [
  {
    institution: 'Universitas Dian Nuswantoro (UDINUS)',
    degree: 'S1 Teknik Informatika (Computer Science)',
    period: '2024 – Present · Semarang, Indonesia',
    logo: null,
    description: 'Focusing on software engineering, mobile computing, and system architecture. Actively building real-world projects alongside coursework.',
    highlights: '',
  },
  {
    institution: 'SMKN 1 Bangsri',
    degree: 'Rekayasa Perangkat Lunak (RPL)',
    period: '2021 – 2024 · Jepara, Indonesia',
    logo: null,
    description: 'Vocational high school majoring in software engineering. Final project: Laundriin — a full-stack Flutter + Firebase laundry management app built for a real client.',
    highlights: '',
  },
]

const skills = [
  { category: 'Mobile Development', items: ['Flutter', 'Dart', 'BLoC / Cubit', 'Riverpod', 'Hive', 'Dio', 'Firebase SDK'] },
  { category: 'Hardware Integration', items: ['Bluetooth ESC/POS Thermal Printer', 'Cash Drawer Serial', 'Wablas WhatsApp API'] },
  { category: 'Backend & Web', items: ['Node.js', 'Express', 'Laravel (PHP)', 'REST API', 'MySQL', 'Firestore'] },
  { category: 'Tools & DevOps', items: ['Git & GitHub', 'VS Code', 'Android Studio', 'Postman', 'Cloudinary', 'Vercel', 'Firebase Console'] },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 pt-28 pb-24 space-y-20">
    <!-- Intro / Bio -->
    <section class="space-y-5 max-w-3xl">
      <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
        About me.
      </h1>
      <p class="text-white/50 text-base leading-relaxed">
        I'm <strong class="text-white font-semibold">Doni Aditya Pratama</strong>, a Flutter Mobile Developer based in Jepara, Jawa Tengah — currently studying Computer Science at UDINUS Semarang. I build production-grade apps: POS systems with hardware integration, real-time Firebase backends, and client-facing CMS platforms.
      </p>
      <p class="text-white/50 text-base leading-relaxed">
        My focus is on clean architecture (BLoC/Cubit), reliable state management, and shipping apps that work in the real world — not just demos.
      </p>
      <div class="flex flex-wrap gap-3 pt-2">
        <a
          href="#"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          Download CV ↓
        </a>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-white/40 transition-colors"
        >
          Get in touch →
        </NuxtLink>
      </div>
    </section>

    <!-- Skills -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold text-white">Skills & Tech Stack</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="group in skills"
          :key="group.category"
          class="space-y-2"
        >
          <div class="text-xs font-mono uppercase tracking-wider text-white/30">{{ group.category }}</div>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="item in group.items"
              :key="item"
              class="text-[12px] px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/[0.08]"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience — accordion like khafidhasukma.id -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold text-white">Experience</h2>
      <div class="space-y-2">
        <div
          v-for="(exp, i) in experience"
          :key="exp.company"
          class="rounded-2xl bg-[#141416] border border-white/[0.06] overflow-hidden"
        >
          <button
            @click="openExp = openExp === i ? null : i"
            class="w-full flex items-center justify-between gap-4 p-5 text-left"
          >
            <div class="space-y-0.5">
              <div class="text-base font-semibold text-white">{{ exp.role }}</div>
              <div class="text-sm text-white/40">at {{ exp.company }}</div>
              <div class="text-xs text-white/30 font-mono">{{ exp.period }}</div>
            </div>
            <div class="text-white/30 shrink-0 text-lg">
              {{ openExp === i ? '∧' : '∨' }}
            </div>
          </button>

          <div v-if="openExp === i" class="px-5 pb-5 border-t border-white/[0.05] pt-4 space-y-3">
            <p class="text-sm text-white/50 leading-relaxed">{{ exp.description }}</p>
            <div class="text-xs text-white/30">
              <span class="font-semibold text-white/40">Technologies:</span> {{ exp.tech }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education — same accordion pattern -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold text-white">Education</h2>
      <div class="space-y-2">
        <div
          v-for="(edu, i) in education"
          :key="edu.institution"
          class="rounded-2xl bg-[#141416] border border-white/[0.06] overflow-hidden"
        >
          <button
            @click="openEdu = openEdu === i ? null : i"
            class="w-full flex items-center justify-between gap-4 p-5 text-left"
          >
            <div class="space-y-0.5">
              <div class="text-base font-semibold text-white">{{ edu.institution }}</div>
              <div class="text-sm text-white/40">{{ edu.degree }}</div>
              <div class="text-xs text-white/30 font-mono">{{ edu.period }}</div>
            </div>
            <div class="text-white/30 shrink-0 text-lg">
              {{ openEdu === i ? '∧' : '∨' }}
            </div>
          </button>

          <div v-if="openEdu === i" class="px-5 pb-5 border-t border-white/[0.05] pt-4">
            <p class="text-sm text-white/50 leading-relaxed">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
