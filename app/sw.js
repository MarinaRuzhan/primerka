// Хранит файлы приложения на устройстве, чтобы оно открывалось без интернета.
// При изменении файлов поднять номер версии — иначе останется старая копия.
const CACHE = "primerka-v23";
const FILES = ["./", "index.html", "styles.css", "app.js", "data.js", "data-more.js", "sim-pr.js", "sim-vet.js", "sim-chef.js", "sim-screenwriter.js", "sim-director.js", "sim-lawyer.js", "sim-event.js", "sim-teacher.js", "path.js", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "img/sim-vet.webp", "img/sim-pr.webp", "img/sim-chef.webp", "img/sim-screenwriter.webp", "img/sim-director.webp", "img/sim-lawyer.webp", "img/sim-event.webp", "img/sim-teacher.webp"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Сначала сеть, при её отсутствии — сохранённая копия.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
