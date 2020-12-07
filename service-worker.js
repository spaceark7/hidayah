importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

  workbox.precaching.precacheAndRoute([
    //   {url: '/index.html', revision: '3'},
    //   {url: '/nav.html', revision: '1'},
    //   {url: '/manifest.json', revision: '1'},
    //   {url: '/logo144.png', revision: '1'},
    //   {url: '/logo192.png', revision: '1'},
    //   {url: '/logo256.png', revision: '1'},
    //   {url: '/logo512.png', revision: '1'},
    //   {url: '/index.css', revision: '2'},
  ])

  workbox.routing.registerRoute(
      new RegExp('/pages/'),
      workbox.strategies.staleWhileRevalidate({
          cacheName: 'pages'
      })
  );

  workbox.routing.registerRoute(
    new RegExp('/js/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'js'
    })
);
workbox.routing.registerRoute(
    new RegExp('/styles/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'styles'
    })
);
workbox.routing.registerRoute(
    new RegExp('/assets/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'assets'
    })
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );
