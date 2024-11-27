var skwasm = (() => {
    var e = 'undefined' != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return (
        'undefined' != typeof __filename && (e = e || __filename),
        function (n) {
            function t() {
                return F.buffer != j && ee(F.buffer), W;
            }
            function r() {
                return F.buffer != j && ee(F.buffer), U;
            }
            function a() {
                return F.buffer != j && ee(F.buffer), q;
            }
            function i() {
                return F.buffer != j && ee(F.buffer), H;
            }
            function o() {
                return F.buffer != j && ee(F.buffer), N;
            }
            function c() {
                return F.buffer != j && ee(F.buffer), z;
            }
            var u;
            (n = n || {}), u || (u = void 0 !== n ? n : {});
            var s,
                l,
                f = Object.assign;
            u.ready = new Promise(function (e, n) {
                (s = e), (l = n);
            });
            var _,
                p,
                m,
                d,
                g,
                v,
                h = f({}, u),
                y = './this.program',
                b = (e, n) => {
                    throw n;
                },
                w = 'object' == typeof window,
                S = 'function' == typeof importScripts,
                x =
                    'object' == typeof process &&
                    'object' == typeof process.versions &&
                    'string' == typeof process.versions.node,
                A = u.ENVIRONMENT_IS_PTHREAD || !1,
                T = '';
            function k(e) {
                return u.locateFile ? u.locateFile(e, T) : T + e;
            }
            if (x) {
                let e;
                (T = S ? require('path').dirname(T) + '/' : __dirname + '/'),
                    (v = () => {
                        g || ((d = require('fs')), (g = require('path')));
                    }),
                    (_ = function (e, n) {
                        return v(), (e = g.normalize(e)), d.readFileSync(e, n ? null : 'utf8');
                    }),
                    (m = e => ((e = _(e, !0)).buffer || (e = new Uint8Array(e)), e)),
                    (p = (e, n, t) => {
                        v(),
                            (e = g.normalize(e)),
                            d.readFile(e, function (e, r) {
                                e ? t(e) : n(r.buffer);
                            });
                    }),
                    1 < process.argv.length && (y = process.argv[1].replace(/\\/g, '/')),
                    process.argv.slice(2),
                    process.on('uncaughtException', function (e) {
                        if (!(e instanceof at)) throw e;
                    }),
                    process.on('unhandledRejection', function (e) {
                        throw e;
                    }),
                    (b = (e, n) => {
                        if (ce()) throw ((process.exitCode = e), n);
                        n instanceof at || R('exiting due to exception: ' + n), process.exit(e);
                    }),
                    (u.inspect = function () {
                        return '[Emscripten Module object]';
                    });
                try {
                    e = require('worker_threads');
                } catch (e) {
                    throw (
                        (console.error(
                            'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'
                        ),
                        e)
                    );
                }
                global.Worker = e.Worker;
            } else
                (w || S) &&
                    (S
                        ? (T = self.location.href)
                        : 'undefined' != typeof document && document.currentScript && (T = document.currentScript.src),
                    e && (T = e),
                    (T = 0 !== T.indexOf('blob:') ? T.substr(0, T.replace(/[?#].*/, '').lastIndexOf('/') + 1) : ''),
                    x ||
                        ((_ = e => {
                            var n = new XMLHttpRequest();
                            return n.open('GET', e, !1), n.send(null), n.responseText;
                        }),
                        S &&
                            (m = e => {
                                var n = new XMLHttpRequest();
                                return (
                                    n.open('GET', e, !1),
                                    (n.responseType = 'arraybuffer'),
                                    n.send(null),
                                    new Uint8Array(n.response)
                                );
                            }),
                        (p = (e, n, t) => {
                            var r = new XMLHttpRequest();
                            r.open('GET', e, !0),
                                (r.responseType = 'arraybuffer'),
                                (r.onload = () => {
                                    200 == r.status || (0 == r.status && r.response) ? n(r.response) : t();
                                }),
                                (r.onerror = t),
                                r.send(null);
                        })));
            x && 'undefined' == typeof performance && (global.performance = require('perf_hooks').performance);
            var M = console.log.bind(console),
                E = console.warn.bind(console);
            x && (v(), (M = e => d.writeSync(1, e + '\n')), (E = e => d.writeSync(2, e + '\n')));
            var D = u.print || M,
                R = u.printErr || E;
            f(u, h), (h = null), u.thisProgram && (y = u.thisProgram), u.quit && (b = u.quit);
            var I,
                P,
                B = 0;
            u.wasmBinary && (P = u.wasmBinary);
            var C = u.noExitRuntime || !0;
            'object' != typeof WebAssembly && pe('no native wasm support detected');
            var F,
                L,
                G = !1;
            function O(e) {
                var n = new TextDecoder(e);
                this.decode = e => (
                    e.buffer instanceof SharedArrayBuffer && (e = new Uint8Array(e)), n.decode.call(n, e)
                );
            }
            var j,
                W,
                U,
                V,
                Y,
                q,
                H,
                N,
                z,
                J = 'undefined' != typeof TextDecoder ? new O('utf8') : void 0;
            function X(e, n, t) {
                var r = n + t;
                for (t = n; e[t] && !(t >= r); ) ++t;
                if (16 < t - n && e.subarray && J) return J.decode(e.subarray(n, t));
                for (r = ''; n < t; ) {
                    var a = e[n++];
                    if (128 & a) {
                        var i = 63 & e[n++];
                        if (192 == (224 & a)) r += String.fromCharCode(((31 & a) << 6) | i);
                        else {
                            var o = 63 & e[n++];
                            65536 >
                            (a =
                                224 == (240 & a)
                                    ? ((15 & a) << 12) | (i << 6) | o
                                    : ((7 & a) << 18) | (i << 12) | (o << 6) | (63 & e[n++]))
                                ? (r += String.fromCharCode(a))
                                : ((a -= 65536), (r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))));
                        }
                    } else r += String.fromCharCode(a);
                }
                return r;
            }
            function Q(e, n) {
                return e ? X(r(), e, n) : '';
            }
            function K(e, n, t, r) {
                if (!(0 < r)) return 0;
                var a = t;
                r = t + r - 1;
                for (var i = 0; i < e.length; ++i) {
                    var o = e.charCodeAt(i);
                    if (
                        (55296 <= o && 57343 >= o && (o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++i))),
                        127 >= o)
                    ) {
                        if (t >= r) break;
                        n[t++] = o;
                    } else {
                        if (2047 >= o) {
                            if (t + 1 >= r) break;
                            n[t++] = 192 | (o >> 6);
                        } else {
                            if (65535 >= o) {
                                if (t + 2 >= r) break;
                                n[t++] = 224 | (o >> 12);
                            } else {
                                if (t + 3 >= r) break;
                                (n[t++] = 240 | (o >> 18)), (n[t++] = 128 | ((o >> 12) & 63));
                            }
                            n[t++] = 128 | ((o >> 6) & 63);
                        }
                        n[t++] = 128 | (63 & o);
                    }
                }
                return (n[t] = 0), t - a;
            }
            function Z(e, n, t) {
                return K(e, r(), n, t);
            }
            function $(e) {
                for (var n = 0, t = 0; t < e.length; ++t) {
                    var r = e.charCodeAt(t);
                    55296 <= r && 57343 >= r && (r = (65536 + ((1023 & r) << 10)) | (1023 & e.charCodeAt(++t))),
                        127 >= r ? ++n : (n = 2047 >= r ? n + 2 : 65535 >= r ? n + 3 : n + 4);
                }
                return n;
            }
            function ee(e) {
                (j = e),
                    (u.HEAP8 = W = new Int8Array(e)),
                    (u.HEAP16 = V = new Int16Array(e)),
                    (u.HEAP32 = q = new Int32Array(e)),
                    (u.HEAPU8 = U = new Uint8Array(e)),
                    (u.HEAPU16 = Y = new Uint16Array(e)),
                    (u.HEAPU32 = H = new Uint32Array(e)),
                    (u.HEAPF32 = N = new Float32Array(e)),
                    (u.HEAPF64 = z = new Float64Array(e));
            }
            'undefined' != typeof TextDecoder && new O('utf-16le'), A && (j = u.buffer);
            var ne = u.INITIAL_MEMORY || 16777216;
            if (A) (F = u.wasmMemory), (j = u.buffer);
            else if (u.wasmMemory) F = u.wasmMemory;
            else if (
                !(
                    (F = new WebAssembly.Memory({ initial: ne / 65536, maximum: 32768, shared: !0 })).buffer instanceof
                    SharedArrayBuffer
                )
            )
                throw (
                    (R(
                        'requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag'
                    ),
                    x &&
                        console.log(
                            '(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)'
                        ),
                    Error('bad memory'))
                );
            F && (j = F.buffer), (ne = j.byteLength), ee(j);
            var te,
                re = [],
                ae = [],
                ie = [],
                oe = 0;
            function ce() {
                return C || 0 < oe;
            }
            function ue() {
                var e = u.preRun.shift();
                re.unshift(e);
            }
            var se,
                le = 0,
                fe = null,
                _e = null;
            function pe(e) {
                throw (
                    (A ? postMessage({ cmd: 'onAbort', arg: e }) : u.onAbort && u.onAbort(e),
                    R((e = 'Aborted(' + e + ')')),
                    (G = !0),
                    (e = new WebAssembly.RuntimeError(e + '. Build with -s ASSERTIONS=1 for more info.')),
                    l(e),
                    e)
                );
            }
            function me() {
                return se.startsWith('data:application/octet-stream;base64,');
            }
            function de() {
                var e = se;
                try {
                    if (e == se && P) return new Uint8Array(P);
                    if (m) return m(e);
                    throw 'both async and sync fetching of the wasm failed';
                } catch (e) {
                    pe(e);
                }
            }
            (u.preloadedImages = {}), (u.preloadedAudios = {}), (se = 'skwasm.wasm'), me() || (se = k(se));
            var ge = {};
            function ve(e) {
                for (; 0 < e.length; ) {
                    var n = e.shift();
                    if ('function' == typeof n) n(u);
                    else {
                        var t = n.Ma;
                        'number' == typeof t ? (void 0 === n.A ? xe(t)() : xe(t)(n.A)) : t(void 0 === n.A ? null : n.A);
                    }
                }
            }
            function he(e) {
                var n = $n();
                return (e = e()), et(n), e;
            }
            function ye(e) {
                var n = we.i[e];
                n && ((a()[e >> 2] = 0), we.ea(n.worker));
            }
            var be,
                we = {
                    j: [],
                    D: [],
                    U: [],
                    sa: function () {
                        for (var e = 0; 1 > e; ++e) we.W();
                    },
                    ta: function () {
                        (we.receiveObjectTransfer = we.wa), (we.threadInit = we.ga), (we.setExitStatus = we.ya);
                    },
                    i: {},
                    ya: function () {},
                    fa: function () {
                        for (var e in we.i) {
                            var n = we.i[e];
                            n && n.worker && we.ea(n.worker);
                        }
                        for (e = 0; e < we.j.length; ++e) we.j[e].terminate();
                        we.j = [];
                    },
                    ea: function (e) {
                        we.xa(function () {
                            delete we.i[e.s.T],
                                we.j.push(e),
                                we.D.splice(we.D.indexOf(e), 1),
                                Jn(e.s.T),
                                (e.s = void 0);
                        });
                    },
                    xa: function (e) {
                        a()[rt >> 2] = 0;
                        try {
                            e();
                        } finally {
                            a()[rt >> 2] = 1;
                        }
                    },
                    wa: function (e) {
                        if (void 0 !== en) {
                            for (var n in e.M) qe[n] = e.M[n];
                            !u.canvas && e.o && qe[e.o] && ((u.canvas = qe[e.o].l), (u.canvas.id = e.o));
                        }
                    },
                    ga: function () {
                        for (var e in we.U) we.U[e]();
                    },
                    aa: function (n, t) {
                        (n.onmessage = e => {
                            var r = (e = e.data).cmd;
                            if ((n.s && (we.la = n.s.T), e.targetThread && e.targetThread != Un())) {
                                var i = we.i[e.Ta];
                                i
                                    ? i.worker.postMessage(e, e.transferList)
                                    : R(
                                          'Internal error! Worker sent a message "' +
                                              r +
                                              '" to target pthread ' +
                                              e.targetThread +
                                              ', but that thread no longer exists!'
                                      );
                            } else
                                'processQueuedMainThreadWork' === r
                                    ? qn()
                                    : 'spawnThread' === r
                                      ? Te(e)
                                      : 'cleanupThread' === r
                                        ? ye(e.thread)
                                        : 'killThread' === r
                                          ? ((e = e.thread),
                                            (a()[e >> 2] = 0),
                                            (r = we.i[e]),
                                            delete we.i[e],
                                            r.worker.terminate(),
                                            Jn(e),
                                            we.D.splice(we.D.indexOf(r.worker), 1),
                                            (r.worker.s = void 0))
                                          : 'cancelThread' === r
                                            ? we.i[e.thread].worker.postMessage({ cmd: 'cancel' })
                                            : 'loaded' === r
                                              ? ((n.loaded = !0), t && t(n), n.C && (n.C(), delete n.C))
                                              : 'print' === r
                                                ? D('Thread ' + e.threadId + ': ' + e.text)
                                                : 'printErr' === r
                                                  ? R('Thread ' + e.threadId + ': ' + e.text)
                                                  : 'alert' === r
                                                    ? alert('Thread ' + e.threadId + ': ' + e.text)
                                                    : 'setimmediate' === e.target
                                                      ? n.postMessage(e)
                                                      : 'onAbort' === r
                                                        ? u.onAbort && u.onAbort(e.arg)
                                                        : R('worker sent an unknown command ' + r);
                            we.la = void 0;
                        }),
                            (n.onerror = e => {
                                throw (R('worker sent an error! ' + e.filename + ':' + e.lineno + ': ' + e.message), e);
                            }),
                            x &&
                                (n.on('message', function (e) {
                                    n.onmessage({ data: e });
                                }),
                                n.on('error', function (e) {
                                    n.onerror(e);
                                }),
                                n.on('detachedExit', function () {})),
                            n.postMessage({
                                cmd: 'load',
                                urlOrBlob: u.mainScriptUrlOrBlob || e,
                                wasmMemory: F,
                                wasmModule: L,
                            });
                    },
                    W: function () {
                        var e = k('skwasm.worker.js');
                        we.j.push(new Worker(e));
                    },
                    oa: function () {
                        return 0 == we.j.length && (we.W(), we.aa(we.j[0])), we.j.pop();
                    },
                };
            function Se(e) {
                if (A) return _n(1, 0, e);
                try {
                    ot(e);
                } catch (e) {
                    e instanceof at || 'unwind' == e || b(1, e);
                }
            }
            function xe(e) {
                return te.get(e);
            }
            function Ae(e) {
                (this.B = e - 16),
                    (this.Da = function (e) {
                        a()[(this.B + 4) >> 2] = e;
                    }),
                    (this.Aa = function (e) {
                        a()[(this.B + 8) >> 2] = e;
                    }),
                    (this.Ba = function () {
                        a()[this.B >> 2] = 0;
                    }),
                    (this.za = function () {
                        t()[(this.B + 12) >> 0] = 0;
                    }),
                    (this.Ca = function () {
                        t()[(this.B + 13) >> 0] = 0;
                    }),
                    (this.qa = function (e, n) {
                        this.Da(e), this.Aa(n), this.Ba(), this.za(), this.Ca();
                    });
            }
            function Te(e) {
                var n = we.oa();
                if (!n) return 6;
                we.D.push(n);
                var t = (we.i[e.S] = { worker: n, T: e.S });
                n.s = t;
                var r = { cmd: 'run', start_routine: e.Ea, arg: e.A, threadInfoStruct: e.S };
                return (
                    (r.o = e.o),
                    (r.M = e.M),
                    (n.C = () => {
                        (r.time = performance.now()), n.postMessage(r, e.Ja);
                    }),
                    n.loaded && (n.C(), delete n.C),
                    0
                );
            }
            (u.establishStackSpace = function () {
                var e = Un(),
                    n = a()[(e + 44) >> 2];
                (e = a()[(e + 48) >> 2]), Zn(n, n - e), et(n);
            }),
                (u.invokeEntryPoint = function (e, n) {
                    return xe(e)(n);
                }),
                (be = x
                    ? () => {
                          var e = process.hrtime();
                          return 1e3 * e[0] + e[1] / 1e6;
                      }
                    : A
                      ? () => performance.now() - u.__performance_now_clock_drift
                      : () => performance.now());
            var ke = {},
                Me = [null, [], []],
                Ee = {};
            function De(e, n, t) {
                return A ? _n(2, 1, e, n, t) : 0;
            }
            function Re(e, n) {
                if (A) return _n(3, 1, e, n);
            }
            function Ie(e, n, t) {
                return A ? _n(4, 1, e, n, t) : 0;
            }
            function Pe(e, n, t, a, i, o) {
                if (A) n = _n(5, 1, e, n, t, a, i, o);
                else if (((o <<= 12), 0 != (16 & a) && 0 != e % 65536)) n = -28;
                else if (0 != (32 & a)) {
                    var c = 65536 * Math.ceil(n / 65536);
                    (e = Qn(65536, c)) ? r().fill(0, e, e + c) : (e = 0),
                        e
                            ? ((ke[e] = { va: e, ua: n, ja: !0, fd: i, Qa: t, flags: a, offset: o }), (n = e))
                            : (n = -48);
                } else n = -52;
                return n;
            }
            function Be(e, n) {
                if (A) e = _n(6, 1, e, n);
                else {
                    var t = ke[e];
                    0 !== n && t ? (n === t.ua && ((ke[e] = null), t.ja && Vn(t.va)), (e = 0)) : (e = -28);
                }
                return e;
            }
            function Ce(e, n, t) {
                if (A) return _n(7, 1, e, n, t);
            }
            var Fe = 1,
                Le = [],
                Ge = [],
                Oe = [],
                je = [],
                We = [],
                Ue = [],
                Ve = [],
                Ye = {},
                qe = {},
                He = [],
                Ne = [],
                ze = {},
                Je = {},
                Xe = 4;
            function Qe(e) {
                Ze || (Ze = e);
            }
            function Ke(e) {
                for (var n = Fe++, t = e.length; t < n; t++) e[t] = null;
                return n;
            }
            var Ze,
                $e,
                en = {},
                nn = [];
            function tn(e, n, t, r) {
                for (var i = 0; i < e; i++) {
                    var o = Bn[t](),
                        c = o && Ke(r);
                    o ? ((o.name = c), (r[c] = o)) : Qe(1282), (a()[(n + 4 * i) >> 2] = c);
                }
            }
            function rn(e, n, r) {
                if (n) {
                    var c = void 0;
                    switch (e) {
                        case 36346:
                            c = 1;
                            break;
                        case 36344:
                            return void (0 != r && 1 != r && Qe(1280));
                        case 34814:
                        case 36345:
                            c = 0;
                            break;
                        case 34466:
                            var u = Bn.getParameter(34467);
                            c = u ? u.length : 0;
                            break;
                        case 33309:
                            if (2 > $e.version) return void Qe(1282);
                            c = 2 * (Bn.getSupportedExtensions() || []).length;
                            break;
                        case 33307:
                        case 33308:
                            if (2 > $e.version) return void Qe(1280);
                            c = 33307 == e ? 3 : 0;
                    }
                    if (void 0 === c)
                        switch (((u = Bn.getParameter(e)), typeof u)) {
                            case 'number':
                                c = u;
                                break;
                            case 'boolean':
                                c = u ? 1 : 0;
                                break;
                            case 'string':
                                return void Qe(1280);
                            case 'object':
                                if (null === u)
                                    switch (e) {
                                        case 34964:
                                        case 35725:
                                        case 34965:
                                        case 36006:
                                        case 36007:
                                        case 32873:
                                        case 34229:
                                        case 36662:
                                        case 36663:
                                        case 35053:
                                        case 35055:
                                        case 36010:
                                        case 35097:
                                        case 35869:
                                        case 32874:
                                        case 36389:
                                        case 35983:
                                        case 35368:
                                        case 34068:
                                            c = 0;
                                            break;
                                        default:
                                            return void Qe(1280);
                                    }
                                else {
                                    if (
                                        u instanceof Float32Array ||
                                        u instanceof Uint32Array ||
                                        u instanceof Int32Array ||
                                        u instanceof Array
                                    ) {
                                        for (e = 0; e < u.length; ++e)
                                            switch (r) {
                                                case 0:
                                                    a()[(n + 4 * e) >> 2] = u[e];
                                                    break;
                                                case 2:
                                                    o()[(n + 4 * e) >> 2] = u[e];
                                                    break;
                                                case 4:
                                                    t()[(n + e) >> 0] = u[e] ? 1 : 0;
                                            }
                                        return;
                                    }
                                    try {
                                        c = 0 | u.name;
                                    } catch (n) {
                                        return (
                                            Qe(1280),
                                            void R(
                                                'GL_INVALID_ENUM in glGet' +
                                                    r +
                                                    'v: Unknown object returned from WebGL getParameter(' +
                                                    e +
                                                    ')! (error: ' +
                                                    n +
                                                    ')'
                                            )
                                        );
                                    }
                                }
                                break;
                            default:
                                return (
                                    Qe(1280),
                                    void R(
                                        'GL_INVALID_ENUM in glGet' +
                                            r +
                                            'v: Native code calling glGet' +
                                            r +
                                            'v(' +
                                            e +
                                            ') and it returns ' +
                                            u +
                                            ' of type ' +
                                            typeof u +
                                            '!'
                                    )
                                );
                        }
                    switch (r) {
                        case 1:
                            (r = c), (i()[n >> 2] = r), (i()[(n + 4) >> 2] = (r - i()[n >> 2]) / 4294967296);
                            break;
                        case 0:
                            a()[n >> 2] = c;
                            break;
                        case 2:
                            o()[n >> 2] = c;
                            break;
                        case 4:
                            t()[n >> 0] = c ? 1 : 0;
                    }
                } else Qe(1281);
            }
            function an(e) {
                var n = $(e) + 1,
                    t = Yn(n);
                return Z(e, t, n), t;
            }
            function on(e) {
                return ']' == e.slice(-1) && e.lastIndexOf('[');
            }
            function cn(e) {
                return (
                    0 == (e -= 5120)
                        ? (e = t())
                        : 1 == e
                          ? (e = r())
                          : 2 == e
                            ? (F.buffer != j && ee(F.buffer), (e = V))
                            : 4 == e
                              ? (e = a())
                              : 6 == e
                                ? (e = o())
                                : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e
                                  ? (e = i())
                                  : (F.buffer != j && ee(F.buffer), (e = Y)),
                    e
                );
            }
            function un(e, n, t, r, a) {
                e = cn(e);
                var i = 31 - Math.clz32(e.BYTES_PER_ELEMENT),
                    o = Xe;
                return e.subarray(
                    a >> i,
                    (a +
                        r *
                            ((t *
                                ({ 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 }[
                                    n - 6402
                                ] || 1) *
                                (1 << i) +
                                o -
                                1) &
                                -o)) >>
                        i
                );
            }
            function sn(e) {
                var n = Bn.ka;
                if (n) {
                    var t = n.G[e];
                    return (
                        'number' == typeof t &&
                            (n.G[e] = t = Bn.getUniformLocation(n, n.ha[e] + (0 < t ? '[' + t + ']' : ''))),
                        t
                    );
                }
                Qe(1282);
            }
            var ln = [],
                fn = [];
            function _n(e, n) {
                var t = arguments.length - 2,
                    r = arguments;
                return he(function () {
                    for (var a = nt(8 * t), i = a >> 3, o = 0; o < t; o++) {
                        var u = r[2 + o];
                        c()[i + o] = u;
                    }
                    return zn(e, t, a, n);
                });
            }
            var pn = [];
            function mn(e) {
                return (
                    (e = 2 < e ? Q(e) : e),
                    qe[e.substr(1)] ||
                        ('canvas' == e && Object.keys(qe)[0]) ||
                        ('undefined' != typeof document && document.querySelector(e))
                );
            }
            function dn(e, n, t) {
                var r = mn(e);
                return r
                    ? (r.g && ((a()[r.g >> 2] = n), (a()[(r.g + 4) >> 2] = t)),
                      !r.l && r.I
                          ? r.g
                              ? ((function (e, n, t, r) {
                                    he(function () {
                                        var i = nt(12),
                                            o = 0;
                                        n && (o = an(n)),
                                            (a()[i >> 2] = o),
                                            (a()[(i + 4) >> 2] = t),
                                            (a()[(i + 8) >> 2] = r),
                                            jn(e, 657457152, 0, o, i);
                                    });
                                })((r = a()[(r.g + 8) >> 2]), (e = e ? Q(e) : ''), n, t),
                                1)
                              : -4
                          : (r.l && (r = r.l),
                            (e = !1),
                            r.H &&
                                r.H.v &&
                                (e =
                                    0 === (e = r.H.v.getParameter(2978))[0] &&
                                    0 === e[1] &&
                                    e[2] === r.width &&
                                    e[3] === r.height),
                            (r.width = n),
                            (r.height = t),
                            e && r.H.v.viewport(0, 0, n, t),
                            0))
                    : -4;
            }
            function gn(e, n, t) {
                return A ? _n(8, 1, e, n, t) : dn(e, n, t);
            }
            var vn,
                hn = ['default', 'low-power', 'high-performance'],
                yn = {};
            function bn() {
                if (!vn) {
                    var e,
                        n = {
                            USER: 'web_user',
                            LOGNAME: 'web_user',
                            PATH: '/',
                            PWD: '/',
                            HOME: '/home/web_user',
                            LANG:
                                (
                                    ('object' == typeof navigator && navigator.languages && navigator.languages[0]) ||
                                    'C'
                                ).replace('-', '_') + '.UTF-8',
                            _: y || './this.program',
                        };
                    for (e in yn) void 0 === yn[e] ? delete n[e] : (n[e] = yn[e]);
                    var t = [];
                    for (e in n) t.push(e + '=' + n[e]);
                    vn = t;
                }
                return vn;
            }
            function wn(e, n) {
                if (A) return _n(9, 1, e, n);
                var r = 0;
                return (
                    bn().forEach(function (i, o) {
                        var c = n + r;
                        for (o = a()[(e + 4 * o) >> 2] = c, c = 0; c < i.length; ++c) t()[o++ >> 0] = i.charCodeAt(c);
                        (t()[o >> 0] = 0), (r += i.length + 1);
                    }),
                    0
                );
            }
            function Sn(e, n) {
                if (A) return _n(10, 1, e, n);
                var t = bn();
                a()[e >> 2] = t.length;
                var r = 0;
                return (
                    t.forEach(function (e) {
                        r += e.length + 1;
                    }),
                    (a()[n >> 2] = r),
                    0
                );
            }
            function xn(e) {
                return A ? _n(11, 1, e) : 0;
            }
            function An(e, n, t, r, i, o) {
                return A
                    ? _n(12, 1, e, n, t, r, i, o)
                    : ((e = Ee.pa(e)), (n = Ee.ma(e, n, t, r)), (a()[o >> 2] = n), 0);
            }
            function Tn(e, n, t, r) {
                return A ? _n(13, 1, e, n, t, r) : ((e = Ee.pa(e)), (n = Ee.ma(e, n, t)), (a()[r >> 2] = n), 0);
            }
            function kn(e, n, t, r, a) {
                if (A) return _n(14, 1, e, n, t, r, a);
            }
            function Mn(e, n, t, i) {
                if (A) return _n(15, 1, e, n, t, i);
                for (var o = 0, c = 0; c < t; c++) {
                    var u = a()[n >> 2],
                        s = a()[(n + 4) >> 2];
                    n += 8;
                    for (var l = 0; l < s; l++) {
                        var f = r()[u + l],
                            _ = Me[e];
                        0 === f || 10 === f ? ((1 === e ? D : R)(X(_, 0)), (_.length = 0)) : _.push(f);
                    }
                    o += s;
                }
                return (a()[i >> 2] = o), 0;
            }
            function En(e) {
                return 0 == e % 4 && (0 != e % 100 || 0 == e % 400);
            }
            function Dn(e, n) {
                for (var t = 0, r = 0; r <= n; t += e[r++]);
                return t;
            }
            var Rn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                In = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function Pn(e, n) {
                for (e = new Date(e.getTime()); 0 < n; ) {
                    var t = e.getMonth(),
                        r = (En(e.getFullYear()) ? Rn : In)[t];
                    if (!(n > r - e.getDate())) {
                        e.setDate(e.getDate() + n);
                        break;
                    }
                    (n -= r - e.getDate() + 1),
                        e.setDate(1),
                        11 > t ? e.setMonth(t + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
                }
                return e;
            }
            A || we.sa();
            for (var Bn, Cn = 0; 32 > Cn; ++Cn) nn.push(Array(Cn));
            var Fn = new Float32Array(288);
            for (Cn = 0; 288 > Cn; ++Cn) ln[Cn] = Fn.subarray(0, Cn + 1);
            var Ln = new Int32Array(288);
            for (Cn = 0; 288 > Cn; ++Cn) fn[Cn] = Ln.subarray(0, Cn + 1);
            var Gn = [null, Se, De, Re, Ie, Pe, Be, Ce, gn, wn, Sn, xn, An, Tn, kn, Mn],
                On = {
                    __cxa_allocate_exception: function (e) {
                        return Yn(e + 16) + 16;
                    },
                    __cxa_throw: function (e, n, t) {
                        throw (new Ae(e).qa(n, t), e);
                    },
                    __emscripten_init_main_thread_js: function (e) {
                        Hn(e, !S, 1, !w), we.ga();
                    },
                    __emscripten_thread_cleanup: function (e) {
                        A ? postMessage({ cmd: 'cleanupThread', thread: e }) : ye(e);
                    },
                    __pthread_create_js: function (e, n, t, r) {
                        if ('undefined' == typeof SharedArrayBuffer)
                            return (
                                R(
                                    'Current environment does not support SharedArrayBuffer, pthreads are not available!'
                                ),
                                6
                            );
                        var i = [],
                            o = 0,
                            c = n ? a()[(n + 40) >> 2] : 0;
                        -1 == c ? (c = '#canvas') : c && (c = Q(c).trim()), c && (c = c.split(','));
                        var s,
                            l = {},
                            f = u.canvas ? u.canvas.id : '';
                        for (s in c) {
                            var _ = c[s].trim();
                            try {
                                if ('#canvas' == _) {
                                    if (!u.canvas) {
                                        R(
                                            'pthread_create: could not find canvas with ID "' +
                                                _ +
                                                '" to transfer to thread!'
                                        ),
                                            (o = 28);
                                        break;
                                    }
                                    _ = u.canvas.id;
                                }
                                if (qe[_]) {
                                    var p = qe[_];
                                    (qe[_] = null),
                                        u.canvas instanceof OffscreenCanvas && _ === u.canvas.id && (u.canvas = null);
                                } else if (!A) {
                                    var m = u.canvas && u.canvas.id === _ ? u.canvas : document.querySelector(_);
                                    if (!m) {
                                        R(
                                            'pthread_create: could not find canvas with ID "' +
                                                _ +
                                                '" to transfer to thread!'
                                        ),
                                            (o = 28);
                                        break;
                                    }
                                    if (m.I) {
                                        R(
                                            'pthread_create: cannot transfer canvas with ID "' +
                                                _ +
                                                '" to thread, since the current thread does not have control over it!'
                                        ),
                                            (o = 63);
                                        break;
                                    }
                                    if (!m.transferControlToOffscreen)
                                        return (
                                            R(
                                                'pthread_create: cannot transfer control of canvas "' +
                                                    _ +
                                                    '" to pthread, because current browser does not support OffscreenCanvas!'
                                            ),
                                            R(
                                                'pthread_create: Build with -s OFFSCREEN_FRAMEBUFFER=1 to enable fallback proxying of GL commands from pthread to main thread.'
                                            ),
                                            52
                                        );
                                    m.g ||
                                        ((m.g = Yn(12)),
                                        (a()[m.g >> 2] = m.width),
                                        (a()[(m.g + 4) >> 2] = m.height),
                                        (a()[(m.g + 8) >> 2] = 0)),
                                        (p = { l: m.transferControlToOffscreen(), g: m.g, id: m.id }),
                                        (m.I = !0);
                                }
                                p && (i.push(p.l), (l[p.id] = p));
                            } catch (e) {
                                return (
                                    R(
                                        'pthread_create: failed to transfer control of canvas "' +
                                            _ +
                                            '" to OffscreenCanvas! Error: ' +
                                            e
                                    ),
                                    28
                                );
                            }
                        }
                        if (A && (0 === i.length || o)) return Nn(687865856, e, n, t, r);
                        if (o) return o;
                        for (s in l) a()[(l[s].g + 8) >> 2] = e;
                        return (
                            (e = { Ea: t, S: e, A: r, o: f, M: l, Ja: i }),
                            A ? ((e.Ka = 'spawnThread'), postMessage(e, i), 0) : Te(e)
                        );
                    },
                    __syscall_fcntl64: De,
                    __syscall_fstat64: Re,
                    __syscall_ioctl: Ie,
                    __syscall_mmap2: Pe,
                    __syscall_munmap: Be,
                    __syscall_open: Ce,
                    _emscripten_default_pthread_stack_size: function () {
                        return 2097152;
                    },
                    _emscripten_futex_wait_non_blocking: function (e, n, t) {
                        var r = performance.now();
                        for (t = r + t, Atomics.exchange(a(), tt >> 2, e); ; ) {
                            if ((r = performance.now()) > t) return Atomics.exchange(a(), tt >> 2, 0), -73;
                            if (0 == (r = Atomics.exchange(a(), tt >> 2, 0))) break;
                            if ((qn(), Atomics.load(a(), e >> 2) != n)) return -6;
                            Atomics.exchange(a(), tt >> 2, e);
                        }
                        return 0;
                    },
                    _emscripten_notify_thread_queue: function (e, n) {
                        if (e == n) postMessage({ cmd: 'processQueuedMainThreadWork' });
                        else if (A) postMessage({ targetThread: e, cmd: 'processThreadQueue' });
                        else {
                            if (!(e = (e = we.i[e]) && e.worker)) return;
                            e.postMessage({ cmd: 'processThreadQueue' });
                        }
                        return 1;
                    },
                    _emscripten_throw_longjmp: function () {
                        throw 'longjmp';
                    },
                    abort: function () {
                        pe('');
                    },
                    clock_gettime: function (e, n) {
                        if (0 === e) e = Date.now();
                        else {
                            if (1 !== e && 4 !== e) return (a()[Wn() >> 2] = 28), -1;
                            e = be();
                        }
                        return (a()[n >> 2] = (e / 1e3) | 0), (a()[(n + 4) >> 2] = ((e % 1e3) * 1e6) | 0), 0;
                    },
                    emscripten_check_blocking_allowed: function () {
                        x ||
                            S ||
                            (I || (I = {}),
                            I[
                                'Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread'
                            ] ||
                                ((I[
                                    'Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread'
                                ] = 1),
                                R(
                                    'Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread'
                                )));
                    },
                    emscripten_get_now: be,
                    emscripten_glActiveTexture: function (e) {
                        Bn.activeTexture(e);
                    },
                    emscripten_glAttachShader: function (e, n) {
                        Bn.attachShader(Ge[e], Ue[n]);
                    },
                    emscripten_glBindAttribLocation: function (e, n, t) {
                        Bn.bindAttribLocation(Ge[e], n, Q(t));
                    },
                    emscripten_glBindBuffer: function (e, n) {
                        35051 == e ? (Bn.R = n) : 35052 == e && (Bn.m = n), Bn.bindBuffer(e, Le[n]);
                    },
                    emscripten_glBindFramebuffer: function (e, n) {
                        Bn.bindFramebuffer(e, Oe[n]);
                    },
                    emscripten_glBindRenderbuffer: function (e, n) {
                        Bn.bindRenderbuffer(e, je[n]);
                    },
                    emscripten_glBindSampler: function (e, n) {
                        Bn.bindSampler(e, He[n]);
                    },
                    emscripten_glBindTexture: function (e, n) {
                        Bn.bindTexture(e, We[n]);
                    },
                    emscripten_glBindVertexArray: function (e) {
                        Bn.bindVertexArray(Ve[e]);
                    },
                    emscripten_glBindVertexArrayOES: function (e) {
                        Bn.bindVertexArray(Ve[e]);
                    },
                    emscripten_glBlendColor: function (e, n, t, r) {
                        Bn.blendColor(e, n, t, r);
                    },
                    emscripten_glBlendEquation: function (e) {
                        Bn.blendEquation(e);
                    },
                    emscripten_glBlendFunc: function (e, n) {
                        Bn.blendFunc(e, n);
                    },
                    emscripten_glBlitFramebuffer: function (e, n, t, r, a, i, o, c, u, s) {
                        Bn.blitFramebuffer(e, n, t, r, a, i, o, c, u, s);
                    },
                    emscripten_glBufferData: function (e, n, t, a) {
                        2 <= $e.version
                            ? t
                                ? Bn.bufferData(e, r(), a, t, n)
                                : Bn.bufferData(e, n, a)
                            : Bn.bufferData(e, t ? r().subarray(t, t + n) : n, a);
                    },
                    emscripten_glBufferSubData: function (e, n, t, a) {
                        2 <= $e.version
                            ? Bn.bufferSubData(e, n, r(), a, t)
                            : Bn.bufferSubData(e, n, r().subarray(a, a + t));
                    },
                    emscripten_glCheckFramebufferStatus: function (e) {
                        return Bn.checkFramebufferStatus(e);
                    },
                    emscripten_glClear: function (e) {
                        Bn.clear(e);
                    },
                    emscripten_glClearColor: function (e, n, t, r) {
                        Bn.clearColor(e, n, t, r);
                    },
                    emscripten_glClearStencil: function (e) {
                        Bn.clearStencil(e);
                    },
                    emscripten_glClientWaitSync: function (e, n, t, r) {
                        return Bn.clientWaitSync(Ne[e], n, (t >>> 0) + 4294967296 * r);
                    },
                    emscripten_glColorMask: function (e, n, t, r) {
                        Bn.colorMask(!!e, !!n, !!t, !!r);
                    },
                    emscripten_glCompileShader: function (e) {
                        Bn.compileShader(Ue[e]);
                    },
                    emscripten_glCompressedTexImage2D: function (e, n, t, a, i, o, c, u) {
                        2 <= $e.version
                            ? Bn.m
                                ? Bn.compressedTexImage2D(e, n, t, a, i, o, c, u)
                                : Bn.compressedTexImage2D(e, n, t, a, i, o, r(), u, c)
                            : Bn.compressedTexImage2D(e, n, t, a, i, o, u ? r().subarray(u, u + c) : null);
                    },
                    emscripten_glCompressedTexSubImage2D: function (e, n, t, a, i, o, c, u, s) {
                        2 <= $e.version
                            ? Bn.m
                                ? Bn.compressedTexSubImage2D(e, n, t, a, i, o, c, u, s)
                                : Bn.compressedTexSubImage2D(e, n, t, a, i, o, c, r(), s, u)
                            : Bn.compressedTexSubImage2D(e, n, t, a, i, o, c, s ? r().subarray(s, s + u) : null);
                    },
                    emscripten_glCopyBufferSubData: function (e, n, t, r, a) {
                        Bn.copyBufferSubData(e, n, t, r, a);
                    },
                    emscripten_glCopyTexSubImage2D: function (e, n, t, r, a, i, o, c) {
                        Bn.copyTexSubImage2D(e, n, t, r, a, i, o, c);
                    },
                    emscripten_glCreateProgram: function () {
                        var e = Ke(Ge),
                            n = Bn.createProgram();
                        return (n.name = e), (n.L = n.J = n.K = 0), (n.V = 1), (Ge[e] = n), e;
                    },
                    emscripten_glCreateShader: function (e) {
                        var n = Ke(Ue);
                        return (Ue[n] = Bn.createShader(e)), n;
                    },
                    emscripten_glCullFace: function (e) {
                        Bn.cullFace(e);
                    },
                    emscripten_glDeleteBuffers: function (e, n) {
                        for (var t = 0; t < e; t++) {
                            var r = a()[(n + 4 * t) >> 2],
                                i = Le[r];
                            i &&
                                (Bn.deleteBuffer(i),
                                (i.name = 0),
                                (Le[r] = null),
                                r == Bn.R && (Bn.R = 0),
                                r == Bn.m && (Bn.m = 0));
                        }
                    },
                    emscripten_glDeleteFramebuffers: function (e, n) {
                        for (var t = 0; t < e; ++t) {
                            var r = a()[(n + 4 * t) >> 2],
                                i = Oe[r];
                            i && (Bn.deleteFramebuffer(i), (i.name = 0), (Oe[r] = null));
                        }
                    },
                    emscripten_glDeleteProgram: function (e) {
                        if (e) {
                            var n = Ge[e];
                            n ? (Bn.deleteProgram(n), (n.name = 0), (Ge[e] = null)) : Qe(1281);
                        }
                    },
                    emscripten_glDeleteRenderbuffers: function (e, n) {
                        for (var t = 0; t < e; t++) {
                            var r = a()[(n + 4 * t) >> 2],
                                i = je[r];
                            i && (Bn.deleteRenderbuffer(i), (i.name = 0), (je[r] = null));
                        }
                    },
                    emscripten_glDeleteSamplers: function (e, n) {
                        for (var t = 0; t < e; t++) {
                            var r = a()[(n + 4 * t) >> 2],
                                i = He[r];
                            i && (Bn.deleteSampler(i), (i.name = 0), (He[r] = null));
                        }
                    },
                    emscripten_glDeleteShader: function (e) {
                        if (e) {
                            var n = Ue[e];
                            n ? (Bn.deleteShader(n), (Ue[e] = null)) : Qe(1281);
                        }
                    },
                    emscripten_glDeleteSync: function (e) {
                        if (e) {
                            var n = Ne[e];
                            n ? (Bn.deleteSync(n), (n.name = 0), (Ne[e] = null)) : Qe(1281);
                        }
                    },
                    emscripten_glDeleteTextures: function (e, n) {
                        for (var t = 0; t < e; t++) {
                            var r = a()[(n + 4 * t) >> 2],
                                i = We[r];
                            i && (Bn.deleteTexture(i), (i.name = 0), (We[r] = null));
                        }
                    },
                    emscripten_glDeleteVertexArrays: function (e, n) {
                        for (var t = 0; t < e; t++) {
                            var r = a()[(n + 4 * t) >> 2];
                            Bn.deleteVertexArray(Ve[r]), (Ve[r] = null);
                        }
                    },
                    emscripten_glDeleteVertexArraysOES: function (e, n) {
                        for (var t = 0; t < e; t++) {
                            var r = a()[(n + 4 * t) >> 2];
                            Bn.deleteVertexArray(Ve[r]), (Ve[r] = null);
                        }
                    },
                    emscripten_glDepthMask: function (e) {
                        Bn.depthMask(!!e);
                    },
                    emscripten_glDisable: function (e) {
                        Bn.disable(e);
                    },
                    emscripten_glDisableVertexAttribArray: function (e) {
                        Bn.disableVertexAttribArray(e);
                    },
                    emscripten_glDrawArrays: function (e, n, t) {
                        Bn.drawArrays(e, n, t);
                    },
                    emscripten_glDrawArraysInstanced: function (e, n, t, r) {
                        Bn.drawArraysInstanced(e, n, t, r);
                    },
                    emscripten_glDrawArraysInstancedBaseInstanceWEBGL: function (e, n, t, r, a) {
                        Bn.X.drawArraysInstancedBaseInstanceWEBGL(e, n, t, r, a);
                    },
                    emscripten_glDrawBuffers: function (e, n) {
                        for (var t = nn[e], r = 0; r < e; r++) t[r] = a()[(n + 4 * r) >> 2];
                        Bn.drawBuffers(t);
                    },
                    emscripten_glDrawElements: function (e, n, t, r) {
                        Bn.drawElements(e, n, t, r);
                    },
                    emscripten_glDrawElementsInstanced: function (e, n, t, r, a) {
                        Bn.drawElementsInstanced(e, n, t, r, a);
                    },
                    emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL: function (e, n, t, r, a, i, o) {
                        Bn.X.drawElementsInstancedBaseVertexBaseInstanceWEBGL(e, n, t, r, a, i, o);
                    },
                    emscripten_glDrawRangeElements: function (e, n, t, r, a, i) {
                        Bn.drawElements(e, r, a, i);
                    },
                    emscripten_glEnable: function (e) {
                        Bn.enable(e);
                    },
                    emscripten_glEnableVertexAttribArray: function (e) {
                        Bn.enableVertexAttribArray(e);
                    },
                    emscripten_glFenceSync: function (e, n) {
                        return (e = Bn.fenceSync(e, n)) ? ((n = Ke(Ne)), (e.name = n), (Ne[n] = e), n) : 0;
                    },
                    emscripten_glFinish: function () {
                        Bn.finish();
                    },
                    emscripten_glFlush: function () {
                        Bn.flush();
                    },
                    emscripten_glFramebufferRenderbuffer: function (e, n, t, r) {
                        Bn.framebufferRenderbuffer(e, n, t, je[r]);
                    },
                    emscripten_glFramebufferTexture2D: function (e, n, t, r, a) {
                        Bn.framebufferTexture2D(e, n, t, We[r], a);
                    },
                    emscripten_glFrontFace: function (e) {
                        Bn.frontFace(e);
                    },
                    emscripten_glGenBuffers: function (e, n) {
                        tn(e, n, 'createBuffer', Le);
                    },
                    emscripten_glGenFramebuffers: function (e, n) {
                        tn(e, n, 'createFramebuffer', Oe);
                    },
                    emscripten_glGenRenderbuffers: function (e, n) {
                        tn(e, n, 'createRenderbuffer', je);
                    },
                    emscripten_glGenSamplers: function (e, n) {
                        tn(e, n, 'createSampler', He);
                    },
                    emscripten_glGenTextures: function (e, n) {
                        tn(e, n, 'createTexture', We);
                    },
                    emscripten_glGenVertexArrays: function (e, n) {
                        tn(e, n, 'createVertexArray', Ve);
                    },
                    emscripten_glGenVertexArraysOES: function (e, n) {
                        tn(e, n, 'createVertexArray', Ve);
                    },
                    emscripten_glGenerateMipmap: function (e) {
                        Bn.generateMipmap(e);
                    },
                    emscripten_glGetBufferParameteriv: function (e, n, t) {
                        t ? (a()[t >> 2] = Bn.getBufferParameter(e, n)) : Qe(1281);
                    },
                    emscripten_glGetError: function () {
                        var e = Bn.getError() || Ze;
                        return (Ze = 0), e;
                    },
                    emscripten_glGetFloatv: function (e, n) {
                        rn(e, n, 2);
                    },
                    emscripten_glGetFramebufferAttachmentParameteriv: function (e, n, t, r) {
                        ((e = Bn.getFramebufferAttachmentParameter(e, n, t)) instanceof WebGLRenderbuffer ||
                            e instanceof WebGLTexture) &&
                            (e = 0 | e.name),
                            (a()[r >> 2] = e);
                    },
                    emscripten_glGetIntegerv: function (e, n) {
                        rn(e, n, 0);
                    },
                    emscripten_glGetProgramInfoLog: function (e, n, t, r) {
                        null === (e = Bn.getProgramInfoLog(Ge[e])) && (e = '(unknown error)'),
                            (n = 0 < n && r ? Z(e, r, n) : 0),
                            t && (a()[t >> 2] = n);
                    },
                    emscripten_glGetProgramiv: function (e, n, t) {
                        if (t)
                            if (e >= Fe) Qe(1281);
                            else if (((e = Ge[e]), 35716 == n))
                                null === (e = Bn.getProgramInfoLog(e)) && (e = '(unknown error)'),
                                    (a()[t >> 2] = e.length + 1);
                            else if (35719 == n) {
                                if (!e.L)
                                    for (n = 0; n < Bn.getProgramParameter(e, 35718); ++n)
                                        e.L = Math.max(e.L, Bn.getActiveUniform(e, n).name.length + 1);
                                a()[t >> 2] = e.L;
                            } else if (35722 == n) {
                                if (!e.J)
                                    for (n = 0; n < Bn.getProgramParameter(e, 35721); ++n)
                                        e.J = Math.max(e.J, Bn.getActiveAttrib(e, n).name.length + 1);
                                a()[t >> 2] = e.J;
                            } else if (35381 == n) {
                                if (!e.K)
                                    for (n = 0; n < Bn.getProgramParameter(e, 35382); ++n)
                                        e.K = Math.max(e.K, Bn.getActiveUniformBlockName(e, n).length + 1);
                                a()[t >> 2] = e.K;
                            } else a()[t >> 2] = Bn.getProgramParameter(e, n);
                        else Qe(1281);
                    },
                    emscripten_glGetRenderbufferParameteriv: function (e, n, t) {
                        t ? (a()[t >> 2] = Bn.getRenderbufferParameter(e, n)) : Qe(1281);
                    },
                    emscripten_glGetShaderInfoLog: function (e, n, t, r) {
                        null === (e = Bn.getShaderInfoLog(Ue[e])) && (e = '(unknown error)'),
                            (n = 0 < n && r ? Z(e, r, n) : 0),
                            t && (a()[t >> 2] = n);
                    },
                    emscripten_glGetShaderPrecisionFormat: function (e, n, t, r) {
                        (e = Bn.getShaderPrecisionFormat(e, n)),
                            (a()[t >> 2] = e.rangeMin),
                            (a()[(t + 4) >> 2] = e.rangeMax),
                            (a()[r >> 2] = e.precision);
                    },
                    emscripten_glGetShaderiv: function (e, n, t) {
                        t
                            ? 35716 == n
                                ? (null === (e = Bn.getShaderInfoLog(Ue[e])) && (e = '(unknown error)'),
                                  (e = e ? e.length + 1 : 0),
                                  (a()[t >> 2] = e))
                                : 35720 == n
                                  ? ((e = (e = Bn.getShaderSource(Ue[e])) ? e.length + 1 : 0), (a()[t >> 2] = e))
                                  : (a()[t >> 2] = Bn.getShaderParameter(Ue[e], n))
                            : Qe(1281);
                    },
                    emscripten_glGetString: function (e) {
                        var n = ze[e];
                        if (!n) {
                            switch (e) {
                                case 7939:
                                    n = an(
                                        (n = (n = Bn.getSupportedExtensions() || []).concat(
                                            n.map(function (e) {
                                                return 'GL_' + e;
                                            })
                                        )).join(' ')
                                    );
                                    break;
                                case 7936:
                                case 7937:
                                case 37445:
                                case 37446:
                                    (n = Bn.getParameter(e)) || Qe(1280), (n = n && an(n));
                                    break;
                                case 7938:
                                    (n = Bn.getParameter(7938)),
                                        (n = an(
                                            (n =
                                                2 <= $e.version
                                                    ? 'OpenGL ES 3.0 (' + n + ')'
                                                    : 'OpenGL ES 2.0 (' + n + ')')
                                        ));
                                    break;
                                case 35724:
                                    var t = (n = Bn.getParameter(35724)).match(
                                        /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/
                                    );
                                    null !== t &&
                                        (3 == t[1].length && (t[1] += '0'),
                                        (n = 'OpenGL ES GLSL ES ' + t[1] + ' (' + n + ')')),
                                        (n = an(n));
                                    break;
                                default:
                                    Qe(1280);
                            }
                            ze[e] = n;
                        }
                        return n;
                    },
                    emscripten_glGetStringi: function (e, n) {
                        if (2 > $e.version) return Qe(1282), 0;
                        var t = Je[e];
                        return t
                            ? 0 > n || n >= t.length
                                ? (Qe(1281), 0)
                                : t[n]
                            : 7939 === e
                              ? ((t = (t = (t = Bn.getSupportedExtensions() || []).concat(
                                    t.map(function (e) {
                                        return 'GL_' + e;
                                    })
                                )).map(function (e) {
                                    return an(e);
                                })),
                                (t = Je[e] = t),
                                0 > n || n >= t.length ? (Qe(1281), 0) : t[n])
                              : (Qe(1280), 0);
                    },
                    emscripten_glGetUniformLocation: function (e, n) {
                        if (((n = Q(n)), (e = Ge[e]))) {
                            var t,
                                r = e,
                                a = r.G,
                                i = r.ia;
                            if (!a)
                                for (r.G = a = {}, r.ha = {}, t = 0; t < Bn.getProgramParameter(r, 35718); ++t) {
                                    var o = Bn.getActiveUniform(r, t),
                                        c = o.name;
                                    o = o.size;
                                    var u = on(c);
                                    u = 0 < u ? c.slice(0, u) : c;
                                    var s = r.V;
                                    for (r.V += o, i[u] = [o, s], c = 0; c < o; ++c) (a[s] = c), (r.ha[s++] = u);
                                }
                            if (
                                ((r = e.G),
                                (a = 0),
                                (i = n),
                                0 < (t = on(n)) && ((a = parseInt(n.slice(t + 1)) >>> 0), (i = n.slice(0, t))),
                                (i = e.ia[i]) && a < i[0] && (r[(a += i[1])] = r[a] || Bn.getUniformLocation(e, n)))
                            )
                                return a;
                        } else Qe(1281);
                        return -1;
                    },
                    emscripten_glInvalidateFramebuffer: function (e, n, t) {
                        for (var r = nn[n], i = 0; i < n; i++) r[i] = a()[(t + 4 * i) >> 2];
                        Bn.invalidateFramebuffer(e, r);
                    },
                    emscripten_glInvalidateSubFramebuffer: function (e, n, t, r, i, o, c) {
                        for (var u = nn[n], s = 0; s < n; s++) u[s] = a()[(t + 4 * s) >> 2];
                        Bn.invalidateSubFramebuffer(e, u, r, i, o, c);
                    },
                    emscripten_glIsSync: function (e) {
                        return Bn.isSync(Ne[e]);
                    },
                    emscripten_glIsTexture: function (e) {
                        return (e = We[e]) ? Bn.isTexture(e) : 0;
                    },
                    emscripten_glLineWidth: function (e) {
                        Bn.lineWidth(e);
                    },
                    emscripten_glLinkProgram: function (e) {
                        (e = Ge[e]), Bn.linkProgram(e), (e.G = 0), (e.ia = {});
                    },
                    emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL: function (e, n, t, r, o, c) {
                        Bn.da.multiDrawArraysInstancedBaseInstanceWEBGL(
                            e,
                            a(),
                            n >> 2,
                            a(),
                            t >> 2,
                            a(),
                            r >> 2,
                            i(),
                            o >> 2,
                            c
                        );
                    },
                    emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL: function (
                        e,
                        n,
                        t,
                        r,
                        o,
                        c,
                        u,
                        s
                    ) {
                        Bn.da.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
                            e,
                            a(),
                            n >> 2,
                            t,
                            a(),
                            r >> 2,
                            a(),
                            o >> 2,
                            a(),
                            c >> 2,
                            i(),
                            u >> 2,
                            s
                        );
                    },
                    emscripten_glPixelStorei: function (e, n) {
                        3317 == e && (Xe = n), Bn.pixelStorei(e, n);
                    },
                    emscripten_glReadBuffer: function (e) {
                        Bn.readBuffer(e);
                    },
                    emscripten_glReadPixels: function (e, n, t, r, a, i, o) {
                        if (2 <= $e.version)
                            if (Bn.R) Bn.readPixels(e, n, t, r, a, i, o);
                            else {
                                var c = cn(i);
                                Bn.readPixels(e, n, t, r, a, i, c, o >> (31 - Math.clz32(c.BYTES_PER_ELEMENT)));
                            }
                        else (o = un(i, a, t, r, o)) ? Bn.readPixels(e, n, t, r, a, i, o) : Qe(1280);
                    },
                    emscripten_glRenderbufferStorage: function (e, n, t, r) {
                        Bn.renderbufferStorage(e, n, t, r);
                    },
                    emscripten_glRenderbufferStorageMultisample: function (e, n, t, r, a) {
                        Bn.renderbufferStorageMultisample(e, n, t, r, a);
                    },
                    emscripten_glSamplerParameterf: function (e, n, t) {
                        Bn.samplerParameterf(He[e], n, t);
                    },
                    emscripten_glSamplerParameteri: function (e, n, t) {
                        Bn.samplerParameteri(He[e], n, t);
                    },
                    emscripten_glSamplerParameteriv: function (e, n, t) {
                        (t = a()[t >> 2]), Bn.samplerParameteri(He[e], n, t);
                    },
                    emscripten_glScissor: function (e, n, t, r) {
                        Bn.scissor(e, n, t, r);
                    },
                    emscripten_glShaderSource: function (e, n, t, r) {
                        for (var i = '', o = 0; o < n; ++o) {
                            var c = r ? a()[(r + 4 * o) >> 2] : -1;
                            i += Q(a()[(t + 4 * o) >> 2], 0 > c ? void 0 : c);
                        }
                        Bn.shaderSource(Ue[e], i);
                    },
                    emscripten_glStencilFunc: function (e, n, t) {
                        Bn.stencilFunc(e, n, t);
                    },
                    emscripten_glStencilFuncSeparate: function (e, n, t, r) {
                        Bn.stencilFuncSeparate(e, n, t, r);
                    },
                    emscripten_glStencilMask: function (e) {
                        Bn.stencilMask(e);
                    },
                    emscripten_glStencilMaskSeparate: function (e, n) {
                        Bn.stencilMaskSeparate(e, n);
                    },
                    emscripten_glStencilOp: function (e, n, t) {
                        Bn.stencilOp(e, n, t);
                    },
                    emscripten_glStencilOpSeparate: function (e, n, t, r) {
                        Bn.stencilOpSeparate(e, n, t, r);
                    },
                    emscripten_glTexImage2D: function (e, n, t, r, a, i, o, c, u) {
                        if (2 <= $e.version)
                            if (Bn.m) Bn.texImage2D(e, n, t, r, a, i, o, c, u);
                            else if (u) {
                                var s = cn(c);
                                Bn.texImage2D(e, n, t, r, a, i, o, c, s, u >> (31 - Math.clz32(s.BYTES_PER_ELEMENT)));
                            } else Bn.texImage2D(e, n, t, r, a, i, o, c, null);
                        else Bn.texImage2D(e, n, t, r, a, i, o, c, u ? un(c, o, r, a, u) : null);
                    },
                    emscripten_glTexParameterf: function (e, n, t) {
                        Bn.texParameterf(e, n, t);
                    },
                    emscripten_glTexParameterfv: function (e, n, t) {
                        (t = o()[t >> 2]), Bn.texParameterf(e, n, t);
                    },
                    emscripten_glTexParameteri: function (e, n, t) {
                        Bn.texParameteri(e, n, t);
                    },
                    emscripten_glTexParameteriv: function (e, n, t) {
                        (t = a()[t >> 2]), Bn.texParameteri(e, n, t);
                    },
                    emscripten_glTexStorage2D: function (e, n, t, r, a) {
                        Bn.texStorage2D(e, n, t, r, a);
                    },
                    emscripten_glTexSubImage2D: function (e, n, t, r, a, i, o, c, u) {
                        if (2 <= $e.version)
                            if (Bn.m) Bn.texSubImage2D(e, n, t, r, a, i, o, c, u);
                            else if (u) {
                                var s = cn(c);
                                Bn.texSubImage2D(
                                    e,
                                    n,
                                    t,
                                    r,
                                    a,
                                    i,
                                    o,
                                    c,
                                    s,
                                    u >> (31 - Math.clz32(s.BYTES_PER_ELEMENT))
                                );
                            } else Bn.texSubImage2D(e, n, t, r, a, i, o, c, null);
                        else (s = null), u && (s = un(c, o, a, i, u)), Bn.texSubImage2D(e, n, t, r, a, i, o, c, s);
                    },
                    emscripten_glUniform1f: function (e, n) {
                        Bn.uniform1f(sn(e), n);
                    },
                    emscripten_glUniform1fv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform1fv(sn(e), o(), t >> 2, n);
                        else {
                            if (288 >= n) for (var r = ln[n - 1], a = 0; a < n; ++a) r[a] = o()[(t + 4 * a) >> 2];
                            else r = o().subarray(t >> 2, (t + 4 * n) >> 2);
                            Bn.uniform1fv(sn(e), r);
                        }
                    },
                    emscripten_glUniform1i: function (e, n) {
                        Bn.uniform1i(sn(e), n);
                    },
                    emscripten_glUniform1iv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform1iv(sn(e), a(), t >> 2, n);
                        else {
                            if (288 >= n) for (var r = fn[n - 1], i = 0; i < n; ++i) r[i] = a()[(t + 4 * i) >> 2];
                            else r = a().subarray(t >> 2, (t + 4 * n) >> 2);
                            Bn.uniform1iv(sn(e), r);
                        }
                    },
                    emscripten_glUniform2f: function (e, n, t) {
                        Bn.uniform2f(sn(e), n, t);
                    },
                    emscripten_glUniform2fv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform2fv(sn(e), o(), t >> 2, 2 * n);
                        else {
                            if (144 >= n)
                                for (var r = ln[2 * n - 1], a = 0; a < 2 * n; a += 2)
                                    (r[a] = o()[(t + 4 * a) >> 2]), (r[a + 1] = o()[(t + (4 * a + 4)) >> 2]);
                            else r = o().subarray(t >> 2, (t + 8 * n) >> 2);
                            Bn.uniform2fv(sn(e), r);
                        }
                    },
                    emscripten_glUniform2i: function (e, n, t) {
                        Bn.uniform2i(sn(e), n, t);
                    },
                    emscripten_glUniform2iv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform2iv(sn(e), a(), t >> 2, 2 * n);
                        else {
                            if (144 >= n)
                                for (var r = fn[2 * n - 1], i = 0; i < 2 * n; i += 2)
                                    (r[i] = a()[(t + 4 * i) >> 2]), (r[i + 1] = a()[(t + (4 * i + 4)) >> 2]);
                            else r = a().subarray(t >> 2, (t + 8 * n) >> 2);
                            Bn.uniform2iv(sn(e), r);
                        }
                    },
                    emscripten_glUniform3f: function (e, n, t, r) {
                        Bn.uniform3f(sn(e), n, t, r);
                    },
                    emscripten_glUniform3fv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform3fv(sn(e), o(), t >> 2, 3 * n);
                        else {
                            if (96 >= n)
                                for (var r = ln[3 * n - 1], a = 0; a < 3 * n; a += 3)
                                    (r[a] = o()[(t + 4 * a) >> 2]),
                                        (r[a + 1] = o()[(t + (4 * a + 4)) >> 2]),
                                        (r[a + 2] = o()[(t + (4 * a + 8)) >> 2]);
                            else r = o().subarray(t >> 2, (t + 12 * n) >> 2);
                            Bn.uniform3fv(sn(e), r);
                        }
                    },
                    emscripten_glUniform3i: function (e, n, t, r) {
                        Bn.uniform3i(sn(e), n, t, r);
                    },
                    emscripten_glUniform3iv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform3iv(sn(e), a(), t >> 2, 3 * n);
                        else {
                            if (96 >= n)
                                for (var r = fn[3 * n - 1], i = 0; i < 3 * n; i += 3)
                                    (r[i] = a()[(t + 4 * i) >> 2]),
                                        (r[i + 1] = a()[(t + (4 * i + 4)) >> 2]),
                                        (r[i + 2] = a()[(t + (4 * i + 8)) >> 2]);
                            else r = a().subarray(t >> 2, (t + 12 * n) >> 2);
                            Bn.uniform3iv(sn(e), r);
                        }
                    },
                    emscripten_glUniform4f: function (e, n, t, r, a) {
                        Bn.uniform4f(sn(e), n, t, r, a);
                    },
                    emscripten_glUniform4fv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform4fv(sn(e), o(), t >> 2, 4 * n);
                        else {
                            if (72 >= n) {
                                var r = ln[4 * n - 1],
                                    a = o();
                                t >>= 2;
                                for (var i = 0; i < 4 * n; i += 4) {
                                    var c = t + i;
                                    (r[i] = a[c]), (r[i + 1] = a[c + 1]), (r[i + 2] = a[c + 2]), (r[i + 3] = a[c + 3]);
                                }
                            } else r = o().subarray(t >> 2, (t + 16 * n) >> 2);
                            Bn.uniform4fv(sn(e), r);
                        }
                    },
                    emscripten_glUniform4i: function (e, n, t, r, a) {
                        Bn.uniform4i(sn(e), n, t, r, a);
                    },
                    emscripten_glUniform4iv: function (e, n, t) {
                        if (2 <= $e.version) Bn.uniform4iv(sn(e), a(), t >> 2, 4 * n);
                        else {
                            if (72 >= n)
                                for (var r = fn[4 * n - 1], i = 0; i < 4 * n; i += 4)
                                    (r[i] = a()[(t + 4 * i) >> 2]),
                                        (r[i + 1] = a()[(t + (4 * i + 4)) >> 2]),
                                        (r[i + 2] = a()[(t + (4 * i + 8)) >> 2]),
                                        (r[i + 3] = a()[(t + (4 * i + 12)) >> 2]);
                            else r = a().subarray(t >> 2, (t + 16 * n) >> 2);
                            Bn.uniform4iv(sn(e), r);
                        }
                    },
                    emscripten_glUniformMatrix2fv: function (e, n, t, r) {
                        if (2 <= $e.version) Bn.uniformMatrix2fv(sn(e), !!t, o(), r >> 2, 4 * n);
                        else {
                            if (72 >= n)
                                for (var a = ln[4 * n - 1], i = 0; i < 4 * n; i += 4)
                                    (a[i] = o()[(r + 4 * i) >> 2]),
                                        (a[i + 1] = o()[(r + (4 * i + 4)) >> 2]),
                                        (a[i + 2] = o()[(r + (4 * i + 8)) >> 2]),
                                        (a[i + 3] = o()[(r + (4 * i + 12)) >> 2]);
                            else a = o().subarray(r >> 2, (r + 16 * n) >> 2);
                            Bn.uniformMatrix2fv(sn(e), !!t, a);
                        }
                    },
                    emscripten_glUniformMatrix3fv: function (e, n, t, r) {
                        if (2 <= $e.version) Bn.uniformMatrix3fv(sn(e), !!t, o(), r >> 2, 9 * n);
                        else {
                            if (32 >= n)
                                for (var a = ln[9 * n - 1], i = 0; i < 9 * n; i += 9)
                                    (a[i] = o()[(r + 4 * i) >> 2]),
                                        (a[i + 1] = o()[(r + (4 * i + 4)) >> 2]),
                                        (a[i + 2] = o()[(r + (4 * i + 8)) >> 2]),
                                        (a[i + 3] = o()[(r + (4 * i + 12)) >> 2]),
                                        (a[i + 4] = o()[(r + (4 * i + 16)) >> 2]),
                                        (a[i + 5] = o()[(r + (4 * i + 20)) >> 2]),
                                        (a[i + 6] = o()[(r + (4 * i + 24)) >> 2]),
                                        (a[i + 7] = o()[(r + (4 * i + 28)) >> 2]),
                                        (a[i + 8] = o()[(r + (4 * i + 32)) >> 2]);
                            else a = o().subarray(r >> 2, (r + 36 * n) >> 2);
                            Bn.uniformMatrix3fv(sn(e), !!t, a);
                        }
                    },
                    emscripten_glUniformMatrix4fv: function (e, n, t, r) {
                        if (2 <= $e.version) Bn.uniformMatrix4fv(sn(e), !!t, o(), r >> 2, 16 * n);
                        else {
                            if (18 >= n) {
                                var a = ln[16 * n - 1],
                                    i = o();
                                r >>= 2;
                                for (var c = 0; c < 16 * n; c += 16) {
                                    var u = r + c;
                                    (a[c] = i[u]),
                                        (a[c + 1] = i[u + 1]),
                                        (a[c + 2] = i[u + 2]),
                                        (a[c + 3] = i[u + 3]),
                                        (a[c + 4] = i[u + 4]),
                                        (a[c + 5] = i[u + 5]),
                                        (a[c + 6] = i[u + 6]),
                                        (a[c + 7] = i[u + 7]),
                                        (a[c + 8] = i[u + 8]),
                                        (a[c + 9] = i[u + 9]),
                                        (a[c + 10] = i[u + 10]),
                                        (a[c + 11] = i[u + 11]),
                                        (a[c + 12] = i[u + 12]),
                                        (a[c + 13] = i[u + 13]),
                                        (a[c + 14] = i[u + 14]),
                                        (a[c + 15] = i[u + 15]);
                                }
                            } else a = o().subarray(r >> 2, (r + 64 * n) >> 2);
                            Bn.uniformMatrix4fv(sn(e), !!t, a);
                        }
                    },
                    emscripten_glUseProgram: function (e) {
                        (e = Ge[e]), Bn.useProgram(e), (Bn.ka = e);
                    },
                    emscripten_glVertexAttrib1f: function (e, n) {
                        Bn.vertexAttrib1f(e, n);
                    },
                    emscripten_glVertexAttrib2fv: function (e, n) {
                        Bn.vertexAttrib2f(e, o()[n >> 2], o()[(n + 4) >> 2]);
                    },
                    emscripten_glVertexAttrib3fv: function (e, n) {
                        Bn.vertexAttrib3f(e, o()[n >> 2], o()[(n + 4) >> 2], o()[(n + 8) >> 2]);
                    },
                    emscripten_glVertexAttrib4fv: function (e, n) {
                        Bn.vertexAttrib4f(e, o()[n >> 2], o()[(n + 4) >> 2], o()[(n + 8) >> 2], o()[(n + 12) >> 2]);
                    },
                    emscripten_glVertexAttribDivisor: function (e, n) {
                        Bn.vertexAttribDivisor(e, n);
                    },
                    emscripten_glVertexAttribIPointer: function (e, n, t, r, a) {
                        Bn.vertexAttribIPointer(e, n, t, r, a);
                    },
                    emscripten_glVertexAttribPointer: function (e, n, t, r, a, i) {
                        Bn.vertexAttribPointer(e, n, t, !!r, a, i);
                    },
                    emscripten_glViewport: function (e, n, t, r) {
                        Bn.viewport(e, n, t, r);
                    },
                    emscripten_glWaitSync: function (e, n, t, r) {
                        Bn.waitSync(Ne[e], n, (t >>> 0) + 4294967296 * r);
                    },
                    emscripten_receive_on_main_thread_js: function (e, n, t) {
                        (pn.length = n), (t >>= 3);
                        for (var r = 0; r < n; r++) pn[r] = c()[t + r];
                        return (0 > e ? ge[-e - 1] : Gn[e]).apply(null, pn);
                    },
                    emscripten_resize_heap: function (e) {
                        var n = r().length;
                        if ((e >>>= 0) <= n || 2147483648 < e) return !1;
                        for (var t = 1; 4 >= t; t *= 2) {
                            var a = n * (1 + 0.2 / t);
                            (a = Math.min(a, e + 100663296)),
                                0 < (a = Math.max(e, a)) % 65536 && (a += 65536 - (a % 65536));
                            e: {
                                try {
                                    F.grow((Math.min(2147483648, a) - j.byteLength + 65535) >>> 16), ee(F.buffer);
                                    var i = 1;
                                    break e;
                                } catch (e) {}
                                i = void 0;
                            }
                            if (i) return !0;
                        }
                        return !1;
                    },
                    emscripten_set_canvas_element_size: function (e, n, t) {
                        return mn(e) ? dn(e, n, t) : gn(e, n, t);
                    },
                    emscripten_unwind_to_js_event_loop: function () {
                        throw 'unwind';
                    },
                    emscripten_webgl_create_context: function (e, n) {
                        return (function (e, n) {
                            n >>= 2;
                            var t = a()[n + 6];
                            if (
                                ((n = {
                                    alpha: !!a()[n],
                                    depth: !!a()[n + 1],
                                    stencil: !!a()[n + 2],
                                    antialias: !!a()[n + 3],
                                    premultipliedAlpha: !!a()[n + 4],
                                    preserveDrawingBuffer: !!a()[n + 5],
                                    powerPreference: hn[t],
                                    failIfMajorPerformanceCaveat: !!a()[n + 7],
                                    ba: a()[n + 8],
                                    Oa: a()[n + 9],
                                    Z: a()[n + 10],
                                    na: a()[n + 11],
                                    Ra: a()[n + 12],
                                    Sa: a()[n + 13],
                                }),
                                !(e = mn(e)))
                            )
                                return 0;
                            if ((e.l && (e = e.l), n.na)) {
                                if (
                                    !(
                                        e.transferControlToOffscreen ||
                                        ('undefined' != typeof OffscreenCanvas && e instanceof OffscreenCanvas)
                                    )
                                )
                                    return 0;
                                if (e.transferControlToOffscreen) {
                                    if (e.I) {
                                        if (!qe[e.id]) return 0;
                                    } else
                                        (qe[e.id] = { canvas: e.transferControlToOffscreen(), g: Yn(12), id: e.id }),
                                            (e.I = !0);
                                    e = qe[e.id];
                                }
                            }
                            return (function (e, n) {
                                e.$ ||
                                    ((e.$ = e.getContext),
                                    (e.getContext = function (n, t) {
                                        return ('webgl' == n) == (t = e.$(n, t)) instanceof WebGLRenderingContext
                                            ? t
                                            : null;
                                    }));
                                var t = 1 < n.ba ? e.getContext('webgl2', n) : e.getContext('webgl', n);
                                return t
                                    ? (function (e, n) {
                                          var t = Yn(8);
                                          a()[(t + 4) >> 2] = Un();
                                          var r = { Na: t, attributes: n, version: n.ba, v: e };
                                          return (
                                              e.canvas && (e.canvas.H = r),
                                              (Ye[t] = r),
                                              (void 0 === n.Z || n.Z) &&
                                                  (function (e) {
                                                      if ((e || (e = $e), !e.ra)) {
                                                          e.ra = !0;
                                                          var n = e.v;
                                                          !(function (e) {
                                                              var n = e.getExtension('ANGLE_instanced_arrays');
                                                              n &&
                                                                  ((e.vertexAttribDivisor = function (e, t) {
                                                                      n.vertexAttribDivisorANGLE(e, t);
                                                                  }),
                                                                  (e.drawArraysInstanced = function (e, t, r, a) {
                                                                      n.drawArraysInstancedANGLE(e, t, r, a);
                                                                  }),
                                                                  (e.drawElementsInstanced = function (e, t, r, a, i) {
                                                                      n.drawElementsInstancedANGLE(e, t, r, a, i);
                                                                  }));
                                                          })(n),
                                                              (function (e) {
                                                                  var n = e.getExtension('OES_vertex_array_object');
                                                                  n &&
                                                                      ((e.createVertexArray = function () {
                                                                          return n.createVertexArrayOES();
                                                                      }),
                                                                      (e.deleteVertexArray = function (e) {
                                                                          n.deleteVertexArrayOES(e);
                                                                      }),
                                                                      (e.bindVertexArray = function (e) {
                                                                          n.bindVertexArrayOES(e);
                                                                      }),
                                                                      (e.isVertexArray = function (e) {
                                                                          return n.isVertexArrayOES(e);
                                                                      }));
                                                              })(n),
                                                              (function (e) {
                                                                  var n = e.getExtension('WEBGL_draw_buffers');
                                                                  n &&
                                                                      (e.drawBuffers = function (e, t) {
                                                                          n.drawBuffersWEBGL(e, t);
                                                                      });
                                                              })(n),
                                                              (n.X = n.getExtension(
                                                                  'WEBGL_draw_instanced_base_vertex_base_instance'
                                                              )),
                                                              (n.da = n.getExtension(
                                                                  'WEBGL_multi_draw_instanced_base_vertex_base_instance'
                                                              )),
                                                              2 <= e.version &&
                                                                  (n.Y = n.getExtension(
                                                                      'EXT_disjoint_timer_query_webgl2'
                                                                  )),
                                                              (2 > e.version || !n.Y) &&
                                                                  (n.Y = n.getExtension('EXT_disjoint_timer_query')),
                                                              (n.Pa = n.getExtension('WEBGL_multi_draw')),
                                                              (n.getSupportedExtensions() || []).forEach(function (e) {
                                                                  e.includes('lose_context') ||
                                                                      e.includes('debug') ||
                                                                      n.getExtension(e);
                                                              });
                                                      }
                                                  })(r),
                                              t
                                          );
                                      })(t, n)
                                    : 0;
                            })(e, n);
                        })(e, n);
                    },
                    emscripten_webgl_init_context_attributes: function (e) {
                        for (var n = e >> 2, t = 0; 14 > t; ++t) a()[n + t] = 0;
                        (a()[n] = a()[n + 1] = a()[n + 3] = a()[n + 4] = a()[n + 8] = a()[n + 10] = 1),
                            S && (a()[(e + 48) >> 2] = 1);
                    },
                    emscripten_webgl_make_context_current: function (e) {
                        return ($e = Ye[e]), (u.La = Bn = $e && $e.v), !e || Bn ? 0 : -5;
                    },
                    environ_get: wn,
                    environ_sizes_get: Sn,
                    exit: function (e) {
                        ot(e);
                    },
                    fd_close: xn,
                    fd_pread: An,
                    fd_read: Tn,
                    fd_seek: kn,
                    fd_write: Mn,
                    getTempRet0: function () {
                        return B;
                    },
                    invoke_ii: function (e, n) {
                        var t = $n();
                        try {
                            return xe(e)(n);
                        } catch (e) {
                            if ((et(t), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_iii: function (e, n, t) {
                        var r = $n();
                        try {
                            return xe(e)(n, t);
                        } catch (e) {
                            if ((et(r), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_iiii: function (e, n, t, r) {
                        var a = $n();
                        try {
                            return xe(e)(n, t, r);
                        } catch (e) {
                            if ((et(a), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_iiiii: function (e, n, t, r, a) {
                        var i = $n();
                        try {
                            return xe(e)(n, t, r, a);
                        } catch (e) {
                            if ((et(i), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_iiiiii: function (e, n, t, r, a, i) {
                        var o = $n();
                        try {
                            return xe(e)(n, t, r, a, i);
                        } catch (e) {
                            if ((et(o), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_iiiiiii: function (e, n, t, r, a, i, o) {
                        var c = $n();
                        try {
                            return xe(e)(n, t, r, a, i, o);
                        } catch (e) {
                            if ((et(c), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_v: function (e) {
                        var n = $n();
                        try {
                            xe(e)();
                        } catch (e) {
                            if ((et(n), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_vi: function (e, n) {
                        var t = $n();
                        try {
                            xe(e)(n);
                        } catch (e) {
                            if ((et(t), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_vii: function (e, n, t) {
                        var r = $n();
                        try {
                            xe(e)(n, t);
                        } catch (e) {
                            if ((et(r), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_viii: function (e, n, t, r) {
                        var a = $n();
                        try {
                            xe(e)(n, t, r);
                        } catch (e) {
                            if ((et(a), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_viiii: function (e, n, t, r, a) {
                        var i = $n();
                        try {
                            xe(e)(n, t, r, a);
                        } catch (e) {
                            if ((et(i), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_viiiii: function (e, n, t, r, a, i) {
                        var o = $n();
                        try {
                            xe(e)(n, t, r, a, i);
                        } catch (e) {
                            if ((et(o), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_viiiiii: function (e, n, t, r, a, i, o) {
                        var c = $n();
                        try {
                            xe(e)(n, t, r, a, i, o);
                        } catch (e) {
                            if ((et(c), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_viiiiiii: function (e, n, t, r, a, i, o, c) {
                        var u = $n();
                        try {
                            xe(e)(n, t, r, a, i, o, c);
                        } catch (e) {
                            if ((et(u), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    invoke_viiiiiiii: function (e, n, t, r, a, i, o, c, u) {
                        var s = $n();
                        try {
                            xe(e)(n, t, r, a, i, o, c, u);
                        } catch (e) {
                            if ((et(s), e !== e + 0 && 'longjmp' !== e)) throw e;
                            Kn(1, 0);
                        }
                    },
                    memory: F || u.wasmMemory,
                    setTempRet0: function (e) {
                        B = e;
                    },
                    strftime_l: function (e, n, r, i) {
                        return (function (e, n, r, i) {
                            function o(e, n, t) {
                                for (e = 'number' == typeof e ? e.toString() : e || ''; e.length < n; ) e = t[0] + e;
                                return e;
                            }
                            function c(e, n) {
                                return o(e, n, '0');
                            }
                            function u(e, n) {
                                function t(e) {
                                    return 0 > e ? -1 : 0 < e ? 1 : 0;
                                }
                                var r;
                                return (
                                    0 === (r = t(e.getFullYear() - n.getFullYear())) &&
                                        0 === (r = t(e.getMonth() - n.getMonth())) &&
                                        (r = t(e.getDate() - n.getDate())),
                                    r
                                );
                            }
                            function s(e) {
                                switch (e.getDay()) {
                                    case 0:
                                        return new Date(e.getFullYear() - 1, 11, 29);
                                    case 1:
                                        return e;
                                    case 2:
                                        return new Date(e.getFullYear(), 0, 3);
                                    case 3:
                                        return new Date(e.getFullYear(), 0, 2);
                                    case 4:
                                        return new Date(e.getFullYear(), 0, 1);
                                    case 5:
                                        return new Date(e.getFullYear() - 1, 11, 31);
                                    case 6:
                                        return new Date(e.getFullYear() - 1, 11, 30);
                                }
                            }
                            function l(e) {
                                e = Pn(new Date(e.h + 1900, 0, 1), e.P);
                                var n = new Date(e.getFullYear() + 1, 0, 4),
                                    t = s(new Date(e.getFullYear(), 0, 4));
                                return (
                                    (n = s(n)),
                                    0 >= u(t, e)
                                        ? 0 >= u(n, e)
                                            ? e.getFullYear() + 1
                                            : e.getFullYear()
                                        : e.getFullYear() - 1
                                );
                            }
                            var f = a()[(i + 40) >> 2];
                            for (var _ in ((i = {
                                Ha: a()[i >> 2],
                                Ga: a()[(i + 4) >> 2],
                                N: a()[(i + 8) >> 2],
                                F: a()[(i + 12) >> 2],
                                u: a()[(i + 16) >> 2],
                                h: a()[(i + 20) >> 2],
                                O: a()[(i + 24) >> 2],
                                P: a()[(i + 28) >> 2],
                                Ua: a()[(i + 32) >> 2],
                                Fa: a()[(i + 36) >> 2],
                                Ia: f ? Q(f) : '',
                            }),
                            (r = Q(r)),
                            (f = {
                                '%c': '%a %b %d %H:%M:%S %Y',
                                '%D': '%m/%d/%y',
                                '%F': '%Y-%m-%d',
                                '%h': '%b',
                                '%r': '%I:%M:%S %p',
                                '%R': '%H:%M',
                                '%T': '%H:%M:%S',
                                '%x': '%m/%d/%y',
                                '%X': '%H:%M:%S',
                                '%Ec': '%c',
                                '%EC': '%C',
                                '%Ex': '%m/%d/%y',
                                '%EX': '%H:%M:%S',
                                '%Ey': '%y',
                                '%EY': '%Y',
                                '%Od': '%d',
                                '%Oe': '%e',
                                '%OH': '%H',
                                '%OI': '%I',
                                '%Om': '%m',
                                '%OM': '%M',
                                '%OS': '%S',
                                '%Ou': '%u',
                                '%OU': '%U',
                                '%OV': '%V',
                                '%Ow': '%w',
                                '%OW': '%W',
                                '%Oy': '%y',
                            })))
                                r = r.replace(new RegExp(_, 'g'), f[_]);
                            var p = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
                                m =
                                    'January February March April May June July August September October November December'.split(
                                        ' '
                                    );
                            for (_ in (f = {
                                '%a': function (e) {
                                    return p[e.O].substring(0, 3);
                                },
                                '%A': function (e) {
                                    return p[e.O];
                                },
                                '%b': function (e) {
                                    return m[e.u].substring(0, 3);
                                },
                                '%B': function (e) {
                                    return m[e.u];
                                },
                                '%C': function (e) {
                                    return c(((e.h + 1900) / 100) | 0, 2);
                                },
                                '%d': function (e) {
                                    return c(e.F, 2);
                                },
                                '%e': function (e) {
                                    return o(e.F, 2, ' ');
                                },
                                '%g': function (e) {
                                    return l(e).toString().substring(2);
                                },
                                '%G': function (e) {
                                    return l(e);
                                },
                                '%H': function (e) {
                                    return c(e.N, 2);
                                },
                                '%I': function (e) {
                                    return 0 == (e = e.N) ? (e = 12) : 12 < e && (e -= 12), c(e, 2);
                                },
                                '%j': function (e) {
                                    return c(e.F + Dn(En(e.h + 1900) ? Rn : In, e.u - 1), 3);
                                },
                                '%m': function (e) {
                                    return c(e.u + 1, 2);
                                },
                                '%M': function (e) {
                                    return c(e.Ga, 2);
                                },
                                '%n': function () {
                                    return '\n';
                                },
                                '%p': function (e) {
                                    return 0 <= e.N && 12 > e.N ? 'AM' : 'PM';
                                },
                                '%S': function (e) {
                                    return c(e.Ha, 2);
                                },
                                '%t': function () {
                                    return '\t';
                                },
                                '%u': function (e) {
                                    return e.O || 7;
                                },
                                '%U': function (e) {
                                    var n = new Date(e.h + 1900, 0, 1),
                                        t = 0 === n.getDay() ? n : Pn(n, 7 - n.getDay());
                                    return 0 > u(t, (e = new Date(e.h + 1900, e.u, e.F)))
                                        ? c(
                                              Math.ceil(
                                                  (31 -
                                                      t.getDate() +
                                                      (Dn(En(e.getFullYear()) ? Rn : In, e.getMonth() - 1) - 31) +
                                                      e.getDate()) /
                                                      7
                                              ),
                                              2
                                          )
                                        : 0 === u(t, n)
                                          ? '01'
                                          : '00';
                                },
                                '%V': function (e) {
                                    var n = new Date(e.h + 1901, 0, 4),
                                        t = s(new Date(e.h + 1900, 0, 4));
                                    n = s(n);
                                    var r = Pn(new Date(e.h + 1900, 0, 1), e.P);
                                    return 0 > u(r, t)
                                        ? '53'
                                        : 0 >= u(n, r)
                                          ? '01'
                                          : c(
                                                Math.ceil(
                                                    (t.getFullYear() < e.h + 1900
                                                        ? e.P + 32 - t.getDate()
                                                        : e.P + 1 - t.getDate()) / 7
                                                ),
                                                2
                                            );
                                },
                                '%w': function (e) {
                                    return e.O;
                                },
                                '%W': function (e) {
                                    var n = new Date(e.h, 0, 1),
                                        t = 1 === n.getDay() ? n : Pn(n, 0 === n.getDay() ? 1 : 7 - n.getDay() + 1);
                                    return 0 > u(t, (e = new Date(e.h + 1900, e.u, e.F)))
                                        ? c(
                                              Math.ceil(
                                                  (31 -
                                                      t.getDate() +
                                                      (Dn(En(e.getFullYear()) ? Rn : In, e.getMonth() - 1) - 31) +
                                                      e.getDate()) /
                                                      7
                                              ),
                                              2
                                          )
                                        : 0 === u(t, n)
                                          ? '01'
                                          : '00';
                                },
                                '%y': function (e) {
                                    return (e.h + 1900).toString().substring(2);
                                },
                                '%Y': function (e) {
                                    return e.h + 1900;
                                },
                                '%z': function (e) {
                                    var n = 0 <= (e = e.Fa);
                                    return (
                                        (e = Math.abs(e) / 60),
                                        (n ? '+' : '-') + String('0000' + ((e / 60) * 100 + (e % 60))).slice(-4)
                                    );
                                },
                                '%Z': function (e) {
                                    return e.Ia;
                                },
                                '%%': function () {
                                    return '%';
                                },
                            }))
                                r.includes(_) && (r = r.replace(new RegExp(_, 'g'), f[_](i)));
                            return (
                                (_ = (function (e) {
                                    var n = Array($(e) + 1);
                                    return K(e, n, 0, n.length), n;
                                })(r)),
                                _.length > n
                                    ? 0
                                    : ((function (e, n) {
                                          t().set(e, n);
                                      })(_, e),
                                      _.length - 1)
                            );
                        })(e, n, r, i);
                    },
                };
            !(function () {
                function e(e, n) {
                    if (
                        ((u.asm = e.exports),
                        we.U.push(u.asm.emscripten_tls_init),
                        (te = u.asm.__indirect_function_table),
                        ae.unshift(u.asm.__wasm_call_ctors),
                        (L = n),
                        !A)
                    ) {
                        var t = we.j.length;
                        we.j.forEach(function (e) {
                            we.aa(e, function () {
                                if (
                                    !--t &&
                                    (le--,
                                    u.monitorRunDependencies && u.monitorRunDependencies(le),
                                    0 == le && (null !== fe && (clearInterval(fe), (fe = null)), _e))
                                ) {
                                    var e = _e;
                                    (_e = null), e();
                                }
                            });
                        });
                    }
                }
                function n(n) {
                    e(n.instance, n.module);
                }
                function t(e) {
                    return (function () {
                        if (!P && (w || S)) {
                            if ('function' == typeof fetch && !se.startsWith('file://'))
                                return fetch(se, { credentials: 'same-origin' })
                                    .then(function (e) {
                                        if (!e.ok) throw "failed to load wasm binary file at '" + se + "'";
                                        return e.arrayBuffer();
                                    })
                                    .catch(function () {
                                        return de();
                                    });
                            if (p)
                                return new Promise(function (e, n) {
                                    p(
                                        se,
                                        function (n) {
                                            e(new Uint8Array(n));
                                        },
                                        n
                                    );
                                });
                        }
                        return Promise.resolve().then(function () {
                            return de();
                        });
                    })()
                        .then(function (e) {
                            return WebAssembly.instantiate(e, r);
                        })
                        .then(function (e) {
                            return e;
                        })
                        .then(e, function (e) {
                            R('failed to asynchronously prepare wasm: ' + e), pe(e);
                        });
                }
                var r = { env: On, wasi_snapshot_preview1: On };
                if ((A || (le++, u.monitorRunDependencies && u.monitorRunDependencies(le)), u.instantiateWasm))
                    try {
                        return u.instantiateWasm(r, e);
                    } catch (e) {
                        return R('Module.instantiateWasm callback failed with error: ' + e), !1;
                    }
                (P ||
                'function' != typeof WebAssembly.instantiateStreaming ||
                me() ||
                se.startsWith('file://') ||
                'function' != typeof fetch
                    ? t(n)
                    : fetch(se, { credentials: 'same-origin' }).then(function (e) {
                          return WebAssembly.instantiateStreaming(e, r).then(n, function (e) {
                              return (
                                  R('wasm streaming compile failed: ' + e),
                                  R('falling back to ArrayBuffer instantiation'),
                                  t(n)
                              );
                          });
                      })
                ).catch(l);
            })(),
                (u.___wasm_call_ctors = function () {
                    return (u.___wasm_call_ctors = u.asm.__wasm_call_ctors).apply(null, arguments);
                }),
                (u._canvas_destroy = function () {
                    return (u._canvas_destroy = u.asm.canvas_destroy).apply(null, arguments);
                }),
                (u._canvas_saveLayer = function () {
                    return (u._canvas_saveLayer = u.asm.canvas_saveLayer).apply(null, arguments);
                }),
                (u._canvas_save = function () {
                    return (u._canvas_save = u.asm.canvas_save).apply(null, arguments);
                }),
                (u._canvas_restore = function () {
                    return (u._canvas_restore = u.asm.canvas_restore).apply(null, arguments);
                }),
                (u._canvas_restoreToCount = function () {
                    return (u._canvas_restoreToCount = u.asm.canvas_restoreToCount).apply(null, arguments);
                }),
                (u._canvas_getSaveCount = function () {
                    return (u._canvas_getSaveCount = u.asm.canvas_getSaveCount).apply(null, arguments);
                }),
                (u._canvas_translate = function () {
                    return (u._canvas_translate = u.asm.canvas_translate).apply(null, arguments);
                }),
                (u._canvas_scale = function () {
                    return (u._canvas_scale = u.asm.canvas_scale).apply(null, arguments);
                }),
                (u._canvas_rotate = function () {
                    return (u._canvas_rotate = u.asm.canvas_rotate).apply(null, arguments);
                }),
                (u._canvas_skew = function () {
                    return (u._canvas_skew = u.asm.canvas_skew).apply(null, arguments);
                }),
                (u._canvas_transform = function () {
                    return (u._canvas_transform = u.asm.canvas_transform).apply(null, arguments);
                }),
                (u._canvas_clipRect = function () {
                    return (u._canvas_clipRect = u.asm.canvas_clipRect).apply(null, arguments);
                }),
                (u._canvas_clipRRect = function () {
                    return (u._canvas_clipRRect = u.asm.canvas_clipRRect).apply(null, arguments);
                }),
                (u._canvas_clipPath = function () {
                    return (u._canvas_clipPath = u.asm.canvas_clipPath).apply(null, arguments);
                }),
                (u._canvas_drawColor = function () {
                    return (u._canvas_drawColor = u.asm.canvas_drawColor).apply(null, arguments);
                }),
                (u._canvas_drawLine = function () {
                    return (u._canvas_drawLine = u.asm.canvas_drawLine).apply(null, arguments);
                }),
                (u._canvas_drawPaint = function () {
                    return (u._canvas_drawPaint = u.asm.canvas_drawPaint).apply(null, arguments);
                }),
                (u._canvas_drawRect = function () {
                    return (u._canvas_drawRect = u.asm.canvas_drawRect).apply(null, arguments);
                }),
                (u._canvas_drawRRect = function () {
                    return (u._canvas_drawRRect = u.asm.canvas_drawRRect).apply(null, arguments);
                }),
                (u._canvas_drawDRRect = function () {
                    return (u._canvas_drawDRRect = u.asm.canvas_drawDRRect).apply(null, arguments);
                }),
                (u._canvas_drawOval = function () {
                    return (u._canvas_drawOval = u.asm.canvas_drawOval).apply(null, arguments);
                }),
                (u._canvas_drawCircle = function () {
                    return (u._canvas_drawCircle = u.asm.canvas_drawCircle).apply(null, arguments);
                }),
                (u._canvas_drawArc = function () {
                    return (u._canvas_drawArc = u.asm.canvas_drawArc).apply(null, arguments);
                }),
                (u._canvas_drawPath = function () {
                    return (u._canvas_drawPath = u.asm.canvas_drawPath).apply(null, arguments);
                }),
                (u._canvas_drawPicture = function () {
                    return (u._canvas_drawPicture = u.asm.canvas_drawPicture).apply(null, arguments);
                }),
                (u._canvas_getTransform = function () {
                    return (u._canvas_getTransform = u.asm.canvas_getTransform).apply(null, arguments);
                }),
                (u._canvas_getLocalClipBounds = function () {
                    return (u._canvas_getLocalClipBounds = u.asm.canvas_getLocalClipBounds).apply(null, arguments);
                }),
                (u._canvas_getDeviceClipBounds = function () {
                    return (u._canvas_getDeviceClipBounds = u.asm.canvas_getDeviceClipBounds).apply(null, arguments);
                }),
                (u._contourMeasureIter_create = function () {
                    return (u._contourMeasureIter_create = u.asm.contourMeasureIter_create).apply(null, arguments);
                }),
                (u._contourMeasureIter_next = function () {
                    return (u._contourMeasureIter_next = u.asm.contourMeasureIter_next).apply(null, arguments);
                }),
                (u._contourMeasure_dispose = function () {
                    return (u._contourMeasure_dispose = u.asm.contourMeasure_dispose).apply(null, arguments);
                }),
                (u._contourMeasure_length = function () {
                    return (u._contourMeasure_length = u.asm.contourMeasure_length).apply(null, arguments);
                }),
                (u._contourMeasure_isClosed = function () {
                    return (u._contourMeasure_isClosed = u.asm.contourMeasure_isClosed).apply(null, arguments);
                }),
                (u._contourMeasure_getPosTan = function () {
                    return (u._contourMeasure_getPosTan = u.asm.contourMeasure_getPosTan).apply(null, arguments);
                }),
                (u._contourMeasure_getSegment = function () {
                    return (u._contourMeasure_getSegment = u.asm.contourMeasure_getSegment).apply(null, arguments);
                }),
                (u._paint_create = function () {
                    return (u._paint_create = u.asm.paint_create).apply(null, arguments);
                }),
                (u._paint_destroy = function () {
                    return (u._paint_destroy = u.asm.paint_destroy).apply(null, arguments);
                }),
                (u._paint_setBlendMode = function () {
                    return (u._paint_setBlendMode = u.asm.paint_setBlendMode).apply(null, arguments);
                }),
                (u._paint_setStyle = function () {
                    return (u._paint_setStyle = u.asm.paint_setStyle).apply(null, arguments);
                }),
                (u._paint_getStyle = function () {
                    return (u._paint_getStyle = u.asm.paint_getStyle).apply(null, arguments);
                }),
                (u._paint_setStrokeWidth = function () {
                    return (u._paint_setStrokeWidth = u.asm.paint_setStrokeWidth).apply(null, arguments);
                }),
                (u._paint_getStrokeWidth = function () {
                    return (u._paint_getStrokeWidth = u.asm.paint_getStrokeWidth).apply(null, arguments);
                }),
                (u._paint_setStrokeCap = function () {
                    return (u._paint_setStrokeCap = u.asm.paint_setStrokeCap).apply(null, arguments);
                }),
                (u._paint_getStrokeCap = function () {
                    return (u._paint_getStrokeCap = u.asm.paint_getStrokeCap).apply(null, arguments);
                }),
                (u._paint_setStrokeJoin = function () {
                    return (u._paint_setStrokeJoin = u.asm.paint_setStrokeJoin).apply(null, arguments);
                }),
                (u._paint_getStrokeJoin = function () {
                    return (u._paint_getStrokeJoin = u.asm.paint_getStrokeJoin).apply(null, arguments);
                }),
                (u._paint_setAntiAlias = function () {
                    return (u._paint_setAntiAlias = u.asm.paint_setAntiAlias).apply(null, arguments);
                }),
                (u._paint_getAntiAlias = function () {
                    return (u._paint_getAntiAlias = u.asm.paint_getAntiAlias).apply(null, arguments);
                }),
                (u._paint_setColorInt = function () {
                    return (u._paint_setColorInt = u.asm.paint_setColorInt).apply(null, arguments);
                }),
                (u._paint_getColorInt = function () {
                    return (u._paint_getColorInt = u.asm.paint_getColorInt).apply(null, arguments);
                }),
                (u._paint_setMiterLimit = function () {
                    return (u._paint_setMiterLimit = u.asm.paint_setMiterLimit).apply(null, arguments);
                }),
                (u._paint_getMiterLImit = function () {
                    return (u._paint_getMiterLImit = u.asm.paint_getMiterLImit).apply(null, arguments);
                }),
                (u._path_create = function () {
                    return (u._path_create = u.asm.path_create).apply(null, arguments);
                }),
                (u._path_destroy = function () {
                    return (u._path_destroy = u.asm.path_destroy).apply(null, arguments);
                }),
                (u._path_copy = function () {
                    return (u._path_copy = u.asm.path_copy).apply(null, arguments);
                }),
                (u._path_setFillType = function () {
                    return (u._path_setFillType = u.asm.path_setFillType).apply(null, arguments);
                }),
                (u._path_getFillType = function () {
                    return (u._path_getFillType = u.asm.path_getFillType).apply(null, arguments);
                }),
                (u._path_moveTo = function () {
                    return (u._path_moveTo = u.asm.path_moveTo).apply(null, arguments);
                }),
                (u._path_relativeMoveTo = function () {
                    return (u._path_relativeMoveTo = u.asm.path_relativeMoveTo).apply(null, arguments);
                }),
                (u._path_lineTo = function () {
                    return (u._path_lineTo = u.asm.path_lineTo).apply(null, arguments);
                }),
                (u._path_relativeLineTo = function () {
                    return (u._path_relativeLineTo = u.asm.path_relativeLineTo).apply(null, arguments);
                }),
                (u._path_quadraticBezierTo = function () {
                    return (u._path_quadraticBezierTo = u.asm.path_quadraticBezierTo).apply(null, arguments);
                }),
                (u._path_relativeQuadraticBezierTo = function () {
                    return (u._path_relativeQuadraticBezierTo = u.asm.path_relativeQuadraticBezierTo).apply(
                        null,
                        arguments
                    );
                }),
                (u._path_cubicTo = function () {
                    return (u._path_cubicTo = u.asm.path_cubicTo).apply(null, arguments);
                }),
                (u._path_relativeCubicTo = function () {
                    return (u._path_relativeCubicTo = u.asm.path_relativeCubicTo).apply(null, arguments);
                }),
                (u._path_conicTo = function () {
                    return (u._path_conicTo = u.asm.path_conicTo).apply(null, arguments);
                }),
                (u._path_relativeConicTo = function () {
                    return (u._path_relativeConicTo = u.asm.path_relativeConicTo).apply(null, arguments);
                }),
                (u._path_arcToOval = function () {
                    return (u._path_arcToOval = u.asm.path_arcToOval).apply(null, arguments);
                }),
                (u._path_arcToRotated = function () {
                    return (u._path_arcToRotated = u.asm.path_arcToRotated).apply(null, arguments);
                }),
                (u._path_relativeArcToRotated = function () {
                    return (u._path_relativeArcToRotated = u.asm.path_relativeArcToRotated).apply(null, arguments);
                }),
                (u._path_addRect = function () {
                    return (u._path_addRect = u.asm.path_addRect).apply(null, arguments);
                }),
                (u._path_addOval = function () {
                    return (u._path_addOval = u.asm.path_addOval).apply(null, arguments);
                }),
                (u._path_addArc = function () {
                    return (u._path_addArc = u.asm.path_addArc).apply(null, arguments);
                }),
                (u._path_addPolygon = function () {
                    return (u._path_addPolygon = u.asm.path_addPolygon).apply(null, arguments);
                }),
                (u._path_addRRect = function () {
                    return (u._path_addRRect = u.asm.path_addRRect).apply(null, arguments);
                }),
                (u._path_addPath = function () {
                    return (u._path_addPath = u.asm.path_addPath).apply(null, arguments);
                }),
                (u._path_close = function () {
                    return (u._path_close = u.asm.path_close).apply(null, arguments);
                }),
                (u._path_reset = function () {
                    return (u._path_reset = u.asm.path_reset).apply(null, arguments);
                }),
                (u._path_contains = function () {
                    return (u._path_contains = u.asm.path_contains).apply(null, arguments);
                }),
                (u._path_transform = function () {
                    return (u._path_transform = u.asm.path_transform).apply(null, arguments);
                }),
                (u._path_getBounds = function () {
                    return (u._path_getBounds = u.asm.path_getBounds).apply(null, arguments);
                }),
                (u._path_combine = function () {
                    return (u._path_combine = u.asm.path_combine).apply(null, arguments);
                }),
                (u._pictureRecorder_create = function () {
                    return (u._pictureRecorder_create = u.asm.pictureRecorder_create).apply(null, arguments);
                }),
                (u._pictureRecorder_dispose = function () {
                    return (u._pictureRecorder_dispose = u.asm.pictureRecorder_dispose).apply(null, arguments);
                }),
                (u._pictureRecorder_beginRecording = function () {
                    return (u._pictureRecorder_beginRecording = u.asm.pictureRecorder_beginRecording).apply(
                        null,
                        arguments
                    );
                }),
                (u._pictureRecorder_endRecording = function () {
                    return (u._pictureRecorder_endRecording = u.asm.pictureRecorder_endRecording).apply(
                        null,
                        arguments
                    );
                }),
                (u._picture_dispose = function () {
                    return (u._picture_dispose = u.asm.picture_dispose).apply(null, arguments);
                }),
                (u._picture_approximateBytesUsed = function () {
                    return (u._picture_approximateBytesUsed = u.asm.picture_approximateBytesUsed).apply(
                        null,
                        arguments
                    );
                }),
                (u._surface_createFromCanvas = function () {
                    return (u._surface_createFromCanvas = u.asm.surface_createFromCanvas).apply(null, arguments);
                }),
                (u._surface_destroy = function () {
                    return (u._surface_destroy = u.asm.surface_destroy).apply(null, arguments);
                }),
                (u._surface_setCanvasSize = function () {
                    return (u._surface_setCanvasSize = u.asm.surface_setCanvasSize).apply(null, arguments);
                }),
                (u._surface_renderPicture = function () {
                    return (u._surface_renderPicture = u.asm.surface_renderPicture).apply(null, arguments);
                });
            var jn = (u._emscripten_dispatch_to_thread_ = function () {
                    return (jn = u._emscripten_dispatch_to_thread_ = u.asm.emscripten_dispatch_to_thread_).apply(
                        null,
                        arguments
                    );
                }),
                Wn = (u.___errno_location = function () {
                    return (Wn = u.___errno_location = u.asm.__errno_location).apply(null, arguments);
                }),
                Un = (u._pthread_self = function () {
                    return (Un = u._pthread_self = u.asm.pthread_self).apply(null, arguments);
                }),
                Vn = (u._free = function () {
                    return (Vn = u._free = u.asm.free).apply(null, arguments);
                }),
                Yn = (u._malloc = function () {
                    return (Yn = u._malloc = u.asm.malloc).apply(null, arguments);
                });
            u._emscripten_tls_init = function () {
                return (u._emscripten_tls_init = u.asm.emscripten_tls_init).apply(null, arguments);
            };
            var qn = (u._emscripten_main_thread_process_queued_calls = function () {
                    return (qn = u._emscripten_main_thread_process_queued_calls =
                        u.asm.emscripten_main_thread_process_queued_calls).apply(null, arguments);
                }),
                Hn = (u.__emscripten_thread_init = function () {
                    return (Hn = u.__emscripten_thread_init = u.asm._emscripten_thread_init).apply(null, arguments);
                });
            u._emscripten_current_thread_process_queued_calls = function () {
                return (u._emscripten_current_thread_process_queued_calls =
                    u.asm.emscripten_current_thread_process_queued_calls).apply(null, arguments);
            };
            var Nn = (u._emscripten_sync_run_in_main_thread_4 = function () {
                    return (Nn = u._emscripten_sync_run_in_main_thread_4 =
                        u.asm.emscripten_sync_run_in_main_thread_4).apply(null, arguments);
                }),
                zn = (u._emscripten_run_in_main_runtime_thread_js = function () {
                    return (zn = u._emscripten_run_in_main_runtime_thread_js =
                        u.asm.emscripten_run_in_main_runtime_thread_js).apply(null, arguments);
                }),
                Jn = (u.__emscripten_thread_free_data = function () {
                    return (Jn = u.__emscripten_thread_free_data = u.asm._emscripten_thread_free_data).apply(
                        null,
                        arguments
                    );
                });
            u.__emscripten_thread_exit = function () {
                return (u.__emscripten_thread_exit = u.asm._emscripten_thread_exit).apply(null, arguments);
            };
            var Xn,
                Qn = (u._memalign = function () {
                    return (Qn = u._memalign = u.asm.memalign).apply(null, arguments);
                }),
                Kn = (u._setThrew = function () {
                    return (Kn = u._setThrew = u.asm.setThrew).apply(null, arguments);
                }),
                Zn = (u._emscripten_stack_set_limits = function () {
                    return (Zn = u._emscripten_stack_set_limits = u.asm.emscripten_stack_set_limits).apply(
                        null,
                        arguments
                    );
                }),
                $n = (u.stackSave = function () {
                    return ($n = u.stackSave = u.asm.stackSave).apply(null, arguments);
                }),
                et = (u.stackRestore = function () {
                    return (et = u.stackRestore = u.asm.stackRestore).apply(null, arguments);
                }),
                nt = (u.stackAlloc = function () {
                    return (nt = u.stackAlloc = u.asm.stackAlloc).apply(null, arguments);
                }),
                tt = (u.__emscripten_main_thread_futex = 246984),
                rt = (u.__emscripten_allow_main_runtime_queued_calls = 243904);
            function at(e) {
                (this.name = 'ExitStatus'),
                    (this.message = 'Program terminated with exit(' + e + ')'),
                    (this.status = e);
            }
            function it() {
                function e() {
                    if (
                        !Xn &&
                        ((Xn = !0), (u.calledRun = !0), !G) &&
                        (A || ve(ae), s(u), u.onRuntimeInitialized && u.onRuntimeInitialized(), !A)
                    ) {
                        if (u.postRun)
                            for ('function' == typeof u.postRun && (u.postRun = [u.postRun]); u.postRun.length; ) {
                                var e = u.postRun.shift();
                                ie.unshift(e);
                            }
                        ve(ie);
                    }
                }
                if (!(0 < le))
                    if (A) s(u), A || ve(ae), postMessage({ cmd: 'loaded' });
                    else {
                        if (u.preRun)
                            for ('function' == typeof u.preRun && (u.preRun = [u.preRun]); u.preRun.length; ) ue();
                        ve(re),
                            0 < le ||
                                (u.setStatus
                                    ? (u.setStatus('Running...'),
                                      setTimeout(function () {
                                          setTimeout(function () {
                                              u.setStatus('');
                                          }, 1),
                                              e();
                                      }, 1))
                                    : e());
                    }
            }
            function ot(e) {
                if (A) throw (Se(e), 'unwind');
                ce() || A || we.fa(), ce() || (we.fa(), u.onExit && u.onExit(e), (G = !0)), b(e, new at(e));
            }
            if (
                ((u.keepRuntimeAlive = ce),
                (u.PThread = we),
                (u.PThread = we),
                (u.wasmMemory = F),
                (u.ExitStatus = at),
                (_e = function e() {
                    Xn || it(), Xn || (_e = e);
                }),
                (u.run = it),
                u.preInit)
            )
                for ('function' == typeof u.preInit && (u.preInit = [u.preInit]); 0 < u.preInit.length; )
                    u.preInit.pop()();
            return A && ((C = !1), we.ta()), it(), n.ready;
        }
    );
})();
'object' == typeof exports && 'object' == typeof module
    ? (module.exports = skwasm)
    : 'function' == typeof define && define.amd
      ? define([], function () {
            return skwasm;
        })
      : 'object' == typeof exports && (exports.skwasm = skwasm);
