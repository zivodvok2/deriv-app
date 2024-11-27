/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(
            require('@deriv-com/analytics'),
            require('@deriv/components'),
            require('@deriv/deriv-charts'),
            require('@deriv/shared'),
            require('@deriv/shared/src/utils/platform/platform'),
            require('@deriv/translations'),
            require('mobx'),
            require('mobx-react'),
            require('react'),
            require('react-dom'),
            require('react-router'),
            require('react-router-dom')
        );
    else if (typeof define === 'function' && define.amd)
        define([
            '@deriv-com/analytics',
            '@deriv/components',
            '@deriv/deriv-charts',
            '@deriv/shared',
            '@deriv/shared/src/utils/platform/platform',
            '@deriv/translations',
            'mobx',
            'mobx-react',
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
        ], factory);
    else if (typeof exports === 'object')
        exports['@deriv/trader'] = factory(
            require('@deriv-com/analytics'),
            require('@deriv/components'),
            require('@deriv/deriv-charts'),
            require('@deriv/shared'),
            require('@deriv/shared/src/utils/platform/platform'),
            require('@deriv/translations'),
            require('mobx'),
            require('mobx-react'),
            require('react'),
            require('react-dom'),
            require('react-router'),
            require('react-router-dom')
        );
    else
        root['@deriv/trader'] = factory(
            root['@deriv-com/analytics'],
            root['@deriv/components'],
            root['@deriv/deriv-charts'],
            root['@deriv/shared'],
            root['@deriv/shared/src/utils/platform/platform'],
            root['@deriv/translations'],
            root['mobx'],
            root['mobx-react'],
            root['react'],
            root['react-dom'],
            root['react-router'],
            root['react-router-dom']
        );
})(
    self,
    (
        __WEBPACK_EXTERNAL_MODULE__deriv_com_analytics__,
        __WEBPACK_EXTERNAL_MODULE__deriv_components__,
        __WEBPACK_EXTERNAL_MODULE__deriv_deriv_charts__,
        __WEBPACK_EXTERNAL_MODULE__deriv_shared__,
        __WEBPACK_EXTERNAL_MODULE__deriv_shared_src_utils_platform_platform__,
        __WEBPACK_EXTERNAL_MODULE__deriv_translations__,
        __WEBPACK_EXTERNAL_MODULE_mobx__,
        __WEBPACK_EXTERNAL_MODULE_mobx_react__,
        __WEBPACK_EXTERNAL_MODULE_react__,
        __WEBPACK_EXTERNAL_MODULE_react_dom__,
        __WEBPACK_EXTERNAL_MODULE_react_router__,
        __WEBPACK_EXTERNAL_MODULE_react_router_dom__
    ) => {
        return /******/ (() => {
            // webpackBootstrap
            /******/ 'use strict';
            /******/ var __webpack_modules__ = {
                /***/ '../api/src/hooks/useRemoteConfig.ts':
                    /*!*******************************************!*\
  !*** ../api/src/hooks/useRemoteConfig.ts ***!
  \*******************************************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_com_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv-com/utils */ "../../node_modules/@deriv-com/utils/dist/deriv-utils.js");\n/* harmony import */ var _remote_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remote_config.json */ "../api/src/remote_config.json");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }\n\n\n\nvar remoteConfigQuery = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n    var isProductionOrStaging, REMOTE_CONFIG_URL, response;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          isProductionOrStaging =  false || "development" === \'staging\';\n          REMOTE_CONFIG_URL = process.env.REMOTE_CONFIG_URL || \'\';\n          if (!(isProductionOrStaging && REMOTE_CONFIG_URL === \'\')) {\n            _context.next = 4;\n            break;\n          }\n          throw new Error(\'Remote Config URL is not set!\');\n        case 4:\n          _context.next = 6;\n          return fetch(REMOTE_CONFIG_URL);\n        case 6:\n          response = _context.sent;\n          if (response.ok) {\n            _context.next = 9;\n            break;\n          }\n          throw new Error(\'Remote Config Server is out of reach!\');\n        case 9:\n          return _context.abrupt("return", response.json());\n        case 10:\n        case "end":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function remoteConfigQuery() {\n    return _ref.apply(this, arguments);\n  };\n}();\nfunction useRemoteConfig() {\n  var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_remote_config_json__WEBPACK_IMPORTED_MODULE_2__),\n    _useState2 = _slicedToArray(_useState, 2),\n    data = _useState2[0],\n    setData = _useState2[1];\n  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    isMounted.current = true;\n    return function () {\n      isMounted.current = false;\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (enabled) {\n      remoteConfigQuery().then(/*#__PURE__*/function () {\n        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(res) {\n          var resHash, dataHash;\n          return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n            while (1) switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _deriv_com_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.hashObject(res);\n              case 2:\n                resHash = _context2.sent;\n                _context2.next = 5;\n                return _deriv_com_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.hashObject(data);\n              case 5:\n                dataHash = _context2.sent;\n                if (resHash !== dataHash && isMounted.current) {\n                  setData(res);\n                }\n              case 7:\n              case "end":\n                return _context2.stop();\n            }\n          }, _callee2);\n        }));\n        return function (_x) {\n          return _ref2.apply(this, arguments);\n        };\n      }())["catch"](function (error) {\n        // eslint-disable-next-line no-console\n        console.log(\'Remote Config error: \', error);\n      });\n    }\n  }, [enabled, data]);\n  return {\n    data: data\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRemoteConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vYXBpL3NyYy9ob29rcy91c2VSZW1vdGVDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3RyYWRlci8uLi9hcGkvc3JjL2hvb2tzL3VzZVJlbW90ZUNvbmZpZy50cz9mOTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE9iamVjdFV0aWxzIH0gZnJvbSAnQGRlcml2LWNvbS91dGlscyc7XG5pbXBvcnQgaW5pdERhdGEgZnJvbSAnLi4vcmVtb3RlX2NvbmZpZy5qc29uJztcblxuY29uc3QgcmVtb3RlQ29uZmlnUXVlcnkgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaXNQcm9kdWN0aW9uT3JTdGFnaW5nID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3N0YWdpbmcnO1xuICAgIGNvbnN0IFJFTU9URV9DT05GSUdfVVJMID0gcHJvY2Vzcy5lbnYuUkVNT1RFX0NPTkZJR19VUkwgfHwgJyc7XG4gICAgaWYgKGlzUHJvZHVjdGlvbk9yU3RhZ2luZyAmJiBSRU1PVEVfQ09ORklHX1VSTCA9PT0gJycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgQ29uZmlnIFVSTCBpcyBub3Qgc2V0IScpO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFJFTU9URV9DT05GSUdfVVJMKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIENvbmZpZyBTZXJ2ZXIgaXMgb3V0IG9mIHJlYWNoIScpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZnVuY3Rpb24gdXNlUmVtb3RlQ29uZmlnKGVuYWJsZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXREYXRhKTtcbiAgICBjb25zdCBpc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgICAgICByZW1vdGVDb25maWdRdWVyeSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzSGFzaCA9IGF3YWl0IE9iamVjdFV0aWxzLmhhc2hPYmplY3QocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUhhc2ggPSBhd2FpdCBPYmplY3RVdGlscy5oYXNoT2JqZWN0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzSGFzaCAhPT0gZGF0YUhhc2ggJiYgaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBDb25maWcgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtlbmFibGVkLCBkYXRhXSk7XG5cbiAgICByZXR1cm4geyBkYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlbW90ZUNvbmZpZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../api/src/hooks/useRemoteConfig.ts\n'
                        );

                        /***/
                    },

                /***/ '../hooks/src/useDtraderV2Flag.ts':
                    /*!****************************************!*\
  !*** ../hooks/src/useDtraderV2Flag.ts ***!
  \****************************************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useIsGrowthbookLoaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIsGrowthbookLoaded */ "../hooks/src/useIsGrowthbookLoaded.ts");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_com_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv-com/ui */ "../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js");\n/* harmony import */ var _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv-com/analytics */ "@deriv-com/analytics");\n/* harmony import */ var _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_com_analytics__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\nvar useDtraderV2Flag = function useDtraderV2Flag() {\n  var _useIsGrowthbookIsLoa = (0,_useIsGrowthbookLoaded__WEBPACK_IMPORTED_MODULE_3__["default"])(),\n    is_growthbook_loaded = _useIsGrowthbookIsLoa.isGBLoaded,\n    is_gb_available = _useIsGrowthbookIsLoa.isGBAvailable;\n  var load_dtrader_module = is_growthbook_loaded || !is_gb_available;\n  var is_dtrader_v2 = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.isDTraderV2)();\n  var _useDevice = (0,_deriv_com_ui__WEBPACK_IMPORTED_MODULE_4__.useDevice)(),\n    is_mobile = _useDevice.isMobile;\n  var is_feature_flag_active = Boolean(_deriv_com_analytics__WEBPACK_IMPORTED_MODULE_2__.Analytics === null || _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_2__.Analytics === void 0 ? void 0 : _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_2__.Analytics.getFeatureValue(\'dtrader_v2_enabled\', false));\n  var is_trade_or_contract_path = location.pathname.startsWith(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.routes.trade) || location.pathname.startsWith(\'/contract/\');\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    dtrader_v2_enabled = _useState2[0],\n    setDTraderV2Enabled = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (is_growthbook_loaded || (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.isDTraderV2)()) {\n      setDTraderV2Enabled((is_dtrader_v2 || is_feature_flag_active) && is_mobile && is_trade_or_contract_path);\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [is_mobile, is_growthbook_loaded]);\n  return {\n    dtrader_v2_enabled: dtrader_v2_enabled,\n    load_dtrader_module: load_dtrader_module\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDtraderV2Flag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vaG9va3Mvc3JjL3VzZUR0cmFkZXJWMkZsYWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvdHJhZGVyLy4uL2hvb2tzL3NyYy91c2VEdHJhZGVyVjJGbGFnLnRzPzAxMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJc0dyb3d0aGJvb2tJc0xvYWRlZCBmcm9tICcuL3VzZUlzR3Jvd3RoYm9va0xvYWRlZCc7XG5pbXBvcnQgeyBpc0RUcmFkZXJWMiwgcm91dGVzIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyB1c2VEZXZpY2UgfSBmcm9tICdAZGVyaXYtY29tL3VpJztcbmltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gJ0BkZXJpdi1jb20vYW5hbHl0aWNzJztcblxuY29uc3QgdXNlRHRyYWRlclYyRmxhZyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzR0JMb2FkZWQ6IGlzX2dyb3d0aGJvb2tfbG9hZGVkLCBpc0dCQXZhaWxhYmxlOiBpc19nYl9hdmFpbGFibGUgfSA9IHVzZUlzR3Jvd3RoYm9va0lzTG9hZGVkKCk7XG4gICAgY29uc3QgbG9hZF9kdHJhZGVyX21vZHVsZSA9IGlzX2dyb3d0aGJvb2tfbG9hZGVkIHx8ICFpc19nYl9hdmFpbGFibGU7XG5cbiAgICBjb25zdCBpc19kdHJhZGVyX3YyID0gaXNEVHJhZGVyVjIoKTtcbiAgICBjb25zdCB7IGlzTW9iaWxlOiBpc19tb2JpbGUgfSA9IHVzZURldmljZSgpO1xuICAgIGNvbnN0IGlzX2ZlYXR1cmVfZmxhZ19hY3RpdmUgPSBCb29sZWFuKEFuYWx5dGljcz8uZ2V0RmVhdHVyZVZhbHVlKCdkdHJhZGVyX3YyX2VuYWJsZWQnLCBmYWxzZSkpO1xuICAgIGNvbnN0IGlzX3RyYWRlX29yX2NvbnRyYWN0X3BhdGggPVxuICAgICAgICBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKHJvdXRlcy50cmFkZSkgfHwgbG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbnRyYWN0LycpO1xuXG4gICAgY29uc3QgW2R0cmFkZXJfdjJfZW5hYmxlZCwgc2V0RFRyYWRlclYyRW5hYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzX2dyb3d0aGJvb2tfbG9hZGVkIHx8IGlzRFRyYWRlclYyKCkpIHtcbiAgICAgICAgICAgIHNldERUcmFkZXJWMkVuYWJsZWQoKGlzX2R0cmFkZXJfdjIgfHwgaXNfZmVhdHVyZV9mbGFnX2FjdGl2ZSkgJiYgaXNfbW9iaWxlICYmIGlzX3RyYWRlX29yX2NvbnRyYWN0X3BhdGgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB9LCBbaXNfbW9iaWxlLCBpc19ncm93dGhib29rX2xvYWRlZF0pO1xuXG4gICAgcmV0dXJuIHsgZHRyYWRlcl92Ml9lbmFibGVkLCBsb2FkX2R0cmFkZXJfbW9kdWxlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VEdHJhZGVyVjJGbGFnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../hooks/src/useDtraderV2Flag.ts\n'
                        );

                        /***/
                    },

                /***/ '../hooks/src/useIsGrowthbookLoaded.ts':
                    /*!*********************************************!*\
  !*** ../hooks/src/useIsGrowthbookLoaded.ts ***!
  \*********************************************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv-com/analytics */ "@deriv-com/analytics");\n/* harmony import */ var _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_com_analytics__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/api */ "../api/src/hooks/useRemoteConfig.ts");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\nvar useIsGrowthbookIsLoaded = function useIsGrowthbookIsLoaded() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isGBLoaded = _useState2[0],\n    setIsGBLoaded = _useState2[1];\n  var _useRemoteConfig = (0,_deriv_api__WEBPACK_IMPORTED_MODULE_2__["default"])(true),\n    data = _useRemoteConfig.data;\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState4 = _slicedToArray(_useState3, 2),\n    isGBAvailable = _useState4[0],\n    setisGBAvailable = _useState4[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var analytics_interval;\n    if (data !== null && data !== void 0 && data.marketing_growthbook) {\n      var checksCounter = 0;\n      analytics_interval = setInterval(function () {\n        var _Analytics$getInstanc;\n        // Check if the analytics instance is available for 10 seconds before setting the feature flag value\n        if (checksCounter > 20) {\n          // If the analytics instance is not available after 10 seconds, clear the interval\n          clearInterval(analytics_interval);\n          setisGBAvailable(false);\n          return;\n        }\n        checksCounter += 1;\n        if (_deriv_com_analytics__WEBPACK_IMPORTED_MODULE_1__.Analytics !== null && _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_1__.Analytics !== void 0 && (_Analytics$getInstanc = _deriv_com_analytics__WEBPACK_IMPORTED_MODULE_1__.Analytics.getInstances()) !== null && _Analytics$getInstanc !== void 0 && _Analytics$getInstanc.ab) {\n          setIsGBLoaded(true);\n          clearInterval(analytics_interval);\n        }\n      }, 500);\n    } else {\n      setisGBAvailable(false);\n    }\n    return function () {\n      clearInterval(analytics_interval);\n    };\n  }, [data.marketing_growthbook]);\n  return {\n    isGBLoaded: isGBLoaded,\n    isGBAvailable: isGBAvailable\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsGrowthbookIsLoaded);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vaG9va3Mvc3JjL3VzZUlzR3Jvd3RoYm9va0xvYWRlZC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi90cmFkZXIvLi4vaG9va3Mvc3JjL3VzZUlzR3Jvd3RoYm9va0xvYWRlZC50cz80YjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmFseXRpY3MgfSBmcm9tICdAZGVyaXYtY29tL2FuYWx5dGljcyc7XG5pbXBvcnQgeyB1c2VSZW1vdGVDb25maWcgfSBmcm9tICdAZGVyaXYvYXBpJztcblxuY29uc3QgdXNlSXNHcm93dGhib29rSXNMb2FkZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzR0JMb2FkZWQsIHNldElzR0JMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlUmVtb3RlQ29uZmlnKHRydWUpO1xuICAgIGNvbnN0IFtpc0dCQXZhaWxhYmxlLCBzZXRpc0dCQXZhaWxhYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGFuYWx5dGljc19pbnRlcnZhbDogTm9kZUpTLlRpbWVvdXQ7XG5cbiAgICAgICAgaWYgKGRhdGE/Lm1hcmtldGluZ19ncm93dGhib29rKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2tzQ291bnRlciA9IDA7XG4gICAgICAgICAgICBhbmFseXRpY3NfaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGFuYWx5dGljcyBpbnN0YW5jZSBpcyBhdmFpbGFibGUgZm9yIDEwIHNlY29uZHMgYmVmb3JlIHNldHRpbmcgdGhlIGZlYXR1cmUgZmxhZyB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChjaGVja3NDb3VudGVyID4gMjApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGFuYWx5dGljcyBpbnN0YW5jZSBpcyBub3QgYXZhaWxhYmxlIGFmdGVyIDEwIHNlY29uZHMsIGNsZWFyIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGFuYWx5dGljc19pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHNldGlzR0JBdmFpbGFibGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoZWNrc0NvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICBpZiAoQW5hbHl0aWNzPy5nZXRJbnN0YW5jZXMoKT8uYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNHQkxvYWRlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhbmFseXRpY3NfaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRpc0dCQXZhaWxhYmxlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChhbmFseXRpY3NfaW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgIH0sIFtkYXRhLm1hcmtldGluZ19ncm93dGhib29rXSk7XG5cbiAgICByZXR1cm4geyBpc0dCTG9hZGVkLCBpc0dCQXZhaWxhYmxlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJc0dyb3d0aGJvb2tJc0xvYWRlZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../hooks/src/useIsGrowthbookLoaded.ts\n'
                        );

                        /***/
                    },

                /***/ './src/index.tsx':
                    /*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/hooks */ "../hooks/src/useDtraderV2Flag.ts");\n\n\n\n\nvar AppLoader = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | trader-app */[__webpack_require__.e("vendors-node_modules_bowser_es5_js-node_modules_dayjs_dayjs_min_js-node_modules_lodash_deboun-bbb277"), __webpack_require__.e("vendors-node_modules_react-content-loader_dist_react-content-loader_es_js-node_modules_react--c10131"), __webpack_require__.e("src_sass_app_scss-src_App_Components_Elements_PositionsDrawer_helpers_index_ts-src_App_init-s-ba58f8"), __webpack_require__.e("trader-app")]).then(__webpack_require__.bind(__webpack_require__, /*! ./App/index */ "./src/App/index.tsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\nvar AppV2Loader = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | trader-app-v2 */[__webpack_require__.e("vendors-node_modules_bowser_es5_js-node_modules_dayjs_dayjs_min_js-node_modules_lodash_deboun-bbb277"), __webpack_require__.e("vendors-node_modules_cloudflare_stream-react_dist_stream-react_esm_js-node_modules_deriv_quil-145140"), __webpack_require__.e("hooks_src_useMFAccountStatus_ts-src_Modules_Trading_Helpers_video-config_ts-src_Stores_Module-77c64e"), __webpack_require__.e("src_sass_app_scss-src_App_Components_Elements_PositionsDrawer_helpers_index_ts-src_App_init-s-ba58f8"), __webpack_require__.e("src_Modules_Contract_Containers_replay-chart_tsx-src_Stores_Modules_Trading_Helpers_logic_ts"), __webpack_require__.e("trader-app-v2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AppV2/index */ "./src/AppV2/index.tsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading.DTraderV2, {\n    initial_app_loading: true,\n    is_contract_details: window.location.pathname.startsWith(\'/contract/\'),\n    is_positions: window.location.pathname === _deriv_shared__WEBPACK_IMPORTED_MODULE_1__.routes.trader_positions,\n    is_closed_tab: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getPositionsV2TabIndexFromURL)() === 1\n  });\n})();\nvar App = function App(_ref) {\n  var passthrough = _ref.passthrough;\n  var _useDtraderV2Flag = (0,_deriv_hooks__WEBPACK_IMPORTED_MODULE_3__["default"])(),\n    dtrader_v2_enabled = _useDtraderV2Flag.dtrader_v2_enabled,\n    load_dtrader_module = _useDtraderV2Flag.load_dtrader_module;\n  if (load_dtrader_module) {\n    return dtrader_v2_enabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppV2Loader, {\n      passthrough: passthrough\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppLoader, {\n      passthrough: passthrough\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi90cmFkZXIvLi9zcmMvaW5kZXgudHN4P2Q5ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFBvc2l0aW9uc1YyVGFiSW5kZXhGcm9tVVJMLCBtYWtlTGF6eUxvYWRlciwgbW9kdWxlTG9hZGVyLCByb3V0ZXMgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUQ29yZVN0b3JlcyB9IGZyb20gJ0BkZXJpdi9zdG9yZXMvdHlwZXMnO1xuaW1wb3J0IHsgVFdlYlNvY2tldCB9IGZyb20gJ1R5cGVzJztcbmltcG9ydCB7IHVzZUR0cmFkZXJWMkZsYWcgfSBmcm9tICdAZGVyaXYvaG9va3MnO1xuXG50eXBlIEFwcHR5cGVzID0ge1xuICAgIHBhc3N0aHJvdWdoOiB7XG4gICAgICAgIHJvb3Rfc3RvcmU6IFRDb3JlU3RvcmVzO1xuICAgICAgICBXUzogVFdlYlNvY2tldDtcbiAgICB9O1xufTtcblxuY29uc3QgQXBwTG9hZGVyID0gbWFrZUxhenlMb2FkZXIoXG4gICAgKCkgPT4gbW9kdWxlTG9hZGVyKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRyYWRlci1hcHBcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vQXBwL2luZGV4JykpLFxuICAgICgpID0+IDxMb2FkaW5nIC8+XG4pKCkgYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxBcHB0eXBlcz47XG5cbmNvbnN0IEFwcFYyTG9hZGVyID0gbWFrZUxhenlMb2FkZXIoXG4gICAgKCkgPT4gbW9kdWxlTG9hZGVyKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRyYWRlci1hcHAtdjJcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vQXBwVjIvaW5kZXgnKSksXG4gICAgKCkgPT4gKFxuICAgICAgICA8TG9hZGluZy5EVHJhZGVyVjJcbiAgICAgICAgICAgIGluaXRpYWxfYXBwX2xvYWRpbmdcbiAgICAgICAgICAgIGlzX2NvbnRyYWN0X2RldGFpbHM9e3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29udHJhY3QvJyl9XG4gICAgICAgICAgICBpc19wb3NpdGlvbnM9e3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gcm91dGVzLnRyYWRlcl9wb3NpdGlvbnN9XG4gICAgICAgICAgICBpc19jbG9zZWRfdGFiPXtnZXRQb3NpdGlvbnNWMlRhYkluZGV4RnJvbVVSTCgpID09PSAxfVxuICAgICAgICAvPlxuICAgIClcbikoKSBhcyBSZWFjdC5Db21wb25lbnRUeXBlPEFwcHR5cGVzPjtcblxuY29uc3QgQXBwID0gKHsgcGFzc3Rocm91Z2ggfTogQXBwdHlwZXMpID0+IHtcbiAgICBjb25zdCB7IGR0cmFkZXJfdjJfZW5hYmxlZCwgbG9hZF9kdHJhZGVyX21vZHVsZSB9ID0gdXNlRHRyYWRlclYyRmxhZygpO1xuICAgIGlmIChsb2FkX2R0cmFkZXJfbW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBkdHJhZGVyX3YyX2VuYWJsZWQgPyA8QXBwVjJMb2FkZXIgcGFzc3Rocm91Z2g9e3Bhc3N0aHJvdWdofSAvPiA6IDxBcHBMb2FkZXIgcGFzc3Rocm91Z2g9e3Bhc3N0aHJvdWdofSAvPjtcbiAgICB9XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.tsx\n'
                        );

                        /***/
                    },

                /***/ '@deriv-com/analytics':
                    /*!***************************************!*\
  !*** external "@deriv-com/analytics" ***!
  \***************************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_com_analytics__;

                        /***/
                    },

                /***/ '@deriv/components':
                    /*!************************************!*\
  !*** external "@deriv/components" ***!
  \************************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

                        /***/
                    },

                /***/ '@deriv/deriv-charts':
                    /*!**************************************!*\
  !*** external "@deriv/deriv-charts" ***!
  \**************************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_deriv_charts__;

                        /***/
                    },

                /***/ '@deriv/shared':
                    /*!********************************!*\
  !*** external "@deriv/shared" ***!
  \********************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

                        /***/
                    },

                /***/ '@deriv/shared/src/utils/platform/platform':
                    /*!************************************************************!*\
  !*** external "@deriv/shared/src/utils/platform/platform" ***!
  \************************************************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared_src_utils_platform_platform__;

                        /***/
                    },

                /***/ '@deriv/translations':
                    /*!**************************************!*\
  !*** external "@deriv/translations" ***!
  \**************************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

                        /***/
                    },

                /***/ mobx:
                    /*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_mobx__;

                        /***/
                    },

                /***/ 'mobx-react':
                    /*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_mobx_react__;

                        /***/
                    },

                /***/ react:
                    /*!************************!*\
  !*** external "react" ***!
  \************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

                        /***/
                    },

                /***/ 'react-dom':
                    /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

                        /***/
                    },

                /***/ 'react-router':
                    /*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_react_router__;

                        /***/
                    },

                /***/ 'react-router-dom':
                    /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;

                        /***/
                    },

                /***/ '../../node_modules/@deriv-com/ui/dist/_commonjsHelpers-BkfeUUK-.js':
                    /*!**************************************************************************!*\
  !*** ../../node_modules/@deriv-com/ui/dist/_commonjsHelpers-BkfeUUK-.js ***!
  \**************************************************************************/
                    /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ l),\n/* harmony export */   c: () => (/* binding */ u),\n/* harmony export */   g: () => (/* binding */ f)\n/* harmony export */ });\nvar u = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};\nfunction f(e) {\n  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;\n}\nfunction l(e) {\n  if (e.__esModule) return e;\n  var r = e.default;\n  if (typeof r == "function") {\n    var t = function o() {\n      return this instanceof o ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);\n    };\n    t.prototype = r.prototype;\n  } else t = {};\n  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {\n    var n = Object.getOwnPropertyDescriptor(e, o);\n    Object.defineProperty(t, o, n.get ? n : {\n      enumerable: !0,\n      get: function() {\n        return e[o];\n      }\n    });\n  }), t;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL0BkZXJpdi1jb20vdWkvZGlzdC9fY29tbW9uanNIZWxwZXJzLUJrZmVVVUstLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi90cmFkZXIvLi4vLi4vbm9kZV9tb2R1bGVzL0BkZXJpdi1jb20vdWkvZGlzdC9fY29tbW9uanNIZWxwZXJzLUJrZmVVVUstLmpzP2RjMDciXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHUgPSB0eXBlb2YgZ2xvYmFsVGhpcyA8IFwidVwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgPCBcInVcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmIDwgXCJ1XCIgPyBzZWxmIDoge307XG5mdW5jdGlvbiBmKGUpIHtcbiAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCBcImRlZmF1bHRcIikgPyBlLmRlZmF1bHQgOiBlO1xufVxuZnVuY3Rpb24gbChlKSB7XG4gIGlmIChlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICB2YXIgciA9IGUuZGVmYXVsdDtcbiAgaWYgKHR5cGVvZiByID09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciB0ID0gZnVuY3Rpb24gbygpIHtcbiAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgbyA/IFJlZmxlY3QuY29uc3RydWN0KHIsIGFyZ3VtZW50cywgdGhpcy5jb25zdHJ1Y3RvcikgOiByLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICB0LnByb3RvdHlwZSA9IHIucHJvdG90eXBlO1xuICB9IGVsc2UgdCA9IHt9O1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KSwgT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihvKSB7XG4gICAgdmFyIG4gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIG8pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBvLCBuLmdldCA/IG4gOiB7XG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBlW29dO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSwgdDtcbn1cbmV4cG9ydCB7XG4gIGwgYXMgYSxcbiAgdSBhcyBjLFxuICBmIGFzIGdcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/@deriv-com/ui/dist/_commonjsHelpers-BkfeUUK-.js\n'
                        );

                        /***/
                    },

                /***/ '../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js':
                    /*!****************************************************************!*\
  !*** ../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js ***!
  \****************************************************************/
                    /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDevice: () => (/* binding */ d)\n/* harmony export */ });\n/* harmony import */ var _index_EY1gwl5O_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index-EY1gwl5O.js */ "../../node_modules/@deriv-com/ui/dist/index-EY1gwl5O.js");\n\nconst d = () => {\n  const i = (0,_index_EY1gwl5O_js__WEBPACK_IMPORTED_MODULE_0__.u)("(min-width: 1280px)"), a = (0,_index_EY1gwl5O_js__WEBPACK_IMPORTED_MODULE_0__.u)("(max-width: 600px)"), n = (0,_index_EY1gwl5O_js__WEBPACK_IMPORTED_MODULE_0__.u)(\n    "(min-width: 601px) and (max-width: 1279px)"\n  ), e = (0,_index_EY1gwl5O_js__WEBPACK_IMPORTED_MODULE_0__.u)(\n    "(min-width: 601px) and (max-width: 1279px) and (orientation: portrait)"\n  ), o = (0,_index_EY1gwl5O_js__WEBPACK_IMPORTED_MODULE_0__.u)(\n    "(max-width: 1279px) and (orientation: landscape)"\n  );\n  return {\n    /** returns Larger screen tablets [min-width: 1280px] */\n    isDesktop: i,\n    /**  returns Smaller screen tablets [max-width: 600px] */\n    isMobile: a,\n    /** returns Larger screen phones and smaller screen desktop [min-width: 601px and max-width: 1279px] */\n    isTablet: n,\n    /** returns tablet screen with portrait orientation [min-width: 601px and max-width: 1279px and orientation: portrait] */\n    isTabletPortrait: e,\n    /** returns mobile or medium screens in landscape orientation [max-width: 1279px and orientation: landscape] */\n    isMobileOrTabletLandscape: o\n  };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL0BkZXJpdi1jb20vdWkvZGlzdC9ob29rcy91c2VEZXZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3RyYWRlci8uLi8uLi9ub2RlX21vZHVsZXMvQGRlcml2LWNvbS91aS9kaXN0L2hvb2tzL3VzZURldmljZS5qcz8yNzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHUgYXMgdCB9IGZyb20gXCIuLi9pbmRleC1FWTFnd2w1Ty5qc1wiO1xuY29uc3QgZCA9ICgpID0+IHtcbiAgY29uc3QgaSA9IHQoXCIobWluLXdpZHRoOiAxMjgwcHgpXCIpLCBhID0gdChcIihtYXgtd2lkdGg6IDYwMHB4KVwiKSwgbiA9IHQoXG4gICAgXCIobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweClcIlxuICApLCBlID0gdChcbiAgICBcIihtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIlxuICApLCBvID0gdChcbiAgICBcIihtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiXG4gICk7XG4gIHJldHVybiB7XG4gICAgLyoqIHJldHVybnMgTGFyZ2VyIHNjcmVlbiB0YWJsZXRzIFttaW4td2lkdGg6IDEyODBweF0gKi9cbiAgICBpc0Rlc2t0b3A6IGksXG4gICAgLyoqICByZXR1cm5zIFNtYWxsZXIgc2NyZWVuIHRhYmxldHMgW21heC13aWR0aDogNjAwcHhdICovXG4gICAgaXNNb2JpbGU6IGEsXG4gICAgLyoqIHJldHVybnMgTGFyZ2VyIHNjcmVlbiBwaG9uZXMgYW5kIHNtYWxsZXIgc2NyZWVuIGRlc2t0b3AgW21pbi13aWR0aDogNjAxcHggYW5kIG1heC13aWR0aDogMTI3OXB4XSAqL1xuICAgIGlzVGFibGV0OiBuLFxuICAgIC8qKiByZXR1cm5zIHRhYmxldCBzY3JlZW4gd2l0aCBwb3J0cmFpdCBvcmllbnRhdGlvbiBbbWluLXdpZHRoOiA2MDFweCBhbmQgbWF4LXdpZHRoOiAxMjc5cHggYW5kIG9yaWVudGF0aW9uOiBwb3J0cmFpdF0gKi9cbiAgICBpc1RhYmxldFBvcnRyYWl0OiBlLFxuICAgIC8qKiByZXR1cm5zIG1vYmlsZSBvciBtZWRpdW0gc2NyZWVucyBpbiBsYW5kc2NhcGUgb3JpZW50YXRpb24gW21heC13aWR0aDogMTI3OXB4IGFuZCBvcmllbnRhdGlvbjogbGFuZHNjYXBlXSAqL1xuICAgIGlzTW9iaWxlT3JUYWJsZXRMYW5kc2NhcGU6IG9cbiAgfTtcbn07XG5leHBvcnQge1xuICBkIGFzIHVzZURldmljZVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/@deriv-com/ui/dist/hooks/useDevice.js\n'
                        );

                        /***/
                    },

                /***/ '../../node_modules/@deriv-com/ui/dist/index-EY1gwl5O.js':
                    /*!***************************************************************!*\
  !*** ../../node_modules/@deriv-com/ui/dist/index-EY1gwl5O.js ***!
  \***************************************************************/
                    /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   a: () => (/* binding */ g),\n/* harmony export */   u: () => (/* binding */ O)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var _commonjsHelpers_BkfeUUK_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_commonjsHelpers-BkfeUUK-.js */ "../../node_modules/@deriv-com/ui/dist/_commonjsHelpers-BkfeUUK-.js");\n\n\nvar v = typeof _commonjsHelpers_BkfeUUK_js__WEBPACK_IMPORTED_MODULE_1__.c == "object" && _commonjsHelpers_BkfeUUK_js__WEBPACK_IMPORTED_MODULE_1__.c && _commonjsHelpers_BkfeUUK_js__WEBPACK_IMPORTED_MODULE_1__.c.Object === Object && _commonjsHelpers_BkfeUUK_js__WEBPACK_IMPORTED_MODULE_1__.c, E = typeof self == "object" && self && self.Object === Object && self;\nv || E || Function("return this")();\nvar f = typeof window < "u" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\nfunction L(t, s, o, i) {\n  const c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(s);\n  f(() => {\n    c.current = s;\n  }, [s]), (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const n = window;\n    if (!(n && n.addEventListener))\n      return;\n    const r = (e) => {\n      c.current(e);\n    };\n    return n.addEventListener(t, r, i), () => {\n      n.removeEventListener(t, r, i);\n    };\n  }, [t, o, i]);\n}\nvar h = typeof window > "u";\nfunction O(t, {\n  defaultValue: s = !1,\n  initializeWithValue: o = !0\n} = {}) {\n  const i = (e) => h ? s : window.matchMedia(e).matches, [c, n] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => o ? i(t) : s);\n  function r() {\n    n(i(t));\n  }\n  return f(() => {\n    const e = window.matchMedia(t);\n    return r(), e.addListener ? e.addListener(r) : e.addEventListener("change", r), () => {\n      e.removeListener ? e.removeListener(r) : e.removeEventListener("change", r);\n    };\n  }, [t]), c;\n}\nfunction g(t, s, o = "mousedown", i = {}) {\n  L(\n    o,\n    (c) => {\n      const n = c.target;\n      if (!n || !n.isConnected)\n        return;\n      (Array.isArray(t) ? t.filter((e) => !!e.current).every((e) => e.current && !e.current.contains(n)) : t.current && !t.current.contains(n)) && s(c);\n    },\n    void 0,\n    i\n  );\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL0BkZXJpdi1jb20vdWkvZGlzdC9pbmRleC1FWTFnd2w1Ty5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3RyYWRlci8uLi8uLi9ub2RlX21vZHVsZXMvQGRlcml2LWNvbS91aS9kaXN0L2luZGV4LUVZMWd3bDVPLmpzP2I4MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgYXMgZCwgdXNlTGF5b3V0RWZmZWN0IGFzIG0sIHVzZUVmZmVjdCBhcyB1LCB1c2VSZWYgYXMgbCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYyBhcyBhIH0gZnJvbSBcIi4vX2NvbW1vbmpzSGVscGVycy1Ca2ZlVVVLLS5qc1wiO1xudmFyIHYgPSB0eXBlb2YgYSA9PSBcIm9iamVjdFwiICYmIGEgJiYgYS5PYmplY3QgPT09IE9iamVjdCAmJiBhLCBFID0gdHlwZW9mIHNlbGYgPT0gXCJvYmplY3RcIiAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcbnYgfHwgRSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG52YXIgZiA9IHR5cGVvZiB3aW5kb3cgPCBcInVcIiA/IG0gOiB1O1xuZnVuY3Rpb24gTCh0LCBzLCBvLCBpKSB7XG4gIGNvbnN0IGMgPSBsKHMpO1xuICBmKCgpID0+IHtcbiAgICBjLmN1cnJlbnQgPSBzO1xuICB9LCBbc10pLCB1KCgpID0+IHtcbiAgICBjb25zdCBuID0gd2luZG93O1xuICAgIGlmICghKG4gJiYgbi5hZGRFdmVudExpc3RlbmVyKSlcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCByID0gKGUpID0+IHtcbiAgICAgIGMuY3VycmVudChlKTtcbiAgICB9O1xuICAgIHJldHVybiBuLmFkZEV2ZW50TGlzdGVuZXIodCwgciwgaSksICgpID0+IHtcbiAgICAgIG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LCByLCBpKTtcbiAgICB9O1xuICB9LCBbdCwgbywgaV0pO1xufVxudmFyIGggPSB0eXBlb2Ygd2luZG93ID4gXCJ1XCI7XG5mdW5jdGlvbiBPKHQsIHtcbiAgZGVmYXVsdFZhbHVlOiBzID0gITEsXG4gIGluaXRpYWxpemVXaXRoVmFsdWU6IG8gPSAhMFxufSA9IHt9KSB7XG4gIGNvbnN0IGkgPSAoZSkgPT4gaCA/IHMgOiB3aW5kb3cubWF0Y2hNZWRpYShlKS5tYXRjaGVzLCBbYywgbl0gPSBkKCgpID0+IG8gPyBpKHQpIDogcyk7XG4gIGZ1bmN0aW9uIHIoKSB7XG4gICAgbihpKHQpKTtcbiAgfVxuICByZXR1cm4gZigoKSA9PiB7XG4gICAgY29uc3QgZSA9IHdpbmRvdy5tYXRjaE1lZGlhKHQpO1xuICAgIHJldHVybiByKCksIGUuYWRkTGlzdGVuZXIgPyBlLmFkZExpc3RlbmVyKHIpIDogZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHIpLCAoKSA9PiB7XG4gICAgICBlLnJlbW92ZUxpc3RlbmVyID8gZS5yZW1vdmVMaXN0ZW5lcihyKSA6IGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByKTtcbiAgICB9O1xuICB9LCBbdF0pLCBjO1xufVxuZnVuY3Rpb24gZyh0LCBzLCBvID0gXCJtb3VzZWRvd25cIiwgaSA9IHt9KSB7XG4gIEwoXG4gICAgbyxcbiAgICAoYykgPT4ge1xuICAgICAgY29uc3QgbiA9IGMudGFyZ2V0O1xuICAgICAgaWYgKCFuIHx8ICFuLmlzQ29ubmVjdGVkKVxuICAgICAgICByZXR1cm47XG4gICAgICAoQXJyYXkuaXNBcnJheSh0KSA/IHQuZmlsdGVyKChlKSA9PiAhIWUuY3VycmVudCkuZXZlcnkoKGUpID0+IGUuY3VycmVudCAmJiAhZS5jdXJyZW50LmNvbnRhaW5zKG4pKSA6IHQuY3VycmVudCAmJiAhdC5jdXJyZW50LmNvbnRhaW5zKG4pKSAmJiBzKGMpO1xuICAgIH0sXG4gICAgdm9pZCAwLFxuICAgIGlcbiAgKTtcbn1cbmV4cG9ydCB7XG4gIGcgYXMgYSxcbiAgTyBhcyB1XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/@deriv-com/ui/dist/index-EY1gwl5O.js\n'
                        );

                        /***/
                    },

                /***/ '../../node_modules/@deriv-com/utils/dist/deriv-utils.js':
                    /*!***************************************************************!*\
  !*** ../../node_modules/@deriv-com/utils/dist/deriv-utils.js ***!
  \***************************************************************/
                    /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppIDConstants: () => (/* binding */ Ke),\n/* harmony export */   BrandConstants: () => (/* binding */ ke),\n/* harmony export */   BrandUtils: () => (/* binding */ at),\n/* harmony export */   CurrencyConstants: () => (/* binding */ He),\n/* harmony export */   DocumentConstants: () => (/* binding */ We),\n/* harmony export */   FormatUtils: () => (/* binding */ Qe),\n/* harmony export */   ImageUtils: () => (/* binding */ qe),\n/* harmony export */   LocalStorageConstants: () => (/* binding */ xe),\n/* harmony export */   LocalStorageUtils: () => (/* binding */ et),\n/* harmony export */   MobileDevicesConstants: () => (/* binding */ Xe),\n/* harmony export */   OSDetectionUtils: () => (/* binding */ st),\n/* harmony export */   ObjectUtils: () => (/* binding */ tt),\n/* harmony export */   PromiseUtils: () => (/* binding */ rt),\n/* harmony export */   URLConstants: () => (/* binding */ Ve),\n/* harmony export */   URLUtils: () => (/* binding */ ot),\n/* harmony export */   ValidationConstants: () => (/* binding */ Je),\n/* harmony export */   WebSocketUtils: () => (/* binding */ nt)\n/* harmony export */ });\nconst v = {\n  real: "green.derivws.com",\n  demo: "blue.derivws.com"\n}, w = {\n  "deriv.app": "16929",\n  "app.deriv.com": "16929",\n  "staging-app.deriv.com": "16303",\n  "app.deriv.me": "1411",\n  "staging-app.deriv.me": "1411",\n  "app.deriv.be": "30767",\n  "staging-app.deriv.be": "31186",\n  "binary.com": "1",\n  "test-app.deriv.com": "51072",\n  "p2p.deriv.com": "61859",\n  "staging-p2p.deriv.com": "62019"\n}, D = "deriv", Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  appBrand: D,\n  domainAppId: w,\n  environments: v\n}, Symbol.toStringTag, { value: "Module" })), L = {\n  AAD: 2,\n  AED: 2,\n  AFN: 2,\n  ALL: 2,\n  AMD: 2,\n  ANG: 2,\n  AOA: 2,\n  ARS: 2,\n  AUD: 2,\n  AWG: 2,\n  AZN: 2,\n  BAM: 2,\n  BBD: 2,\n  BCH: 8,\n  BDT: 2,\n  BGN: 2,\n  BHD: 3,\n  BIF: 0,\n  BMD: 2,\n  BND: 2,\n  BOB: 2,\n  BOV: 2,\n  BRL: 2,\n  BSD: 2,\n  BTC: 8,\n  BTN: 2,\n  BUSD: 2,\n  BWP: 2,\n  BYN: 2,\n  BZD: 2,\n  CAD: 2,\n  CDF: 2,\n  CHE: 2,\n  CHF: 2,\n  CHW: 2,\n  CLF: 4,\n  CLP: 0,\n  CNY: 2,\n  COP: 2,\n  COU: 2,\n  CRC: 2,\n  CUC: 2,\n  CUP: 2,\n  CVE: 2,\n  CZK: 2,\n  DAI: 2,\n  DJF: 0,\n  DKK: 2,\n  DOP: 2,\n  DZD: 2,\n  EGP: 2,\n  ERN: 2,\n  ETB: 2,\n  ETC: 8,\n  ETH: 8,\n  EUR: 2,\n  EURS: 2,\n  eUSDT: 2,\n  FJD: 2,\n  FKP: 2,\n  GBP: 2,\n  GEL: 2,\n  GHS: 2,\n  GIP: 2,\n  GMD: 2,\n  GNF: 0,\n  GTQ: 2,\n  GYD: 2,\n  HKD: 2,\n  HNL: 2,\n  HRK: 2,\n  HTG: 2,\n  HUF: 2,\n  IDK: 0,\n  IDR: 2,\n  ILS: 2,\n  INR: 2,\n  IQD: 3,\n  IRR: 2,\n  ISK: 0,\n  JMD: 2,\n  JOD: 3,\n  JPY: 0,\n  KES: 2,\n  KGS: 2,\n  KHR: 2,\n  KMF: 0,\n  KPW: 2,\n  KRW: 0,\n  KWD: 3,\n  KYD: 2,\n  KZT: 2,\n  LAK: 2,\n  LBP: 2,\n  LKR: 2,\n  LRD: 2,\n  LSL: 2,\n  LTC: 8,\n  LYD: 3,\n  MAD: 2,\n  MDL: 2,\n  MGA: 2,\n  MKD: 2,\n  MMK: 2,\n  MNT: 2,\n  MOP: 2,\n  MRU: 2,\n  MUR: 2,\n  MVR: 2,\n  MWK: 2,\n  MXN: 2,\n  MXV: 2,\n  MYR: 2,\n  MZN: 2,\n  NAD: 2,\n  NGN: 2,\n  NIO: 2,\n  NOK: 2,\n  NPR: 2,\n  NZD: 2,\n  OMR: 3,\n  PAB: 2,\n  PAX: 2,\n  PEN: 2,\n  PGK: 2,\n  PHP: 2,\n  PKR: 2,\n  PLN: 2,\n  PYG: 0,\n  QAR: 2,\n  RON: 2,\n  RSD: 2,\n  RUB: 2,\n  RWF: 0,\n  SAR: 2,\n  SBD: 2,\n  SCR: 2,\n  SDG: 2,\n  SEK: 2,\n  SGD: 2,\n  SHP: 2,\n  SLL: 2,\n  SOS: 2,\n  SRD: 2,\n  SSP: 2,\n  STN: 2,\n  SVC: 2,\n  SYP: 2,\n  SZL: 2,\n  THB: 2,\n  TJS: 2,\n  TMT: 2,\n  TND: 3,\n  TOP: 2,\n  TRY: 2,\n  TTD: 2,\n  TUSD: 2,\n  tUSDT: 2,\n  TWD: 2,\n  TZS: 2,\n  UAH: 2,\n  UGX: 0,\n  USB: 2,\n  USD: 2,\n  USDC: 2,\n  USDK: 2,\n  UST: 2,\n  USN: 2,\n  UYI: 0,\n  UYU: 2,\n  UYW: 4,\n  UZS: 2,\n  VES: 2,\n  VND: 0,\n  VUV: 0,\n  WST: 2,\n  XAF: 0,\n  XCD: 2,\n  XOF: 0,\n  XPF: 0,\n  YER: 2,\n  ZAR: 2,\n  ZMW: 2,\n  ZWL: 2\n}, He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  precision: L\n}, Symbol.toStringTag, { value: "Module" })), P = ["PNG", "JPG", "JPEG", "GIF", "PDF"], We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  supportedDocumentFormats: P\n}, Symbol.toStringTag, { value: "Module" })), T = "client.active_loginid", V = "client.account_list", J = "client.verify_email", O = "config.app_id", M = "config.server_url", p = "i18n_language", k = "ui.theme", X = "ui.show_report_drawer", Q = "ui.expand_account_switcher", q = "trader.layout", ee = "should_not_show_auto_archive_message_again", te = "order_ids", re = "should_show_p2p_guide", ne = "should_show_p2p_follow_user_guide", xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  accountList: V,\n  activeLoginid: T,\n  configAppId: O,\n  configServerURL: M,\n  i18nLanguage: p,\n  lastVerifyEmail: J,\n  p2pArchiveMessage: ee,\n  p2pOrderIds: te,\n  p2pShowFollowUserGuide: ne,\n  p2pShowGuide: re,\n  traderLayout: q,\n  uiExpandAccountSwitcher: Q,\n  uiShowReportsDrawer: X,\n  uiTheme: k\n}, Symbol.toStringTag, { value: "Module" })), h = "deriv.com", R = "deriv.me", N = "deriv.be", C = [h, N, R], f = typeof window < "u" && window.location.hostname.split("app.")[1], d = C.includes(f) ? f : h, oe = `https://bot.${d}`, ae = `https://staging-bot.${d}`, se = `https://app.${d}`, ie = `https://staging-app.${d}`, U = `https://${d}`, $ = `https://eu.${d}`, ce = `https://staging.${d}`, de = d, le = `https://smarttrader.${d}`, ue = `https://staging-smarttrader.${d}`, ge = `https://p2p.${d}`, me = `https://staging-p2p.${d}`, pe = "https://wa.me/35699578341", Se = {\n  lang: "lang",\n  action: "action"\n}, Ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  baseDomain: f,\n  binaryBotProduction: oe,\n  binaryBotStaging: ae,\n  deriv: h,\n  derivAppProduction: se,\n  derivAppStaging: ie,\n  derivBe: N,\n  derivComProduction: U,\n  derivComProductionEU: $,\n  derivComStaging: ce,\n  derivHost: de,\n  derivMe: R,\n  derivP2pProduction: ge,\n  derivP2pStaging: me,\n  domain: d,\n  queryParameters: Se,\n  smartTraderProduction: le,\n  smartTraderStaging: ue,\n  supportedDomains: C,\n  whatsApp: pe\n}, Symbol.toStringTag, { value: "Module" })), fe = {\n  /**\n   * Represents the special characters permitted in an address.\n   * @remarks This is to be used in the message of the validation error, to let the user know which characters are permitted.\n   * @example `Special characters permitted: ${ValidationConstants.messagesHints.addressPermittedSpecialCharacters}`\n   */\n  addressPermittedSpecialCharacters: ". , \' : ; ( ) ° @ # / -"\n}, Ae = {\n  /**\n   * @regex /^[\\p{L}\\p{Nd}\\s\'’.,:;()\\\\x{b0}@#/-]{0,70}$/u\n   * @description\n   * This pattern matches any string with no more than 70 characters, can contain letters, numbers, spaces, and any of the following special characters: \'’.,:;()@#/-.\n   * @example ValidationConstants.patterns.address.test("123 Main St.")\n   * @example ValidationConstants.patterns.address.test("Apt. 123")\n   * @example ValidationConstants.patterns.address.test("123 Main St. Apt. 123")\n   **/\n  address: /^[\\p{L}\\p{Nd}\\s\'’.,:;()\\\\x{b0}@#/-]{0,70}$/u,\n  /**\n   * @regex /^\\p{L}[\\p{L}\\s\'.-]{0,49}$/u\n   * @description This pattern matches any string with no more than 50 characters.\n   * @example ValidationConstants.patterns.addressCity.test("Main St.")\n   * @example ValidationConstants.patterns.addressCity.test("Apt.")\n   * @example ValidationConstants.patterns.addressCity.test("Main St. Apt.")\n   **/\n  addressCity: new RegExp("^\\\\p{L}[\\\\p{L}\\\\s\'.-]{0,49}$", "u"),\n  /**\n   * @regex /^[\\p{L}\\p{Nd}\\s\'.,-;]{0,100}$/u\n   * @description This pattern matches any string that contains up to 100 characters composed of Unicode letters, Unicode digits, whitespace characters, apostrophes, periods, commas, hyphens, and semicolons ( \'.,-;).\n   * @example ValidationConstants.patterns.addressState.test("New York")\n   * @example ValidationConstants.patterns.addressState.test("Québec")\n   **/\n  addressState: /^[\\p{L}\\p{Nd}\\s\'.,-;]{0,100}$/u,\n  /**\n   * @regex /^(?=.{1,20}$)[+-]?[0-9]+\\.?[0-9]*$/\n   * @description This pattern matches any string with 0-9 characters (numeric values. i.e. both integers and floats), and may contain a \'+\' or \'-\' sign.\n   * @example ValidationConstants.patterns.barrier.test("123")\n   * @example ValidationConstants.patterns.barrier.test("123.45")\n   * @example ValidationConstants.patterns.barrier.test("-123")\n   * @example ValidationConstants.patterns.barrier.test("-123.45")\n   * @example ValidationConstants.patterns.barrier.test("+123")\n   * @example ValidationConstants.patterns.barrier.test("+123.45")\n   */\n  barrier: /^(?=.{1,20}$)[+-]?[0-9]+\\.?[0-9]*$/,\n  /**\n   * @regex /^\\d*(\\.\\d+)?$/\n   * @description This pattern matches any string that contains only numeric values, and may contain a decimal point.\n   * @example ValidationConstants.patterns.decimal.test("123")\n   * @example ValidationConstants.patterns.decimal.test("123.45")\n   */\n  decimal: /^\\d*(\\.\\d+)?$/,\n  /**\n   * @regex /^\\d+$/\n   * @description This pattern matches any string that contains only numeric values.\n   * @example ValidationConstants.patterns.integer.test("123")\n   * @example ValidationConstants.patterns.integer.test("12345")\n   */\n  integer: /^\\d+$/,\n  /**\n   * @regex /p[.\\s]+o[.\\s]+box/i\n   * @description This pattern matches any string that contains the characters \'p.o.box\' or \'p o box\'.\n   * @example ValidationConstants.patterns.postalOfficeBoxNumber.test("P.O. Box 1234")\n   * @example ValidationConstants.patterns.postalOfficeBoxNumber.test("p.o. box 1234")\n   * @example ValidationConstants.patterns.postalOfficeBoxNumber.test("P O Box 1234")\n   * @example ValidationConstants.patterns.postalOfficeBoxNumber.test("p o box 1234")\n   */\n  postalOfficeBoxNumber: /p[.\\s]+o[.\\s]+box/i,\n  /**\n   * @regex /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63}$/\n   * @description This pattern matches any string with 2-63 characters, and contains aplhanumeric characters, an \'@\' sign, and may also contain any of these characters \'+,-._\'.\n   * @example ValidationConstants.patterns.email.test("doe@meme.me")\n   * **/\n  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63}$/,\n  /**\n   * @regex /^(?=.*[a-z])(?=.*\\d)(?=.*[A-Z])[!-~]{8,25}$/\n   * @description This pattern matches any string that contains 8-25 characters that include; at least one lowercase letter, at least one digit, at least one uppercase letter, and only printable ASCII characters (from \'!\' to \'~\')\n   * @example ValidationConstants.patterns.password.test("Password1!")\n   **/\n  password: /^(?=.*[a-z])(?=.*\\d)(?=.*[A-Z])[!-~]{8,25}$/,\n  /**\n   * @regex /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[ -~]{6,50}$/\n   * @description This pattern matches any string that contains 6-50 characters that include; at least one lowercase letter, at least one digit, at least one uppercase letter, and only printable ASCII characters (from \'!\' to \'~\')\n   * @example ValidationConstants.patterns.affilliatePassword.test("Password1")\n   **/\n  affilliatePassword: /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[ -~]{6,50}$/,\n  /**\n   * @regex /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{1,255}$/\n   * @description This pattern matches any string with 1-255 characters, and contains aplhanumeric characters, an \'@\' sign, and may also contain any of these characters \'+,-._\'.\n   * @example ValidationConstants.patterns.paymentAgentEmail.test("doe@meme.us")\n   **/\n  paymentAgentEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{1,255}$/,\n  /**\n   * @regex /^([A-Za-z0-9][A-Za-z0-9\\s-]{0,20})?$/\n   * @description This pattern matches any string with no more than 20 characters and may not contain \'+\'.\n   * @example ValidationConstants.patterns.postalCode.test("123")\n   * @example ValidationConstants.patterns.postalCode.test("123-456")\n   **/\n  postalCode: /^([A-Za-z0-9][A-Za-z0-9\\s-]{0,20})?$/,\n  /**\n   * @regex /^(?!^$|\\s+)[A-Za-z0-9.\\/\\s-]{0,25}$/\n   * @description This pattern matches any string with 0-25 characters, and may contain alphanumeric characters (both uppercase and lowercase), and any of these characters\'./-\', and or sapce characters\n   * @example ValidationConstants.patterns.taxIdentificationNumber.test("123")\n   **/\n  taxIdentificationNumber: /^(?!^$|\\s+)[A-Za-z0-9.\\/\\s-]{0,25}$/,\n  /**\n   * @regex /^\\+((-|\\s)*[0-9]){9,20}$/\n   * @description This pattern matches any string that starts with a \'+\' character, followed by 9-20 digits, allowing hyphens or spaces.\n   * @example ValidationConstants.patterns.phoneNumber.test("+1234567890")\n   **/\n  phoneNumber: /^\\+((-|\\s)*[0-9]){9,20}$/,\n  /**\n   * @regex /(image|application)\\/(jpe?g|pdf|png)$/\n   * @description This pattern matches any of the file types jpeg, jpg, pdf, or png.\n   * @example ValidationConstants.patterns.fileType.test("image/jpeg")\n   * @example ValidationConstants.patterns.fileType.test("application/pdf")\n   * @example ValidationConstants.patterns.fileType.test("image/png")\n   * @example ValidationConstants.patterns.fileType.test("image/jpg")\n   **/\n  fileType: /(image|application)\\/(jpe?g|pdf|png)$/,\n  /**\n   * @regex /(^\\d{4})\\s(\\d{2}X{2})\\s(X{4})\\s(\\d{4}$)/\n   * @description This pattern matches any string that\'s formatted in the following format: 1234 56XX XXXX 1121.\n   * @example ValidationConstants.patterns.formattedCardNumber.test("1234 56XX XXXX 1121")\n   **/\n  formattedCardNumber: /(^\\d{4})\\s(\\d{2}X{2})\\s(X{4})\\s(\\d{4}$)/,\n  /**\n   * @regex /[^\\dX\\s]/\n   * @description The is pattern matches any string that contains characters that aren\'t digits, the uppercase letter \'X\' and spaces.\n   * @example ValidationConstants.patterns.invalidFormattedCardNumberCharacters.test("9876-5432-1098")\n   * @example ValidationConstants.patterns.invalidFormattedCardNumberCharacters.test("9876 5432 1098")\n   **/\n  invalidFormattedCardNumberCharacters: /[^\\dX\\s]/,\n  /**\n   * @regex /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()+\\-=\\[\\]{};\':\\"|,\\.<>\\?_~])[ -~]{8,16}$/\n   * @description This pattern matches any string that contains 8-16 characters that include; at least one lowercase letter, at least one digit, at least one uppercase letter, and only printable ASCII characters (from \'!\' to \'~\')\n   * @example ValidationConstants.patterns.tradingPlatformInvestorPassword.test("Password1!$")\n   **/\n  tradingPlatformInvestorPassword: /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()+\\-=\\[\\]{};\':\\"|,\\.<>\\?_~])[ -~]{8,16}$/,\n  /**\n   * @regex /^[A-Za-z]+([a-zA-Z.\' -])*[a-zA-Z.\' -]+$/\n   * @description This pattern matches any string that starts with one or more letters (uppercase or lowercase), followed by zero or more occurrences of letters, and any of these characters (.\' -) and ends with one or more occurrences of letters, and any of these characters (.\' -).\n   * @example ValidationConstants.patterns.letterSymbols.test("John Doe")\n   * @example ValidationConstants.patterns.letterSymbols.test("John-Doe")\n   * @example ValidationConstants.patterns.letterSymbols.test("John O\'Doe")\n   */\n  letterSymbols: /^[A-Za-z]+([a-zA-Z.\' -])*[a-zA-Z.\' -]+$/,\n  /**\n   * @regex /^(?!.*\\s{2,})(?!\\s)[\\p{L}\\s\'.-]{1,50}$/u\n   * @description This pattern matches any string that contains 1 to 50 characters, starts and ends with valid characters (letters, whitespace, period, single quote, or hyphen).\n   * @example ValidationConstants.patterns.name.test("John Doe")\n   * @example ValidationConstants.patterns.name.test("John-Doe")\n   * @example ValidationConstants.patterns.name.test("John O\'Doe")\n   * @example ValidationConstants.patterns.name.test("John O. Doe")\n   */\n  name: /^(?!.*\\s{2,})(?!\\s)[\\p{L}\\s\'.-]{1,50}$/u,\n  /**\n   * @regex /[`~!@#$%^&*)(_=+[}{\\]\\\\/";:?><|]+/\n   * @description This pattern matches any string that contains any of these characters: `~!@#$%^&*)(_=+[}{\\]\\\\/";:?><|\n   * @example ValidationConstants.patterns.general.test("Password1!")\n   */\n  general: /[`~!@#$%^&*)(_=+[}{\\]\\\\/";:?><|]+/,\n  /**\n   * @regex /[a-z]/\n   * @description This pattern matches any string that contains lowercase letters.\n   * @example ValidationConstants.patterns.lowercase.test("abc")\n   */\n  lowercase: /[a-z]/,\n  /**\n   * @regex /\\d/\n   * @description This pattern matches any string that contains digits.\n   * @example ValidationConstants.patterns.number.test("pets123")\n   */\n  number: /\\d/,\n  /**\n   * @regex /\\W/\n   * @description This pattern matches any string that contains special characters.\n   * @example ValidationConstants.patterns.specialCharacter.test("Password1!")\n   */\n  specialCharacter: /\\W/,\n  /**\n   * @regex /[A-Z]/\n   * @description This pattern matches any string that contains uppercase letters.\n   * @example ValidationConstants.patterns.uppercase.test("ABC")\n   */\n  uppercase: /[A-Z]/,\n  /**\n   * @regex /^.{8,16}$/\n   * @description This pattern matches any string that contains 8-16 characters.\n   * @example ValidationConstants.patterns.between8and16Characters.test("Password1!")\n   */\n  between8and16Characters: /^.{8,16}$/,\n  /**\n   * @regex /^.{8,25}$/\n   * @description This pattern matches any string that contains 8-25 characters.\n   * @example ValidationConstants.patterns.between8and25Characters.test("Password1!")\n   */\n  between8and25Characters: /^.{8,25}$/\n}, Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  messagesHints: fe,\n  patterns: Ae\n}, Symbol.toStringTag, { value: "Module" })), E = {\n  brandName: "Deriv",\n  domainName: "Deriv.com"\n}, B = {\n  fx: "Deriv (FX) Ltd",\n  maltainvest: "Deriv Investments (Europe) Limited",\n  svg: "Deriv (SVG) LLC",\n  v: "Deriv (V) Ltd"\n}, j = {\n  trader: "Deriv Trader",\n  dBot: "Deriv Bot",\n  mt5: "Deriv MT5",\n  cTrader: "Deriv cTrader",\n  derivX: "Deriv X",\n  smartTrader: "SmartTrader",\n  bBot: "Binary Bot",\n  go: "Deriv GO"\n}, ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  brandConfig: E,\n  landingCompanies: B,\n  platforms: j\n}, Symbol.toStringTag, { value: "Module" })), F = /(ALP-|AMN-|ANA-|ANE-|ANG-|AQM-|ARS-|ART-|ATU-|BAC-|BLA-|BRQ-|CAG-|CAM-|CAN-|CAZ-|CDL-|CDY-|CLT-|CRO-|CUN-|DIG-|DRA-|DUA-|DUB-|DVC-|ELE-|ELS-|EML-|EVA-|EVR-|FIG-|FLA-|FRL-|GLK-|HMA-|HW-|HWI-|INE-|JAT-|JEF-|JER-|JKM-|JNY-|JSC-|LDN-|LIO-|LON-|LUA-|LYA-|LYO-|MAR-|MED-|MHA-|MLA-|MRD-|MYA-|NCE-|NEO-|NOH-|NOP-|OCE-|PAR-|PIC-|POT-|PPA-|PRA-|RNE-|SEA-|SLA-|SNE-|SPN-|STK-|TAH-|TAS-|TET-|TRT-|VCE-|VIE-|VKY-|VNS-|VOG-|VTR-|WAS-|WKG-|WLZ-|JAD-|MLD-|RTE-|NAM-|NEN-|BAL-|JLN-|YAL-|MGA-|FGD-|XYAO-|BON-|ALN-|ALT-|BRA-|DBY2-|STG-|MAO-|LEM-|GOA-|FOA-|MNA-|LNA-)/, Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  huaweiDevicesRegex: F\n}, Symbol.toStringTag, { value: "Module" })), De = (e, t) => {\n  try {\n    const { locale: r = "en-US", currency: n, decimalPlaces: o } = t || {}, i = L[n ?? "USD"], a = o || i;\n    return new Intl.NumberFormat(r, {\n      minimumFractionDigits: a,\n      maximumFractionDigits: a\n    }).format(e);\n  } catch {\n    return e.toString();\n  }\n}, he = (e, t) => {\n  let r;\n  const {\n    dateOptions: n = { day: "2-digit", month: "2-digit", year: "numeric" },\n    format: o = "YYYY-MM-DD",\n    unix: i = !1\n  } = t || {}, a = { ...n };\n  if (typeof e == "number" && i)\n    r = new Date(e * 1e3);\n  else if (typeof e == "string" || e instanceof Date) {\n    if (r = new Date(e), isNaN(r.getTime()))\n      throw new Error("Invalid date input");\n  } else\n    throw new Error("Invalid date input");\n  switch (o) {\n    case "DD MMM YYYY":\n      a.day = "2-digit", a.month = "short", a.year = "numeric";\n      break;\n    case "MMM DD YYYY":\n      return a.day = "2-digit", a.month = "short", a.year = "numeric", r.toLocaleDateString("en-GB", a).replace(/(\\d{2}) (\\w{3}) (\\d{4})/, "$2 $1 $3");\n    case "DD-MM-YYYY":\n      return a.day = "2-digit", a.month = "2-digit", a.year = "numeric", r.toLocaleDateString("en-GB", a).replace(/(\\d{2})\\/(\\d{2})\\/(\\d{4})/, "$1-$2-$3");\n    default:\n      a.year = "numeric", a.month = "2-digit", a.day = "2-digit";\n      break;\n  }\n  const s = r.toLocaleDateString("en-GB", a).replace(/(\\d{2}) (\\w{3,4}) (\\d{4})/, (c, l, u, m) => `${l} ${u.slice(0, 3)} ${m}`);\n  return o === "YYYY-MM-DD" ? s.replace(/(\\d{2})\\/(\\d{2})\\/(\\d{4})/, "$3-$2-$1") : s;\n}, _e = (e, t = !1) => {\n  let r;\n  if (typeof e == "number" && t)\n    r = new Date(e * 1e3);\n  else if (typeof e == "string" || e instanceof Date) {\n    if (r = new Date(e), isNaN(r.getTime()))\n      throw new Error("Invalid date input");\n  } else\n    throw new Error("Invalid date input");\n  return `${r.getUTCHours().toString().padStart(2, "0")}:${r.getUTCMinutes().toString().padStart(2, "0")}:${r.getUTCSeconds().toString().padStart(2, "0")} GMT`;\n}, ye = (e, t = "days", r = "add") => {\n  if (e < 0)\n    throw new Error("Amount must be a positive number.");\n  const n = /* @__PURE__ */ new Date(), o = r === "add" ? e : -e;\n  return t === "years" ? n.setFullYear(n.getFullYear() + o) : t === "days" && n.setDate(n.getDate() + o), n;\n}, be = (e) => {\n  const t = e.split(/,\\s/), r = /:\\s([0-9a-zA-Z]+.{25,28})/gm.exec(t[0]), n = r == null ? void 0 : r[1], o = /:\\s([0-9a-zA-Z]+.{25,34})/gm.exec(t[1]), i = o == null ? void 0 : o[1];\n  return { addressHash: n, blockchainHash: i, splitLongcode: t };\n}, Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  formatMoney: De,\n  getAdjustedDate: ye,\n  getFormattedDateString: he,\n  getFormattedTimeString: _e,\n  parseCryptoLongcode: be\n}, Symbol.toStringTag, { value: "Module" })), y = 2560, ve = 0.9, we = 4, G = ({ src: e, filename: t, options: r }) => {\n  const { maxWidth: n = y, quality: o = ve } = r || {};\n  return new Promise((i, a) => {\n    const s = new Image();\n    s.src = e, s.onload = () => {\n      const c = document.createElement("canvas"), l = c.getContext("2d");\n      if (!l || !(l instanceof CanvasRenderingContext2D))\n        return a(new Error("Failed to get 2D context"));\n      if (s.naturalWidth > n) {\n        const u = y, m = u / s.naturalWidth;\n        c.width = u, c.height = s.naturalHeight * m;\n      } else\n        c.width = s.naturalWidth, c.height = s.naturalHeight;\n      l.fillStyle = "transparent", l.fillRect(0, 0, c.width, c.height), l.save(), l.drawImage(s, 0, 0, c.width, c.height), c.toBlob(\n        (u) => {\n          if (!u)\n            return;\n          const m = t.replace(/\\.[^/.]+$/, ".jpg"), S = new Blob([u], { type: "image/jpeg" });\n          S.lastModifiedDate = Date.now(), S.name = m, i(S);\n        },\n        "image/jpeg",\n        o\n      );\n    };\n  });\n}, Y = (e) => new Promise((t) => {\n  const r = new FileReader();\n  r.readAsDataURL(e), r.onloadend = () => {\n    var n;\n    t({\n      src: ((n = r.result) == null ? void 0 : n.toString()) || "",\n      filename: e.name\n    });\n  };\n}), z = (e) => e ? P.some(\n  (t) => e.toUpperCase().endsWith(t)\n) : !1, Le = (e) => new Promise((t) => {\n  z(e.name) ? Y(e).then((r) => {\n    G(r).then(t);\n  }) : t(e);\n});\nfunction Pe(e, t = we) {\n  const r = new Uint8Array(t);\n  return new DataView(r.buffer).setUint32(0, e), r;\n}\nconst Te = (e, {\n  chunkSize: t = 16384\n  /* 16KB */\n}) => {\n  const r = [];\n  for (let n = 0; n < e.length; n++) {\n    const o = e[n];\n    n % t === 0 ? r.push([o]) : r[r.length - 1].push(o);\n  }\n  return r.map((n) => new Uint8Array(n)).concat(new Uint8Array([]));\n}, Oe = (e) => {\n  const t = new FileReader();\n  return new Promise((r) => {\n    t.onload = () => {\n      const n = {\n        filename: e.name,\n        buffer: t.result,\n        fileSize: e.size\n      };\n      r(n);\n    }, t.onerror = () => {\n      r({\n        message: `Unable to read file ${e.name}`\n      });\n    }, t.readAsArrayBuffer(e);\n  });\n}, qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  compressImage: G,\n  compressImageFile: Le,\n  convertToBase64: Y,\n  generateChunks: Te,\n  isSupportedImageFormat: z,\n  numToUint8Array: Pe,\n  readFile: Oe\n}, Symbol.toStringTag, { value: "Module" })), g = (e) => {\n  const t = localStorage.getItem(e);\n  if (t !== "undefined") {\n    if (t === null || t === "null")\n      return null;\n    try {\n      return JSON.parse(t);\n    } catch {\n      return null;\n    }\n  }\n}, Me = (e, t) => {\n  localStorage.setItem(e, JSON.stringify(t));\n}, et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  getValue: g,\n  setValue: Me\n}, Symbol.toStringTag, { value: "Module" })), I = (e) => Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}), Re = async (e) => {\n  const t = new TextEncoder().encode(JSON.stringify(I(e))), r = await crypto.subtle.digest("SHA-256", t);\n  return Array.from(new Uint8Array(r)).map((i) => ("00" + i.toString(16)).slice(-2)).join("");\n}, Z = (e, t) => Array.isArray(e) && Array.isArray(t) ? t.map((r, n) => Z(e[n], r)) : typeof e == "object" && e !== null && typeof t == "object" && t !== null ? K(e, t) : t, K = (e, ...t) => {\n  for (const r of t)\n    for (const n in r)\n      r[n] === null || r[n] === void 0 || (e[n] = Z(e[n], r[n]));\n  return e;\n}, tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  hashObject: Re,\n  merge: K,\n  sortObjectByKeys: I\n}, Symbol.toStringTag, { value: "Module" }));\nfunction Ne() {\n  let e, t;\n  return {\n    promise: new Promise((n, o) => {\n      e = n, t = o;\n    }),\n    resolve: e,\n    reject: t\n  };\n}\nconst rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  createPromise: Ne\n}, Symbol.toStringTag, { value: "Module" })), H = () => {\n  const t = new URLSearchParams(window.location.search).get("acct1");\n  return g(T) || t;\n}, W = (e) => e && !/^VR/.test(e) ? "real" : "demo", _ = () => {\n  const e = g(O);\n  if (e)\n    return e;\n  const t = window.location.hostname, r = w[t];\n  return r || "36300";\n}, nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  getActiveLoginid: H,\n  getAppId: _,\n  getEnvironmentFromLoginid: W\n}, Symbol.toStringTag, { value: "Module" })), Ce = () => {\n  const e = [], t = [], r = new URLSearchParams(window.location.search);\n  for (const [o, i] of r.entries()) {\n    const a = o.match(/^acct(\\d+)/), s = o.match(/^token(\\d+)/), c = o.match(/^cur(\\d+)/);\n    a && (e[+a[1] - 1] = {\n      ...e[+a[1] - 1] || {},\n      loginid: i\n    }), s && (e[+s[1] - 1] = {\n      ...e[+s[1] - 1] || {},\n      token: i\n    }), c && (e[+c[1] - 1] = {\n      ...e[+c[1] - 1] || {},\n      currency: i\n    }), (/acct/.test(o) || /token/.test(o) || /cur/.test(o)) && t.push(o);\n  }\n  return { loginInfo: e.filter(\n    (o) => ["loginid", "token", "currency"].every((i) => Object.keys(o).includes(i))\n  ), paramsToDelete: t };\n}, Ue = (e) => {\n  if (e != null && e.length)\n    return e.find((t) => /^VR/.test(t.loginid)) || e[0];\n}, $e = (e) => {\n  const t = new URLSearchParams(window.location.search);\n  e.forEach((n) => t.delete(n));\n  const r = `${window.location.pathname}${t.toString() ? `?${t.toString()}` : ""}`;\n  window.history.pushState(null, "", r);\n}, Ee = () => {\n  const e = g(p) ?? "EN";\n  return `https://oauth.deriv.com/oauth2/authorize?app_id=${_()}&l=${e}&brand=${D}`;\n}, x = () => {\n  const e = g(M);\n  if (e)\n    return e;\n  const t = H();\n  return v[W(t)];\n}, Be = () => {\n  const e = x(), t = g(p) ?? "EN";\n  return `wss://${e}/websockets/v3?app_id=${_()}&l=${t}&brand=${D}`;\n}, je = (e) => new URLSearchParams(window.location.search).get(e), A = (e) => e.replace(/(^\\/|\\/$|[^a-zA-Z0-9-_./()#])/g, ""), Fe = (e, t) => {\n  var o;\n  const r = t != null && t.isEU ? $ : U;\n  let n = ((o = g(p)) == null ? void 0 : o.toLowerCase()) ?? "en";\n  return n = n === "en" ? "" : `/${n.replace("_", "-")}`, t != null && t.isDocument ? `${r}/${A(e)}` : `${r}${n}/${A(e)}`;\n}, Ge = (e) => /^(((.*)\\.)?(localhost:8443|pages.dev|binary\\.(sx|com)|deriv.(com|me|be|dev)))$/.test(e), ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  filterSearchParams: $e,\n  getDefaultActiveAccount: Ue,\n  getDerivStaticURL: Fe,\n  getLoginInfoFromURL: Ce,\n  getOauthURL: Ee,\n  getQueryParameter: je,\n  getServerURL: x,\n  getWebsocketURL: Be,\n  isDomainAllowed: Ge,\n  normalizePath: A\n}, Symbol.toStringTag, { value: "Module" })), Ye = (e) => B[e], ze = () => E.domainName, Ie = (e) => j[e], at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  getBrandWebsiteName: ze,\n  getLegalLandingCompany: Ye,\n  getPlatformName: Ie\n}, Symbol.toStringTag, { value: "Module" })), b = (e) => F.test(e), Ze = async () => {\n  const e = window, t = navigator, r = t.userAgent ?? e.opera ?? "";\n  if (/windows phone/i.test(r))\n    return "Windows Phone";\n  if (/android/i.test(r)) {\n    if (t.userAgentData) {\n      const n = await t.userAgentData.getHighEntropyValues(["model"]);\n      if (b((n == null ? void 0 : n.model) || ""))\n        return "huawei";\n    } else if (b(r) || /huawei/i.test(r))\n      return "huawei";\n    return "Android";\n  }\n  return /iPad|iPhone|iPod/.test(r) && !e.MSStream ? "iOS" : "unknown";\n}, st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({\n  __proto__: null,\n  mobileOSDetectAsync: Ze\n}, Symbol.toStringTag, { value: "Module" }));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL0BkZXJpdi1jb20vdXRpbHMvZGlzdC9kZXJpdi11dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi90cmFkZXIvLi4vLi4vbm9kZV9tb2R1bGVzL0BkZXJpdi1jb20vdXRpbHMvZGlzdC9kZXJpdi11dGlscy5qcz85NDUxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHYgPSB7XG4gIHJlYWw6IFwiZ3JlZW4uZGVyaXZ3cy5jb21cIixcbiAgZGVtbzogXCJibHVlLmRlcml2d3MuY29tXCJcbn0sIHcgPSB7XG4gIFwiZGVyaXYuYXBwXCI6IFwiMTY5MjlcIixcbiAgXCJhcHAuZGVyaXYuY29tXCI6IFwiMTY5MjlcIixcbiAgXCJzdGFnaW5nLWFwcC5kZXJpdi5jb21cIjogXCIxNjMwM1wiLFxuICBcImFwcC5kZXJpdi5tZVwiOiBcIjE0MTFcIixcbiAgXCJzdGFnaW5nLWFwcC5kZXJpdi5tZVwiOiBcIjE0MTFcIixcbiAgXCJhcHAuZGVyaXYuYmVcIjogXCIzMDc2N1wiLFxuICBcInN0YWdpbmctYXBwLmRlcml2LmJlXCI6IFwiMzExODZcIixcbiAgXCJiaW5hcnkuY29tXCI6IFwiMVwiLFxuICBcInRlc3QtYXBwLmRlcml2LmNvbVwiOiBcIjUxMDcyXCIsXG4gIFwicDJwLmRlcml2LmNvbVwiOiBcIjYxODU5XCIsXG4gIFwic3RhZ2luZy1wMnAuZGVyaXYuY29tXCI6IFwiNjIwMTlcIlxufSwgRCA9IFwiZGVyaXZcIiwgS2UgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBhcHBCcmFuZDogRCxcbiAgZG9tYWluQXBwSWQ6IHcsXG4gIGVudmlyb25tZW50czogdlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgTCA9IHtcbiAgQUFEOiAyLFxuICBBRUQ6IDIsXG4gIEFGTjogMixcbiAgQUxMOiAyLFxuICBBTUQ6IDIsXG4gIEFORzogMixcbiAgQU9BOiAyLFxuICBBUlM6IDIsXG4gIEFVRDogMixcbiAgQVdHOiAyLFxuICBBWk46IDIsXG4gIEJBTTogMixcbiAgQkJEOiAyLFxuICBCQ0g6IDgsXG4gIEJEVDogMixcbiAgQkdOOiAyLFxuICBCSEQ6IDMsXG4gIEJJRjogMCxcbiAgQk1EOiAyLFxuICBCTkQ6IDIsXG4gIEJPQjogMixcbiAgQk9WOiAyLFxuICBCUkw6IDIsXG4gIEJTRDogMixcbiAgQlRDOiA4LFxuICBCVE46IDIsXG4gIEJVU0Q6IDIsXG4gIEJXUDogMixcbiAgQllOOiAyLFxuICBCWkQ6IDIsXG4gIENBRDogMixcbiAgQ0RGOiAyLFxuICBDSEU6IDIsXG4gIENIRjogMixcbiAgQ0hXOiAyLFxuICBDTEY6IDQsXG4gIENMUDogMCxcbiAgQ05ZOiAyLFxuICBDT1A6IDIsXG4gIENPVTogMixcbiAgQ1JDOiAyLFxuICBDVUM6IDIsXG4gIENVUDogMixcbiAgQ1ZFOiAyLFxuICBDWks6IDIsXG4gIERBSTogMixcbiAgREpGOiAwLFxuICBES0s6IDIsXG4gIERPUDogMixcbiAgRFpEOiAyLFxuICBFR1A6IDIsXG4gIEVSTjogMixcbiAgRVRCOiAyLFxuICBFVEM6IDgsXG4gIEVUSDogOCxcbiAgRVVSOiAyLFxuICBFVVJTOiAyLFxuICBlVVNEVDogMixcbiAgRkpEOiAyLFxuICBGS1A6IDIsXG4gIEdCUDogMixcbiAgR0VMOiAyLFxuICBHSFM6IDIsXG4gIEdJUDogMixcbiAgR01EOiAyLFxuICBHTkY6IDAsXG4gIEdUUTogMixcbiAgR1lEOiAyLFxuICBIS0Q6IDIsXG4gIEhOTDogMixcbiAgSFJLOiAyLFxuICBIVEc6IDIsXG4gIEhVRjogMixcbiAgSURLOiAwLFxuICBJRFI6IDIsXG4gIElMUzogMixcbiAgSU5SOiAyLFxuICBJUUQ6IDMsXG4gIElSUjogMixcbiAgSVNLOiAwLFxuICBKTUQ6IDIsXG4gIEpPRDogMyxcbiAgSlBZOiAwLFxuICBLRVM6IDIsXG4gIEtHUzogMixcbiAgS0hSOiAyLFxuICBLTUY6IDAsXG4gIEtQVzogMixcbiAgS1JXOiAwLFxuICBLV0Q6IDMsXG4gIEtZRDogMixcbiAgS1pUOiAyLFxuICBMQUs6IDIsXG4gIExCUDogMixcbiAgTEtSOiAyLFxuICBMUkQ6IDIsXG4gIExTTDogMixcbiAgTFRDOiA4LFxuICBMWUQ6IDMsXG4gIE1BRDogMixcbiAgTURMOiAyLFxuICBNR0E6IDIsXG4gIE1LRDogMixcbiAgTU1LOiAyLFxuICBNTlQ6IDIsXG4gIE1PUDogMixcbiAgTVJVOiAyLFxuICBNVVI6IDIsXG4gIE1WUjogMixcbiAgTVdLOiAyLFxuICBNWE46IDIsXG4gIE1YVjogMixcbiAgTVlSOiAyLFxuICBNWk46IDIsXG4gIE5BRDogMixcbiAgTkdOOiAyLFxuICBOSU86IDIsXG4gIE5PSzogMixcbiAgTlBSOiAyLFxuICBOWkQ6IDIsXG4gIE9NUjogMyxcbiAgUEFCOiAyLFxuICBQQVg6IDIsXG4gIFBFTjogMixcbiAgUEdLOiAyLFxuICBQSFA6IDIsXG4gIFBLUjogMixcbiAgUExOOiAyLFxuICBQWUc6IDAsXG4gIFFBUjogMixcbiAgUk9OOiAyLFxuICBSU0Q6IDIsXG4gIFJVQjogMixcbiAgUldGOiAwLFxuICBTQVI6IDIsXG4gIFNCRDogMixcbiAgU0NSOiAyLFxuICBTREc6IDIsXG4gIFNFSzogMixcbiAgU0dEOiAyLFxuICBTSFA6IDIsXG4gIFNMTDogMixcbiAgU09TOiAyLFxuICBTUkQ6IDIsXG4gIFNTUDogMixcbiAgU1ROOiAyLFxuICBTVkM6IDIsXG4gIFNZUDogMixcbiAgU1pMOiAyLFxuICBUSEI6IDIsXG4gIFRKUzogMixcbiAgVE1UOiAyLFxuICBUTkQ6IDMsXG4gIFRPUDogMixcbiAgVFJZOiAyLFxuICBUVEQ6IDIsXG4gIFRVU0Q6IDIsXG4gIHRVU0RUOiAyLFxuICBUV0Q6IDIsXG4gIFRaUzogMixcbiAgVUFIOiAyLFxuICBVR1g6IDAsXG4gIFVTQjogMixcbiAgVVNEOiAyLFxuICBVU0RDOiAyLFxuICBVU0RLOiAyLFxuICBVU1Q6IDIsXG4gIFVTTjogMixcbiAgVVlJOiAwLFxuICBVWVU6IDIsXG4gIFVZVzogNCxcbiAgVVpTOiAyLFxuICBWRVM6IDIsXG4gIFZORDogMCxcbiAgVlVWOiAwLFxuICBXU1Q6IDIsXG4gIFhBRjogMCxcbiAgWENEOiAyLFxuICBYT0Y6IDAsXG4gIFhQRjogMCxcbiAgWUVSOiAyLFxuICBaQVI6IDIsXG4gIFpNVzogMixcbiAgWldMOiAyXG59LCBIZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIHByZWNpc2lvbjogTFxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgUCA9IFtcIlBOR1wiLCBcIkpQR1wiLCBcIkpQRUdcIiwgXCJHSUZcIiwgXCJQREZcIl0sIFdlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgc3VwcG9ydGVkRG9jdW1lbnRGb3JtYXRzOiBQXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBUID0gXCJjbGllbnQuYWN0aXZlX2xvZ2luaWRcIiwgViA9IFwiY2xpZW50LmFjY291bnRfbGlzdFwiLCBKID0gXCJjbGllbnQudmVyaWZ5X2VtYWlsXCIsIE8gPSBcImNvbmZpZy5hcHBfaWRcIiwgTSA9IFwiY29uZmlnLnNlcnZlcl91cmxcIiwgcCA9IFwiaTE4bl9sYW5ndWFnZVwiLCBrID0gXCJ1aS50aGVtZVwiLCBYID0gXCJ1aS5zaG93X3JlcG9ydF9kcmF3ZXJcIiwgUSA9IFwidWkuZXhwYW5kX2FjY291bnRfc3dpdGNoZXJcIiwgcSA9IFwidHJhZGVyLmxheW91dFwiLCBlZSA9IFwic2hvdWxkX25vdF9zaG93X2F1dG9fYXJjaGl2ZV9tZXNzYWdlX2FnYWluXCIsIHRlID0gXCJvcmRlcl9pZHNcIiwgcmUgPSBcInNob3VsZF9zaG93X3AycF9ndWlkZVwiLCBuZSA9IFwic2hvdWxkX3Nob3dfcDJwX2ZvbGxvd191c2VyX2d1aWRlXCIsIHhlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYWNjb3VudExpc3Q6IFYsXG4gIGFjdGl2ZUxvZ2luaWQ6IFQsXG4gIGNvbmZpZ0FwcElkOiBPLFxuICBjb25maWdTZXJ2ZXJVUkw6IE0sXG4gIGkxOG5MYW5ndWFnZTogcCxcbiAgbGFzdFZlcmlmeUVtYWlsOiBKLFxuICBwMnBBcmNoaXZlTWVzc2FnZTogZWUsXG4gIHAycE9yZGVySWRzOiB0ZSxcbiAgcDJwU2hvd0ZvbGxvd1VzZXJHdWlkZTogbmUsXG4gIHAycFNob3dHdWlkZTogcmUsXG4gIHRyYWRlckxheW91dDogcSxcbiAgdWlFeHBhbmRBY2NvdW50U3dpdGNoZXI6IFEsXG4gIHVpU2hvd1JlcG9ydHNEcmF3ZXI6IFgsXG4gIHVpVGhlbWU6IGtcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIGggPSBcImRlcml2LmNvbVwiLCBSID0gXCJkZXJpdi5tZVwiLCBOID0gXCJkZXJpdi5iZVwiLCBDID0gW2gsIE4sIFJdLCBmID0gdHlwZW9mIHdpbmRvdyA8IFwidVwiICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdChcImFwcC5cIilbMV0sIGQgPSBDLmluY2x1ZGVzKGYpID8gZiA6IGgsIG9lID0gYGh0dHBzOi8vYm90LiR7ZH1gLCBhZSA9IGBodHRwczovL3N0YWdpbmctYm90LiR7ZH1gLCBzZSA9IGBodHRwczovL2FwcC4ke2R9YCwgaWUgPSBgaHR0cHM6Ly9zdGFnaW5nLWFwcC4ke2R9YCwgVSA9IGBodHRwczovLyR7ZH1gLCAkID0gYGh0dHBzOi8vZXUuJHtkfWAsIGNlID0gYGh0dHBzOi8vc3RhZ2luZy4ke2R9YCwgZGUgPSBkLCBsZSA9IGBodHRwczovL3NtYXJ0dHJhZGVyLiR7ZH1gLCB1ZSA9IGBodHRwczovL3N0YWdpbmctc21hcnR0cmFkZXIuJHtkfWAsIGdlID0gYGh0dHBzOi8vcDJwLiR7ZH1gLCBtZSA9IGBodHRwczovL3N0YWdpbmctcDJwLiR7ZH1gLCBwZSA9IFwiaHR0cHM6Ly93YS5tZS8zNTY5OTU3ODM0MVwiLCBTZSA9IHtcbiAgbGFuZzogXCJsYW5nXCIsXG4gIGFjdGlvbjogXCJhY3Rpb25cIlxufSwgVmUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBiYXNlRG9tYWluOiBmLFxuICBiaW5hcnlCb3RQcm9kdWN0aW9uOiBvZSxcbiAgYmluYXJ5Qm90U3RhZ2luZzogYWUsXG4gIGRlcml2OiBoLFxuICBkZXJpdkFwcFByb2R1Y3Rpb246IHNlLFxuICBkZXJpdkFwcFN0YWdpbmc6IGllLFxuICBkZXJpdkJlOiBOLFxuICBkZXJpdkNvbVByb2R1Y3Rpb246IFUsXG4gIGRlcml2Q29tUHJvZHVjdGlvbkVVOiAkLFxuICBkZXJpdkNvbVN0YWdpbmc6IGNlLFxuICBkZXJpdkhvc3Q6IGRlLFxuICBkZXJpdk1lOiBSLFxuICBkZXJpdlAycFByb2R1Y3Rpb246IGdlLFxuICBkZXJpdlAycFN0YWdpbmc6IG1lLFxuICBkb21haW46IGQsXG4gIHF1ZXJ5UGFyYW1ldGVyczogU2UsXG4gIHNtYXJ0VHJhZGVyUHJvZHVjdGlvbjogbGUsXG4gIHNtYXJ0VHJhZGVyU3RhZ2luZzogdWUsXG4gIHN1cHBvcnRlZERvbWFpbnM6IEMsXG4gIHdoYXRzQXBwOiBwZVxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZmUgPSB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgcGVybWl0dGVkIGluIGFuIGFkZHJlc3MuXG4gICAqIEByZW1hcmtzIFRoaXMgaXMgdG8gYmUgdXNlZCBpbiB0aGUgbWVzc2FnZSBvZiB0aGUgdmFsaWRhdGlvbiBlcnJvciwgdG8gbGV0IHRoZSB1c2VyIGtub3cgd2hpY2ggY2hhcmFjdGVycyBhcmUgcGVybWl0dGVkLlxuICAgKiBAZXhhbXBsZSBgU3BlY2lhbCBjaGFyYWN0ZXJzIHBlcm1pdHRlZDogJHtWYWxpZGF0aW9uQ29uc3RhbnRzLm1lc3NhZ2VzSGludHMuYWRkcmVzc1Blcm1pdHRlZFNwZWNpYWxDaGFyYWN0ZXJzfWBcbiAgICovXG4gIGFkZHJlc3NQZXJtaXR0ZWRTcGVjaWFsQ2hhcmFjdGVyczogXCIuICwgJyA6IDsgKCApIMKwIEAgIyAvIC1cIlxufSwgQWUgPSB7XG4gIC8qKlxuICAgKiBAcmVnZXggL15bXFxwe0x9XFxwe05kfVxccyfigJkuLDo7KClcXFxceHtiMH1AIy8tXXswLDcwfSQvdVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhpcyBwYXR0ZXJuIG1hdGNoZXMgYW55IHN0cmluZyB3aXRoIG5vIG1vcmUgdGhhbiA3MCBjaGFyYWN0ZXJzLCBjYW4gY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzLCBzcGFjZXMsIGFuZCBhbnkgb2YgdGhlIGZvbGxvd2luZyBzcGVjaWFsIGNoYXJhY3RlcnM6ICfigJkuLDo7KClAIy8tLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmFkZHJlc3MudGVzdChcIjEyMyBNYWluIFN0LlwiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmFkZHJlc3MudGVzdChcIkFwdC4gMTIzXCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuYWRkcmVzcy50ZXN0KFwiMTIzIE1haW4gU3QuIEFwdC4gMTIzXCIpXG4gICAqKi9cbiAgYWRkcmVzczogL15bXFxwe0x9XFxwe05kfVxccyfigJkuLDo7KClcXFxceHtiMH1AIy8tXXswLDcwfSQvdSxcbiAgLyoqXG4gICAqIEByZWdleCAvXlxccHtMfVtcXHB7TH1cXHMnLi1dezAsNDl9JC91XG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHdpdGggbm8gbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnMuXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuYWRkcmVzc0NpdHkudGVzdChcIk1haW4gU3QuXCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuYWRkcmVzc0NpdHkudGVzdChcIkFwdC5cIilcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5hZGRyZXNzQ2l0eS50ZXN0KFwiTWFpbiBTdC4gQXB0LlwiKVxuICAgKiovXG4gIGFkZHJlc3NDaXR5OiBuZXcgUmVnRXhwKFwiXlxcXFxwe0x9W1xcXFxwe0x9XFxcXHMnLi1dezAsNDl9JFwiLCBcInVcIiksXG4gIC8qKlxuICAgKiBAcmVnZXggL15bXFxwe0x9XFxwe05kfVxccycuLC07XXswLDEwMH0kL3VcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgdGhhdCBjb250YWlucyB1cCB0byAxMDAgY2hhcmFjdGVycyBjb21wb3NlZCBvZiBVbmljb2RlIGxldHRlcnMsIFVuaWNvZGUgZGlnaXRzLCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMsIGFwb3N0cm9waGVzLCBwZXJpb2RzLCBjb21tYXMsIGh5cGhlbnMsIGFuZCBzZW1pY29sb25zICggJy4sLTspLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmFkZHJlc3NTdGF0ZS50ZXN0KFwiTmV3IFlvcmtcIilcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5hZGRyZXNzU3RhdGUudGVzdChcIlF1w6liZWNcIilcbiAgICoqL1xuICBhZGRyZXNzU3RhdGU6IC9eW1xccHtMfVxccHtOZH1cXHMnLiwtO117MCwxMDB9JC91LFxuICAvKipcbiAgICogQHJlZ2V4IC9eKD89LnsxLDIwfSQpWystXT9bMC05XStcXC4/WzAtOV0qJC9cbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgd2l0aCAwLTkgY2hhcmFjdGVycyAobnVtZXJpYyB2YWx1ZXMuIGkuZS4gYm90aCBpbnRlZ2VycyBhbmQgZmxvYXRzKSwgYW5kIG1heSBjb250YWluIGEgJysnIG9yICctJyBzaWduLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmJhcnJpZXIudGVzdChcIjEyM1wiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmJhcnJpZXIudGVzdChcIjEyMy40NVwiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmJhcnJpZXIudGVzdChcIi0xMjNcIilcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5iYXJyaWVyLnRlc3QoXCItMTIzLjQ1XCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuYmFycmllci50ZXN0KFwiKzEyM1wiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmJhcnJpZXIudGVzdChcIisxMjMuNDVcIilcbiAgICovXG4gIGJhcnJpZXI6IC9eKD89LnsxLDIwfSQpWystXT9bMC05XStcXC4/WzAtOV0qJC8sXG4gIC8qKlxuICAgKiBAcmVnZXggL15cXGQqKFxcLlxcZCspPyQvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgY29udGFpbnMgb25seSBudW1lcmljIHZhbHVlcywgYW5kIG1heSBjb250YWluIGEgZGVjaW1hbCBwb2ludC5cbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5kZWNpbWFsLnRlc3QoXCIxMjNcIilcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5kZWNpbWFsLnRlc3QoXCIxMjMuNDVcIilcbiAgICovXG4gIGRlY2ltYWw6IC9eXFxkKihcXC5cXGQrKT8kLyxcbiAgLyoqXG4gICAqIEByZWdleCAvXlxcZCskL1xuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBwYXR0ZXJuIG1hdGNoZXMgYW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIG9ubHkgbnVtZXJpYyB2YWx1ZXMuXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuaW50ZWdlci50ZXN0KFwiMTIzXCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuaW50ZWdlci50ZXN0KFwiMTIzNDVcIilcbiAgICovXG4gIGludGVnZXI6IC9eXFxkKyQvLFxuICAvKipcbiAgICogQHJlZ2V4IC9wWy5cXHNdK29bLlxcc10rYm94L2lcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyAncC5vLmJveCcgb3IgJ3AgbyBib3gnLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLnBvc3RhbE9mZmljZUJveE51bWJlci50ZXN0KFwiUC5PLiBCb3ggMTIzNFwiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLnBvc3RhbE9mZmljZUJveE51bWJlci50ZXN0KFwicC5vLiBib3ggMTIzNFwiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLnBvc3RhbE9mZmljZUJveE51bWJlci50ZXN0KFwiUCBPIEJveCAxMjM0XCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMucG9zdGFsT2ZmaWNlQm94TnVtYmVyLnRlc3QoXCJwIG8gYm94IDEyMzRcIilcbiAgICovXG4gIHBvc3RhbE9mZmljZUJveE51bWJlcjogL3BbLlxcc10rb1suXFxzXStib3gvaSxcbiAgLyoqXG4gICAqIEByZWdleCAvXlthLXpBLVowLTlfListXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDYzfSQvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHdpdGggMi02MyBjaGFyYWN0ZXJzLCBhbmQgY29udGFpbnMgYXBsaGFudW1lcmljIGNoYXJhY3RlcnMsIGFuICdAJyBzaWduLCBhbmQgbWF5IGFsc28gY29udGFpbiBhbnkgb2YgdGhlc2UgY2hhcmFjdGVycyAnKywtLl8nLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmVtYWlsLnRlc3QoXCJkb2VAbWVtZS5tZVwiKVxuICAgKiAqKi9cbiAgZW1haWw6IC9eW2EtekEtWjAtOV8uKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNjN9JC8sXG4gIC8qKlxuICAgKiBAcmVnZXggL14oPz0uKlthLXpdKSg/PS4qXFxkKSg/PS4qW0EtWl0pWyEtfl17OCwyNX0kL1xuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBwYXR0ZXJuIG1hdGNoZXMgYW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIDgtMjUgY2hhcmFjdGVycyB0aGF0IGluY2x1ZGU7IGF0IGxlYXN0IG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBhdCBsZWFzdCBvbmUgZGlnaXQsIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBhbmQgb25seSBwcmludGFibGUgQVNDSUkgY2hhcmFjdGVycyAoZnJvbSAnIScgdG8gJ34nKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLnBhc3N3b3JkLnRlc3QoXCJQYXNzd29yZDEhXCIpXG4gICAqKi9cbiAgcGFzc3dvcmQ6IC9eKD89LipbYS16XSkoPz0uKlxcZCkoPz0uKltBLVpdKVshLX5dezgsMjV9JC8sXG4gIC8qKlxuICAgKiBAcmVnZXggL14oPz0uKlthLXpdKSg/PS4qWzAtOV0pKD89LipbQS1aXSlbIC1+XXs2LDUwfSQvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgY29udGFpbnMgNi01MCBjaGFyYWN0ZXJzIHRoYXQgaW5jbHVkZTsgYXQgbGVhc3Qgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIGF0IGxlYXN0IG9uZSBkaWdpdCwgYXQgbGVhc3Qgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIGFuZCBvbmx5IHByaW50YWJsZSBBU0NJSSBjaGFyYWN0ZXJzIChmcm9tICchJyB0byAnficpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuYWZmaWxsaWF0ZVBhc3N3b3JkLnRlc3QoXCJQYXNzd29yZDFcIilcbiAgICoqL1xuICBhZmZpbGxpYXRlUGFzc3dvcmQ6IC9eKD89LipbYS16XSkoPz0uKlswLTldKSg/PS4qW0EtWl0pWyAtfl17Niw1MH0kLyxcbiAgLyoqXG4gICAqIEByZWdleCAvXlthLXpBLVowLTlfListXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsxLDI1NX0kL1xuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBwYXR0ZXJuIG1hdGNoZXMgYW55IHN0cmluZyB3aXRoIDEtMjU1IGNoYXJhY3RlcnMsIGFuZCBjb250YWlucyBhcGxoYW51bWVyaWMgY2hhcmFjdGVycywgYW4gJ0AnIHNpZ24sIGFuZCBtYXkgYWxzbyBjb250YWluIGFueSBvZiB0aGVzZSBjaGFyYWN0ZXJzICcrLC0uXycuXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMucGF5bWVudEFnZW50RW1haWwudGVzdChcImRvZUBtZW1lLnVzXCIpXG4gICAqKi9cbiAgcGF5bWVudEFnZW50RW1haWw6IC9eW2EtekEtWjAtOV8uKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezEsMjU1fSQvLFxuICAvKipcbiAgICogQHJlZ2V4IC9eKFtBLVphLXowLTldW0EtWmEtejAtOVxccy1dezAsMjB9KT8kL1xuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBwYXR0ZXJuIG1hdGNoZXMgYW55IHN0cmluZyB3aXRoIG5vIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzIGFuZCBtYXkgbm90IGNvbnRhaW4gJysnLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLnBvc3RhbENvZGUudGVzdChcIjEyM1wiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLnBvc3RhbENvZGUudGVzdChcIjEyMy00NTZcIilcbiAgICoqL1xuICBwb3N0YWxDb2RlOiAvXihbQS1aYS16MC05XVtBLVphLXowLTlcXHMtXXswLDIwfSk/JC8sXG4gIC8qKlxuICAgKiBAcmVnZXggL14oPyFeJHxcXHMrKVtBLVphLXowLTkuXFwvXFxzLV17MCwyNX0kL1xuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBwYXR0ZXJuIG1hdGNoZXMgYW55IHN0cmluZyB3aXRoIDAtMjUgY2hhcmFjdGVycywgYW5kIG1heSBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIChib3RoIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlKSwgYW5kIGFueSBvZiB0aGVzZSBjaGFyYWN0ZXJzJy4vLScsIGFuZCBvciBzYXBjZSBjaGFyYWN0ZXJzXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMudGF4SWRlbnRpZmljYXRpb25OdW1iZXIudGVzdChcIjEyM1wiKVxuICAgKiovXG4gIHRheElkZW50aWZpY2F0aW9uTnVtYmVyOiAvXig/IV4kfFxccyspW0EtWmEtejAtOS5cXC9cXHMtXXswLDI1fSQvLFxuICAvKipcbiAgICogQHJlZ2V4IC9eXFwrKCgtfFxccykqWzAtOV0pezksMjB9JC9cbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgdGhhdCBzdGFydHMgd2l0aCBhICcrJyBjaGFyYWN0ZXIsIGZvbGxvd2VkIGJ5IDktMjAgZGlnaXRzLCBhbGxvd2luZyBoeXBoZW5zIG9yIHNwYWNlcy5cbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5waG9uZU51bWJlci50ZXN0KFwiKzEyMzQ1Njc4OTBcIilcbiAgICoqL1xuICBwaG9uZU51bWJlcjogL15cXCsoKC18XFxzKSpbMC05XSl7OSwyMH0kLyxcbiAgLyoqXG4gICAqIEByZWdleCAvKGltYWdlfGFwcGxpY2F0aW9uKVxcLyhqcGU/Z3xwZGZ8cG5nKSQvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgb2YgdGhlIGZpbGUgdHlwZXMganBlZywganBnLCBwZGYsIG9yIHBuZy5cbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5maWxlVHlwZS50ZXN0KFwiaW1hZ2UvanBlZ1wiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmZpbGVUeXBlLnRlc3QoXCJhcHBsaWNhdGlvbi9wZGZcIilcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5maWxlVHlwZS50ZXN0KFwiaW1hZ2UvcG5nXCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuZmlsZVR5cGUudGVzdChcImltYWdlL2pwZ1wiKVxuICAgKiovXG4gIGZpbGVUeXBlOiAvKGltYWdlfGFwcGxpY2F0aW9uKVxcLyhqcGU/Z3xwZGZ8cG5nKSQvLFxuICAvKipcbiAgICogQHJlZ2V4IC8oXlxcZHs0fSlcXHMoXFxkezJ9WHsyfSlcXHMoWHs0fSlcXHMoXFxkezR9JCkvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQncyBmb3JtYXR0ZWQgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6IDEyMzQgNTZYWCBYWFhYIDExMjEuXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuZm9ybWF0dGVkQ2FyZE51bWJlci50ZXN0KFwiMTIzNCA1NlhYIFhYWFggMTEyMVwiKVxuICAgKiovXG4gIGZvcm1hdHRlZENhcmROdW1iZXI6IC8oXlxcZHs0fSlcXHMoXFxkezJ9WHsyfSlcXHMoWHs0fSlcXHMoXFxkezR9JCkvLFxuICAvKipcbiAgICogQHJlZ2V4IC9bXlxcZFhcXHNdL1xuICAgKiBAZGVzY3JpcHRpb24gVGhlIGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgY29udGFpbnMgY2hhcmFjdGVycyB0aGF0IGFyZW4ndCBkaWdpdHMsIHRoZSB1cHBlcmNhc2UgbGV0dGVyICdYJyBhbmQgc3BhY2VzLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmludmFsaWRGb3JtYXR0ZWRDYXJkTnVtYmVyQ2hhcmFjdGVycy50ZXN0KFwiOTg3Ni01NDMyLTEwOThcIilcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5pbnZhbGlkRm9ybWF0dGVkQ2FyZE51bWJlckNoYXJhY3RlcnMudGVzdChcIjk4NzYgNTQzMiAxMDk4XCIpXG4gICAqKi9cbiAgaW52YWxpZEZvcm1hdHRlZENhcmROdW1iZXJDaGFyYWN0ZXJzOiAvW15cXGRYXFxzXS8sXG4gIC8qKlxuICAgKiBAcmVnZXggL14oPz0uKlthLXpdKSg/PS4qWzAtOV0pKD89LipbQS1aXSkoPz0uKlshQCMkJV4mKigpK1xcLT1cXFtcXF17fTsnOlxcXCJ8LFxcLjw+XFw/X35dKVsgLX5dezgsMTZ9JC9cbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgdGhhdCBjb250YWlucyA4LTE2IGNoYXJhY3RlcnMgdGhhdCBpbmNsdWRlOyBhdCBsZWFzdCBvbmUgbG93ZXJjYXNlIGxldHRlciwgYXQgbGVhc3Qgb25lIGRpZ2l0LCBhdCBsZWFzdCBvbmUgdXBwZXJjYXNlIGxldHRlciwgYW5kIG9ubHkgcHJpbnRhYmxlIEFTQ0lJIGNoYXJhY3RlcnMgKGZyb20gJyEnIHRvICd+JylcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy50cmFkaW5nUGxhdGZvcm1JbnZlc3RvclBhc3N3b3JkLnRlc3QoXCJQYXNzd29yZDEhJFwiKVxuICAgKiovXG4gIHRyYWRpbmdQbGF0Zm9ybUludmVzdG9yUGFzc3dvcmQ6IC9eKD89LipbYS16XSkoPz0uKlswLTldKSg/PS4qW0EtWl0pKD89LipbIUAjJCVeJiooKStcXC09XFxbXFxde307JzpcXFwifCxcXC48PlxcP19+XSlbIC1+XXs4LDE2fSQvLFxuICAvKipcbiAgICogQHJlZ2V4IC9eW0EtWmEtel0rKFthLXpBLVouJyAtXSkqW2EtekEtWi4nIC1dKyQvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgc3RhcnRzIHdpdGggb25lIG9yIG1vcmUgbGV0dGVycyAodXBwZXJjYXNlIG9yIGxvd2VyY2FzZSksIGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBvY2N1cnJlbmNlcyBvZiBsZXR0ZXJzLCBhbmQgYW55IG9mIHRoZXNlIGNoYXJhY3RlcnMgKC4nIC0pIGFuZCBlbmRzIHdpdGggb25lIG9yIG1vcmUgb2NjdXJyZW5jZXMgb2YgbGV0dGVycywgYW5kIGFueSBvZiB0aGVzZSBjaGFyYWN0ZXJzICguJyAtKS5cbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5sZXR0ZXJTeW1ib2xzLnRlc3QoXCJKb2huIERvZVwiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmxldHRlclN5bWJvbHMudGVzdChcIkpvaG4tRG9lXCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMubGV0dGVyU3ltYm9scy50ZXN0KFwiSm9obiBPJ0RvZVwiKVxuICAgKi9cbiAgbGV0dGVyU3ltYm9sczogL15bQS1aYS16XSsoW2EtekEtWi4nIC1dKSpbYS16QS1aLicgLV0rJC8sXG4gIC8qKlxuICAgKiBAcmVnZXggL14oPyEuKlxcc3syLH0pKD8hXFxzKVtcXHB7TH1cXHMnLi1dezEsNTB9JC91XG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgY29udGFpbnMgMSB0byA1MCBjaGFyYWN0ZXJzLCBzdGFydHMgYW5kIGVuZHMgd2l0aCB2YWxpZCBjaGFyYWN0ZXJzIChsZXR0ZXJzLCB3aGl0ZXNwYWNlLCBwZXJpb2QsIHNpbmdsZSBxdW90ZSwgb3IgaHlwaGVuKS5cbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5uYW1lLnRlc3QoXCJKb2huIERvZVwiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLm5hbWUudGVzdChcIkpvaG4tRG9lXCIpXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMubmFtZS50ZXN0KFwiSm9obiBPJ0RvZVwiKVxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLm5hbWUudGVzdChcIkpvaG4gTy4gRG9lXCIpXG4gICAqL1xuICBuYW1lOiAvXig/IS4qXFxzezIsfSkoPyFcXHMpW1xccHtMfVxccycuLV17MSw1MH0kL3UsXG4gIC8qKlxuICAgKiBAcmVnZXggL1tgfiFAIyQlXiYqKShfPStbfXtcXF1cXFxcL1wiOzo/Pjx8XSsvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgY29udGFpbnMgYW55IG9mIHRoZXNlIGNoYXJhY3RlcnM6IGB+IUAjJCVeJiopKF89K1t9e1xcXVxcXFwvXCI7Oj8+PHxcbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy5nZW5lcmFsLnRlc3QoXCJQYXNzd29yZDEhXCIpXG4gICAqL1xuICBnZW5lcmFsOiAvW2B+IUAjJCVeJiopKF89K1t9e1xcXVxcXFwvXCI7Oj8+PHxdKy8sXG4gIC8qKlxuICAgKiBAcmVnZXggL1thLXpdL1xuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBwYXR0ZXJuIG1hdGNoZXMgYW55IHN0cmluZyB0aGF0IGNvbnRhaW5zIGxvd2VyY2FzZSBsZXR0ZXJzLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmxvd2VyY2FzZS50ZXN0KFwiYWJjXCIpXG4gICAqL1xuICBsb3dlcmNhc2U6IC9bYS16XS8sXG4gIC8qKlxuICAgKiBAcmVnZXggL1xcZC9cbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgdGhhdCBjb250YWlucyBkaWdpdHMuXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMubnVtYmVyLnRlc3QoXCJwZXRzMTIzXCIpXG4gICAqL1xuICBudW1iZXI6IC9cXGQvLFxuICAvKipcbiAgICogQHJlZ2V4IC9cXFcvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgY29udGFpbnMgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLnNwZWNpYWxDaGFyYWN0ZXIudGVzdChcIlBhc3N3b3JkMSFcIilcbiAgICovXG4gIHNwZWNpYWxDaGFyYWN0ZXI6IC9cXFcvLFxuICAvKipcbiAgICogQHJlZ2V4IC9bQS1aXS9cbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgdGhhdCBjb250YWlucyB1cHBlcmNhc2UgbGV0dGVycy5cbiAgICogQGV4YW1wbGUgVmFsaWRhdGlvbkNvbnN0YW50cy5wYXR0ZXJucy51cHBlcmNhc2UudGVzdChcIkFCQ1wiKVxuICAgKi9cbiAgdXBwZXJjYXNlOiAvW0EtWl0vLFxuICAvKipcbiAgICogQHJlZ2V4IC9eLns4LDE2fSQvXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIHBhdHRlcm4gbWF0Y2hlcyBhbnkgc3RyaW5nIHRoYXQgY29udGFpbnMgOC0xNiBjaGFyYWN0ZXJzLlxuICAgKiBAZXhhbXBsZSBWYWxpZGF0aW9uQ29uc3RhbnRzLnBhdHRlcm5zLmJldHdlZW44YW5kMTZDaGFyYWN0ZXJzLnRlc3QoXCJQYXNzd29yZDEhXCIpXG4gICAqL1xuICBiZXR3ZWVuOGFuZDE2Q2hhcmFjdGVyczogL14uezgsMTZ9JC8sXG4gIC8qKlxuICAgKiBAcmVnZXggL14uezgsMjV9JC9cbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgcGF0dGVybiBtYXRjaGVzIGFueSBzdHJpbmcgdGhhdCBjb250YWlucyA4LTI1IGNoYXJhY3RlcnMuXG4gICAqIEBleGFtcGxlIFZhbGlkYXRpb25Db25zdGFudHMucGF0dGVybnMuYmV0d2VlbjhhbmQyNUNoYXJhY3RlcnMudGVzdChcIlBhc3N3b3JkMSFcIilcbiAgICovXG4gIGJldHdlZW44YW5kMjVDaGFyYWN0ZXJzOiAvXi57OCwyNX0kL1xufSwgSmUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBtZXNzYWdlc0hpbnRzOiBmZSxcbiAgcGF0dGVybnM6IEFlXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBFID0ge1xuICBicmFuZE5hbWU6IFwiRGVyaXZcIixcbiAgZG9tYWluTmFtZTogXCJEZXJpdi5jb21cIlxufSwgQiA9IHtcbiAgZng6IFwiRGVyaXYgKEZYKSBMdGRcIixcbiAgbWFsdGFpbnZlc3Q6IFwiRGVyaXYgSW52ZXN0bWVudHMgKEV1cm9wZSkgTGltaXRlZFwiLFxuICBzdmc6IFwiRGVyaXYgKFNWRykgTExDXCIsXG4gIHY6IFwiRGVyaXYgKFYpIEx0ZFwiXG59LCBqID0ge1xuICB0cmFkZXI6IFwiRGVyaXYgVHJhZGVyXCIsXG4gIGRCb3Q6IFwiRGVyaXYgQm90XCIsXG4gIG10NTogXCJEZXJpdiBNVDVcIixcbiAgY1RyYWRlcjogXCJEZXJpdiBjVHJhZGVyXCIsXG4gIGRlcml2WDogXCJEZXJpdiBYXCIsXG4gIHNtYXJ0VHJhZGVyOiBcIlNtYXJ0VHJhZGVyXCIsXG4gIGJCb3Q6IFwiQmluYXJ5IEJvdFwiLFxuICBnbzogXCJEZXJpdiBHT1wiXG59LCBrZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGJyYW5kQ29uZmlnOiBFLFxuICBsYW5kaW5nQ29tcGFuaWVzOiBCLFxuICBwbGF0Zm9ybXM6IGpcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIEYgPSAvKEFMUC18QU1OLXxBTkEtfEFORS18QU5HLXxBUU0tfEFSUy18QVJULXxBVFUtfEJBQy18QkxBLXxCUlEtfENBRy18Q0FNLXxDQU4tfENBWi18Q0RMLXxDRFktfENMVC18Q1JPLXxDVU4tfERJRy18RFJBLXxEVUEtfERVQi18RFZDLXxFTEUtfEVMUy18RU1MLXxFVkEtfEVWUi18RklHLXxGTEEtfEZSTC18R0xLLXxITUEtfEhXLXxIV0ktfElORS18SkFULXxKRUYtfEpFUi18SktNLXxKTlktfEpTQy18TEROLXxMSU8tfExPTi18TFVBLXxMWUEtfExZTy18TUFSLXxNRUQtfE1IQS18TUxBLXxNUkQtfE1ZQS18TkNFLXxORU8tfE5PSC18Tk9QLXxPQ0UtfFBBUi18UElDLXxQT1QtfFBQQS18UFJBLXxSTkUtfFNFQS18U0xBLXxTTkUtfFNQTi18U1RLLXxUQUgtfFRBUy18VEVULXxUUlQtfFZDRS18VklFLXxWS1ktfFZOUy18Vk9HLXxWVFItfFdBUy18V0tHLXxXTFotfEpBRC18TUxELXxSVEUtfE5BTS18TkVOLXxCQUwtfEpMTi18WUFMLXxNR0EtfEZHRC18WFlBTy18Qk9OLXxBTE4tfEFMVC18QlJBLXxEQlkyLXxTVEctfE1BTy18TEVNLXxHT0EtfEZPQS18TU5BLXxMTkEtKS8sIFhlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgaHVhd2VpRGV2aWNlc1JlZ2V4OiBGXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBEZSA9IChlLCB0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBsb2NhbGU6IHIgPSBcImVuLVVTXCIsIGN1cnJlbmN5OiBuLCBkZWNpbWFsUGxhY2VzOiBvIH0gPSB0IHx8IHt9LCBpID0gTFtuID8/IFwiVVNEXCJdLCBhID0gbyB8fCBpO1xuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQociwge1xuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBhLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBhXG4gICAgfSkuZm9ybWF0KGUpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZS50b1N0cmluZygpO1xuICB9XG59LCBoZSA9IChlLCB0KSA9PiB7XG4gIGxldCByO1xuICBjb25zdCB7XG4gICAgZGF0ZU9wdGlvbnM6IG4gPSB7IGRheTogXCIyLWRpZ2l0XCIsIG1vbnRoOiBcIjItZGlnaXRcIiwgeWVhcjogXCJudW1lcmljXCIgfSxcbiAgICBmb3JtYXQ6IG8gPSBcIllZWVktTU0tRERcIixcbiAgICB1bml4OiBpID0gITFcbiAgfSA9IHQgfHwge30sIGEgPSB7IC4uLm4gfTtcbiAgaWYgKHR5cGVvZiBlID09IFwibnVtYmVyXCIgJiYgaSlcbiAgICByID0gbmV3IERhdGUoZSAqIDFlMyk7XG4gIGVsc2UgaWYgKHR5cGVvZiBlID09IFwic3RyaW5nXCIgfHwgZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICBpZiAociA9IG5ldyBEYXRlKGUpLCBpc05hTihyLmdldFRpbWUoKSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgaW5wdXRcIik7XG4gIH0gZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBpbnB1dFwiKTtcbiAgc3dpdGNoIChvKSB7XG4gICAgY2FzZSBcIkREIE1NTSBZWVlZXCI6XG4gICAgICBhLmRheSA9IFwiMi1kaWdpdFwiLCBhLm1vbnRoID0gXCJzaG9ydFwiLCBhLnllYXIgPSBcIm51bWVyaWNcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJNTU0gREQgWVlZWVwiOlxuICAgICAgcmV0dXJuIGEuZGF5ID0gXCIyLWRpZ2l0XCIsIGEubW9udGggPSBcInNob3J0XCIsIGEueWVhciA9IFwibnVtZXJpY1wiLCByLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIsIGEpLnJlcGxhY2UoLyhcXGR7Mn0pIChcXHd7M30pIChcXGR7NH0pLywgXCIkMiAkMSAkM1wiKTtcbiAgICBjYXNlIFwiREQtTU0tWVlZWVwiOlxuICAgICAgcmV0dXJuIGEuZGF5ID0gXCIyLWRpZ2l0XCIsIGEubW9udGggPSBcIjItZGlnaXRcIiwgYS55ZWFyID0gXCJudW1lcmljXCIsIHIudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tR0JcIiwgYSkucmVwbGFjZSgvKFxcZHsyfSlcXC8oXFxkezJ9KVxcLyhcXGR7NH0pLywgXCIkMS0kMi0kM1wiKTtcbiAgICBkZWZhdWx0OlxuICAgICAgYS55ZWFyID0gXCJudW1lcmljXCIsIGEubW9udGggPSBcIjItZGlnaXRcIiwgYS5kYXkgPSBcIjItZGlnaXRcIjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGNvbnN0IHMgPSByLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIsIGEpLnJlcGxhY2UoLyhcXGR7Mn0pIChcXHd7Myw0fSkgKFxcZHs0fSkvLCAoYywgbCwgdSwgbSkgPT4gYCR7bH0gJHt1LnNsaWNlKDAsIDMpfSAke219YCk7XG4gIHJldHVybiBvID09PSBcIllZWVktTU0tRERcIiA/IHMucmVwbGFjZSgvKFxcZHsyfSlcXC8oXFxkezJ9KVxcLyhcXGR7NH0pLywgXCIkMy0kMi0kMVwiKSA6IHM7XG59LCBfZSA9IChlLCB0ID0gITEpID0+IHtcbiAgbGV0IHI7XG4gIGlmICh0eXBlb2YgZSA9PSBcIm51bWJlclwiICYmIHQpXG4gICAgciA9IG5ldyBEYXRlKGUgKiAxZTMpO1xuICBlbHNlIGlmICh0eXBlb2YgZSA9PSBcInN0cmluZ1wiIHx8IGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgaWYgKHIgPSBuZXcgRGF0ZShlKSwgaXNOYU4oci5nZXRUaW1lKCkpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGlucHV0XCIpO1xuICB9IGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgaW5wdXRcIik7XG4gIHJldHVybiBgJHtyLmdldFVUQ0hvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7ci5nZXRVVENNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7ci5nZXRVVENTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9IEdNVGA7XG59LCB5ZSA9IChlLCB0ID0gXCJkYXlzXCIsIHIgPSBcImFkZFwiKSA9PiB7XG4gIGlmIChlIDwgMClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlci5cIik7XG4gIGNvbnN0IG4gPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSwgbyA9IHIgPT09IFwiYWRkXCIgPyBlIDogLWU7XG4gIHJldHVybiB0ID09PSBcInllYXJzXCIgPyBuLnNldEZ1bGxZZWFyKG4uZ2V0RnVsbFllYXIoKSArIG8pIDogdCA9PT0gXCJkYXlzXCIgJiYgbi5zZXREYXRlKG4uZ2V0RGF0ZSgpICsgbyksIG47XG59LCBiZSA9IChlKSA9PiB7XG4gIGNvbnN0IHQgPSBlLnNwbGl0KC8sXFxzLyksIHIgPSAvOlxccyhbMC05YS16QS1aXSsuezI1LDI4fSkvZ20uZXhlYyh0WzBdKSwgbiA9IHIgPT0gbnVsbCA/IHZvaWQgMCA6IHJbMV0sIG8gPSAvOlxccyhbMC05YS16QS1aXSsuezI1LDM0fSkvZ20uZXhlYyh0WzFdKSwgaSA9IG8gPT0gbnVsbCA/IHZvaWQgMCA6IG9bMV07XG4gIHJldHVybiB7IGFkZHJlc3NIYXNoOiBuLCBibG9ja2NoYWluSGFzaDogaSwgc3BsaXRMb25nY29kZTogdCB9O1xufSwgUWUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBmb3JtYXRNb25leTogRGUsXG4gIGdldEFkanVzdGVkRGF0ZTogeWUsXG4gIGdldEZvcm1hdHRlZERhdGVTdHJpbmc6IGhlLFxuICBnZXRGb3JtYXR0ZWRUaW1lU3RyaW5nOiBfZSxcbiAgcGFyc2VDcnlwdG9Mb25nY29kZTogYmVcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIHkgPSAyNTYwLCB2ZSA9IDAuOSwgd2UgPSA0LCBHID0gKHsgc3JjOiBlLCBmaWxlbmFtZTogdCwgb3B0aW9uczogciB9KSA9PiB7XG4gIGNvbnN0IHsgbWF4V2lkdGg6IG4gPSB5LCBxdWFsaXR5OiBvID0gdmUgfSA9IHIgfHwge307XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoaSwgYSkgPT4ge1xuICAgIGNvbnN0IHMgPSBuZXcgSW1hZ2UoKTtcbiAgICBzLnNyYyA9IGUsIHMub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksIGwgPSBjLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgIGlmICghbCB8fCAhKGwgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpKVxuICAgICAgICByZXR1cm4gYShuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IDJEIGNvbnRleHRcIikpO1xuICAgICAgaWYgKHMubmF0dXJhbFdpZHRoID4gbikge1xuICAgICAgICBjb25zdCB1ID0geSwgbSA9IHUgLyBzLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgYy53aWR0aCA9IHUsIGMuaGVpZ2h0ID0gcy5uYXR1cmFsSGVpZ2h0ICogbTtcbiAgICAgIH0gZWxzZVxuICAgICAgICBjLndpZHRoID0gcy5uYXR1cmFsV2lkdGgsIGMuaGVpZ2h0ID0gcy5uYXR1cmFsSGVpZ2h0O1xuICAgICAgbC5maWxsU3R5bGUgPSBcInRyYW5zcGFyZW50XCIsIGwuZmlsbFJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpLCBsLnNhdmUoKSwgbC5kcmF3SW1hZ2UocywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpLCBjLnRvQmxvYihcbiAgICAgICAgKHUpID0+IHtcbiAgICAgICAgICBpZiAoIXUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgY29uc3QgbSA9IHQucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiLmpwZ1wiKSwgUyA9IG5ldyBCbG9iKFt1XSwgeyB0eXBlOiBcImltYWdlL2pwZWdcIiB9KTtcbiAgICAgICAgICBTLmxhc3RNb2RpZmllZERhdGUgPSBEYXRlLm5vdygpLCBTLm5hbWUgPSBtLCBpKFMpO1xuICAgICAgICB9LFxuICAgICAgICBcImltYWdlL2pwZWdcIixcbiAgICAgICAgb1xuICAgICAgKTtcbiAgICB9O1xuICB9KTtcbn0sIFkgPSAoZSkgPT4gbmV3IFByb21pc2UoKHQpID0+IHtcbiAgY29uc3QgciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHIucmVhZEFzRGF0YVVSTChlKSwgci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgdmFyIG47XG4gICAgdCh7XG4gICAgICBzcmM6ICgobiA9IHIucmVzdWx0KSA9PSBudWxsID8gdm9pZCAwIDogbi50b1N0cmluZygpKSB8fCBcIlwiLFxuICAgICAgZmlsZW5hbWU6IGUubmFtZVxuICAgIH0pO1xuICB9O1xufSksIHogPSAoZSkgPT4gZSA/IFAuc29tZShcbiAgKHQpID0+IGUudG9VcHBlckNhc2UoKS5lbmRzV2l0aCh0KVxuKSA6ICExLCBMZSA9IChlKSA9PiBuZXcgUHJvbWlzZSgodCkgPT4ge1xuICB6KGUubmFtZSkgPyBZKGUpLnRoZW4oKHIpID0+IHtcbiAgICBHKHIpLnRoZW4odCk7XG4gIH0pIDogdChlKTtcbn0pO1xuZnVuY3Rpb24gUGUoZSwgdCA9IHdlKSB7XG4gIGNvbnN0IHIgPSBuZXcgVWludDhBcnJheSh0KTtcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhyLmJ1ZmZlcikuc2V0VWludDMyKDAsIGUpLCByO1xufVxuY29uc3QgVGUgPSAoZSwge1xuICBjaHVua1NpemU6IHQgPSAxNjM4NFxuICAvKiAxNktCICovXG59KSA9PiB7XG4gIGNvbnN0IHIgPSBbXTtcbiAgZm9yIChsZXQgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7XG4gICAgY29uc3QgbyA9IGVbbl07XG4gICAgbiAlIHQgPT09IDAgPyByLnB1c2goW29dKSA6IHJbci5sZW5ndGggLSAxXS5wdXNoKG8pO1xuICB9XG4gIHJldHVybiByLm1hcCgobikgPT4gbmV3IFVpbnQ4QXJyYXkobikpLmNvbmNhdChuZXcgVWludDhBcnJheShbXSkpO1xufSwgT2UgPSAoZSkgPT4ge1xuICBjb25zdCB0ID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyKSA9PiB7XG4gICAgdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBuID0ge1xuICAgICAgICBmaWxlbmFtZTogZS5uYW1lLFxuICAgICAgICBidWZmZXI6IHQucmVzdWx0LFxuICAgICAgICBmaWxlU2l6ZTogZS5zaXplXG4gICAgICB9O1xuICAgICAgcihuKTtcbiAgICB9LCB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICByKHtcbiAgICAgICAgbWVzc2FnZTogYFVuYWJsZSB0byByZWFkIGZpbGUgJHtlLm5hbWV9YFxuICAgICAgfSk7XG4gICAgfSwgdC5yZWFkQXNBcnJheUJ1ZmZlcihlKTtcbiAgfSk7XG59LCBxZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGNvbXByZXNzSW1hZ2U6IEcsXG4gIGNvbXByZXNzSW1hZ2VGaWxlOiBMZSxcbiAgY29udmVydFRvQmFzZTY0OiBZLFxuICBnZW5lcmF0ZUNodW5rczogVGUsXG4gIGlzU3VwcG9ydGVkSW1hZ2VGb3JtYXQ6IHosXG4gIG51bVRvVWludDhBcnJheTogUGUsXG4gIHJlYWRGaWxlOiBPZVxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZyA9IChlKSA9PiB7XG4gIGNvbnN0IHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShlKTtcbiAgaWYgKHQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZiAodCA9PT0gbnVsbCB8fCB0ID09PSBcIm51bGxcIilcbiAgICAgIHJldHVybiBudWxsO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSwgTWUgPSAoZSwgdCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLCBKU09OLnN0cmluZ2lmeSh0KSk7XG59LCBldCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFZhbHVlOiBnLFxuICBzZXRWYWx1ZTogTWVcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIEkgPSAoZSkgPT4gT2JqZWN0LmtleXMoZSkuc29ydCgpLnJlZHVjZSgodCwgcikgPT4gKHRbcl0gPSBlW3JdLCB0KSwge30pLCBSZSA9IGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoSlNPTi5zdHJpbmdpZnkoSShlKSkpLCByID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIHQpO1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShyKSkubWFwKChpKSA9PiAoXCIwMFwiICsgaS50b1N0cmluZygxNikpLnNsaWNlKC0yKSkuam9pbihcIlwiKTtcbn0sIFogPSAoZSwgdCkgPT4gQXJyYXkuaXNBcnJheShlKSAmJiBBcnJheS5pc0FycmF5KHQpID8gdC5tYXAoKHIsIG4pID0+IFooZVtuXSwgcikpIDogdHlwZW9mIGUgPT0gXCJvYmplY3RcIiAmJiBlICE9PSBudWxsICYmIHR5cGVvZiB0ID09IFwib2JqZWN0XCIgJiYgdCAhPT0gbnVsbCA/IEsoZSwgdCkgOiB0LCBLID0gKGUsIC4uLnQpID0+IHtcbiAgZm9yIChjb25zdCByIG9mIHQpXG4gICAgZm9yIChjb25zdCBuIGluIHIpXG4gICAgICByW25dID09PSBudWxsIHx8IHJbbl0gPT09IHZvaWQgMCB8fCAoZVtuXSA9IFooZVtuXSwgcltuXSkpO1xuICByZXR1cm4gZTtcbn0sIHR0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgaGFzaE9iamVjdDogUmUsXG4gIG1lcmdlOiBLLFxuICBzb3J0T2JqZWN0QnlLZXlzOiBJXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xuZnVuY3Rpb24gTmUoKSB7XG4gIGxldCBlLCB0O1xuICByZXR1cm4ge1xuICAgIHByb21pc2U6IG5ldyBQcm9taXNlKChuLCBvKSA9PiB7XG4gICAgICBlID0gbiwgdCA9IG87XG4gICAgfSksXG4gICAgcmVzb2x2ZTogZSxcbiAgICByZWplY3Q6IHRcbiAgfTtcbn1cbmNvbnN0IHJ0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgY3JlYXRlUHJvbWlzZTogTmVcbn0sIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSksIEggPSAoKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcImFjY3QxXCIpO1xuICByZXR1cm4gZyhUKSB8fCB0O1xufSwgVyA9IChlKSA9PiBlICYmICEvXlZSLy50ZXN0KGUpID8gXCJyZWFsXCIgOiBcImRlbW9cIiwgXyA9ICgpID0+IHtcbiAgY29uc3QgZSA9IGcoTyk7XG4gIGlmIChlKVxuICAgIHJldHVybiBlO1xuICBjb25zdCB0ID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLCByID0gd1t0XTtcbiAgcmV0dXJuIHIgfHwgXCIzNjMwMFwiO1xufSwgbnQgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmZyZWV6ZSgvKiBAX19QVVJFX18gKi8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHtcbiAgX19wcm90b19fOiBudWxsLFxuICBnZXRBY3RpdmVMb2dpbmlkOiBILFxuICBnZXRBcHBJZDogXyxcbiAgZ2V0RW52aXJvbm1lbnRGcm9tTG9naW5pZDogV1xufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgQ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGUgPSBbXSwgdCA9IFtdLCByID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgZm9yIChjb25zdCBbbywgaV0gb2Ygci5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBhID0gby5tYXRjaCgvXmFjY3QoXFxkKykvKSwgcyA9IG8ubWF0Y2goL150b2tlbihcXGQrKS8pLCBjID0gby5tYXRjaCgvXmN1cihcXGQrKS8pO1xuICAgIGEgJiYgKGVbK2FbMV0gLSAxXSA9IHtcbiAgICAgIC4uLmVbK2FbMV0gLSAxXSB8fCB7fSxcbiAgICAgIGxvZ2luaWQ6IGlcbiAgICB9KSwgcyAmJiAoZVsrc1sxXSAtIDFdID0ge1xuICAgICAgLi4uZVsrc1sxXSAtIDFdIHx8IHt9LFxuICAgICAgdG9rZW46IGlcbiAgICB9KSwgYyAmJiAoZVsrY1sxXSAtIDFdID0ge1xuICAgICAgLi4uZVsrY1sxXSAtIDFdIHx8IHt9LFxuICAgICAgY3VycmVuY3k6IGlcbiAgICB9KSwgKC9hY2N0Ly50ZXN0KG8pIHx8IC90b2tlbi8udGVzdChvKSB8fCAvY3VyLy50ZXN0KG8pKSAmJiB0LnB1c2gobyk7XG4gIH1cbiAgcmV0dXJuIHsgbG9naW5JbmZvOiBlLmZpbHRlcihcbiAgICAobykgPT4gW1wibG9naW5pZFwiLCBcInRva2VuXCIsIFwiY3VycmVuY3lcIl0uZXZlcnkoKGkpID0+IE9iamVjdC5rZXlzKG8pLmluY2x1ZGVzKGkpKVxuICApLCBwYXJhbXNUb0RlbGV0ZTogdCB9O1xufSwgVWUgPSAoZSkgPT4ge1xuICBpZiAoZSAhPSBudWxsICYmIGUubGVuZ3RoKVxuICAgIHJldHVybiBlLmZpbmQoKHQpID0+IC9eVlIvLnRlc3QodC5sb2dpbmlkKSkgfHwgZVswXTtcbn0sICRlID0gKGUpID0+IHtcbiAgY29uc3QgdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGUuZm9yRWFjaCgobikgPT4gdC5kZWxldGUobikpO1xuICBjb25zdCByID0gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7dC50b1N0cmluZygpID8gYD8ke3QudG9TdHJpbmcoKX1gIDogXCJcIn1gO1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgcik7XG59LCBFZSA9ICgpID0+IHtcbiAgY29uc3QgZSA9IGcocCkgPz8gXCJFTlwiO1xuICByZXR1cm4gYGh0dHBzOi8vb2F1dGguZGVyaXYuY29tL29hdXRoMi9hdXRob3JpemU/YXBwX2lkPSR7XygpfSZsPSR7ZX0mYnJhbmQ9JHtEfWA7XG59LCB4ID0gKCkgPT4ge1xuICBjb25zdCBlID0gZyhNKTtcbiAgaWYgKGUpXG4gICAgcmV0dXJuIGU7XG4gIGNvbnN0IHQgPSBIKCk7XG4gIHJldHVybiB2W1codCldO1xufSwgQmUgPSAoKSA9PiB7XG4gIGNvbnN0IGUgPSB4KCksIHQgPSBnKHApID8/IFwiRU5cIjtcbiAgcmV0dXJuIGB3c3M6Ly8ke2V9L3dlYnNvY2tldHMvdjM/YXBwX2lkPSR7XygpfSZsPSR7dH0mYnJhbmQ9JHtEfWA7XG59LCBqZSA9IChlKSA9PiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChlKSwgQSA9IChlKSA9PiBlLnJlcGxhY2UoLyheXFwvfFxcLyR8W15hLXpBLVowLTktXy4vKCkjXSkvZywgXCJcIiksIEZlID0gKGUsIHQpID0+IHtcbiAgdmFyIG87XG4gIGNvbnN0IHIgPSB0ICE9IG51bGwgJiYgdC5pc0VVID8gJCA6IFU7XG4gIGxldCBuID0gKChvID0gZyhwKSkgPT0gbnVsbCA/IHZvaWQgMCA6IG8udG9Mb3dlckNhc2UoKSkgPz8gXCJlblwiO1xuICByZXR1cm4gbiA9IG4gPT09IFwiZW5cIiA/IFwiXCIgOiBgLyR7bi5yZXBsYWNlKFwiX1wiLCBcIi1cIil9YCwgdCAhPSBudWxsICYmIHQuaXNEb2N1bWVudCA/IGAke3J9LyR7QShlKX1gIDogYCR7cn0ke259LyR7QShlKX1gO1xufSwgR2UgPSAoZSkgPT4gL14oKCguKilcXC4pPyhsb2NhbGhvc3Q6ODQ0M3xwYWdlcy5kZXZ8YmluYXJ5XFwuKHN4fGNvbSl8ZGVyaXYuKGNvbXxtZXxiZXxkZXYpKSkkLy50ZXN0KGUpLCBvdCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGZpbHRlclNlYXJjaFBhcmFtczogJGUsXG4gIGdldERlZmF1bHRBY3RpdmVBY2NvdW50OiBVZSxcbiAgZ2V0RGVyaXZTdGF0aWNVUkw6IEZlLFxuICBnZXRMb2dpbkluZm9Gcm9tVVJMOiBDZSxcbiAgZ2V0T2F1dGhVUkw6IEVlLFxuICBnZXRRdWVyeVBhcmFtZXRlcjogamUsXG4gIGdldFNlcnZlclVSTDogeCxcbiAgZ2V0V2Vic29ja2V0VVJMOiBCZSxcbiAgaXNEb21haW5BbGxvd2VkOiBHZSxcbiAgbm9ybWFsaXplUGF0aDogQVxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgWWUgPSAoZSkgPT4gQltlXSwgemUgPSAoKSA9PiBFLmRvbWFpbk5hbWUsIEllID0gKGUpID0+IGpbZV0sIGF0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZ2V0QnJhbmRXZWJzaXRlTmFtZTogemUsXG4gIGdldExlZ2FsTGFuZGluZ0NvbXBhbnk6IFllLFxuICBnZXRQbGF0Zm9ybU5hbWU6IEllXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBiID0gKGUpID0+IEYudGVzdChlKSwgWmUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGUgPSB3aW5kb3csIHQgPSBuYXZpZ2F0b3IsIHIgPSB0LnVzZXJBZ2VudCA/PyBlLm9wZXJhID8/IFwiXCI7XG4gIGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QocikpXG4gICAgcmV0dXJuIFwiV2luZG93cyBQaG9uZVwiO1xuICBpZiAoL2FuZHJvaWQvaS50ZXN0KHIpKSB7XG4gICAgaWYgKHQudXNlckFnZW50RGF0YSkge1xuICAgICAgY29uc3QgbiA9IGF3YWl0IHQudXNlckFnZW50RGF0YS5nZXRIaWdoRW50cm9weVZhbHVlcyhbXCJtb2RlbFwiXSk7XG4gICAgICBpZiAoYigobiA9PSBudWxsID8gdm9pZCAwIDogbi5tb2RlbCkgfHwgXCJcIikpXG4gICAgICAgIHJldHVybiBcImh1YXdlaVwiO1xuICAgIH0gZWxzZSBpZiAoYihyKSB8fCAvaHVhd2VpL2kudGVzdChyKSlcbiAgICAgIHJldHVybiBcImh1YXdlaVwiO1xuICAgIHJldHVybiBcIkFuZHJvaWRcIjtcbiAgfVxuICByZXR1cm4gL2lQYWR8aVBob25lfGlQb2QvLnRlc3QocikgJiYgIWUuTVNTdHJlYW0gPyBcImlPU1wiIDogXCJ1bmtub3duXCI7XG59LCBzdCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIG1vYmlsZU9TRGV0ZWN0QXN5bmM6IFplXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpO1xuZXhwb3J0IHtcbiAgS2UgYXMgQXBwSURDb25zdGFudHMsXG4gIGtlIGFzIEJyYW5kQ29uc3RhbnRzLFxuICBhdCBhcyBCcmFuZFV0aWxzLFxuICBIZSBhcyBDdXJyZW5jeUNvbnN0YW50cyxcbiAgV2UgYXMgRG9jdW1lbnRDb25zdGFudHMsXG4gIFFlIGFzIEZvcm1hdFV0aWxzLFxuICBxZSBhcyBJbWFnZVV0aWxzLFxuICB4ZSBhcyBMb2NhbFN0b3JhZ2VDb25zdGFudHMsXG4gIGV0IGFzIExvY2FsU3RvcmFnZVV0aWxzLFxuICBYZSBhcyBNb2JpbGVEZXZpY2VzQ29uc3RhbnRzLFxuICBzdCBhcyBPU0RldGVjdGlvblV0aWxzLFxuICB0dCBhcyBPYmplY3RVdGlscyxcbiAgcnQgYXMgUHJvbWlzZVV0aWxzLFxuICBWZSBhcyBVUkxDb25zdGFudHMsXG4gIG90IGFzIFVSTFV0aWxzLFxuICBKZSBhcyBWYWxpZGF0aW9uQ29uc3RhbnRzLFxuICBudCBhcyBXZWJTb2NrZXRVdGlsc1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/@deriv-com/utils/dist/deriv-utils.js\n'
                        );

                        /***/
                    },

                /***/ '../api/src/remote_config.json':
                    /*!*************************************!*\
  !*** ../api/src/remote_config.json ***!
  \*************************************/
                    /***/ module => {
                        module.exports = /*#__PURE__*/ JSON.parse(
                            '{"cs_chat_livechat":true,"cs_chat_whatsapp":true,"marketing_growthbook":true,"passkeys":true,"tracking_GTM":true,"tracking_datadog":true,"tracking_hotjar":true,"tracking_rudderstack":true}'
                        );

                        /***/
                    },

                /******/
            };
            /************************************************************************/
            /******/ // The module cache
            /******/ var __webpack_module_cache__ = {};
            /******/
            /******/ // The require function
            /******/ function __webpack_require__(moduleId) {
                /******/ // Check if module is in cache
                /******/ var cachedModule = __webpack_module_cache__[moduleId];
                /******/ if (cachedModule !== undefined) {
                    /******/ return cachedModule.exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/ var module = (__webpack_module_cache__[moduleId] = {
                    /******/ id: moduleId,
                    /******/ loaded: false,
                    /******/ exports: {},
                    /******/
                });
                /******/
                /******/ // Execute the module function
                /******/ __webpack_modules__[moduleId].call(
                    module.exports,
                    module,
                    module.exports,
                    __webpack_require__
                );
                /******/
                /******/ // Flag the module as loaded
                /******/ module.loaded = true;
                /******/
                /******/ // Return the exports of the module
                /******/ return module.exports;
                /******/
            }
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/ __webpack_require__.m = __webpack_modules__;
            /******/
            /************************************************************************/
            /******/ /* webpack/runtime/chunk prefetch function */
            /******/ (() => {
                /******/ __webpack_require__.F = {};
                /******/ __webpack_require__.E = chunkId => {
                    /******/ Object.keys(__webpack_require__.F).map(key => {
                        /******/ __webpack_require__.F[key](chunkId);
                        /******/
                    });
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/compat get default export */
            /******/ (() => {
                /******/ // getDefaultExport function for compatibility with non-harmony modules
                /******/ __webpack_require__.n = module => {
                    /******/ var getter =
                        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
                    /******/ __webpack_require__.d(getter, { a: getter });
                    /******/ return getter;
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/create fake namespace object */
            /******/ (() => {
                /******/ var getProto = Object.getPrototypeOf
                    ? obj => Object.getPrototypeOf(obj)
                    : obj => obj.__proto__;
                /******/ var leafPrototypes;
                /******/ // create a fake namespace object
                /******/ // mode & 1: value is a module id, require it
                /******/ // mode & 2: merge all properties of value into the ns
                /******/ // mode & 4: return value when already ns object
                /******/ // mode & 16: return value when it's Promise-like
                /******/ // mode & 8|1: behave like require
                /******/ __webpack_require__.t = function (value, mode) {
                    /******/ if (mode & 1) value = this(value);
                    /******/ if (mode & 8) return value;
                    /******/ if (typeof value === 'object' && value) {
                        /******/ if (mode & 4 && value.__esModule) return value;
                        /******/ if (mode & 16 && typeof value.then === 'function') return value;
                        /******/
                    }
                    /******/ var ns = Object.create(null);
                    /******/ __webpack_require__.r(ns);
                    /******/ var def = {};
                    /******/ leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
                    /******/ for (
                        var current = mode & 2 && value;
                        typeof current == 'object' && !~leafPrototypes.indexOf(current);
                        current = getProto(current)
                    ) {
                        /******/ Object.getOwnPropertyNames(current).forEach(key => (def[key] = () => value[key]));
                        /******/
                    }
                    /******/ def['default'] = () => value;
                    /******/ __webpack_require__.d(ns, def);
                    /******/ return ns;
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/define property getters */
            /******/ (() => {
                /******/ // define getter functions for harmony exports
                /******/ __webpack_require__.d = (exports, definition) => {
                    /******/ for (var key in definition) {
                        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                            /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                            /******/
                        }
                        /******/
                    }
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/ensure chunk */
            /******/ (() => {
                /******/ __webpack_require__.f = {};
                /******/ // This file contains only the entry chunk.
                /******/ // The chunk loading function for additional chunks
                /******/ __webpack_require__.e = chunkId => {
                    /******/ return Promise.all(
                        Object.keys(__webpack_require__.f).reduce((promises, key) => {
                            /******/ __webpack_require__.f[key](chunkId, promises);
                            /******/ return promises;
                            /******/
                        }, [])
                    );
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/get javascript chunk filename */
            /******/ (() => {
                /******/ // This function allow to reference async chunks
                /******/ __webpack_require__.u = chunkId => {
                    /******/ // return url for filenames based on template
                    /******/ return (
                        'trader/js/trader.' +
                        chunkId +
                        '.' +
                        {
                            'vendors-node_modules_bowser_es5_js-node_modules_dayjs_dayjs_min_js-node_modules_lodash_deboun-bbb277':
                                'ea039a3968b9755dce7c',
                            'vendors-node_modules_react-content-loader_dist_react-content-loader_es_js-node_modules_react--c10131':
                                'bb9b637acb75f2bc0b39',
                            'src_sass_app_scss-src_App_Components_Elements_PositionsDrawer_helpers_index_ts-src_App_init-s-ba58f8':
                                'bc50f57923b0d373c417',
                            'trader-app': 'd6a958b1c1aa72f2c707',
                            'vendors-node_modules_cloudflare_stream-react_dist_stream-react_esm_js-node_modules_deriv_quil-145140':
                                'b151140e4392e08e8291',
                            'hooks_src_useMFAccountStatus_ts-src_Modules_Trading_Helpers_video-config_ts-src_Stores_Module-77c64e':
                                'c7ef8564d9c12971fd3a',
                            'src_Modules_Contract_Containers_replay-chart_tsx-src_Stores_Modules_Trading_Helpers_logic_ts':
                                'e70c7cb8e98168f4f65a',
                            'trader-app-v2': '856e5138d6394c4f9ef5',
                            'trade-modals': 'f810fb7a85dbbde834fc',
                            'error-component': '24fe6739097bd2958fce',
                            contract: 'd48ba04882fdaf30da0e',
                            'market-countdown-timer': '6c7dd69e0868bfaf09e9',
                            'vendors-node_modules_deriv_quill-icons_dist_esm_react_LabelPaired_LabelPairedChevronsDownCapt-dee9aa':
                                'a892b030489a07309967',
                            'src_Modules_Trading_Components_Form_TradeParams_Accumulator_accumulators-info-display_tsx-src-a7086a':
                                'a21f71a6946e2614ac2c',
                            'screen-small': 'c858b22c43dc3ed38bca',
                            'screen-large': 'a60af50b35100745109d',
                            'settings-chart': 'c7928b5fa127035be512',
                            'accumulators-trade-description': 'ba5bfc5072200c3ac964',
                            'multipliers-trade-description': 'd4b029806bdc63056969',
                            'vanillas-trade-description': '0725da979f485569e402',
                            'turbos-trade-description': 'c245100ce303d1e587a7',
                            'rise-fall-trade-description': 'e324b6c707c7bbcb9667',
                            'higher-lower-trade-description': '505ef70265999bf94f01',
                            'touch-no-touch-trade-description': 'ded06168f5c17efcf1e0',
                            'matches-differs-trade-description': '884aae61dfca1eea8ad4',
                            'even-odd-trade-description': 'aa75f394e290d3abdb6c',
                            'over-under-trade-description': 'ad377287b70b2811c746',
                        }[chunkId] +
                        '.js'
                    );
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/get mini-css chunk filename */
            /******/ (() => {
                /******/ // This function allow to reference all chunks
                /******/ __webpack_require__.miniCssF = chunkId => {
                    /******/ // return url for filenames based on template
                    /******/ return (
                        'trader/css/trader.' +
                        chunkId +
                        '.' +
                        {
                            'vendors-node_modules_react-content-loader_dist_react-content-loader_es_js-node_modules_react--c10131':
                                'd630feba8c2e422b9db7',
                            'src_sass_app_scss-src_App_Components_Elements_PositionsDrawer_helpers_index_ts-src_App_init-s-ba58f8':
                                'c862b2fd63f51d3d5c9d',
                            'trader-app': '5ddbc3241bd08d4c1f45',
                            'vendors-node_modules_cloudflare_stream-react_dist_stream-react_esm_js-node_modules_deriv_quil-145140':
                                '312127132a18695376b3',
                            'trader-app-v2': 'e4732a5f63c30ed02aa6',
                            'trade-modals': 'f8e55a1649c770a983e3',
                            'src_Modules_Trading_Components_Form_TradeParams_Accumulator_accumulators-info-display_tsx-src-a7086a':
                                '49b24caa42dc827eda91',
                            'screen-small': 'f2135244bbbed6ede430',
                        }[chunkId] +
                        '.css'
                    );
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/global */
            /******/ (() => {
                /******/ __webpack_require__.g = (function () {
                    /******/ if (typeof globalThis === 'object') return globalThis;
                    /******/ try {
                        /******/ return this || new Function('return this')();
                        /******/
                    } catch (e) {
                        /******/ if (typeof window === 'object') return window;
                        /******/
                    }
                    /******/
                })();
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/hasOwnProperty shorthand */
            /******/ (() => {
                /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/load script */
            /******/ (() => {
                /******/ var inProgress = {};
                /******/ var dataWebpackPrefix = '@deriv/trader:';
                /******/ // loadScript function to load a script via script tag
                /******/ __webpack_require__.l = (url, done, key, chunkId) => {
                    /******/ if (inProgress[url]) {
                        inProgress[url].push(done);
                        return;
                    }
                    /******/ var script, needAttach;
                    /******/ if (key !== undefined) {
                        /******/ var scripts = document.getElementsByTagName('script');
                        /******/ for (var i = 0; i < scripts.length; i++) {
                            /******/ var s = scripts[i];
                            /******/ if (
                                s.getAttribute('src') == url ||
                                s.getAttribute('data-webpack') == dataWebpackPrefix + key
                            ) {
                                script = s;
                                break;
                            }
                            /******/
                        }
                        /******/
                    }
                    /******/ if (!script) {
                        /******/ needAttach = true;
                        /******/ script = document.createElement('script');
                        /******/
                        /******/ script.charset = 'utf-8';
                        /******/ script.timeout = 120;
                        /******/ if (__webpack_require__.nc) {
                            /******/ script.setAttribute('nonce', __webpack_require__.nc);
                            /******/
                        }
                        /******/ script.setAttribute('data-webpack', dataWebpackPrefix + key);
                        /******/
                        /******/ script.src = url;
                        /******/
                    }
                    /******/ inProgress[url] = [done];
                    /******/ var onScriptComplete = (prev, event) => {
                        /******/ // avoid mem leaks in IE.
                        /******/ script.onerror = script.onload = null;
                        /******/ clearTimeout(timeout);
                        /******/ var doneFns = inProgress[url];
                        /******/ delete inProgress[url];
                        /******/ script.parentNode && script.parentNode.removeChild(script);
                        /******/ doneFns && doneFns.forEach(fn => fn(event));
                        /******/ if (prev) return prev(event);
                        /******/
                    };
                    /******/ var timeout = setTimeout(
                        onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }),
                        120000
                    );
                    /******/ script.onerror = onScriptComplete.bind(null, script.onerror);
                    /******/ script.onload = onScriptComplete.bind(null, script.onload);
                    /******/ needAttach && document.head.appendChild(script);
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/make namespace object */
            /******/ (() => {
                /******/ // define __esModule on exports
                /******/ __webpack_require__.r = exports => {
                    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                        /******/
                    }
                    /******/ Object.defineProperty(exports, '__esModule', { value: true });
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/node module decorator */
            /******/ (() => {
                /******/ __webpack_require__.nmd = module => {
                    /******/ module.paths = [];
                    /******/ if (!module.children) module.children = [];
                    /******/ return module;
                    /******/
                };
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/publicPath */
            /******/ (() => {
                /******/ __webpack_require__.p = '/';
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/css loading */
            /******/ (() => {
                /******/ var createStylesheet = (chunkId, fullhref, resolve, reject) => {
                    /******/ var linkTag = document.createElement('link');
                    /******/
                    /******/ linkTag.rel = 'stylesheet';
                    /******/ linkTag.type = 'text/css';
                    /******/ var onLinkComplete = event => {
                        /******/ // avoid mem leaks.
                        /******/ linkTag.onerror = linkTag.onload = null;
                        /******/ if (event.type === 'load') {
                            /******/ resolve();
                            /******/
                        } else {
                            /******/ var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                            /******/ var realHref = (event && event.target && event.target.href) || fullhref;
                            /******/ var err = new Error(
                                'Loading CSS chunk ' + chunkId + ' failed.\n(' + realHref + ')'
                            );
                            /******/ err.code = 'CSS_CHUNK_LOAD_FAILED';
                            /******/ err.type = errorType;
                            /******/ err.request = realHref;
                            /******/ linkTag.parentNode.removeChild(linkTag);
                            /******/ reject(err);
                            /******/
                        }
                        /******/
                    };
                    /******/ linkTag.onerror = linkTag.onload = onLinkComplete;
                    /******/ linkTag.href = fullhref;
                    /******/
                    /******/ document.head.appendChild(linkTag);
                    /******/ return linkTag;
                    /******/
                };
                /******/ var findStylesheet = (href, fullhref) => {
                    /******/ var existingLinkTags = document.getElementsByTagName('link');
                    /******/ for (var i = 0; i < existingLinkTags.length; i++) {
                        /******/ var tag = existingLinkTags[i];
                        /******/ var dataHref = tag.getAttribute('data-href') || tag.getAttribute('href');
                        /******/ if (tag.rel === 'stylesheet' && (dataHref === href || dataHref === fullhref))
                            return tag;
                        /******/
                    }
                    /******/ var existingStyleTags = document.getElementsByTagName('style');
                    /******/ for (var i = 0; i < existingStyleTags.length; i++) {
                        /******/ var tag = existingStyleTags[i];
                        /******/ var dataHref = tag.getAttribute('data-href');
                        /******/ if (dataHref === href || dataHref === fullhref) return tag;
                        /******/
                    }
                    /******/
                };
                /******/ var loadStylesheet = chunkId => {
                    /******/ return new Promise((resolve, reject) => {
                        /******/ var href = __webpack_require__.miniCssF(chunkId);
                        /******/ var fullhref = __webpack_require__.p + href;
                        /******/ if (findStylesheet(href, fullhref)) return resolve();
                        /******/ createStylesheet(chunkId, fullhref, resolve, reject);
                        /******/
                    });
                    /******/
                };
                /******/ // object to store loaded CSS chunks
                /******/ var installedCssChunks = {
                    /******/ trader: 0,
                    /******/
                };
                /******/
                /******/ __webpack_require__.f.miniCss = (chunkId, promises) => {
                    /******/ var cssChunks = {
                        'vendors-node_modules_react-content-loader_dist_react-content-loader_es_js-node_modules_react--c10131': 1,
                        'src_sass_app_scss-src_App_Components_Elements_PositionsDrawer_helpers_index_ts-src_App_init-s-ba58f8': 1,
                        'trader-app': 1,
                        'vendors-node_modules_cloudflare_stream-react_dist_stream-react_esm_js-node_modules_deriv_quil-145140': 1,
                        'trader-app-v2': 1,
                        'trade-modals': 1,
                        'src_Modules_Trading_Components_Form_TradeParams_Accumulator_accumulators-info-display_tsx-src-a7086a': 1,
                        'screen-small': 1,
                    };
                    /******/ if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
                    /******/ else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
                        /******/ promises.push(
                            (installedCssChunks[chunkId] = loadStylesheet(chunkId).then(
                                () => {
                                    /******/ installedCssChunks[chunkId] = 0;
                                    /******/
                                },
                                e => {
                                    /******/ delete installedCssChunks[chunkId];
                                    /******/ throw e;
                                    /******/
                                }
                            ))
                        );
                        /******/
                    }
                    /******/
                };
                /******/
                /******/ // no hmr
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/jsonp chunk loading */
            /******/ (() => {
                /******/ // no baseURI
                /******/
                /******/ // object to store loaded and loading chunks
                /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
                /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
                /******/ var installedChunks = {
                    /******/ trader: 0,
                    /******/
                };
                /******/
                /******/ __webpack_require__.f.j = (chunkId, promises) => {
                    /******/ // JSONP chunk loading for javascript
                    /******/ var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
                        ? installedChunks[chunkId]
                        : undefined;
                    /******/ if (installedChunkData !== 0) {
                        // 0 means "already installed".
                        /******/
                        /******/ // a Promise means "currently loading".
                        /******/ if (installedChunkData) {
                            /******/ promises.push(installedChunkData[2]);
                            /******/
                        } else {
                            /******/ if (true) {
                                // all chunks have JS
                                /******/ // setup Promise in chunk cache
                                /******/ var promise = new Promise(
                                    (resolve, reject) =>
                                        (installedChunkData = installedChunks[chunkId] = [resolve, reject])
                                );
                                /******/ promises.push((installedChunkData[2] = promise));
                                /******/
                                /******/ // start chunk loading
                                /******/ var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                                /******/ // create error before stack unwound to get useful stacktrace later
                                /******/ var error = new Error();
                                /******/ var loadingEnded = event => {
                                    /******/ if (__webpack_require__.o(installedChunks, chunkId)) {
                                        /******/ installedChunkData = installedChunks[chunkId];
                                        /******/ if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
                                        /******/ if (installedChunkData) {
                                            /******/ var errorType =
                                                event && (event.type === 'load' ? 'missing' : event.type);
                                            /******/ var realSrc = event && event.target && event.target.src;
                                            /******/ error.message =
                                                'Loading chunk ' +
                                                chunkId +
                                                ' failed.\n(' +
                                                errorType +
                                                ': ' +
                                                realSrc +
                                                ')';
                                            /******/ error.name = 'ChunkLoadError';
                                            /******/ error.type = errorType;
                                            /******/ error.request = realSrc;
                                            /******/ installedChunkData[1](error);
                                            /******/
                                        }
                                        /******/
                                    }
                                    /******/
                                };
                                /******/ __webpack_require__.l(url, loadingEnded, 'chunk-' + chunkId, chunkId);
                                /******/
                            }
                            /******/
                        }
                        /******/
                    }
                    /******/
                };
                /******/
                /******/ __webpack_require__.F.j = chunkId => {
                    /******/ if (
                        (!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) &&
                        true
                    ) {
                        /******/ installedChunks[chunkId] = null;
                        /******/ var link = document.createElement('link');
                        /******/
                        /******/ if (__webpack_require__.nc) {
                            /******/ link.setAttribute('nonce', __webpack_require__.nc);
                            /******/
                        }
                        /******/ link.rel = 'prefetch';
                        /******/ link.as = 'script';
                        /******/ link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
                        /******/ document.head.appendChild(link);
                        /******/
                    }
                    /******/
                };
                /******/
                /******/ // no preloaded
                /******/
                /******/ // no HMR
                /******/
                /******/ // no HMR manifest
                /******/
                /******/ // no on chunks loaded
                /******/
                /******/ // install a JSONP callback for chunk loading
                /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
                    /******/ var [chunkIds, moreModules, runtime] = data;
                    /******/ // add "moreModules" to the modules object,
                    /******/ // then flag all "chunkIds" as loaded and fire callback
                    /******/ var moduleId,
                        chunkId,
                        i = 0;
                    /******/ if (chunkIds.some(id => installedChunks[id] !== 0)) {
                        /******/ for (moduleId in moreModules) {
                            /******/ if (__webpack_require__.o(moreModules, moduleId)) {
                                /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
                                /******/
                            }
                            /******/
                        }
                        /******/ if (runtime) var result = runtime(__webpack_require__);
                        /******/
                    }
                    /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
                    /******/ for (; i < chunkIds.length; i++) {
                        /******/ chunkId = chunkIds[i];
                        /******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                            /******/ installedChunks[chunkId][0]();
                            /******/
                        }
                        /******/ installedChunks[chunkId] = 0;
                        /******/
                    }
                    /******/
                    /******/
                };
                /******/
                /******/ var chunkLoadingGlobal = (self['webpackChunk_deriv_trader'] =
                    self['webpackChunk_deriv_trader'] || []);
                /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
                /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
                    null,
                    chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
                );
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/chunk prefetch trigger */
            /******/ (() => {
                /******/ var chunkToChildrenMap = {
                    /******/ 'trader-app': [
                        /******/ 'trade-modals',
                        /******/ 'settings-chart',
                        /******/
                    ],
                    /******/
                };
                /******/ __webpack_require__.f.prefetch = (chunkId, promises) =>
                    Promise.all(promises).then(() => {
                        /******/ var chunks = chunkToChildrenMap[chunkId];
                        /******/ Array.isArray(chunks) && chunks.map(__webpack_require__.E);
                        /******/
                    });
                /******/
            })();
            /******/
            /************************************************************************/
            /******/
            /******/ // module factories are used so entry inlining is disabled
            /******/ // startup
            /******/ // Load entry module and return exports
            /******/ var __webpack_exports__ = __webpack_require__('./src/index.tsx');
            /******/ __webpack_exports__ = __webpack_exports__['default'];
            /******/
            /******/ return __webpack_exports__;
            /******/
        })();
    }
);
