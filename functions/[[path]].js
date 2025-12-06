addEventListener('fetch', event => {
  event.respondWith(
    new Response(null, { status: 410 })
  );
});
