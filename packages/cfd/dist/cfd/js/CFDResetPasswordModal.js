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
            require('@deriv/components'),
            require('@deriv/shared'),
            require('@deriv/stores'),
            require('@deriv/translations'),
            require('formik'),
            require('react')
        );
    else if (typeof define === 'function' && define.amd)
        define([
            '@deriv/components',
            '@deriv/shared',
            '@deriv/stores',
            '@deriv/translations',
            'formik',
            'react',
        ], factory);
    else if (typeof exports === 'object')
        exports['@deriv/cfd'] = factory(
            require('@deriv/components'),
            require('@deriv/shared'),
            require('@deriv/stores'),
            require('@deriv/translations'),
            require('formik'),
            require('react')
        );
    else
        root['@deriv/cfd'] = factory(
            root['@deriv/components'],
            root['@deriv/shared'],
            root['@deriv/stores'],
            root['@deriv/translations'],
            root['formik'],
            root['react']
        );
})(
    self,
    (
        __WEBPACK_EXTERNAL_MODULE__deriv_components__,
        __WEBPACK_EXTERNAL_MODULE__deriv_shared__,
        __WEBPACK_EXTERNAL_MODULE__deriv_stores__,
        __WEBPACK_EXTERNAL_MODULE__deriv_translations__,
        __WEBPACK_EXTERNAL_MODULE_formik__,
        __WEBPACK_EXTERNAL_MODULE_react__
    ) => {
        return /******/ (() => {
            // webpackBootstrap
            /******/ 'use strict';
            /******/ var __webpack_modules__ = {
                /***/ './src/Containers/cfd-reset-password-modal.tsx':
                    /*!*****************************************************!*\
  !*** ./src/Containers/cfd-reset-password-modal.tsx ***!
  \*****************************************************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        eval(
                            '/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "formik");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ "@deriv/translations");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Stores_Modules_CFD_Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Stores/Modules/CFD/Helpers/cfd-config */ "./src/Stores/Modules/CFD/Helpers/cfd-config.ts");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deriv/stores */ "@deriv/stores");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Stores/Modules/CFD/Helpers/useCfdStores */ "./src/Stores/Modules/CFD/Helpers/useCfdStores.tsx");\n/* harmony import */ var _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Helpers/cfd-config */ "./src/Helpers/cfd-config.ts");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _excluded = ["current_list", "children", "is_eu"];\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }\nfunction _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }\nfunction _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }\n\n\n\n\n\n\n\n\n\nvar ResetPasswordIntent = function ResetPasswordIntent(_ref) {\n  var current_list = _ref.current_list,\n    children = _ref.children,\n    is_eu = _ref.is_eu,\n    props = _objectWithoutProperties(_ref, _excluded);\n  var reset_password_intent = localStorage.getItem(\'cfd_reset_password_intent\');\n  var reset_password_type = localStorage.getItem(\'cfd_reset_password_type\') || \'main\'; // Default to main\n  var has_intent = reset_password_intent && /(real|demo)\\.(financial|financial_demo|financial_stp|financial_svg|financial_bvi|financial_fx|financial_v|synthetic|synthetic_svg|synthetic_bvi|synthetic_v|all_swap_free_svg|all_zero_spread_bvi|dxtrade|all)/.test(reset_password_intent);\n  var group, type, login, title, server;\n  if (has_intent && current_list) {\n    var _getMtCompanies$title, _getMtCompanies;\n    var _reset_password_inten = reset_password_intent.split(\'.\');\n    var _reset_password_inten2 = _slicedToArray(_reset_password_inten, 3);\n    server = _reset_password_inten2[0];\n    group = _reset_password_inten2[1];\n    type = _reset_password_inten2[2];\n    login = current_list["mt5.".concat(group, ".").concat(type, "@").concat(server)].login;\n    title = (_getMtCompanies$title = (_getMtCompanies = (0,_Stores_Modules_CFD_Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_5__.getMtCompanies)(is_eu)[group][type]) === null || _getMtCompanies === void 0 ? void 0 : _getMtCompanies.title) !== null && _getMtCompanies$title !== void 0 ? _getMtCompanies$title : \'\';\n  } else if (current_list) {\n    var _current_list$login, _current_list, _getMtCompanies$title2, _getMtCompanies2, _getMtCompanies3, _getMtCompanies4;\n    var _split = Object.keys(current_list).pop().split(\'.\');\n    var _split2 = _slicedToArray(_split, 3);\n    server = _split2[0];\n    group = _split2[1];\n    type = _split2[2];\n    login = (_current_list$login = (_current_list = current_list["mt5.".concat(group, ".").concat(type, "@").concat(server)]) === null || _current_list === void 0 ? void 0 : _current_list.login) !== null && _current_list$login !== void 0 ? _current_list$login : \'\';\n    title = (_getMtCompanies$title2 = (_getMtCompanies2 = (0,_Stores_Modules_CFD_Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_5__.getMtCompanies)(is_eu)) === null || _getMtCompanies2 === void 0 ? void 0 : (_getMtCompanies3 = _getMtCompanies2[group]) === null || _getMtCompanies3 === void 0 ? void 0 : (_getMtCompanies4 = _getMtCompanies3[type]) === null || _getMtCompanies4 === void 0 ? void 0 : _getMtCompanies4.title) !== null && _getMtCompanies$title2 !== void 0 ? _getMtCompanies$title2 : \'\';\n  } else {\n    // Set a default intent\n    login = \'\';\n    title = \'\';\n  }\n  return children(_objectSpread({\n    login: login,\n    title: title,\n    type: reset_password_type\n  }, props));\n};\nvar CFDResetPasswordModal = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_6__.observer)(function (_ref2) {\n  var platform = _ref2.platform;\n  var _useStore = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_6__.useStore)(),\n    client = _useStore.client,\n    ui = _useStore.ui;\n  var email = client.email,\n    is_eu = client.is_eu,\n    is_logged_in = client.is_logged_in;\n  var is_cfd_reset_password_modal_enabled = ui.is_cfd_reset_password_modal_enabled,\n    setCFDPasswordResetModal = ui.setCFDPasswordResetModal;\n  var _useCfdStore = (0,_Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_7__.useCfdStore)(),\n    current_list = _useCfdStore.current_list;\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    if (!/reset-password/.test(location.hash)) {\n      return;\n    }\n    setCFDPasswordResetModal(true);\n  }, [setCFDPasswordResetModal]);\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n      error_code: undefined,\n      has_error: false,\n      error_message: undefined,\n      is_finished: false,\n      changed_password_type: \'\'\n    }),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    state = _React$useState2[0],\n    setState = _React$useState2[1];\n  var renderErrorBox = function renderErrorBox(error) {\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      error_code: error.code,\n      has_error: true,\n      error_message: error.message\n    }));\n  };\n  var clearAddressBar = function clearAddressBar() {\n    localStorage.removeItem(\'cfd_reset_password_intent\');\n    localStorage.removeItem(\'cfd_reset_password_type\');\n    localStorage.removeItem(\'cfd_reset_password_code\');\n  };\n  var validatePassword = function validatePassword(values) {\n    var errors = {};\n    var max_length = platform === _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_8__.CFD_PLATFORMS.DXTRADE ? 25 : 16;\n    if (!(0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.validLength)(values.new_password, {\n      min: 8,\n      max: max_length\n    })) {\n      errors.new_password = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'You should enter {{min_number}}-{{max_number}} characters.\', {\n        min_number: 8,\n        max_number: max_length\n      });\n    } else if (!(0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.validPassword)(values.new_password)) {\n      errors.new_password = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.getErrorMessages)().password();\n    } else if (platform !== _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_8__.CFD_PLATFORMS.DXTRADE && !(0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.validMT5Password)(values.new_password)) {\n      errors.new_password = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Please include at least 1 special character such as ( _ @ ? ! / # ) in your password.\');\n    }\n    if (values.new_password.toLowerCase() === email.toLowerCase()) {\n      errors.new_password = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Your password cannot be the same as your email address.\');\n    }\n    return errors;\n  };\n  var resetPassword = function resetPassword(values, password_type, login, actions) {\n    var setSubmitting = actions.setSubmitting;\n    setSubmitting(true);\n    var request = {\n      account_id: login,\n      platform: _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_8__.CFD_PLATFORMS.MT5,\n      new_password: values.new_password,\n      verification_code: localStorage.getItem(\'cfd_reset_password_code\')\n    };\n    _deriv_shared__WEBPACK_IMPORTED_MODULE_3__.WS.tradingPlatformInvestorPasswordReset(request).then(function (response) {\n      var _response$error;\n      if (response !== null && response !== void 0 && (_response$error = response.error) !== null && _response$error !== void 0 && _response$error.code) {\n        renderErrorBox(response.error);\n      } else {\n        setState(_objectSpread(_objectSpread({}, state), {}, {\n          is_finished: true,\n          changed_password_type: password_type\n        }));\n        clearAddressBar();\n      }\n      setSubmitting(false);\n    });\n  };\n  var getIsListFetched = function getIsListFetched() {\n    return Object.keys(current_list).length !== 0;\n  };\n  var is_invalid_investor_token = !getIsListFetched() && localStorage.getItem(\'cfd_reset_password_code\');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n    className: "cfd-reset-password-modal",\n    is_open: is_cfd_reset_password_modal_enabled && !is_invalid_investor_token,\n    toggleModal: function toggleModal() {\n      return setCFDPasswordResetModal(false);\n    },\n    title: platform === _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_8__.CFD_PLATFORMS.DXTRADE ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Reset Deriv X investor password\') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Reset Deriv MT5 investor password\'),\n    onMount: function onMount() {\n      return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.redirectToLogin)(is_logged_in, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.getLanguage)(), true);\n    },\n    should_header_stick_body: false\n  }, !getIsListFetched() && !state.has_error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, {\n    is_fullscreen: false\n  }), getIsListFetched() && !state.has_error && !state.is_finished && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ResetPasswordIntent, {\n    current_list: current_list,\n    is_eu: is_eu\n  }, function (_ref3) {\n    var type = _ref3.type,\n      login = _ref3.login;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {\n      initialValues: {\n        new_password: \'\'\n      },\n      validate: validatePassword,\n      onSubmit: function onSubmit(values, actions) {\n        return resetPassword(values, type, login, actions);\n      }\n    }, function (_ref4) {\n      var handleSubmit = _ref4.handleSubmit,\n        errors = _ref4.errors,\n        values = _ref4.values,\n        isSubmitting = _ref4.isSubmitting,\n        handleChange = _ref4.handleChange,\n        handleBlur = _ref4.handleBlur,\n        touched = _ref4.touched;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", {\n        autoComplete: "off",\n        onSubmit: handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n        className: "cfd-reset-password"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n        className: "cfd-reset-password__container"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n        className: "cfd-reset-password__password-area"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.PasswordMeter, {\n        input: values.new_password,\n        has_error: !!(touched.new_password && errors.new_password),\n        custom_feedback_messages: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_3__.getErrorMessages)().password_warnings\n      }, function (_ref5) {\n        var has_warning = _ref5.has_warning;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.PasswordInput, {\n          autoComplete: "new-password",\n          className: "cfd-reset-password__password-field",\n          name: "new_password",\n          label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'New {{type}} password\', {\n            type: type\n          }),\n          onChange: handleChange,\n          onBlur: handleBlur,\n          error: touched.new_password && errors.new_password,\n          value: values.new_password,\n          "data-lpignore": "true",\n          required: true,\n          hint: !has_warning && (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols.\')\n        });\n      })), platform !== _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_8__.CFD_PLATFORMS.DXTRADE && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n        className: "cfd-reset-password__password-area"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n        as: "p",\n        size: "xs",\n        align: "center",\n        className: "cfd-reset-password__description2"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n        i18n_default_text: "Your password must contain between 8-16 characters that include uppercase and lowercase letters, and at least one number and special character ( _ @ ? ! / # )."\n      }))), isSubmitting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, {\n        is_fullscreen: false\n      }), !isSubmitting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.FormSubmitButton, {\n        is_disabled: isSubmitting || !values.new_password || Object.keys(errors).length > 0,\n        errors: errors,\n        is_center: true,\n        large: true,\n        label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'Create {{type}} password\', {\n          type: type\n        })\n      }))));\n    });\n  }), state.has_error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n    className: "cfd-reset-password__error"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    icon: "IcMt5Expired",\n    size: 128\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    as: "p",\n    size: "xs",\n    weight: "bold",\n    align: "center",\n    className: "cfd-reset-password__heading"\n  }, state.error_message), state.error_code === \'InvalidToken\' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    as: "p",\n    color: "prominent",\n    size: "xs",\n    align: "center",\n    className: "cfd-reset-password__description--is-centered"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Please request a new password and check your email for the new token."\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    primary: true,\n    large: true,\n    className: "cfd-reset-password__confirm-button",\n    onClick: function onClick() {\n      clearAddressBar();\n      setCFDPasswordResetModal(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Ok"\n  }))), state.is_finished && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n    className: "cfd-reset-password__success"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    icon: "IcMt5PasswordUpdated",\n    size: 128\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {\n    className: "cfd-reset-password__description"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    as: "p",\n    size: "xs",\n    align: "center",\n    weight: "bold",\n    line_height: "xxl"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Password saved"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Your {{account_type}} password has been changed.",\n    values: {\n      account_type: state.changed_password_type === \'main\' ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'main\') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)(\'investor\')\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    primary: true,\n    large: true,\n    onClick: function onClick() {\n      return setCFDPasswordResetModal(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.Localize, {\n    i18n_default_text: "Ok"\n  }))));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CFDResetPasswordModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jZmQtcmVzZXQtcGFzc3dvcmQtbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWkE7QUFBQTtBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2ZkLy4vc3JjL0NvbnRhaW5lcnMvY2ZkLXJlc2V0LXBhc3N3b3JkLW1vZGFsLnRzeD80N2Y1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1paywgRm9ybWlrSGVscGVycyB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBQYXNzd29yZE1ldGVyLCBQYXNzd29yZElucHV0LCBGb3JtU3VibWl0QnV0dG9uLCBMb2FkaW5nLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IHZhbGlkTGVuZ3RoLCB2YWxpZFBhc3N3b3JkLCB2YWxpZE1UNVBhc3N3b3JkLCBnZXRFcnJvck1lc3NhZ2VzLCBXUywgcmVkaXJlY3RUb0xvZ2luIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBsb2NhbGl6ZSwgTG9jYWxpemUsIGdldExhbmd1YWdlIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBnZXRNdENvbXBhbmllcywgVE10Q29tcGFuaWVzIH0gZnJvbSAnLi4vU3RvcmVzL01vZHVsZXMvQ0ZEL0hlbHBlcnMvY2ZkLWNvbmZpZyc7XG5pbXBvcnQgeyBUUmVzZXRQYXNzd29yZEludGVudCwgVENGRFJlc2V0UGFzc3dvcmRNb2RhbCwgVEVycm9yIH0gZnJvbSAnLi9wcm9wcy50eXBlcyc7XG5pbXBvcnQgeyBvYnNlcnZlciwgdXNlU3RvcmUgfSBmcm9tICdAZGVyaXYvc3RvcmVzJztcbmltcG9ydCB7IHVzZUNmZFN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL01vZHVsZXMvQ0ZEL0hlbHBlcnMvdXNlQ2ZkU3RvcmVzJztcbmltcG9ydCB7IENGRF9QTEFURk9STVMgfSBmcm9tICcuLi9IZWxwZXJzL2NmZC1jb25maWcnO1xuXG5jb25zdCBSZXNldFBhc3N3b3JkSW50ZW50ID0gKHsgY3VycmVudF9saXN0LCBjaGlsZHJlbiwgaXNfZXUsIC4uLnByb3BzIH06IFRSZXNldFBhc3N3b3JkSW50ZW50KSA9PiB7XG4gICAgY29uc3QgcmVzZXRfcGFzc3dvcmRfaW50ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NmZF9yZXNldF9wYXNzd29yZF9pbnRlbnQnKTtcbiAgICBjb25zdCByZXNldF9wYXNzd29yZF90eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NmZF9yZXNldF9wYXNzd29yZF90eXBlJykgfHwgJ21haW4nOyAvLyBEZWZhdWx0IHRvIG1haW5cbiAgICBjb25zdCBoYXNfaW50ZW50ID1cbiAgICAgICAgcmVzZXRfcGFzc3dvcmRfaW50ZW50ICYmXG4gICAgICAgIC8ocmVhbHxkZW1vKVxcLihmaW5hbmNpYWx8ZmluYW5jaWFsX2RlbW98ZmluYW5jaWFsX3N0cHxmaW5hbmNpYWxfc3ZnfGZpbmFuY2lhbF9idml8ZmluYW5jaWFsX2Z4fGZpbmFuY2lhbF92fHN5bnRoZXRpY3xzeW50aGV0aWNfc3ZnfHN5bnRoZXRpY19idml8c3ludGhldGljX3Z8YWxsX3N3YXBfZnJlZV9zdmd8YWxsX3plcm9fc3ByZWFkX2J2aXxkeHRyYWRlfGFsbCkvLnRlc3QoXG4gICAgICAgICAgICByZXNldF9wYXNzd29yZF9pbnRlbnRcbiAgICAgICAgKTtcblxuICAgIGxldCBncm91cCwgdHlwZSwgbG9naW4sIHRpdGxlLCBzZXJ2ZXI7XG4gICAgaWYgKGhhc19pbnRlbnQgJiYgY3VycmVudF9saXN0KSB7XG4gICAgICAgIFtzZXJ2ZXIsIGdyb3VwLCB0eXBlXSA9IHJlc2V0X3Bhc3N3b3JkX2ludGVudC5zcGxpdCgnLicpO1xuICAgICAgICBsb2dpbiA9IGN1cnJlbnRfbGlzdFtgbXQ1LiR7Z3JvdXB9LiR7dHlwZX1AJHtzZXJ2ZXJ9YF0ubG9naW47XG4gICAgICAgIHRpdGxlID1cbiAgICAgICAgICAgIGdldE10Q29tcGFuaWVzKGlzX2V1KVtncm91cCBhcyBrZXlvZiBUTXRDb21wYW5pZXNdW3R5cGUgYXMga2V5b2YgVE10Q29tcGFuaWVzWydkZW1vJyB8ICdyZWFsJ11dPy50aXRsZSA/P1xuICAgICAgICAgICAgJyc7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50X2xpc3QpIHtcbiAgICAgICAgW3NlcnZlciwgZ3JvdXAsIHR5cGVdID0gKE9iamVjdC5rZXlzKGN1cnJlbnRfbGlzdCkucG9wKCkgYXMgc3RyaW5nKS5zcGxpdCgnLicpO1xuICAgICAgICBsb2dpbiA9IGN1cnJlbnRfbGlzdFtgbXQ1LiR7Z3JvdXB9LiR7dHlwZX1AJHtzZXJ2ZXJ9YF0/LmxvZ2luID8/ICcnO1xuICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICBnZXRNdENvbXBhbmllcyhpc19ldSk/Lltncm91cCBhcyBrZXlvZiBUTXRDb21wYW5pZXNdPy5bdHlwZSBhcyBrZXlvZiBUTXRDb21wYW5pZXNbJ2RlbW8nIHwgJ3JlYWwnXV1cbiAgICAgICAgICAgICAgICA/LnRpdGxlID8/ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCBhIGRlZmF1bHQgaW50ZW50XG4gICAgICAgIGxvZ2luID0gJyc7XG4gICAgICAgIHRpdGxlID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgICAgbG9naW4sXG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0eXBlOiByZXNldF9wYXNzd29yZF90eXBlLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICB9KTtcbn07XG5cbmNvbnN0IENGRFJlc2V0UGFzc3dvcmRNb2RhbCA9IG9ic2VydmVyKCh7IHBsYXRmb3JtIH06IFRDRkRSZXNldFBhc3N3b3JkTW9kYWwpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudCwgdWkgfSA9IHVzZVN0b3JlKCk7XG5cbiAgICBjb25zdCB7IGVtYWlsLCBpc19ldSwgaXNfbG9nZ2VkX2luIH0gPSBjbGllbnQ7XG4gICAgY29uc3QgeyBpc19jZmRfcmVzZXRfcGFzc3dvcmRfbW9kYWxfZW5hYmxlZCwgc2V0Q0ZEUGFzc3dvcmRSZXNldE1vZGFsIH0gPSB1aTtcblxuICAgIGNvbnN0IHsgY3VycmVudF9saXN0IH0gPSB1c2VDZmRTdG9yZSgpO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCEvcmVzZXQtcGFzc3dvcmQvLnRlc3QobG9jYXRpb24uaGFzaCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRDRkRQYXNzd29yZFJlc2V0TW9kYWwodHJ1ZSk7XG4gICAgfSwgW3NldENGRFBhc3N3b3JkUmVzZXRNb2RhbF0pO1xuXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7XG4gICAgICAgIGVycm9yX2NvZGU6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgICAgaGFzX2Vycm9yOiBib29sZWFuO1xuICAgICAgICBlcnJvcl9tZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlzX2ZpbmlzaGVkOiBib29sZWFuO1xuICAgICAgICBjaGFuZ2VkX3Bhc3N3b3JkX3R5cGU6IHN0cmluZztcbiAgICB9Pih7XG4gICAgICAgIGVycm9yX2NvZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgaGFzX2Vycm9yOiBmYWxzZSxcbiAgICAgICAgZXJyb3JfbWVzc2FnZTogdW5kZWZpbmVkLFxuICAgICAgICBpc19maW5pc2hlZDogZmFsc2UsXG4gICAgICAgIGNoYW5nZWRfcGFzc3dvcmRfdHlwZTogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJFcnJvckJveCA9IChlcnJvcjogVEVycm9yKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZXJyb3JfY29kZTogZXJyb3IuY29kZSxcbiAgICAgICAgICAgIGhhc19lcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yX21lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2xlYXJBZGRyZXNzQmFyID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2ZkX3Jlc2V0X3Bhc3N3b3JkX2ludGVudCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2ZkX3Jlc2V0X3Bhc3N3b3JkX3R5cGUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NmZF9yZXNldF9wYXNzd29yZF9jb2RlJyk7XG4gICAgfTtcbiAgICBjb25zdCB2YWxpZGF0ZVBhc3N3b3JkID0gKHZhbHVlczogeyBuZXdfcGFzc3dvcmQ6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yczogeyBuZXdfcGFzc3dvcmQ/OiBzdHJpbmcgfSA9IHt9O1xuICAgICAgICBjb25zdCBtYXhfbGVuZ3RoID0gcGxhdGZvcm0gPT09IENGRF9QTEFURk9STVMuRFhUUkFERSA/IDI1IDogMTY7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXZhbGlkTGVuZ3RoKHZhbHVlcy5uZXdfcGFzc3dvcmQsIHtcbiAgICAgICAgICAgICAgICBtaW46IDgsXG4gICAgICAgICAgICAgICAgbWF4OiBtYXhfbGVuZ3RoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMubmV3X3Bhc3N3b3JkID0gbG9jYWxpemUoJ1lvdSBzaG91bGQgZW50ZXIge3ttaW5fbnVtYmVyfX0te3ttYXhfbnVtYmVyfX0gY2hhcmFjdGVycy4nLCB7XG4gICAgICAgICAgICAgICAgbWluX251bWJlcjogOCxcbiAgICAgICAgICAgICAgICBtYXhfbnVtYmVyOiBtYXhfbGVuZ3RoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbGlkUGFzc3dvcmQodmFsdWVzLm5ld19wYXNzd29yZCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5uZXdfcGFzc3dvcmQgPSBnZXRFcnJvck1lc3NhZ2VzKCkucGFzc3dvcmQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF0Zm9ybSAhPT0gQ0ZEX1BMQVRGT1JNUy5EWFRSQURFICYmICF2YWxpZE1UNVBhc3N3b3JkKHZhbHVlcy5uZXdfcGFzc3dvcmQpKSB7XG4gICAgICAgICAgICBlcnJvcnMubmV3X3Bhc3N3b3JkID0gbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgJ1BsZWFzZSBpbmNsdWRlIGF0IGxlYXN0IDEgc3BlY2lhbCBjaGFyYWN0ZXIgc3VjaCBhcyAoIF8gQCA/ICEgLyAjICkgaW4geW91ciBwYXNzd29yZC4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZXMubmV3X3Bhc3N3b3JkLnRvTG93ZXJDYXNlKCkgPT09IGVtYWlsLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGVycm9ycy5uZXdfcGFzc3dvcmQgPSBsb2NhbGl6ZSgnWW91ciBwYXNzd29yZCBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgeW91ciBlbWFpbCBhZGRyZXNzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRQYXNzd29yZCA9IChcbiAgICAgICAgdmFsdWVzOiB7IG5ld19wYXNzd29yZDogc3RyaW5nIH0sXG4gICAgICAgIHBhc3N3b3JkX3R5cGU6IHN0cmluZyxcbiAgICAgICAgbG9naW46IHN0cmluZyxcbiAgICAgICAgYWN0aW9uczogRm9ybWlrSGVscGVyczx7IG5ld19wYXNzd29yZDogc3RyaW5nIH0+XG4gICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc2V0U3VibWl0dGluZyB9ID0gYWN0aW9ucztcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIGFjY291bnRfaWQ6IGxvZ2luLFxuICAgICAgICAgICAgcGxhdGZvcm06IENGRF9QTEFURk9STVMuTVQ1LFxuICAgICAgICAgICAgbmV3X3Bhc3N3b3JkOiB2YWx1ZXMubmV3X3Bhc3N3b3JkLFxuICAgICAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjZmRfcmVzZXRfcGFzc3dvcmRfY29kZScpLFxuICAgICAgICB9O1xuXG4gICAgICAgIFdTLnRyYWRpbmdQbGF0Zm9ybUludmVzdG9yUGFzc3dvcmRSZXNldChyZXF1ZXN0KS50aGVuKChyZXNwb25zZTogeyBlcnJvcjogVEVycm9yOyBwYXNzd29yZF90eXBlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5lcnJvcj8uY29kZSkge1xuICAgICAgICAgICAgICAgIHJlbmRlckVycm9yQm94KHJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNfZmluaXNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWRfcGFzc3dvcmRfdHlwZTogcGFzc3dvcmRfdHlwZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjbGVhckFkZHJlc3NCYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGdldElzTGlzdEZldGNoZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjdXJyZW50X2xpc3QpLmxlbmd0aCAhPT0gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgaXNfaW52YWxpZF9pbnZlc3Rvcl90b2tlbiA9ICFnZXRJc0xpc3RGZXRjaGVkKCkgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NmZF9yZXNldF9wYXNzd29yZF9jb2RlJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2ZkLXJlc2V0LXBhc3N3b3JkLW1vZGFsJ1xuICAgICAgICAgICAgaXNfb3Blbj17aXNfY2ZkX3Jlc2V0X3Bhc3N3b3JkX21vZGFsX2VuYWJsZWQgJiYgIWlzX2ludmFsaWRfaW52ZXN0b3JfdG9rZW59XG4gICAgICAgICAgICB0b2dnbGVNb2RhbD17KCkgPT4gc2V0Q0ZEUGFzc3dvcmRSZXNldE1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybSA9PT0gQ0ZEX1BMQVRGT1JNUy5EWFRSQURFXG4gICAgICAgICAgICAgICAgICAgID8gbG9jYWxpemUoJ1Jlc2V0IERlcml2IFggaW52ZXN0b3IgcGFzc3dvcmQnKVxuICAgICAgICAgICAgICAgICAgICA6IGxvY2FsaXplKCdSZXNldCBEZXJpdiBNVDUgaW52ZXN0b3IgcGFzc3dvcmQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25Nb3VudD17KCkgPT4gcmVkaXJlY3RUb0xvZ2luKGlzX2xvZ2dlZF9pbiwgZ2V0TGFuZ3VhZ2UoKSwgdHJ1ZSl9XG4gICAgICAgICAgICBzaG91bGRfaGVhZGVyX3N0aWNrX2JvZHk9e2ZhbHNlfVxuICAgICAgICA+XG4gICAgICAgICAgICB7IWdldElzTGlzdEZldGNoZWQoKSAmJiAhc3RhdGUuaGFzX2Vycm9yICYmIDxMb2FkaW5nIGlzX2Z1bGxzY3JlZW49e2ZhbHNlfSAvPn1cbiAgICAgICAgICAgIHtnZXRJc0xpc3RGZXRjaGVkKCkgJiYgIXN0YXRlLmhhc19lcnJvciAmJiAhc3RhdGUuaXNfZmluaXNoZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxSZXNldFBhc3N3b3JkSW50ZW50IGN1cnJlbnRfbGlzdD17Y3VycmVudF9saXN0fSBpc19ldT17aXNfZXV9PlxuICAgICAgICAgICAgICAgICAgICB7KHsgdHlwZSwgbG9naW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmV3X3Bhc3N3b3JkOiAnJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBhY3Rpb25zKSA9PiByZXNldFBhc3N3b3JkKHZhbHVlcywgdHlwZSwgbG9naW4sIGFjdGlvbnMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBoYW5kbGVTdWJtaXQsIGVycm9ycywgdmFsdWVzLCBpc1N1Ym1pdHRpbmcsIGhhbmRsZUNoYW5nZSwgaGFuZGxlQmx1ciwgdG91Y2hlZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGF1dG9Db21wbGV0ZT0nb2ZmJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmRfX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmRfX3Bhc3N3b3JkLWFyZWEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkTWV0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17dmFsdWVzLm5ld19wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNfZXJyb3I9eyEhKHRvdWNoZWQubmV3X3Bhc3N3b3JkICYmIGVycm9ycy5uZXdfcGFzc3dvcmQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbV9mZWVkYmFja19tZXNzYWdlcz17Z2V0RXJyb3JNZXNzYWdlcygpLnBhc3N3b3JkX3dhcm5pbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBoYXNfd2FybmluZyB9OiB7IGhhc193YXJuaW5nOiBib29sZWFuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nbmV3LXBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmRfX3Bhc3N3b3JkLWZpZWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3X3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xvY2FsaXplKCdOZXcge3t0eXBlfX0gcGFzc3dvcmQnLCB7IHR5cGUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RvdWNoZWQubmV3X3Bhc3N3b3JkICYmIGVycm9ycy5uZXdfcGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5ld19wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbHBpZ25vcmU9J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhc193YXJuaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdHJvbmcgcGFzc3dvcmRzIGNvbnRhaW4gYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLCBjb21iaW5lIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGFuZCBzeW1ib2xzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRNZXRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwbGF0Zm9ybSAhPT0gQ0ZEX1BMQVRGT1JNUy5EWFRSQURFICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmRfX3Bhc3N3b3JkLWFyZWEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSd4cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmRfX2Rlc2NyaXB0aW9uMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nWW91ciBwYXNzd29yZCBtdXN0IGNvbnRhaW4gYmV0d2VlbiA4LTE2IGNoYXJhY3RlcnMgdGhhdCBpbmNsdWRlIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIGFuZCBhdCBsZWFzdCBvbmUgbnVtYmVyIGFuZCBzcGVjaWFsIGNoYXJhY3RlciAoIF8gQCA/ICEgLyAjICkuJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nICYmIDxMb2FkaW5nIGlzX2Z1bGxzY3JlZW49e2ZhbHNlfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1N1Ym1pdHRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TdWJtaXRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsdWVzLm5ld19wYXNzd29yZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfY2VudGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xvY2FsaXplKCdDcmVhdGUge3t0eXBlfX0gcGFzc3dvcmQnLCB7IHR5cGUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9SZXNldFBhc3N3b3JkSW50ZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdGF0ZS5oYXNfZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmRfX2Vycm9yJz5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNNdDVFeHBpcmVkJyBzaXplPXsxMjh9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdwJyBzaXplPSd4cycgd2VpZ2h0PSdib2xkJyBhbGlnbj0nY2VudGVyJyBjbGFzc05hbWU9J2NmZC1yZXNldC1wYXNzd29yZF9faGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZXJyb3JfbWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZXJyb3JfY29kZSA9PT0gJ0ludmFsaWRUb2tlbicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz0ncCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJvbWluZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3hzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjZmQtcmVzZXQtcGFzc3dvcmRfX2Rlc2NyaXB0aW9uLS1pcy1jZW50ZXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J1BsZWFzZSByZXF1ZXN0IGEgbmV3IHBhc3N3b3JkIGFuZCBjaGVjayB5b3VyIGVtYWlsIGZvciB0aGUgbmV3IHRva2VuLicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2ZkLXJlc2V0LXBhc3N3b3JkX19jb25maXJtLWJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckFkZHJlc3NCYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDRkRQYXNzd29yZFJlc2V0TW9kYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdPaycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0YXRlLmlzX2ZpbmlzaGVkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2ZkLXJlc2V0LXBhc3N3b3JkX19zdWNjZXNzJz5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNNdDVQYXNzd29yZFVwZGF0ZWQnIHNpemU9ezEyOH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NmZC1yZXNldC1wYXNzd29yZF9fZGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIHNpemU9J3hzJyBhbGlnbj0nY2VudGVyJyB3ZWlnaHQ9J2JvbGQnIGxpbmVfaGVpZ2h0PSd4eGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nUGFzc3dvcmQgc2F2ZWQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0nWW91ciB7e2FjY291bnRfdHlwZX19IHBhc3N3b3JkIGhhcyBiZWVuIGNoYW5nZWQuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50X3R5cGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jaGFuZ2VkX3Bhc3N3b3JkX3R5cGUgPT09ICdtYWluJyA/IGxvY2FsaXplKCdtYWluJykgOiBsb2NhbGl6ZSgnaW52ZXN0b3InKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsYXJnZSBvbkNsaWNrPXsoKSA9PiBzZXRDRkRQYXNzd29yZFJlc2V0TW9kYWwoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nT2snIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ0ZEUmVzZXRQYXNzd29yZE1vZGFsKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/cfd-reset-password-modal.tsx\n'
                        );

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

                /***/ '@deriv/stores':
                    /*!********************************!*\
  !*** external "@deriv/stores" ***!
  \********************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_stores__;

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

                /***/ formik:
                    /*!*************************!*\
  !*** external "formik" ***!
  \*************************/
                    /***/ module => {
                        module.exports = __WEBPACK_EXTERNAL_MODULE_formik__;

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
                    /******/ // no module.id needed
                    /******/ // no module.loaded needed
                    /******/ exports: {},
                    /******/
                });
                /******/
                /******/ // Execute the module function
                /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
            /******/ /* webpack/runtime/chunk loaded */
            /******/ (() => {
                /******/ var deferred = [];
                /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
                    /******/ if (chunkIds) {
                        /******/ priority = priority || 0;
                        /******/ for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
                            deferred[i] = deferred[i - 1];
                        /******/ deferred[i] = [chunkIds, fn, priority];
                        /******/ return;
                        /******/
                    }
                    /******/ var notFulfilled = Infinity;
                    /******/ for (var i = 0; i < deferred.length; i++) {
                        /******/ var [chunkIds, fn, priority] = deferred[i];
                        /******/ var fulfilled = true;
                        /******/ for (var j = 0; j < chunkIds.length; j++) {
                            /******/ if (
                                (priority & (1 === 0) || notFulfilled >= priority) &&
                                Object.keys(__webpack_require__.O).every(key => __webpack_require__.O[key](chunkIds[j]))
                            ) {
                                /******/ chunkIds.splice(j--, 1);
                                /******/
                            } else {
                                /******/ fulfilled = false;
                                /******/ if (priority < notFulfilled) notFulfilled = priority;
                                /******/
                            }
                            /******/
                        }
                        /******/ if (fulfilled) {
                            /******/ deferred.splice(i--, 1);
                            /******/ var r = fn();
                            /******/ if (r !== undefined) result = r;
                            /******/
                        }
                        /******/
                    }
                    /******/ return result;
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
                /******/ // The chunk loading function for additional chunks
                /******/ // Since all referenced chunks are already included
                /******/ // in this file, this function is empty here.
                /******/ __webpack_require__.e = () => Promise.resolve();
                /******/
            })();
            /******/
            /******/ /* webpack/runtime/hasOwnProperty shorthand */
            /******/ (() => {
                /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
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
                    /******/ CFDResetPasswordModal: 0,
                    /******/
                };
                /******/
                /******/ // no chunk on demand loading
                /******/
                /******/ // no prefetching
                /******/
                /******/ // no preloaded
                /******/
                /******/ // no HMR
                /******/
                /******/ // no HMR manifest
                /******/
                /******/ __webpack_require__.O.j = chunkId => installedChunks[chunkId] === 0;
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
                    /******/ return __webpack_require__.O(result);
                    /******/
                };
                /******/
                /******/ var chunkLoadingGlobal = (self['webpackChunk_deriv_cfd'] =
                    self['webpackChunk_deriv_cfd'] || []);
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
            /******/ // This entry module depends on other loaded chunks and execution need to be delayed
            /******/ var __webpack_exports__ = __webpack_require__.O(
                undefined,
                ['internalCFDStoreUsage', 'utilities'],
                () => __webpack_require__('./src/Containers/cfd-reset-password-modal.tsx')
            );
            /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
            /******/ __webpack_exports__ = __webpack_exports__['default'];
            /******/
            /******/ return __webpack_exports__;
            /******/
        })();
    }
);
