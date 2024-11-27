if (!_flutter) var _flutter = {};
(_flutter.loader = null),
    (function () {
        'use strict';
        const e =
            '' ==
                (t = (function () {
                    const e = document.querySelector('base');
                    return (e && e.getAttribute('href')) || '';
                })()) || t.endsWith('/')
                ? t
                : `${t}/`;
        var t;
        async function r(e, t, i) {
            if (t < 0) return e;
            let n;
            const o = new Promise((e, o) => {
                n = setTimeout(() => {
                    o(new Error(`${i} took more than ${t}ms to resolve. Moving on.`, { cause: r }));
                }, t);
            });
            return Promise.race([e, o]).finally(() => {
                clearTimeout(n);
            });
        }
        class i {
            constructor(e, t = 'flutter-js') {
                const r = e || [/\.js$/];
                window.trustedTypes &&
                    (this.policy = trustedTypes.createPolicy(t, {
                        createScriptURL: function (e) {
                            const i = new URL(e, window.location),
                                n = i.pathname.split('/').pop();
                            if (r.some(e => e.test(n))) return i.toString();
                            console.error('URL rejected by TrustedTypes policy', t, ':', e, '(download prevented)');
                        },
                    }));
            }
        }
        class n {
            setTrustedTypesPolicy(e) {
                this._ttPolicy = e;
            }
            loadServiceWorker(t) {
                if (null == t) return console.debug('Null serviceWorker configuration. Skipping.'), Promise.resolve();
                if (!('serviceWorker' in navigator)) {
                    let e = 'Service Worker API unavailable.';
                    return (
                        window.isSecureContext ||
                            ((e += '\nThe current context is NOT secure.'),
                            (e +=
                                '\nRead more: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts')),
                        Promise.reject(new Error(e))
                    );
                }
                const {
                    serviceWorkerVersion: i,
                    serviceWorkerUrl: n = `${e}flutter_service_worker.js?v=${i}`,
                    timeoutMillis: o = 4e3,
                } = t;
                let s = n;
                return (
                    null != this._ttPolicy && (s = this._ttPolicy.createScriptURL(s)),
                    r(
                        navigator.serviceWorker
                            .register(s)
                            .then(this._getNewServiceWorker)
                            .then(this._waitForServiceWorkerActivation),
                        o,
                        'prepareServiceWorker'
                    )
                );
            }
            async _getNewServiceWorker(e) {
                const t = await e;
                return t.active || (!t.installing && !t.waiting)
                    ? t.active.scriptURL.endsWith(serviceWorkerVersion)
                        ? (console.debug('Loading from existing service worker.'), t.active)
                        : t
                              .update()
                              .then(
                                  e => (
                                      console.debug('Updating service worker.'), e.installing || e.waiting || e.active
                                  )
                              )
                    : (console.debug('Installing/Activating first service worker.'), t.installing || t.waiting);
            }
            async _waitForServiceWorkerActivation(e) {
                const t = await e;
                return t && 'activated' != t.state
                    ? new Promise((e, r) => {
                          t.addEventListener('statechange', () => {
                              'activated' == t.state && (console.debug('Activated new service worker.'), e());
                          });
                      })
                    : t
                      ? (console.debug('Service worker already active.'), Promise.resolve())
                      : Promise.reject(new Error('Cannot activate a null service worker!'));
            }
        }
        class o {
            constructor() {
                this._scriptLoaded = !1;
            }
            setTrustedTypesPolicy(e) {
                this._ttPolicy = e;
            }
            async loadEntrypoint(t) {
                const { entrypointUrl: r = `${e}main.dart.js`, onEntrypointLoaded: i } = t || {};
                return this._loadEntrypoint(r, i);
            }
            didCreateEngineInitializer(e) {
                'function' == typeof this._didCreateEngineInitializerResolve &&
                    (this._didCreateEngineInitializerResolve(e),
                    (this._didCreateEngineInitializerResolve = null),
                    delete _flutter.loader.didCreateEngineInitializer),
                    'function' == typeof this._onEntrypointLoaded && this._onEntrypointLoaded(e);
            }
            _loadEntrypoint(e, t) {
                const r = 'function' == typeof t;
                if (!this._scriptLoaded) {
                    this._scriptLoaded = !0;
                    const i = this._createScriptTag(e);
                    if (!r)
                        return new Promise((e, t) => {
                            console.debug('Injecting <script> tag. Using Promises. Use the callback approach instead!'),
                                (this._didCreateEngineInitializerResolve = e),
                                i.addEventListener('error', t),
                                document.body.append(i);
                        });
                    console.debug('Injecting <script> tag. Using callback.'),
                        (this._onEntrypointLoaded = t),
                        document.body.append(i);
                }
            }
            _createScriptTag(e) {
                const t = document.createElement('script');
                t.type = 'application/javascript';
                let r = e;
                return null != this._ttPolicy && (r = this._ttPolicy.createScriptURL(e)), (t.src = r), t;
            }
        }
        _flutter.loader = new (class {
            async loadEntrypoint(e) {
                const { serviceWorker: t, ...r } = e || {},
                    s = new i(),
                    c = new n();
                c.setTrustedTypesPolicy(s.policy),
                    await c.loadServiceWorker(t).catch(e => {
                        console.warn('Exception while loading service worker:', e);
                    });
                const a = new o();
                return (
                    a.setTrustedTypesPolicy(s.policy),
                    (this.didCreateEngineInitializer = a.didCreateEngineInitializer.bind(a)),
                    a.loadEntrypoint(r)
                );
            }
        })();
    })();
