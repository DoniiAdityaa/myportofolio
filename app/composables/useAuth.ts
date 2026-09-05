import { useAuthStore } from '~/stores/auth'

export function useAuth() {
  const authStore = useAuthStore()

  // Skeletons for Phase 1
  async function login(email: string, password: string) {
    // Will be fully hooked with Firebase Auth signInWithEmailAndPassword in Phase 1
    console.log('Login attempt for:', email)
  }

  async function logout() {
    // Will be hooked with Firebase Auth signOut in Phase 1
    authStore.setUser(null)
    await navigateTo('/admin/login')
  }

  return {
    user: computed(() => authStore.user),
    loading: computed(() => authStore.loading),
    isAuthenticated: computed(() => authStore.isAuthenticated),
    login,
    logout,
  }
}
