export default defineNuxtRouteMiddleware( (to, from) => {
    const tost =  useToast()
    if (to.path != '/' || to.path == '/') {
        tost.add({ title: `Moving to ${to?.name ?? to?.path}` })
    } 
})
