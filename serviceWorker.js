const staticAssets = [
  './',
  './index.js',
  './tweets-api.js',
];

self.addEventListener('install', async () => {
  const cache = await caches.open('twitter-static');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(networkFirst(event.request));
});

const networkFirst = async (request) => {
  const cache = await caches.open('twitter-dynamic');
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
};


// const cacheData = async (request) => {
//   const cache = await caches.open('twitter-dynamic');
//   const cachedResponse = await cache.match(request);
//   if (cachedResponse) return cachedResponse;
//   return new Response('Not found', {
//     status: 404,
//     statusText: 'Not found',
//   });
// }

