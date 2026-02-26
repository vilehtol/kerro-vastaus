// Service Worker — auto-updating PWA
// !! Bump this version string every deploy to trigger SW update !!
const CACHE_NAME = 'visa-v2.1-' + new Date().toISOString().slice(0,10);
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './questions.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install — cache core assets, activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force activation immediately
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Activate — clean old caches, take control immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim()) // Take control of all pages immediately
  );
});

// Fetch — network-first for pages/scripts (fresh content), cache-first for images
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Images: cache-first (they rarely change)
  if (url.pathname.endsWith('.png') || url.pathname.endsWith('.ico')) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => cached || fetch(event.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return resp;
        }))
    );
    return;
  }

  // Everything else (HTML, JS, CSS): network-first → cache fallback
  event.respondWith(
    fetch(event.request)
      .then(resp => {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return resp;
      })
      .catch(() => caches.match(event.request))
  );
});
