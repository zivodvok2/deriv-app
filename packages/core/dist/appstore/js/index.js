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
            require('react'),
            require('@deriv/shared'),
            require('@deriv/components'),
            require('@deriv-com/translations'),
            require('@deriv-com/analytics'),
            require('classnames'),
            require('react-router'),
            require('@deriv/translations'),
            require('react-router-dom'),
            require('react-dom'),
            require('mobx')
        );
    else if (typeof define === 'function' && define.amd)
        define([
            'react',
            '@deriv/shared',
            '@deriv/components',
            '@deriv-com/translations',
            '@deriv-com/analytics',
            'classnames',
            'react-router',
            '@deriv/translations',
            'react-router-dom',
            'react-dom',
            'mobx',
        ], factory);
    else if (typeof exports === 'object')
        exports['@deriv/appstore'] = factory(
            require('react'),
            require('@deriv/shared'),
            require('@deriv/components'),
            require('@deriv-com/translations'),
            require('@deriv-com/analytics'),
            require('classnames'),
            require('react-router'),
            require('@deriv/translations'),
            require('react-router-dom'),
            require('react-dom'),
            require('mobx')
        );
    else
        root['@deriv/appstore'] = factory(
            root['react'],
            root['@deriv/shared'],
            root['@deriv/components'],
            root['@deriv-com/translations'],
            root['@deriv-com/analytics'],
            root['classnames'],
            root['react-router'],
            root['@deriv/translations'],
            root['react-router-dom'],
            root['react-dom'],
            root['mobx']
        );
})(
    self,
    (
        __WEBPACK_EXTERNAL_MODULE_react__,
        __WEBPACK_EXTERNAL_MODULE__deriv_shared__,
        __WEBPACK_EXTERNAL_MODULE__deriv_components__,
        __WEBPACK_EXTERNAL_MODULE__deriv_com_translations__,
        __WEBPACK_EXTERNAL_MODULE__deriv_com_analytics__,
        __WEBPACK_EXTERNAL_MODULE_classnames__,
        __WEBPACK_EXTERNAL_MODULE_react_router__,
        __WEBPACK_EXTERNAL_MODULE__deriv_translations__,
        __WEBPACK_EXTERNAL_MODULE_react_router_dom__,
        __WEBPACK_EXTERNAL_MODULE_react_dom__,
        __WEBPACK_EXTERNAL_MODULE_mobx__
    ) => {
        return /******/ (() => {
            // webpackBootstrap
            /******/ 'use strict';
            /******/ var __webpack_modules__ = {
                /***/ './src/index.tsx':
                    /*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar App = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | appstore */[__webpack_require__.e("vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_bowser_es5_js-node_mo-fd1b56"), __webpack_require__.e("appstore")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/app */ "./src/components/app.tsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FwcHN0b3JlLy4vc3JjL2luZGV4LnRzeD9kOTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlTGF6eUxvYWRlciwgbW9kdWxlTG9hZGVyIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuXG5jb25zdCBBcHAgPSBtYWtlTGF6eUxvYWRlcihcbiAgICAoKSA9PiBtb2R1bGVMb2FkZXIoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXBwc3RvcmVcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vY29tcG9uZW50cy9hcHAnKSksXG4gICAgKCkgPT4gPExvYWRpbmcgLz5cbikoKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.tsx\n'
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

                /***/ '@deriv-com/translations':
                    /*!******************************************!*\
  !*** external "@deriv-com/translations" ***!
  \******************************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_com_translations__;

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

                /***/ classnames:
                    /*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_classnames__;

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
                        'appstore/js/appstore.' +
                        chunkId +
                        '.' +
                        {
                            'vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_bowser_es5_js-node_mo-fd1b56':
                                'f203e498204b7c25f2e6',
                            appstore: '7a9b2dc1bcfa7042867a',
                            'src_assets_svgs_trading-platform_index_tsx': 'eac0e785e29eb7192499',
                            'modules-onboarding': '2d036df2aa1e7db25d0d',
                            'vendors-node_modules_react-content-loader_dist_react-content-loader_es_js-node_modules_deriv--5c0136':
                                '578c1a6ab23bf3418f50',
                            'vendors-node_modules_deriv_quill-icons_dist_esm_react_LabelPaired_LabelPairedCircleChevronDow-a0bd13':
                                'a5e1ba58667f445d4bdb',
                            'src_components_containers_listing-container_tsx-src_components_containers_trading-app-card_ts-b2da83':
                                '88e613a255338c79b525',
                            'modules-traders-hub': '9bc25fb7e765c23f31b2',
                            'modules-traders-hub-logged-out': 'a1ed0ad390a8dd6389d6',
                            src_modules_Page404_index_ts: 'f86010334a26c0f9343e',
                            'cfd_migration-banner': '3d4b57a9f85b100ccec9',
                            hooks_src_useIsSelectedMT5AccountCreated_ts: 'e4fc59df5cf07b94c1f2',
                            'modal_verification-docs-list-modal': 'e6913b28437896ab664f',
                            'modal_Components_account-transfer-modal': '02a75e13c69301acaadf',
                            'modal_regulators-compare-modal': '8a4c8269471f2741e03f',
                            'modal_wallets-migration-failed': '47c16b2dc067f727d78a',
                            'vendors-node_modules_deriv-com_ui_dist_components_SectionMessage_index_js':
                                '0c009c0c45aee6c201c7',
                            'modal_wallets-upgrade-modal': '5a2f231d596e67241dad',
                            'modal_cfd_cfd-server-error-dialog': 'c4025bbdb0c237ed7d99',
                            'modal_cfd_cfd-password-modal': '058f12379719ea516b39',
                            'modal_cfd_cfd-server-maintenance-modal': 'd36205370a3fd5f934fb',
                            'modal_cfd_mt5-account-unavailable-modal': 'baccac5eb3a88fab7a30',
                            cfd_src_Helpers_constants_ts: 'ba57284227bb6f39f1fd',
                            'modal_cfd_cfd-top-up-demo-modal': '5527b9c200921b6adc53',
                            'vendors-node_modules_react-qrcode_lib_qrcode_js': '4f81fb748dd20123b11a',
                            'cfd_src_Assets_svgs_trading-platform_index_tsx': '9c56adc0e8675eb20036',
                            'modal_cfd_mt5-trade-modal': 'd04be471e9a44517e78c',
                            'modal_cfd_cfd-password-manager-modal': 'faab202d1b156387754f',
                            'modal_cfd_mt5-migration-modal': '5289d37a1143ccce11b5',
                            'modal_account_reset-trading-password-modal': 'de46b9f614d1b21bcfaa',
                            'modal_cfd_ctrader-transfer-modal': 'eda36ac6fa4d2354cd16',
                            'modal_setup-real-account-or-go-to-demo': 'd874c76e3cb3d1856a88',
                            'Components_banners_real-account-creation-banner': 'efc521ccb534e8ab4ffc',
                            'vendors-node_modules_css-loader_dist_runtime_getUrl_js-node_modules_tanstack_react-query_buil-c77728':
                                'ebd8ce4869bd93f070df',
                            'Components_banners_deposit-now-banner': 'de958492dbe8d2adacc7',
                            'wallets-banner-upgrade': 'ddfe4b02cd37599dbb23',
                            'wallets-banner-upgrading': '589fb1e26f7c1c64ba07',
                            'wallets-banner-unsuccessful': '9182dfd808185e9a9758',
                            'vendors-node_modules_deriv-com_ui_dist_components_Breadcrumbs_index_js':
                                'caf5febcb73696639f65',
                            'cashier-breadcrumb': '3f7708f8524bbd2034b2',
                            'cfd_src_Containers_mt5-create-password_mt5-create-password_tsx': '80f536ee774bb11d6e82',
                            'cfd_src_Containers_cfd-password-modal-tnc_tsx': '0bf43a1a9d103ab516c7',
                            'cfd_src_Containers_cfd-password-change_tsx': '208c74ff3743d86905f7',
                            'cfd_src_Containers_cfd-password-success-icon_tsx': '8639898b03046489ed63',
                            'cfd_src_Containers_cfd-password-change-content_tsx': '277523b61065d1b1f800',
                            'cfd_src_Containers_cfd-change-password-confirmation_tsx': '87822ace0a4505336ea9',
                        }[chunkId] +
                        '.js'
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
                /******/ var dataWebpackPrefix = '@deriv/appstore:';
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
            /******/ /* webpack/runtime/jsonp chunk loading */
            /******/ (() => {
                /******/ // no baseURI
                /******/
                /******/ // object to store loaded and loading chunks
                /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
                /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
                /******/ var installedChunks = {
                    /******/ index: 0,
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
                /******/ var chunkLoadingGlobal = (self['webpackChunk_deriv_appstore'] =
                    self['webpackChunk_deriv_appstore'] || []);
                /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
                /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
                    null,
                    chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
                );
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/nonce */
            /******/ (() => {
                /******/ __webpack_require__.nc = undefined;
                /******/
            })();
            /******/
            /************************************************************************/
            /******/
            /******/ // startup
            /******/ // Load entry module and return exports
            /******/ // This entry module can't be inlined because the eval-source-map devtool is used.
            /******/ var __webpack_exports__ = __webpack_require__('./src/index.tsx');
            /******/ __webpack_exports__ = __webpack_exports__['default'];
            /******/
            /******/ return __webpack_exports__;
            /******/
        })();
    }
);
