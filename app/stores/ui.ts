import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const theme = ref<'dark' | 'light'>('dark')
  const isSidebarOpen = ref(false)

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return {
    theme,
    isSidebarOpen,
    toggleSidebar,
    toggleTheme,
  }
})
