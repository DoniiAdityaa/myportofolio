import type { Project } from '~/types'

export function useProjects() {
  const projects = ref<Project[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchPublished() {
    loading.value = true
    try {
      // Will query Firestore status == 'published'
      return projects.value
    } finally {
      loading.value = false
    }
  }

  function subscribeRealtime() {
    // Will attach onSnapshot listener to Firestore projects collection
    return () => {}
  }

  async function create(project: Omit<Project, 'id'>) {
    // Will save document to Firestore
    return project
  }

  async function update(id: string, updates: Partial<Project>) {
    // Will update document in Firestore
  }

  async function remove(id: string) {
    // Will delete document in Firestore
  }

  return {
    projects,
    loading,
    error,
    fetchPublished,
    subscribeRealtime,
    create,
    update,
    remove,
  }
}
