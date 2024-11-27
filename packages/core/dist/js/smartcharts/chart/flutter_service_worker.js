'use strict';
const MANIFEST = 'flutter-app-manifest',
    TEMP = 'flutter-temp-cache',
    CACHE_NAME = 'flutter-app-cache',
    RESOURCES = {
        'flutter.js': '6fef97aeca90b426343ba6c5c9dc5d4a',
        'main.dart.js': '86306cf1def8ebf5d9f449ce3a52411a',
        'assets/FontManifest.json': '50e28f4726b6e4cef4bb1eaa108985e1',
        'assets/AssetManifest.bin': '2bf9218a7b37ecb8efb9058783ad5e6e',
        'assets/fonts/IBMPlexSans-Regular.woff2': '4bb247144b2962b752857093491454e7',
        'assets/fonts/IBMPlexSans-Bold.woff2': '19210a59bf50a6ba73fa97433170b4cf',
        'assets/fonts/MaterialIcons-Regular.otf': 'b7c7899338ce6057edb5c3ea0b9ab361',
        'assets/packages/deriv_chart/assets/icons/icon_placeholder.png': '23e9167e0fd2be2b618b589ed8401a1a',
        'assets/packages/deriv_chart/assets/icons/symbols/jd25.png': 'cd01e3e8b4b6c125df94e0d264da0b22',
        'assets/packages/deriv_chart/assets/icons/symbols/dshusd.png': 'd5e83cc9d822d803830d238f28357b9b',
        'assets/packages/deriv_chart/assets/icons/symbols/crydshusd.png': 'd1b4a516dbf4bf2a01f781e4bdd340af',
        'assets/packages/deriv_chart/assets/icons/symbols/frxeurchf.png': '1a66826ef57b967efeb3e67673609eac',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_fchi.png': 'ab5ad3ff51b8cd40b533f36731b31dc9',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_ndx.png': '024822877caaae778907d7e0a8bd23cc',
        'assets/packages/deriv_chart/assets/icons/symbols/frxusdsek.png': 'de4d5275c29f934ade5b7528186aafa2',
        'assets/packages/deriv_chart/assets/icons/symbols/crash1000.png': 'c395945dc308c217c0297de8456b99ba',
        'assets/packages/deriv_chart/assets/icons/symbols/boom300n.png': '99ef1bfce27f82daddd9afd1b369c869',
        'assets/packages/deriv_chart/assets/icons/symbols/eosusd.png': 'c1ab7f666c4bc67dfa6cccf9746165d1',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz250v.png': '29cf175d192812b50c29135b62663d12',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_sx5e.png': '32025efa989108bf7a08050d8319aa1d',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz150v.png': '3740f1b30922d9b1bcf242484e1f6756',
        'assets/packages/deriv_chart/assets/icons/symbols/frxgbpnok.png': 'b8c7d9f5574f84e68351fb8a139408f0',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_dji.png': 'faa508c0bfd406385ab03605d881b3c6',
        'assets/packages/deriv_chart/assets/icons/symbols/bnbusd.png': '3d5b95e1f0195528fc798ea8be00ca14',
        'assets/packages/deriv_chart/assets/icons/symbols/jd50.png': '8e492b906a94357dbf50db14385c527a',
        'assets/packages/deriv_chart/assets/icons/symbols/cryxrpusd.png': '5d0c030de1adb482f7796945ae149117',
        'assets/packages/deriv_chart/assets/icons/symbols/crybtcusd.png': '02fb37d758a94ce064225cc50345ea93',
        'assets/packages/deriv_chart/assets/icons/symbols/frxusdnok.png': 'd957fdfa55248112e72ee6eb0ad166b7',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_n225.png': '580d5ca62d48d9b7e345c4b1c7d3ddba',
        'assets/packages/deriv_chart/assets/icons/symbols/jd150.png': '3e60df618ae2f598dd50e0488b075861',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz200v.png': '07beabc8c1e3db87cc1a85a1c95d0aee',
        'assets/packages/deriv_chart/assets/icons/symbols/frxxagusd.png': '3e87df9dd6cc2fc9cfc9871e0c624465',
        'assets/packages/deriv_chart/assets/icons/symbols/frxxpdusd.png': 'a0e35bd0c63db9ba0c421a236a06e76a',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz75v.png': '00e0249936eeb2d0b6bef1eef367e1bd',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_hsi.png': '188c16a5fd0aaf5549cb4b699cebd56d',
        'assets/packages/deriv_chart/assets/icons/symbols/frxusdpln.png': 'd980230b5ea98c9b5d002a3cb8c84c13',
        'assets/packages/deriv_chart/assets/icons/symbols/boom1000.png': '658219fb4846c9733a1aaf1b6196eafd',
        'assets/packages/deriv_chart/assets/icons/symbols/jd200.png': '71c8b672dafa03ff61e437067bda3145',
        'assets/packages/deriv_chart/assets/icons/symbols/r_10.png': '1b9cb2c68df961025c42572a2034add9',
        'assets/packages/deriv_chart/assets/icons/symbols/r_25.png': '8ca61698280cfcf332914b2a47626b38',
        'assets/packages/deriv_chart/assets/icons/symbols/cryethusd.png': 'd4520def9dba50f3758cbe869db8ce0f',
        'assets/packages/deriv_chart/assets/icons/symbols/frxaudcad.png': '827bb3e47b0e64ddbf1bb5ae61a01033',
        'assets/packages/deriv_chart/assets/icons/symbols/jd75.png': '9b1491e264dff3e6331059975fa69d4b',
        'assets/packages/deriv_chart/assets/icons/symbols/frxeurgbp.png': '64f2f86f9299d5408e355711023eca39',
        'assets/packages/deriv_chart/assets/icons/symbols/frxgbpchf.png': '226b953b636290e10055d14bca9b5bc0',
        'assets/packages/deriv_chart/assets/icons/symbols/r_100.png': '5ae8eea5b3daa45c76ce1caf01d2acfc',
        'assets/packages/deriv_chart/assets/icons/symbols/rdbear.png': '9f8e0320e8ece5613c760e5f19a8ed8e',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_as51.png': '2d461c07e758cec3817d4981d7dcbb4f',
        'assets/packages/deriv_chart/assets/icons/symbols/ltcusd.png': '49c0bf02c99cc70f164329d4c794b884',
        'assets/packages/deriv_chart/assets/icons/symbols/frxaudchf.png': '774fdfbacb2fb4d90515ce21b60d6df2',
        'assets/packages/deriv_chart/assets/icons/symbols/r_50.png': '1d4f5fe7ecf5377a2e02235452917745',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_aex.png': '64a73c5aaa260a3602a1ca15dea3dd20',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_gdaxi.png': '795474c76bbb1467d97e98ab728e4d29',
        'assets/packages/deriv_chart/assets/icons/symbols/wldeur.png': 'a03b5ef547219641244d7951fe0717b3',
        'assets/packages/deriv_chart/assets/icons/symbols/frxbrousd.png': 'db8cdc3fb067e7ede3c34671f4729c06',
        'assets/packages/deriv_chart/assets/icons/symbols/frxeurusd.png': '87d65825df117aa6320059e251870c85',
        'assets/packages/deriv_chart/assets/icons/symbols/stprng.png': '8a611a865ca787d7ee0e010928a1cb59',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz50v.png': '40eb9bc93e6e7feedbd74bfcf1683109',
        'assets/packages/deriv_chart/assets/icons/symbols/ethusd.png': 'bcdd0cd2cfcaa223c3d4ccef318fd503',
        'assets/packages/deriv_chart/assets/icons/symbols/frxgbpcad.png': 'be914c3dd3192d404b79e5f7d3f943f9',
        'assets/packages/deriv_chart/assets/icons/symbols/frxgbpaud.png': 'b093bacf9b6b37256cbb7454d5c0c618',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz10v.png': '33928dfb84047f43a7f4a1c4965fdc47',
        'assets/packages/deriv_chart/assets/icons/symbols/btcusd.png': '822ecfb1d3138c3b30c08d8de090c3b5',
        'assets/packages/deriv_chart/assets/icons/symbols/frxusdchf.png': '73c02e4807d10f708314a493f0e68a95',
        'assets/packages/deriv_chart/assets/icons/symbols/frxnzdusd.png': 'bc348f3842a0451f56bd8bb3e734204b',
        'assets/packages/deriv_chart/assets/icons/symbols/frxusdjpy.png': '2a27170f100f619036d79e164566e005',
        'assets/packages/deriv_chart/assets/icons/symbols/wldxau.png': 'b2ce679571222597252272b0e06ce6fc',
        'assets/packages/deriv_chart/assets/icons/symbols/frxnzdjpy.png': 'f7e9bdd69b05f1e03f0639d159d00a71',
        'assets/packages/deriv_chart/assets/icons/symbols/zecusd.png': '0585b34fb4febfffa9d61cb1c95e9f55',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_spc.png': '88a8304d175de2a69aea8e3a14072ec2',
        'assets/packages/deriv_chart/assets/icons/symbols/frxgbpusd.png': '8e568a6f779c412f5cd1baf6c3e3aa5a',
        'assets/packages/deriv_chart/assets/icons/symbols/frxeuraud.png': '74165ef668f66beabacb69e6e475b43d',
        'assets/packages/deriv_chart/assets/icons/symbols/xrpusd.png': '3c1edf55f4b1e20ac79ef9eeb0171545',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz100v.png': '748c68b512a4829ed27c6a2091007188',
        'assets/packages/deriv_chart/assets/icons/symbols/crybchusd.png': 'e61eedb43a2f79f2c2c8b4c892c5f5fc',
        'assets/packages/deriv_chart/assets/icons/symbols/frxeurjpy.png': 'aeb0d0b3064206ade4551fb584fa28aa',
        'assets/packages/deriv_chart/assets/icons/symbols/frxaudnzd.png': '8a0984ff7646f0d9b97496bb4e8099a8',
        'assets/packages/deriv_chart/assets/icons/symbols/r_75.png': 'f4eb1ee786942ebbb7e848110908f7fb',
        'assets/packages/deriv_chart/assets/icons/symbols/boom500.png': '528b46320ba6105fe33d26fe3449c915',
        'assets/packages/deriv_chart/assets/icons/symbols/frxxptusd.png': '547157baf2cb6a7e59dceb47e7a64af7',
        'assets/packages/deriv_chart/assets/icons/symbols/bchusd.png': '1433535ddc1ae0fec062c6cc8e5840d6',
        'assets/packages/deriv_chart/assets/icons/symbols/frxeurcad.png': 'dbfeb90340a097fac57fe24e439d57d8',
        'assets/packages/deriv_chart/assets/icons/symbols/frxxauusd.png': 'cbb4e956663bc0b6b98c57d1cac9068e',
        'assets/packages/deriv_chart/assets/icons/symbols/rdbull.png': '12af5d77b14beee08abe5e393c1a7ad7',
        'assets/packages/deriv_chart/assets/icons/symbols/cryxmrusd.png': '272edb110a2628fc60d2fb0bd237cc50',
        'assets/packages/deriv_chart/assets/icons/symbols/frxaudjpy.png': '605d3cdb4e33aa0730a52749583e2d62',
        'assets/packages/deriv_chart/assets/icons/symbols/frxgbpjpy.png': '42bb921c4580882c07be30471ae97372',
        'assets/packages/deriv_chart/assets/icons/symbols/xmrusd.png': 'ecdce25fe2272992147875c80aa5564c',
        'assets/packages/deriv_chart/assets/icons/symbols/wldaud.png': '8b616a51d3c5a4bcc380fba175e00c41',
        'assets/packages/deriv_chart/assets/icons/symbols/crash500.png': '39f28e0d0a27526cf64341020c9cd9e9',
        'assets/packages/deriv_chart/assets/icons/symbols/cryzecusd.png': 'ea36d64aa57f4e1d44bc9c5ce9284ad9',
        'assets/packages/deriv_chart/assets/icons/symbols/wldusd.png': '3b8ed9884c5d71e58676115ee69a0810',
        'assets/packages/deriv_chart/assets/icons/symbols/frxusdcad.png': 'e8c3bf13c091879e68111700e9ec74e6',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz25v.png': '15ac231c2c2bb0fa05dd91bb5e242799',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_ssmi.png': '1561a92a36989a64f85c7221384c4957',
        'assets/packages/deriv_chart/assets/icons/symbols/frxeurnzd.png': '5e6997f168d3f146c492d0eed9503b0b',
        'assets/packages/deriv_chart/assets/icons/symbols/crash300n.png': '811fe625af9befa1eb3116fe170da9d5',
        'assets/packages/deriv_chart/assets/icons/symbols/frxusdmxn.png': 'f08040e1eefd9b94d74982301d7e4713',
        'assets/packages/deriv_chart/assets/icons/symbols/crybnbusd.png': '372740ee2ae319f26fde7ef7a81ac359',
        'assets/packages/deriv_chart/assets/icons/symbols/frxgbpnzd.png': 'cb7dd4cdb203d45e80e4faaf5e940217',
        'assets/packages/deriv_chart/assets/icons/symbols/wldgbp.png': '4959c5698faf8daf0ce9704ffd5ab1eb',
        'assets/packages/deriv_chart/assets/icons/symbols/jd100.png': '7f92baac7278160fe76f6f4048205ee8',
        'assets/packages/deriv_chart/assets/icons/symbols/cryltcusd.png': 'd961cacac37de35b0c6f9d4fc55b7a1a',
        'assets/packages/deriv_chart/assets/icons/symbols/1hz300v.png': '866689205aabb376470a4e98a2be9736',
        'assets/packages/deriv_chart/assets/icons/symbols/cryeosusd.png': '43ae4baee03d269a0b9fb525781173b9',
        'assets/packages/deriv_chart/assets/icons/symbols/otc_ftse.png': '73b5bf8e5ec68efee95e5db958098f79',
        'assets/packages/deriv_chart/assets/icons/symbols/jd10.png': '5827fe4e43bff971d2c3291e207ee8d7',
        'assets/packages/deriv_chart/assets/icons/symbols/frxaudusd.png': '028051074b041db767963ab238dc3cd1',
        'assets/NOTICES': 'ae673e3c6f37a02d5ff96807fdd34112',
        'assets/shaders/ink_sparkle.frag': 'f8b80e740d33eb157090be4e995febdf',
        'assets/AssetManifest.json': '9a02250ad6559e336bd5638d410d1b18',
        'index.html': '0a79b52e8e95417f5c25929de5b2b848',
        '/': '0a79b52e8e95417f5c25929de5b2b848',
        'manifest.json': 'a06b13fcde5dfd1e240278072e116d12',
        'canvaskit/canvaskit.js': '76f7d822f42397160c5dfc69cbc9b2de',
        'canvaskit/chromium/canvaskit.js': '8c8392ce4a4364cbb240aa09b5652e05',
        'canvaskit/chromium/canvaskit.wasm': 'fc18c3010856029414b70cae1afc5cd9',
        'canvaskit/skwasm.js': '1df4d741f441fa1a4d10530ced463ef8',
        'canvaskit/canvaskit.wasm': 'f48eaf57cada79163ec6dec7929486ea',
        'canvaskit/skwasm.wasm': '6711032e17bf49924b2b001cef0d3ea3',
        'canvaskit/skwasm.worker.js': '19659053a277272607529ef87acf9d8a',
        'favicon.png': '5dcef449791fa27946b3d35ad8803796',
        'version.json': '1756499d77011c0be564a414e567db76',
    },
    CORE = ['main.dart.js', 'index.html', 'assets/AssetManifest.json', 'assets/FontManifest.json'];
