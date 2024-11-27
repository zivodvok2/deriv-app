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
                ((o = n).Md = o.Md || []),
                o.Md.push(function () {
                    (o.MakeSWCanvasSurface = function (e) {
                        var t = e;
                        if ('CANVAS' !== t.tagName && !(t = document.getElementById(e)))
                            throw 'Canvas with id ' + e + ' was not found';
                        return (e = o.MakeSurface(t.width, t.height)) && (e.ke = t), e;
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
                                    ((n.ke = null),
                                    (n.Qe = e),
                                    (n.Ne = t),
                                    (n.Oe = r),
                                    (n.ue = a),
                                    n.getCanvas().clear(o.TRANSPARENT)),
                                n
                            );
                        }),
                        (o.MakeRasterDirectSurface = function (e, t, n) {
                            return o.Surface._makeRasterDirect(e, t.byteOffset, n);
                        }),
                        (o.Surface.prototype.flush = function (e) {
                            if ((o.Jd(this.Id), this._flush(), this.ke)) {
                                var t = new Uint8ClampedArray(o.HEAPU8.buffer, this.ue, this.Oe);
                                (t = new ImageData(t, this.Qe, this.Ne)),
                                    e
                                        ? this.ke
                                              .getContext('2d')
                                              .putImageData(t, 0, 0, e[0], e[1], e[2] - e[0], e[3] - e[1])
                                        : this.ke.getContext('2d').putImageData(t, 0, 0);
                            }
                        }),
                        (o.Surface.prototype.dispose = function () {
                            this.ue && o._free(this.ue), this.delete();
                        }),
                        (o.Jd = o.Jd || function () {}),
                        (o.le =
                            o.le ||
                            function () {
                                return null;
                            });
                }),
                (function (e) {
                    (e.Md = e.Md || []),
                        e.Md.push(function () {
                            function t(e, t, n) {
                                return e && e.hasOwnProperty(t) ? e[t] : n;
                            }
                            function n(e) {
                                var t = Gt(xt);
                                return (xt[t] = e), t;
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
                                        e.Ge ||
                                            ((e.Ge = e.getContext),
                                            (e.getContext = function (t, n) {
                                                return ('webgl' == t) ==
                                                    (n = e.Ge(t, n)) instanceof WebGLRenderingContext
                                                    ? n
                                                    : null;
                                            }));
                                        var n =
                                            1 < t.majorVersion ? e.getContext('webgl2', t) : e.getContext('webgl', t);
                                        return n
                                            ? (function (e, t) {
                                                  var n = Gt(kt),
                                                      r = { ef: n, attributes: t, version: t.majorVersion, Ud: e };
                                                  return (
                                                      e.canvas && (e.canvas.Le = r),
                                                      (kt[n] = r),
                                                      (void 0 === t.Xe || t.Xe) &&
                                                          (function (e) {
                                                              if ((e || (e = Ot), !e.hf)) {
                                                                  e.hf = !0;
                                                                  var t = e.Ud;
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
                                                                      (t.De = t.getExtension(
                                                                          'WEBGL_draw_instanced_base_vertex_base_instance'
                                                                      )),
                                                                      (t.He = t.getExtension(
                                                                          'WEBGL_multi_draw_instanced_base_vertex_base_instance'
                                                                      )),
                                                                      2 <= e.version &&
                                                                          (t.Ee = t.getExtension(
                                                                              'EXT_disjoint_timer_query_webgl2'
                                                                          )),
                                                                      (2 > e.version || !t.Ee) &&
                                                                          (t.Ee =
                                                                              t.getExtension(
                                                                                  'EXT_disjoint_timer_query'
                                                                              )),
                                                                      (t.Ff = t.getExtension('WEBGL_multi_draw')),
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
                                    e ? (jt(e), Ot.Ud.getExtension('WEBGL_debug_renderer_info'), e) : 0
                                );
                            }),
                                (e.deleteContext = function (e) {
                                    Ot === kt[e] && (Ot = null),
                                        'object' == typeof JSEvents && JSEvents.If(kt[e].Ud.canvas),
                                        kt[e] && kt[e].Ud.canvas && (kt[e].Ud.canvas.Le = void 0),
                                        (kt[e] = null);
                                }),
                                e._setTextureCleanup({
                                    deleteTexture: function (e, t) {
                                        var n = xt[t];
                                        n && kt[e].Ud.deleteTexture(n), (xt[t] = null);
                                    },
                                }),
                                (e.MakeWebGLContext = function (t) {
                                    if (!this.Jd(t)) return null;
                                    var n = this._MakeGrContext();
                                    if (!n) return null;
                                    n.Id = t;
                                    var r = n.delete.bind(n);
                                    return (
                                        (n.delete = function () {
                                            e.Jd(this.Id), r();
                                        }.bind(n)),
                                        (Ot.xe = n)
                                    );
                                }),
                                (e.MakeGrContext = e.MakeWebGLContext),
                                (e.GrDirectContext.prototype.getResourceCacheLimitBytes = function () {
                                    e.Jd(this.Id), this._getResourceCacheLimitBytes();
                                }),
                                (e.GrDirectContext.prototype.getResourceCacheUsageBytes = function () {
                                    e.Jd(this.Id), this._getResourceCacheUsageBytes();
                                }),
                                (e.GrDirectContext.prototype.releaseResourcesAndAbandonContext = function () {
                                    e.Jd(this.Id), this._releaseResourcesAndAbandonContext();
                                }),
                                (e.GrDirectContext.prototype.setResourceCacheLimitBytes = function (t) {
                                    e.Jd(this.Id), this._setResourceCacheLimitBytes(t);
                                }),
                                (e.MakeOnScreenGLSurface = function (e, t, n, r, a, o) {
                                    return this.Jd(e.Id) &&
                                        (t =
                                            void 0 === a || void 0 === o
                                                ? this._MakeOnScreenGLSurface(e, t, n, r)
                                                : this._MakeOnScreenGLSurface(e, t, n, r, a, o))
                                        ? ((t.Id = e.Id), t)
                                        : null;
                                }),
                                (e.MakeRenderTarget = function () {
                                    var e = arguments[0];
                                    if (!this.Jd(e.Id)) return null;
                                    if (3 === arguments.length) {
                                        var t = this._MakeRenderTargetWH(e, arguments[1], arguments[2]);
                                        if (!t) return null;
                                    } else {
                                        if (2 !== arguments.length) return null;
                                        if (!(t = this._MakeRenderTargetII(e, arguments[1]))) return null;
                                    }
                                    return (t.Id = e.Id), t;
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
                                        e.Jd(this.Id),
                                        (t = n(t)),
                                        (r = this._makeImageFromTexture(this.Id, t, r)) && (r.ee = t),
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
                                        e.Jd(this.Id);
                                    var c = Ot.Ud;
                                    return (
                                        (u = o(c, c.createTexture(), n, u)),
                                        2 === Ot.version
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
                                    if (t.ee) {
                                        e.Jd(this.Id);
                                        var f = t.getImageInfo(),
                                            l = Ot.Ud,
                                            s = o(l, xt[t.ee], f, c);
                                        2 === Ot.version
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
                                            (xt[t.ee] = null),
                                            (t.ee = n(s)),
                                            (f.colorSpace = t.getColorSpace()),
                                            (u = this._makeImageFromTexture(this.Id, t.ee, f)),
                                            (c = t.Hd.Kd),
                                            (l = t.Hd.Pd),
                                            (t.Hd.Kd = u.Hd.Kd),
                                            (t.Hd.Pd = u.Hd.Pd),
                                            (u.Hd.Kd = c),
                                            (u.Hd.Pd = l),
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
                                            var e = Ot,
                                                r = e.Ud,
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
                                (e.Jd = function (e) {
                                    return !!e && jt(e);
                                }),
                                (e.le = function () {
                                    return Ot && Ot.xe && !Ot.xe.isDeleted() ? Ot.xe : null;
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
                        if (!t || !t.length) return G;
                        if (t && t._ck) return t.byteOffset;
                        var a = e[n].BYTES_PER_ELEMENT;
                        return r || (r = e._malloc(t.length * a)), e[n].set(t, r / a), r;
                    }
                    function c(t) {
                        var n = { Rd: G, count: t.length, fe: e.ColorType.RGBA_F32 };
                        if (t instanceof Float32Array) (n.Rd = u(t, 'HEAPF32')), (n.count = t.length / 4);
                        else if (t instanceof Uint32Array) (n.Rd = u(t, 'HEAPU32')), (n.fe = e.ColorType.RGBA_8888);
                        else {
                            if (!(t instanceof Array))
                                throw 'Invalid argument to copyFlexibleColorArray, Not a color array ' + typeof t;
                            if (t && t.length) {
                                for (var r = e._malloc(16 * t.length), a = 0, o = r / 4, i = 0; i < t.length; i++)
                                    for (var c = 0; 4 > c; c++) (e.HEAPF32[o + a] = t[i][c]), a++;
                                t = r;
                            } else t = G;
                            n.Rd = t;
                        }
                        return n;
                    }
                    function f(t) {
                        if (!t) return G;
                        var n = y.toTypedArray();
                        if (t.length) {
                            if (6 === t.length || 9 === t.length)
                                return u(t, 'HEAPF32', T), 6 === t.length && e.HEAPF32.set(U, 6 + T / 4), T;
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
                        var a = g.toTypedArray();
                        return (a[0] = e), (a[1] = t), (a[2] = n), (a[3] = r), E;
                    }
                    function d(t) {
                        for (var n = new Float32Array(4), r = 0; 4 > r; r++) n[r] = e.HEAPF32[t / 4 + r];
                        return n;
                    }
                    function h(e, t) {
                        return u(e, 'HEAPF32', t || F);
                    }
                    function p(e, t) {
                        return u(e, 'HEAPF32', t || L);
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
                                Yd: null,
                                subarray: function (e, t) {
                                    return ((e = this.toTypedArray().subarray(e, t))._ck = !0), e;
                                },
                                toTypedArray: function () {
                                    return (
                                        (this.Yd && this.Yd.length) ||
                                            ((this.Yd = new t(e.HEAPU8.buffer, r, n)), (this.Yd._ck = !0)),
                                        this.Yd
                                    );
                                },
                            };
                        }),
                        (e.Free = function (t) {
                            e._free(t.byteOffset), (t.byteOffset = G), (t.toTypedArray = null), (t.Yd = null);
                        });
                    var y,
                        m,
                        g,
                        v,
                        _,
                        b,
                        P,
                        A,
                        w,
                        C,
                        T = G,
                        S = G,
                        E = G,
                        F = G,
                        x = G,
                        k = G,
                        H = G,
                        B = G,
                        L = G,
                        D = G,
                        U = Float32Array.of(0, 0, 1),
                        G = 0;
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
                        (g = e.Malloc(Float32Array, 4)),
                            (E = g.byteOffset),
                            (m = e.Malloc(Float32Array, 16)),
                            (S = m.byteOffset),
                            (y = e.Malloc(Float32Array, 9)),
                            (T = y.byteOffset),
                            (w = e.Malloc(Float32Array, 12)),
                            (L = w.byteOffset),
                            (C = e.Malloc(Float32Array, 12)),
                            (D = C.byteOffset),
                            (v = e.Malloc(Float32Array, 4)),
                            (F = v.byteOffset),
                            (_ = e.Malloc(Float32Array, 4)),
                            (x = _.byteOffset),
                            (b = e.Malloc(Float32Array, 3)),
                            (k = b.byteOffset),
                            (P = e.Malloc(Float32Array, 3)),
                            (H = P.byteOffset),
                            (A = e.Malloc(Int32Array, 4)),
                            (B = A.byteOffset),
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
                                this._computeTightBounds(F);
                                var t = v.toTypedArray();
                                return e ? (e.set(t), e) : t.slice();
                            }),
                            (e.Path.prototype.cubicTo = function (e, t, n, r, a, o) {
                                return this._cubicTo(e, t, n, r, a, o), this;
                            }),
                            (e.Path.prototype.dash = function (e, t, n) {
                                return this._dash(e, t, n) ? this : null;
                            }),
                            (e.Path.prototype.getBounds = function (e) {
                                this._getBounds(F);
                                var t = v.toTypedArray();
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
                                var r = e.le();
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
                                return t(this, n, r, a, o, i, e.le());
                            }),
                            (e.Canvas.prototype.clear = function (t) {
                                e.Jd(this.Id), (t = l(t)), this._clear(t);
                            }),
                            (e.Canvas.prototype.clipRRect = function (t, n, r) {
                                e.Jd(this.Id), (t = p(t)), this._clipRRect(t, n, r);
                            }),
                            (e.Canvas.prototype.clipRect = function (t, n, r) {
                                e.Jd(this.Id), (t = h(t)), this._clipRect(t, n, r);
                            }),
                            (e.Canvas.prototype.concat = function (t) {
                                e.Jd(this.Id),
                                    (t = (function (e) {
                                        if (!e) return G;
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
                                e.Jd(this.Id), (t = h(t)), this._drawArc(t, n, r, a, o);
                            }),
                            (e.Canvas.prototype.drawAtlas = function (t, n, a, o, c, f, l) {
                                if (t && o && n && a && n.length === a.length) {
                                    e.Jd(this.Id), c || (c = e.BlendMode.SrcOver);
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
                                e.Jd(this.Id), this._drawCircle(t, n, r, a);
                            }),
                            (e.Canvas.prototype.drawColor = function (t, n) {
                                e.Jd(this.Id), (t = l(t)), void 0 !== n ? this._drawColor(t, n) : this._drawColor(t);
                            }),
                            (e.Canvas.prototype.drawColorInt = function (t, n) {
                                e.Jd(this.Id), this._drawColorInt(t, n || e.BlendMode.SrcOver);
                            }),
                            (e.Canvas.prototype.drawColorComponents = function (t, n, r, a, o) {
                                e.Jd(this.Id),
                                    (t = s(t, n, r, a)),
                                    void 0 !== o ? this._drawColor(t, o) : this._drawColor(t);
                            }),
                            (e.Canvas.prototype.drawDRRect = function (t, n, r) {
                                e.Jd(this.Id), (t = p(t, L)), (n = p(n, D)), this._drawDRRect(t, n, r);
                            }),
                            (e.Canvas.prototype.drawImage = function (t, n, r, a) {
                                e.Jd(this.Id), this._drawImage(t, n, r, a || null);
                            }),
                            (e.Canvas.prototype.drawImageCubic = function (t, n, r, a, o, i) {
                                e.Jd(this.Id), this._drawImageCubic(t, n, r, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawImageOptions = function (t, n, r, a, o, i) {
                                e.Jd(this.Id), this._drawImageOptions(t, n, r, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawImageNine = function (t, n, r, a, o) {
                                e.Jd(this.Id),
                                    (n = u(n, 'HEAP32', B)),
                                    (r = h(r)),
                                    this._drawImageNine(t, n, r, a, o || null);
                            }),
                            (e.Canvas.prototype.drawImageRect = function (t, n, r, a, o) {
                                e.Jd(this.Id), h(n, F), h(r, x), this._drawImageRect(t, F, x, a, !!o);
                            }),
                            (e.Canvas.prototype.drawImageRectCubic = function (t, n, r, a, o, i) {
                                e.Jd(this.Id), h(n, F), h(r, x), this._drawImageRectCubic(t, F, x, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawImageRectOptions = function (t, n, r, a, o, i) {
                                e.Jd(this.Id), h(n, F), h(r, x), this._drawImageRectOptions(t, F, x, a, o, i || null);
                            }),
                            (e.Canvas.prototype.drawLine = function (t, n, r, a, o) {
                                e.Jd(this.Id), this._drawLine(t, n, r, a, o);
                            }),
                            (e.Canvas.prototype.drawOval = function (t, n) {
                                e.Jd(this.Id), (t = h(t)), this._drawOval(t, n);
                            }),
                            (e.Canvas.prototype.drawPaint = function (t) {
                                e.Jd(this.Id), this._drawPaint(t);
                            }),
                            (e.Canvas.prototype.drawParagraph = function (t, n, r) {
                                e.Jd(this.Id), this._drawParagraph(t, n, r);
                            }),
                            (e.Canvas.prototype.drawPatch = function (t, n, a, o, c) {
                                if (24 > t.length) throw 'Need 12 cubic points';
                                if (n && 4 > n.length) throw 'Need 4 colors';
                                if (a && 8 > a.length) throw 'Need 4 shader coordinates';
                                e.Jd(this.Id);
                                const f = u(t, 'HEAPF32'),
                                    l = n ? u(r(n), 'HEAPU32') : G,
                                    s = a ? u(a, 'HEAPF32') : G;
                                o || (o = e.BlendMode.Modulate),
                                    this._drawPatch(f, l, s, o, c),
                                    i(s, a),
                                    i(l, n),
                                    i(f, t);
                            }),
                            (e.Canvas.prototype.drawPath = function (t, n) {
                                e.Jd(this.Id), this._drawPath(t, n);
                            }),
                            (e.Canvas.prototype.drawPicture = function (t) {
                                e.Jd(this.Id), this._drawPicture(t);
                            }),
                            (e.Canvas.prototype.drawPoints = function (t, n, r) {
                                e.Jd(this.Id);
                                var a = u(n, 'HEAPF32');
                                this._drawPoints(t, a, n.length / 2, r), i(a, n);
                            }),
                            (e.Canvas.prototype.drawRRect = function (t, n) {
                                e.Jd(this.Id), (t = p(t)), this._drawRRect(t, n);
                            }),
                            (e.Canvas.prototype.drawRect = function (t, n) {
                                e.Jd(this.Id), (t = h(t)), this._drawRect(t, n);
                            }),
                            (e.Canvas.prototype.drawRect4f = function (t, n, r, a, o) {
                                e.Jd(this.Id), this._drawRect4f(t, n, r, a, o);
                            }),
                            (e.Canvas.prototype.drawShadow = function (t, n, r, a, o, c, f) {
                                e.Jd(this.Id);
                                var l = u(o, 'HEAPF32'),
                                    s = u(c, 'HEAPF32');
                                (n = u(n, 'HEAPF32', k)),
                                    (r = u(r, 'HEAPF32', H)),
                                    this._drawShadow(t, n, r, a, l, s, f),
                                    i(l, o),
                                    i(s, c);
                            }),
                            (e.getShadowLocalBounds = function (e, t, n, r, a, o, i) {
                                return (
                                    (e = f(e)),
                                    (n = u(n, 'HEAPF32', k)),
                                    (r = u(r, 'HEAPF32', H)),
                                    this._getShadowLocalBounds(e, t, n, r, a, o, F)
                                        ? ((t = v.toTypedArray()), i ? (i.set(t), i) : t.slice())
                                        : null
                                );
                            }),
                            (e.Canvas.prototype.drawTextBlob = function (t, n, r, a) {
                                e.Jd(this.Id), this._drawTextBlob(t, n, r, a);
                            }),
                            (e.Canvas.prototype.drawVertices = function (t, n, r) {
                                e.Jd(this.Id), this._drawVertices(t, n, r);
                            }),
                            (e.Canvas.prototype.getDeviceClipBounds = function (e) {
                                this._getDeviceClipBounds(B);
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
                                return ((e = this._makeSurface(e)).Id = this.Id), e;
                            }),
                            (e.Canvas.prototype.readPixels = function (n, r, a, o, i) {
                                return e.Jd(this.Id), t(this, n, r, a, o, i);
                            }),
                            (e.Canvas.prototype.saveLayer = function (e, t, n, r) {
                                return (t = h(t)), this._saveLayer(e || null, t, n || null, r || 0);
                            }),
                            (e.Canvas.prototype.writePixels = function (t, n, r, a, o, c, f, l) {
                                if (t.byteLength % (n * r))
                                    throw 'pixels length must be a multiple of the srcWidth * srcHeight';
                                e.Jd(this.Id);
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
                                return this._getPosTan(e, F), (e = v.toTypedArray()), t ? (t.set(e), t) : e.slice();
                            }),
                            (e.ImageFilter.MakeDropShadow = function (t, n, r, a, o, i) {
                                return (o = l(o, E)), e.ImageFilter._MakeDropShadow(t, n, r, a, o, i);
                            }),
                            (e.ImageFilter.MakeDropShadowOnly = function (t, n, r, a, o, i) {
                                return (o = l(o, E)), e.ImageFilter._MakeDropShadowOnly(t, n, r, a, o, i);
                            }),
                            (e.ImageFilter.MakeImage = function (t, n, r, a) {
                                if (((r = h(r, F)), (a = h(a, x)), 'B' in n && 'C' in n))
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
                                    this._getPoint(e, F),
                                    (e = v.toTypedArray()),
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
                                return (e.Id = this.Id), e;
                            }),
                            (e.Surface.prototype.makeImageSnapshot = function (t) {
                                return e.Jd(this.Id), (t = u(t, 'HEAP32', B)), this._makeImageSnapshot(t);
                            }),
                            (e.Surface.prototype.makeSurface = function (t) {
                                return e.Jd(this.Id), ((t = this._makeSurface(t)).Id = this.Id), t;
                            }),
                            (e.Surface.prototype.Pe = function (t, n) {
                                return (
                                    this.de || (this.de = this.getCanvas()),
                                    requestAnimationFrame(
                                        function () {
                                            e.Jd(this.Id), t(this.de), this.flush(n);
                                        }.bind(this)
                                    )
                                );
                            }),
                            e.Surface.prototype.requestAnimationFrame ||
                                (e.Surface.prototype.requestAnimationFrame = e.Surface.prototype.Pe),
                            (e.Surface.prototype.Me = function (t, n) {
                                this.de || (this.de = this.getCanvas()),
                                    requestAnimationFrame(
                                        function () {
                                            e.Jd(this.Id), t(this.de), this.flush(n), this.dispose();
                                        }.bind(this)
                                    );
                            }),
                            e.Surface.prototype.drawOnce || (e.Surface.prototype.drawOnce = e.Surface.prototype.Me),
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
                                var y = v.toTypedArray();
                                return (
                                    y.set(t),
                                    y.set(n, 2),
                                    (t = e.Shader._MakeLinearGradient(F, h.Rd, h.fe, p, h.count, o, s, l, d)),
                                    i(h.Rd, r),
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
                                        h.Rd,
                                        h.fe,
                                        p,
                                        h.count,
                                        o,
                                        s,
                                        l,
                                        d
                                    )),
                                    i(h.Rd, r),
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
                                    (t = e.Shader._MakeSweepGradient(t, n, y.Rd, y.fe, m, y.count, o, d, h, s, l, p)),
                                    i(y.Rd, r),
                                    a && i(m, a),
                                    t
                                );
                            }),
                            (e.Shader.MakeTwoPointConicalGradient = function (t, n, r, a, o, l, s, d, h, p) {
                                p = p || null;
                                var y = c(o),
                                    m = u(l, 'HEAPF32');
                                (h = h || 0), (d = f(d));
                                var g = v.toTypedArray();
                                return (
                                    g.set(t),
                                    g.set(r, 2),
                                    (t = e.Shader._MakeTwoPointConicalGradient(
                                        F,
                                        n,
                                        a,
                                        y.Rd,
                                        y.fe,
                                        m,
                                        y.count,
                                        s,
                                        h,
                                        d,
                                        p
                                    )),
                                    i(y.Rd, o),
                                    l && i(m, l),
                                    t
                                );
                            }),
                            (e.Vertices.prototype.bounds = function (e) {
                                this._bounds(F);
                                var t = v.toTypedArray();
                                return e ? (e.set(t), e) : t.slice();
                            }),
                            e.Md &&
                                e.Md.forEach(function (e) {
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
                    var j,
                        O = null;
                    (e.MakeImageFromCanvasImageSource = function (t) {
                        var n = t.width,
                            r = t.height;
                        O || (O = document.createElement('canvas')), (O.width = n), (O.height = r);
                        var a = O.getContext('2d', { Kf: !0 });
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
                        ((j = n).Md = j.Md || []),
                        j.Md.push(function () {
                            function e(e) {
                                if (!e || !e.length) return [];
                                for (var t = [], n = 0; n < e.length; n += 5) {
                                    var r = j.LTRBRect(e[n], e[n + 1], e[n + 2], e[n + 3]),
                                        a = j.TextDirection.LTR;
                                    0 === e[n + 4] && (a = j.TextDirection.RTL), t.push({ rect: r, dir: a });
                                }
                                return j._free(e.byteOffset), t;
                            }
                            function t(e) {
                                return (
                                    void 0 === (e = e || {}).weight && (e.weight = j.FontWeight.Normal),
                                    (e.width = e.width || j.FontWidth.Normal),
                                    (e.slant = e.slant || j.FontSlant.Upright),
                                    e
                                );
                            }
                            function n(e) {
                                if (!e || !e.length) return G;
                                for (var t = [], n = 0; n < e.length; n++) {
                                    var a = r(e[n]);
                                    t.push(a);
                                }
                                return u(t, 'HEAPU32');
                            }
                            function r(e) {
                                if (f[e]) return f[e];
                                var t = M(e) + 1,
                                    n = j._malloc(t);
                                return I(e, R, n, t), (f[e] = n);
                            }
                            function a(e) {
                                if (
                                    ((e._colorPtr = l(e.color)),
                                    (e._foregroundColorPtr = G),
                                    (e._backgroundColorPtr = G),
                                    (e._decorationColorPtr = G),
                                    e.foregroundColor && (e._foregroundColorPtr = l(e.foregroundColor, s)),
                                    e.backgroundColor && (e._backgroundColorPtr = l(e.backgroundColor, d)),
                                    e.decorationColor && (e._decorationColorPtr = l(e.decorationColor, h)),
                                    Array.isArray(e.fontFamilies) && e.fontFamilies.length
                                        ? ((e._fontFamiliesPtr = n(e.fontFamilies)),
                                          (e._fontFamiliesLen = e.fontFamilies.length))
                                        : ((e._fontFamiliesPtr = G), (e._fontFamiliesLen = 0)),
                                    e.locale)
                                ) {
                                    var t = e.locale;
                                    (e._localePtr = r(t)), (e._localeLen = M(t) + 1);
                                } else (e._localePtr = G), (e._localeLen = 0);
                                if (Array.isArray(e.shadows) && e.shadows.length) {
                                    var a = (t = e.shadows).map(function (e) {
                                            return e.color || j.BLACK;
                                        }),
                                        o = t.map(function (e) {
                                            return e.blurRadius || 0;
                                        });
                                    e._shadowLen = t.length;
                                    for (var i = j._malloc(8 * t.length), f = i / 4, p = 0; p < t.length; p++) {
                                        var y = t[p].offset || [0, 0];
                                        (j.HEAPF32[f] = y[0]), (j.HEAPF32[f + 1] = y[1]), (f += 2);
                                    }
                                    (e._shadowColorsPtr = c(a).Rd),
                                        (e._shadowOffsetsPtr = i),
                                        (e._shadowBlurRadiiPtr = u(o, 'HEAPF32'));
                                } else
                                    (e._shadowLen = 0),
                                        (e._shadowColorsPtr = G),
                                        (e._shadowOffsetsPtr = G),
                                        (e._shadowBlurRadiiPtr = G);
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
                                      (e._fontFeatureNamesPtr = G),
                                      (e._fontFeatureValuesPtr = G)),
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
                                          (e._fontVariationAxesPtr = G),
                                          (e._fontVariationValuesPtr = G));
                            }
                            function o(e) {
                                j._free(e._fontFamiliesPtr),
                                    j._free(e._shadowColorsPtr),
                                    j._free(e._shadowOffsetsPtr),
                                    j._free(e._shadowBlurRadiiPtr),
                                    j._free(e._fontFeatureNamesPtr),
                                    j._free(e._fontFeatureValuesPtr),
                                    j._free(e._fontVariationAxesPtr),
                                    j._free(e._fontVariationValuesPtr);
                            }
                            (j.Paragraph.prototype.getRectsForRange = function (t, n, r, a) {
                                return e((t = this._getRectsForRange(t, n, r, a)));
                            }),
                                (j.Paragraph.prototype.getRectsForPlaceholders = function () {
                                    return e(this._getRectsForPlaceholders());
                                }),
                                (j.TypefaceFontProvider.prototype.registerFont = function (e, t) {
                                    if (!(e = j.Typeface.MakeFreeTypeFaceFromData(e))) return null;
                                    (t = r(t)), this._registerFont(e, t);
                                }),
                                (j.ParagraphStyle = function (e) {
                                    if (((e.disableHinting = e.disableHinting || !1), e.ellipsis)) {
                                        var a = e.ellipsis;
                                        (e._ellipsisPtr = r(a)), (e._ellipsisLen = M(a) + 1);
                                    } else (e._ellipsisPtr = G), (e._ellipsisLen = 0);
                                    return (
                                        null == e.heightMultiplier && (e.heightMultiplier = -1),
                                        (e.maxLines = e.maxLines || 0),
                                        (e.replaceTabCharacters = e.replaceTabCharacters || !1),
                                        ((a = (a = e.strutStyle) || {}).strutEnabled = a.strutEnabled || !1),
                                        a.strutEnabled && Array.isArray(a.fontFamilies) && a.fontFamilies.length
                                            ? ((a._fontFamiliesPtr = n(a.fontFamilies)),
                                              (a._fontFamiliesLen = a.fontFamilies.length))
                                            : ((a._fontFamiliesPtr = G), (a._fontFamiliesLen = 0)),
                                        (a.fontStyle = t(a.fontStyle)),
                                        null == a.fontSize && (a.fontSize = -1),
                                        null == a.heightMultiplier && (a.heightMultiplier = -1),
                                        (a.halfLeading = a.halfLeading || !1),
                                        (a.leading = a.leading || 0),
                                        (a.forceStrutHeight = a.forceStrutHeight || !1),
                                        (e.strutStyle = a),
                                        (e.textAlign = e.textAlign || j.TextAlign.Start),
                                        (e.textDirection = e.textDirection || j.TextDirection.LTR),
                                        (e.textHeightBehavior = e.textHeightBehavior || j.TextHeightBehavior.All),
                                        (e.textStyle = j.TextStyle(e.textStyle)),
                                        e
                                    );
                                }),
                                (j.TextStyle = function (e) {
                                    return (
                                        e.color || (e.color = j.BLACK),
                                        (e.decoration = e.decoration || 0),
                                        (e.decorationThickness = e.decorationThickness || 0),
                                        (e.decorationStyle = e.decorationStyle || j.DecorationStyle.Solid),
                                        (e.textBaseline = e.textBaseline || j.TextBaseline.Alphabetic),
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
                                s = j._malloc(16),
                                d = j._malloc(16),
                                h = j._malloc(16);
                            (j.ParagraphBuilder.Make = function (e, t) {
                                return a(e.textStyle), (t = j.ParagraphBuilder._Make(e, t)), o(e.textStyle), t;
                            }),
                                (j.ParagraphBuilder.MakeFromFontProvider = function (e, t) {
                                    return (
                                        a(e.textStyle),
                                        (t = j.ParagraphBuilder._MakeFromFontProvider(e, t)),
                                        o(e.textStyle),
                                        t
                                    );
                                }),
                                (j.ParagraphBuilder.MakeFromFontCollection = function (e, t) {
                                    return (
                                        a(e.textStyle),
                                        (t = j.ParagraphBuilder._MakeFromFontCollection(e, t)),
                                        o(e.textStyle),
                                        t
                                    );
                                }),
                                (j.ParagraphBuilder.ShapeText = function (e, t, n) {
                                    let r = 0;
                                    for (const e of t) r += e.length;
                                    if (r !== e.length) throw 'Accumulated block lengths must equal text.length';
                                    return j.ParagraphBuilder._ShapeText(e, t, n);
                                }),
                                (j.ParagraphBuilder.prototype.pushStyle = function (e) {
                                    a(e), this._pushStyle(e), o(e);
                                }),
                                (j.ParagraphBuilder.prototype.pushPaintStyle = function (e, t, n) {
                                    a(e), this._pushPaintStyle(e, t, n), o(e);
                                }),
                                (j.ParagraphBuilder.prototype.addPlaceholder = function (e, t, n, r, a) {
                                    (n = n || j.PlaceholderAlignment.Baseline),
                                        (r = r || j.TextBaseline.Alphabetic),
                                        this._addPlaceholder(e || 0, t || 0, n, r, a || 0);
                                }),
                                (j.ParagraphBuilder.prototype.setWordsUtf8 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setWordsUtf8(t, (e && e.length) || 0), i(t, e);
                                }),
                                (j.ParagraphBuilder.prototype.setWordsUtf16 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setWordsUtf16(t, (e && e.length) || 0), i(t, e);
                                }),
                                (j.ParagraphBuilder.prototype.setGraphemeBreaksUtf8 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setGraphemeBreaksUtf8(t, (e && e.length) || 0), i(t, e);
                                }),
                                (j.ParagraphBuilder.prototype.setGraphemeBreaksUtf16 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setGraphemeBreaksUtf16(t, (e && e.length) || 0), i(t, e);
                                }),
                                (j.ParagraphBuilder.prototype.setLineBreaksUtf8 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setLineBreaksUtf8(t, (e && e.length) || 0), i(t, e);
                                }),
                                (j.ParagraphBuilder.prototype.setLineBreaksUtf16 = function (e) {
                                    var t = u(e, 'HEAPU32');
                                    this._setLineBreaksUtf16(t, (e && e.length) || 0), i(t, e);
                                });
                        }),
                        (e.Md = e.Md || []),
                        e.Md.push(function () {
                            (e.Path.prototype.op = function (e, t) {
                                return this._op(e, t) ? this : null;
                            }),
                                (e.Path.prototype.simplify = function () {
                                    return this._simplify() ? this : null;
                                });
                        }),
                        (e.Md = e.Md || []),
                        e.Md.push(function () {
                            (e.Canvas.prototype.drawText = function (t, n, r, a, o) {
                                var i = M(t),
                                    u = e._malloc(i + 1);
                                I(t, R, u, i + 1), this._drawSimpleText(u, i, n, r, o, a), e._free(u);
                            }),
                                (e.Canvas.prototype.drawGlyphs = function (t, n, r, a, o, c) {
                                    if (!(2 * t.length <= n.length))
                                        throw 'Not enough positions for the array of gyphs';
                                    e.Jd(this.Id);
                                    const f = u(t, 'HEAPU16'),
                                        l = u(n, 'HEAPF32');
                                    this._drawGlyphs(t.length, f, l, r, a, o, c), i(l, n), i(f, t);
                                }),
                                (e.Font.prototype.getGlyphBounds = function (t, n, r) {
                                    var a = u(t, 'HEAPU16'),
                                        o = e._malloc(16 * t.length);
                                    return (
                                        this._getGlyphWidthBounds(a, t.length, G, o, n || null),
                                        (n = new Float32Array(e.HEAPU8.buffer, o, 4 * t.length)),
                                        i(a, t),
                                        r ? (r.set(n), e._free(o), r) : ((t = Float32Array.from(n)), e._free(o), t)
                                    );
                                }),
                                (e.Font.prototype.getGlyphIDs = function (t, n, r) {
                                    n || (n = t.length);
                                    var a = M(t) + 1,
                                        o = e._malloc(a);
                                    return (
                                        I(t, R, o, a),
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
                                        this._getGlyphWidthBounds(a, t.length, o, G, n || null),
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
                                    var a = M(t) + 1,
                                        o = e._malloc(a);
                                    return (
                                        I(t, R, o, a),
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
                                    var a = M(t) + 1,
                                        o = e._malloc(a);
                                    return (
                                        I(t, R, o, a),
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
                                    var r = M(t) + 1,
                                        a = e._malloc(r);
                                    return (
                                        I(t, R, a, r),
                                        (t = e.TextBlob._MakeFromText(a, r - 1, n)),
                                        e._free(a),
                                        t || null
                                    );
                                }),
                                (e.MallocGlyphIDs = function (t) {
                                    return e.Malloc(Uint16Array, t);
                                });
                        }),
                        (e.Md = e.Md || []),
                        e.Md.push(function () {
                            e.MakePicture = function (t) {
                                t = new Uint8Array(t);
                                var n = e._malloc(t.byteLength);
                                return e.HEAPU8.set(t, n), (t = e._MakePicture(n, t.byteLength)) ? t : null;
                            };
                        }),
                        (e.Md = e.Md || []),
                        e.Md.push(function () {
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
                                    for (var o = [], i = 0; i < t.length; i++) o.push(t[i].Hd.Kd);
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
                g = 'function' == typeof importScripts,
                v =
                    'object' == typeof process &&
                    'object' == typeof process.versions &&
                    'string' == typeof process.versions.node,
                _ = '';
            v
                ? ((_ = g ? require('path').dirname(_) + '/' : __dirname + '/'),
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
                      if (C || 0 < Z) throw ((process.exitCode = e), t);
                      t instanceof Cn || P('exiting due to exception: ' + t), process.exit(e);
                  }),
                  (n.inspect = function () {
                      return '[Emscripten Module object]';
                  }))
                : (m || g) &&
                  (g
                      ? (_ = self.location.href)
                      : 'undefined' != typeof document && document.currentScript && (_ = document.currentScript.src),
                  e && (_ = e),
                  (_ = 0 !== _.indexOf('blob:') ? _.substr(0, _.replace(/[?#].*/, '').lastIndexOf('/') + 1) : ''),
                  (u = e => {
                      var t = new XMLHttpRequest();
                      return t.open('GET', e, !1), t.send(null), t.responseText;
                  }),
                  g &&
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
            function F(e, t, n) {
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
            function x(e, t) {
                return e ? F(R, e, t) : '';
            }
            function I(e, t, n, r) {
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
            function M(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var r = e.charCodeAt(n);
                    55296 <= r && 57343 >= r && (r = (65536 + ((1023 & r) << 10)) | (1023 & e.charCodeAt(++n))),
                        127 >= r ? ++t : (t = 2047 >= r ? t + 2 : 65535 >= r ? t + 3 : t + 4);
                }
                return t;
            }
            var k,
                H,
                R,
                B,
                L,
                D,
                U,
                G,
                j,
                O = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0;
            function W(e, t) {
                for (var n = e >> 1, r = n + t / 2; !(n >= r) && L[n]; ) ++n;
                if (32 < (n <<= 1) - e && O) return O.decode(R.subarray(e, n));
                for (n = '', r = 0; !(r >= t / 2); ++r) {
                    var a = B[(e + 2 * r) >> 1];
                    if (0 == a) break;
                    n += String.fromCharCode(a);
                }
                return n;
            }
            function N(e, t, n) {
                if ((void 0 === n && (n = 2147483647), 2 > n)) return 0;
                var r = t;
                n = (n -= 2) < 2 * e.length ? n / 2 : e.length;
                for (var a = 0; a < n; ++a) (B[t >> 1] = e.charCodeAt(a)), (t += 2);
                return (B[t >> 1] = 0), t - r;
            }
            function V(e) {
                return 2 * e.length;
            }
            function $(e, t) {
                for (var n = 0, r = ''; !(n >= t / 4); ) {
                    var a = D[(e + 4 * n) >> 2];
                    if (0 == a) break;
                    ++n,
                        65536 <= a
                            ? ((a -= 65536), (r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))))
                            : (r += String.fromCharCode(a));
                }
                return r;
            }
            function J(e, t, n) {
                if ((void 0 === n && (n = 2147483647), 4 > n)) return 0;
                var r = t;
                n = r + n - 4;
                for (var a = 0; a < e.length; ++a) {
                    var o = e.charCodeAt(a);
                    if (
                        (55296 <= o && 57343 >= o && (o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++a))),
                        (D[t >> 2] = o),
                        (t += 4) + 4 > n)
                    )
                        break;
                }
                return (D[t >> 2] = 0), t - r;
            }
            function Y(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var r = e.charCodeAt(n);
                    55296 <= r && 57343 >= r && ++n, (t += 4);
                }
                return t;
            }
            function K() {
                var e = T.buffer;
                (k = e),
                    (n.HEAP8 = H = new Int8Array(e)),
                    (n.HEAP16 = B = new Int16Array(e)),
                    (n.HEAP32 = D = new Int32Array(e)),
                    (n.HEAPU8 = R = new Uint8Array(e)),
                    (n.HEAPU16 = L = new Uint16Array(e)),
                    (n.HEAPU32 = U = new Uint32Array(e)),
                    (n.HEAPF32 = G = new Float32Array(e)),
                    (n.HEAPF64 = j = new Float64Array(e));
            }
            var X,
                z = [],
                q = [],
                Q = [],
                Z = 0;
            function ee() {
                var e = n.preRun.shift();
                z.unshift(e);
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
                        var r = t.Ef;
                        'number' == typeof r
                            ? void 0 === t.ve
                                ? le(r)()
                                : le(r)(t.ve)
                            : r(void 0 === t.ve ? null : t.ve);
                    }
                }
            }
            function le(e) {
                return X.get(e);
            }
            function se(e) {
                (this.Kd = e - 16),
                    (this.uf = function (e) {
                        D[(this.Kd + 4) >> 2] = e;
                    }),
                    (this.rf = function (e) {
                        D[(this.Kd + 8) >> 2] = e;
                    }),
                    (this.sf = function () {
                        D[this.Kd >> 2] = 0;
                    }),
                    (this.qf = function () {
                        H[(this.Kd + 12) >> 0] = 0;
                    }),
                    (this.tf = function () {
                        H[(this.Kd + 13) >> 0] = 0;
                    }),
                    (this.gf = function (e, t) {
                        this.uf(e), this.rf(t), this.sf(), this.qf(), this.tf();
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
            function ge(e) {
                return this.fromWireType(U[e >> 2]);
            }
            var ve = {},
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
                    for (var r = 0; r < e.length; ++r) ke(e[r], t[r]);
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
                          ve.hasOwnProperty(e) || (ve[e] = []),
                          ve[e].push(function () {
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
            var Fe = void 0;
            function xe(e) {
                for (var t = ''; R[e]; ) t += Fe[R[e++]];
                return t;
            }
            var Ie = void 0;
            function Me(e) {
                throw new Ie(e);
            }
            function ke(e, t, n = {}) {
                if (!('argPackAdvance' in t))
                    throw new TypeError('registerType registeredInstance requires argPackAdvance');
                var r = t.name;
                if ((e || Me('type "' + r + '" must have a positive integer typeid pointer'), _e.hasOwnProperty(e))) {
                    if (n.ff) return;
                    Me("Cannot register type '" + r + "' twice");
                }
                (_e[e] = t),
                    delete be[e],
                    ve.hasOwnProperty(e) &&
                        ((t = ve[e]),
                        delete ve[e],
                        t.forEach(function (e) {
                            e();
                        }));
            }
            function He(e) {
                Me(e.Hd.Nd.Ld.name + ' instance already deleted');
            }
            var Re = !1;
            function Be() {}
            function Le(e) {
                --e.count.value, 0 === e.count.value && (e.Pd ? e.Td.Wd(e.Pd) : e.Nd.Ld.Wd(e.Kd));
            }
            function De(e) {
                return 'undefined' == typeof FinalizationGroup
                    ? ((De = e => e), e)
                    : ((Re = new FinalizationGroup(function (e) {
                          for (var t = e.next(); !t.done; t = e.next())
                              (t = t.value).Kd ? Le(t) : console.warn('object already deleted: ' + t.Kd);
                      })),
                      (Be = e => {
                          Re.unregister(e.Hd);
                      }),
                      (De = e => (Re.register(e, e.Hd, e.Hd), e))(e));
            }
            var Ue = void 0,
                Ge = [];
            function je() {
                for (; Ge.length; ) {
                    var e = Ge.pop();
                    (e.Hd.ae = !1), e.delete();
                }
            }
            function Oe() {}
            var We = {};
            function Ne(e, t, n) {
                if (void 0 === e[t].Od) {
                    var r = e[t];
                    (e[t] = function () {
                        return (
                            e[t].Od.hasOwnProperty(arguments.length) ||
                                Me(
                                    "Function '" +
                                        n +
                                        "' called with an invalid number of arguments (" +
                                        arguments.length +
                                        ') - expects one of (' +
                                        e[t].Od +
                                        ')!'
                                ),
                            e[t].Od[arguments.length].apply(this, arguments)
                        );
                    }),
                        (e[t].Od = []),
                        (e[t].Od[r.Zd] = r);
                }
            }
            function Ve(e, t, r) {
                n.hasOwnProperty(e)
                    ? ((void 0 === r || (void 0 !== n[e].Od && void 0 !== n[e].Od[r])) &&
                          Me("Cannot register public name '" + e + "' twice"),
                      Ne(n, e, e),
                      n.hasOwnProperty(r) &&
                          Me(
                              'Cannot register multiple overloads of a function with the same number of arguments (' +
                                  r +
                                  ')!'
                          ),
                      (n[e].Od[r] = t))
                    : ((n[e] = t), void 0 !== r && (n[e].Gf = r));
            }
            function $e(e, t, n, r, a, o, i, u) {
                (this.name = e),
                    (this.constructor = t),
                    (this.be = n),
                    (this.Wd = r),
                    (this.Vd = a),
                    (this.Ze = o),
                    (this.je = i),
                    (this.We = u),
                    (this.nf = []);
            }
            function Je(e, t, n) {
                for (; t !== n; )
                    t.je || Me('Expected null or instance of ' + n.name + ', got an instance of ' + t.name),
                        (e = t.je(e)),
                        (t = t.Vd);
                return e;
            }
            function Ye(e, t) {
                return null === t
                    ? (this.ye && Me('null is not a valid ' + this.name), 0)
                    : (t.Hd || Me('Cannot pass "' + pt(t) + '" as a ' + this.name),
                      t.Hd.Kd || Me('Cannot pass deleted object as a pointer of type ' + this.name),
                      Je(t.Hd.Kd, t.Hd.Nd.Ld, this.Ld));
            }
            function Ke(e, t) {
                if (null === t) {
                    if ((this.ye && Me('null is not a valid ' + this.name), this.ne)) {
                        var n = this.ze();
                        return null !== e && e.push(this.Wd, n), n;
                    }
                    return 0;
                }
                if (
                    (t.Hd || Me('Cannot pass "' + pt(t) + '" as a ' + this.name),
                    t.Hd.Kd || Me('Cannot pass deleted object as a pointer of type ' + this.name),
                    !this.me &&
                        t.Hd.Nd.me &&
                        Me(
                            'Cannot convert argument of type ' +
                                (t.Hd.Td ? t.Hd.Td.name : t.Hd.Nd.name) +
                                ' to parameter type ' +
                                this.name
                        ),
                    (n = Je(t.Hd.Kd, t.Hd.Nd.Ld, this.Ld)),
                    this.ne)
                )
                    switch ((void 0 === t.Hd.Pd && Me('Passing raw pointer to smart pointer is illegal'), this.yf)) {
                        case 0:
                            t.Hd.Td === this
                                ? (n = t.Hd.Pd)
                                : Me(
                                      'Cannot convert argument of type ' +
                                          (t.Hd.Td ? t.Hd.Td.name : t.Hd.Nd.name) +
                                          ' to parameter type ' +
                                          this.name
                                  );
                            break;
                        case 1:
                            n = t.Hd.Pd;
                            break;
                        case 2:
                            if (t.Hd.Td === this) n = t.Hd.Pd;
                            else {
                                var r = t.clone();
                                (n = this.pf(
                                    n,
                                    st(function () {
                                        r.delete();
                                    })
                                )),
                                    null !== e && e.push(this.Wd, n);
                            }
                            break;
                        default:
                            Me('Unsupporting sharing policy');
                    }
                return n;
            }
            function Xe(e, t) {
                return null === t
                    ? (this.ye && Me('null is not a valid ' + this.name), 0)
                    : (t.Hd || Me('Cannot pass "' + pt(t) + '" as a ' + this.name),
                      t.Hd.Kd || Me('Cannot pass deleted object as a pointer of type ' + this.name),
                      t.Hd.Nd.me &&
                          Me('Cannot convert argument of type ' + t.Hd.Nd.name + ' to parameter type ' + this.name),
                      Je(t.Hd.Kd, t.Hd.Nd.Ld, this.Ld));
            }
            function ze(e, t, n) {
                return t === n ? e : void 0 === n.Vd || null === (e = ze(e, t, n.Vd)) ? null : n.We(e);
            }
            var qe = {};
            function Qe(e, t) {
                return (
                    (t.Nd && t.Kd) || Te('makeClassHandle requires ptr and ptrType'),
                    !!t.Td != !!t.Pd && Te('Both smartPtrType and smartPtr must be specified'),
                    (t.count = { value: 1 }),
                    De(Object.create(e, { Hd: { value: t } }))
                );
            }
            function Ze(e, t, n, r, a, o, i, u, c, f, l) {
                (this.name = e),
                    (this.Ld = t),
                    (this.ye = n),
                    (this.me = r),
                    (this.ne = a),
                    (this.mf = o),
                    (this.yf = i),
                    (this.Ie = u),
                    (this.ze = c),
                    (this.pf = f),
                    (this.Wd = l),
                    a || void 0 !== t.Vd ? (this.toWireType = Ke) : ((this.toWireType = r ? Ye : Xe), (this.Sd = null));
            }
            function et(e, t, r) {
                n.hasOwnProperty(e) || Te('Replacing nonexistant public symbol'),
                    void 0 !== n[e].Od && void 0 !== r ? (n[e].Od[r] = t) : ((n[e] = t), (n[e].Zd = r));
            }
            function tt(e, t) {
                var r = (e = xe(e)).includes('j')
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
                return 'function' != typeof r && Me('unknown function pointer with signature ' + e + ': ' + t), r;
            }
            var nt = void 0;
            function rt(e) {
                var t = xe((e = vn(e)));
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
                2 > o && Me("argTypes array size mismatch! Must at least get return value and 'this' types!");
                var i = null !== t[1] && null !== n,
                    u = !1;
                for (n = 1; n < t.length; ++n)
                    if (null !== t[n] && void 0 === t[n].Sd) {
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
                            Me(
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
                            null !== t[h].Sd && t[h].Sd(p);
                        }
                    return c ? t[0].fromWireType(o) : void 0;
                };
            }
            function it(e, t) {
                for (var n = [], r = 0; r < e; r++) n.push(D[(t >> 2) + r]);
                return n;
            }
            var ut = [],
                ct = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
            function ft(e) {
                4 < e && 0 == --ct[e].Ae && ((ct[e] = void 0), ut.push(e));
            }
            function lt(e) {
                return e || Me('Cannot use deleted val. handle = ' + e), ct[e].value;
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
                        return (ct[t] = { Ae: 1, value: e }), t;
                }
            }
            function dt(e, t, n) {
                switch (t) {
                    case 0:
                        return function (e) {
                            return this.fromWireType((n ? H : R)[e]);
                        };
                    case 1:
                        return function (e) {
                            return this.fromWireType((n ? B : L)[e >> 1]);
                        };
                    case 2:
                        return function (e) {
                            return this.fromWireType((n ? D : U)[e >> 2]);
                        };
                    default:
                        throw new TypeError('Unknown integer type: ' + e);
                }
            }
            function ht(e, t) {
                var n = _e[e];
                return void 0 === n && Me(t + ' has unknown type ' + rt(e)), n;
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
                            return this.fromWireType(G[e >> 2]);
                        };
                    case 3:
                        return function (e) {
                            return this.fromWireType(j[e >> 3]);
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
                                  return H[e];
                              }
                            : function (e) {
                                  return R[e];
                              };
                    case 1:
                        return n
                            ? function (e) {
                                  return B[e >> 1];
                              }
                            : function (e) {
                                  return L[e >> 1];
                              };
                    case 2:
                        return n
                            ? function (e) {
                                  return D[e >> 2];
                              }
                            : function (e) {
                                  return U[e >> 2];
                              };
                    default:
                        throw new TypeError('Unknown integer type: ' + e);
                }
            }
            var gt = {};
            function vt(e) {
                var t = gt[e];
                return void 0 === t ? xe(e) : t;
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
            Pt = v
                ? () => {
                      var e = process.hrtime();
                      return 1e3 * e[0] + e[1] / 1e6;
                  }
                : () => performance.now();
            var Ct = 1,
                Tt = [],
                St = [],
                Et = [],
                Ft = [],
                xt = [],
                It = [],
                Mt = [],
                kt = [],
                Ht = [],
                Rt = [],
                Bt = {},
                Lt = {},
                Dt = 4;
            function Ut(e) {
                Wt || (Wt = e);
            }
            function Gt(e) {
                for (var t = Ct++, n = e.length; n < t; n++) e[n] = null;
                return t;
            }
            function jt(e) {
                return (Ot = kt[e]), (n.Df = ln = Ot && Ot.Ud), !(e && !ln);
            }
            var Ot,
                Wt,
                Nt = [];
            function Vt(e, t, n, r) {
                for (var a = 0; a < e; a++) {
                    var o = ln[n](),
                        i = o && Gt(r);
                    o ? ((o.name = i), (r[i] = o)) : Ut(1282), (D[(t + 4 * a) >> 2] = i);
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
                            return void (0 != n && 1 != n && Ut(1280));
                        case 34814:
                        case 36345:
                            r = 0;
                            break;
                        case 34466:
                            var a = ln.getParameter(34467);
                            r = a ? a.length : 0;
                            break;
                        case 33309:
                            if (2 > Ot.version) return void Ut(1282);
                            r = 2 * (ln.getSupportedExtensions() || []).length;
                            break;
                        case 33307:
                        case 33308:
                            if (2 > Ot.version) return void Ut(1280);
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
                                return void Ut(1280);
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
                                            return void Ut(1280);
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
                                                    D[(t + 4 * e) >> 2] = a[e];
                                                    break;
                                                case 2:
                                                    G[(t + 4 * e) >> 2] = a[e];
                                                    break;
                                                case 4:
                                                    H[(t + e) >> 0] = a[e] ? 1 : 0;
                                            }
                                        return;
                                    }
                                    try {
                                        r = 0 | a.name;
                                    } catch (t) {
                                        return (
                                            Ut(1280),
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
                                    Ut(1280),
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
                            (n = r), (U[t >> 2] = n), (U[(t + 4) >> 2] = (n - U[t >> 2]) / 4294967296);
                            break;
                        case 0:
                            D[t >> 2] = r;
                            break;
                        case 2:
                            G[t >> 2] = r;
                            break;
                        case 4:
                            H[t >> 0] = r ? 1 : 0;
                    }
                } else Ut(1281);
            }
            function Jt(e) {
                var t = M(e) + 1,
                    n = gn(t);
                return I(e, R, n, t), n;
            }
            function Yt(e) {
                return ']' == e.slice(-1) && e.lastIndexOf('[');
            }
            function Kt(e) {
                return 0 == (e -= 5120)
                    ? H
                    : 1 == e
                      ? R
                      : 2 == e
                        ? B
                        : 4 == e
                          ? D
                          : 6 == e
                            ? G
                            : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e
                              ? U
                              : L;
            }
            function Xt(e, t, n, r, a) {
                e = Kt(e);
                var o = 31 - Math.clz32(e.BYTES_PER_ELEMENT),
                    i = Dt;
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
            function zt(e) {
                var t = ln.Te;
                if (t) {
                    var n = t.ie[e];
                    return (
                        'number' == typeof n &&
                            (t.ie[e] = n = ln.getUniformLocation(t, t.Je[e] + (0 < n ? '[' + n + ']' : ''))),
                        n
                    );
                }
                Ut(1282);
            }
            var qt,
                Qt = [],
                Zt = [],
                en = {};
            function tn() {
                if (!qt) {
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
                    qt = n;
                }
                return qt;
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
            (Fe = cn),
                (Ie = n.BindingError = we('BindingError')),
                (Oe.prototype.isAliasOf = function (e) {
                    if (!(this instanceof Oe && e instanceof Oe)) return !1;
                    var t = this.Hd.Nd.Ld,
                        n = this.Hd.Kd,
                        r = e.Hd.Nd.Ld;
                    for (e = e.Hd.Kd; t.Vd; ) (n = t.je(n)), (t = t.Vd);
                    for (; r.Vd; ) (e = r.je(e)), (r = r.Vd);
                    return t === r && n === e;
                }),
                (Oe.prototype.clone = function () {
                    if ((this.Hd.Kd || He(this), this.Hd.ge)) return (this.Hd.count.value += 1), this;
                    var e = De,
                        t = Object,
                        n = t.create,
                        r = Object.getPrototypeOf(this),
                        a = this.Hd;
                    return (
                        ((e = e(
                            n.call(t, r, {
                                Hd: {
                                    value: {
                                        count: a.count,
                                        ae: a.ae,
                                        ge: a.ge,
                                        Kd: a.Kd,
                                        Nd: a.Nd,
                                        Pd: a.Pd,
                                        Td: a.Td,
                                    },
                                },
                            })
                        )).Hd.count.value += 1),
                        (e.Hd.ae = !1),
                        e
                    );
                }),
                (Oe.prototype.delete = function () {
                    this.Hd.Kd || He(this),
                        this.Hd.ae && !this.Hd.ge && Me('Object already scheduled for deletion'),
                        Be(this),
                        Le(this.Hd),
                        this.Hd.ge || ((this.Hd.Pd = void 0), (this.Hd.Kd = void 0));
                }),
                (Oe.prototype.isDeleted = function () {
                    return !this.Hd.Kd;
                }),
                (Oe.prototype.deleteLater = function () {
                    return (
                        this.Hd.Kd || He(this),
                        this.Hd.ae && !this.Hd.ge && Me('Object already scheduled for deletion'),
                        Ge.push(this),
                        1 === Ge.length && Ue && Ue(je),
                        (this.Hd.ae = !0),
                        this
                    );
                }),
                (Ze.prototype.$e = function (e) {
                    return this.Ie && (e = this.Ie(e)), e;
                }),
                (Ze.prototype.Ce = function (e) {
                    this.Wd && this.Wd(e);
                }),
                (Ze.prototype.argPackAdvance = 8),
                (Ze.prototype.readValueFromPointer = ge),
                (Ze.prototype.deleteObject = function (e) {
                    null !== e && e.delete();
                }),
                (Ze.prototype.fromWireType = function (e) {
                    function t() {
                        return this.ne
                            ? Qe(this.Ld.be, { Nd: this.mf, Kd: n, Td: this, Pd: e })
                            : Qe(this.Ld.be, { Nd: this, Kd: e });
                    }
                    var n = this.$e(e);
                    if (!n) return this.Ce(e), null;
                    var r = (function (e, t) {
                        for (void 0 === t && Me('ptr should not be undefined'); e.Vd; ) (t = e.je(t)), (e = e.Vd);
                        return qe[t];
                    })(this.Ld, n);
                    if (void 0 !== r)
                        return 0 === r.Hd.count.value
                            ? ((r.Hd.Kd = n), (r.Hd.Pd = e), r.clone())
                            : ((r = r.clone()), this.Ce(e), r);
                    if (((r = this.Ld.Ze(n)), !(r = We[r]))) return t.call(this);
                    r = this.me ? r.Se : r.pointerType;
                    var a = ze(n, this.Ld, r.Ld);
                    return null === a
                        ? t.call(this)
                        : this.ne
                          ? Qe(r.Ld.be, { Nd: r, Kd: a, Td: this, Pd: e })
                          : Qe(r.Ld.be, { Nd: r, Kd: a });
                }),
                (n.getInheritedInstanceCount = function () {
                    return Object.keys(qe).length;
                }),
                (n.getLiveInheritedInstances = function () {
                    var e,
                        t = [];
                    for (e in qe) qe.hasOwnProperty(e) && t.push(qe[e]);
                    return t;
                }),
                (n.flushPendingDeletes = je),
                (n.setDelayFunction = function (e) {
                    (Ue = e), Ge.length && Ue && Ue(je);
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
            for (sn = 0; 288 > sn; ++sn) Qt[sn] = dn.subarray(0, sn + 1);
            var hn = new Int32Array(288);
            for (sn = 0; 288 > sn; ++sn) Zt[sn] = hn.subarray(0, sn + 1);
            var pn = {
                K: function (e) {
                    return gn(e + 16) + 16;
                },
                J: function (e, t, n) {
                    throw (new se(e).gf(t, n), e);
                },
                W: function () {
                    return 0;
                },
                tb: function () {},
                rb: function () {},
                vb: function () {
                    return 0;
                },
                ob: function (e, t, n, r, a, o) {
                    if (((o <<= 12), 0 != (16 & r) && 0 != e % 65536)) t = -28;
                    else if (0 != (32 & r)) {
                        e = 65536 * Math.ceil(t / 65536);
                        var i = bn(65536, e);
                        i ? (R.fill(0, i, i + e), (e = i)) : (e = 0),
                            e
                                ? ((de[e] = { lf: e, kf: t, Re: !0, fd: a, Hf: n, flags: r, offset: o }), (t = e))
                                : (t = -48);
                    } else t = -52;
                    return t;
                },
                nb: function (e, t) {
                    var n = de[e];
                    return 0 !== t && n ? (t === n.kf && ((de[e] = null), n.Re && mn(n.lf)), (e = 0)) : (e = -28), e;
                },
                wb: function () {},
                sb: function () {},
                C: function (e) {
                    var t = ye[e];
                    delete ye[e];
                    var n = t.ze,
                        r = t.Wd,
                        a = t.Fe;
                    Se(
                        [e],
                        a
                            .map(function (e) {
                                return e.df;
                            })
                            .concat(
                                a.map(function (e) {
                                    return e.wf;
                                })
                            ),
                        function (e) {
                            var o = {};
                            return (
                                a.forEach(function (t, n) {
                                    var r = e[n],
                                        i = t.bf,
                                        u = t.cf,
                                        c = e[n + a.length],
                                        f = t.vf,
                                        l = t.xf;
                                    o[t.Ye] = {
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
                                        readValueFromPointer: ge,
                                        Sd: r,
                                    },
                                ]
                            );
                        }
                    );
                },
                ib: function () {},
                yb: function (e, t, n, r, a) {
                    var o = Ee(n);
                    ke(e, {
                        name: (t = xe(t)),
                        fromWireType: function (e) {
                            return !!e;
                        },
                        toWireType: function (e, t) {
                            return t ? r : a;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function (e) {
                            if (1 === n) var r = H;
                            else if (2 === n) r = B;
                            else {
                                if (4 !== n) throw new TypeError('Unknown boolean type size: ' + t);
                                r = D;
                            }
                            return this.fromWireType(r[e >> o]);
                        },
                        Sd: null,
                    });
                },
                n: function (e, t, n, r, a, o, i, u, c, f, l, s, d) {
                    (l = xe(l)), (o = tt(a, o)), u && (u = tt(i, u)), f && (f = tt(c, f)), (d = tt(s, d));
                    var h = Pe(l);
                    Ve(h, function () {
                        at('Cannot construct ' + l + ' due to unbound types', [r]);
                    }),
                        Se([e, t, n], r ? [r] : [], function (t) {
                            if (((t = t[0]), r))
                                var n = t.Ld,
                                    a = n.be;
                            else a = Oe.prototype;
                            t = Ae(h, function () {
                                if (Object.getPrototypeOf(this) !== i) throw new Ie("Use 'new' to construct " + l);
                                if (void 0 === c.Xd) throw new Ie(l + ' has no accessible constructor');
                                var e = c.Xd[arguments.length];
                                if (void 0 === e)
                                    throw new Ie(
                                        'Tried to invoke ctor of ' +
                                            l +
                                            ' with invalid number of parameters (' +
                                            arguments.length +
                                            ') - expected (' +
                                            Object.keys(c.Xd).toString() +
                                            ') parameters instead!'
                                    );
                                return e.apply(this, arguments);
                            });
                            var i = Object.create(a, { constructor: { value: t } });
                            t.prototype = i;
                            var c = new $e(l, t, i, d, n, o, u, f);
                            (n = new Ze(l, c, !0, !1, !1)), (a = new Ze(l + '*', c, !1, !1, !1));
                            var s = new Ze(l + ' const*', c, !1, !0, !1);
                            return (We[e] = { pointerType: a, Se: s }), et(h, t), [n, a, s];
                        });
                },
                g: function (e, t, n, r, a, o, i) {
                    var u = it(n, r);
                    (t = xe(t)),
                        (o = tt(a, o)),
                        Se([], [e], function (e) {
                            function r() {
                                at('Cannot call ' + a + ' due to unbound types', u);
                            }
                            var a = (e = e[0]).name + '.' + t;
                            t.startsWith('@@') && (t = Symbol[t.substring(2)]);
                            var c = e.Ld.constructor;
                            return (
                                void 0 === c[t] ? ((r.Zd = n - 1), (c[t] = r)) : (Ne(c, t, a), (c[t].Od[n - 1] = r)),
                                Se([], u, function (e) {
                                    return (
                                        (e = [e[0], null].concat(e.slice(1))),
                                        (e = ot(a, e, null, o, i)),
                                        void 0 === c[t].Od ? ((e.Zd = n - 1), (c[t] = e)) : (c[t].Od[n - 1] = e),
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
                            if ((void 0 === e.Ld.Xd && (e.Ld.Xd = []), void 0 !== e.Ld.Xd[t - 1]))
                                throw new Ie(
                                    'Cannot register multiple constructors with identical number of parameters (' +
                                        (t - 1) +
                                        ") for class '" +
                                        e.name +
                                        "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                                );
                            return (
                                (e.Ld.Xd[t - 1] = () => {
                                    at('Cannot construct ' + e.name + ' due to unbound types', i);
                                }),
                                Se([], i, function (r) {
                                    return r.splice(1, 0, null), (e.Ld.Xd[t - 1] = ot(n, r, null, a, o)), [];
                                }),
                                []
                            );
                        });
                },
                a: function (e, t, n, r, a, o, i, u) {
                    var c = it(n, r);
                    (t = xe(t)),
                        (o = tt(a, o)),
                        Se([], [e], function (e) {
                            function r() {
                                at('Cannot call ' + a + ' due to unbound types', c);
                            }
                            var a = (e = e[0]).name + '.' + t;
                            t.startsWith('@@') && (t = Symbol[t.substring(2)]), u && e.Ld.nf.push(t);
                            var f = e.Ld.be,
                                l = f[t];
                            return (
                                void 0 === l || (void 0 === l.Od && l.className !== e.name && l.Zd === n - 2)
                                    ? ((r.Zd = n - 2), (r.className = e.name), (f[t] = r))
                                    : (Ne(f, t, a), (f[t].Od[n - 2] = r)),
                                Se([], c, function (r) {
                                    return (
                                        (r = ot(a, r, e, o, i)),
                                        void 0 === f[t].Od ? ((r.Zd = n - 2), (f[t] = r)) : (f[t].Od[n - 2] = r),
                                        []
                                    );
                                }),
                                []
                            );
                        });
                },
                s: function (e, t, r) {
                    (e = xe(e)),
                        Se([], [t], function (t) {
                            return (t = t[0]), (n[e] = t.fromWireType(r)), [];
                        });
                },
                xb: function (e, t) {
                    ke(e, {
                        name: (t = xe(t)),
                        fromWireType: function (e) {
                            var t = lt(e);
                            return ft(e), t;
                        },
                        toWireType: function (e, t) {
                            return st(t);
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ge,
                        Sd: null,
                    });
                },
                k: function (e, t, n, r) {
                    function a() {}
                    (n = Ee(n)),
                        (t = xe(t)),
                        (a.values = {}),
                        ke(e, {
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
                            Sd: null,
                        }),
                        Ve(t, a);
                },
                d: function (e, t, n) {
                    var r = ht(e, 'enum');
                    (t = xe(t)),
                        (e = r.constructor),
                        (r = Object.create(r.constructor.prototype, {
                            value: { value: n },
                            constructor: { value: Ae(r.name + '_' + t, function () {}) },
                        })),
                        (e.values[n] = r),
                        (e[t] = r);
                },
                Z: function (e, t, n) {
                    (n = Ee(n)),
                        ke(e, {
                            name: (t = xe(t)),
                            fromWireType: function (e) {
                                return e;
                            },
                            toWireType: function (e, t) {
                                return t;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: yt(t, n),
                            Sd: null,
                        });
                },
                v: function (e, t, n, r, a, o) {
                    var i = it(t, n);
                    (e = xe(e)),
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
                    (t = xe(t)), -1 === a && (a = 4294967295), (a = Ee(n));
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
                        ke(e, {
                            name: t,
                            fromWireType: o,
                            toWireType: n,
                            argPackAdvance: 8,
                            readValueFromPointer: mt(t, a, 0 !== r),
                            Sd: null,
                        });
                },
                u: function (e, t, n) {
                    function r(e) {
                        var t = U;
                        return new a(k, t[1 + (e >>= 2)], t[e]);
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
                    ke(
                        e,
                        { name: (n = xe(n)), fromWireType: r, argPackAdvance: 8, readValueFromPointer: r },
                        { ff: !0 }
                    );
                },
                r: function (e, t, n, r, a, o, i, u, c, f, l, s) {
                    (n = xe(n)),
                        (o = tt(a, o)),
                        (u = tt(i, u)),
                        (f = tt(c, f)),
                        (s = tt(l, s)),
                        Se([e], [t], function (e) {
                            return (e = e[0]), [new Ze(n, e.Ld, !1, !1, !0, e, r, o, u, f, s)];
                        });
                },
                Y: function (e, t) {
                    var n = 'std::string' === (t = xe(t));
                    ke(e, {
                        name: t,
                        fromWireType: function (e) {
                            var t = U[e >> 2];
                            if (n)
                                for (var r = e + 4, a = 0; a <= t; ++a) {
                                    var o = e + 4 + a;
                                    if (a == t || 0 == R[o]) {
                                        if (((r = x(r, o - r)), void 0 === i)) var i = r;
                                        else (i += String.fromCharCode(0)), (i += r);
                                        r = o + 1;
                                    }
                                }
                            else {
                                for (i = Array(t), a = 0; a < t; ++a) i[a] = String.fromCharCode(R[e + 4 + a]);
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
                                Me('Cannot pass non-string to std::string');
                            var a = (n && r ? () => M(t) : () => t.length)(),
                                o = gn(4 + a + 1);
                            if (((U[o >> 2] = a), n && r)) I(t, R, o + 4, a + 1);
                            else if (r)
                                for (r = 0; r < a; ++r) {
                                    var i = t.charCodeAt(r);
                                    255 < i && (mn(o), Me('String has UTF-16 code units that do not fit in 8 bits')),
                                        (R[o + 4 + r] = i);
                                }
                            else for (r = 0; r < a; ++r) R[o + 4 + r] = t[r];
                            return null !== e && e.push(mn, o), o;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ge,
                        Sd: function (e) {
                            mn(e);
                        },
                    });
                },
                Q: function (e, t, n) {
                    if (((n = xe(n)), 2 === t))
                        var r = W,
                            a = N,
                            o = V,
                            i = () => L,
                            u = 1;
                    else 4 === t && ((r = $), (a = J), (o = Y), (i = () => U), (u = 2));
                    ke(e, {
                        name: n,
                        fromWireType: function (e) {
                            for (var n, a = U[e >> 2], o = i(), c = e + 4, f = 0; f <= a; ++f) {
                                var l = e + 4 + f * t;
                                (f != a && 0 != o[l >> u]) ||
                                    ((c = r(c, l - c)),
                                    void 0 === n ? (n = c) : ((n += String.fromCharCode(0)), (n += c)),
                                    (c = l + t));
                            }
                            return mn(e), n;
                        },
                        toWireType: function (e, r) {
                            'string' != typeof r && Me('Cannot pass non-string to C++ string type ' + n);
                            var i = o(r),
                                c = gn(4 + i + t);
                            return (U[c >> 2] = i >> u), a(r, c + 4, i + t), null !== e && e.push(mn, c), c;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: ge,
                        Sd: function (e) {
                            mn(e);
                        },
                    });
                },
                D: function (e, t, n, r, a, o) {
                    ye[e] = { name: xe(t), ze: tt(n, r), Wd: tt(a, o), Fe: [] };
                },
                f: function (e, t, n, r, a, o, i, u, c, f) {
                    ye[e].Fe.push({ Ye: xe(t), df: n, bf: tt(r, a), cf: o, wf: i, vf: tt(u, c), xf: f });
                },
                zb: function (e, t) {
                    ke(e, {
                        jf: !0,
                        name: (t = xe(t)),
                        argPackAdvance: 0,
                        fromWireType: function () {},
                        toWireType: function () {},
                    });
                },
                lb: function () {
                    throw 'longjmp';
                },
                I: function (e, t, n) {
                    (e = lt(e)), (t = ht(t, 'emval::as'));
                    var r = [],
                        a = st(r);
                    return (D[n >> 2] = a), t.toWireType(r, e);
                },
                L: function (e, t, n, r, a) {
                    (e = _t[e]), (t = lt(t)), (n = vt(n));
                    var o = [];
                    return (D[r >> 2] = st(o)), e(t, n, o, a);
                },
                B: function (e, t, n, r) {
                    (e = _t[e])((t = lt(t)), (n = vt(n)), null, r);
                },
                e: ft,
                N: function (e) {
                    return 0 === e ? st(bt()) : ((e = vt(e)), st(bt()[e]));
                },
                w: function (e, t) {
                    var n = (function (e, t) {
                            for (var n = Array(e), r = 0; r < e; ++r) n[r] = ht(D[(t >> 2) + r], 'parameter ' + r);
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
                            for (t = t[a].apply(t, o), f = 0; f < e - 1; ++f) n[f + 1].Ue && n[f + 1].Ue(o[f]);
                            if (!r.jf) return r.toWireType(i, t);
                        })),
                        (At[t] = a)
                    );
                },
                H: function (e, t) {
                    return st((e = lt(e))[(t = lt(t))]);
                },
                p: function (e) {
                    4 < e && (ct[e].Ae += 1);
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
                                        var i = ht(D[(r >> 2) + o], 'parameter ' + o);
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
                    return st(vt(e));
                },
                G: function () {
                    return st({});
                },
                eb: function (e) {
                    return !(e = lt(e));
                },
                F: function (e) {
                    me(lt(e)), ft(e);
                },
                j: function (e, t, n) {
                    (e = lt(e)), (t = lt(t)), (n = lt(n)), (e[t] = n);
                },
                i: function (e, t) {
                    return st((e = (e = ht(e, '_emval_take_value')).readValueFromPointer(t)));
                },
                m: function () {
                    oe('');
                },
                kb: function (e, t) {
                    if (0 === e) e = Date.now();
                    else {
                        if (1 !== e && 4 !== e) return (D[yn() >> 2] = 28), -1;
                        e = Pt();
                    }
                    return (D[t >> 2] = (e / 1e3) | 0), (D[(t + 4) >> 2] = ((e % 1e3) * 1e6) | 0), 0;
                },
                Sc: function (e) {
                    ln.activeTexture(e);
                },
                Tc: function (e, t) {
                    ln.attachShader(St[e], It[t]);
                },
                Uc: function (e, t, n) {
                    ln.bindAttribLocation(St[e], t, x(n));
                },
                Vc: function (e, t) {
                    35051 == e ? (ln.we = t) : 35052 == e && (ln.$d = t), ln.bindBuffer(e, Tt[t]);
                },
                ca: function (e, t) {
                    ln.bindFramebuffer(e, Et[t]);
                },
                Wb: function (e, t) {
                    ln.bindRenderbuffer(e, Ft[t]);
                },
                Gb: function (e, t) {
                    ln.bindSampler(e, Ht[t]);
                },
                Wc: function (e, t) {
                    ln.bindTexture(e, xt[t]);
                },
                oc: function (e) {
                    ln.bindVertexArray(Mt[e]);
                },
                rc: function (e) {
                    ln.bindVertexArray(Mt[e]);
                },
                Xc: function (e, t, n, r) {
                    ln.blendColor(e, t, n, r);
                },
                Yc: function (e) {
                    ln.blendEquation(e);
                },
                Zc: function (e, t) {
                    ln.blendFunc(e, t);
                },
                Qb: function (e, t, n, r, a, o, i, u, c, f) {
                    ln.blitFramebuffer(e, t, n, r, a, o, i, u, c, f);
                },
                _c: function (e, t, n, r) {
                    2 <= Ot.version
                        ? n
                            ? ln.bufferData(e, R, r, n, t)
                            : ln.bufferData(e, t, r)
                        : ln.bufferData(e, n ? R.subarray(n, n + t) : t, r);
                },
                $c: function (e, t, n, r) {
                    2 <= Ot.version ? ln.bufferSubData(e, t, R, r, n) : ln.bufferSubData(e, t, R.subarray(r, r + n));
                },
                Xb: function (e) {
                    return ln.checkFramebufferStatus(e);
                },
                T: function (e) {
                    ln.clear(e);
                },
                ba: function (e, t, n, r) {
                    ln.clearColor(e, t, n, r);
                },
                V: function (e) {
                    ln.clearStencil(e);
                },
                cb: function (e, t, n, r) {
                    return ln.clientWaitSync(Rt[e], t, (n >>> 0) + 4294967296 * r);
                },
                ad: function (e, t, n, r) {
                    ln.colorMask(!!e, !!t, !!n, !!r);
                },
                da: function (e) {
                    ln.compileShader(It[e]);
                },
                ea: function (e, t, n, r, a, o, i, u) {
                    2 <= Ot.version
                        ? ln.$d
                            ? ln.compressedTexImage2D(e, t, n, r, a, o, i, u)
                            : ln.compressedTexImage2D(e, t, n, r, a, o, R, u, i)
                        : ln.compressedTexImage2D(e, t, n, r, a, o, u ? R.subarray(u, u + i) : null);
                },
                fa: function (e, t, n, r, a, o, i, u, c) {
                    2 <= Ot.version
                        ? ln.$d
                            ? ln.compressedTexSubImage2D(e, t, n, r, a, o, i, u, c)
                            : ln.compressedTexSubImage2D(e, t, n, r, a, o, i, R, c, u)
                        : ln.compressedTexSubImage2D(e, t, n, r, a, o, i, c ? R.subarray(c, c + u) : null);
                },
                Ob: function (e, t, n, r, a) {
                    ln.copyBufferSubData(e, t, n, r, a);
                },
                ga: function (e, t, n, r, a, o, i, u) {
                    ln.copyTexSubImage2D(e, t, n, r, a, o, i, u);
                },
                ha: function () {
                    var e = Gt(St),
                        t = ln.createProgram();
                    return (t.name = e), (t.qe = t.oe = t.pe = 0), (t.Be = 1), (St[e] = t), e;
                },
                ia: function (e) {
                    var t = Gt(It);
                    return (It[t] = ln.createShader(e)), t;
                },
                ja: function (e) {
                    ln.cullFace(e);
                },
                ka: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = D[(t + 4 * n) >> 2],
                            a = Tt[r];
                        a &&
                            (ln.deleteBuffer(a),
                            (a.name = 0),
                            (Tt[r] = null),
                            r == ln.we && (ln.we = 0),
                            r == ln.$d && (ln.$d = 0));
                    }
                },
                Yb: function (e, t) {
                    for (var n = 0; n < e; ++n) {
                        var r = D[(t + 4 * n) >> 2],
                            a = Et[r];
                        a && (ln.deleteFramebuffer(a), (a.name = 0), (Et[r] = null));
                    }
                },
                la: function (e) {
                    if (e) {
                        var t = St[e];
                        t ? (ln.deleteProgram(t), (t.name = 0), (St[e] = null)) : Ut(1281);
                    }
                },
                Zb: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = D[(t + 4 * n) >> 2],
                            a = Ft[r];
                        a && (ln.deleteRenderbuffer(a), (a.name = 0), (Ft[r] = null));
                    }
                },
                Hb: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = D[(t + 4 * n) >> 2],
                            a = Ht[r];
                        a && (ln.deleteSampler(a), (a.name = 0), (Ht[r] = null));
                    }
                },
                ma: function (e) {
                    if (e) {
                        var t = It[e];
                        t ? (ln.deleteShader(t), (It[e] = null)) : Ut(1281);
                    }
                },
                Pb: function (e) {
                    if (e) {
                        var t = Rt[e];
                        t ? (ln.deleteSync(t), (t.name = 0), (Rt[e] = null)) : Ut(1281);
                    }
                },
                na: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = D[(t + 4 * n) >> 2],
                            a = xt[r];
                        a && (ln.deleteTexture(a), (a.name = 0), (xt[r] = null));
                    }
                },
                pc: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = D[(t + 4 * n) >> 2];
                        ln.deleteVertexArray(Mt[r]), (Mt[r] = null);
                    }
                },
                sc: function (e, t) {
                    for (var n = 0; n < e; n++) {
                        var r = D[(t + 4 * n) >> 2];
                        ln.deleteVertexArray(Mt[r]), (Mt[r] = null);
                    }
                },
                oa: function (e) {
                    ln.depthMask(!!e);
                },
                pa: function (e) {
                    ln.disable(e);
                },
                qa: function (e) {
                    ln.disableVertexAttribArray(e);
                },
                ra: function (e, t, n) {
                    ln.drawArrays(e, t, n);
                },
                mc: function (e, t, n, r) {
                    ln.drawArraysInstanced(e, t, n, r);
                },
                kc: function (e, t, n, r, a) {
                    ln.De.drawArraysInstancedBaseInstanceWEBGL(e, t, n, r, a);
                },
                ic: function (e, t) {
                    for (var n = Nt[e], r = 0; r < e; r++) n[r] = D[(t + 4 * r) >> 2];
                    ln.drawBuffers(n);
                },
                sa: function (e, t, n, r) {
                    ln.drawElements(e, t, n, r);
                },
                nc: function (e, t, n, r, a) {
                    ln.drawElementsInstanced(e, t, n, r, a);
                },
                lc: function (e, t, n, r, a, o, i) {
                    ln.De.drawElementsInstancedBaseVertexBaseInstanceWEBGL(e, t, n, r, a, o, i);
                },
                cc: function (e, t, n, r, a, o) {
                    ln.drawElements(e, r, a, o);
                },
                ta: function (e) {
                    ln.enable(e);
                },
                ua: function (e) {
                    ln.enableVertexAttribArray(e);
                },
                Mb: function (e, t) {
                    return (e = ln.fenceSync(e, t)) ? ((t = Gt(Rt)), (e.name = t), (Rt[t] = e), t) : 0;
                },
                va: function () {
                    ln.finish();
                },
                wa: function () {
                    ln.flush();
                },
                _b: function (e, t, n, r) {
                    ln.framebufferRenderbuffer(e, t, n, Ft[r]);
                },
                $b: function (e, t, n, r, a) {
                    ln.framebufferTexture2D(e, t, n, xt[r], a);
                },
                xa: function (e) {
                    ln.frontFace(e);
                },
                ya: function (e, t) {
                    Vt(e, t, 'createBuffer', Tt);
                },
                ac: function (e, t) {
                    Vt(e, t, 'createFramebuffer', Et);
                },
                bc: function (e, t) {
                    Vt(e, t, 'createRenderbuffer', Ft);
                },
                Ib: function (e, t) {
                    Vt(e, t, 'createSampler', Ht);
                },
                za: function (e, t) {
                    Vt(e, t, 'createTexture', xt);
                },
                qc: function (e, t) {
                    Vt(e, t, 'createVertexArray', Mt);
                },
                tc: function (e, t) {
                    Vt(e, t, 'createVertexArray', Mt);
                },
                Sb: function (e) {
                    ln.generateMipmap(e);
                },
                Aa: function (e, t, n) {
                    n ? (D[n >> 2] = ln.getBufferParameter(e, t)) : Ut(1281);
                },
                Ba: function () {
                    var e = ln.getError() || Wt;
                    return (Wt = 0), e;
                },
                Ca: function (e, t) {
                    $t(e, t, 2);
                },
                Tb: function (e, t, n, r) {
                    ((e = ln.getFramebufferAttachmentParameter(e, t, n)) instanceof WebGLRenderbuffer ||
                        e instanceof WebGLTexture) &&
                        (e = 0 | e.name),
                        (D[r >> 2] = e);
                },
                O: function (e, t) {
                    $t(e, t, 0);
                },
                Da: function (e, t, n, r) {
                    null === (e = ln.getProgramInfoLog(St[e])) && (e = '(unknown error)'),
                        (t = 0 < t && r ? I(e, R, r, t) : 0),
                        n && (D[n >> 2] = t);
                },
                Ea: function (e, t, n) {
                    if (n)
                        if (e >= Ct) Ut(1281);
                        else if (((e = St[e]), 35716 == t))
                            null === (e = ln.getProgramInfoLog(e)) && (e = '(unknown error)'),
                                (D[n >> 2] = e.length + 1);
                        else if (35719 == t) {
                            if (!e.qe)
                                for (t = 0; t < ln.getProgramParameter(e, 35718); ++t)
                                    e.qe = Math.max(e.qe, ln.getActiveUniform(e, t).name.length + 1);
                            D[n >> 2] = e.qe;
                        } else if (35722 == t) {
                            if (!e.oe)
                                for (t = 0; t < ln.getProgramParameter(e, 35721); ++t)
                                    e.oe = Math.max(e.oe, ln.getActiveAttrib(e, t).name.length + 1);
                            D[n >> 2] = e.oe;
                        } else if (35381 == t) {
                            if (!e.pe)
                                for (t = 0; t < ln.getProgramParameter(e, 35382); ++t)
                                    e.pe = Math.max(e.pe, ln.getActiveUniformBlockName(e, t).length + 1);
                            D[n >> 2] = e.pe;
                        } else D[n >> 2] = ln.getProgramParameter(e, t);
                    else Ut(1281);
                },
                Ub: function (e, t, n) {
                    n ? (D[n >> 2] = ln.getRenderbufferParameter(e, t)) : Ut(1281);
                },
                Fa: function (e, t, n, r) {
                    null === (e = ln.getShaderInfoLog(It[e])) && (e = '(unknown error)'),
                        (t = 0 < t && r ? I(e, R, r, t) : 0),
                        n && (D[n >> 2] = t);
                },
                Db: function (e, t, n, r) {
                    (e = ln.getShaderPrecisionFormat(e, t)),
                        (D[n >> 2] = e.rangeMin),
                        (D[(n + 4) >> 2] = e.rangeMax),
                        (D[r >> 2] = e.precision);
                },
                Ga: function (e, t, n) {
                    n
                        ? 35716 == t
                            ? (null === (e = ln.getShaderInfoLog(It[e])) && (e = '(unknown error)'),
                              (D[n >> 2] = e ? e.length + 1 : 0))
                            : 35720 == t
                              ? ((e = ln.getShaderSource(It[e])), (D[n >> 2] = e ? e.length + 1 : 0))
                              : (D[n >> 2] = ln.getShaderParameter(It[e], t))
                        : Ut(1281);
                },
                S: function (e) {
                    var t = Bt[e];
                    if (!t) {
                        switch (e) {
                            case 7939:
                                t = Jt(
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
                                (t = ln.getParameter(e)) || Ut(1280), (t = t && Jt(t));
                                break;
                            case 7938:
                                (t = ln.getParameter(7938)),
                                    (t = Jt(
                                        (t =
                                            2 <= Ot.version ? 'OpenGL ES 3.0 (' + t + ')' : 'OpenGL ES 2.0 (' + t + ')')
                                    ));
                                break;
                            case 35724:
                                var n = (t = ln.getParameter(35724)).match(
                                    /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/
                                );
                                null !== n &&
                                    (3 == n[1].length && (n[1] += '0'),
                                    (t = 'OpenGL ES GLSL ES ' + n[1] + ' (' + t + ')')),
                                    (t = Jt(t));
                                break;
                            default:
                                Ut(1280);
                        }
                        Bt[e] = t;
                    }
                    return t;
                },
                bb: function (e, t) {
                    if (2 > Ot.version) return Ut(1282), 0;
                    var n = Lt[e];
                    return n
                        ? 0 > t || t >= n.length
                            ? (Ut(1281), 0)
                            : n[t]
                        : 7939 === e
                          ? ((n = (n = (n = ln.getSupportedExtensions() || []).concat(
                                n.map(function (e) {
                                    return 'GL_' + e;
                                })
                            )).map(function (e) {
                                return Jt(e);
                            })),
                            (n = Lt[e] = n),
                            0 > t || t >= n.length ? (Ut(1281), 0) : n[t])
                          : (Ut(1280), 0);
                },
                Ha: function (e, t) {
                    if (((t = x(t)), (e = St[e]))) {
                        var n,
                            r = e,
                            a = r.ie,
                            o = r.Ke;
                        if (!a)
                            for (r.ie = a = {}, r.Je = {}, n = 0; n < ln.getProgramParameter(r, 35718); ++n) {
                                var i = ln.getActiveUniform(r, n),
                                    u = i.name;
                                i = i.size;
                                var c = Yt(u);
                                c = 0 < c ? u.slice(0, c) : u;
                                var f = r.Be;
                                for (r.Be += i, o[c] = [i, f], u = 0; u < i; ++u) (a[f] = u), (r.Je[f++] = c);
                            }
                        if (
                            ((r = e.ie),
                            (a = 0),
                            (o = t),
                            0 < (n = Yt(t)) && ((a = parseInt(t.slice(n + 1)) >>> 0), (o = t.slice(0, n))),
                            (o = e.Ke[o]) && a < o[0] && (r[(a += o[1])] = r[a] || ln.getUniformLocation(e, t)))
                        )
                            return a;
                    } else Ut(1281);
                    return -1;
                },
                Eb: function (e, t, n) {
                    for (var r = Nt[t], a = 0; a < t; a++) r[a] = D[(n + 4 * a) >> 2];
                    ln.invalidateFramebuffer(e, r);
                },
                Fb: function (e, t, n, r, a, o, i) {
                    for (var u = Nt[t], c = 0; c < t; c++) u[c] = D[(n + 4 * c) >> 2];
                    ln.invalidateSubFramebuffer(e, u, r, a, o, i);
                },
                Nb: function (e) {
                    return ln.isSync(Rt[e]);
                },
                Ia: function (e) {
                    return (e = xt[e]) ? ln.isTexture(e) : 0;
                },
                Ja: function (e) {
                    ln.lineWidth(e);
                },
                Ka: function (e) {
                    (e = St[e]), ln.linkProgram(e), (e.ie = 0), (e.Ke = {});
                },
                gc: function (e, t, n, r, a, o) {
                    ln.He.multiDrawArraysInstancedBaseInstanceWEBGL(e, D, t >> 2, D, n >> 2, D, r >> 2, U, a >> 2, o);
                },
                hc: function (e, t, n, r, a, o, i, u) {
                    ln.He.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
                        e,
                        D,
                        t >> 2,
                        n,
                        D,
                        r >> 2,
                        D,
                        a >> 2,
                        D,
                        o >> 2,
                        U,
                        i >> 2,
                        u
                    );
                },
                La: function (e, t) {
                    3317 == e && (Dt = t), ln.pixelStorei(e, t);
                },
                jc: function (e) {
                    ln.readBuffer(e);
                },
                Ma: function (e, t, n, r, a, o, i) {
                    if (2 <= Ot.version)
                        if (ln.we) ln.readPixels(e, t, n, r, a, o, i);
                        else {
                            var u = Kt(o);
                            ln.readPixels(e, t, n, r, a, o, u, i >> (31 - Math.clz32(u.BYTES_PER_ELEMENT)));
                        }
                    else (i = Xt(o, a, n, r, i)) ? ln.readPixels(e, t, n, r, a, o, i) : Ut(1280);
                },
                Vb: function (e, t, n, r) {
                    ln.renderbufferStorage(e, t, n, r);
                },
                Rb: function (e, t, n, r, a) {
                    ln.renderbufferStorageMultisample(e, t, n, r, a);
                },
                Jb: function (e, t, n) {
                    ln.samplerParameterf(Ht[e], t, n);
                },
                Kb: function (e, t, n) {
                    ln.samplerParameteri(Ht[e], t, n);
                },
                Lb: function (e, t, n) {
                    ln.samplerParameteri(Ht[e], t, D[n >> 2]);
                },
                Na: function (e, t, n, r) {
                    ln.scissor(e, t, n, r);
                },
                Oa: function (e, t, n, r) {
                    for (var a = '', o = 0; o < t; ++o) {
                        var i = r ? D[(r + 4 * o) >> 2] : -1;
                        a += x(D[(n + 4 * o) >> 2], 0 > i ? void 0 : i);
                    }
                    ln.shaderSource(It[e], a);
                },
                Pa: function (e, t, n) {
                    ln.stencilFunc(e, t, n);
                },
                Qa: function (e, t, n, r) {
                    ln.stencilFuncSeparate(e, t, n, r);
                },
                Ra: function (e) {
                    ln.stencilMask(e);
                },
                Sa: function (e, t) {
                    ln.stencilMaskSeparate(e, t);
                },
                Ta: function (e, t, n) {
                    ln.stencilOp(e, t, n);
                },
                Ua: function (e, t, n, r) {
                    ln.stencilOpSeparate(e, t, n, r);
                },
                Va: function (e, t, n, r, a, o, i, u, c) {
                    if (2 <= Ot.version)
                        if (ln.$d) ln.texImage2D(e, t, n, r, a, o, i, u, c);
                        else if (c) {
                            var f = Kt(u);
                            ln.texImage2D(e, t, n, r, a, o, i, u, f, c >> (31 - Math.clz32(f.BYTES_PER_ELEMENT)));
                        } else ln.texImage2D(e, t, n, r, a, o, i, u, null);
                    else ln.texImage2D(e, t, n, r, a, o, i, u, c ? Xt(u, i, r, a, c) : null);
                },
                Wa: function (e, t, n) {
                    ln.texParameterf(e, t, n);
                },
                Xa: function (e, t, n) {
                    ln.texParameterf(e, t, G[n >> 2]);
                },
                Ya: function (e, t, n) {
                    ln.texParameteri(e, t, n);
                },
                Za: function (e, t, n) {
                    ln.texParameteri(e, t, D[n >> 2]);
                },
                dc: function (e, t, n, r, a) {
                    ln.texStorage2D(e, t, n, r, a);
                },
                _a: function (e, t, n, r, a, o, i, u, c) {
                    if (2 <= Ot.version)
                        if (ln.$d) ln.texSubImage2D(e, t, n, r, a, o, i, u, c);
                        else if (c) {
                            var f = Kt(u);
                            ln.texSubImage2D(e, t, n, r, a, o, i, u, f, c >> (31 - Math.clz32(f.BYTES_PER_ELEMENT)));
                        } else ln.texSubImage2D(e, t, n, r, a, o, i, u, null);
                    else (f = null), c && (f = Xt(u, i, a, o, c)), ln.texSubImage2D(e, t, n, r, a, o, i, u, f);
                },
                $a: function (e, t) {
                    ln.uniform1f(zt(e), t);
                },
                ab: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform1fv(zt(e), G, n >> 2, t);
                    else {
                        if (288 >= t) for (var r = Qt[t - 1], a = 0; a < t; ++a) r[a] = G[(n + 4 * a) >> 2];
                        else r = G.subarray(n >> 2, (n + 4 * t) >> 2);
                        ln.uniform1fv(zt(e), r);
                    }
                },
                Oc: function (e, t) {
                    ln.uniform1i(zt(e), t);
                },
                Pc: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform1iv(zt(e), D, n >> 2, t);
                    else {
                        if (288 >= t) for (var r = Zt[t - 1], a = 0; a < t; ++a) r[a] = D[(n + 4 * a) >> 2];
                        else r = D.subarray(n >> 2, (n + 4 * t) >> 2);
                        ln.uniform1iv(zt(e), r);
                    }
                },
                Qc: function (e, t, n) {
                    ln.uniform2f(zt(e), t, n);
                },
                Rc: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform2fv(zt(e), G, n >> 2, 2 * t);
                    else {
                        if (144 >= t)
                            for (var r = Qt[2 * t - 1], a = 0; a < 2 * t; a += 2)
                                (r[a] = G[(n + 4 * a) >> 2]), (r[a + 1] = G[(n + (4 * a + 4)) >> 2]);
                        else r = G.subarray(n >> 2, (n + 8 * t) >> 2);
                        ln.uniform2fv(zt(e), r);
                    }
                },
                Nc: function (e, t, n) {
                    ln.uniform2i(zt(e), t, n);
                },
                Mc: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform2iv(zt(e), D, n >> 2, 2 * t);
                    else {
                        if (144 >= t)
                            for (var r = Zt[2 * t - 1], a = 0; a < 2 * t; a += 2)
                                (r[a] = D[(n + 4 * a) >> 2]), (r[a + 1] = D[(n + (4 * a + 4)) >> 2]);
                        else r = D.subarray(n >> 2, (n + 8 * t) >> 2);
                        ln.uniform2iv(zt(e), r);
                    }
                },
                Lc: function (e, t, n, r) {
                    ln.uniform3f(zt(e), t, n, r);
                },
                Kc: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform3fv(zt(e), G, n >> 2, 3 * t);
                    else {
                        if (96 >= t)
                            for (var r = Qt[3 * t - 1], a = 0; a < 3 * t; a += 3)
                                (r[a] = G[(n + 4 * a) >> 2]),
                                    (r[a + 1] = G[(n + (4 * a + 4)) >> 2]),
                                    (r[a + 2] = G[(n + (4 * a + 8)) >> 2]);
                        else r = G.subarray(n >> 2, (n + 12 * t) >> 2);
                        ln.uniform3fv(zt(e), r);
                    }
                },
                Jc: function (e, t, n, r) {
                    ln.uniform3i(zt(e), t, n, r);
                },
                Ic: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform3iv(zt(e), D, n >> 2, 3 * t);
                    else {
                        if (96 >= t)
                            for (var r = Zt[3 * t - 1], a = 0; a < 3 * t; a += 3)
                                (r[a] = D[(n + 4 * a) >> 2]),
                                    (r[a + 1] = D[(n + (4 * a + 4)) >> 2]),
                                    (r[a + 2] = D[(n + (4 * a + 8)) >> 2]);
                        else r = D.subarray(n >> 2, (n + 12 * t) >> 2);
                        ln.uniform3iv(zt(e), r);
                    }
                },
                Hc: function (e, t, n, r, a) {
                    ln.uniform4f(zt(e), t, n, r, a);
                },
                Gc: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform4fv(zt(e), G, n >> 2, 4 * t);
                    else {
                        if (72 >= t) {
                            var r = Qt[4 * t - 1],
                                a = G;
                            n >>= 2;
                            for (var o = 0; o < 4 * t; o += 4) {
                                var i = n + o;
                                (r[o] = a[i]), (r[o + 1] = a[i + 1]), (r[o + 2] = a[i + 2]), (r[o + 3] = a[i + 3]);
                            }
                        } else r = G.subarray(n >> 2, (n + 16 * t) >> 2);
                        ln.uniform4fv(zt(e), r);
                    }
                },
                uc: function (e, t, n, r, a) {
                    ln.uniform4i(zt(e), t, n, r, a);
                },
                vc: function (e, t, n) {
                    if (2 <= Ot.version) ln.uniform4iv(zt(e), D, n >> 2, 4 * t);
                    else {
                        if (72 >= t)
                            for (var r = Zt[4 * t - 1], a = 0; a < 4 * t; a += 4)
                                (r[a] = D[(n + 4 * a) >> 2]),
                                    (r[a + 1] = D[(n + (4 * a + 4)) >> 2]),
                                    (r[a + 2] = D[(n + (4 * a + 8)) >> 2]),
                                    (r[a + 3] = D[(n + (4 * a + 12)) >> 2]);
                        else r = D.subarray(n >> 2, (n + 16 * t) >> 2);
                        ln.uniform4iv(zt(e), r);
                    }
                },
                wc: function (e, t, n, r) {
                    if (2 <= Ot.version) ln.uniformMatrix2fv(zt(e), !!n, G, r >> 2, 4 * t);
                    else {
                        if (72 >= t)
                            for (var a = Qt[4 * t - 1], o = 0; o < 4 * t; o += 4)
                                (a[o] = G[(r + 4 * o) >> 2]),
                                    (a[o + 1] = G[(r + (4 * o + 4)) >> 2]),
                                    (a[o + 2] = G[(r + (4 * o + 8)) >> 2]),
                                    (a[o + 3] = G[(r + (4 * o + 12)) >> 2]);
                        else a = G.subarray(r >> 2, (r + 16 * t) >> 2);
                        ln.uniformMatrix2fv(zt(e), !!n, a);
                    }
                },
                xc: function (e, t, n, r) {
                    if (2 <= Ot.version) ln.uniformMatrix3fv(zt(e), !!n, G, r >> 2, 9 * t);
                    else {
                        if (32 >= t)
                            for (var a = Qt[9 * t - 1], o = 0; o < 9 * t; o += 9)
                                (a[o] = G[(r + 4 * o) >> 2]),
                                    (a[o + 1] = G[(r + (4 * o + 4)) >> 2]),
                                    (a[o + 2] = G[(r + (4 * o + 8)) >> 2]),
                                    (a[o + 3] = G[(r + (4 * o + 12)) >> 2]),
                                    (a[o + 4] = G[(r + (4 * o + 16)) >> 2]),
                                    (a[o + 5] = G[(r + (4 * o + 20)) >> 2]),
                                    (a[o + 6] = G[(r + (4 * o + 24)) >> 2]),
                                    (a[o + 7] = G[(r + (4 * o + 28)) >> 2]),
                                    (a[o + 8] = G[(r + (4 * o + 32)) >> 2]);
                        else a = G.subarray(r >> 2, (r + 36 * t) >> 2);
                        ln.uniformMatrix3fv(zt(e), !!n, a);
                    }
                },
                yc: function (e, t, n, r) {
                    if (2 <= Ot.version) ln.uniformMatrix4fv(zt(e), !!n, G, r >> 2, 16 * t);
                    else {
                        if (18 >= t) {
                            var a = Qt[16 * t - 1],
                                o = G;
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
                        } else a = G.subarray(r >> 2, (r + 64 * t) >> 2);
                        ln.uniformMatrix4fv(zt(e), !!n, a);
                    }
                },
                zc: function (e) {
                    (e = St[e]), ln.useProgram(e), (ln.Te = e);
                },
                Ac: function (e, t) {
                    ln.vertexAttrib1f(e, t);
                },
                Bc: function (e, t) {
                    ln.vertexAttrib2f(e, G[t >> 2], G[(t + 4) >> 2]);
                },
                Cc: function (e, t) {
                    ln.vertexAttrib3f(e, G[t >> 2], G[(t + 4) >> 2], G[(t + 8) >> 2]);
                },
                Dc: function (e, t) {
                    ln.vertexAttrib4f(e, G[t >> 2], G[(t + 4) >> 2], G[(t + 8) >> 2], G[(t + 12) >> 2]);
                },
                ec: function (e, t) {
                    ln.vertexAttribDivisor(e, t);
                },
                fc: function (e, t, n, r, a) {
                    ln.vertexAttribIPointer(e, t, n, r, a);
                },
                Ec: function (e, t, n, r, a, o) {
                    ln.vertexAttribPointer(e, t, n, !!r, a, o);
                },
                Fc: function (e, t, n, r) {
                    ln.viewport(e, t, n, r);
                },
                db: function (e, t, n, r) {
                    ln.waitSync(Rt[e], t, (n >>> 0) + 4294967296 * r);
                },
                mb: function (e) {
                    var t = R.length;
                    if (2147483648 < (e >>>= 0)) return !1;
                    for (var n = 1; 4 >= n; n *= 2) {
                        var r = t * (1 + 0.2 / n);
                        (r = Math.min(r, e + 100663296)),
                            0 < (r = Math.max(e, r)) % 65536 && (r += 65536 - (r % 65536));
                        e: {
                            try {
                                T.grow((Math.min(2147483648, r) - k.byteLength + 65535) >>> 16), K();
                                var a = 1;
                                break e;
                            } catch (e) {}
                            a = void 0;
                        }
                        if (a) return !0;
                    }
                    return !1;
                },
                fb: function () {
                    return Ot ? Ot.ef : 0;
                },
                pb: function (e, t) {
                    var n = 0;
                    return (
                        tn().forEach(function (r, a) {
                            var o = t + n;
                            for (a = D[(e + 4 * a) >> 2] = o, o = 0; o < r.length; ++o) H[a++ >> 0] = r.charCodeAt(o);
                            (H[a >> 0] = 0), (n += r.length + 1);
                        }),
                        0
                    );
                },
                qb: function (e, t) {
                    var n = tn();
                    D[e >> 2] = n.length;
                    var r = 0;
                    return (
                        n.forEach(function (e) {
                            r += e.length + 1;
                        }),
                        (D[t >> 2] = r),
                        0
                    );
                },
                Ab: function (e) {
                    C || 0 < Z || (n.onExit && n.onExit(e), (S = !0)), y(e, new Cn(e));
                },
                X: function () {
                    return 0;
                },
                gb: function (e, t, n, r, a, o) {
                    return (e = pe.af(e)), (t = pe.Ve(e, t, n, r)), (D[o >> 2] = t), 0;
                },
                ub: function (e, t, n, r) {
                    return (e = pe.af(e)), (t = pe.Ve(e, t, n)), (D[r >> 2] = t), 0;
                },
                hb: function () {},
                U: function (e, t, n, r) {
                    for (var a = 0, o = 0; o < n; o++) {
                        var i = D[t >> 2],
                            u = D[(t + 4) >> 2];
                        t += 8;
                        for (var c = 0; c < u; c++) {
                            var f = R[i + c],
                                l = he[e];
                            0 === f || 10 === f ? ((1 === e ? b : P)(F(l, 0)), (l.length = 0)) : l.push(f);
                        }
                        a += u;
                    }
                    return (D[r >> 2] = a), 0;
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
                l: function (e, t, n, r) {
                    var a = An();
                    try {
                        return le(e)(t, n, r);
                    } catch (e) {
                        if ((wn(a), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                R: function (e, t, n, r, a) {
                    var o = An();
                    try {
                        return le(e)(t, n, r, a);
                    } catch (e) {
                        if ((wn(o), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                $: function (e, t, n, r, a, o, i) {
                    var u = An();
                    try {
                        return le(e)(t, n, r, a, o, i);
                    } catch (e) {
                        if ((wn(u), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                _: function (e, t, n, r, a, o, i, u, c, f) {
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
                aa: function (e, t, n, r, a, o) {
                    var i = An();
                    try {
                        le(e)(t, n, r, a, o);
                    } catch (e) {
                        if ((wn(i), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                Bb: function (e, t, n, r, a, o, i) {
                    var u = An();
                    try {
                        le(e)(t, n, r, a, o, i);
                    } catch (e) {
                        if ((wn(u), e !== e + 0 && 'longjmp' !== e)) throw e;
                        Pn(1, 0);
                    }
                },
                Cb: function (e, t, n, r, a, o, i, u, c, f) {
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
                jb: function (e, t, n, r) {
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
                            e = un(new Date(e.Qd + 1900, 0, 1), e.te);
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
                        var f = D[(r + 40) >> 2];
                        for (var l in ((r = {
                            Bf: D[r >> 2],
                            Af: D[(r + 4) >> 2],
                            re: D[(r + 8) >> 2],
                            he: D[(r + 12) >> 2],
                            ce: D[(r + 16) >> 2],
                            Qd: D[(r + 20) >> 2],
                            se: D[(r + 24) >> 2],
                            te: D[(r + 28) >> 2],
                            Jf: D[(r + 32) >> 2],
                            zf: D[(r + 36) >> 2],
                            Cf: f ? x(f) : '',
                        }),
                        (n = x(n)),
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
                                return s[e.se].substring(0, 3);
                            },
                            '%A': function (e) {
                                return s[e.se];
                            },
                            '%b': function (e) {
                                return d[e.ce].substring(0, 3);
                            },
                            '%B': function (e) {
                                return d[e.ce];
                            },
                            '%C': function (e) {
                                return o(((e.Qd + 1900) / 100) | 0, 2);
                            },
                            '%d': function (e) {
                                return o(e.he, 2);
                            },
                            '%e': function (e) {
                                return a(e.he, 2, ' ');
                            },
                            '%g': function (e) {
                                return c(e).toString().substring(2);
                            },
                            '%G': function (e) {
                                return c(e);
                            },
                            '%H': function (e) {
                                return o(e.re, 2);
                            },
                            '%I': function (e) {
                                return 0 == (e = e.re) ? (e = 12) : 12 < e && (e -= 12), o(e, 2);
                            },
                            '%j': function (e) {
                                return o(e.he + rn(nn(e.Qd + 1900) ? an : on, e.ce - 1), 3);
                            },
                            '%m': function (e) {
                                return o(e.ce + 1, 2);
                            },
                            '%M': function (e) {
                                return o(e.Af, 2);
                            },
                            '%n': function () {
                                return '\n';
                            },
                            '%p': function (e) {
                                return 0 <= e.re && 12 > e.re ? 'AM' : 'PM';
                            },
                            '%S': function (e) {
                                return o(e.Bf, 2);
                            },
                            '%t': function () {
                                return '\t';
                            },
                            '%u': function (e) {
                                return e.se || 7;
                            },
                            '%U': function (e) {
                                var t = new Date(e.Qd + 1900, 0, 1),
                                    n = 0 === t.getDay() ? t : un(t, 7 - t.getDay());
                                return 0 > i(n, (e = new Date(e.Qd + 1900, e.ce, e.he)))
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
                                var t = new Date(e.Qd + 1901, 0, 4),
                                    n = u(new Date(e.Qd + 1900, 0, 4));
                                t = u(t);
                                var r = un(new Date(e.Qd + 1900, 0, 1), e.te);
                                return 0 > i(r, n)
                                    ? '53'
                                    : 0 >= i(t, r)
                                      ? '01'
                                      : o(
                                            Math.ceil(
                                                (n.getFullYear() < e.Qd + 1900
                                                    ? e.te + 32 - n.getDate()
                                                    : e.te + 1 - n.getDate()) / 7
                                            ),
                                            2
                                        );
                            },
                            '%w': function (e) {
                                return e.se;
                            },
                            '%W': function (e) {
                                var t = new Date(e.Qd, 0, 1),
                                    n = 1 === t.getDay() ? t : un(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
                                return 0 > i(n, (e = new Date(e.Qd + 1900, e.ce, e.he)))
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
                                return (e.Qd + 1900).toString().substring(2);
                            },
                            '%Y': function (e) {
                                return e.Qd + 1900;
                            },
                            '%z': function (e) {
                                var t = 0 <= (e = e.zf);
                                return (
                                    (e = Math.abs(e) / 60),
                                    (t ? '+' : '-') + String('0000' + ((e / 60) * 100 + (e % 60))).slice(-4)
                                );
                            },
                            '%Z': function (e) {
                                return e.Cf;
                            },
                            '%%': function () {
                                return '%';
                            },
                        }))
                            n.includes(l) && (n = n.replace(new RegExp(l, 'g'), f[l](r)));
                        return (
                            (l = (function (e) {
                                var t = Array(M(e) + 1);
                                return I(e, t, 0, t.length), t;
                            })(n)),
                            l.length > t ? 0 : (H.set(l, e), l.length - 1)
                        );
                    })(e, t, n, r);
                },
            };
            !(function () {
                function e(e) {
                    (n.asm = e.exports),
                        (T = n.asm.bd),
                        K(),
                        (X = n.asm.dd),
                        q.unshift(n.asm.cd),
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
                        if (!A && (m || g)) {
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
                    return (n.___wasm_call_ctors = n.asm.cd).apply(null, arguments);
                });
            var yn = (n.___errno_location = function () {
                    return (yn = n.___errno_location = n.asm.ed).apply(null, arguments);
                }),
                mn = (n._free = function () {
                    return (mn = n._free = n.asm.fd).apply(null, arguments);
                }),
                gn = (n._malloc = function () {
                    return (gn = n._malloc = n.asm.gd).apply(null, arguments);
                }),
                vn = (n.___getTypeName = function () {
                    return (vn = n.___getTypeName = n.asm.hd).apply(null, arguments);
                });
            n.___embind_register_native_and_builtin_types = function () {
                return (n.___embind_register_native_and_builtin_types = n.asm.id).apply(null, arguments);
            };
            var _n,
                bn = (n._memalign = function () {
                    return (bn = n._memalign = n.asm.jd).apply(null, arguments);
                }),
                Pn = (n._setThrew = function () {
                    return (Pn = n._setThrew = n.asm.kd).apply(null, arguments);
                }),
                An = (n.stackSave = function () {
                    return (An = n.stackSave = n.asm.ld).apply(null, arguments);
                }),
                wn = (n.stackRestore = function () {
                    return (wn = n.stackRestore = n.asm.md).apply(null, arguments);
                });
            function Cn(e) {
                (this.name = 'ExitStatus'),
                    (this.message = 'Program terminated with exit(' + e + ')'),
                    (this.status = e);
            }
            function Tn() {
                function e() {
                    if (!_n && ((_n = !0), (n.calledRun = !0), !S)) {
                        if ((fe(q), r(n), n.onRuntimeInitialized && n.onRuntimeInitialized(), n.postRun))
                            for ('function' == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length; ) {
                                var e = n.postRun.shift();
                                Q.unshift(e);
                            }
                        fe(Q);
                    }
                }
                if (!(0 < ne)) {
                    if (n.preRun)
                        for ('function' == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length; ) ee();
                    fe(z),
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
                    return (n.dynCall_viji = n.asm.nd).apply(null, arguments);
                }),
                (n.dynCall_vijiii = function () {
                    return (n.dynCall_vijiii = n.asm.od).apply(null, arguments);
                }),
                (n.dynCall_viiiiij = function () {
                    return (n.dynCall_viiiiij = n.asm.pd).apply(null, arguments);
                }),
                (n.dynCall_jii = function () {
                    return (n.dynCall_jii = n.asm.qd).apply(null, arguments);
                }),
                (n.dynCall_vij = function () {
                    return (n.dynCall_vij = n.asm.rd).apply(null, arguments);
                }),
                (n.dynCall_iiij = function () {
                    return (n.dynCall_iiij = n.asm.sd).apply(null, arguments);
                }),
                (n.dynCall_iiiij = function () {
                    return (n.dynCall_iiiij = n.asm.td).apply(null, arguments);
                }),
                (n.dynCall_viij = function () {
                    return (n.dynCall_viij = n.asm.ud).apply(null, arguments);
                }),
                (n.dynCall_viiij = function () {
                    return (n.dynCall_viiij = n.asm.vd).apply(null, arguments);
                }),
                (n.dynCall_ji = function () {
                    return (n.dynCall_ji = n.asm.wd).apply(null, arguments);
                }),
                (n.dynCall_iij = function () {
                    return (n.dynCall_iij = n.asm.xd).apply(null, arguments);
                }),
                (n.dynCall_jiiii = function () {
                    return (n.dynCall_jiiii = n.asm.yd).apply(null, arguments);
                }),
                (n.dynCall_jiiiiii = function () {
                    return (n.dynCall_jiiiiii = n.asm.zd).apply(null, arguments);
                }),
                (n.dynCall_jiiiiji = function () {
                    return (n.dynCall_jiiiiji = n.asm.Ad).apply(null, arguments);
                }),
                (n.dynCall_iijj = function () {
                    return (n.dynCall_iijj = n.asm.Bd).apply(null, arguments);
                }),
                (n.dynCall_jiji = function () {
                    return (n.dynCall_jiji = n.asm.Cd).apply(null, arguments);
                }),
                (n.dynCall_viijii = function () {
                    return (n.dynCall_viijii = n.asm.Dd).apply(null, arguments);
                }),
                (n.dynCall_iiiiij = function () {
                    return (n.dynCall_iiiiij = n.asm.Ed).apply(null, arguments);
                }),
                (n.dynCall_iiiiijj = function () {
                    return (n.dynCall_iiiiijj = n.asm.Fd).apply(null, arguments);
                }),
                (n.dynCall_iiiiiijj = function () {
                    return (n.dynCall_iiiiiijj = n.asm.Gd).apply(null, arguments);
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
