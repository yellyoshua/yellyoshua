import router from './router'

addEventListener('fetch', (event) => {
  switch (event.request.method) {
    case "GET":
      return event.respondWith(router.get.InstanceRouter(event.request))
    default:
      return event.respondWith(new Response(JSON.stringify({}), { status: 500 }))
  }
})
