
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('con-los-manes-cache').then(function(cache) {
      return cache.addAll([
        './con-radio-IMPACTO-PWA.html',
        './manifest.json',
        './'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
