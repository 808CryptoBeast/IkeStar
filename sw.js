/* ══════════════════════════════════════════════════════════
   IkeStar Service Worker — offline-first PWA
   Cache strategy:
     • Static shell  → cache-first
     • Supabase API  → network-first (fresh data, fall back to cache)
     • External CDN  → network-first
══════════════════════════════════════════════════════════ */

const CACHE = 'ikestar-v22';

const PRECACHE = [
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/data/stars.js',
  '/data/rich-data.js',
  '/data/cultures.js',
  '/data/learn-modules.js',
  '/data/cultural-extensions.js',
  '/data/moon-knowledge.json',
  '/data/moon-nights.csv',
  '/manifest.json',
  '/robots.txt',
  '/assets/images/ikestarP.png',
  '/assets/images/ikestar.png',
  '/assets/images/iwa-middle.png',
  '/assets/images/hawaiian-star-compass.png',
  '/assets/images/badges/intro-sky.svg',
  '/assets/images/badges/hawaiian-map.svg',
  '/assets/images/badges/moon-wayfinding.svg',
  '/assets/images/badges/formation-practice.svg',
  '/assets/images/badges/knowledge-care.svg',
  '/assets/images/badges/star-lines.svg',
  '/assets/images/badges/seasonal-sky.svg',
  '/assets/images/badges/kemet-sky.svg',
  '/assets/images/badges/kemet-stars.svg',
  '/assets/images/badges/kemet-decans.svg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => {
      // Individually cache — don't let one 404 kill the install
      return Promise.allSettled(PRECACHE.map(url => c.add(url)));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Network-first for Supabase, fonts, CDN resources
  if (
    url.includes('supabase.co') ||
    url.includes('fonts.googleapis.com') ||
    url.includes('fonts.gstatic.com') ||
    url.includes('cdnjs.cloudflare.com')
  ) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for everything else (app shell, assets)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      });
    })
  );
});
