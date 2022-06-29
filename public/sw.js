self.addEventListener('install', (e) => {
    console.log('service worker installed')
})

self.addEventListener('activate', () => {
    console.log('service worker activate')
})

self.addEventListener('fetch', (e) => {
    console.log(e)
})