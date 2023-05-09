const staticAssets = [
  './',
  './index.js',
  './tweets-api.js',
  './firebase-config.js',
];

self.addEventListener('install', async () => {
  const cache = await caches.open('twitter-static');
  cache.addAll(staticAssets);
});



const wena = async (event) => {
  console.log(event.request.url)
  if (event.request.method !== 'GET') return;
  const cache = await caches.open('twitter-dynamic');
  try {
    const { request } = event;
    const response = await fetch(request);
    const responseCloned = response.clone();
    await cache.put(request, responseCloned);
    return responseCloned;
  }
  catch (error) {
    console.log(error)
    const cachedResponse = await cache.match(event.request);
    // event.respondWith(cachedResponse);
    return cachedResponse;
  }
}

self.addEventListener('fetch', wena);