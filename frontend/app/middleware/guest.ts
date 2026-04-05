export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie('auth_token')
  
  if (authToken.value) {
    return navigateTo('/')
  }
})
