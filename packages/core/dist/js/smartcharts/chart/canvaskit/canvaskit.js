var CanvasKitInit = (() => {
    var e = 'undefined' != typeof document && document.currentScript ? document.currentScript.src : void 0;
    return (
        'undefined' != typeof __filename && (e = e || __filename),
        function (t) {
            var n;
            (t = t || {}), n || (n = void 0 !== t ? t : {});
            var r,
                a,
                o,
                i = Object.assign;
            (n.ready = new Promise(function (e, t) {
                (r = e), (a = t);
            })),
                ((o = n).Rd = o.Rd || []),
                o.Rd.push(function () {
                    (o.MakeSWCanvasSurface = function (e) {
                        var t = e;
                        if ('CANVAS' !== t.tagName && !(t = document.getElementById(e)))
                            throw 'Canvas with id ' + e + ' was not found';
                        return (e = o.MakeSurface(t.width, t.height)) && (e.pe = t), e;
                    }),
                        o.MakeCanvasSurface || (o.MakeCanvasSurface = o.MakeSWCanvasSurface),
                        (o.MakeSurface = function (e, t) {
                            var n = {
                                    width: e,
                                    height: t,
                                    colorType: o.ColorType.RGBA_8888,
                                    alphaType: o.AlphaType.Unpremul,
                                    colorSpace: o.ColorSpace.SRGB,
                                },
                                r = e * t * 4,
                                a = o._malloc(r);
                            return (
                                (n = o.Surface._makeRasterDirect(n, a, 4 * e)) &&
                                    ((n.pe = null),
                                    (n.Ve = e),
                                    (n.Se = t),
                                    (n.Te = r),
                                    (n.ze = a),
                                    n.getCanvas().clear(o.TRANSPARENT)),
                                n
                            );
                        }),
                        (o.MakeRasterDirectSurface = function (e, t, n) {
                            return o.Surface._makeRasterDirect(e, t.byteOffset, n);
                        }),
                        (o.Surface.prototype.flush = function (e) {
                            if ((o.Od(this.Nd), this._flush(), this.pe)) {
                                var t = new Uint8ClampedArray(o.HEAPU8.buffer, this.ze, this.Te);
                                (t = new ImageData(t, this.Ve, this.Se)),
                                    e
                                        ? this.pe
                                              .getContext('2d')
                                              .putImageData(t, 0, 0, e[0], e[1], e[2] - e[0], e[3] - e[1])
                                        : this.pe.getContext('2d').putImageData(t, 0, 0);
                            }
                        }),
                        (o.Surface.prototype.dispose = function () {
                            this.ze && o._free(this.ze), this.delete();
                        }),
                        (o.Od = o.Od || function () {}),
                        (o.qe =
                            o.qe ||
                            function () {
                                return null;
                            });
                }),
                (function (e) {
                    (e.Rd = e.Rd || []),
                        e.Rd.push(function () {
                            function t(e, t, n) {
                                return e && e.hasOwnProperty(t) ? e[t] : n;
                            }
                            function n(e) {
                                var t = Ut(Ft);
                                return (Ft[t] = e), t;
                            }
                            function r(e) {
                                return e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
                            }
                            function a(e) {
                                return e.naturalWidth || e.videoWidth || e.displayWidth || e.width;
                            }
                            function o(t, n, r, a) {
                                return (
                                    t.bindTexture(t.TEXTURE_2D, n),
                                    a ||
                                        r.alphaType !== e.AlphaType.Premul ||
                                        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                                    n
                                );
                            }
                            function i(t, n, r) {
                                r ||
                                    n.alphaType !== e.AlphaType.Premul ||
                                    t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
                                    t.bindTexture(t.TEXTURE_2D, null);
                            }
                            (e.GetWebGLContext = function (e, n) {
                                if (!e) throw 'null canvas passed into makeWebGLContext';
                                var r = {
                                    alpha: t(n, 'alpha', 1),
                                    depth: t(n, 'depth', 1),
                                    stencil: t(n, 'stencil', 8),
                                    antialias: t(n, 'antialias', 0),
                                    premultipliedAlpha: t(n, 'premultipliedAlpha', 1),
                                    preserveDrawingBuffer: t(n, 'preserveDrawingBuffer', 0),
                                    preferLowPowerToHighPerformance: t(n, 'preferLowPowerToHighPerformance', 0),
                                    failIfMajorPerformanceCaveat: t(n, 'failIfMajorPerformanceCaveat', 0),
                                    enableExtensionsByDefault: t(n, 'enableExtensionsByDefault', 1),
                                    explicitSwapControl: t(n, 'explicitSwapControl', 0),
                                    renderViaOffscreenBackBuffer: t(n, 'renderViaOffscreenBackBuffer', 0),
                                };
                                if (
                                    ((r.majorVersion =
                                        n && n.majorVersion
                                            ? n.majorVersion
                                            : 'undefined' != typeof WebGL2RenderingContext
                                              ? 2
                                              : 1),
                                    r.explicitSwapControl)
                                )
                                    throw 'explicitSwapControl is not supported';
                                return (
                                    (e = (function (e, t) {
                                        e.Le ||
                                            ((e.Le = e.getContext),
                                            (e.getContext = function (t, n) {
                                                return ('webgl' == t) ==
                                                    (n = e.Le(t, n)) instanceof WebGLRenderingContext
                                                    ? n
                                                    : null;
                                            }));
                                        var n =
                                            1 < t.majorVersion ? e.getContext('webgl2', t) : e.getContext('webgl', t);
                                        return n
                                            ? (function (e, t) {
                                                  var n = Ut(Rt),
                                                      r = { kf: n, attributes: t, version: t.majorVersion, Zd: e };
                                                  return (
                                                      e.canvas && (e.canvas.Qe = r),
                                                      (Rt[n] = r),
                                                      (void 0 === t.bf || t.bf) &&
                                                          (function (e) {
                                                              if ((e || (e = Ht), !e.nf)) {
                                                                  e.nf = !0;
                                                                  var t = e.Zd;
                                                                  !(function (e) {
                                                                      var t = e.getExtension('ANGLE_instanced_arrays');
                                                                      t &&
                                                                          ((e.vertexAttribDivisor = function (e, n) {
                                                                              t.vertexAttribDivisorANGLE(e, n);
                                                                          }),
                                                                          (e.drawArraysInstanced = function (
                                                                              e,
                                                                              n,
                                                                              r,
                                                                              a
                                                                          ) {
                                                                              t.drawArraysInstancedANGLE(e, n, r, a);
                                                                          }),
                                                                          (e.drawElementsInstanced = function (
                                                                              e,
                                                                              n,
                                                                              r,
                                                                              a,
                                                                              o
                                                                          ) {
                                                                              t.drawElementsInstancedANGLE(
                                                                                  e,
                                                                                  n,
                                                                                  r,
                                                                                  a,
                                                                                  o
                                                                              );
                                                                          }));
                                                                  })(t),
                                                                      (function (e) {
                                                                          var t =
                                                                              e.getExtension('OES_vertex_array_object');
                                                                          t &&
                                                                              ((e.createVertexArray = function () {
                                                                                  return t.createVertexArrayOES();
                                                                              }),
                                                                              (e.deleteVertexArray = function (e) {
                                                                                  t.deleteVertexArrayOES(e);
                                                                              }),
                                                                              (e.bindVertexArray = function (e) {
                                                                                  t.bindVertexArrayOES(e);
                                                                              }),
                                                                              (e.isVertexArray = function (e) {
                                                                                  return t.isVertexArrayOES(e);
                                                                              }));
                                                                      })(t),
                                                                      (function (e) {
                                                                          var t = e.getExtension('WEBGL_draw_buffers');
                                                                          t &&
                                                                              (e.drawBuffers = function (e, n) {
                                                                                  t.drawBuffersWEBGL(e, n);
                                                                              });
                                                                      })(t),
                                                                      (t.Ie = t.getExtension(
                                                                          'WEBGL_draw_instanced_base_vertex_base_instance'
                                                                      )),
                                                                      (t.Me = t.getExtension(
                                                                          'WEBGL_multi_draw_instanced_base_vertex_base_instance'
                                                                      )),
                                                                      2 <= e.version &&
                                                                          (t.Je = t.getExtension(
                                                                              'EXT_disjoint_timer_query_webgl2'
                                                                          )),
                                                                      (2 > e.version || !t.Je) &&
                                                                          (t.Je =
                                                                              t.getExtension(
                                                                                  'EXT_disjoint_timer_query'
                                                                              )),
                                                                      (t.Kf = t.getExtension('WEBGL_multi_draw')),
                                                                      (t.getSupportedExtensions() || []).forEach(
                                                                          function (e) {
                                                                              e.includes('lose_context') ||
                                                                                  e.includes('debug') ||
                                                                                  t.getExtension(e);
                                                                          }
                                                                      );
                                                              }
                                                          })(r),
                                                      n
                                                  );
                                              })(n, t)
                                            : 0;
                                    })(e, r)),
                                    e ? (Gt(e), Ht.Zd.getExtension('WEBGL_debug_renderer_info'), e) : 0
                                );
                            }),
                                (e.deleteContext = function (e) {
                                    Ht === Rt[e] && (Ht = null),
                                        'object' == typeof JSEvents && JSEvents.Nf(Rt[e].Zd.canvas),
                                        Rt[e] && Rt[e].Zd.canvas && (Rt[e].Zd.canvas.Qe = void 0),
                                        (Rt[e] = null);
                                }),
                                e._setTextureCleanup({
                                    deleteTexture: function (e, t) {
                                        var n = Ft[t];
                                        n && Rt[e].Zd.deleteTexture(n), (Ft[t] = null);
                                    },
                                }),
                                (e.MakeWebGLContext = function (t) {
                                    if (!this.Od(t)) return null;
                                    var n = this._MakeGrContext();
                                    if (!n) return null;
                                    n.Nd = t;
                                    var r = n.delete.bind(n);
                                    return (
                                        (n.delete = function () {
                                            e.Od(this.Nd), r();
                                        }.bind(n)),
                                        (Ht.Ce = n)
                                    );
                                }),
                                (e.MakeGrContext = e.MakeWebGLContext),
                                (e.GrDirectContext.prototype.getResourceCacheLimitBytes = function () {
                                    e.Od(this.Nd), this._getResourceCacheLimitBytes();
                                }),
                                (e.GrDirectContext.prototype.getResourceCacheUsageBytes = function () {
                                    e.Od(this.Nd), this._getResourceCacheUsageBytes();
                                }),
                                (e.GrDirectContext.prototype.releaseResourcesAndAbandonContext = function () {
                                    e.Od(this.Nd), this._releaseResourcesAndAbandonContext();
                                }),
                                (e.GrDirectContext.prototype.setResourceCacheLimitBytes = function (t) {
                                    e.Od(this.Nd), this._setResourceCacheLimitBytes(t);
                                }),
                                (e.MakeOnScreenGLSurface = function (e, t, n, r, a, o) {
                                    return this.Od(e.Nd) &&
                                        (t =
                                            void 0 === a || void 0 === o
                                                ? this._MakeOnScreenGLSurface(e, t, n, r)
                                                : this._MakeOnScreenGLSurface(e, t, n, r, a, o))
                                        ? ((t.Nd = e.Nd), t)
                                        : null;
                                }),
                                (e.MakeRenderTarget = function () {
                                    var e = arguments[0];
                                    if (!this.Od(e.Nd)) return null;
                                    if (3 === arguments.length) {
                                        var t = this._MakeRenderTargetWH(e, arguments[1], arguments[2]);
                                        if (!t) return null;
                                    } else {
                                        if (2 !== arguments.length) return null;
                                        if (!(t = this._MakeRenderTargetII(e, arguments[1]))) return null;
                                    }
                                    return (t.Nd = e.Nd), t;
                                }),
                                (e.MakeWebGLCanvasSurface = function (t, n, r) {
                                    n = n || null;
                                    var a = t,
                                        o = 'undefined' != typeof OffscreenCanvas && a instanceof OffscreenCanvas;
                                    if (
                                        !(
                                            ('undefined' != typeof HTMLCanvasElement &&
                                                a instanceof HTMLCanvasElement) ||
                                            o ||
                                            ((a = document.getElementById(t)), a)
                                        )
                                    )
                                        throw 'Canvas with id ' + t + ' was not found';
                                    if (!(t = this.GetWebGLContext(a, r)) || 0 > t)
                                        throw 'failed to create webgl context: err ' + t;
                                    return (
                                        (t = this.MakeWebGLContext(t)),
                                        (n = this.MakeOnScreenGLSurface(t, a.width, a.height, n)) ||
                                            ((n = a.cloneNode(!0)),
                                            a.parentNode.replaceChild(n, a),
                                            n.classList.add('ck-replaced'),
                                            e.MakeSWCanvasSurface(n))
                                    );
                                }),
                                (e.MakeCanvasSurface = e.MakeWebGLCanvasSurface),
                                (e.Surface.prototype.makeImageFromTexture = function (t, r) {
                                    return (
                                        e.Od(this.Nd),
                                        (t = n(t)),
                                        (r = this._makeImageFromTexture(this.Nd, t, r)) && (r.je = t),
                                        r
                                    );
                                }),
                                (e.Surface.prototype.makeImageFromTextureSource = function (t, n, u) {
                                    n ||
                                        (n = {
                                            height: r(t),
                                            width: a(t),
                                            colorType: e.ColorType.RGBA_8888,
                                            alphaType: u ? e.AlphaType.Premul : e.AlphaType.Unpremul,
                                        }),
                                        n.colorSpace || (n.colorSpace = e.ColorSpace.SRGB),
                                        e.Od(this.Nd);
                                    var c = Ht.Zd;
                                    return (
                                        (u = o(c, c.createTexture(), n, u)),
                                        2 === Ht.version
                                            ? c.texImage2D(
                                                  c.TEXTURE_2D,
                                                  0,
                                                  c.RGBA,
                                                  n.width,
                                                  n.height,
                                                  0,
                                                  c.RGBA,
                                                  c.UNSIGNED_BYTE,
                                                  t
                                              )
                                            : c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, t),
                                        i(c, n),
                                        this._resetContext(),
                                        this.makeImageFromTexture(u, n)
                                    );
                                }),
                                (e.Surface.prototype.updateTextureFromSource = function (t, u, c) {
                                    if (t.je) {
                                        e.Od(this.Nd);
                                        var f = t.getImageInfo(),
                                            l = Ht.Zd,
                                            s = o(l, Ft[t.je], f, c);
                                        2 === Ht.version
                                            ? l.texImage2D(
                                                  l.TEXTURE_2D,
                                                  0,
                                                  l.RGBA,
                                                  a(u),
                                                  r(u),
                                                  0,
                                                  l.RGBA,
                                                  l.UNSIGNED_BYTE,
                                                  u
                                              )
                                            : l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, u),
                                            i(l, f, c),
                                            this._resetContext(),
                                            (Ft[t.je] = null),
                                            (t.je = n(s)),
                                            (f.colorSpace = t.getColorSpace()),
                                            (u = this._makeImageFromTexture(this.Nd, t.je, f)),
                                            (c = t.Md.Pd),
                                            (l = t.Md.Ud),
                                            (t.Md.Pd = u.Md.Pd),
                                            (t.Md.Ud = u.Md.Ud),
                                            (u.Md.Pd = c),
                                            (u.Md.Ud = l),
                                            u.delete(),
                                            f.colorSpace.delete();
                                    }
                                }),
                                (e.MakeLazyImageFromTextureSource = function (t, u, c) {
                                    u ||
                                        (u = {
                                            height: r(t),
                                            width: a(t),
                                            colorType: e.ColorType.RGBA_8888,
                                            alphaType: c ? e.AlphaType.Premul : e.AlphaType.Unpremul,
                                        }),
                                        u.colorSpace || (u.colorSpace = e.ColorSpace.SRGB);
                                    var f = {
                                        makeTexture: function () {
                                            var e = Ht,
                                                r = e.Zd,
                                                a = o(r, r.createTexture(), u, c);
                                            return (
                                                2 === e.version
                                                    ? r.texImage2D(
                                                          r.TEXTURE_2D,
                                                          0,
                                                          r.RGBA,
                                                          u.width,
                                                          u.height,
                                                          0,
                                                          r.RGBA,
                                                          r.UNSIGNED_BYTE,
                                                          t
                                                      )
                                                    : r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
                                                i(r, u, c),
                                                n(a)
                                            );
                                        },
                                        freeSrc: function () {},
                                    };
                                    return (
                                        'VideoFrame' === t.constructor.name &&
                                            (f.freeSrc = function () {
                                                t.close();
                                            }),
                                        e.Image._makeFromGenerator(u, f)
                                    );
                                }),
                                (e.Od = function (e) {
                                    return !!e && Gt(e);
                                }),
                                (e.qe = function () {
                                    return Ht && Ht.Ce && !Ht.Ce.isDeleted() ? Ht.Ce : null;
                                });
                        });
                })(n),
                (function (e) {
                    function t(e) {
                        return (
                            ((o(255 * e[3]) << 24) |
                                (o(255 * e[0]) << 16) |
                                (o(255 * e[1]) << 8) |
                                (o(255 * e[2]) << 0)) >>>
                            0
                        );
                    }
                    function r(e) {
                        if (e && e._ck) return e;
                        if (e instanceof Float32Array) {
                            for (var n = Math.floor(e.length / 4), r = new Uint32Array(n), a = 0; a < n; a++)
                                r[a] = t(e.slice(4 * a, 4 * (a + 1)));
                            return r;
                        }
                        return e instanceof Uint32Array
                            ? e
                            : e instanceof Array && e[0] instanceof Float32Array
                              ? e.map(t)
                              : void 0;
                    }
                    function a(e) {
                        if (void 0 === e) return 1;
                        var t = parseFloat(e);
                        return e && -1 !== e.indexOf('%') ? t / 100 : t;
                    }
                    function o(e) {
                        return Math.round(Math.max(0, Math.min(e || 0, 255)));
                    }
                    function i(t, n) {
                        (n && n._ck) || e._free(t);
                    }
                    function u(t, n, r) {
                        if (!t || !t.length) return U;
                        if (t && t._ck) return t.byteOffset;
                        var a = e[n].BYTES_PER_ELEMENT;
                        return r || (r = e._malloc(t.length * a)), e[n].set(t, r / a), r;
                    }
                    function c(t) {
                        var n = { Wd: U, count: t.length, ke: e.ColorType.RGBA_F32 };
                        if (t instanceof Float32Array) (n.Wd = u(t, 'HEAPF32')), (n.count = t.length / 4);
                        else if (t instanceof Uint32Array) (n.Wd = u(t, 'HEAPU32')), (n.ke = e.ColorType.RGBA_8888);
                        else {
                            if (!(t instanceof Array))
                                throw 'Invalid argument to copyFlexibleColorArray, Not a color array ' + typeof t;
                            if (t && t.length) {
                                for (var r = e._malloc(16 * t.length), a = 0, o = r / 4, i = 0; i < t.length; i++)
                                    for (var c = 0; 4 > c; c++) (e.HEAPF32[o + a] = t[i][c]), a++;
                                t = r;
                            } else t = U;
                            n.Wd = t;
                        }
                        return n;
                    }
                    function f(t) {
                        if (!t) return U;
                        var n = y.toTypedArray();
                        if (t.length) {
                            if (6 === t.length || 9 === t.length)
                                return u(t, 'HEAPF32', T), 6 === t.length && e.HEAPF32.set(j, 6 + T / 4), T;
                            if (16 === t.length)
                                return (
                                    (n[0] = t[0]),
                                    (n[1] = t[1]),
                                    (n[2] = t[3]),
                                    (n[3] = t[4]),
                                    (n[4] = t[5]),
                                    (n[5] = t[7]),
                                    (n[6] = t[12]),
                                    (n[7] = t[13]),
                                    (n[8] = t[15]),
                                    T
                                );
                            throw 'invalid matrix size';
                        }
                        if (void 0 === t.m11) throw 'invalid matrix argument';
                        return (
                            (n[0] = t.m11),
                            (n[1] = t.m21),
                            (n[2] = t.m41),
                            (n[3] = t.m12),
                            (n[4] = t.m22),
                            (n[5] = t.m42),
                            (n[6] = t.m14),
                            (n[7] = t.m24),
                            (n[8] = t.m44),
                            T
                        );
                    }
                    function l(e, t) {
                        return u(e, 'HEAPF32', t || E);
                    }
                    function s(e, t, n, r) {
                        var a = v.toTypedArray();
                        return (a[0] = e), (a[1] = t), (a[2] = n), (a[3] = r), E;
                    }
                    function d(t) {
                        for (var n = new Float32Array(4), r = 0; 4 > r; r++) n[r] = e.HEAPF32[t / 4 + r];
                        return n;
                    }
                    function h(e, t) {
                        return u(e, 'HEAPF32', t || M);
                    }
                    function p(e, t) {
                        return u(e, 'HEAPF32', t || D);
                    }
                    (e.Color = function (t, n, r, a) {
                        return void 0 === a && (a = 1), e.Color4f(o(t) / 255, o(n) / 255, o(r) / 255, a);
                    }),
                        (e.ColorAsInt = function (e, t, n, r) {
                            return (
                                void 0 === r && (r = 255),
                                ((o(r) << 24) | (o(e) << 16) | (o(t) << 8) | ((o(n) << 0) & 268435455)) >>> 0
                            );
                        }),
                        (e.Color4f = function (e, t, n, r) {
                            return void 0 === r && (r = 1), Float32Array.of(e, t, n, r);
                        }),
                        Object.defineProperty(e, 'TRANSPARENT', {
                            get: function () {
                                return e.Color4f(0, 0, 0, 0);
                            },
                        }),
                        Object.defineProperty(e, 'BLACK', {
                            get: function () {
                                return e.Color4f(0, 0, 0, 1);
                            },
                        }),
                        Object.defineProperty(e, 'WHITE', {
                            get: function () {
                                return e.Color4f(1, 1, 1, 1);
                            },
                        }),
                        Object.defineProperty(e, 'RED', {
                            get: function () {
                                return e.Color4f(1, 0, 0, 1);
                            },
                        }),
                        Object.defineProperty(e, 'GREEN', {
                            get: function () {
                                return e.Color4f(0, 1, 0, 1);
                            },
                        }),
                        Object.defineProperty(e, 'BLUE', {
                            get: function () {
                                return e.Color4f(0, 0, 1, 1);
                            },
                        }),
                        Object.defineProperty(e, 'YELLOW', {
                            get: function () {
                                return e.Color4f(1, 1, 0, 1);
                            },
                        }),
                        Object.defineProperty(e, 'CYAN', {
                            get: function () {
                                return e.Color4f(0, 1, 1, 1);
                            },
                        }),
                        Object.defineProperty(e, 'MAGENTA', {
                            get: function () {
                                return e.Color4f(1, 0, 1, 1);
                            },
                        }),
                        (e.getColorComponents = function (e) {
                            return [Math.floor(255 * e[0]), Math.floor(255 * e[1]), Math.floor(255 * e[2]), e[3]];
                        }),
                        (e.parseColorString = function (t, n) {
                            if ((t = t.toLowerCase()).startsWith('#')) {
                                switch (((n = 255), t.length)) {
                                    case 9:
                                        n = parseInt(t.slice(7, 9), 16);
                                    case 7:
                                        var r = parseInt(t.slice(1, 3), 16),
                                            o = parseInt(t.slice(3, 5), 16),
                                            i = parseInt(t.slice(5, 7), 16);
                                        break;
                                    case 5:
                                        n = 17 * parseInt(t.slice(4, 5), 16);
                                    case 4:
                                        (r = 17 * parseInt(t.slice(1, 2), 16)),
                                            (o = 17 * parseInt(t.slice(2, 3), 16)),
                                            (i = 17 * parseInt(t.slice(3, 4), 16));
                                }
                                return e.Color(r, o, i, n / 255);
                            }
                            return t.startsWith('rgba')
                                ? ((t = (t = t.slice(5, -1)).split(',')), e.Color(+t[0], +t[1], +t[2], a(t[3])))
                                : t.startsWith('rgb')
                                  ? ((t = (t = t.slice(4, -1)).split(',')), e.Color(+t[0], +t[1], +t[2], a(t[3])))
                                  : t.startsWith('gray(') || t.startsWith('hsl') || !n || void 0 === (t = n[t])
                                    ? e.BLACK
                                    : t;
                        }),
                        (e.multiplyByAlpha = function (e, t) {
                            return ((e = e.slice())[3] = Math.max(0, Math.min(e[3] * t, 1))), e;
                        }),
                        (e.Malloc = function (t, n) {
                            var r = e._malloc(n * t.BYTES_PER_ELEMENT);
                            return {
                                _ck: !0,
                                length: n,
                                byteOffset: r,
                                ce: null,
                                subarray: function (e, t) {
                                    return ((e = this.toTypedArray().subarray(e, t))._ck = !0), e;
                                },
                                toTypedArray: function () {
                                    return (
                                        (this.ce && this.ce.length) ||
                                            ((this.ce = new t(e.HEAPU8.buffer, r, n)), (this.ce._ck = !0)),
                                        this.ce
                                    );
                                },
                            };
                        }),
                        (e.Free = function (t) {
                            e._free(t.byteOffset), (t.byteOffset = U), (t.toTypedArray = null), (t.ce = null);
                        });
                    var y,
                        m,
                        v,
                        g,
                        _,
                        b,
                        P,
                        A,
                        w,
                        C,
                        T = U,
                        S = U,
                        E = U,
                        M = U,
                        F = U,
                        R = U,
                        B = U,
                        O = U,
                        D = U,
                        L = U,
                        j = Float32Array.of(0, 0, 1),
                        U = 0;
                    (e.onRuntimeInitialized = function () {
                        function t(t, n, r, a, o, i, u) {
                            i ||
                                ((i = 4 * a.width),
                                a.colorType === e.ColorType.RGBA_F16
                                    ? (i *= 2)
                                    : a.colorType === e.ColorType.RGBA_F32 && (i *= 4));
                            var c = i * a.height,
                                f = o ? o.byteOffset : e._malloc(c);
                            if (u ? !t._readPixels(a, f, i, n, r, u) : !t._readPixels(a, f, i, n, r))
                                return o || e._free(f), null;
                            if (o) return o.toTypedArray();
                            switch (a.colorType) {
                                case e.ColorType.RGBA_8888:
                                case e.ColorType.RGBA_F16:
                                    t = new Uint8Array(e.HEAPU8.buffer, f, c).slice();
                                    break;
                                case e.ColorType.RGBA_F32:
                                    t = new Float32Array(e.HEAPU8.buffer, f, c).slice();
                                    break;
                                default:
                                    return null;
                            }
                            return e._free(f), t;
                        }
                        (v = e.Malloc(Float32Array, 4)),
                            (E = v.byteOffset),
                            (m = e.Malloc(Float32Array, 16)),
                            (S = m.byteOffset),
                            (y = e.Malloc(Float32Array, 9)),
                            (T = y.byteOffset),
                            (w = e.Malloc(Float32Array, 12)),
                            (D = w.byteOffset),
                            (C = e.Malloc(Float32Array, 12)),
                            (L = C.byteOffset),
                            (g = e.Malloc(Float32Array, 4)),
                            (M = g.byteOffset),
                            (_ = e.Malloc(Float32Array, 4)),
                            (F = _.byteOffset),
                            (b = e.Malloc(Float32Array, 3)),
                            (R = b.byteOffset),
                            (P = e.Malloc(Float32Array, 3)),
                            (B = P.byteOffset),
                            (A = e.Malloc(Int32Array, 4)),
                            (O = A.byteOffset),
                            (e.ColorSpace.SRGB = e.ColorSpace._MakeSRGB()),
                            (e.ColorSpace.DISPLAY_P3 = e.ColorSpace._MakeDisplayP3()),
                            (e.ColorSpace.ADOBE_RGB = e.ColorSpace._MakeAdobeRGB()),
                            (e.GlyphRunFlags = { IsWhiteSpace: e._GlyphRunFlags_isWhiteSpace }),
                            (e.Path.MakeFromCmds = function (t) {
                                var n = u(t, 'HEAPF32'),
                                    r = e.Path._MakeFromCmds(n, t.length);
                                return i(n, t), r;
                            }),
                            (e.Path.MakeFromVerbsPointsWeights = function (t, n, r) {
                                var a = u(t, 'HEAPU8'),
                                    o = u(n, 'HEAPF32'),
                                    c = u(r, 'HEAPF32'),
                                    f = e.Path._MakeFromVerbsPointsWeights(
                                        a,
                                        t.length,
                                        o,
                                        n.length,
                                        c,
                                        (r && r.length) || 0
                                    );
                                return i(a, t), i(o, n), i(c, r), f;
                            }),
                            (e.Path.prototype.addArc = function (e, t, n) {
                                return (e = h(e)), this._addArc(e, t, n), this;
                            }),
                            (e.Path.prototype.addCircle = function (e, t, n, r) {
                                return this._addCircle(e, t, n, !!r), this;
                            }),
                            (e.Path.prototype.addOval = function (e, t, n) {
                                return void 0 === n && (n = 1), (e = h(e)), this._addOval(e, !!t, n), this;
                            }),
                            (e.Path.prototype.addPath = function () {
                                var e = Array.prototype.slice.call(arguments),
                                    t = e[0],
                                    n = !1;
                                if (('boolean' == typeof e[e.length - 1] && (n = e.pop()), 1 === e.length))
                                    this._addPath(t, 1, 0, 0, 0, 1, 0, 0, 0, 1, n);
                                else if (2 === e.length)
                                    (e = e[1]),
                                        this._addPath(
                                            t,
                                            e[0],
                                            e[1],
                                            e[2],
                                            e[3],
                                            e[4],
                                            e[5],
                                            e[6] || 0,
                                            e[7] || 0,
                                            e[8] || 1,
                                            n
                                        );
                                else {
                                    if (7 !== e.length && 10 !== e.length) return null;
                                    this._addPath(
                                        t,
                                        e[1],
                                        e[2],
                                        e[3],
                                        e[4],
                                        e[5],
                                        e[6],
                                        e[7] || 0,
                                        e[8] || 0,
                                        e[9] || 1,
                                        n
                                    );
                                }
                                return this;
                            }),
                            (e.Path.prototype.addPoly = function (e, t) {
                                var n = u(e, 'HEAPF32');
                                return this._addPoly(n, e.length / 2, t), i(n, e), this;
                            }),
                            (e.Path.prototype.addRect = function (e, t) {
                                return (e = h(e)), this._addRect(e, !!t), this;
                            }),
                            (e.Path.prototype.addRRect = function (e, t) {
                                return (e = p(e)), this._addRRect(e, !!t), this;
                            }),
                            (e.Path.prototype.addVerbsPointsWeights = function (e, t, n) {
                                var r = u(e, 'HEAPU8'),
                                    a = u(t, 'HEAPF32'),
                                    o = u(n, 'HEAPF32');
                                this._addVerbsPointsWeights(r, e.length, a, t.length, o, (n && n.length) || 0),
                                    i(r, e),
                                    i(a, t),
                                    i(o, n);
                            }),
                            (e.Path.prototype.arc = function (t, n, r, a, o, i) {
                                return (
                                    (t = e.LTRBRect(t - r, n - r, t + r, n + r)),
                                    (o = ((o - a) / Math.PI) * 180 - 360 * !!i),
                                    (i = new e.Path()).addArc(t, (a / Math.PI) * 180, o),
                                    this.addPath(i, !0),
                                    i.delete(),
                                    this
                                );
                            }),
                            (e.Path.prototype.arcToOval = function (e, t, n, r) {
                                return (e = h(e)), this._arcToOval(e, t, n, r), this;
                            }),
                            (e.Path.prototype.arcToRotated = function (e, t, n, r, a, o, i) {
                                return this._arcToRotated(e, t, n, !!r, !!a, o, i), this;
                            }),
                            (e.Path.prototype.arcToTangent = function (e, t, n, r, a) {
                                return this._arcToTangent(e, t, n, r, a), this;
                            }),
                            (e.Path.prototype.close = function () {
                                return this._close(), this;
                            }),
                            (e.Path.prototype.conicTo = function (e, t, n, r, a) {
                                return this._conicTo(e, t, n, r, a), this;
                            }),
                            (e.Path.prototype.computeTightBounds = function (e) {
                                this._computeTightBounds(M);
                                var t = g.toTypedArray();
                                return e ? (e.set(t), e) : t.slice();
                            }),
                            (e.Path.prototype.cubicTo = function (e, t, n, r, a, o) {
                                return this._cubicTo(e, t, n, r, a, o), this;
                            }),
                            (e.Path.prototype.dash = function (e, t, n) {
                                return this._dash(e, t, n) ? this : null;
                            }),
                            (e.Path.prototype.getBounds = function (e) {
                                this._getBounds(M);
                                var t = g.toTypedArray();
                                return e ? (e.set(t), e) : t.slice();
                            }),
                            (e.Path.prototype.lineTo = function (e, t) {
                                return this._lineTo(e, t), this;
                            }),
                            (e.Path.prototype.moveTo = function (e, t) {
                                return this._moveTo(e, t), this;
                            }),
                            (e.Path.prototype.offset = function (e, t) {
                                return this._transform(1, 0, e, 0, 1, t, 0, 0, 1), this;
                            }),
                            (e.Path.prototype.quadTo = function (e, t, n, r) {
                                return this._quadTo(e, t, n, r), this;
                            }),
                            (e.Path.prototype.rArcTo = function (e, t, n, r, a, o, i) {
                                return this._rArcTo(e, t, n, r, a, o, i), this;
                            }),
                            (e.Path.prototype.rConicTo = function (e, t, n, r, a) {
                                return this._rConicTo(e, t, n, r, a), this;
                            }),
                            (e.Path.prototype.rCubicTo = function (e, t, n, r, a, o) {
                                return this._rCubicTo(e, t, n, r, a, o), this;
                            }),
                            (e.Path.prototype.rLineTo = function (e, t) {
                                return this._rLineTo(e, t), this;
                            }),
                            (e.Path.prototype.rMoveTo = function (e, t) {
                                return this._rMoveTo(e, t), this;
                            }),
                            (e.Path.prototype.rQuadTo = function (e, t, n, r) {
                                return this._rQuadTo(e, t, n, r), this;
                            }),
                            (e.Path.prototype.stroke = function (t) {
                                return (
                                    ((t = t || {}).width = t.width || 1),
                                    (t.miter_limit = t.miter_limit || 4),
                                    (t.cap = t.cap || e.StrokeCap.Butt),
                                    (t.join = t.join || e.StrokeJoin.Miter),
                                    (t.precision = t.precision || 1),
                                    this._stroke(t) ? this : null
                                );
                            }),
                            (e.Path.prototype.transform = function () {
                                if (1 === arguments.length) {
                                    var e = arguments[0];
                                    this._transform(
                                        e[0],
                                        e[1],
                                        e[2],
                                        e[3],
                                        e[4],
                                        e[5],
                                        e[6] || 0,
                                        e[7] || 0,
                                        e[8] || 1
                                    );
                                } else {
                                    if (6 !== arguments.length && 9 !== arguments.length)
                                        throw 'transform expected to take 1 or 9 arguments. Got ' + arguments.length;
                                    (e = arguments),
                                        this._transform(
                                            e[0],
                                            e[1],
                                            e[2],
                                            e[3],
                                            e[4],
                                            e[5],
                                            e[6] || 0,
                                            e[7] || 0,
                                            e[8] || 1
                                        );
                                }
                                return this;
                            }),
                            (e.Path.prototype.trim = function (e, t, n) {
                                return this._trim(e, t, !!n) ? this : null;
                            }),
                            (e.Image.prototype.encodeToBytes = function (t, n) {
                                var r = e.qe();
                                return (
                                    (t = t || e.ImageFormat.PNG),
                                    (n = n || 100),
                                    r ? this._encodeToBytes(t, n, r) : this._encodeToBytes(t, n)
                                );
                            }),
                            (e.Image.prototype.makeShaderCubic = function (e, t, n, r, a) {
                                return (a = f(a)), this._makeShaderCubic(e, t, n, r, a);
                            }),
                            (e.Image.prototype.makeShaderOptions = function (e, t, n, r, a) {
                                return (a = f(a)), this._makeShaderOptions(e, t, n, r, a);
                            }),
                            (e.Image.prototype.readPixels = function (n, r, a, o, i) {
                                return t(this, n, r, a, o, i, e.qe());
                            }),
                            (e.Canvas.prototype.clear = function (t) {
                                e.Od(this.Nd), (t = l(t)), this._clear(t);
                            }),
                            (e.Canvas.prototype.clipRRect = function (t, n, r) {
                                e.Od(this.Nd), (t = p(t)), this._clipRRect(t, n, r);
                            }),
                            (e.Canvas.prototype.clipRect = function (t, n, r) {
                                e.Od(this.Nd), (t = h(t)), this._clipRect(t, n, r);
                            }),
                            (e.Canvas.prototype.concat = function (t) {
                                e.Od(this.Nd),
                                    (t = (function (e) {
                                        if (!e) return U;
                                        var t = m.toTypedArray();
                                        if (e.length) {
                                            if (16 !== e.length && 6 !== e.length && 9 !== e.length)
                                                throw 'invalid matrix size';
                                            return 16 === e.length
                                                ? u(e, 'HEAPF32', S)
                                                : (t.fill(0),
                                                  (t[0] = e[0]),
                                                  (t[1] = e[1]),
                                                  (t[3] = e[2]),
                                                  (t[4] = e[3]),
                                                  (t[5] = e[4]),
                                                  (t[7] = e[5]),
                                                  (t[10] = 1),
                                                  (t[12] = e[6]),
                                                  (t[13] = e[7]),
                                                  (t[15] = e[8]),
                                                  6 === e.length && ((t[12] = 0), (t[13] = 0), (t[15] = 1)),
                                                  S);
                                        }
                                        if (void 0 === e.m11) throw 'invalid matrix argument';
                                        return (
                                            (t[0] = e.m11),
                                            (t[1] = e.m21),
                                            (t[2] = e.m31),
                                            (t[3] = e.m41),
                                            (t[4] = e.m12),
                                            (t[5] = e.m22),
                                            (t[6] = e.m32),
                                            (t[7] = e.m42),
                                            (t[8] = e.m13),
                                            (t[9] = e.m23),
                                            (t[10] = e.m33),
                                            (t[11] = e.m43),
                                            (t[12] = e.m14),
                                            (t[13] = e.m24),
                                            (t[14] = e.m34),
                                            (t[15] = e.m44),
                                            S
                                        );
                                    })(t)),
                                    this._concat(t);
                            }),
                            (e.Canvas.prototype.drawArc = function (t, n, r, a, o) {
                                e.Od(this.Nd), (t = h(t)), this._drawArc(t, n, r, a, o);
                            }),
                            (e.Canvas.prototype.drawAtlas = function (t, n, a, o, c, f, l) {
                                if (t && o && n && a && n.length === a.length) {
                                    e.Od(this.Nd), c || (c = e.BlendMode.SrcOver);
                                    var s = u(n, 'HEAPF32'),
                                        d = u(a, 'HEAPF32'),
                                        h = a.length / 4,
                                        p = u(r(f), 'HEAPU32');
                                    if (l && 'B' in l && 'C' in l) this._drawAtlasCubic(t, d, s, p, h, c, l.B, l.C, o);
                                    else {
                                        let n = e.FilterMode.Linear,
                                            r = e.MipmapMode.None;
                                        l && ((n = l.filter), 'mipmap' in l && (r = l.mipmap)),
                                            this._drawAtlasOptions(t, d, s, p, h, c, n, r, o);
                                    }
                                    i(s, n), i(d, a), i(p, f);
                                }
                            }),
                            (e.Canvas.prototype.drawCircle = function (t, n, r, a) {
                                e.Od(this.Nd), this._drawCircle(t, n, r, a);
                            }),
                            (e.Canvas.prototype.drawColor = function (t, n) {
                                e.Od(this.Nd), (t = l(t)), void 0 !== n ? this._drawColor(t, n) : this._drawColor(t);
                            }),
                            (e.Canvas.prototype.drawColorInt = function (t, n) {
                                e.Od(this.Nd), this._drawColorInt(t, n || e.BlendMode.SrcOver);
                            }),
                            (e.Canvas.prototype.drawColorComponents = function (t, n, r, a, o) {
                                e.Od(this.Nd),
                                    (t = s(t, n, r, a)),
                                    void 0 !== o ? this._drawColor(t, o) : this._drawColor(t);
                            }),
                            (e.Canvas.prototype.drawDRRect = function (t, n, r) {
                                e.Od(this.Nd), (t = p(t, D)), (n = p(n, L)), this._drawDRRect(t, n, r);
                            }),
                            (e.Canvas.prototype.drawImage = function (t, n, r, a) {
                                e.Od(this.Nd), this._drawImage(t, n, r, a || null);
                            }),
                            (e.Canvas.prototype.drawImageCubic = function (t, n, r, a, o, i) {
                                e.Od(this.Nd), this._drawImageCubic(t, n, r, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawImageOptions = function (t, n, r, a, o, i) {
                                e.Od(this.Nd), this._drawImageOptions(t, n, r, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawImageNine = function (t, n, r, a, o) {
                                e.Od(this.Nd),
                                    (n = u(n, 'HEAP32', O)),
                                    (r = h(r)),
                                    this._drawImageNine(t, n, r, a, o || null);
                            }),
                            (e.Canvas.prototype.drawImageRect = function (t, n, r, a, o) {
                                e.Od(this.Nd), h(n, M), h(r, F), this._drawImageRect(t, M, F, a, !!o);
                            }),
                            (e.Canvas.prototype.drawImageRectCubic = function (t, n, r, a, o, i) {
                                e.Od(this.Nd), h(n, M), h(r, F), this._drawImageRectCubic(t, M, F, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawImageRectOptions = function (t, n, r, a, o, i) {
                                e.Od(this.Nd), h(n, M), h(r, F), this._drawImageRectOptions(t, M, F, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawLine = function (t, n, r, a, o) {
                                e.Od(this.Nd), this._drawLine(t, n, r, a, o);
                            }),
                            (e.Canvas.prototype.drawOval = function (t, n) {
                                e.Od(this.Nd), (t = h(t)), this._drawOval(t, n);
                            }),
                            (e.Canvas.prototype.drawPaint = function (t) {
                                e.Od(this.Nd), this._drawPaint(t);
                            }),
                            (e.Canvas.prototype.drawParagraph = function (t, n, r) {
                                e.Od(this.Nd), this._drawParagraph(t, n, r);
                            }),
                            (e.Canvas.prototype.drawPatch = function (t, n, a, o, c) {
                                if (24 > t.length) throw 'Need 12 cubic points';
                                if (n && 4 > n.length) throw 'Need 4 colors';
                                if (a && 8 > a.length) throw 'Need 4 shader coordinates';
                                e.Od(this.Nd);
                                const f = u(t, 'HEAPF32'),
                                    l = n ? u(r(n), 'HEAPU32') : U,
                                    s = a ? u(a, 'HEAPF32') : U;
                                o || (o = e.BlendMode.Modulate),
                                    this._drawPatch(f, l, s, o, c),
                                    i(s, a),
                                    i(l, n),
                                    i(f, t);
                            }),
                            (e.Canvas.prototype.drawPath = function (t, n) {
                                e.Od(this.Nd), this._drawPath(t, n);
                            }),
                            (e.Canvas.prototype.drawPicture = function (t) {
                                e.Od(this.Nd), this._drawPicture(t);
                            }),
                            (e.Canvas.prototype.drawPoints = function (t, n, r) {
                                e.Od(this.Nd);
                                var a = u(n, 'HEAPF32');
                                this._drawPoints(t, a, n.length / 2, r), i(a, n);
                            }),
                            (e.Canvas.prototype.drawRRect = function (t, n) {
                                e.Od(this.Nd), (t = p(t)), this._drawRRect(t, n);
                            }),
                            (e.Canvas.prototype.drawRect = function (t, n) {
                                e.Od(this.Nd), (t = h(t)), this._drawRect(t, n);
                            }),
                            (e.Canvas.prototype.drawRect4f = function (t, n, r, a, o) {
                                e.Od(this.Nd), this._drawRect4f(t, n, r, a, o);
                            }),
                            (e.Canvas.prototype.drawShadow = function (t, n, r, a, o, c, f) {
                                e.Od(this.Nd);
                                var l = u(o, 'HEAPF32'),
                                    s = u(c, 'HEAPF32');
                                (n = u(n, 'HEAPF32', R)),
                                    (r = u(r, 'HEAPF32', B)),
                                    this._drawShadow(t, n, r, a, l, s, f),
                                    i(l, o),
                                    i(s, c);
                            }),
                            (e.getShadowLocalBounds = function (e, t, n, r, a, o, i) {
                                return (
                                    (e = f(e)),
                                    (n = u(n, 'HEAPF32', R)),
                                    (r = u(r, 'HEAPF32', B)),
                                    this._getShadowLocalBounds(e, t, n, r, a, o, M)
                                        ? ((t = g.toTypedArray()), i ? (i.set(t), i) : t.slice())
                                        : null
                                );
                            }),
                            (e.Canvas.prototype.drawTextBlob = function (t, n, r, a) {
                                e.Od(this.Nd), this._drawTextBlob(t, n, r, a);
                            }),
                            (e.Canvas.prototype.drawVertices = function (t, n, r) {
                                e.Od(this.Nd), this._drawVertices(t, n, r);
                            }),
                            (e.Canvas.prototype.getDeviceClipBounds = function (e) {
                                this._getDeviceClipBounds(O);
                                var t = A.toTypedArray();
                                return e ? e.set(t) : (e = t.slice()), e;
                            }),
                            (e.Canvas.prototype.getLocalToDevice = function () {
                                this._getLocalToDevice(S);
                                for (var t = S, n = Array(16), r = 0; 16 > r; r++) n[r] = e.HEAPF32[t / 4 + r];
                                return n;
                            }),
                            (e.Canvas.prototype.getTotalMatrix = function () {
                                this._getTotalMatrix(T);
                                for (var t = Array(9), n = 0; 9 > n; n++) t[n] = e.HEAPF32[T / 4 + n];
                                return t;
                            }),
                            (e.Canvas.prototype.makeSurface = function (e) {
                                return ((e = this._makeSurface(e)).Nd = this.Nd), e;
                            }),
                            (e.Canvas.prototype.readPixels = function (n, r, a, o, i) {
                                return e.Od(this.Nd), t(this, n, r, a, o, i);
                            }),
                            (e.Canvas.prototype.saveLayer = function (e, t, n, r) {
                                return (t = h(t)), this._saveLayer(e || null, t, n || null, r || 0);
                            }),
                            (e.Canvas.prototype.writePixels = function (t, n, r, a, o, c, f, l) {
                                if (t.byteLength % (n * r))
                                    throw 'pixels length must be a multiple of the srcWidth * srcHeight';
                                e.Od(this.Nd);
                                var s = t.byteLength / (n * r);
                                (c = c || e.AlphaType.Unpremul),
                                    (f = f || e.ColorType.RGBA_8888),
                                    (l = l || e.ColorSpace.SRGB);
                                var d = s * n;
                                return (
                                    (s = u(t, 'HEAPU8')),
                                    (n = this._writePixels(
                                        { width: n, height: r, colorType: f, alphaType: c, colorSpace: l },
                                        s,
                                        d,
                                        a,
                                        o
                                    )),
                                    i(s, t),
                                    n
                                );
                            }),
                            (e.ColorFilter.MakeBlend = function (t, n, r) {
                                return (t = l(t)), (r = r || e.ColorSpace.SRGB), e.ColorFilter._MakeBlend(t, n, r);
                            }),
                            (e.ColorFilter.MakeMatrix = function (t) {
                                if (!t || 20 !== t.length) throw 'invalid color matrix';
                                var n = u(t, 'HEAPF32'),
                                    r = e.ColorFilter._makeMatrix(n);
                                return i(n, t), r;
                            }),
                            (e.ContourMeasure.prototype.getPosTan = function (e, t) {
                                return this._getPosTan(e, M), (e = g.toTypedArray()), t ? (t.set(e), t) : e.slice();
                            }),
                            (e.ImageFilter.MakeDropShadow = function (t, n, r, a, o, i) {
                                return (o = l(o, E)), e.ImageFilter._MakeDropShadow(t, n, r, a, o, i);
                            }),
                            (e.ImageFilter.MakeDropShadowOnly = function (t, n, r, a, o, i) {
                                return (o = l(o, E)), e.ImageFilter._MakeDropShadowOnly(t, n, r, a, o, i);
                            }),
                            (e.ImageFilter.MakeImage = function (t, n, r, a) {
                                if (((r = h(r, M)), (a = h(a, F)), 'B' in n && 'C' in n))
                                    return e.ImageFilter._MakeImageCubic(t, n.B, n.C, r, a);
                                const o = n.filter;
                                let i = e.MipmapMode.None;
                                return 'mipmap' in n && (i = n.mipmap), e.ImageFilter._MakeImageOptions(t, o, i, r, a);
                            }),
                            (e.ImageFilter.MakeMatrixTransform = function (t, n, r) {
                                if (((t = f(t)), 'B' in n && 'C' in n))
                                    return e.ImageFilter._MakeMatrixTransformCubic(t, n.B, n.C, r);
                                const a = n.filter;
                                let o = e.MipmapMode.None;
                                return (
                                    'mipmap' in n && (o = n.mipmap),
                                    e.ImageFilter._MakeMatrixTransformOptions(t, a, o, r)
                                );
                            }),
                            (e.Paint.prototype.getColor = function () {
                                return this._getColor(E), d(E);
                            }),
                            (e.Paint.prototype.setColor = function (e, t) {
                                (t = t || null), (e = l(e)), this._setColor(e, t);
                            }),
                            (e.Paint.prototype.setColorComponents = function (e, t, n, r, a) {
                                (a = a || null), (e = s(e, t, n, r)), this._setColor(e, a);
                            }),
                            (e.Path.prototype.getPoint = function (e, t) {
                                return (
                                    this._getPoint(e, M),
                                    (e = g.toTypedArray()),
                                    t ? ((t[0] = e[0]), (t[1] = e[1]), t) : e.slice(0, 2)
                                );
                            }),
                            (e.Picture.prototype.makeShader = function (e, t, n, r, a) {
                                return (r = f(r)), (a = h(a)), this._makeShader(e, t, n, r, a);
                            }),
                            (e.PictureRecorder.prototype.beginRecording = function (e) {
                                return (e = h(e)), this._beginRecording(e);
                            }),
                            (e.Surface.prototype.getCanvas = function () {
                                var e = this._getCanvas();
                                return (e.Nd = this.Nd), e;
                            }),
                            (e.Surface.prototype.makeImageSnapshot = function (t) {
                                return e.Od(this.Nd), (t = u(t, 'HEAP32', O)), this._makeImageSnapshot(t);
                            }),
                            (e.Surface.prototype.makeSurface = function (t) {
                                return e.Od(this.Nd), ((t = this._makeSurface(t)).Nd = this.Nd), t;
                            }),
                            (e.Surface.prototype.Ue = function (t, n) {
                                return (
                                    this.ie || (this.ie = this.getCanvas()),
                                    requestAnimationFrame(
                                        function () {
                                            e.Od(this.Nd), t(this.ie), this.flush(n);
                                        }.bind(this)
                                    )
                                );
                            }),
                            e.Surface.prototype.requestAnimationFrame ||
                                (e.Surface.prototype.requestAnimationFrame = e.Surface.prototype.Ue),
                            (e.Surface.prototype.Re = function (t, n) {
                                this.ie || (this.ie = this.getCanvas()),
                                    requestAnimationFrame(
                                        function () {
                                            e.Od(this.Nd), t(this.ie), this.flush(n), this.dispose();
                                        }.bind(this)
                                    );
                            }),
                            e.Surface.prototype.drawOnce || (e.Surface.prototype.drawOnce = e.Surface.prototype.Re),
                            (e.PathEffect.MakeDash = function (t, n) {
                                if ((n || (n = 0), !t.length || 1 == t.length % 2))
                                    throw 'Intervals array must have even length';
                                var r = u(t, 'HEAPF32');
                                return (n = e.PathEffect._MakeDash(r, t.length, n)), i(r, t), n;
                            }),
                            (e.PathEffect.MakeLine2D = function (t, n) {
                                return (n = f(n)), e.PathEffect._MakeLine2D(t, n);
                            }),
                            (e.PathEffect.MakePath2D = function (t, n) {
                                return (t = f(t)), e.PathEffect._MakePath2D(t, n);
                            }),
                            (e.Shader.MakeColor = function (t, n) {
                                return (n = n || null), (t = l(t)), e.Shader._MakeColor(t, n);
                            }),
                            (e.Shader.Blend = e.Shader.MakeBlend),
                            (e.Shader.Color = e.Shader.MakeColor),
                            (e.Shader.MakeLinearGradient = function (t, n, r, a, o, l, s, d) {
                                d = d || null;
                                var h = c(r),
                                    p = u(a, 'HEAPF32');
                                (s = s || 0), (l = f(l));
                                var y = g.toTypedArray();
                                return (
                                    y.set(t),
                                    y.set(n, 2),
                                    (t = e.Shader._MakeLinearGradient(M, h.Wd, h.ke, p, h.count, o, s, l, d)),
                                    i(h.Wd, r),
                                    a && i(p, a),
                                    t
                                );
                            }),
                            (e.Shader.MakeRadialGradient = function (t, n, r, a, o, l, s, d) {
                                d = d || null;
                                var h = c(r),
                                    p = u(a, 'HEAPF32');
                                return (
                                    (s = s || 0),
                                    (l = f(l)),
                                    (t = e.Shader._MakeRadialGradient(
                                        t[0],
                                        t[1],
                                        n,
                                        h.Wd,
                                        h.ke,
                                        p,
                                        h.count,
                                        o,
                                        s,
                                        l,
                                        d
                                    )),
                                    i(h.Wd, r),
                                    a && i(p, a),
                                    t
                                );
                            }),
                            (e.Shader.MakeSweepGradient = function (t, n, r, a, o, l, s, d, h, p) {
                                p = p || null;
                                var y = c(r),
                                    m = u(a, 'HEAPF32');
                                return (
                                    (s = s || 0),
                                    (d = d || 0),
                                    (h = h || 360),
                                    (l = f(l)),
                                    (t = e.Shader._MakeSweepGradient(t, n, y.Wd, y.ke, m, y.count, o, d, h, s, l, p)),
                                    i(y.Wd, r),
                                    a && i(m, a),
                                    t
                                );
                            }),
                            (e.Shader.MakeTwoPointConicalGradient = function (t, n, r, a, o, l, s, d, h, p) {
                                p = p || null;
                                var y = c(o),
                                    m = u(l, 'HEAPF32');
                                (h = h || 0), (d = f(d));
                                var v = g.toTypedArray();
                                return (
                                    v.set(t),
                                    v.set(r, 2),
                                    (t = e.Shader._MakeTwoPointConicalGradient(
                                        M,
                                        n,
                                        a,
                                        y.Wd,
                                        y.ke,
                                        m,
                                        y.count,
                                        s,
                                        h,
                                        d,
                                        p
                                    )),
                                    i(y.Wd, o),
                                    l && i(m, l),
                                    t
                                );
                            }),
                            (e.Vertices.prototype.bounds = function (e) {
                                this._bounds(M);
                                var t = g.toTypedArray();
                                return e ? (e.set(t), e) : t.slice();
                            }),
                            e.Rd &&
                                e.Rd.forEach(function (e) {
                                    e();
                                });
                    }),
                        (e.computeTonalColors = function (e) {
                            var t = u(e.ambient, 'HEAPF32'),
                                n = u(e.spot, 'HEAPF32');
                            this._computeTonalColors(t, n);
                            var r = { ambient: d(t), spot: d(n) };
                            return i(t, e.ambient), i(n, e.spot), r;
                        }),
                        (e.LTRBRect = function (e, t, n, r) {
                            return Float32Array.of(e, t, n, r);
                        }),
                        (e.XYWHRect = function (e, t, n, r) {
                            return Float32Array.of(e, t, e + n, t + r);
                        }),
                        (e.LTRBiRect = function (e, t, n, r) {
                            return Int32Array.of(e, t, n, r);
                        }),
                        (e.XYWHiRect = function (e, t, n, r) {
                            return Int32Array.of(e, t, e + n, t + r);
                        }),
                        (e.RRectXY = function (e, t, n) {
                            return Float32Array.of(e[0], e[1], e[2], e[3], t, n, t, n, t, n, t, n);
                        }),
                        (e.MakeAnimatedImageFromEncoded = function (t) {
                            t = new Uint8Array(t);
                            var n = e._malloc(t.byteLength);
                            return e.HEAPU8.set(t, n), (t = e._decodeAnimatedImage(n, t.byteLength)) ? t : null;
                        }),
                        (e.MakeImageFromEncoded = function (t) {
                            t = new Uint8Array(t);
                            var n = e._malloc(t.byteLength);
                            return e.HEAPU8.set(t, n), (t = e._decodeImage(n, t.byteLength)) ? t : null;
                        });
                    var G,
                        H = null;
                    (e.MakeImageFromCanvasImageSource = function (t) {
                        var n = t.width,
                            r = t.height;
                        H || (H = document.createElement('canvas')), (H.width = n), (H.height = r);
                        var a = H.getContext('2d', { Pf: !0 });
                        return (
                            a.drawImage(t, 0, 0),
                            (t = a.getImageData(0, 0, n, r)),
                            e.MakeImage(
                                {
                                    width: n,
                                    height: r,
                                    alphaType: e.AlphaType.Unpremul,
                                    colorType: e.ColorType.RGBA_8888,
                                    colorSpace: e.ColorSpace.SRGB,
                                },
                                t.data,
                                4 * n
                            )
                        );
                    }),
                        (e.MakeImage = function (t, n, r) {
                            var a = e._malloc(n.length);
                            return e.HEAPU8.set(n, a), e._MakeImage(t, a, n.length, r);
                        }),
                        (e.MakeVertices = function (t, n, a, o, i, c) {
                            var f = (i && i.length) || 0,
                                l = 0;
                            return (
                                a && a.length && (l |= 1),
                                o && o.length && (l |= 2),
                                void 0 === c || c || (l |= 4),
                                u(n, 'HEAPF32', (t = new e._VerticesBuilder(t, n.length / 2, f, l)).positions()),
                                t.texCoords() && u(a, 'HEAPF32', t.texCoords()),
                                t.colors() && u(r(o), 'HEAPU32', t.colors()),
                                t.indices() && u(i, 'HEAPU16', t.indices()),
                                t.detach()
                            );
                        }),
                        ((G = n).Rd = G.Rd || []),
                        G.Rd.push(function () {
                            function e(e) {
                                if (!e || !e.length) return [];
                                for (var t = [], n = 0; n < e.length; n += 5) {
                                    var r = G.LTRBRect(e[n], e[n + 1], e[n + 2], e[n + 3]),
                                        a = G.TextDirection.LTR;
                                    0 === e[n + 4] && (a = G.TextDirection.RTL), t.push({ rect: r, dir: a });
                                }
                                return G._free(e.byteOffset), t;
                            }
                            function t(e) {
                                return (
                                    void 0 === (e = e || {}).weight && (e.weight = G.FontWeight.Normal),
                                    (e.width = e.width || G.FontWidth.Normal),
                                    (e.slant = e.slant || G.FontSlant.Upright),
                                    e
                                );
                            }
                            function n(e) {
                                if (!e || !e.length) return U;
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var a = r(e[n]);
                                    t.push(a);
                                }
                                return u(t, 'HEAPU32');
                            }
                            function r(e) {
                                if (f[e]) return f[e];
                                var t = k(e) + 1,
                                    n = G._malloc(t);
                                return x(e, I, n, t), (f[e] = n);
                            }
                            function a(e) {
                                if (
                                    ((e._colorPtr = l(e.color)),
                                    (e._foregroundColorPtr = U),
                                    (e._backgroundColorPtr = U),
                                    (e._decorationColorPtr = U),
                                    e.foregroundColor && (e._foregroundColorPtr = l(e.foregroundColor, s)),
                                    e.backgroundColor && (e._backgroundColorPtr = l(e.backgroundColor, d)),
                                    e.decorationColor && (e._decorationColorPtr = l(e.decorationColor, h)),
                                    Array.isArray(e.fontFamilies) && e.fontFamilies.length
                                        ? ((e._fontFamiliesPtr = n(e.fontFamilies)),
                                          (e._fontFamiliesLen = e.fontFamilies.length))
                                        : ((e._fontFamiliesPtr = U), (e._fontFamiliesLen = 0)),
                                    e.locale)
                                ) {
                                    var t = e.locale;
                                    (e._localePtr = r(t)), (e._localeLen = k(t) + 1);
                                } else (e._localePtr = U), (e._localeLen = 0);
                                if (Array.isArray(e.shadows) && e.shadows.length) {
                                    var a = (t = e.shadows).map(function (e) {
                                            return e.color || G.BLACK;
                                        }),
                                        o = t.map(function (e) {
                                            return e.blurRadius || 0;
                                        });
                                    e._shadowLen = t.length;
                                    for (var i = G._malloc(8 * t.length), f = i / 4, p = 0; p < t.length; p++) {
                                        var y = t[p].offset || [0, 0];
                                        (G.HEAPF32[f] = y[0]), (G.HEAPF32[f + 1] = y[1]), (f += 2);
                                    }
                                    (e._shadowColorsPtr = c(a).Wd),
                                        (e._shadowOffsetsPtr = i),
                                        (e._shadowBlurRadiiPtr = u(o, 'HEAPF32'));
                                } else
                                    (e._shadowLen = 0),
                                        (e._shadowColorsPtr = U),
                                        (e._shadowOffsetsPtr = U),
                                        (e._shadowBlurRadiiPtr = U);
                                Array.isArray(e.fontFeatures) && e.fontFeatures.length
                                    ? ((a = (t = e.fontFeatures).map(function (e) {
                                          return e.name;
                                      })),
                                      (o = t.map(function (e) {
                                          return e.value;
                                      })),
                                      (e._fontFeatureLen = t.length),
                                      (e._fontFeatureNamesPtr = n(a)),
                                      (e._fontFeatureValuesPtr = u(o, 'HEAPU32')))
                                    : ((e._fontFeatureLen = 0),
                                      (e._fontFeatureNamesPtr = U),
                                      (e._fontFeatureValuesPtr = U)),
                                    Array.isArray(e.fontVariations) && e.fontVariations.length
                                        ? ((a = (t = e.fontVariations).map(function (e) {
                                              return e.axis;
                                          })),
                                          (o = t.map(function (e) {
                                              return e.value;
                                          })),
                                          (e._fontVariationLen = t.length),
                                          (e._fontVariationAxesPtr = n(a)),
                                          (e._fontVariationValuesPtr = u(o, 'HEAPF32')))
                                        : ((e._fontVariationLen = 0),
                                          (e._fontVariationAxesPtr = U),
                                          (e._fontVariationValuesPtr = U));
                            }
                            function o(e) {
                                G._free(e._fontFamiliesPtr),
                                    G._free(e._shadowColorsPtr),
                                    G._free(e._shadowOffsetsPtr),
                                    G._free(e._shadowBlurRadiiPtr),
                                    G._free(e._fontFeatureNamesPtr),
                                    G._free(e._fontFeatureValuesPtr),
                                    G._free(e._fontVariationAxesPtr),
                                    G._free(e._fontVariationValuesPtr);
                            }
                            (G.Paragraph.prototype.getRectsForRange = function (t, n, r, a) {
                                return e((t = this._getRectsForRange(t, n, r, a)));
                            }),
                                (G.Paragraph.prototype.getRectsForPlaceholders = function () {
                                    return e(this._getRectsForPlaceholders());
                                }),
                                (G.TypefaceFontProvider.prototype.registerFont = function (e, t) {
                                    if (!(e = G.Typeface.MakeFreeTypeFaceFromData(e))) return null;
                                    (t = r(t)), this._registerFont(e, t);
                                }),
                                (G.ParagraphStyle = function (e) {
                                    if (((e.disableHinting = e.disableHinting || !1), e.ellipsis)) {
                                        var a = e.ellipsis;
                                        (e._ellipsisPtr = r(a)), (e._ellipsisLen = k(a) + 1);
                                    } else (e._ellipsisPtr = U), (e._ellipsisLen = 0);
                                    return (
                                        null == e.heightMultiplier && (e.heightMultiplier = -1),
                                        (e.maxLines = e.maxLines || 0),
                                        (e.replaceTabCharacters = e.replaceTabCharacters || !1),
                                        ((a = (a = e.strutStyle) || {}).strutEnabled = a.strutEnabled || !1),
                                        a.strutEnabled && Array.isArray(a.fontFamilies) && a.fontFamilies.length
                                            ? ((a._fontFamiliesPtr = n(a.fontFamilies)),
                                              (a._fontFamiliesLen = a.fontFamilies.length))
                                            : ((a._fontFamiliesPtr = U), (a._fontFamiliesLen = 0)),
                                        (a.fontStyle = t(a.fontStyle)),
                                        null == a.fontSize && (a.fontSize = -1),
                                        null == a.heightMultiplier && (a.heightMultiplier = -1),
                                        (a.halfLeading = a.halfLeading || !1),
                                        (a.leading = a.leading || 0),
                                        (a.forceStrutHeight = a.forceStrutHeight || !1),
                                        (e.strutStyle = a),
                                        (e.textAlign = e.textAlign || G.TextAlign.Start),
                                        (e.textDirection = e.textDirection || G.TextDirection.LTR),
                                        (e.textHeightBehavior = e.textHeightBehavior || G.TextHeightBehavior.All),
                                        (e.textStyle = G.TextStyle(e.textStyle)),
                                        e
                                    );
                                }),
                                (G.TextStyle = function (e) {
                                    return (
                                        e.color || (e.color = G.BLACK),
                                        (e.decoration = e.decoration || 0),
                                        (e.decorationThickness = e.decorationThickness || 0),
                                        (e.decorationStyle = e.decorationStyle || G.DecorationStyle.Solid),
                                        (e.textBaseline = e.textBaseline || G.TextBaseline.Alphabetic),
                                        null == e.fontSize && (e.fontSize = -1),
                                        (e.letterSpacing = e.letterSpacing || 0),
                                        (e.wordSpacing = e.wordSpacing || 0),
                                        null == e.heightMultiplier && (e.heightMultiplier = -1),
                                        (e.halfLeading = e.halfLeading || !1),
                                        (e.fontStyle = t(e.fontStyle)),
                                        e
                                    );
                                });
                            var f = {},
                                s = G._malloc(16),
                                d = G._malloc(16),
                                h = G._malloc(16);
                            (G.ParagraphBuilder.Make = function (e, t) {
                                return a(e.textStyle), (t = G.ParagraphBuilder._Make(e, t)), o(e.textStyle), t;
                            }),
                                (G.ParagraphBuilder.MakeFromFontProvider = function (e, t) {
                                    return (
                                        a(e.textStyle),
                                        (t = G.ParagraphBuilder._MakeFromFontProvider(e, t)),
                                        o(e.textStyle),
                                        t
                                    );
                                }),
                                (G.ParagraphBuilder.MakeFromFontCollection = function (e, t) {
                                    return (
                                        a(e.textStyle),
                                        (t = G.ParagraphBuilder._MakeFromFontCollection(e, t)),
                                        o(e.textStyle),
                                        t
                                    );
                                }),
                                (G.ParagraphBuilder.ShapeText = function (e, t, n) {
                                    let r = 0;
                                    for (const e of t) r += e.length;
                                    if (r !== e.length) throw 'Accumulated block lengths must equal text.length';
                                    return G.ParagraphBuilder._ShapeText(e, t, n);
                                }),
                                (G.ParagraphBuilder.prototype.pushStyle = function (e) {
                                    a(e), this._pushStyle(e), o(e);
                                }),
                                (G.ParagraphBuilder.prototype.pushPaintStyle = function (e, t, n) {
                                    a(e), this._pushPaintStyle(e, t, n), o(e);
                                }),
                                (G.ParagraphBuilder.prototype.addPlaceholder = function (e, t, n, r, a) {
                                    (n = n || G.PlaceholderAlignment.Baseline),
                                        (r = r || G.TextBaseline.Alphabetic),
                                        this._addPlaceholder(e || 0, t || 0, n, r, a || 0);
                                }),
                                (G.ParagraphBuilder.prototype.setWordsUtf8 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setWordsUtf8(t, (e && e.length) || 0), i(t, e);
                                }),
                                (G.ParagraphBuilder.prototype.setWordsUtf16 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setWordsUtf16(t, (e && e.length) || 0), i(t, e);
                                }),
                                (G.ParagraphBuilder.prototype.setGraphemeBreaksUtf8 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setGraphemeBreaksUtf8(t, (e && e.length) || 0), i(t, e);
                                }),
                                (G.ParagraphBuilder.prototype.setGraphemeBreaksUtf16 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setGraphemeBreaksUtf16(t, (e && e.length) || 0), i(t, e);
                                }),
                                (G.ParagraphBuilder.prototype.setLineBreaksUtf8 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setLineBreaksUtf8(t, (e && e.length) || 0), i(t, e);
                                }),
                                (G.ParagraphBuilder.prototype.setLineBreaksUtf16 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setLineBreaksUtf16(t, (e && e.length) || 0), i(t, e);
                                });
                        }),
                        (e.Rd = e.Rd || []),
                        e.Rd.push(function () {
                            (e.Path.prototype.op = function (e, t) {
                                return this._op(e, t) ? this : null;
                            }),
                                (e.Path.prototype.simplify = function () {
                                    return this._simplify() ? this : null;
                                });
                        }),
                        (e.Rd = e.Rd || []),
                        e.Rd.push(function () {
                            (e.Canvas.prototype.drawText = function (t, n, r, a, o) {
                                var i = k(t),
                                    u = e._malloc(i + 1);
                                x(t, I, u, i + 1), this._drawSimpleText(u, i, n, r, o, a), e._free(u);
                            }),
                                (e.Canvas.prototype.drawGlyphs = function (t, n, r, a, o, c) {
                                    if (!(2 * t.length <= n.length))
                                        throw 'Not enough positions for the array of gyphs';
                                    e.Od(this.Nd);
                                    const f = u(t, 'HEAPU16'),
                                        l = u(n, 'HEAPF32');
                                    this._drawGlyphs(t.length, f, l, r, a, o, c), i(l, n), i(f, t);
                                }),
                                (e.Font.prototype.getGlyphBounds = function (t, n, r) {
                                    var a = u(t, 'HEAPU16'),
                                        o = e._malloc(16 * t.length);
                                    return (
                                        this._getGlyphWidthBounds(a, t.length, U, o, n || null),
                                        (n = new Float32Array(e.HEAPU8.buffer, o, 4 * t.length)),
                                        i(a, t),
                                        r ? (r.set(n), e._free(o), r) : ((t = Float32Array.from(n)), e._free(o), t)
                                    );
                                }),
                                (e.Font.prototype.getGlyphIDs = function (t, n, r) {
                                    n || (n = t.length);
                                    var a = k(t) + 1,
                                        o = e._malloc(a);
                                    return (
                                        x(t, I, o, a),
                                        (t = e._malloc(2 * n)),
                                        (n = this._getGlyphIDs(o, a - 1, n, t)),
                                        e._free(o),
                                        0 > n
                                            ? (e._free(t), null)
                                            : ((o = new Uint16Array(e.HEAPU8.buffer, t, n)),
                                              r
                                                  ? (r.set(o), e._free(t), r)
                                                  : ((r = Uint16Array.from(o)), e._free(t), r))
                                    );
                                }),
                                (e.Font.prototype.getGlyphIntercepts = function (e, t, n, r) {
                                    var a = u(e, 'HEAPU16'),
                                        o = u(t, 'HEAPF32');
                                    return this._getGlyphIntercepts(
                                        a,
                                        e.length,
                                        !(e && e._ck),
                                        o,
                                        t.length,
                                        !(t && t._ck),
                                        n,
                                        r
                                    );
                                }),
                                (e.Font.prototype.getGlyphWidths = function (t, n, r) {
                                    var a = u(t, 'HEAPU16'),
                                        o = e._malloc(4 * t.length);
                                    return (
                                        this._getGlyphWidthBounds(a, t.length, o, U, n || null),
                                        (n = new Float32Array(e.HEAPU8.buffer, o, t.length)),
                                        i(a, t),
                                        r ? (r.set(n), e._free(o), r) : ((t = Float32Array.from(n)), e._free(o), t)
                                    );
                                }),
                                (e.FontMgr.FromData = function () {
                                    if (!arguments.length) return null;
                                    var t = arguments;
                                    if ((1 === t.length && Array.isArray(t[0]) && (t = arguments[0]), !t.length))
                                        return null;
                                    for (var n = [], r = [], a = 0; a < t.length; a++) {
                                        var o = new Uint8Array(t[a]),
                                            i = u(o, 'HEAPU8');
                                        n.push(i), r.push(o.byteLength);
                                    }
                                    return (
                                        (n = u(n, 'HEAPU32')),
                                        (r = u(r, 'HEAPU32')),
                                        (t = e.FontMgr._fromData(n, r, t.length)),
                                        e._free(n),
                                        e._free(r),
                                        t
                                    );
                                }),
                                (e.Typeface.MakeFreeTypeFaceFromData = function (t) {
                                    var n = u((t = new Uint8Array(t)), 'HEAPU8');
                                    return (t = e.Typeface._MakeFreeTypeFaceFromData(n, t.byteLength)) ? t : null;
                                }),
                                (e.Typeface.prototype.getGlyphIDs = function (t, n, r) {
                                    n || (n = t.length);
                                    var a = k(t) + 1,
                                        o = e._malloc(a);
                                    return (
                                        x(t, I, o, a),
                                        (t = e._malloc(2 * n)),
                                        (n = this._getGlyphIDs(o, a - 1, n, t)),
                                        e._free(o),
                                        0 > n
                                            ? (e._free(t), null)
                                            : ((o = new Uint16Array(e.HEAPU8.buffer, t, n)),
                                              r
                                                  ? (r.set(o), e._free(t), r)
                                                  : ((r = Uint16Array.from(o)), e._free(t), r))
                                    );
                                }),
                                (e.TextBlob.MakeOnPath = function (t, n, r, a) {
                                    if (t && t.length && n && n.countPoints()) {
                                        if (1 === n.countPoints()) return this.MakeFromText(t, r);
                                        a || (a = 0);
                                        var o = r.getGlyphIDs(t);
                                        o = r.getGlyphWidths(o);
                                        for (
                                            var i = [],
                                                u = (n = new e.ContourMeasureIter(n, !1, 1)).next(),
                                                c = new Float32Array(4),
                                                f = 0;
                                            f < t.length && u;
                                            f++
                                        ) {
                                            var l = o[f];
                                            if ((a += l / 2) > u.length()) {
                                                if ((u.delete(), !(u = n.next()))) {
                                                    t = t.substring(0, f);
                                                    break;
                                                }
                                                a = l / 2;
                                            }
                                            u.getPosTan(a, c);
                                            var s = c[2],
                                                d = c[3];
                                            i.push(s, d, c[0] - (l / 2) * s, c[1] - (l / 2) * d), (a += l / 2);
                                        }
                                        return (t = this.MakeFromRSXform(t, i, r)), u && u.delete(), n.delete(), t;
                                    }
                                }),
                                (e.TextBlob.MakeFromRSXform = function (t, n, r) {
                                    var a = k(t) + 1,
                                        o = e._malloc(a);
                                    return (
                                        x(t, I, o, a),
                                        (t = u(n, 'HEAPF32')),
                                        (r = e.TextBlob._MakeFromRSXform(o, a - 1, t, r)),
                                        e._free(o),
                                        r || null
                                    );
                                }),
                                (e.TextBlob.MakeFromRSXformGlyphs = function (t, n, r) {
                                    var a = u(t, 'HEAPU16');
                                    return (
                                        (n = u(n, 'HEAPF32')),
                                        (r = e.TextBlob._MakeFromRSXformGlyphs(a, 2 * t.length, n, r)),
                                        i(a, t),
                                        r || null
                                    );
                                }),
                                (e.TextBlob.MakeFromGlyphs = function (t, n) {
                                    var r = u(t, 'HEAPU16');
                                    return (n = e.TextBlob._MakeFromGlyphs(r, 2 * t.length, n)), i(r, t), n || null;
                                }),
                                (e.TextBlob.MakeFromText = function (t, n) {
                                    var r = k(t) + 1,
                                        a = e._malloc(r);
                                    return (
                                        x(t, I, a, r),
                                        (t = e.TextBlob._MakeFromText(a, r - 1, n)),
                                        e._free(a),
                                        t || null
                                    );
                                }),
                                (e.MallocGlyphIDs = function (t) {
                                    return e.Malloc(Uint16Array, t);
                                });
                        }),
                        (e.Rd = e.Rd || []),
                        e.Rd.push(function () {
                            e.MakePicture = function (t) {
                                t = new Uint8Array(t);
                                var n = e._malloc(t.byteLength);
                                return e.HEAPU8.set(t, n), (t = e._MakePicture(n, t.byteLength)) ? t : null;
                            };
                        }),
                        (e.Rd = e.Rd || []),
                        e.Rd.push(function () {
                            (e.RuntimeEffect.Make = function (t, n) {
                                return e.RuntimeEffect._Make(t, {
                                    onError:
                                        n ||
                                        function (e) {
                                            console.log('RuntimeEffect error', e);
                                        },
                                });
                            }),
                                (e.RuntimeEffect.prototype.makeShader = function (e, t) {
                                    var n = !e._ck,
                                        r = u(e, 'HEAPF32');
                                    return (t = f(t)), this._makeShader(r, 4 * e.length, n, t);
                                }),
                                (e.RuntimeEffect.prototype.makeShaderWithChildren = function (e, t, n) {
                                    var r = !e._ck,
                                        a = u(e, 'HEAPF32');
                                    n = f(n);
                                    for (var o = [], i = 0; i < t.length; i++) o.push(t[i].Md.Pd);
                                    return (
                                        (t = u(o, 'HEAPU32')),
                                        this._makeShaderWithChildren(a, 4 * e.length, r, t, o.length, n)
                                    );
                                });
                        });
                })(n);
            var u,
                c,
                f,
                l,
                s,
                d,
                h = i({}, n),
                p = './this.program',
                y = (e, t) => {
                    throw t;
                },
                m = 'object' == typeof window,
                v = 'function' == typeof importScripts,
                g =
                    'object' == typeof process &&
                    'object' == typeof process.versions &&
                    'string' == typeof process.versions.node,
                _ = '';
            g
                ? ((_ = v ? require('path').dirname(_) + '/' : __dirname + '/'),
                  (d = () => {
                      s || ((l = require('fs')), (s = require('path')));
                  }),
                  (u = function (e, t) {
                      return d(), (e = s.normalize(e)), l.readFileSync(e, t ? null : 'utf8');
                  }),
                  (f = e => ((e = u(e, !0)).buffer || (e = new Uint8Array(e)), e)),
                  (c = (e, t, n) => {
                      d(),
                          (e = s.normalize(e)),
                          l.readFile(e, function (e, r) {
                              e ? n(e) : t(r.buffer);
                          });
                  }),
                  1 < process.argv.length && (p = process.argv[1].replace(/\\/g, '/')),
                  process.argv.slice(2),
                  process.on('unhandledRejection', function (e) {
                      throw e;
                  }),
                  (y = (e, t) => {
                      if (C || 0 < J) throw ((process.exitCode = e), t);
                      t instanceof Cn || P('exiting due to exception: ' + t), process.exit(e);
                  }),
                  (n.inspect = function () {
                      return '[Emscripten Module object]';
                  }))
                : (m || v) &&
                  (v
                      ? (_ = self.location.href)
                      : 'undefined' != typeof document && document.currentScript && (_ = document.currentScript.src),
                  e && (_ = e),
                  (_ = 0 !== _.indexOf('blob:') ? _.substr(0, _.replace(/[?#].*/, '').lastIndexOf('/') + 1) : ''),
                  (u = e => {
                      var t = new XMLHttpRequest();
                      return t.open('GET', e, !1), t.send(null), t.responseText;
                  }),
                  v &&
                      (f = e => {
                          var t = new XMLHttpRequest();
                          return (
                              t.open('GET', e, !1),
                              (t.responseType = 'arraybuffer'),
                              t.send(null),
                              new Uint8Array(t.response)
                          );
                      }),
                  (c = (e, t, n) => {
                      var r = new XMLHttpRequest();
                      r.open('GET', e, !0),
                          (r.responseType = 'arraybuffer'),
                          (r.onload = () => {
                              200 == r.status || (0 == r.status && r.response) ? t(r.response) : n();
                          }),
                          (r.onerror = n),
                          r.send(null);
                  }));
            var b = n.print || console.log.bind(console),
                P = n.printErr || console.warn.bind(console);
            i(n, h), (h = null), n.thisProgram && (p = n.thisProgram), n.quit && (y = n.quit);
            var A,
                w = 0;
            n.wasmBinary && (A = n.wasmBinary);
            var C = n.noExitRuntime || !0;
            'object' != typeof WebAssembly && oe('no native wasm support detected');
            var T,
                S = !1,
                E = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
            function M(e, t, n) {
                var r = t + n;
                for (n = t; e[n] && !(n >= r); ) ++n;
                if (16 < n - t && e.subarray && E) return E.decode(e.subarray(t, n));
                for (r = ''; t < n; ) {
                    var a = e[t++];
                    if (128 & a) {
                        var o = 63 & e[t++];
                        if (192 == (224 & a)) r += String.fromCharCode(((31 & a) << 6) | o);
                        else {
                            var i = 63 & e[t++];
                            65536 >
                            (a =
                                224 == (240 & a)
                                    ? ((15 & a) << 12) | (o << 6) | i
                                    : ((7 & a) << 18) | (o << 12) | (i << 6) | (63 & e[t++]))
                                ? (r += String.fromCharCode(a))
                                : ((a -= 65536), (r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))));
                        }
                    } else r += String.fromCharCode(a);
                }
                return r;
            }
            function F(e, t) {
                return e ? M(I, e, t) : '';
            }
            function x(e, t, n, r) {
                if (!(0 < r)) return 0;
                var a = n;
                r = n + r - 1;
                for (var o = 0; o < e.length; ++o) {
                    var i = e.charCodeAt(o);
                    if (
                        (55296 <= i && 57343 >= i && (i = (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++o))),
                        127 >= i)
                    ) {
                        if (n >= r) break;
                        t[n++] = i;
                    } else {
                        if (2047 >= i) {
                            if (n + 1 >= r) break;
                            t[n++] = 192 | (i >> 6);
                        } else {
                            if (65535 >= i) {
                                if (n + 2 >= r) break;
                                t[n++] = 224 | (i >> 12);
                            } else {
                                if (n + 3 >= r) break;
                                (t[n++] = 240 | (i >> 18)), (t[n++] = 128 | ((i >> 12) & 63));
                            }
                            t[n++] = 128 | ((i >> 6) & 63);
                        }
                        t[n++] = 128 | (63 & i);
                    }
                }
                return (t[n] = 0), n - a;
            }
            function k(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var r = e.charCodeAt(n);
                    55296 <= r && 57343 >= r && (r = (65536 + ((1023 & r) << 10)) | (1023 & e.charCodeAt(++n))),
                        127 >= r ? ++t : (t = 2047 >= r ? t + 2 : 65535 >= r ? t + 3 : t + 4);
                }
                return t;
            }
            var R,
                B,
                I,
                O,
                D,
                L,
                j,
                U,
                G,
                H = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0;
            function W(e, t) {
                for (var n = e >> 1, r = n + t / 2; !(n >= r) && D[n]; ) ++n;
                if (32 < (n <<= 1) - e && H) return H.decode(I.subarray(e, n));
                for (n = '', r = 0; !(r >= t / 2); ++r) {
                    var a = O[(e + 2 * r) >> 1];
                    if (0 == a) break;
                    n += String.fromCharCode(a);
                }
                return n;
            }
            function N(e, t, n) {
                if ((void 0 === n && (n = 2147483647), 2 > n)) return 0;
                var r = t;
                n = (n -= 2) < 2 * e.length ? n / 2 : e.length;
                for (var a = 0; a < n; ++a) (O[t >> 1] = e.charCodeAt(a)), (t += 2);
                return (O[t >> 1] = 0), t - r;
            }
            function V(e) {
                return 2 * e.length;
            }
            function $(e, t) {
                for (var n = 0, r = ''; !(n >= t / 4); ) {
                    var a = L[(e + 4 * n) >> 2];
                    if (0 == a) break;
                    ++n,
                        65536 <= a
                            ? ((a -= 65536), (r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))))
                            : (r += String.fromCharCode(a));
                }
                return r;
            }
            function Y(e, t, n) {
                if ((void 0 === n && (n = 2147483647), 4 > n)) return 0;
                var r = t;
                n = r + n - 4;
                for (var a = 0; a < e.length; ++a) {
                    var o = e.charCodeAt(a);
                    if (
                        (55296 <= o && 57343 >= o && (o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++a))),
                        (L[t >> 2] = o),
                        (t += 4) + 4 > n)
                    )
                        break;
                }
                return (L[t >> 2] = 0), t - r;
            }
            function X(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var r = e.charCodeAt(n);
                    55296 <= r && 57343 >= r && ++n, (t += 4);
                }
                return t;
            }
            function Q() {
                var e = T.buffer;
                (R = e),
                    (n.HEAP8 = B = new Int8Array(e)),
                    (n.HEAP16 = O = new Int16Array(e)),
                    (n.HEAP32 = L = new Int32Array(e)),
                    (n.HEAPU8 = I = new Uint8Array(e)),
                    (n.HEAPU16 = D = new Uint16Array(e)),
                    (n.HEAPU32 = j = new Uint32Array(e)),
                    (n.HEAPF32 = U = new Float32Array(e)),
                    (n.HEAPF64 = G = new Float64Array(e));
            }
            var z,
                q = [],
                K = [],
                Z = [],
                J = 0;
            function ee() {
                var e = n.preRun.shift();
                q.unshift(e);
            }
            var te,
                ne = 0,
                re = null,
                ae = null;
            function oe(e) {
                throw (
                    (n.onAbort && n.onAbort(e),
                    P((e = 'Aborted(' + e + ')')),
                    (S = !0),
                    (e = new WebAssembly.RuntimeError(e + '. Build with -s ASSERTIONS=1 for more info.')),
                    a(e),
                    e)
                );
            }
            function ie() {
                return te.startsWith('data:application/octet-stream;base64,');
            }
            if (((n.preloadedImages = {}), (n.preloadedAudios = {}), (te = 'canvaskit.wasm'), !ie())) {
                var ue = te;
                te = n.locateFile ? n.locateFile(ue, _) : _ + ue;
            }
            function ce() {
                var e = te;
                try {
                    if (e == te && A) return new Uint8Array(A);
                    if (f) return f(e);
                    throw 'both async and sync fetching of the wasm failed';
                } catch (e) {
                    oe(e);
                }
            }
            function fe(e) {
                for (; 0 < e.length; ) {
                    var t = e.shift();
                    if ('function' == typeof t) t(n);
                    else {
                        var r = t.Jf;
                        'number' == typeof r
                            ? void 0 === t.Ae
                                ? le(r)()
                                : le(r)(t.Ae)
                            : r(void 0 === t.Ae ? null : t.Ae);
                    }
                }
            }
            function le(e) {
                return z.get(e);
            }
            function se(e) {
                (this.Pd = e - 16),
                    (this.zf = function (e) {
                        L[(this.Pd + 4) >> 2] = e;
                    }),
                    (this.wf = function (e) {
                        L[(this.Pd + 8) >> 2] = e;
                    }),
                    (this.xf = function () {
                        L[this.Pd >> 2] = 0;
                    }),
                    (this.vf = function () {
                        B[(this.Pd + 12) >> 0] = 0;
                    }),
                    (this.yf = function () {
                        B[(this.Pd + 13) >> 0] = 0;
                    }),
                    (this.mf = function (e, t) {
                        this.zf(e), this.wf(t), this.xf(), this.vf(), this.yf();
                    });
            }
            var de = {},
                he = [null, [], []],
                pe = {},
                ye = {};
            function me(e) {
                for (; e.length; ) {
                    var t = e.pop();
                    e.pop()(t);
                }
            }
            function ve(e) {
                return this.fromWireType(j[e >> 2]);
            }
            var ge = {},
                _e = {},
                be = {};
            function Pe(e) {
                if (void 0 === e) return '_unknown';
                var t = (e = e.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0);
                return 48 <= t && 57 >= t ? '_' + e : e;
            }
            function Ae(e, t) {
                return (
                    (e = Pe(e)),
                    function () {
                        return t.apply(this, arguments);
                    }
                );
            }
            function we(e) {
                var t = Error,
                    n = Ae(e, function (t) {
                        (this.name = e),
                            (this.message = t),
                            void 0 !== (t = Error(t).stack) &&
                                (this.stack = this.toString() + '\n' + t.replace(/^Error(:[^\n]*)?\n/, ''));
                    });
                return (
                    (n.prototype = Object.create(t.prototype)),
                    (n.prototype.constructor = n),
                    (n.prototype.toString = function () {
                        return void 0 === this.message ? this.name : this.name + ': ' + this.message;
                    }),
                    n
                );
            }
            var Ce = void 0;
            function Te(e) {
                throw new Ce(e);
            }
            function Se(e, t, n) {
                function r(t) {
                    (t = n(t)).length !== e.length && Te('Mismatched type converter count');
                    for (var r = 0; r < e.length; ++r) Re(e[r], t[r]);
                }
                e.forEach(function (e) {
                    be[e] = t;
                });
                var a = Array(t.length),
                    o = [],
                    i = 0;
                t.forEach(function (e, t) {
                    _e.hasOwnProperty(e)
                        ? (a[t] = _e[e])
                        : (o.push(e),
                          ge.hasOwnProperty(e) || (ge[e] = []),
                          ge[e].push(function () {
                              (a[t] = _e[e]), ++i === o.length && r(a);
                          }));
                }),
                    0 === o.length && r(a);
            }
            function Ee(e) {
                switch (e) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError('Unknown type size: ' + e);
                }
            }
            var Me = void 0;
            function Fe(e) {
                for (var t = ''; I[e]; ) t += Me[I[e++]];
                return t;
            }
            var xe = void 0;
            function ke(e) {
                throw new xe(e);
            }
            function Re(e, t, n = {}) {
                if (!('argPackAdvance' in t))
                    throw new TypeError('registerType registeredInstance requires argPackAdvance');
                var r = t.name;
                if ((e || ke('type "' + r + '" must have a positive integer typeid pointer'), _e.hasOwnProperty(e))) {
                    if (n.lf) return;
                    ke("Cannot register type '" + r + "' twice");
                }
                (_e[e] = t),
                    delete be[e],
                    ge.hasOwnProperty(e) &&
                        ((t = ge[e]),
                        delete ge[e],
                        t.forEach(function (e) {
                            e();
                        }));
            }
            function Be(e) {
                ke(e.Md.Sd.Qd.name + ' instance already deleted');
            }
            var Ie = !1;
            function Oe() {}
            function De(e) {
                --e.count.value, 0 === e.count.value && (e.Ud ? e.Yd.ae(e.Ud) : e.Sd.Qd.ae(e.Pd));
            }
            function Le(e) {
                return 'undefined' == typeof FinalizationGroup
                    ? ((Le = e => e), e)
                    : ((Ie = new FinalizationGroup(function (e) {
                          for (var t = e.next(); !t.done; t = e.next())
                              (t = t.value).Pd ? De(t) : console.warn('object already deleted: ' + t.Pd);
                      })),
                      (Oe = e => {
                          Ie.unregister(e.Md);
                      }),
                      (Le = e => (Ie.register(e, e.Md, e.Md), e))(e));
            }
            var je = void 0,
                Ue = [];
            function Ge() {
                for (; Ue.length; ) {
                    var e = Ue.pop();
                    (e.Md.fe = !1), e.delete();
                }
            }
            function He() {}
            var We = {};
            function Ne(e, t, n) {
                if (void 0 === e[t].Td) {
                    var r = e[t];
                    (e[t] = function () {
                        return (
                            e[t].Td.hasOwnProperty(arguments.length) ||
                                ke(
                                    "Function '" +
                                        n +
                                        "' called with an invalid number of arguments (" +
                                        arguments.length +
                                        ') - expects one of (' +
                                        e[t].Td +
                                        ')!'
                                ),
                            e[t].Td[arguments.length].apply(this, arguments)
                        );
                    }),
                        (e[t].Td = []),
                        (e[t].Td[r.de] = r);
                }
            }
            function Ve(e, t, r) {
                n.hasOwnProperty(e)
                    ? ((void 0 === r || (void 0 !== n[e].Td && void 0 !== n[e].Td[r])) &&
                          ke("Cannot register public name '" + e + "' twice"),
                      Ne(n, e, e),
                      n.hasOwnProperty(r) &&
                          ke(
                              'Cannot register multiple overloads of a function with the same number of arguments (' +
                                  r +
                                  ')!'
                          ),
                      (n[e].Td[r] = t))
                    : ((n[e] = t), void 0 !== r && (n[e].Lf = r));
            }
            function $e(e, t, n, r, a, o, i, u) {
                (this.name = e),
                    (this.constructor = t),
                    (this.ge = n),
                    (this.ae = r),
                    (this.$d = a),
                    (this.df = o),
                    (this.oe = i),
                    (this.af = u),
                    (this.tf = []);
            }
            function Ye(e, t, n) {
                for (; t !== n; )
                    t.oe || ke('Expected null or instance of ' + n.name + ', got an instance of ' + t.name),
                        (e = t.oe(e)),
                        (t = t.$d);
                return e;
            }
            function Xe(e, t) {
                return null === t
                    ? (this.De && ke('null is not a valid ' + this.name), 0)
                    : (t.Md || ke('Cannot pass "' + pt(t) + '" as a ' + this.name),
                      t.Md.Pd || ke('Cannot pass deleted object as a pointer of type ' + this.name),
                      Ye(t.Md.Pd, t.Md.Sd.Qd, this.Qd));
            }
            function Qe(e, t) {
                if (null === t) {
                    if ((this.De && ke('null is not a valid ' + this.name), this.se)) {
                        var n = this.Ee();
                        return null !== e && e.push(this.ae, n), n;
                    }
                    return 0;
                }
                if (
                    (t.Md || ke('Cannot pass "' + pt(t) + '" as a ' + this.name),
                    t.Md.Pd || ke('Cannot pass deleted object as a pointer of type ' + this.name),
                    !this.re &&
                        t.Md.Sd.re &&
                        ke(
                            'Cannot convert argument of type ' +
                                (t.Md.Yd ? t.Md.Yd.name : t.Md.Sd.name) +
                                ' to parameter type ' +
                                this.name
                        ),
                    (n = Ye(t.Md.Pd, t.Md.Sd.Qd, this.Qd)),
                    this.se)
                )
                    switch ((void 0 === t.Md.Ud && ke('Passing raw pointer to smart pointer is illegal'), this.Df)) {
                        case 0:
                            t.Md.Yd === this
                                ? (n = t.Md.Ud)
                                : ke(
                                      'Cannot convert argument of type ' +
                                          (t.Md.Yd ? t.Md.Yd.name : t.Md.Sd.name) +
                                          ' to parameter type ' +
                                          this.name
                                  );
                            break;
                        case 1:
                            n = t.Md.Ud;
                            break;
                        case 2:
                            if (t.Md.Yd === this) n = t.Md.Ud;
                            else {
                                var r = t.clone();
                                (n = this.uf(
                                    n,
                                    st(function () {
                                        r.delete();
                                    })
                                )),
                                    null !== e && e.push(this.ae, n);
                            }
                            break;
                        default:
                            ke('Unsupporting sharing policy');
                    }
                return n;
            }
            function ze(e, t) {
                return null === t
                    ? (this.De && ke('null is not a valid ' + this.name), 0)
                    : (t.Md || ke('Cannot pass "' + pt(t) + '" as a ' + this.name),
                      t.Md.Pd || ke('Cannot pass deleted object as a pointer of type ' + this.name),
                      t.Md.Sd.re &&
                          ke('Cannot convert argument of type ' + t.Md.Sd.name + ' to parameter type ' + this.name),
                      Ye(t.Md.Pd, t.Md.Sd.Qd, this.Qd));
            }
            function qe(e, t, n) {
                return t === n ? e : void 0 === n.$d || null === (e = qe(e, t, n.$d)) ? null : n.af(e);
            }
            var Ke = {};
            function Ze(e, t) {
                return (
                    (t.Sd && t.Pd) || Te('makeClassHandle requires ptr and ptrType'),
                    !!t.Yd != !!t.Ud && Te('Both smartPtrType and smartPtr must be specified'),
                    (t.count = { value: 1 }),
                    Le(Object.create(e, { Md: { value: t } }))
                );
            }
            function Je(e, t, n, r, a, o, i, u, c, f, l) {
                (this.name = e),
                    (this.Qd = t),
                    (this.De = n),
                    (this.re = r),
                    (this.se = a),
                    (this.sf = o),
                    (this.Df = i),
                    (this.Ne = u),
                    (this.Ee = c),
                    (this.uf = f),
                    (this.ae = l),
                    a || void 0 !== t.$d ? (this.toWireType = Qe) : ((this.toWireType = r ? Xe : ze), (this.Xd = null));
            }
            function et(e, t, r) {
                n.hasOwnProperty(e) || Te('Replacing nonexistant public symbol'),
                    void 0 !== n[e].Td && void 0 !== r ? (n[e].Td[r] = t) : ((n[e] = t), (n[e].de = r));
            }
            function tt(e, t) {
                var r = (e = Fe(e)).includes('j')
                    ? (function (e, t) {
                          var r = [];
                          return function () {
                              r.length = arguments.length;
                              for (var a = 0; a < arguments.length; a++) r[a] = arguments[a];
                              return (
                                  e.includes('j')
                                      ? ((a = n['dynCall_' + e]),
                                        (a = r && r.length ? a.apply(null, [t].concat(r)) : a.call(null, t)))
                                      : (a = le(t).apply(null, r)),
                                  a
                              );
                          };
                      })(e, t)
                    : le(t);
                return 'function' != typeof r && ke('unknown function pointer with signature ' + e + ': ' + t), r;
            }
            var nt = void 0;
            function rt(e) {
                var t = Fe((e = gn(e)));
                return mn(e), t;
            }
            function at(e, t) {
                var n = [],
                    r = {};
                throw (
                    (t.forEach(function e(t) {
                        r[t] || _e[t] || (be[t] ? be[t].forEach(e) : (n.push(t), (r[t] = !0)));
                    }),
                    new nt(e + ': ' + n.map(rt).join([', '])))
                );
            }
            function ot(e, t, n, r, a) {
                var o = t.length;
                2 > o && ke("argTypes array size mismatch! Must at least get return value and 'this' types!");
                var i = null !== t[1] && null !== n,
                    u = !1;
                for (n = 1; n < t.length; ++n)
                    if (null !== t[n] && void 0 === t[n].Xd) {
                        u = !0;
                        break;
                    }
                var c = 'void' !== t[0].name,
                    f = o - 2,
                    l = Array(f),
                    s = [],
                    d = [];
                return function () {
                    if (
                        (arguments.length !== f &&
                            ke(
                                'function ' +
                                    e +
                                    ' called with ' +
                                    arguments.length +
                                    ' arguments, expected ' +
                                    f +
                                    ' args!'
                            ),
                        (d.length = 0),
                        (s.length = i ? 2 : 1),
                        (s[0] = a),
                        i)
                    ) {
                        var n = t[1].toWireType(d, this);
                        s[1] = n;
                    }
                    for (var o = 0; o < f; ++o) (l[o] = t[o + 2].toWireType(d, arguments[o])), s.push(l[o]);
                    if (((o = r.apply(null, s)), u)) me(d);
                    else
                        for (var h = i ? 1 : 2; h < t.length; h++) {
                            var p = 1 === h ? n : l[h - 2];
                            null !== t[h].Xd && t[h].Xd(p);
                        }
                    return c ? t[0].fromWireType(o) : void 0;
                };
            }
            function it(e, t) {
                for (var n = [], r = 0; r < e; r++) n.push(L[(t >> 2) + r]);
                return n;
            }
            var ut = [],
                ct = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
            function ft(e) {
                4 < e && 0 == --ct[e].Fe && ((ct[e] = void 0), ut.push(e));
            }
            function lt(e) {
                return e || ke('Cannot use deleted val. handle = ' + e), ct[e].value;
            }
            function st(e) {
                switch (e) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case !0:
                        return 3;
                    case !1:
                        return 4;
                    default:
                        var t = ut.length ? ut.pop() : ct.length;
                        return (ct[t] = { Fe: 1, value: e }), t;
                }
            }
            function dt(e, t, n) {
                switch (t) {
                    case 0:
                        return function (e) {
                            return this.fromWireType((n ? B : I)[e]);
                        };
                    case 1:
                        return function (e) {
                            return this.fromWireType((n ? O : D)[e >> 1]);
                        };
                    case 2:
                        return function (e) {
                            return this.fromWireType((n ? L : j)[e >> 2]);
                        };
                    default:
                        throw new TypeError('Unknown integer type: ' + e);
                }
            }
            function ht(e, t) {
                var n = _e[e];
                return void 0 === n && ke(t + ' has unknown type ' + rt(e)), n;
            }
            function pt(e) {
                if (null === e) return 'null';
                var t = typeof e;
                return 'object' === t || 'array' === t || 'function' === t ? e.toString() : '' + e;
            }
            function yt(e, t) {
                switch (t) {
                    case 2:
                        return function (e) {
                            return this.fromWireType(U[e >> 2]);
                        };
                    case 3:
                        return function (e) {
                            return this.fromWireType(G[e >> 3]);
                        };
                    default:
                        throw new TypeError('Unknown float type: ' + e);
                }
            }
            function mt(e, t, n) {
                switch (t) {
                    case 0:
                        return n
                            ? function (e) {
                                  return B[e];
                              }
                            : function (e) {
                                  return I[e];
                              };
                    case 1:
                        return n
                            ? function (e) {
                                  return O[e >> 1];
                              }
                            : function (e) {
                                  return D[e >> 1];
                              };
                    case 2:
                        return n
                            ? function (e) {
                                  return L[e >> 2];
                              }
                            : function (e) {
                                  return j[e >> 2];
                              };
                    default:
                        throw new TypeError('Unknown integer type: ' + e);
                }
            }
            var vt = {};
            function gt(e) {
                var t = vt[e];
                return void 0 === t ? Fe(e) : t;
            }
            var _t = [];
            function bt() {
                function e(e) {
                    e.$$$embind_global$$$ = e;
                    var t = 'object' == typeof $$$embind_global$$$ && e.$$$embind_global$$$ === e;
                    return t || delete e.$$$embind_global$$$, t;
                }
                if ('object' == typeof globalThis) return globalThis;
                if ('object' == typeof $$$embind_global$$$) return $$$embind_global$$$;
                if (
                    ('object' == typeof global && e(global)
                        ? ($$$embind_global$$$ = global)
                        : 'object' == typeof self && e(self) && ($$$embind_global$$$ = self),
                    'object' == typeof $$$embind_global$$$)
                )
                    return $$$embind_global$$$;
                throw Error('unable to get global object.');
            }
            var Pt,
                At = [],
                wt = {};
            Pt = g
                ? () => {
                      var e = process.hrtime();
                      return 1e3 * e[0] + e[1] / 1e6;
                  }
                : () => performance.now();
            var Ct = 1,
                Tt = [],
                St = [],
                Et = [],
                Mt = [],
                Ft = [],
                xt = [],
                kt = [],
                Rt = [],
                Bt = [],
                It = [],
                Ot = {},
                Dt = {},
                Lt = 4;
            function jt(e) {
                Wt || (Wt = e);
            }
            function Ut(e) {
                for (var t = Ct++, n = e.length; n < t; n++) e[n] = null;
                return t;
            }
            function Gt(e) {
                return (Ht = Rt[e]), (n.If = ln = Ht && Ht.Zd), !(e && !ln);
            }
            var Ht,
                Wt,
                Nt = [];
            function Vt(e, t, n, r) {
                for (var a = 0; a < e; a++) {
                    var o = ln[n](),
                        i = o && Ut(r);
                    o ? ((o.name = i), (r[i] = o)) : jt(1282), (L[(t + 4 * a) >> 2] = i);
                }
            }
            function $t(e, t, n) {
                if (t) {
                    var r = void 0;
                    switch (e) {
                        case 36346:
                            r = 1;
                            break;
                        case 36344:
                            return void (0 != n && 1 != n && jt(1280));
                        case 34814:
                        case 36345:
                            r = 0;
                            break;
                        case 34466:
                            var a = ln.getParameter(34467);
                            r = a ? a.length : 0;
                            break;
                        case 33309:
                            if (2 > Ht.version) return void jt(1282);
                            r = 2 * (ln.getSupportedExtensions() || []).length;
                            break;
                        case 33307:
                        case 33308:
                            if (2 > Ht.version) return void jt(1280);
                            r = 33307 == e ? 3 : 0;
                    }
                    if (void 0 === r)
                        switch (((a = ln.getParameter(e)), typeof a)) {
                            case 'number':
                                r = a;
                                break;
                            case 'boolean':
                                r = a ? 1 : 0;
                                break;
                            case 'string':
                                return void jt(1280);
                            case 'object':
                                if (null === a)
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
                                            r = 0;
                                            break;
                                        default:
                                            return void jt(1280);
                                    }
                                else {
                                    if (
                                        a instanceof Float32Array ||
                                        a instanceof Uint32Array ||
                                        a instanceof Int32Array ||
                                        a instanceof Array
                                    ) {
                                        for (e = 0; e < a.length; ++e)
                                            switch (n) {
                                                case 0:
                                                    L[(t + 4 * e) >> 2] = a[e];
                                                    break;
                                                case 2:
                                                    U[(t + 4 * e) >> 2] = a[e];
                                                    break;
                                                case 4:
                                                    B[(t + e) >> 0] = a[e] ? 1 : 0;
                                            }
                                        return;
                                    }
                                    try {
                                        r = 0 | a.name;
                                    } catch (t) {
                                        return (
                                            jt(1280),
                                            void P(
                                                'GL_INVALID_ENUM in glGet' +
                                                    n +
                                                    'v: Unknown object returned from WebGL getParameter(' +
                                                    e +
                                                    ')! (error: ' +
                                                    t +
                                                    ')'
                                            )
                                        );
                                    }
                                }
                                break;
                            default:
                                return (
                                    jt(1280),
                                    void P(
                                        'GL_INVALID_ENUM in glGet' +
                                            n +
                                            'v: Native code calling glGet' +
                                            n +
                                            'v(' +
                                            e +
                                            ') and it returns ' +
                                            a +
                                            ' of type ' +
                                            typeof a +
                                            '!'
                                    )
                                );
                        }
                    switch (n) {
                        case 1:
                            (n = r), (j[t >> 2] = n), (j[(t + 4) >> 2] = (n - j[t >> 2]) / 4294967296);
                            break;
                        case 0:
                            L[t >> 2] = r;
                            break;
                        case 2:
                            U[t >> 2] = r;
                            break;
                        case 4:
                            B[t >> 0] = r ? 1 : 0;
                    }
                } else jt(1281);
            }
            function Yt(e) {
                var t = k(e) + 1,
                    n = vn(t);
                return x(e, I, n, t), n;
            }
            function Xt(e) {
                return ']' == e.slice(-1) && e.lastIndexOf('[');
            }
            function Qt(e) {
                return 0 == (e -= 5120)
                    ? B
                    : 1 == e
                      ? I
                      : 2 == e
                        ? O
                        : 4 == e
                          ? L
                          : 6 == e
                            ? U
                            : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e
                              ? j
                              : D;
            }
            function zt(e, t, n, r, a) {
                e = Qt(e);
                var o = 31 - Math.clz32(e.BYTES_PER_ELEMENT),
                    i = Lt;
                return e.subarray(
                    a >> o,
                    (a +
                        r *
                            ((n *
                                ({ 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 }[
                                    t - 6402
                                ] || 1) *
                                (1 << o) +
                                i -
                                1) &
                                -i)) >>
                        o
                );
            }
            function qt(e) {
                var t = ln.Ye;
                if (t) {
                    var n = t.ne[e];
                    return (
                        'number' == typeof n &&
                            (t.ne[e] = n = ln.getUniformLocation(t, t.Oe[e] + (0 < n ? '[' + n + ']' : ''))),
                        n
                    );
                }
                jt(1282);
            }
            var Kt,
                Zt = [],
                Jt = [],
                en = {};
            function tn() {
                if (!Kt) {
                    var e,
                        t = {
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
                            _: p || './this.program',
                        };
                    for (e in en) void 0 === en[e] ? delete t[e] : (t[e] = en[e]);
                    var n = [];
                    for (e in t) n.push(e + '=' + t[e]);
                    Kt = n;
                }
                return Kt;
            }
            function nn(e) {
                return 0 == e % 4 && (0 != e % 100 || 0 == e % 400);
            }
            function rn(e, t) {
                for (var n = 0, r = 0; r <= t; n += e[r++]);
                return n;
            }
            var an = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                on = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function un(e, t) {
                for (e = new Date(e.getTime()); 0 < t; ) {
                    var n = e.getMonth(),
                        r = (nn(e.getFullYear()) ? an : on)[n];
                    if (!(t > r - e.getDate())) {
                        e.setDate(e.getDate() + t);
                        break;
                    }
                    (t -= r - e.getDate() + 1),
                        e.setDate(1),
                        11 > n ? e.setMonth(n + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
                }
                return e;
            }
            Ce = n.InternalError = we('InternalError');
            for (var cn = Array(256), fn = 0; 256 > fn; ++fn) cn[fn] = String.fromCharCode(fn);
            (Me = cn),
                (xe = n.BindingError = we('BindingError')),
                (He.prototype.isAliasOf = function (e) {
                    if (!(this instanceof He && e instanceof He)) return !1;
                    var t = this.Md.Sd.Qd,
                        n = this.Md.Pd,
                        r = e.Md.Sd.Qd;
                    for (e = e.Md.Pd; t.$d; ) (n = t.oe(n)), (t = t.$d);
                    for (; r.$d; ) (e = r.oe(e)), (r = r.$d);
                    return t === r && n === e;
                }),
                (He.prototype.clone = function () {
                    if ((this.Md.Pd || Be(this), this.Md.le)) return (this.Md.count.value += 1), this;
                    var e = Le,
                        t = Object,
                        n = t.create,
                        r = Object.getPrototypeOf(this),
                        a = this.Md;
                    return (
                        ((e = e(
                            n.call(t, r, {
                                Md: {
                                    value: {
                                        count: a.count,
                                        fe: a.fe,
                                        le: a.le,
                                        Pd: a.Pd,
                                        Sd: a.Sd,
                                        Ud: a.Ud,
                                        Yd: a.Yd,
                                    },
                                },
                            })
                        )).Md.count.value += 1),
                        (e.Md.fe = !1),
                        e
                    );
                }),
                (He.prototype.delete = function () {
                    this.Md.Pd || Be(this),
                        this.Md.fe && !this.Md.le && ke('Object already scheduled for deletion'),
                        Oe(this),
                        De(this.Md),
                        this.Md.le || ((this.Md.Ud = void 0), (this.Md.Pd = void 0));
                }),
                (He.prototype.isDeleted = function () {
                    return !this.Md.Pd;
                }),
                (He.prototype.deleteLater = function () {
                    return (
                        this.Md.Pd || Be(this),
                        this.Md.fe && !this.Md.le && ke('Object already scheduled for deletion'),
                        Ue.push(this),
                        1 === Ue.length && je && je(Ge),
                        (this.Md.fe = !0),
                        this
                    );
                }),
                (Je.prototype.ef = function (e) {
                    return this.Ne && (e = this.Ne(e)), e;
                }),
                (Je.prototype.He = function (e) {
                    this.ae && this.ae(e);
                }),
                (Je.prototype.argPackAdvance = 8),
                (Je.prototype.readValueFromPointer = ve),
                (Je.prototype.deleteObject = function (e) {
                    null !== e && e.delete();
                }),
                (Je.prototype.fromWireType = function (e) {
                    function t() {
                        return this.se
                            ? Ze(this.Qd.ge, { Sd: this.sf, Pd: n, Yd: this, Ud: e })
                            : Ze(this.Qd.ge, { Sd: this, Pd: e });
                    }
                    var n = this.ef(e);
                    if (!n) return this.He(e), null;
                    var r = (function (e, t) {
                        for (void 0 === t && ke('ptr should not be undefined'); e.$d; ) (t = e.oe(t)), (e = e.$d);
                        return Ke[t];
                    })(this.Qd, n);
                    if (void 0 !== r)
                        return 0 === r.Md.count.value
                            ? ((r.Md.Pd = n), (r.Md.Ud = e), r.clone())
                            : ((r = r.clone()), this.He(e), r);
                    if (((r = this.Qd.df(n)), !(r = We[r]))) return t.call(this);
                    r = this.re ? r.Xe : r.pointerType;
                    var a = qe(n, this.Qd, r.Qd);
                    return null === a
                        ? t.call(this)
                        : this.se
                          ? Ze(r.Qd.ge, { Sd: r, Pd: a, Yd: this, Ud: e })
                          : Ze(r.Qd.ge, { Sd: r, Pd: a });
                }),
                (n.getInheritedInstanceCount = function () {
                    return Object.keys(Ke).length;
                }),
                (n.getLiveInheritedInstances = function () {
                    var e,
                        t = [];
                    for (e in Ke) Ke.hasOwnProperty(e) && t.push(Ke[e]);
                    return t;
                }),
                (n.flushPendingDeletes = Ge),
                (n.setDelayFunction = function (e) {
                    (je = e), Ue.length && je && je(Ge);
                }),
                (nt = n.UnboundTypeError = we('UnboundTypeError')),
                (n.count_emval_handles = function () {
                    for (var e = 0, t = 5; t < ct.length; ++t) void 0 !== ct[t] && ++e;
                    return e;
                }),
                (n.get_first_emval = function () {
                    for (var e = 5; e < ct.length; ++e) if (void 0 !== ct[e]) return ct[e];
                    return null;
                });
            for (var ln, sn = 0; 32 > sn; ++sn) Nt.push(Array(sn));
            var dn = new Float32Array(288);
            for (sn = 0; 288 > sn; ++sn) Zt[sn] = dn.subarray(0, sn + 1);
            var hn = new Int32Array(288);
            for (sn = 0; 288 > sn; ++sn) Jt[sn] = hn.subarray(0, sn + 1);
            var pn = {
                K: function (e) {
                    return vn(e + 16) + 16;
                },
                J: function (e, t, n) {
                    throw (new se(e).mf(t, n), e);
                },
                X: function () {
                    return 0;
                },
                vb: function () {},
                tb: function () {},
                xb: function () {
                    return 0;
                },
                sb: function () {},
                pb: function (e, t, n, r, a, o) {
                    if (((o <<= 12), 0 != (16 & r) && 0 != e % 65536)) t = -28;
                    else if (0 != (32 & r)) {
                        e = 65536 * Math.ceil(t / 65536);
                        var i = bn(65536, e);
                        i ? (I.fill(0, i, i + e), (e = i)) : (e = 0),
                            e
                                ? ((de[e] = { rf: e, qf: t, We: !0, fd: a, Mf: n, flags: r, offset: o }), (t = e))
                                : (t = -48);
                    } else t = -52;
                    return t;
                },
                ob: function (e, t) {
                    var n = de[e];
                    return 0 !== t && n ? (t === n.qf && ((de[e] = null), n.We && mn(n.rf)), (e = 0)) : (e = -28), e;
                },
                Y: function () {},
                ub: function () {},
                C: function (e) {
                    var t = ye[e];
                    delete ye[e];
                    var n = t.Ee,
                        r = t.ae,
                        a = t.Ke;
                    Se(
                        [e],
                        a
                            .map(function (e) {
                                return e.jf;
                            })
                            .concat(
                                a.map(function (e) {
                                    return e.Bf;
                                })
                            ),
                        function (e) {
                            var o = {};
                            return (
                                a.forEach(function (t, n) {
                                    var r = e[n],
                                        i = t.gf,
                                        u = t.hf,
                                        c = e[n + a.length],
                                        f = t.Af,
                                        l = t.Cf;
                                    o[t.cf] = {
                                        read: function (e) {
                                            return r.fromWireType(i(u, e));
                                        },
                                        write: function (e, t) {
                                            var n = [];
                                            f(l, e, c.toWireType(n, t)), me(n);
                                        },
                                    };
                                }),
                                [
                                    {
                                        name: t.name,
                                        fromWireType: function (e) {
                                            var t,
                                                n = {};
                                            for (t in o) n[t] = o[t].read(e);
                                            return r(e), n;
                                        },
                                        toWireType: function (e, t) {
                                            for (var a in o)
                                                if (!(a in t)) throw new TypeError('Missing field:  "' + a + '"');
                                            var i = n();
                                            for (a in o) o[a].write(i, t[a]);
                                            return null !== e && e.push(r, i), i;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: ve,
                                        Xd: r,
                                    },
                                ]
                            );
                        }
                    );
                },
                jb: function () {},
                zb: function (e, t, n, r, a) {
                    var o = Ee(n);
                    Re(e, {
                        name: (t = Fe(t)),
                        fromWireType: function (e) {
                            return !!e;
                        },
                        toWireType: function (e, t) {
                            return t ? r : a;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function (e) {
                            if (1 === n) var r = B;
                            else if (2 === n) r = O;
                            else {
                                if (4 !== n) throw new TypeError('Unknown boolean type size: ' + t);
                                r = L;
                            }
                            return this.fromWireType(r[e >> o]);
                        },
                        Xd: null,
                    });
                },
                n: function (e, t, n, r, a, o, i, u, c, f, l, s, d) {
                    (l = Fe(l)), (o = tt(a, o)), u && (u = tt(i, u)), f && (f = tt(c, f)), (d = tt(s, d));
                    var h = Pe(l);
                    Ve(h, function () {
                        at('Cannot construct ' + l + ' due to unbound types', [r]);
                    }),
                        Se([e, t, n], r ? [r] : [], function (t) {
                            if (((t = t[0]), r))
                                var n = t.Qd,
                                    a = n.ge;
                            else a = He.prototype;
                            t = Ae(h, function () {
                                if (Object.getPrototypeOf(this) !== i) throw new xe("Use 'new' to construct " + l);
                                if (void 0 === c.be) throw new xe(l + ' has no accessible constructor');
                                var e = c.be[arguments.length];
                                if (void 0 === e)
                                    throw new xe(
                                        'Tried to invoke ctor of ' +
                                            l +
                                            ' with invalid number of parameters (' +
                                            arguments.length +
                                            ') - expected (' +
                                            Object.keys(c.be).toString() +
                                            ') parameters instead!'
                                    );
                                return e.apply(this, arguments);
                            });
                            var i = Object.create(a, { constructor: { value: t } });
                            t.prototype = i;
                            var c = new $e(l, t, i, d, n, o, u, f);
                            (n = new Je(l, c, !0, !1, !1)), (a = new Je(l + '*', c, !1, !1, !1));
                            var s = new Je(l + ' const*', c, !1, !0, !1);
                            return (We[e] = { pointerType: a, Xe: s }), et(h, t), [n, a, s];
                        });
                },
                g: function (e, t, n, r, a, o, i) {
                    var u = it(n, r);
                    (t = Fe(t)),
                        (o = tt(a, o)),
                        Se([], [e], function (e) {
                            function r() {
                                at('Cannot call ' + a + ' due to unbound types', u);
                            }
                            var a = (e = e[0]).name + '.' + t;
                            t.startsWith('@@') && (t = Symbol[t.substring(2)]);
                            var c = e.Qd.constructor;
                            return (
                                void 0 === c[t] ? ((r.de = n - 1), (c[t] = r)) : (Ne(c, t, a), (c[t].Td[n - 1] = r)),
                                Se([], u, function (e) {
                                    return (
                                        (e = [e[0], null].concat(e.slice(1))),
                                        (e = ot(a, e, null, o, i)),
                                        void 0 === c[t].Td ? ((e.de = n - 1), (c[t] = e)) : (c[t].Td[n - 1] = e),
                                        []
                                    );
                                }),
                                []
                            );
                        });
                },
                A: function (e, t, n, r, a, o) {
                    0 < t || oe(void 0);
                    var i = it(t, n);
                    (a = tt(r, a)),
                        Se([], [e], function (e) {
                            var n = 'constructor ' + (e = e[0]).name;
                            if ((void 0 === e.Qd.be && (e.Qd.be = []), void 0 !== e.Qd.be[t - 1]))
                                throw new xe(
                                    'Cannot register multiple constructors with identical number of parameters (' +
                                        (t - 1) +
                                        ") for class '" +
                                        e.name +
                                        "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                                );
                            return (
                                (e.Qd.be[t - 1] = () => {
                                    at('Cannot construct ' + e.name + ' due to unbound types', i);
                                }),
                                Se([], i, function (r) {
                                    return r.splice(1, 0, null), (e.Qd.be[t - 1] = ot(n, r, null, a, o)), [];
                                }),
                                []
                            );
                        });
                },
                a: function (e, t, n, r, a, o, i, u) {
                    var c = it(n, r);
                    (t = Fe(t)),
                        (o = tt(a, o)),
                        Se([], [e], function (e) {
                            function r() {
                                at('Cannot call ' + a + ' due to unbound types', c);
                            }
                            var a = (e = e[0]).name + '.' + t;
                            t.startsWith('@@') && (t = Symbol[t.substring(2)]), u && e.Qd.tf.push(t);
                            var f = e.Qd.ge,
                                l = f[t];
                            return (
                                void 0 === l || (void 0 === l.Td && l.className !== e.name && l.de === n - 2)
                                    ? ((r.de = n - 2), (r.className = e.name), (f[t] = r))
                                    : (Ne(f, t, a), (f[t].Td[n - 2] = r)),
                                Se([], c, function (r) {
                                    return (
                                        (r = ot(a, r, e, o, i)),
                                        void 0 === f[t].Td ? ((r.de = n - 2), (f[t] = r)) : (f[t].Td[n - 2] = r),
                                        []
                                    );
                                }),
                                []
                            );
                        });
                },
                s: function (e, t, r) {
                    (e = Fe(e)),
                        Se([], [t], function (t) {
                            return (t = t[0]), (n[e] = t.fromWireType(r)), [];
                        });
                },
                yb: function (e, t) {
                    Re(e, {
                        name: (t = Fe(t)),
                        fromWireType: function (e) {
                            var t = lt(e);
                            return ft(e), t;
                        },
                        toWireType: function (e, t) {
                            return st(t);
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ve,
                        Xd: null,
                    });
                },
                l: function (e, t, n, r) {
                    function a() {}
                    (n = Ee(n)),
                        (t = Fe(t)),
                        (a.values = {}),
                        Re(e, {
                            name: t,
                            constructor: a,
                            fromWireType: function (e) {
                                return this.constructor.values[e];
                            },
                            toWireType: function (e, t) {
                                return t.value;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: dt(t, n, r),
                            Xd: null,
                        }),
                        Ve(t, a);
                },
                d: function (e, t, n) {
                    var r = ht(e, 'enum');
                    (t = Fe(t)),
                        (e = r.constructor),
                        (r = Object.create(r.constructor.prototype, {
                            value: { value: n },
                            constructor: { value: Ae(r.name + '_' + t, function () {}) },
                        })),
                        (e.values[n] = r),
                        (e[t] = r);
                },
                _: function (e, t, n) {
                    (n = Ee(n)),
                        Re(e, {
                            name: (t = Fe(t)),
                            fromWireType: function (e) {
                                return e;
                            },
                            toWireType: function (e, t) {
                                return t;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: yt(t, n),
                            Xd: null,
                        });
                },
                v: function (e, t, n, r, a, o) {
                    var i = it(t, n);
                    (e = Fe(e)),
                        (a = tt(r, a)),
                        Ve(
                            e,
                            function () {
                                at('Cannot call ' + e + ' due to unbound types', i);
                            },
                            t - 1
                        ),
                        Se([], i, function (n) {
                            return (n = [n[0], null].concat(n.slice(1))), et(e, ot(e, n, null, a, o), t - 1), [];
                        });
                },
                E: function (e, t, n, r, a) {
                    (t = Fe(t)), -1 === a && (a = 4294967295), (a = Ee(n));
                    var o = e => e;
                    if (0 === r) {
                        var i = 32 - 8 * n;
                        o = e => (e << i) >>> i;
                    }
                    (n = t.includes('unsigned')
                        ? function (e, t) {
                              return t >>> 0;
                          }
                        : function (e, t) {
                              return t;
                          }),
                        Re(e, {
                            name: t,
                            fromWireType: o,
                            toWireType: n,
                            argPackAdvance: 8,
                            readValueFromPointer: mt(t, a, 0 !== r),
                            Xd: null,
                        });
                },
                u: function (e, t, n) {
                    function r(e) {
                        var t = j;
                        return new a(R, t[1 + (e >>= 2)], t[e]);
                    }
                    var a = [
                        Int8Array,
                        Uint8Array,
                        Int16Array,
                        Uint16Array,
                        Int32Array,
                        Uint32Array,
                        Float32Array,
                        Float64Array,
                    ][t];
                    Re(
                        e,
                        { name: (n = Fe(n)), fromWireType: r, argPackAdvance: 8, readValueFromPointer: r },
                        { lf: !0 }
                    );
                },
                r: function (e, t, n, r, a, o, i, u, c, f, l, s) {
                    (n = Fe(n)),
                        (o = tt(a, o)),
                        (u = tt(i, u)),
                        (f = tt(c, f)),
                        (s = tt(l, s)),
                        Se([e], [t], function (e) {
                            return (e = e[0]), [new Je(n, e.Qd, !1, !1, !0, e, r, o, u, f, s)];
                        });
                },
                Z: function (e, t) {
                    var n = 'std::string' === (t = Fe(t));
                    Re(e, {
                        name: t,
                        fromWireType: function (e) {
                            var t = j[e >> 2];
                            if (n)
                                for (var r = e + 4, a = 0; a <= t; ++a) {
                                    var o = e + 4 + a;
                                    if (a == t || 0 == I[o]) {
                                        if (((r = F(r, o - r)), void 0 === i)) var i = r;
                                        else (i += String.fromCharCode(0)), (i += r);
                                        r = o + 1;
                                    }
                                }
                            else {
                                for (i = Array(t), a = 0; a < t; ++a) i[a] = String.fromCharCode(I[e + 4 + a]);
                                i = i.join('');
                            }
                            return mn(e), i;
                        },
                        toWireType: function (e, t) {
                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                            var r = 'string' == typeof t;
                            r ||
                                t instanceof Uint8Array ||
                                t instanceof Uint8ClampedArray ||
                                t instanceof Int8Array ||
                                ke('Cannot pass non-string to std::string');
                            var a = (n && r ? () => k(t) : () => t.length)(),
                                o = vn(4 + a + 1);
                            if (((j[o >> 2] = a), n && r)) x(t, I, o + 4, a + 1);
                            else if (r)
                                for (r = 0; r < a; ++r) {
                                    var i = t.charCodeAt(r);
                                    255 < i && (mn(o), ke('String has UTF-16 code units that do not fit in 8 bits')),
                                        (I[o + 4 + r] = i);
                                }
                            else for (r = 0; r < a; ++r) I[o + 4 + r] = t[r];
                            return null !== e && e.push(mn, o), o;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ve,
                        Xd: function (e) {
                            mn(e);
                        },
                    });
                },
                R: function (e, t, n) {
                    if (((n = Fe(n)), 2 === t))
                        var r = W,
                            a = N,
                            o = V,
                            i = () => D,
                            u = 1;
                    else 4 === t && ((r = $), (a = Y), (o = X), (i = () => j), (u = 2));
                    Re(e, {
                        name: n,
                        fromWireType: function (e) {
                            for (var n, a = j[e >> 2], o = i(), c = e + 4, f = 0; f <= a; ++f) {
                                var l = e + 4 + f * t;
                                (f != a && 0 != o[l >> u]) ||
                                    ((c = r(c, l - c)),
                                    void 0 === n ? (n = c) : ((n += String.fromCharCode(0)), (n += c)),
                                    (c = l + t));
                            }
                            return mn(e), n;
                        },
                        toWireType: function (e, r) {
                            'string' != typeof r && ke('Cannot pass non-string to C++ string type ' + n);
                            var i = o(r),
                                c = vn(4 + i + t);
                            return (j[c >> 2] = i >> u), a(r, c + 4, i + t), null !== e && e.push(mn, c), c;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ve,
                        Xd: function (e) {
                            mn(e);
                        },
                    });
                },
                D: function (e, t, n, r, a, o) {
                    ye[e] = { name: Fe(t), Ee: tt(n, r), ae: tt(a, o), Ke: [] };
                },
                f: function (e, t, n, r, a, o, i, u, c, f) {
                    ye[e].Ke.push({ cf: Fe(t), jf: n, gf: tt(r, a), hf: o, Bf: i, Af: tt(u, c), Cf: f });
                },
                Ab: function (e, t) {
                    Re(e, {
                        pf: !0,
                        name: (t = Fe(t)),
                        argPackAdvance: 0,
                        fromWireType: function () {},
                        toWireType: function () {},
                    });
                },
                mb: function () {
                    throw 'longjmp';
                },
                I: function (e, t, n) {
                    (e = lt(e)), (t = ht(t, 'emval::as'));
                    var r = [],
                        a = st(r);
                    return (L[n >> 2] = a), t.toWireType(r, e);
                },
                L: function (e, t, n, r, a) {
                    (e = _t[e]), (t = lt(t)), (n = gt(n));
                    var o = [];
                    return (L[r >> 2] = st(o)), e(t, n, o, a);
                },
                B: function (e, t, n, r) {
                    (e = _t[e])((t = lt(t)), (n = gt(n)), null, r);
                },
                e: ft,
                N: function (e) {
                    return 0 === e ? st(bt()) : ((e = gt(e)), st(bt()[e]));
                },
                w: function (e, t) {
                    var n = (function (e, t) {
                            for (var n = Array(e), r = 0; r < e; ++r) n[r] = ht(L[(t >> 2) + r], 'parameter ' + r);
                            return n;
                        })(e, t),
                        r = n[0];
                    t =
                        r.name +
                        '_$' +
                        n
                            .slice(1)
                            .map(function (e) {
                                return e.name;
                            })
                            .join('_') +
                        '$';
                    var a = At[t];
                    if (void 0 !== a) return a;
                    var o = Array(e - 1);
                    return (
                        (a = (function (e) {
                            var t = _t.length;
                            return _t.push(e), t;
                        })((t, a, i, u) => {
                            for (var c = 0, f = 0; f < e - 1; ++f)
                                (o[f] = n[f + 1].readValueFromPointer(u + c)), (c += n[f + 1].argPackAdvance);
                            for (t = t[a].apply(t, o), f = 0; f < e - 1; ++f) n[f + 1].Ze && n[f + 1].Ze(o[f]);
                            if (!r.pf) return r.toWireType(i, t);
                        })),
                        (At[t] = a)
                    );
                },
                H: function (e, t) {
                    return st((e = lt(e))[(t = lt(t))]);
                },
                p: function (e) {
                    4 < e && (ct[e].Fe += 1);
                },
                M: function (e, t, n, r) {
                    e = lt(e);
                    var a = wt[t];
                    return (
                        a ||
                            ((a = (function (e) {
                                var t = Array(e + 1);
                                return function (n, r, a) {
                                    t[0] = n;
                                    for (var o = 0; o < e; ++o) {
                                        var i = ht(L[(r >> 2) + o], 'parameter ' + o);
                                        (t[o + 1] = i.readValueFromPointer(a)), (a += i.argPackAdvance);
                                    }
                                    return st((n = new (n.bind.apply(n, t))()));
                                };
                            })(t)),
                            (wt[t] = a)),
                        a(e, n, r)
                    );
                },
                P: function () {
                    return st([]);
                },
                h: function (e) {
                    return st(gt(e));
                },
                G: function () {
                    return st({});
                },
                fb: function (e) {
                    return !(e = lt(e));
                },
                F: function (e) {
                    me(lt(e)), ft(e);
                },
                k: function (e, t, n) {
                    (e = lt(e)), (t = lt(t)), (n = lt(n)), (e[t] = n);
                },
                i: function (e, t) {
                    return st((e = (e = ht(e, '_emval_take_value')).readValueFromPointer(t)));
                },
                j: function () {
                    oe('');
                },
                lb: function (e, t) {
                    if (0 === e) e = Date.now();
                    else {
                        if (1 !== e && 4 !== e) return (L[yn() >> 2] = 28), -1;
                        e = Pt();
                    }
                    return (L[t >> 2] = (e / 1e3) | 0), (L[(t + 4) >> 2] = ((e % 1e3) * 1e6) | 0), 0;
                },
                Tc: function (e) {
                    ln.activeTexture(e);
                },
                Uc: function (e, t) {
                    ln.attachShader(St[e], xt[t]);
                },
                Vc: function (e, t, n) {
                    ln.bindAttribLocation(St[e], t, F(n));
                },
                Wc: function (e, t) {
                    35051 == e ? (ln.Be = t) : 35052 == e && (ln.ee = t), ln.bindBuffer(e, Tt[t]);
                },
                da: function (e, t) {
                    ln.bindFramebuffer(e, Et[t]);
                },
                Xb: function (e, t) {
                    ln.bindRenderbuffer(e, Mt[t]);
                },
                Hb: function (e, t) {
                    ln.bindSampler(e, Bt[t]);
                },
                Xc: function (e, t) {
                    ln.bindTexture(e, Ft[t]);
                },
                pc: function (e) {
                    ln.bindVertexArray(kt[e]);
                },
                sc: function (e) {
                    ln.bindVertexArray(kt[e]);
                },
                Yc: function (e, t, n, r) {
                    ln.blendColor(e, t, n, r);
                },
                Zc: function (e) {
                    ln.blendEquation(e);
                },
                _c: function (e, t) {
                    ln.blendFunc(e, t);
                },
                Rb: function (e, t, n, r, a, o, i, u, c, f) {
                    ln.blitFramebuffer(e, t, n, r, a, o, i, u, c, f);
                },
                $c: function (e, t, n, r) {
                    2 <= Ht.version
                        ? n
                            ? ln.bufferData(e, I, r, n, t)
                            : ln.bufferData(e, t, r)
                        : ln.bufferData(e, n ? I.subarray(n, n + t) : t, r);
                },
                ad: function (e, t, n, r) {
                    2 <= Ht.version ? ln.bufferSubData(e, t, I, r, n) : ln.bufferSubData(e, t, I.subarray(r, r + n));
                },
                Yb: function (e) {
                    return ln.checkFramebufferStatus(e);
                },
                U: function (e) {
                    ln.clear(e);
                },
                ca: function (e, t, n, r) {
                    ln.clearColor(e, t, n, r);
                },
                W: function (e) {
                    ln.clearStencil(e);
                },
                db: function (e, t, n, r) {
                    return ln.clientWaitSync(It[e], t, (n >>> 0) + 4294967296 * r);
                },
                bd: function (e, t, n, r) {
                    ln.colorMask(!!e, !!t, !!n, !!r);
                },
                ea: function (e) {
                    ln.compileShader(xt[e]);
                },
                fa: function (e, t, n, r, a, o, i, u) {
                    2 <= Ht.version
                        ? ln.ee
                            ? ln.compressedTexImage2D(e, t, n, r, a, o, i, u)
                            : ln.compressedTexImage2D(e, t, n, r, a, o, I, u, i)
                        : ln.compressedTexImage2D(e, t, n, r, a, o, u ? I.subarray(u, u + i) : null);
                },
                ga: function (e, t, n, r, a, o, i, u, c) {
                    2 <= Ht.version
                        ? ln.ee
                            ? ln.compressedTexSubImage2D(e, t, n, r, a, o, i, u, c)
                            : ln.compressedTexSubImage2D(e, t, n, r, a, o, i, I, c, u)
                        : ln.compressedTexSubImage2D(e, t, n, r, a, o, i, c ? I.subarray(c, c + u) : null);
                },
                Pb: function (e, t, n, r, a) {
                    ln.copyBufferSubData(e, t, n, r, a);
                },
                ha: function (e, t, n, r, a, o, i, u) {
                    ln.copyTexSubImage2D(e, t, n, r, a, o, i, u);
                },
                ia: function () {
                    var e = Ut(St),
                        t = ln.createProgram();
                    return (t.name = e), (t.ve = t.te = t.ue = 0), (t.Ge = 1), (St[e] = t), e;
                },
                ja: function (e) {
                    var t = Ut(xt);
                    return (xt[t] = ln.createShader(e)), t;
                },
                ka: function (e) {
                    ln.cullFace(e);
                },
                la: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = L[(t + 4 * n) >> 2],
                            a = Tt[r];
                        a &&
                            (ln.deleteBuffer(a),
                            (a.name = 0),
                            (Tt[r] = null),
                            r == ln.Be && (ln.Be = 0),
                            r == ln.ee && (ln.ee = 0));
                    }
                },
                Zb: function (e, t) {
                    for (var n = 0; n < e; ++n) {
                        var r = L[(t + 4 * n) >> 2],
                            a = Et[r];
                        a && (ln.deleteFramebuffer(a), (a.name = 0), (Et[r] = null));
                    }
                },
                ma: function (e) {
                    if (e) {
                        var t = St[e];
                        t ? (ln.deleteProgram(t), (t.name = 0), (St[e] = null)) : jt(1281);
                    }
                },
                _b: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = L[(t + 4 * n) >> 2],
                            a = Mt[r];
                        a && (ln.deleteRenderbuffer(a), (a.name = 0), (Mt[r] = null));
                    }
                },
                Ib: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = L[(t + 4 * n) >> 2],
                            a = Bt[r];
                        a && (ln.deleteSampler(a), (a.name = 0), (Bt[r] = null));
                    }
                },
                na: function (e) {
                    if (e) {
                        var t = xt[e];
                        t ? (ln.deleteShader(t), (xt[e] = null)) : jt(1281);
                    }
                },
                Qb: function (e) {
                    if (e) {
                        var t = It[e];
                        t ? (ln.deleteSync(t), (t.name = 0), (It[e] = null)) : jt(1281);
                    }
                },
                oa: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = L[(t + 4 * n) >> 2],
                            a = Ft[r];
                        a && (ln.deleteTexture(a), (a.name = 0), (Ft[r] = null));
                    }
                },
                qc: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = L[(t + 4 * n) >> 2];
                        ln.deleteVertexArray(kt[r]), (kt[r] = null);
                    }
                },
                tc: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = L[(t + 4 * n) >> 2];
                        ln.deleteVertexArray(kt[r]), (kt[r] = null);
                    }
                },
                pa: function (e) {
                    ln.depthMask(!!e);
                },
                qa: function (e) {
                    ln.disable(e);
                },
                ra: function (e) {
                    ln.disableVertexAttribArray(e);
                },
                sa: function (e, t, n) {
                    ln.drawArrays(e, t, n);
                },
                nc: function (e, t, n, r) {
                    ln.drawArraysInstanced(e, t, n, r);
                },
                lc: function (e, t, n, r, a) {
                    ln.Ie.drawArraysInstancedBaseInstanceWEBGL(e, t, n, r, a);
                },
                jc: function (e, t) {
                    for (var n = Nt[e], r = 0; r < e; r++) n[r] = L[(t + 4 * r) >> 2];
                    ln.drawBuffers(n);
                },
                ta: function (e, t, n, r) {
                    ln.drawElements(e, t, n, r);
                },
                oc: function (e, t, n, r, a) {
                    ln.drawElementsInstanced(e, t, n, r, a);
                },
                mc: function (e, t, n, r, a, o, i) {
                    ln.Ie.drawElementsInstancedBaseVertexBaseInstanceWEBGL(e, t, n, r, a, o, i);
                },
                dc: function (e, t, n, r, a, o) {
                    ln.drawElements(e, r, a, o);
                },
                ua: function (e) {
                    ln.enable(e);
                },
                va: function (e) {
                    ln.enableVertexAttribArray(e);
                },
                Nb: function (e, t) {
                    return (e = ln.fenceSync(e, t)) ? ((t = Ut(It)), (e.name = t), (It[t] = e), t) : 0;
                },
                wa: function () {
                    ln.finish();
                },
                xa: function () {
                    ln.flush();
                },
                $b: function (e, t, n, r) {
                    ln.framebufferRenderbuffer(e, t, n, Mt[r]);
                },
                ac: function (e, t, n, r, a) {
                    ln.framebufferTexture2D(e, t, n, Ft[r], a);
                },
                ya: function (e) {
                    ln.frontFace(e);
                },
                za: function (e, t) {
                    Vt(e, t, 'createBuffer', Tt);
                },
                bc: function (e, t) {
                    Vt(e, t, 'createFramebuffer', Et);
                },
                cc: function (e, t) {
                    Vt(e, t, 'createRenderbuffer', Mt);
                },
                Jb: function (e, t) {
                    Vt(e, t, 'createSampler', Bt);
                },
                Aa: function (e, t) {
                    Vt(e, t, 'createTexture', Ft);
                },
                rc: function (e, t) {
                    Vt(e, t, 'createVertexArray', kt);
                },
                uc: function (e, t) {
                    Vt(e, t, 'createVertexArray', kt);
                },
                Tb: function (e) {
                    ln.generateMipmap(e);
                },
                Ba: function (e, t, n) {
                    n ? (L[n >> 2] = ln.getBufferParameter(e, t)) : jt(1281);
                },
                Ca: function () {
                    var e = ln.getError() || Wt;
                    return (Wt = 0), e;
                },
                Da: function (e, t) {
                    $t(e, t, 2);
                },
                Ub: function (e, t, n, r) {
                    ((e = ln.getFramebufferAttachmentParameter(e, t, n)) instanceof WebGLRenderbuffer ||
                        e instanceof WebGLTexture) &&
                        (e = 0 | e.name),
                        (L[r >> 2] = e);
                },
                O: function (e, t) {
                    $t(e, t, 0);
                },
                Ea: function (e, t, n, r) {
                    null === (e = ln.getProgramInfoLog(St[e])) && (e = '(unknown error)'),
                        (t = 0 < t && r ? x(e, I, r, t) : 0),
                        n && (L[n >> 2] = t);
                },
                Fa: function (e, t, n) {
                    if (n)
                        if (e >= Ct) jt(1281);
                        else if (((e = St[e]), 35716 == t))
                            null === (e = ln.getProgramInfoLog(e)) && (e = '(unknown error)'),
                                (L[n >> 2] = e.length + 1);
                        else if (35719 == t) {
                            if (!e.ve)
                                for (t = 0; t < ln.getProgramParameter(e, 35718); ++t)
                                    e.ve = Math.max(e.ve, ln.getActiveUniform(e, t).name.length + 1);
                            L[n >> 2] = e.ve;
                        } else if (35722 == t) {
                            if (!e.te)
                                for (t = 0; t < ln.getProgramParameter(e, 35721); ++t)
                                    e.te = Math.max(e.te, ln.getActiveAttrib(e, t).name.length + 1);
                            L[n >> 2] = e.te;
                        } else if (35381 == t) {
                            if (!e.ue)
                                for (t = 0; t < ln.getProgramParameter(e, 35382); ++t)
                                    e.ue = Math.max(e.ue, ln.getActiveUniformBlockName(e, t).length + 1);
                            L[n >> 2] = e.ue;
                        } else L[n >> 2] = ln.getProgramParameter(e, t);
                    else jt(1281);
                },
                Vb: function (e, t, n) {
                    n ? (L[n >> 2] = ln.getRenderbufferParameter(e, t)) : jt(1281);
                },
                Ga: function (e, t, n, r) {
                    null === (e = ln.getShaderInfoLog(xt[e])) && (e = '(unknown error)'),
                        (t = 0 < t && r ? x(e, I, r, t) : 0),
                        n && (L[n >> 2] = t);
                },
                Eb: function (e, t, n, r) {
                    (e = ln.getShaderPrecisionFormat(e, t)),
                        (L[n >> 2] = e.rangeMin),
                        (L[(n + 4) >> 2] = e.rangeMax),
                        (L[r >> 2] = e.precision);
                },
                Ha: function (e, t, n) {
                    n
                        ? 35716 == t
                            ? (null === (e = ln.getShaderInfoLog(xt[e])) && (e = '(unknown error)'),
                              (L[n >> 2] = e ? e.length + 1 : 0))
                            : 35720 == t
                              ? ((e = ln.getShaderSource(xt[e])), (L[n >> 2] = e ? e.length + 1 : 0))
                              : (L[n >> 2] = ln.getShaderParameter(xt[e], t))
                        : jt(1281);
                },
                T: function (e) {
                    var t = Ot[e];
                    if (!t) {
                        switch (e) {
                            case 7939:
                                t = Yt(
                                    (t = (t = ln.getSupportedExtensions() || []).concat(
                                        t.map(function (e) {
                                            return 'GL_' + e;
                                        })
                                    )).join(' ')
                                );
                                break;
                            case 7936:
                            case 7937:
                            case 37445:
                            case 37446:
                                (t = ln.getParameter(e)) || jt(1280), (t = t && Yt(t));
                                break;
                            case 7938:
                                (t = ln.getParameter(7938)),
                                    (t = Yt(
                                        (t =
                                            2 <= Ht.version ? 'OpenGL ES 3.0 (' + t + ')' : 'OpenGL ES 2.0 (' + t + ')')
                                    ));
                                break;
                            case 35724:
                                var n = (t = ln.getParameter(35724)).match(
                                    /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/
                                );
                                null !== n &&
                                    (3 == n[1].length && (n[1] += '0'),
                                    (t = 'OpenGL ES GLSL ES ' + n[1] + ' (' + t + ')')),
                                    (t = Yt(t));
                                break;
                            default:
                                jt(1280);
                        }
                        Ot[e] = t;
                    }
                    return t;
                },
                cb: function (e, t) {
                    if (2 > Ht.version) return jt(1282), 0;
                    var n = Dt[e];
                    return n
                        ? 0 > t || t >= n.length
                            ? (jt(1281), 0)
                            : n[t]
                        : 7939 === e
                          ? ((n = (n = (n = ln.getSupportedExtensions() || []).concat(
                                n.map(function (e) {
                                    return 'GL_' + e;
                                })
                            )).map(function (e) {
                                return Yt(e);
                            })),
                            (n = Dt[e] = n),
                            0 > t || t >= n.length ? (jt(1281), 0) : n[t])
                          : (jt(1280), 0);
                },
                Ia: function (e, t) {
                    if (((t = F(t)), (e = St[e]))) {
                        var n,
                            r = e,
                            a = r.ne,
                            o = r.Pe;
                        if (!a)
                            for (r.ne = a = {}, r.Oe = {}, n = 0; n < ln.getProgramParameter(r, 35718); ++n) {
                                var i = ln.getActiveUniform(r, n),
                                    u = i.name;
                                i = i.size;
                                var c = Xt(u);
                                c = 0 < c ? u.slice(0, c) : u;
                                var f = r.Ge;
                                for (r.Ge += i, o[c] = [i, f], u = 0; u < i; ++u) (a[f] = u), (r.Oe[f++] = c);
                            }
                        if (
                            ((r = e.ne),
                            (a = 0),
                            (o = t),
                            0 < (n = Xt(t)) && ((a = parseInt(t.slice(n + 1)) >>> 0), (o = t.slice(0, n))),
                            (o = e.Pe[o]) && a < o[0] && (r[(a += o[1])] = r[a] || ln.getUniformLocation(e, t)))
                        )
                            return a;
                    } else jt(1281);
                    return -1;
                },
                Fb: function (e, t, n) {
                    for (var r = Nt[t], a = 0; a < t; a++) r[a] = L[(n + 4 * a) >> 2];
                    ln.invalidateFramebuffer(e, r);
                },
                Gb: function (e, t, n, r, a, o, i) {
                    for (var u = Nt[t], c = 0; c < t; c++) u[c] = L[(n + 4 * c) >> 2];
                    ln.invalidateSubFramebuffer(e, u, r, a, o, i);
                },
                Ob: function (e) {
                    return ln.isSync(It[e]);
                },
                Ja: function (e) {
                    return (e = Ft[e]) ? ln.isTexture(e) : 0;
                },
                Ka: function (e) {
                    ln.lineWidth(e);
                },
                La: function (e) {
                    (e = St[e]), ln.linkProgram(e), (e.ne = 0), (e.Pe = {});
                },
                hc: function (e, t, n, r, a, o) {
                    ln.Me.multiDrawArraysInstancedBaseInstanceWEBGL(e, L, t >> 2, L, n >> 2, L, r >> 2, j, a >> 2, o);
                },
                ic: function (e, t, n, r, a, o, i, u) {
                    ln.Me.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
                        e,
                        L,
                        t >> 2,
                        n,
                        L,
                        r >> 2,
                        L,
                        a >> 2,
                        L,
                        o >> 2,
                        j,
                        i >> 2,
                        u
                    );
                },
                Ma: function (e, t) {
                    3317 == e && (Lt = t), ln.pixelStorei(e, t);
                },
                kc: function (e) {
                    ln.readBuffer(e);
                },
                Na: function (e, t, n, r, a, o, i) {
                    if (2 <= Ht.version)
                        if (ln.Be) ln.readPixels(e, t, n, r, a, o, i);
                        else {
                            var u = Qt(o);
                            ln.readPixels(e, t, n, r, a, o, u, i >> (31 - Math.clz32(u.BYTES_PER_ELEMENT)));
                        }
                    else (i = zt(o, a, n, r, i)) ? ln.readPixels(e, t, n, r, a, o, i) : jt(1280);
                },
                Wb: function (e, t, n, r) {
                    ln.renderbufferStorage(e, t, n, r);
                },
                Sb: function (e, t, n, r, a) {
                    ln.renderbufferStorageMultisample(e, t, n, r, a);
                },
                Kb: function (e, t, n) {
                    ln.samplerParameterf(Bt[e], t, n);
                },
                Lb: function (e, t, n) {
                    ln.samplerParameteri(Bt[e], t, n);
                },
                Mb: function (e, t, n) {
                    ln.samplerParameteri(Bt[e], t, L[n >> 2]);
                },
                Oa: function (e, t, n, r) {
                    ln.scissor(e, t, n, r);
                },
                Pa: function (e, t, n, r) {
                    for (var a = '', o = 0; o < t; ++o) {
                        var i = r ? L[(r + 4 * o) >> 2] : -1;
                        a += F(L[(n + 4 * o) >> 2], 0 > i ? void 0 : i);
                    }
                    ln.shaderSource(xt[e], a);
                },
                Qa: function (e, t, n) {
                    ln.stencilFunc(e, t, n);
                },
                Ra: function (e, t, n, r) {
                    ln.stencilFuncSeparate(e, t, n, r);
                },
                Sa: function (e) {
                    ln.stencilMask(e);
                },
                Ta: function (e, t) {
                    ln.stencilMaskSeparate(e, t);
                },
                Ua: function (e, t, n) {
                    ln.stencilOp(e, t, n);
                },
                Va: function (e, t, n, r) {
                    ln.stencilOpSeparate(e, t, n, r);
                },
                Wa: function (e, t, n, r, a, o, i, u, c) {
                    if (2 <= Ht.version)
                        if (ln.ee) ln.texImage2D(e, t, n, r, a, o, i, u, c);
                        else if (c) {
                            var f = Qt(u);
                            ln.texImage2D(e, t, n, r, a, o, i, u, f, c >> (31 - Math.clz32(f.BYTES_PER_ELEMENT)));
                        } else ln.texImage2D(e, t, n, r, a, o, i, u, null);
                    else ln.texImage2D(e, t, n, r, a, o, i, u, c ? zt(u, i, r, a, c) : null);
                },
                Xa: function (e, t, n) {
                    ln.texParameterf(e, t, n);
                },
                Ya: function (e, t, n) {
                    ln.texParameterf(e, t, U[n >> 2]);
                },
                Za: function (e, t, n) {
                    ln.texParameteri(e, t, n);
                },
                _a: function (e, t, n) {
                    ln.texParameteri(e, t, L[n >> 2]);
                },
                ec: function (e, t, n, r, a) {
                    ln.texStorage2D(e, t, n, r, a);
                },
                $a: function (e, t, n, r, a, o, i, u, c) {
                    if (2 <= Ht.version)
                        if (ln.ee) ln.texSubImage2D(e, t, n, r, a, o, i, u, c);
                        else if (c) {
                            var f = Qt(u);
                            ln.texSubImage2D(e, t, n, r, a, o, i, u, f, c >> (31 - Math.clz32(f.BYTES_PER_ELEMENT)));
                        } else ln.texSubImage2D(e, t, n, r, a, o, i, u, null);
                    else (f = null), c && (f = zt(u, i, a, o, c)), ln.texSubImage2D(e, t, n, r, a, o, i, u, f);
                },
                ab: function (e, t) {
                    ln.uniform1f(qt(e), t);
                },
                bb: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform1fv(qt(e), U, n >> 2, t);
                    else {
                        if (288 >= t) for (var r = Zt[t - 1], a = 0; a < t; ++a) r[a] = U[(n + 4 * a) >> 2];
                        else r = U.subarray(n >> 2, (n + 4 * t) >> 2);
                        ln.uniform1fv(qt(e), r);
                    }
                },
                Pc: function (e, t) {
                    ln.uniform1i(qt(e), t);
                },
                Qc: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform1iv(qt(e), L, n >> 2, t);
                    else {
                        if (288 >= t) for (var r = Jt[t - 1], a = 0; a < t; ++a) r[a] = L[(n + 4 * a) >> 2];
                        else r = L.subarray(n >> 2, (n + 4 * t) >> 2);
                        ln.uniform1iv(qt(e), r);
                    }
                },
                Rc: function (e, t, n) {
                    ln.uniform2f(qt(e), t, n);
                },
                Sc: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform2fv(qt(e), U, n >> 2, 2 * t);
                    else {
                        if (144 >= t)
                            for (var r = Zt[2 * t - 1], a = 0; a < 2 * t; a += 2)
                                (r[a] = U[(n + 4 * a) >> 2]), (r[a + 1] = U[(n + (4 * a + 4)) >> 2]);
                        else r = U.subarray(n >> 2, (n + 8 * t) >> 2);
                        ln.uniform2fv(qt(e), r);
                    }
                },
                Oc: function (e, t, n) {
                    ln.uniform2i(qt(e), t, n);
                },
                Nc: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform2iv(qt(e), L, n >> 2, 2 * t);
                    else {
                        if (144 >= t)
                            for (var r = Jt[2 * t - 1], a = 0; a < 2 * t; a += 2)
                                (r[a] = L[(n + 4 * a) >> 2]), (r[a + 1] = L[(n + (4 * a + 4)) >> 2]);
                        else r = L.subarray(n >> 2, (n + 8 * t) >> 2);
                        ln.uniform2iv(qt(e), r);
                    }
                },
                Mc: function (e, t, n, r) {
                    ln.uniform3f(qt(e), t, n, r);
                },
                Lc: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform3fv(qt(e), U, n >> 2, 3 * t);
                    else {
                        if (96 >= t)
                            for (var r = Zt[3 * t - 1], a = 0; a < 3 * t; a += 3)
                                (r[a] = U[(n + 4 * a) >> 2]),
                                    (r[a + 1] = U[(n + (4 * a + 4)) >> 2]),
                                    (r[a + 2] = U[(n + (4 * a + 8)) >> 2]);
                        else r = U.subarray(n >> 2, (n + 12 * t) >> 2);
                        ln.uniform3fv(qt(e), r);
                    }
                },
                Kc: function (e, t, n, r) {
                    ln.uniform3i(qt(e), t, n, r);
                },
                Jc: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform3iv(qt(e), L, n >> 2, 3 * t);
                    else {
                        if (96 >= t)
                            for (var r = Jt[3 * t - 1], a = 0; a < 3 * t; a += 3)
                                (r[a] = L[(n + 4 * a) >> 2]),
                                    (r[a + 1] = L[(n + (4 * a + 4)) >> 2]),
                                    (r[a + 2] = L[(n + (4 * a + 8)) >> 2]);
                        else r = L.subarray(n >> 2, (n + 12 * t) >> 2);
                        ln.uniform3iv(qt(e), r);
                    }
                },
                Ic: function (e, t, n, r, a) {
                    ln.uniform4f(qt(e), t, n, r, a);
                },
                Hc: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform4fv(qt(e), U, n >> 2, 4 * t);
                    else {
                        if (72 >= t) {
                            var r = Zt[4 * t - 1],
                                a = U;
                            n >>= 2;
                            for (var o = 0; o < 4 * t; o += 4) {
                                var i = n + o;
                                (r[o] = a[i]), (r[o + 1] = a[i + 1]), (r[o + 2] = a[i + 2]), (r[o + 3] = a[i + 3]);
                            }
                        } else r = U.subarray(n >> 2, (n + 16 * t) >> 2);
                        ln.uniform4fv(qt(e), r);
                    }
                },
                vc: function (e, t, n, r, a) {
                    ln.uniform4i(qt(e), t, n, r, a);
                },
                wc: function (e, t, n) {
                    if (2 <= Ht.version) ln.uniform4iv(qt(e), L, n >> 2, 4 * t);
                    else {
                        if (72 >= t)
                            for (var r = Jt[4 * t - 1], a = 0; a < 4 * t; a += 4)
                                (r[a] = L[(n + 4 * a) >> 2]),
                                    (r[a + 1] = L[(n + (4 * a + 4)) >> 2]),
                                    (r[a + 2] = L[(n + (4 * a + 8)) >> 2]),
                                    (r[a + 3] = L[(n + (4 * a + 12)) >> 2]);
                        else r = L.subarray(n >> 2, (n + 16 * t) >> 2);
                        ln.uniform4iv(qt(e), r);
                    }
                },
                xc: function (e, t, n, r) {
                    if (2 <= Ht.version) ln.uniformMatrix2fv(qt(e), !!n, U, r >> 2, 4 * t);
                    else {
                        if (72 >= t)
                            for (var a = Zt[4 * t - 1], o = 0; o < 4 * t; o += 4)
                                (a[o] = U[(r + 4 * o) >> 2]),
                                    (a[o + 1] = U[(r + (4 * o + 4)) >> 2]),
                                    (a[o + 2] = U[(r + (4 * o + 8)) >> 2]),
                                    (a[o + 3] = U[(r + (4 * o + 12)) >> 2]);
                        else a = U.subarray(r >> 2, (r + 16 * t) >> 2);
                        ln.uniformMatrix2fv(qt(e), !!n, a);
                    }
                },
                yc: function (e, t, n, r) {
                    if (2 <= Ht.version) ln.uniformMatrix3fv(qt(e), !!n, U, r >> 2, 9 * t);
                    else {
                        if (32 >= t)
                            for (var a = Zt[9 * t - 1], o = 0; o < 9 * t; o += 9)
                                (a[o] = U[(r + 4 * o) >> 2]),
                                    (a[o + 1] = U[(r + (4 * o + 4)) >> 2]),
                                    (a[o + 2] = U[(r + (4 * o + 8)) >> 2]),
                                    (a[o + 3] = U[(r + (4 * o + 12)) >> 2]),
                                    (a[o + 4] = U[(r + (4 * o + 16)) >> 2]),
                                    (a[o + 5] = U[(r + (4 * o + 20)) >> 2]),
                                    (a[o + 6] = U[(r + (4 * o + 24)) >> 2]),
                                    (a[o + 7] = U[(r + (4 * o + 28)) >> 2]),
                                    (a[o + 8] = U[(r + (4 * o + 32)) >> 2]);
                        else a = U.subarray(r >> 2, (r + 36 * t) >> 2);
                        ln.uniformMatrix3fv(qt(e), !!n, a);
                    }
                },
                zc: function (e, t, n, r) {
                    if (2 <= Ht.version) ln.uniformMatrix4fv(qt(e), !!n, U, r >> 2, 16 * t);
                    else {
                        if (18 >= t) {
                            var a = Zt[16 * t - 1],
                                o = U;
                            r >>= 2;
                            for (var i = 0; i < 16 * t; i += 16) {
                                var u = r + i;
                                (a[i] = o[u]),
                                    (a[i + 1] = o[u + 1]),
                                    (a[i + 2] = o[u + 2]),
                                    (a[i + 3] = o[u + 3]),
                                    (a[i + 4] = o[u + 4]),
                                    (a[i + 5] = o[u + 5]),
                                    (a[i + 6] = o[u + 6]),
                                    (a[i + 7] = o[u + 7]),
                                    (a[i + 8] = o[u + 8]),
                                    (a[i + 9] = o[u + 9]),
                                    (a[i + 10] = o[u + 10]),
                                    (a[i + 11] = o[u + 11]),
                                    (a[i + 12] = o[u + 12]),
                                    (a[i + 13] = o[u + 13]),
                                    (a[i + 14] = o[u + 14]),
                                    (a[i + 15] = o[u + 15]);
                            }
                        } else a = U.subarray(r >> 2, (r + 64 * t) >> 2);
                        ln.uniformMatrix4fv(qt(e), !!n, a);
                    }
                },
                Ac: function (e) {
                    (e = St[e]), ln.useProgram(e), (ln.Ye = e);
                },
                Bc: function (e, t) {
                    ln.vertexAttrib1f(e, t);
                },
                Cc: function (e, t) {
                    ln.vertexAttrib2f(e, U[t >> 2], U[(t + 4) >> 2]);
                },
                Dc: function (e, t) {
                    ln.vertexAttrib3f(e, U[t >> 2], U[(t + 4) >> 2], U[(t + 8) >> 2]);
                },
                Ec: function (e, t) {
                    ln.vertexAttrib4f(e, U[t >> 2], U[(t + 4) >> 2], U[(t + 8) >> 2], U[(t + 12) >> 2]);
                },
                fc: function (e, t) {
                    ln.vertexAttribDivisor(e, t);
                },
                gc: function (e, t, n, r, a) {
                    ln.vertexAttribIPointer(e, t, n, r, a);
                },
                Fc: function (e, t, n, r, a, o) {
                    ln.vertexAttribPointer(e, t, n, !!r, a, o);
                },
                Gc: function (e, t, n, r) {
                    ln.viewport(e, t, n, r);
                },
                eb: function (e, t, n, r) {
                    ln.waitSync(It[e], t, (n >>> 0) + 4294967296 * r);
                },
                nb: function (e) {
                    var t = I.length;
                    if (2147483648 < (e >>>= 0)) return !1;
                    for (var n = 1; 4 >= n; n *= 2) {
                        var r = t * (1 + 0.2 / n);
                        (r = Math.min(r, e + 100663296)),
                            0 < (r = Math.max(e, r)) % 65536 && (r += 65536 - (r % 65536));
                        e: {
                            try {
                                T.grow((Math.min(2147483648, r) - R.byteLength + 65535) >>> 16), Q();
                                var a = 1;
                                break e;
                            } catch (e) {}
                            a = void 0;
                        }
                        if (a) return !0;
                    }
                    return !1;
                },
                gb: function () {
                    return Ht ? Ht.kf : 0;
                },
                qb: function (e, t) {
                    var n = 0;
                    return (
                        tn().forEach(function (r, a) {
                            var o = t + n;
                            for (a = L[(e + 4 * a) >> 2] = o, o = 0; o < r.length; ++o) B[a++ >> 0] = r.charCodeAt(o);
                            (B[a >> 0] = 0), (n += r.length + 1);
                        }),
                        0
                    );
                },
                rb: function (e, t) {
                    var n = tn();
                    L[e >> 2] = n.length;
                    var r = 0;
                    return (
                        n.forEach(function (e) {
                            r += e.length + 1;
                        }),
                        (L[t >> 2] = r),
                        0
                    );
                },
                Bb: function (e) {
                    C || 0 < J || (n.onExit && n.onExit(e), (S = !0)), y(e, new Cn(e));
                },
                Q: function () {
                    return 0;
                },
                hb: function (e, t, n, r, a, o) {
                    return (e = pe.ff(e)), (t = pe.$e(e, t, n, r)), (L[o >> 2] = t), 0;
                },
                wb: function (e, t, n, r) {
                    return (e = pe.ff(e)), (t = pe.$e(e, t, n)), (L[r >> 2] = t), 0;
                },
                ib: function () {},
                V: function (e, t, n, r) {
                    for (var a = 0, o = 0; o < n; o++) {
                        var i = L[t >> 2],
                            u = L[(t + 4) >> 2];
                        t += 8;
                        for (var c = 0; c < u; c++) {
                            var f = I[i + c],
                                l = he[e];
                            0 === f || 10 === f ? ((1 === e ? b : P)(M(l, 0)), (l.length = 0)) : l.push(f);
                        }
                        a += u;
                    }
                    return (L[r >> 2] = a), 0;
                },
                b: function () {
                    return w;
                },
                q: function (e, t) {
                    var n = An();
                    try {
                        return le(e)(t);
                    } catch (e) {
                        if ((wn(n), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                o: function (e, t, n) {
                    var r = An();
                    try {
                        return le(e)(t, n);
                    } catch (e) {
                        if ((wn(r), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                m: function (e, t, n, r) {
                    var a = An();
                    try {
                        return le(e)(t, n, r);
                    } catch (e) {
                        if ((wn(a), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                S: function (e, t, n, r, a) {
                    var o = An();
                    try {
                        return le(e)(t, n, r, a);
                    } catch (e) {
                        if ((wn(o), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                aa: function (e, t, n, r, a, o, i) {
                    var u = An();
                    try {
                        return le(e)(t, n, r, a, o, i);
                    } catch (e) {
                        if ((wn(u), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                $: function (e, t, n, r, a, o, i, u, c, f) {
                    var l = An();
                    try {
                        return le(e)(t, n, r, a, o, i, u, c, f);
                    } catch (e) {
                        if ((wn(l), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                z: function (e, t) {
                    var n = An();
                    try {
                        le(e)(t);
                    } catch (e) {
                        if ((wn(n), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                y: function (e, t, n) {
                    var r = An();
                    try {
                        le(e)(t, n);
                    } catch (e) {
                        if ((wn(r), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                t: function (e, t, n, r) {
                    var a = An();
                    try {
                        le(e)(t, n, r);
                    } catch (e) {
                        if ((wn(a), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                x: function (e, t, n, r, a) {
                    var o = An();
                    try {
                        le(e)(t, n, r, a);
                    } catch (e) {
                        if ((wn(o), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                ba: function (e, t, n, r, a, o) {
                    var i = An();
                    try {
                        le(e)(t, n, r, a, o);
                    } catch (e) {
                        if ((wn(i), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                Cb: function (e, t, n, r, a, o, i) {
                    var u = An();
                    try {
                        le(e)(t, n, r, a, o, i);
                    } catch (e) {
                        if ((wn(u), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                Db: function (e, t, n, r, a, o, i, u, c, f) {
                    var l = An();
                    try {
                        le(e)(t, n, r, a, o, i, u, c, f);
                    } catch (e) {
                        if ((wn(l), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                c: function (e) {
                    w = e;
                },
                kb: function (e, t, n, r) {
                    return (function (e, t, n, r) {
                        function a(e, t, n) {
                            for (e = 'number' == typeof e ? e.toString() : e || ''; e.length < t; ) e = n[0] + e;
                            return e;
                        }
                        function o(e, t) {
                            return a(e, t, '0');
                        }
                        function i(e, t) {
                            function n(e) {
                                return 0 > e ? -1 : 0 < e ? 1 : 0;
                            }
                            var r;
                            return (
                                0 === (r = n(e.getFullYear() - t.getFullYear())) &&
                                    0 === (r = n(e.getMonth() - t.getMonth())) &&
                                    (r = n(e.getDate() - t.getDate())),
                                r
                            );
                        }
                        function u(e) {
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
                        function c(e) {
                            e = un(new Date(e.Vd + 1900, 0, 1), e.ye);
                            var t = new Date(e.getFullYear() + 1, 0, 4),
                                n = u(new Date(e.getFullYear(), 0, 4));
                            return (
                                (t = u(t)),
                                0 >= i(n, e)
                                    ? 0 >= i(t, e)
                                        ? e.getFullYear() + 1
                                        : e.getFullYear()
                                    : e.getFullYear() - 1
                            );
                        }
                        var f = L[(r + 40) >> 2];
                        for (var l in ((r = {
                            Gf: L[r >> 2],
                            Ff: L[(r + 4) >> 2],
                            we: L[(r + 8) >> 2],
                            me: L[(r + 12) >> 2],
                            he: L[(r + 16) >> 2],
                            Vd: L[(r + 20) >> 2],
                            xe: L[(r + 24) >> 2],
                            ye: L[(r + 28) >> 2],
                            Of: L[(r + 32) >> 2],
                            Ef: L[(r + 36) >> 2],
                            Hf: f ? F(f) : '',
                        }),
                        (n = F(n)),
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
                            n = n.replace(new RegExp(l, 'g'), f[l]);
                        var s = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
                            d =
                                'January February March April May June July August September October November December'.split(
                                    ' '
                                );
                        for (l in (f = {
                            '%a': function (e) {
                                return s[e.xe].substring(0, 3);
                            },
                            '%A': function (e) {
                                return s[e.xe];
                            },
                            '%b': function (e) {
                                return d[e.he].substring(0, 3);
                            },
                            '%B': function (e) {
                                return d[e.he];
                            },
                            '%C': function (e) {
                                return o(((e.Vd + 1900) / 100) | 0, 2);
                            },
                            '%d': function (e) {
                                return o(e.me, 2);
                            },
                            '%e': function (e) {
                                return a(e.me, 2, ' ');
                            },
                            '%g': function (e) {
                                return c(e).toString().substring(2);
                            },
                            '%G': function (e) {
                                return c(e);
                            },
                            '%H': function (e) {
                                return o(e.we, 2);
                            },
                            '%I': function (e) {
                                return 0 == (e = e.we) ? (e = 12) : 12 < e && (e -= 12), o(e, 2);
                            },
                            '%j': function (e) {
                                return o(e.me + rn(nn(e.Vd + 1900) ? an : on, e.he - 1), 3);
                            },
                            '%m': function (e) {
                                return o(e.he + 1, 2);
                            },
                            '%M': function (e) {
                                return o(e.Ff, 2);
                            },
                            '%n': function () {
                                return '\n';
                            },
                            '%p': function (e) {
                                return 0 <= e.we && 12 > e.we ? 'AM' : 'PM';
                            },
                            '%S': function (e) {
                                return o(e.Gf, 2);
                            },
                            '%t': function () {
                                return '\t';
                            },
                            '%u': function (e) {
                                return e.xe || 7;
                            },
                            '%U': function (e) {
                                var t = new Date(e.Vd + 1900, 0, 1),
                                    n = 0 === t.getDay() ? t : un(t, 7 - t.getDay());
                                return 0 > i(n, (e = new Date(e.Vd + 1900, e.he, e.me)))
                                    ? o(
                                          Math.ceil(
                                              (31 -
                                                  n.getDate() +
                                                  (rn(nn(e.getFullYear()) ? an : on, e.getMonth() - 1) - 31) +
                                                  e.getDate()) /
                                                  7
                                          ),
                                          2
                                      )
                                    : 0 === i(n, t)
                                      ? '01'
                                      : '00';
                            },
                            '%V': function (e) {
                                var t = new Date(e.Vd + 1901, 0, 4),
                                    n = u(new Date(e.Vd + 1900, 0, 4));
                                t = u(t);
                                var r = un(new Date(e.Vd + 1900, 0, 1), e.ye);
                                return 0 > i(r, n)
                                    ? '53'
                                    : 0 >= i(t, r)
                                      ? '01'
                                      : o(
                                            Math.ceil(
                                                (n.getFullYear() < e.Vd + 1900
                                                    ? e.ye + 32 - n.getDate()
                                                    : e.ye + 1 - n.getDate()) / 7
                                            ),
                                            2
                                        );
                            },
                            '%w': function (e) {
                                return e.xe;
                            },
                            '%W': function (e) {
                                var t = new Date(e.Vd, 0, 1),
                                    n = 1 === t.getDay() ? t : un(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
                                return 0 > i(n, (e = new Date(e.Vd + 1900, e.he, e.me)))
                                    ? o(
                                          Math.ceil(
                                              (31 -
                                                  n.getDate() +
                                                  (rn(nn(e.getFullYear()) ? an : on, e.getMonth() - 1) - 31) +
                                                  e.getDate()) /
                                                  7
                                          ),
                                          2
                                      )
                                    : 0 === i(n, t)
                                      ? '01'
                                      : '00';
                            },
                            '%y': function (e) {
                                return (e.Vd + 1900).toString().substring(2);
                            },
                            '%Y': function (e) {
                                return e.Vd + 1900;
                            },
                            '%z': function (e) {
                                var t = 0 <= (e = e.Ef);
                                return (
                                    (e = Math.abs(e) / 60),
                                    (t ? '+' : '-') + String('0000' + ((e / 60) * 100 + (e % 60))).slice(-4)
                                );
                            },
                            '%Z': function (e) {
                                return e.Hf;
                            },
                            '%%': function () {
                                return '%';
                            },
                        }))
                            n.includes(l) && (n = n.replace(new RegExp(l, 'g'), f[l](r)));
                        return (
                            (l = (function (e) {
                                var t = Array(k(e) + 1);
                                return x(e, t, 0, t.length), t;
                            })(n)),
                            l.length > t ? 0 : (B.set(l, e), l.length - 1)
                        );
                    })(e, t, n, r);
                },
            };
            !(function () {
                function e(e) {
                    (n.asm = e.exports),
                        (T = n.asm.cd),
                        Q(),
                        (z = n.asm.ed),
                        K.unshift(n.asm.dd),
                        ne--,
                        n.monitorRunDependencies && n.monitorRunDependencies(ne),
                        0 == ne &&
                            (null !== re && (clearInterval(re), (re = null)), ae && ((e = ae), (ae = null), e()));
                }
                function t(t) {
                    e(t.instance);
                }
                function r(e) {
                    return (function () {
                        if (!A && (m || v)) {
                            if ('function' == typeof fetch && !te.startsWith('file://'))
                                return fetch(te, { credentials: 'same-origin' })
                                    .then(function (e) {
                                        if (!e.ok) throw "failed to load wasm binary file at '" + te + "'";
                                        return e.arrayBuffer();
                                    })
                                    .catch(function () {
                                        return ce();
                                    });
                            if (c)
                                return new Promise(function (e, t) {
                                    c(
                                        te,
                                        function (t) {
                                            e(new Uint8Array(t));
                                        },
                                        t
                                    );
                                });
                        }
                        return Promise.resolve().then(function () {
                            return ce();
                        });
                    })()
                        .then(function (e) {
                            return WebAssembly.instantiate(e, o);
                        })
                        .then(function (e) {
                            return e;
                        })
                        .then(e, function (e) {
                            P('failed to asynchronously prepare wasm: ' + e), oe(e);
                        });
                }
                var o = { a: pn };
                if ((ne++, n.monitorRunDependencies && n.monitorRunDependencies(ne), n.instantiateWasm))
                    try {
                        return n.instantiateWasm(o, e);
                    } catch (e) {
                        return P('Module.instantiateWasm callback failed with error: ' + e), !1;
                    }
                (A ||
                'function' != typeof WebAssembly.instantiateStreaming ||
                ie() ||
                te.startsWith('file://') ||
                'function' != typeof fetch
                    ? r(t)
                    : fetch(te, { credentials: 'same-origin' }).then(function (e) {
                          return WebAssembly.instantiateStreaming(e, o).then(t, function (e) {
                              return (
                                  P('wasm streaming compile failed: ' + e),
                                  P('falling back to ArrayBuffer instantiation'),
                                  r(t)
                              );
                          });
                      })
                ).catch(a);
            })(),
                (n.___wasm_call_ctors = function () {
                    return (n.___wasm_call_ctors = n.asm.dd).apply(null, arguments);
                });
            var yn = (n.___errno_location = function () {
                    return (yn = n.___errno_location = n.asm.fd).apply(null, arguments);
                }),
                mn = (n._free = function () {
                    return (mn = n._free = n.asm.gd).apply(null, arguments);
                }),
                vn = (n._malloc = function () {
                    return (vn = n._malloc = n.asm.hd).apply(null, arguments);
                }),
                gn = (n.___getTypeName = function () {
                    return (gn = n.___getTypeName = n.asm.id).apply(null, arguments);
                });
            n.___embind_register_native_and_builtin_types = function () {
                return (n.___embind_register_native_and_builtin_types = n.asm.jd).apply(null, arguments);
            };
            var _n,
                bn = (n._memalign = function () {
                    return (bn = n._memalign = n.asm.kd).apply(null, arguments);
                }),
                Pn = (n._setThrew = function () {
                    return (Pn = n._setThrew = n.asm.ld).apply(null, arguments);
                }),
                An = (n.stackSave = function () {
                    return (An = n.stackSave = n.asm.md).apply(null, arguments);
                }),
                wn = (n.stackRestore = function () {
                    return (wn = n.stackRestore = n.asm.nd).apply(null, arguments);
                });
            function Cn(e) {
                (this.name = 'ExitStatus'),
                    (this.message = 'Program terminated with exit(' + e + ')'),
                    (this.status = e);
            }
            function Tn() {
                function e() {
                    if (!_n && ((_n = !0), (n.calledRun = !0), !S)) {
                        if ((fe(K), r(n), n.onRuntimeInitialized && n.onRuntimeInitialized(), n.postRun))
                            for ('function' == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length; ) {
                                var e = n.postRun.shift();
                                Z.unshift(e);
                            }
                        fe(Z);
                    }
                }
                if (!(0 < ne)) {
                    if (n.preRun)
                        for ('function' == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length; ) ee();
                    fe(q),
                        0 < ne ||
                            (n.setStatus
                                ? (n.setStatus('Running...'),
                                  setTimeout(function () {
                                      setTimeout(function () {
                                          n.setStatus('');
                                      }, 1),
                                          e();
                                  }, 1))
                                : e());
                }
            }
            if (
                ((n.dynCall_viji = function () {
                    return (n.dynCall_viji = n.asm.od).apply(null, arguments);
                }),
                (n.dynCall_vijiii = function () {
                    return (n.dynCall_vijiii = n.asm.pd).apply(null, arguments);
                }),
                (n.dynCall_viiiiij = function () {
                    return (n.dynCall_viiiiij = n.asm.qd).apply(null, arguments);
                }),
                (n.dynCall_iiiji = function () {
                    return (n.dynCall_iiiji = n.asm.rd).apply(null, arguments);
                }),
                (n.dynCall_jii = function () {
                    return (n.dynCall_jii = n.asm.sd).apply(null, arguments);
                }),
                (n.dynCall_vij = function () {
                    return (n.dynCall_vij = n.asm.td).apply(null, arguments);
                }),
                (n.dynCall_iiij = function () {
                    return (n.dynCall_iiij = n.asm.ud).apply(null, arguments);
                }),
                (n.dynCall_iiiij = function () {
                    return (n.dynCall_iiiij = n.asm.vd).apply(null, arguments);
                }),
                (n.dynCall_viij = function () {
                    return (n.dynCall_viij = n.asm.wd).apply(null, arguments);
                }),
                (n.dynCall_viiij = function () {
                    return (n.dynCall_viiij = n.asm.xd).apply(null, arguments);
                }),
                (n.dynCall_ji = function () {
                    return (n.dynCall_ji = n.asm.yd).apply(null, arguments);
                }),
                (n.dynCall_iij = function () {
                    return (n.dynCall_iij = n.asm.zd).apply(null, arguments);
                }),
                (n.dynCall_jiiii = function () {
                    return (n.dynCall_jiiii = n.asm.Ad).apply(null, arguments);
                }),
                (n.dynCall_jiiiiii = function () {
                    return (n.dynCall_jiiiiii = n.asm.Bd).apply(null, arguments);
                }),
                (n.dynCall_jiiiiji = function () {
                    return (n.dynCall_jiiiiji = n.asm.Cd).apply(null, arguments);
                }),
                (n.dynCall_iijj = function () {
                    return (n.dynCall_iijj = n.asm.Dd).apply(null, arguments);
                }),
                (n.dynCall_iiji = function () {
                    return (n.dynCall_iiji = n.asm.Ed).apply(null, arguments);
                }),
                (n.dynCall_iijjiii = function () {
                    return (n.dynCall_iijjiii = n.asm.Fd).apply(null, arguments);
                }),
                (n.dynCall_vijjjii = function () {
                    return (n.dynCall_vijjjii = n.asm.Gd).apply(null, arguments);
                }),
                (n.dynCall_jiji = function () {
                    return (n.dynCall_jiji = n.asm.Hd).apply(null, arguments);
                }),
                (n.dynCall_viijii = function () {
                    return (n.dynCall_viijii = n.asm.Id).apply(null, arguments);
                }),
                (n.dynCall_iiiiij = function () {
                    return (n.dynCall_iiiiij = n.asm.Jd).apply(null, arguments);
                }),
                (n.dynCall_iiiiijj = function () {
                    return (n.dynCall_iiiiijj = n.asm.Kd).apply(null, arguments);
                }),
                (n.dynCall_iiiiiijj = function () {
                    return (n.dynCall_iiiiiijj = n.asm.Ld).apply(null, arguments);
                }),
                (ae = function e() {
                    _n || Tn(), _n || (ae = e);
                }),
                (n.run = Tn),
                n.preInit)
            )
                for ('function' == typeof n.preInit && (n.preInit = [n.preInit]); 0 < n.preInit.length; )
                    n.preInit.pop()();
            return Tn(), t.ready;
        }
    );
})();
'object' == typeof exports && 'object' == typeof module
    ? (module.exports = CanvasKitInit)
    : 'function' == typeof define && define.amd
      ? define([], function () {
            return CanvasKitInit;
        })
      : 'object' == typeof exports && (exports.CanvasKitInit = CanvasKitInit);
