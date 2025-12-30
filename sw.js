const CACHE_NAME = "thermostat-cache-v2";
const urlsToCache = ["./","./index.html","./style.css","./manifest.json","./thermostat.png"];

self.addEventListener("install", event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)));
});

self.addEventListener("activate", event=>{
  event.waitUntil(caches.keys().then(cacheNames=>{
    return Promise.all(cacheNames.map(cacheName=>{
      if(cacheName!==CACHE_NAME) return caches.delete(cacheName);
    }));
  }));
});

self.addEventListener("fetch", event=>{
  event.respondWith(caches.match(event.request).then(response=>{
    return response || fetch(event.request);
  }).catch(()=>{
    if(event.request.destination==="document") return caches.match("./index.html");
  }));
});
