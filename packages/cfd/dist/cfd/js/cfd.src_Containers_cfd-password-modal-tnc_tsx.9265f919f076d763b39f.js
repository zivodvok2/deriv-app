'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunk_deriv_cfd'] = self['webpackChunk_deriv_cfd'] || []).push([
    ['src_Containers_cfd-password-modal-tnc_tsx'],
    {
        /***/ './src/Containers/cfd-password-modal-info.tsx':
            /*!****************************************************!*\
  !*** ./src/Containers/cfd-password-modal-info.tsx ***!
  \****************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/hooks */ "@deriv/hooks");\n/* harmony import */ var _deriv_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_hooks__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar CfdPasswordModalInfo = function CfdPasswordModalInfo(_ref) {\n  var _available_account_to, _available_account_to2;\n  var platform = _ref.platform,\n    product = _ref.product,\n    need_tnc = _ref.need_tnc;\n  var _useIsSelectedMT5Acco = (0,_deriv_hooks__WEBPACK_IMPORTED_MODULE_3__.useIsSelectedMT5AccountCreated)(),\n    available_account_to_create = _useIsSelectedMT5Acco.available_account_to_create;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "cfd-password-modal-info"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "cfd-password-modal-info__icon"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n    icon: "IcInfoLight"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    size: "xxxs"\n  }, need_tnc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.Localize, {\n    i18n_default_text: "You are adding your {{platform}} {{product}} account under {{company}}, regulated by the {{regulatory_authority}} (license no.<0/>)",\n    values: {\n      platform: platform,\n      product: product,\n      company: available_account_to_create === null || available_account_to_create === void 0 ? void 0 : available_account_to_create.name,\n      regulatory_authority: (_available_account_to = available_account_to_create === null || available_account_to_create === void 0 ? void 0 : available_account_to_create.regulatory_authority) !== null && _available_account_to !== void 0 ? _available_account_to : \'\'\n    },\n    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n      key: 0,\n      dangerouslySetInnerHTML: {\n        __html: (_available_account_to2 = available_account_to_create === null || available_account_to_create === void 0 ? void 0 : available_account_to_create.licence_number) !== null && _available_account_to2 !== void 0 ? _available_account_to2 : \'\'\n      }\n    })]\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.Localize, {\n    i18n_default_text: "You are adding your {{platform}} {{product}} account under {{company}}.",\n    values: {\n      platform: platform,\n      product: product,\n      company: available_account_to_create === null || available_account_to_create === void 0 ? void 0 : available_account_to_create.name\n    }\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CfdPasswordModalInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jZmQtcGFzc3dvcmQtbW9kYWwtaW5mby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9jZmQvLi9zcmMvQ29udGFpbmVycy9jZmQtcGFzc3dvcmQtbW9kYWwtaW5mby50c3g/NDBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyB1c2VJc1NlbGVjdGVkTVQ1QWNjb3VudENyZWF0ZWQgfSBmcm9tICdAZGVyaXYvaG9va3MnO1xuXG50eXBlIENmZFBhc3N3b3JkTW9kYWxJbmZvUHJvcHMgPSB7XG4gICAganVyaXNkaWN0aW9uX3NlbGVjdGVkX3Nob3J0Y29kZTogc3RyaW5nO1xuICAgIHBsYXRmb3JtOiBzdHJpbmc7XG4gICAgcHJvZHVjdDogc3RyaW5nO1xuICAgIG5lZWRfdG5jOiBib29sZWFuO1xufTtcblxuY29uc3QgQ2ZkUGFzc3dvcmRNb2RhbEluZm8gPSAoeyBwbGF0Zm9ybSwgcHJvZHVjdCwgbmVlZF90bmMgfTogQ2ZkUGFzc3dvcmRNb2RhbEluZm9Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYXZhaWxhYmxlX2FjY291bnRfdG9fY3JlYXRlIH0gPSB1c2VJc1NlbGVjdGVkTVQ1QWNjb3VudENyZWF0ZWQoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2ZkLXBhc3N3b3JkLW1vZGFsLWluZm8nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NmZC1wYXNzd29yZC1tb2RhbC1pbmZvX19pY29uJz5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPSdJY0luZm9MaWdodCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFRleHQgc2l6ZT0neHh4cyc+XG4gICAgICAgICAgICAgICAge25lZWRfdG5jID8gKFxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdZb3UgYXJlIGFkZGluZyB5b3VyIHt7cGxhdGZvcm19fSB7e3Byb2R1Y3R9fSBhY2NvdW50IHVuZGVyIHt7Y29tcGFueX19LCByZWd1bGF0ZWQgYnkgdGhlIHt7cmVndWxhdG9yeV9hdXRob3JpdHl9fSAobGljZW5zZSBuby48MC8+KSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueTogYXZhaWxhYmxlX2FjY291bnRfdG9fY3JlYXRlPy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ3VsYXRvcnlfYXV0aG9yaXR5OiBhdmFpbGFibGVfYWNjb3VudF90b19jcmVhdGU/LnJlZ3VsYXRvcnlfYXV0aG9yaXR5ID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXZhaWxhYmxlX2FjY291bnRfdG9fY3JlYXRlPy5saWNlbmNlX251bWJlciA/PyAnJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdZb3UgYXJlIGFkZGluZyB5b3VyIHt7cGxhdGZvcm19fSB7e3Byb2R1Y3R9fSBhY2NvdW50IHVuZGVyIHt7Y29tcGFueX19LidcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueTogYXZhaWxhYmxlX2FjY291bnRfdG9fY3JlYXRlPy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2ZkUGFzc3dvcmRNb2RhbEluZm87XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/cfd-password-modal-info.tsx\n'
                );

                /***/
            },

        /***/ './src/Containers/cfd-password-modal-tnc.tsx':
            /*!***************************************************!*\
  !*** ./src/Containers/cfd-password-modal-tnc.tsx ***!
  \***************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/stores */ "@deriv/stores");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cfd_password_modal_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cfd-password-modal-info */ "./src/Containers/cfd-password-modal-info.tsx");\n/* harmony import */ var _jurisdiction_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jurisdiction-checkbox */ "./src/Containers/jurisdiction-checkbox.tsx");\n/* harmony import */ var _Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Stores/Modules/CFD/Helpers/useCfdStores */ "./src/Stores/Modules/CFD/Helpers/useCfdStores.tsx");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar CfdPasswordModalTnc = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_2__.observer)(function (_ref) {\n  var platform = _ref.platform,\n    checked = _ref.checked,\n    onCheck = _ref.onCheck,\n    className = _ref.className,\n    need_tnc = _ref.need_tnc;\n  var _useCfdStore = (0,_Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_5__.useCfdStore)(),\n    jurisdiction_selected_shortcode = _useCfdStore.jurisdiction_selected_shortcode,\n    account_title = _useCfdStore.account_title;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(\'cfd-password-modal-tnc\', className)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_cfd_password_modal_info__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    jurisdiction_selected_shortcode: jurisdiction_selected_shortcode,\n    platform: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getCFDPlatformLabel)(platform),\n    product: account_title,\n    need_tnc: need_tnc\n  }), need_tnc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_jurisdiction_checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    is_checked: checked,\n    onCheck: onCheck,\n    class_name: "cfd-password-modal__checkbox",\n    jurisdiction_selected_shortcode: jurisdiction_selected_shortcode\n  }));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CfdPasswordModalTnc);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jZmQtcGFzc3dvcmQtbW9kYWwtdG5jLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9jZmQvLi9zcmMvQ29udGFpbmVycy9jZmQtcGFzc3dvcmQtbW9kYWwtdG5jLnRzeD8wN2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRDRkRQbGF0Zm9ybUxhYmVsLCBDRkRfUFJPRFVDVFNfVElUTEUsIENGRF9QTEFURk9STVMgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnQGRlcml2L3N0b3Jlcyc7XG5pbXBvcnQgQ2ZkUGFzc3dvcmRNb2RhbEluZm8gZnJvbSAnLi9jZmQtcGFzc3dvcmQtbW9kYWwtaW5mbyc7XG5pbXBvcnQgSnVyaXNkaWN0aW9uQ2hlY2tCb3ggZnJvbSAnLi9qdXJpc2RpY3Rpb24tY2hlY2tib3gnO1xuaW1wb3J0IHsgdXNlQ2ZkU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvTW9kdWxlcy9DRkQvSGVscGVycy91c2VDZmRTdG9yZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnR5cGUgQ2ZkUGFzc3dvcmRNb2RhbFRuY1Byb3BzID0ge1xuICAgIHBsYXRmb3JtOiB0eXBlb2YgQ0ZEX1BMQVRGT1JNU1trZXlvZiB0eXBlb2YgQ0ZEX1BMQVRGT1JNU107XG4gICAgY2hlY2tlZDogYm9vbGVhbjtcbiAgICBuZWVkX3RuYzogYm9vbGVhbjtcbiAgICBvbkNoZWNrOiAoKSA9PiB2b2lkO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmNvbnN0IENmZFBhc3N3b3JkTW9kYWxUbmMgPSBvYnNlcnZlcihcbiAgICAoeyBwbGF0Zm9ybSwgY2hlY2tlZCwgb25DaGVjaywgY2xhc3NOYW1lLCBuZWVkX3RuYyB9OiBDZmRQYXNzd29yZE1vZGFsVG5jUHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBqdXJpc2RpY3Rpb25fc2VsZWN0ZWRfc2hvcnRjb2RlLCBhY2NvdW50X3RpdGxlIH0gPSB1c2VDZmRTdG9yZSgpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2NmZC1wYXNzd29yZC1tb2RhbC10bmMnLCBjbGFzc05hbWUpfT5cbiAgICAgICAgICAgICAgICA8Q2ZkUGFzc3dvcmRNb2RhbEluZm9cbiAgICAgICAgICAgICAgICAgICAganVyaXNkaWN0aW9uX3NlbGVjdGVkX3Nob3J0Y29kZT17anVyaXNkaWN0aW9uX3NlbGVjdGVkX3Nob3J0Y29kZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm09e2dldENGRFBsYXRmb3JtTGFiZWwocGxhdGZvcm0pfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXthY2NvdW50X3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBuZWVkX3RuYz17bmVlZF90bmN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7bmVlZF90bmMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SnVyaXNkaWN0aW9uQ2hlY2tCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzX2NoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrPXtvbkNoZWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NfbmFtZT0nY2ZkLXBhc3N3b3JkLW1vZGFsX19jaGVja2JveCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1cmlzZGljdGlvbl9zZWxlY3RlZF9zaG9ydGNvZGU9e2p1cmlzZGljdGlvbl9zZWxlY3RlZF9zaG9ydGNvZGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENmZFBhc3N3b3JkTW9kYWxUbmM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/cfd-password-modal-tnc.tsx\n'
                );

                /***/
            },

        /***/ './src/Containers/jurisdiction-checkbox.tsx':
            /*!**************************************************!*\
  !*** ./src/Containers/jurisdiction-checkbox.tsx ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/stores */ "@deriv/stores");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _deriv_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/hooks */ "@deriv/hooks");\n/* harmony import */ var _deriv_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deriv_hooks__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar JurisdictionCheckBox = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_3__.observer)(function (_ref) {\n  var class_name = _ref.class_name,\n    is_checked = _ref.is_checked,\n    jurisdiction_selected_shortcode = _ref.jurisdiction_selected_shortcode,\n    onCheck = _ref.onCheck;\n  var _useIsSelectedMT5Acco = (0,_deriv_hooks__WEBPACK_IMPORTED_MODULE_5__.useIsSelectedMT5AccountCreated)(),\n    available_account_to_create = _useIsSelectedMT5Acco.available_account_to_create;\n  var getCheckboxLabel = function getCheckboxLabel() {\n    var _DBVI_COMPANY_NAMES$j;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      as: "p",\n      size: "xxs",\n      line_height: "m"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n      i18n_default_text: "I confirm and accept {{company}} \'s <0>terms and conditions</0>",\n      values: {\n        company: available_account_to_create === null || available_account_to_create === void 0 ? void 0 : available_account_to_create.name\n      },\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.StaticUrl, {\n        key: 0,\n        className: "link link--no-underline",\n        href: (_DBVI_COMPANY_NAMES$j = _deriv_shared__WEBPACK_IMPORTED_MODULE_2__.DBVI_COMPANY_NAMES[jurisdiction_selected_shortcode]) === null || _DBVI_COMPANY_NAMES$j === void 0 ? void 0 : _DBVI_COMPANY_NAMES$j.tnc_url,\n        is_document: true\n      })]\n    }));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: class_name\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {\n    value: is_checked,\n    onChange: onCheck,\n    label: getCheckboxLabel(),\n    defaultChecked: !!is_checked\n  }));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JurisdictionCheckBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9qdXJpc2RpY3Rpb24tY2hlY2tib3gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9jZmQvLi9zcmMvQ29udGFpbmVycy9qdXJpc2RpY3Rpb24tY2hlY2tib3gudHN4PzUyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoZWNrYm94LCBTdGF0aWNVcmwsIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEQlZJX0NPTVBBTllfTkFNRVMgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnQGRlcml2L3N0b3Jlcyc7XG5pbXBvcnQgeyBMb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgdXNlSXNTZWxlY3RlZE1UNUFjY291bnRDcmVhdGVkIH0gZnJvbSAnQGRlcml2L2hvb2tzJztcblxudHlwZSBUSnVyaXNkaWN0aW9uQ2hlY2tCb3hQcm9wcyA9IHtcbiAgICBjbGFzc19uYW1lOiBzdHJpbmc7XG4gICAgaXNfY2hlY2tlZDogYm9vbGVhbjtcbiAgICBqdXJpc2RpY3Rpb25fc2VsZWN0ZWRfc2hvcnRjb2RlOiBzdHJpbmc7XG4gICAgb25DaGVjazogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEp1cmlzZGljdGlvbkNoZWNrQm94ID0gb2JzZXJ2ZXIoXG4gICAgKHsgY2xhc3NfbmFtZSwgaXNfY2hlY2tlZCwganVyaXNkaWN0aW9uX3NlbGVjdGVkX3Nob3J0Y29kZSwgb25DaGVjayB9OiBUSnVyaXNkaWN0aW9uQ2hlY2tCb3hQcm9wcykgPT4ge1xuICAgICAgICBjb25zdCB7IGF2YWlsYWJsZV9hY2NvdW50X3RvX2NyZWF0ZSB9ID0gdXNlSXNTZWxlY3RlZE1UNUFjY291bnRDcmVhdGVkKCk7XG4gICAgICAgIGNvbnN0IGdldENoZWNrYm94TGFiZWwgPSAoKSA9PiAoXG4gICAgICAgICAgICA8VGV4dCBhcz0ncCcgc2l6ZT0neHhzJyBsaW5lX2hlaWdodD0nbSc+XG4gICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PVwiSSBjb25maXJtIGFuZCBhY2NlcHQge3tjb21wYW55fX0gJ3MgPDA+dGVybXMgYW5kIGNvbmRpdGlvbnM8LzA+XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7IGNvbXBhbnk6IGF2YWlsYWJsZV9hY2NvdW50X3RvX2NyZWF0ZT8ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGljVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGluayBsaW5rLS1uby11bmRlcmxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17REJWSV9DT01QQU5ZX05BTUVTW2p1cmlzZGljdGlvbl9zZWxlY3RlZF9zaG9ydGNvZGVdPy50bmNfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2RvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NfbmFtZX0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc19jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGVja31cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2dldENoZWNrYm94TGFiZWwoKX1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyEhaXNfY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSnVyaXNkaWN0aW9uQ2hlY2tCb3g7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/jurisdiction-checkbox.tsx\n'
                );

                /***/
            },
    },
]);