export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()

  // Guard all /admin routes except the login page
  if (!isAuthenticated.value && to.path !== '/admin/login') {
    return navigateTo('/admin/login')
  }
})
