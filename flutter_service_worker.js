'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "65f33e0b3ffddae7d60ada3731b3f7a9",
".git/config": "a8b750d8f26286cff838e169ce763756",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0af83906acef620fd9cef89ecbdcb336",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51dbafa7a4a359f7f01ed89eb49f710e",
".git/logs/refs/heads/gh-pages": "18bd29758521919199a0211f0f0b70de",
".git/logs/refs/heads/main": "13209735164aacedad84846d26d7309b",
".git/logs/refs/remotes/origin/gh-pages": "ff2e5b9656d0414cdfc6f8d669a390d1",
".git/logs/refs/remotes/origin/main": "bb9e5d763e9873ef77009e5d9c75e4c9",
".git/objects/03/02fe0b7a30417a11c392f29f9809b805d48601": "ea8dd08df8395a84b1a653dc57fab462",
".git/objects/03/99635aa1e9a5697fb725ead732bb9c01d07a42": "91bdc6c336ca28e4c7d318b3163dd69b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0a/aa2632b6f83f82a14d6ec27a58ea8543640b89": "cfdcd5b558920611d929d261d45600fc",
".git/objects/0f/724ae7b1df862561ca728c276ae8750f433a34": "a379a4e26b063111c52fda38e94736e4",
".git/objects/11/4054a169ac1c156d0debedde0fd78c6dc28e99": "b6596fa4d76af96923ba186482d21cd2",
".git/objects/14/0825c8f387b9b611e24ff52bb453211c3cb7d5": "ea8177443846180af46a4fc422415acd",
".git/objects/1b/aab01121850196aed81aba458e1e07a04d84b1": "1b14477ef6a3b7e850e40b91919fffc0",
".git/objects/20/29c512296bcefb5c4aa401cc5c71f1fa91d00d": "5b24d4358ee27d773967ce0d8caf34ee",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/24/db5c80399c3ba51349c0024902c5f52e6dc890": "57d771b9f705706a931515fb372ed3b8",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/33/b3c49e733a214d73456a7a5f42459d98e6366d": "6a8f162e6e77982ba7f245781de34c98",
".git/objects/35/b417a0b04ce672068211a0c3b1f51ee99a601b": "d385fc173c51cfdd80dbfeeccba87fdb",
".git/objects/3a/8e8f47c0fb59488ffb1453fd85d0411fbb058e": "4a88b8fc8cad6ca32c12ab9c287981fc",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/43/d138f1b3071896253dd6a95ca92f169e57f70f": "0d977ee8732b7fc68593d2a03409b6c3",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ac02f2f46dcbf78fe25be1992785d749ae3bf5": "8b5c03e4db0a4bf373bb3b03f6d0e766",
".git/objects/4b/ba51dc1aa19c2cbdca06e3f6ee9c557c184c4b": "39cceba14b40251c96661284bb8c3227",
".git/objects/4d/488023b7460c093580a33d046b76c8b161fcaa": "30b15ac4c28244c8d4bcad34a78f1792",
".git/objects/4f/643ef7a19d51c891885ed32ac285c9b213bc31": "05df15a8cf89ec3c3956665c84e8530a",
".git/objects/50/6f7d8426c62bbc597b74f7cabb9689e0272a9f": "09696f21b0e2813ebac493751d95483b",
".git/objects/51/725ff43c113d20b36d131483b8d9ed7ead6c5b": "ce8f776911884a42bcac771c4299b6bc",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/58/c875d9fb1c91b6e534b45bd67771c8539b4b62": "00940b225e2a0b03ea70fa3224eb70ec",
".git/objects/59/099bd1adfe7069707c87bee83c6936e090462a": "71e245928ddef06943f99df7aa4abe0d",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/e8c33aa5248e990db9e8755534ed67c75fdc33": "e79ae997c0a5200b28fd34c6f47b08fc",
".git/objects/61/6303458ce4e1d5e7a1fc8e7d02cf2b2218aab5": "4fc8d4c075b5db0a5e487b446e80b6e4",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/4ec97771123d37e98460fc2f03dd8662f70d0b": "a8616933eaa35f3b5a2a80cfba67e544",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/0115a08050359b6e4b5ab030473ed445df03d7": "35513124ca7a196718f15005bd479f13",
".git/objects/76/9abbc1da92823fa32b91094574cae357d62587": "5404aaf08ba40cf9c9e1bd1dece60264",
".git/objects/76/dcb6d55fd2b9b9f1c9603979fb6a6dd5aa97b1": "db1bcee596cba514c7e11ef8f195819f",
".git/objects/78/d9b0654f7874522c4c3164db84104d91313401": "c07b2e5b970819de3315f64b26351a56",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/7a/f916bb1868f3d58151862e7272a99b037d64c9": "6563e00480d9f07d6927c0e762811e18",
".git/objects/7b/dd48c719cb6b173c6fd46f0d09683841970744": "41088ac5a05443a1deb370871a35219d",
".git/objects/81/b28169f8795302c0d2042df3d024c949de92c6": "3adea774f60ba0b6c0d98658488925cd",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9e/9d78cbd43109a3afb6889e4c02f5147ab6c31d": "d95d0d3c259474bcf7807012346d8a12",
".git/objects/a1/32b0b09c01b112a423192652baf5011c30f79d": "f327d8409a4b8fcff04aa09551a1787d",
".git/objects/a7/aaf67b6032b045e7f697f0106b8b254cbc9981": "5896b6149eb2110b4e65e5ebdef31414",
".git/objects/a8/4af848ac46dd559c8d87a945c527cdc88c707c": "043126936bbafe06610d13dfb0c61ed2",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/cc1fb32c31b52c29b363b4aa73cd8489d96217": "ad1a61caa912e94694279b93ab7f4097",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/c2/19eb604e1511f515ae91c0d40629b726f0740a": "ff6fbfd88b15be088f6ee7dec3989ef9",
".git/objects/c2/317a369909a77dcac3053ce50d7cb9efd8ed21": "b34482b09f7d5e3978ef5fe18205a687",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/371072f9698090e5c996504c744c9e3a4acfbb": "bb495b9645a5de837106c97c88ee8d25",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/d2/6346885cd5aa4f12a6f74b79c1e789a5dc38f9": "39198b9a35615353d8a6dce49a5b2ab1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2fe4d3ff0c030199b06e5933e619771ae1a8d2": "3e27ba2c31ad0f1e9c22e1c5b3734537",
".git/objects/e4/6242735bcf1faa891eddca63a913eacf2b8478": "25643b6e7c815bee839bca6b1e265f8f",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/c673d4dc5ac29b8d13cb9cd3ed84d0d86dae0e": "bb96816c2aa795182c227faa256ee7e6",
".git/objects/ed/ef6d522c5721231f52eae0a00529dc4fbaa94f": "960b2a231fc6761b48ca558afb5cc714",
".git/objects/f1/c071ed49c56fd762ae3c6dec435debc3f75531": "700d7a6f8ef0c2fbe6cd2b5be25a5e41",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/2c312c58fac7168374fa5b94d38c4262b91ae5": "b851f192dc28cce1bb475fe0a110bb2a",
".git/objects/fe/d5a5dedbd7cd38809f8be826c7280ee0630198": "dacef56b2d6c93998eb6c52d0546d400",
".git/refs/heads/gh-pages": "c9180c1524e6c1db774ffb5694fa759e",
".git/refs/heads/main": "c1a75b3804d24eb462b3d7d009cda09d",
".git/refs/remotes/origin/gh-pages": "c9180c1524e6c1db774ffb5694fa759e",
".git/refs/remotes/origin/main": "c1a75b3804d24eb462b3d7d009cda09d",
"assets/AssetManifest.bin": "18a5e807081f9e421dcf8c8252f5b3a8",
"assets/AssetManifest.bin.json": "d735341f8df82ce352c590cc85f021e4",
"assets/AssetManifest.json": "aed463141d21ee4af52920f9c6998a40",
"assets/assets/avatar.png": "3054e608d58e250c17edc102084a927c",
"assets/assets/fonts/KronaOne-Regular.ttf": "b6738cae097914454a309ba42e34c59f",
"assets/assets/fonts/NotoSans-Bold.ttf": "2ea5e0855d5a3ec3f561b5bc62b39805",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/icon.png": "ab8781dcae0a58f36b9aea02b6b0aa90",
"assets/assets/images/arzed.png": "f1102d3f014fa22723eafdd54670b30f",
"assets/assets/images/chermione.png": "a105d0b0be7ebfe6ba1337801db2a911",
"assets/assets/images/nich.png": "c1b24e8a679f953367b5d67692cf1a41",
"assets/assets/images/rshsseal.png": "d8c1905955ed1d79cfef679e43e075c3",
"assets/FontManifest.json": "770151966dc3d3e4ef0b1af398cd0da3",
"assets/fonts/MaterialIcons-Regular.otf": "a31cd2ac8f5533da404487f898a881af",
"assets/NOTICES": "3659d0a61eadf25ddfd64fd7f3b4a3c1",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "13e85c6432b79a121d27a2c97f935e93",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2037c0c75f713b4411e8edc84b329c71",
"icons/Icon-192.png": "9a66e6ef26e97eae21829aecd37540b6",
"icons/Icon-512.png": "88a270c38c468b17fbca719a227d23dc",
"index.html": "017c15375bb27fceebf52d4c99de164a",
"/": "017c15375bb27fceebf52d4c99de164a",
"main.dart.js": "338653f597e814ec249070c1f199a7aa",
"manifest.json": "7c6dd435b7b629d7232eb8b97b0b97b0",
"version.json": "6103841852a1e2b05850f8438a981466"};
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