async function downloadOffline() {
    var s = [],
        a = await caches.open(CACHE_NAME),
        e = {};
    for (var c of await a.keys()) {
        var t = c.url.substring(origin.length + 1);
        '' == t && (t = '/'), (e[t] = !0);
    }
    for (var d of Object.keys(RESOURCES)) e[d] || s.push(d);
    return a.addAll(s);
}
function onlineFirst(s) {
    return s.respondWith(
        fetch(s.request)
            .then(a => caches.open(CACHE_NAME).then(e => (e.put(s.request, a.clone()), a)))
            .catch(a =>
                caches.open(CACHE_NAME).then(e =>
                    e.match(s.request).then(s => {
                        if (null != s) return s;
                        throw a;
                    })
                )
            )
    );
}
self.addEventListener(
    'install',
    s => (
        self.skipWaiting(),
        s.waitUntil(caches.open(TEMP).then(s => s.addAll(CORE.map(s => new Request(s, { cache: 'reload' })))))
    )
),
    self.addEventListener('activate', function (s) {
        return s.waitUntil(
            (async function () {
                try {
                    var s = await caches.open(CACHE_NAME),
                        a = await caches.open(TEMP),
                        e = await caches.open(MANIFEST),
                        c = await e.match('manifest');
                    if (!c) {
                        for (var t of (await caches.delete(CACHE_NAME),
                        (s = await caches.open(CACHE_NAME)),
                        await a.keys())) {
                            var d = await a.match(t);
                            await s.put(t, d);
                        }
                        return (
                            await caches.delete(TEMP),
                            await e.put('manifest', new Response(JSON.stringify(RESOURCES))),
                            void self.clients.claim()
                        );
                    }
                    var b = await c.json(),
                        r = self.location.origin;
                    for (var t of await s.keys()) {
                        var n = t.url.substring(r.length + 1);
                        '' == n && (n = '/'), (RESOURCES[n] && RESOURCES[n] == b[n]) || (await s.delete(t));
                    }
                    for (var t of await a.keys()) (d = await a.match(t)), await s.put(t, d);
                    return (
                        await caches.delete(TEMP),
                        await e.put('manifest', new Response(JSON.stringify(RESOURCES))),
                        void self.clients.claim()
                    );
                } catch (s) {
                    console.error('Failed to upgrade service worker: ' + s),
                        await caches.delete(CACHE_NAME),
                        await caches.delete(TEMP),
                        await caches.delete(MANIFEST);
                }
            })()
        );
    }),
    self.addEventListener('fetch', s => {
        if ('GET' === s.request.method) {
            var a = self.location.origin,
                e = s.request.url.substring(a.length + 1);
            if (
                (-1 != e.indexOf('?v=') && (e = e.split('?v=')[0]),
                (s.request.url == a || s.request.url.startsWith(a + '/#') || '' == e) && (e = '/'),
                RESOURCES[e])
            )
                return '/' == e
                    ? onlineFirst(s)
                    : void s.respondWith(
                          caches
                              .open(CACHE_NAME)
                              .then(a =>
                                  a
                                      .match(s.request)
                                      .then(
                                          e =>
                                              e ||
                                              fetch(s.request).then(
                                                  e => (e && Boolean(e.ok) && a.put(s.request, e.clone()), e)
                                              )
                                      )
                              )
                      );
        }
    }),
    self.addEventListener('message', s => {
        'skipWaiting' !== s.data ? 'downloadOffline' !== s.data || downloadOffline() : self.skipWaiting();
    });
