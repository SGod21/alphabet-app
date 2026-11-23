const CACHE_NAME = "letter-sounds-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./assets/examples-a-m.webp",
  "./assets/examples-n-z.webp",
  "./assets/fonts/andika.woff2",
  "./assets/fonts/nunito.woff2",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  ...Array.from({ length: 26 }, (_, i) => `./assets/audio/${String.fromCharCode(97 + i)}.mp3`),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
