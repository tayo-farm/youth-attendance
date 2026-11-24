const C='youth-att-v6',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','parch.jpg','splash.jpg','banner.jpg','group.jpg','church.jpg','icon-maskable.png','tile1.webp','tile2.webp','tile3.webp','tile4.webp','tile5.webp','tile6.webp','tile7.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))))});
