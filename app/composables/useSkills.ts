import type { Skill } from '~/types'

export function useSkills() {
  const skills = ref<Skill[]>([])
  const loading = ref(false)

  async function fetchAll() {
    loading.value = true
    try {
      return skills.value
    } finally {
      loading.value = false
    }
  }

  return {
    skills,
    loading,
    fetchAll,
  }
}
