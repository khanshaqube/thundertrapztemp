'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8634a2157bf562abc59c1bac3a59646a",
"version.json": "f2a0ce571992eef5364976372244e110",
"splash/img/light-2x.png": "6969fdd0ba2c87be5457965f58c4862b",
"splash/img/branding-4x.png": "3a038326a9db25dfd9dd5ce307275480",
"splash/img/dark-4x.png": "cdcb5121623368dd3f0038bcdf9dac79",
"splash/img/branding-dark-1x.png": "3494b0311a982a095cd6bc9ed3112138",
"splash/img/light-3x.png": "314ef103cffc49e497e86fce13d70b5b",
"splash/img/dark-3x.png": "314ef103cffc49e497e86fce13d70b5b",
"splash/img/light-background.png": "36bfb8cbf9125ef96b8248e29454a06a",
"splash/img/light-4x.png": "cdcb5121623368dd3f0038bcdf9dac79",
"splash/img/branding-2x.png": "bac533e58b7143d76d3823c5c5c4184e",
"splash/img/branding-3x.png": "82fd1ea932fc90b17eb6166b591447b2",
"splash/img/dark-2x.png": "6969fdd0ba2c87be5457965f58c4862b",
"splash/img/dark-1x.png": "5b5a6ac751169c7837351f54cd17cf79",
"splash/img/branding-dark-4x.png": "3a038326a9db25dfd9dd5ce307275480",
"splash/img/branding-1x.png": "3494b0311a982a095cd6bc9ed3112138",
"splash/img/branding-dark-2x.png": "bac533e58b7143d76d3823c5c5c4184e",
"splash/img/light-1x.png": "5b5a6ac751169c7837351f54cd17cf79",
"splash/img/branding-dark-3x.png": "82fd1ea932fc90b17eb6166b591447b2",
"index.html": "db22408c96b0106e189c142a6913b9c6",
"/": "db22408c96b0106e189c142a6913b9c6",
"main.dart.js": "b9073686b2ff9559ca976e3b0cac0f57",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3a0725e6df23246d7549c543bb6491ef",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83d3ff493328493abc1d5756968aa3e6",
"assets/AssetManifest.json": "9a99930fc691cc9eda6297da25adfcd1",
"assets/NOTICES": "d98201d5f74d60c59a3a1d9a280bbd5d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4932b27bac362d21ba781b53e2cd6b2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a5127076df9b949880bd333710531167",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "de5c5a64dfd15a4aba0141f198aa56c9",
"assets/fonts/MaterialIcons-Regular.otf": "f53d12a38dc47f6db2721bb85f546aa5",
"assets/assets/images/banner.png": "067fe2ab3705f8641e50b6c05bee9b25",
"assets/assets/images/banner2.png": "6212fe05ceeaf912e6ba3ea0a228a49f",
"assets/assets/images/zipper.png": "5f80f7fb852bce1f0f7ec80f2eef39da",
"assets/assets/images/pro3.png": "f5cc02fccca09fb57ff0953889437b9b",
"assets/assets/images/pro2.png": "293d74cad655ff44c9efc7c94d0dc330",
"assets/assets/images/drop.png": "00c0f39413f3d8425a1ab5d3f4ece42c",
"assets/assets/images/pro1.png": "989b83baf6ebd4d96ad83cf0f17ad6a6",
"assets/assets/images/logo.png": "d0ab85f309a45ba08625532bb2c4e70c",
"assets/assets/images/pro4.png": "e187a3cbc734aaa6454964576be4f540",
"assets/assets/images/hoodie.png": "f91116fa89108c15b282b2edfb031370",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
