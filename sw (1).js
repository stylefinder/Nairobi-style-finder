// Minimal service worker: lets the phone treat the site as an installable app.
// It does not cache anything, so updates on GitHub always show up straight away.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
