import type { Certificate } from '~/types'

export function useCertificates() {
  const certificates = ref<Certificate[]>([])
  const loading = ref(false)

  async function fetchAll() {
    loading.value = true
    try {
      // Will fetch from Firestore certificates collection
      return certificates.value
    } finally {
      loading.value = false
    }
  }

  return {
    certificates,
    loading,
    fetchAll,
  }
}
