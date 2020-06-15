import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

registerRoute(
  (event) =>
    event.request.destination === 'script' ||
    event.request.destination === 'style' ||
    event.url.pathname === '/',
  new StaleWhileRevalidate()
);
