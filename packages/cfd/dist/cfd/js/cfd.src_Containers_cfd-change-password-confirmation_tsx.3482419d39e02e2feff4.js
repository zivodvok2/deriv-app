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
    ['src_Containers_cfd-change-password-confirmation_tsx'],
    {
        /***/ './src/Containers/cfd-change-password-confirmation.tsx':
            /*!*************************************************************!*\
  !*** ./src/Containers/cfd-change-password-confirmation.tsx ***!
  \*************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\n\n\n\n\n\n\nvar ChangePasswordConfirmation = function ChangePasswordConfirmation(_ref) {\n  var confirm_label = _ref.confirm_label,\n    className = _ref.className,\n    platform = _ref.platform,\n    onConfirm = _ref.onConfirm,\n    onCancel = _ref.onCancel,\n    context = _ref.context;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n    initialValues: {\n      password: \'\'\n    },\n    onSubmit: onConfirm\n  }, function (_ref2) {\n    var isSubmitting = _ref2.isSubmitting,\n      handleSubmit = _ref2.handleSubmit;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n      onSubmit: handleSubmit,\n      "data-testid": "dt_cfd_change_password_form"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'cfd-change-password-confirmation__wrapper\', _defineProperty({}, "".concat(className, "-wrapper"), className))\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\'cfd-change-password-confirmation\', className)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n      className: "cfd-change-password__icon",\n      icon: platform === _deriv_shared__WEBPACK_IMPORTED_MODULE_5__.CFD_PLATFORMS.MT5 ? \'IcMt5OnePassword\' : \'IcDxtradeOnePassword\',\n      width: "122",\n      height: "108"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      as: "p",\n      align: "center",\n      size: "s",\n      weight: "bold"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n      i18n_default_text: "Confirm to change your {{platform}} password",\n      values: {\n        platform: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.getCFDPlatformLabel)(platform)\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      className: "cfd-change-password-confirmation__description",\n      as: "p",\n      align: "center",\n      color: "loss-danger",\n      size: "xs"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n      i18n_default_text: "This will change the password to all of your {{platform}} accounts.",\n      values: {\n        platform: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.getCFDPlatformLabel)(platform)\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.FormSubmitButton, {\n      is_center: true,\n      label: confirm_label || (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Create\'),\n      cancel_label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Cancel\'),\n      is_loading: isSubmitting,\n      has_cancel: true,\n      onCancel: onCancel,\n      context: context\n    }))));\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordConfirmation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jZmQtY2hhbmdlLXBhc3N3b3JkLWNvbmZpcm1hdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2ZkLy4vc3JjL0NvbnRhaW5lcnMvY2ZkLWNoYW5nZS1wYXNzd29yZC1jb25maXJtYXRpb24udHN4PzNlYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IFRleHQsIEljb24sIEZvcm1TdWJtaXRCdXR0b24gfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSwgTG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IENGRF9QTEFURk9STVMsIGdldENGRFBsYXRmb3JtTGFiZWwgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCB7IFRDRkRDaGFuZ2VQYXNzd29yZENvbmZpcm1hdGlvblByb3BzIH0gZnJvbSAnLi9wcm9wcy50eXBlcyc7XG5cbmNvbnN0IENoYW5nZVBhc3N3b3JkQ29uZmlybWF0aW9uID0gKHtcbiAgICBjb25maXJtX2xhYmVsLFxuICAgIGNsYXNzTmFtZSxcbiAgICBwbGF0Zm9ybSxcbiAgICBvbkNvbmZpcm0sXG4gICAgb25DYW5jZWwsXG4gICAgY29udGV4dCxcbn06IFRDRkRDaGFuZ2VQYXNzd29yZENvbmZpcm1hdGlvblByb3BzKSA9PiAoXG4gICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIH19XG4gICAgICAgIG9uU3VibWl0PXtvbkNvbmZpcm19XG4gICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nLCBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gZGF0YS10ZXN0aWQ9J2R0X2NmZF9jaGFuZ2VfcGFzc3dvcmRfZm9ybSc+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2NmZC1jaGFuZ2UtcGFzc3dvcmQtY29uZmlybWF0aW9uX193cmFwcGVyJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX0td3JhcHBlcmBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2NmZC1jaGFuZ2UtcGFzc3dvcmQtY29uZmlybWF0aW9uJywgY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2ZkLWNoYW5nZS1wYXNzd29yZF9faWNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtwbGF0Zm9ybSA9PT0gQ0ZEX1BMQVRGT1JNUy5NVDUgPyAnSWNNdDVPbmVQYXNzd29yZCcgOiAnSWNEeHRyYWRlT25lUGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMjInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDgnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIGFsaWduPSdjZW50ZXInIHNpemU9J3MnIHdlaWdodD0nYm9sZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdDb25maXJtIHRvIGNoYW5nZSB5b3VyIHt7cGxhdGZvcm19fSBwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybTogZ2V0Q0ZEUGxhdGZvcm1MYWJlbChwbGF0Zm9ybSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjZmQtY2hhbmdlLXBhc3N3b3JkLWNvbmZpcm1hdGlvbl9fZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0nbG9zcy1kYW5nZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0neHMnXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdUaGlzIHdpbGwgY2hhbmdlIHRoZSBwYXNzd29yZCB0byBhbGwgb2YgeW91ciB7e3BsYXRmb3JtfX0gYWNjb3VudHMuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtOiBnZXRDRkRQbGF0Zm9ybUxhYmVsKHBsYXRmb3JtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TdWJtaXRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19jZW50ZXI9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2NvbmZpcm1fbGFiZWwgfHwgbG9jYWxpemUoJ0NyZWF0ZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbF9sYWJlbD17bG9jYWxpemUoJ0NhbmNlbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2xvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNfY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0PXtjb250ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgPC9Gb3JtaWs+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VQYXNzd29yZENvbmZpcm1hdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/cfd-change-password-confirmation.tsx\n'
                );

                /***/
            },
    },
]);