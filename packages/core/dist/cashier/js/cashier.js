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
            require('@deriv/p2p'),
            require('@deriv/shared'),
            require('@deriv/translations'),
            require('mobx'),
            require('react'),
            require('react-dom'),
            require('react-router'),
            require('react-router-dom')
        );
    else if (typeof define === 'function' && define.amd)
        define([
            '@deriv-com/analytics',
            '@deriv/components',
            '@deriv/p2p',
            '@deriv/shared',
            '@deriv/translations',
            'mobx',
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
        ], factory);
    else if (typeof exports === 'object')
        exports['@deriv/cashier'] = factory(
            require('@deriv-com/analytics'),
            require('@deriv/components'),
            require('@deriv/p2p'),
            require('@deriv/shared'),
            require('@deriv/translations'),
            require('mobx'),
            require('react'),
            require('react-dom'),
            require('react-router'),
            require('react-router-dom')
        );
    else
        root['@deriv/cashier'] = factory(
            root['@deriv-com/analytics'],
            root['@deriv/components'],
            root['@deriv/p2p'],
            root['@deriv/shared'],
            root['@deriv/translations'],
            root['mobx'],
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
        __WEBPACK_EXTERNAL_MODULE__deriv_p2p__,
        __WEBPACK_EXTERNAL_MODULE__deriv_shared__,
        __WEBPACK_EXTERNAL_MODULE__deriv_translations__,
        __WEBPACK_EXTERNAL_MODULE_mobx__,
        __WEBPACK_EXTERNAL_MODULE_react__,
        __WEBPACK_EXTERNAL_MODULE_react_dom__,
        __WEBPACK_EXTERNAL_MODULE_react_router__,
        __WEBPACK_EXTERNAL_MODULE_react_router_dom__
    ) => {
        return /******/ (() => {
            // webpackBootstrap
            /******/ 'use strict';
            /******/ var __webpack_modules__ = {
                /***/ './index.tsx':
                    /*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar App = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | cashier-app */[__webpack_require__.e("vendors-node_modules_deriv-com_ui_dist_components_Text_index_js"), __webpack_require__.e("vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_bowser_es5_js-node_mo-a703c0"), __webpack_require__.e("cashier-app")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app */ "./app.tsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2FzaGllci8uL2luZGV4LnRzeD9mZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlTGF6eUxvYWRlciwgbW9kdWxlTG9hZGVyIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuXG5jb25zdCBBcHAgPSBtYWtlTGF6eUxvYWRlcihcbiAgICAoKSA9PiBtb2R1bGVMb2FkZXIoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2FzaGllci1hcHBcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vYXBwJykpLFxuICAgICgpID0+IDxMb2FkaW5nIC8+XG4pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.tsx\n'
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

                /***/ '@deriv/p2p':
                    /*!*****************************!*\
  !*** external "@deriv/p2p" ***!
  \*****************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_p2p__;

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
                        'cashier/js/cashier.' +
                        chunkId +
                        '.' +
                        {
                            'vendors-node_modules_deriv-com_ui_dist_components_Text_index_js': '54aebc55ba6af9c97ff3',
                            'vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_bowser_es5_js-node_mo-a703c0':
                                'f470d642256bffa1c84f',
                            'cashier-app': '012ca136948f723b5654',
                            'cashier-breadcrumb': '0ff513b3ab1ada6354ca',
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
                        'cashier/css/' +
                        chunkId +
                        '.' +
                        {
                            'vendors-node_modules_deriv-com_ui_dist_components_Text_index_js': '0300173a6650fee81399',
                            'vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_bowser_es5_js-node_mo-a703c0':
                                'e4117cb69d8a9414da39',
                            'cashier-app': '2f273bd40251315a5c8b',
                            'vendors-node_modules_deriv-com_ui_dist_assets_Breadcrumbs_css-node_modules_deriv-com_ui_dist_-5970c9':
                                '682f333ebf0af7da9072',
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
                /******/ var dataWebpackPrefix = '@deriv/cashier:';
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
                    /******/ cashier: 0,
                    /******/
                };
                /******/
                /******/ __webpack_require__.f.miniCss = (chunkId, promises) => {
                    /******/ var cssChunks = {
                        'vendors-node_modules_deriv-com_ui_dist_components_Text_index_js': 1,
                        'vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_bowser_es5_js-node_mo-a703c0': 1,
                        'cashier-app': 1,
                        'vendors-node_modules_deriv-com_ui_dist_assets_Breadcrumbs_css-node_modules_deriv-com_ui_dist_-5970c9': 1,
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
                    /******/ cashier: 0,
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
                            /******/ if (
                                'vendors-node_modules_deriv-com_ui_dist_assets_Breadcrumbs_css-node_modules_deriv-com_ui_dist_-5970c9' !=
                                chunkId
                            ) {
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
                            } else installedChunks[chunkId] = 0;
                            /******/
                        }
                        /******/
                    }
                    /******/
                };
                /******/
                /******/ // no prefetching
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
                /******/ var chunkLoadingGlobal = (self['webpackChunk_deriv_cashier'] =
                    self['webpackChunk_deriv_cashier'] || []);
                /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
                /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
                    null,
                    chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
                );
                /******/
            })();
            /******/
            /************************************************************************/
            /******/
            /******/ // startup
            /******/ // Load entry module and return exports
            /******/ // This entry module can't be inlined because the eval-source-map devtool is used.
            /******/ var __webpack_exports__ = __webpack_require__('./index.tsx');
            /******/ __webpack_exports__ = __webpack_exports__['default'];
            /******/
            /******/ return __webpack_exports__;
            /******/
        })();
    }
);
