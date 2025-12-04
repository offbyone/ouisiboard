const CACHE_NAME = 'grid-randomizer-v1';

// Dynamically determine base path from service worker scope
const getBasePath = () => {
    const scope = self.registration.scope;
    const url = new URL(scope);
    return url.pathname;
};

// Get assets with proper base path
const getAssets = () => {
    const basePath = getBasePath();
    return [
        basePath,
        `${basePath}index.html`,
        `${basePath}manifest.json`
    ];
};

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(getAssets()))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                
                return fetch(event.request).then(response => {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                });
            })
            .catch(() => {
                // Return index.html for offline fallback
                const basePath = getBasePath();
                return caches.match(`${basePath}index.html`);
            })
    );
});
