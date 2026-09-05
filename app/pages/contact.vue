<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

async function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMessage.value = 'Please fill out all fields.'
    return
  }
  isSubmitting.value = true
  errorMessage.value = ''
  try {
    await new Promise(resolve => setTimeout(resolve, 800))
    submitted.value = true
    form.value = { name: '', email: '', message: '' }
  } catch (err: any) {
    errorMessage.value = err.message || 'Failed to send message.'
  } finally {
    isSubmitting.value = false
  }
}

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/DoniiAdityaa', value: 'github.com/DoniiAdityaa' },
  { label: 'LinkedIn', href: 'https://linkedin.com', value: 'linkedin.com/in/doniaditya' },
  { label: 'WhatsApp', href: 'https://wa.me/62', value: '+62 (WhatsApp)' },
  { label: 'Email', href: 'mailto:doniaditya@example.com', value: 'doniaditya@example.com' },
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 pt-28 pb-24 space-y-16">
    <!-- Header -->
    <div class="space-y-3 max-w-2xl">
      <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        Let's work together.
      </h1>
      <p class="text-white/50 leading-relaxed">
        Available for Flutter development roles and freelance collaborations. Feel free to reach out.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
      <!-- Contact Form -->
      <div class="space-y-5">
        <!-- Success state -->
        <div
          v-if="submitted"
          class="p-5 rounded-2xl bg-white/5 border border-white/10 text-sm text-white/70"
        >
          ✓ Message sent. I'll get back to you soon.
        </div>

        <div
          v-if="errorMessage"
          class="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-white/60"
        >
          {{ errorMessage }}
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-white/30 mb-2">Name</label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              placeholder="Your full name"
              class="w-full px-4 py-3 rounded-xl bg-[#141416] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/20 transition-colors"
              required
            />
          </div>

          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-white/30 mb-2">Email</label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              placeholder="name@company.com"
              class="w-full px-4 py-3 rounded-xl bg-[#141416] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/20 transition-colors"
              required
            />
          </div>

          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-white/30 mb-2">Message</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              rows="5"
              placeholder="Tell me about your project or inquiry..."
              class="w-full px-4 py-3 rounded-xl bg-[#141416] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/20 transition-colors resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 disabled:opacity-50 transition-colors"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message →' }}
          </button>
        </form>
      </div>

      <!-- Social / contact links -->
      <div class="space-y-3">
        <div class="text-xs font-mono uppercase tracking-wider text-white/30 mb-4">Find me on</div>
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="flex items-center justify-between p-4 rounded-xl bg-[#141416] border border-white/[0.06] hover:border-white/15 transition-colors group"
        >
          <div class="space-y-0.5">
            <div class="text-xs font-mono uppercase tracking-wider text-white/30">{{ link.label }}</div>
            <div class="text-sm text-white group-hover:text-white/80 transition-colors">{{ link.value }}</div>
          </div>
          <span class="text-white/20 group-hover:text-white/60 transition-colors text-sm">↗</span>
        </a>
      </div>
    </div>
  </div>
</template>
