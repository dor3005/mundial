self.addEventListener('push', function(event) {
  var data = event.data ? event.data.json() : {};
  var title = data.title || 'Fantasy World Cup 2026';
  var body = data.body || 'Match starting soon!';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/26bd.png'
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/mundial/'));
});
