const staticAssets = [
  './',
  './index.js',
  './tweets-api.js',
  './images/icons/icon-192x192.png',
  './images/icons/icon-256x256.png',
  './images/icons/icon-384x384.png',
  './images/icons/icon-512x512.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css',
];

const tweets_url = 'https://6459a3698badff578e117409.mockapi.io/tweets';

self.addEventListener('install', async () => {
  const cache = await caches.open('twitter-cache');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(networkFirst(event.request));
});

const networkFirst = async (request) => {
  const cache = await caches.open('twitter-cache');
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
};
