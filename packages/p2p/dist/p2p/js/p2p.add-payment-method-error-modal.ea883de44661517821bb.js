'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunk_deriv_p2p'] = self['webpackChunk_deriv_p2p'] || []).push([
    ['add-payment-method-error-modal'],
    {
        /***/ './src/components/modal-manager/modals/add-payment-method-error-modal/add-payment-method-error-modal.tsx':
            /*!***************************************************************************************************************!*\
  !*** ./src/components/modal-manager/modals/add-payment-method-error-modal/add-payment-method-error-modal.tsx ***!
  \***************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/stores */ "@deriv/stores");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Components_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/i18next */ "./src/components/i18next/index.ts");\n/* harmony import */ var Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Components/modal-manager/modal-manager-context */ "./src/components/modal-manager/modal-manager-context.ts");\n/* harmony import */ var Stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores */ "./src/stores/index.js");\n\n\n\n\n\n\nvar AddPaymentMethodErrorModal = function AddPaymentMethodErrorModal() {\n  var _useStores = (0,Stores__WEBPACK_IMPORTED_MODULE_5__.useStores)(),\n    general_store = _useStores.general_store,\n    my_profile_store = _useStores.my_profile_store;\n  var _useModalManagerConte = (0,Components_modal_manager_modal_manager_context__WEBPACK_IMPORTED_MODULE_4__.useModalManagerContext)(),\n    is_modal_open = _useModalManagerConte.is_modal_open,\n    hideModal = _useModalManagerConte.hideModal;\n  var setFormikRef = general_store.setFormikRef,\n    setSavedFormState = general_store.setSavedFormState;\n  var add_payment_method_error_message = my_profile_store.add_payment_method_error_message,\n    setAddPaymentMethodErrorMessage = my_profile_store.setAddPaymentMethodErrorMessage,\n    setSelectedPaymentMethod = my_profile_store.setSelectedPaymentMethod;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    is_open: is_modal_open,\n    small: true,\n    has_close_icon: false,\n    title: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)("Something\'s not right")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n    color: "prominent",\n    size: "xs"\n  }, add_payment_method_error_message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    has_effect: true,\n    text: (0,Components_i18next__WEBPACK_IMPORTED_MODULE_3__.localize)(\'Ok\'),\n    onClick: function onClick() {\n      setAddPaymentMethodErrorMessage(\'\');\n      setSavedFormState(null);\n      setFormikRef(null);\n      hideModal({\n        should_save_form_history: true\n      });\n    },\n    primary: true,\n    large: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_deriv_stores__WEBPACK_IMPORTED_MODULE_2__.observer)(AddPaymentMethodErrorModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9hZGQtcGF5bWVudC1tZXRob2QtZXJyb3ItbW9kYWwvYWRkLXBheW1lbnQtbWV0aG9kLWVycm9yLW1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL2FkZC1wYXltZW50LW1ldGhvZC1lcnJvci1tb2RhbC9hZGQtcGF5bWVudC1tZXRob2QtZXJyb3ItbW9kYWwudHN4P2FhMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ0BkZXJpdi9zdG9yZXMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdDb21wb25lbnRzL2kxOG5leHQnO1xuaW1wb3J0IHsgdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCB9IGZyb20gJ0NvbXBvbmVudHMvbW9kYWwtbWFuYWdlci9tb2RhbC1tYW5hZ2VyLWNvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnU3RvcmVzJztcblxuY29uc3QgQWRkUGF5bWVudE1ldGhvZEVycm9yTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBnZW5lcmFsX3N0b3JlLCBteV9wcm9maWxlX3N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgICBjb25zdCB7IGlzX21vZGFsX29wZW4sIGhpZGVNb2RhbCB9ID0gdXNlTW9kYWxNYW5hZ2VyQ29udGV4dCgpO1xuICAgIGNvbnN0IHsgc2V0Rm9ybWlrUmVmLCBzZXRTYXZlZEZvcm1TdGF0ZSB9ID0gZ2VuZXJhbF9zdG9yZTtcbiAgICBjb25zdCB7IGFkZF9wYXltZW50X21ldGhvZF9lcnJvcl9tZXNzYWdlLCBzZXRBZGRQYXltZW50TWV0aG9kRXJyb3JNZXNzYWdlLCBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2QgfSA9XG4gICAgICAgIG15X3Byb2ZpbGVfc3RvcmU7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsIGlzX29wZW49e2lzX21vZGFsX29wZW59IHNtYWxsIGhhc19jbG9zZV9pY29uPXtmYWxzZX0gdGl0bGU9e2xvY2FsaXplKFwiU29tZXRoaW5nJ3Mgbm90IHJpZ2h0XCIpfT5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPSdwcm9taW5lbnQnIHNpemU9J3hzJz5cbiAgICAgICAgICAgICAgICAgICAge2FkZF9wYXltZW50X21ldGhvZF9lcnJvcl9tZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNfZWZmZWN0XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e2xvY2FsaXplKCdPaycpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBZGRQYXltZW50TWV0aG9kRXJyb3JNZXNzYWdlKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhdmVkRm9ybVN0YXRlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybWlrUmVmKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU1vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRfc2F2ZV9mb3JtX2hpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2ZXIoQWRkUGF5bWVudE1ldGhvZEVycm9yTW9kYWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/add-payment-method-error-modal/add-payment-method-error-modal.tsx\n'
                );

                /***/
            },

        /***/ './src/components/modal-manager/modals/add-payment-method-error-modal/index.ts':
            /*!*************************************************************************************!*\
  !*** ./src/components/modal-manager/modals/add-payment-method-error-modal/index.ts ***!
  \*************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_payment_method_error_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-payment-method-error-modal */ "./src/components/modal-manager/modals/add-payment-method-error-modal/add-payment-method-error-modal.tsx");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_add_payment_method_error_modal__WEBPACK_IMPORTED_MODULE_0__["default"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC1tYW5hZ2VyL21vZGFscy9hZGQtcGF5bWVudC1tZXRob2QtZXJyb3ItbW9kYWwvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uL3NyYy9jb21wb25lbnRzL21vZGFsLW1hbmFnZXIvbW9kYWxzL2FkZC1wYXltZW50LW1ldGhvZC1lcnJvci1tb2RhbC9pbmRleC50cz9hMTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRQYXltZW50TWV0aG9kRXJyb3JNb2RhbCBmcm9tICcuL2FkZC1wYXltZW50LW1ldGhvZC1lcnJvci1tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFBheW1lbnRNZXRob2RFcnJvck1vZGFsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/modal-manager/modals/add-payment-method-error-modal/index.ts\n'
                );

                /***/
            },
    },
]);