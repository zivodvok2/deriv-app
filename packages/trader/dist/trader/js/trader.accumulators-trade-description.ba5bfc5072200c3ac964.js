'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunk_deriv_trader'] = self['webpackChunk_deriv_trader'] || []).push([
    ['accumulators-trade-description'],
    {
        /***/ './src/AppV2/Components/Guide/Description/ContractDescription/accumulators-trade-description.tsx':
            /*!*******************************************************************************************************!*\
  !*** ./src/AppV2/Components/Guide/Description/ContractDescription/accumulators-trade-description.tsx ***!
  \*******************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var AppV2_Utils_trade_types_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! AppV2/Utils/trade-types-utils */ "./src/AppV2/Utils/trade-types-utils.tsx");\n/* harmony import */ var AppV2_Utils_contract_description_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! AppV2/Utils/contract-description-utils */ "./src/AppV2/Utils/contract-description-utils.tsx");\n\n\n\n\nvar AccumulatorsTradeDescription = function AccumulatorsTradeDescription(_ref) {\n  var onTermClick = _ref.onTermClick;\n  var _getTerm = (0,AppV2_Utils_contract_description_utils__WEBPACK_IMPORTED_MODULE_3__.getTerm)(),\n    GROWTH_RATE = _getTerm.GROWTH_RATE,\n    RANGE = _getTerm.RANGE,\n    PREVIOUS_SPOT_PRICE = _getTerm.PREVIOUS_SPOT_PRICE,\n    PAYOUT = _getTerm.PAYOUT,\n    TAKE_PROFIT = _getTerm.TAKE_PROFIT,\n    SLIPPAGE_RISK = _getTerm.SLIPPAGE_RISK;\n  var content = [{\n    type: \'paragraph\',\n    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.Localize, {\n      i18n_default_text: "Accumulators allow you to express a view on the range of movement of an index and grow your stake exponentially at a fixed <0>growth rate</0>.",\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n        className: "description__content--definition",\n        key: 0,\n        onClick: function onClick() {\n          return onTermClick(GROWTH_RATE);\n        }\n      })]\n    })\n  }, {\n    type: \'video\',\n    text: AppV2_Utils_trade_types_utils__WEBPACK_IMPORTED_MODULE_2__.CONTRACT_LIST.ACCUMULATORS\n  }, {\n    type: \'paragraph\',\n    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.Localize, {\n      i18n_default_text: "Your stake will continue to grow as long as the current spot price remains within a specified <0>range</0> from the <1>previous spot price</1>. Otherwise, you lose your stake and the trade is terminated.",\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n        className: "description__content--definition",\n        key: 0,\n        onClick: function onClick() {\n          return onTermClick(RANGE);\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n        className: "description__content--definition",\n        key: 1,\n        onClick: function onClick() {\n          return onTermClick(PREVIOUS_SPOT_PRICE);\n        }\n      })]\n    })\n  }, {\n    type: \'paragraph\',\n    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.Localize, {\n      i18n_default_text: "Your <0>payout</0> is the sum of your initial stake and profit.",\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n        className: "description__content--definition",\n        key: 0,\n        onClick: function onClick() {\n          return onTermClick(PAYOUT);\n        }\n      })]\n    })\n  }, {\n    type: \'paragraph\',\n    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.Localize, {\n      i18n_default_text: "<0>Take profit</0> is an additional feature that lets you manage your risk by automatically closing the trade when your profit reaches the target amount. This feature is unavailable for ongoing accumulator contracts.",\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n        className: "description__content--definition",\n        key: 0,\n        onClick: function onClick() {\n          return onTermClick(TAKE_PROFIT);\n        }\n      })]\n    })\n  }, {\n    type: \'paragraph\',\n    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.Localize, {\n      i18n_default_text: "You can close your trade anytime. However, be aware of <0>slippage risk</0>.",\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n        className: "description__content--definition",\n        key: 0,\n        onClick: function onClick() {\n          return onTermClick(SLIPPAGE_RISK);\n        }\n      })]\n    })\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,AppV2_Utils_contract_description_utils__WEBPACK_IMPORTED_MODULE_3__.getContractDescription)(content));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccumulatorsTradeDescription);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwVjIvQ29tcG9uZW50cy9HdWlkZS9EZXNjcmlwdGlvbi9Db250cmFjdERlc2NyaXB0aW9uL2FjY3VtdWxhdG9ycy10cmFkZS1kZXNjcmlwdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvdHJhZGVyLy4vc3JjL0FwcFYyL0NvbXBvbmVudHMvR3VpZGUvRGVzY3JpcHRpb24vQ29udHJhY3REZXNjcmlwdGlvbi9hY2N1bXVsYXRvcnMtdHJhZGUtZGVzY3JpcHRpb24udHN4PzAwMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBDT05UUkFDVF9MSVNUIH0gZnJvbSAnQXBwVjIvVXRpbHMvdHJhZGUtdHlwZXMtdXRpbHMnO1xuaW1wb3J0IHsgZ2V0VGVybSwgZ2V0Q29udHJhY3REZXNjcmlwdGlvbiB9IGZyb20gJ0FwcFYyL1V0aWxzL2NvbnRyYWN0LWRlc2NyaXB0aW9uLXV0aWxzJztcblxuY29uc3QgQWNjdW11bGF0b3JzVHJhZGVEZXNjcmlwdGlvbiA9ICh7IG9uVGVybUNsaWNrIH06IHsgb25UZXJtQ2xpY2s6ICh0ZXJtOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4ge1xuICAgIGNvbnN0IHsgR1JPV1RIX1JBVEUsIFJBTkdFLCBQUkVWSU9VU19TUE9UX1BSSUNFLCBQQVlPVVQsIFRBS0VfUFJPRklULCBTTElQUEFHRV9SSVNLIH0gPSBnZXRUZXJtKCk7XG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICB0ZXh0OiAoXG4gICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdBY2N1bXVsYXRvcnMgYWxsb3cgeW91IHRvIGV4cHJlc3MgYSB2aWV3IG9uIHRoZSByYW5nZSBvZiBtb3ZlbWVudCBvZiBhbiBpbmRleCBhbmQgZ3JvdyB5b3VyIHN0YWtlIGV4cG9uZW50aWFsbHkgYXQgYSBmaXhlZCA8MD5ncm93dGggcmF0ZTwvMD4uJ1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbl9fY29udGVudC0tZGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25UZXJtQ2xpY2soR1JPV1RIX1JBVEUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgICB0ZXh0OiBDT05UUkFDVF9MSVNULkFDQ1VNVUxBVE9SUyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICB0ZXh0OiAoXG4gICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdZb3VyIHN0YWtlIHdpbGwgY29udGludWUgdG8gZ3JvdyBhcyBsb25nIGFzIHRoZSBjdXJyZW50IHNwb3QgcHJpY2UgcmVtYWlucyB3aXRoaW4gYSBzcGVjaWZpZWQgPDA+cmFuZ2U8LzA+IGZyb20gdGhlIDwxPnByZXZpb3VzIHNwb3QgcHJpY2U8LzE+LiBPdGhlcndpc2UsIHlvdSBsb3NlIHlvdXIgc3Rha2UgYW5kIHRoZSB0cmFkZSBpcyB0ZXJtaW5hdGVkLidcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZGVzY3JpcHRpb25fX2NvbnRlbnQtLWRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVGVybUNsaWNrKFJBTkdFKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZGVzY3JpcHRpb25fX2NvbnRlbnQtLWRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVGVybUNsaWNrKFBSRVZJT1VTX1NQT1RfUFJJQ0UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgICAgdGV4dDogKFxuICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0nWW91ciA8MD5wYXlvdXQ8LzA+IGlzIHRoZSBzdW0gb2YgeW91ciBpbml0aWFsIHN0YWtlIGFuZCBwcm9maXQuJ1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbl9fY29udGVudC0tZGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25UZXJtQ2xpY2soUEFZT1VUKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgIHRleHQ6IChcbiAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9JzwwPlRha2UgcHJvZml0PC8wPiBpcyBhbiBhZGRpdGlvbmFsIGZlYXR1cmUgdGhhdCBsZXRzIHlvdSBtYW5hZ2UgeW91ciByaXNrIGJ5IGF1dG9tYXRpY2FsbHkgY2xvc2luZyB0aGUgdHJhZGUgd2hlbiB5b3VyIHByb2ZpdCByZWFjaGVzIHRoZSB0YXJnZXQgYW1vdW50LiBUaGlzIGZlYXR1cmUgaXMgdW5hdmFpbGFibGUgZm9yIG9uZ29pbmcgYWNjdW11bGF0b3IgY29udHJhY3RzLidcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZGVzY3JpcHRpb25fX2NvbnRlbnQtLWRlZmluaXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVGVybUNsaWNrKFRBS0VfUFJPRklUKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICAgIHRleHQ6IChcbiAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9J1lvdSBjYW4gY2xvc2UgeW91ciB0cmFkZSBhbnl0aW1lLiBIb3dldmVyLCBiZSBhd2FyZSBvZiA8MD5zbGlwcGFnZSByaXNrPC8wPi4nXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uX19jb250ZW50LS1kZWZpbml0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRlcm1DbGljayhTTElQUEFHRV9SSVNLKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PntnZXRDb250cmFjdERlc2NyaXB0aW9uKGNvbnRlbnQpfTwvUmVhY3QuRnJhZ21lbnQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjdW11bGF0b3JzVHJhZGVEZXNjcmlwdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/AppV2/Components/Guide/Description/ContractDescription/accumulators-trade-description.tsx\n'
                );

                /***/
            },
    },
]);