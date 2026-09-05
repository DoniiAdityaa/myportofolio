import type { Message } from '~/types'

export function useMessages() {
  const messages = ref<Message[]>([])
  const sending = ref(false)
  const loading = ref(false)

  async function sendMessage(data: { name: string; email: string; message: string }) {
    sending.value = true
    try {
      // In Phase 1/3: will write to Firestore and call server/api/contact-notify
      console.log('Sending message:', data)
      return { success: true }
    } finally {
      sending.value = false
    }
  }

  return {
    messages,
    sending,
    loading,
    sendMessage,
  }
}
