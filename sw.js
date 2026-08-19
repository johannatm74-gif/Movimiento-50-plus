const C='movimiento50-v8';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll([
'./','./index.html','./manifest.json',
'./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'
]))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
