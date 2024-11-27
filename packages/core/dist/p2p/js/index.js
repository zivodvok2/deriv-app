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
            require('react-router-dom'),
            require('@deriv-com/analytics'),
            require('@deriv/hooks'),
            require('@deriv/stores'),
            require('@deriv/translations'),
            require('react-dom'),
            require('prop-types'),
            require('react-router'),
            require('formik'),
            require('@deriv/api'),
            require('lodash.debounce')
        );
    else if (typeof define === 'function' && define.amd)
        define([
            'react',
            '@deriv/shared',
            '@deriv/components',
            'react-router-dom',
            '@deriv-com/analytics',
            '@deriv/hooks',
            '@deriv/stores',
            '@deriv/translations',
            'react-dom',
            'prop-types',
            'react-router',
            'formik',
            '@deriv/api',
            'lodash.debounce',
        ], factory);
    else if (typeof exports === 'object')
        exports['@deriv/p2p'] = factory(
            require('react'),
            require('@deriv/shared'),
            require('@deriv/components'),
            require('react-router-dom'),
            require('@deriv-com/analytics'),
            require('@deriv/hooks'),
            require('@deriv/stores'),
            require('@deriv/translations'),
            require('react-dom'),
            require('prop-types'),
            require('react-router'),
            require('formik'),
            require('@deriv/api'),
            require('lodash.debounce')
        );
    else
        root['@deriv/p2p'] = factory(
            root['react'],
            root['@deriv/shared'],
            root['@deriv/components'],
            root['react-router-dom'],
            root['@deriv-com/analytics'],
            root['@deriv/hooks'],
            root['@deriv/stores'],
            root['@deriv/translations'],
            root['react-dom'],
            root['prop-types'],
            root['react-router'],
            root['formik'],
            root['@deriv/api'],
            root['lodash.debounce']
        );
})(
    self,
    (
        __WEBPACK_EXTERNAL_MODULE_react__,
        __WEBPACK_EXTERNAL_MODULE__deriv_shared__,
        __WEBPACK_EXTERNAL_MODULE__deriv_components__,
        __WEBPACK_EXTERNAL_MODULE_react_router_dom__,
        __WEBPACK_EXTERNAL_MODULE__deriv_com_analytics__,
        __WEBPACK_EXTERNAL_MODULE__deriv_hooks__,
        __WEBPACK_EXTERNAL_MODULE__deriv_stores__,
        __WEBPACK_EXTERNAL_MODULE__deriv_translations__,
        __WEBPACK_EXTERNAL_MODULE_react_dom__,
        __WEBPACK_EXTERNAL_MODULE_prop_types__,
        __WEBPACK_EXTERNAL_MODULE_react_router__,
        __WEBPACK_EXTERNAL_MODULE_formik__,
        __WEBPACK_EXTERNAL_MODULE__deriv_api__,
        __WEBPACK_EXTERNAL_MODULE_lodash_debounce__
    ) => {
        return /******/ (() => {
            // webpackBootstrap
            /******/ var __webpack_modules__ = {
                /***/ '../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[4]!./src/pages/index.scss':
                    /*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[4]!./src/pages/index.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
                    /***/ (module, __webpack_exports__, __webpack_require__) => {
                        'use strict';
                        eval(
                            "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*------------------------------------*\\n *  # Constants\\n *------------------------------------*/\\n/*RTL Language Mixin*/\\n/* stylelint-disable color-no-hex */\\n/* COLOR PALETTE */\\n/* colors */\\n/* status colors */\\n/* alpha colors */\\n/* gradient colors */\\n/* Preserve legacy variables */\\n/* Primary */\\n/* stylelint-enable color-no-hex */\\n/* Wallet gradient background */\\n/* App Cards gradient background */\\n/* Wallets */\\n/*------------------------------------*\\n *  # SASS Mixins and Functions\\n *------------------------------------*/\\n/*\\n * SASS interpolation\\n */\\n/*\\n * PX to EM\\n * @param $px - px value to be converted\\n * @param $base - base font size (in `em`)\\n * Note: 'em' values are calculate based on the element font-size\\n *       to properly converts 'px' to 'em', please pass in the element font-size with it\\n * Usage example:\\n    padding: em(16px, 1.6em); // font-size in 'em'\\n */\\n/*\\n * Set property by passing a property name, and values.\\n * @param $property name - padding, margin etc.\\n * @param $values        - values in `px` (space separated for multiple values)\\n * @param $font-size     - base font-size in `em`\\n * Usage example:\\n   @include toEm(padding, 8px 16px 8px, 1.6em);\\n */\\n/*\\n * Generate typefaces key-value pair of variable name and config\\n * Example:\\n   --paragraph-center-bold-black: (14px, center, bold, black)\\n */\\n/*\\n * Sets font-size, font-weight, color, text-transform, text-align and line-height\\n * Usage example:\\n   @include setTypeface(16px, bold, black, uppercase);\\n */\\n/*\\n * Set typefaces by passing a typeface variable name\\n * @param $var   - typeface variable\\n * @param $tt    - text-transform property\\n * @param $align - text-align property\\n * Usage example:\\n   @include typeface(--paragraph-bold-black, uppercase, center);\\n */\\n/*\\n * Range Slider Thumb styling is set here\\n */\\n/*\\n * SVG icons colors\\n */\\n/*\\n * Bar Spinner Animation\\n * @param $count    - number of bars\\n * @param $duration - duration of animation\\n * @param $phase    - each bar phase change delay\\n * Usage example:\\n   @include createBarspinnerAnimation(5, 1.2s, 0,1);\\n */\\n/*\\n * Tooltip colors\\n * @param $color - color property\\n * Usage example:\\n   @include tooltipColor($COLOR_RED);\\n */\\n/*\\n * Convert Tooltip colors\\n * @param $color - css color property\\n * Usage example:\\n   @include convertTooltipColor(var(--status-default));\\n */\\n/*\\n    Constants\\n*/\\n/*\\n    Variables\\n*/\\n/*\\n    List of all typefaces variables in the format: --$FONT_SIZES-$TEXT_ALIGN-$FONT_WEIGHTS-COLORS.\\n    See $FONT_SIZES, $TEXT_ALIGN, $FONT_WEIGHTS, $COLORS maps above for references.\\n    Variables name example: --title-center-semibold-red\\n */\\n/*\\n    to use styles without modifier class on .inline-icon\\n    use @extend\\n\\n    e.g. style icon on parent hover:\\n        a:hover .inline-icon {\\n            @extend %inline-icon-active;\\n        }\\n*/\\n/**\\n * Define Breakpoints here.\\n */\\n/** Need to add new breakpoints for mixins */\\n.p2p-app-loader {\\n  height: 80vh;\\n  width: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/pages/index.scss\"],\"names\":[],\"mappings\":\"AAAA;;uCAAA;AAIA,qBAAA;AAQA,mCAAA;AAEA,kBAAA;AAEA,WAAA;AAwEA,kBAAA;AAQA,iBAAA;AAuBA,oBAAA;AA+BA,8BAAA;AACA,YAAA;AAsDA,kCAAA;AAsBA,+BAAA;AAmBA,kCAAA;AAIA,YAAA;AASA;;uCAAA;AAIA;;EAAA;AAkCA;;;;;;;;EAAA;AAsBA;;;;;;;EAAA;AAYA;;;;EAAA;AAyBA;;;;EAAA;AAkCA;;;;;;;EAAA;AAqBA;;EAAA;AAkBA;;EAAA;AAgBA;;;;;;;EAAA;AAkBA;;;;;EAAA;AA4BA;;;;;EAAA;AA4BA;;CAAA;AAMA;;CAAA;AAoCA;;;;EAAA;AAOA;;;;;;;;CAAA;AAmCA;;EAAA;AA+DA,4CAAA;AA8CA;EACI,YAAA;EACA,WAAA;AA5lBJ\",\"sourcesContent\":[\"/*------------------------------------*\\n *  # Constants\\n *------------------------------------*/\\n\\n/*RTL Language Mixin*/\\n\\n@mixin rtl {\\n    [dir='rtl'] & {\\n        @content;\\n    }\\n}\\n\\n/* stylelint-disable color-no-hex */\\n\\n/* COLOR PALETTE */\\n\\n/* colors */\\n$color-black: #0e0e0e;\\n$color-black-1: #333333;\\n$color-black-3: #151717;\\n$color-black-4: #1d1f20;\\n$color-black-5: #242828;\\n$color-black-6: #3e3e3e;\\n$color-black-7: #000000;\\n$color-black-8: #323738;\\n$color-black-9: #5c5c5c;\\n$color-blue: #377cfc;\\n$color-blue-1: #0dc2e7;\\n$color-blue-2: #2a3052;\\n$color-blue-3: #0796e0;\\n$color-blue-4: #0677af;\\n$color-blue-5: #dfeaff;\\n$color-blue-6: #92b8ff;\\n$color-blue-7: #182130;\\n$color-blue-8: #e6f5ff;\\n$color-blue-9: #00426a;\\n$color-brown: #664407;\\n$color-green: #85acb0;\\n$color-green-1: #4bb4b3;\\n$color-green-2: #3d9494;\\n$color-green-3: #00a79e;\\n$color-green-4: #008079;\\n$color-green-5: #4bb4b329;\\n$color-green-6: #17eabd;\\n$color-green-7: #e8fdf8;\\n$color-green-8: #cedddf;\\n$color-grey: #c2c2c2;\\n$color-grey-1: #999999;\\n$color-grey-2: #f2f3f4;\\n$color-grey-3: #eaeced;\\n$color-grey-4: #e6e9e9;\\n$color-grey-5: #d6dadb;\\n$color-grey-6: #d6d6d6;\\n$color-grey-7: #6e6e6e;\\n$color-grey-8: #d7d7d7;\\n$color_grey-9: #868686;\\n$color-grey-10: #919191;\\n$color-grey-11: #fafafa;\\n$color-grey-12: #f5f7fa;\\n$color-grey-13: #2e2e2e;\\n$color-grey-14: #e2e5e7;\\n$color-grey-15: #f3f4f5;\\n$color-orange: #ff6444;\\n$color-orange-2: #ff9c13;\\n$color-purple: #722fe4;\\n$color-red: #ff444f;\\n$color-red-1: #ec3f3f;\\n$color-red-2: #cc2e3d;\\n$color-red-3: #a32430;\\n$color-red-4: #d33636;\\n$color-red-5: #eb3e48;\\n$color-red-6: #ec3f3f29;\\n$color-red-7: #ffe1e3;\\n$color-red-8: #661b20;\\n$color-red-9: #b33037;\\n$color-red-10: #ff444f;\\n$color-red-11: #fce3e3;\\n$color-red-12: #c40000;\\n$color-violet: #4a3871;\\n$color-white: #ffffff;\\n$color-yellow: #ffad3a;\\n$color-yellow-1: #b3760d;\\n$color-yellow-2: #ffa912;\\n$color-yellow-3: rgba(255, 173, 58, 0.16);\\n$color-yellow-4: #fff7e6;\\n$color-yellow-5: #6a4800;\\n$color-yellow-6: #ffeabf;\\n\\n/* status colors */\\n$color-status-warning: rgba(255, 173, 58, 0.16);\\n$color-status-information: rgba(55, 124, 252, 0.16);\\n$color-status-announcement: rgba(75, 180, 179, 0.16);\\n$color-status-error: rgba(236, 63, 63, 0.16);\\n$color-status-verified: rgba(0, 122, 34);\\n$color-status-danger: rgba(196, 0, 0);\\n\\n/* alpha colors */\\n$alpha-color-black-1: transparentize($color-black-7, 0.28);\\n$alpha-color-black-2: transparentize($color-black, 0.04);\\n$alpha-color-black-3: transparentize($color-black-7, 0.92);\\n$alpha-color-black-4: transparentize($color-black-7, 0.84);\\n$alpha-color-black-5: transparentize($color-black-7, 0.16);\\n$alpha-color-black-6: transparentize($color-black-7, 0.36);\\n$alpha-color-black-7: transparentize($color-black, 0.5);\\n$alpha-color-blue-1: transparentize($color-blue, 0.84);\\n$alpha-color-blue-2: transparentize($color-blue-3, 0.84);\\n$alpha-color-blue-3: transparentize($color-blue, 0.92);\\n$alpha-color-white-1: transparentize($color-white, 0.04);\\n$alpha-color-white-2: transparentize($color-white, 0.84);\\n$alpha-color-white-3: transparentize($color-white, 0.92);\\n$alpha-color-white-4: transparentize($color-white, 0.3);\\n$alpha-color-red-1: transparentize($color-red, 0.92);\\n$alpha-color-red-2: transparentize($color-red, 0.84);\\n$alpha-color-red-3: transparentize($color-red, 0.76);\\n$alpha-color-green-1: transparentize($color-green-1, 0.08);\\n$alpha-color-green-2: transparentize($color-green-3, 0.08);\\n$alpha-color-green-3: transparentize($color-green-3, 0.84);\\n$alpha-color-yellow-1: transparentize($color-yellow, 0.84);\\n\\n/* gradient colors */\\n$gradient-color-green-1: linear-gradient(to top, $color-white, transparentize($color-green-1, 0.84));\\n$gradient-color-green-2: linear-gradient(to top, $color-black, transparentize($color-green-3, 0.84));\\n$gradient-color-red-1: linear-gradient(to top, $color-white, transparentize($color-red, 0.84));\\n$gradient-color-red-2: linear-gradient(to top, $color-black, transparentize($color-red, 0.84));\\n$contract-gradient-color-red-1: linear-gradient(to top, $color-white 85%, transparentize($color-red, 0.84));\\n$contract-gradient-color-red-2: linear-gradient(to top, $color-black 85%, transparentize($color-red, 0.84));\\n$gradient-color-white: linear-gradient(to right, transparentize($color-white, 1) -5%, $color-white 71%);\\n$gradient-color-black: linear-gradient(to right, transparentize($color-black, 1) -5%, $color-black 71%);\\n\\n$gradient-color-purple: linear-gradient(274.73deg, #5a205d 3.82%, #7f3883 88.49%);\\n$gradient-color-blue: linear-gradient(274.73deg, #1a205e 3.82%, #122d96 88.49%);\\n$gradient-color-orange: linear-gradient(90deg, #eb001b 0%, #f79e1b 100%);\\n$gradient-color-black-2: linear-gradient(274.73deg, #464750 3.82%, #0e0f11 88.49%);\\n$gradient-color-orange-2: linear-gradient(90deg, #f89e32 0%, #f7931b 103.12%);\\n$gradient-color-blue-2: linear-gradient(90deg, #3d83cf 0%, #2775ca 100%);\\n$gradient-color-green-3: linear-gradient(90deg, #98cc53 0%, #8dc640 100%);\\n$gradient-color-blue-3: linear-gradient(90deg, #1a77ac 0%, #0068a3 100%);\\n$gradient-color-orange-3: linear-gradient(90deg, #ff7635 0%, #ff671f 100%);\\n$gradient-color-orange-4: linear-gradient(90deg, #f36938 0%, #f25822 100%);\\n$gradient-color-blue-4: linear-gradient(90deg, #1a8fff 0%, #0083ff 100%);\\n$gradient-color-red-3: linear-gradient(90deg, #ff444f 0%, #211d1e 95.22%);\\n$gradient-color-red-4: linear-gradient(90deg, #ff6444 0%, #ff444f 100%);\\n$gradient-color-black-3: linear-gradient(58.51deg, #061828 28.06%, #1a3c60 93.51%);\\n$gradient-color-black-4: linear-gradient(274.25deg, #333333 9.01%, #5c5b5b 103.31%);\\n$gradient-color-black-5: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.16) 100%);\\n$gradient-color-white-2: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.16) 100%);\\n$gradient-color-blue-5: linear-gradient(90deg, #00a8af 0%, #04cfd8 104.41%);\\n$gradient-color-gold: linear-gradient(90deg, #f7931a 0%, #ffc71b 104.41%);\\n$gradient-color-green-4: linear-gradient(90deg, #1db193 0%, #09da7a 104.41%);\\n\\n/* Preserve legacy variables */\\n/* Primary */\\n\\n$COLOR_BLACK: #000000;\\n$COLOR_BLACK_2: #1d1f20;\\n$COLOR_BLACK_3: #0e0e0e;\\n$COLOR_GREEN_1: #39b19d;\\n$COLOR_GREEN_2: #2d9f93;\\n$COLOR_GREEN_3: #21ce99;\\n$COLOR_GREEN_4: #00a79e;\\n$COLOR_GREEN_5: #4bb4b3;\\n$COLOR_ORANGE: #ff9933;\\n$COLOR_DARK_ORANGE: #ff8802;\\n$COLOR_PURPLE: #4f60ae;\\n$COLOR_RED: #e31c4b;\\n$COLOR_RED_2: #cc2e3d;\\n$COLOR_RED_3: #ec3f3f;\\n$COLOR_CORAL_RED: #ff444f;\\n$COLOR_SKY_BLUE: #2196f3;\\n$COLOR_WHITE: #ffffff;\\n$COLOR_BLUE: #1c5ae3;\\n\\n// Light theme\\n$COLOR_LIGHT_BLACK_1: rgba(0, 0, 0, 0.8);\\n$COLOR_LIGHT_BLACK_2: rgba(0, 0, 0, 0.4);\\n$COLOR_LIGHT_BLACK_3: rgba(0, 0, 0, 0.16);\\n$COLOR_LIGHT_BLACK_3_SOLID_1: #d6d6d6;\\n$COLOR_LIGHT_BLACK_3_SOLID_2: #b3b3b3;\\n$COLOR_LIGHT_BLACK_4: rgba(0, 0, 0, 0.04);\\n$COLOR_LIGHT_BLACK_4_SOLID: #f4f4f6;\\n$COLOR_LIGHT_GRAY_1: #999cac;\\n$COLOR_LIGHT_GRAY_2: rgba(153, 156, 172, 0.32);\\n$COLOR_LIGHT_GRAY_3: #eaeced;\\n$COLOR_LIGHT_GRAY_4: #6e6e6e;\\n$COLOR_LIGHT_GRAY_5: #c2c2c2;\\n$COLOR_LIGHT_GRAY_6: #f2f3f4;\\n$COLOR_LIGHT_GREEN_GRADIENT: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 148, 117, 0.16));\\n$COLOR_LIGHT_RED_GRADIENT: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(227, 28, 75, 0.16));\\n$COLOR_LIGHT_WHITE_GRADIENT: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));\\n// Dark theme\\n$COLOR_DARK_BLACK_GRADIENT: linear-gradient(to right, rgba(16, 19, 32, 1), rgba(16, 19, 32, 0));\\n$COLOR_DARK_BLUE_1: #0b0e18;\\n$COLOR_DARK_BLUE_2: #101320;\\n$COLOR_DARK_BLUE_3: #191c31;\\n$COLOR_DARK_BLUE_4: #202641;\\n$COLOR_DARK_BLUE_5: #2a3052;\\n$COLOR_DARK_BLUE_6: #555975;\\n$COLOR_DARK_BLUE_7: #7f8397;\\n$COLOR_DARK_BLUE_8: rgba(127, 131, 151, 0.3);\\n$COLOR_DARK_GREEN_GRADIENT: linear-gradient(to top, rgba(16, 19, 32, 0), rgba(0, 148, 117, 0.16));\\n$COLOR_DARK_RED_GRADIENT: linear-gradient(to top, rgba(16, 19, 32, 0), rgba(227, 28, 75, 0.16));\\n$COLOR_DARK_GRAY_1: #282a37;\\n$COLOR_DARK_GRAY_2: #303342;\\n$COLOR_DARK_GRAY_3: #555975;\\n$COLOR_DARK_GRAY_4: #999999;\\n/* stylelint-enable color-no-hex */\\n\\n$BORDER_RADIUS: 4px;\\n$BORDER_RADIUS_2: 8px;\\n\\n$MAX_CONTAINER_WIDTH: 1440px;\\n\\n$POSITIONS_DRAWER_WIDTH: 240px;\\n$POSITIONS_DRAWER_MARGIN: 8px;\\n\\n$HEADER_HEIGHT: 48px;\\n$FOOTER_HEIGHT: 36px;\\n\\n$MOBILE_HEADER_HEIGHT: 40px;\\n$MOBILE_HEADER_DTRADER_V2_HEIGHT: 40px;\\n$MOBILE_HEADER_DTRADER_V2_WITH_BANNER_HEIGHT: 128px;\\n$MOBILE_HEADER_HEIGHT_DASHBOARD: 48px;\\n$MOBILE_WRAPPER_HEADER_HEIGHT: 40px;\\n$MOBILE_WRAPPER_FOOTER_HEIGHT: 70px;\\n\\n$SIDEBAR_WIDTH: 240px;\\n\\n/* Wallet gradient background */\\n$gradient-airtm: linear-gradient(90deg, #1a8fff 0%, #0083ff 100%);\\n$gradient-banxa: linear-gradient(90deg, #000000 0%, #4ac0ba 96.35%);\\n$gradient-bitcoin: linear-gradient(90deg, #f89e32 0%, #f7931b 103.12%);\\n$gradient-credit: linear-gradient(274.73deg, #464750 3.82%, #0e0f11 88.49%);\\n$gradient-dp2p: linear-gradient(90deg, #ff444f 0%, #211d1e 95.22%);\\n$gradient-fasapay: linear-gradient(90deg, #f6931c 0%, #4873ac 95.22%);\\n$gradient-jeton: linear-gradient(90deg, #ff7635 0%, #ff671f 100%);\\n$gradient-mastercard: linear-gradient(90deg, #eb001b 0%, #f79e1b 100%);\\n$gradient-neteller: linear-gradient(90deg, #98cc53 0%, #8dc640 100%);\\n$gradient-paylivre: linear-gradient(90deg, #352caa 0%, #9a6bfc 100%);\\n$gradient-paysafe: linear-gradient(90deg, #e3001b 0%, #008ac9 100%);\\n$gradient-perfectmoney: linear-gradient(90deg, #f12c2c 0%, #ef1515 100%);\\n$gradient-skrill: linear-gradient(274.73deg, #5a205d 3.82%, #7f3883 88.49%);\\n$gradient-sticpay: linear-gradient(90deg, #f36938 0%, #f25822 100%);\\n$gradient-virtual: linear-gradient(90deg, #ff6444 0%, #ff444f 100%);\\n$gradient-visa: linear-gradient(274.73deg, #1a205e 3.82%, #122d96 88.49%);\\n$gradient-webmoney: linear-gradient(90deg, #1a77ac 0%, #0068a3 100%);\\n\\n/* App Cards gradient background */\\n$gradient-virtual: linear-gradient(274.25deg, #333333 9.01%, #5c5b5b 103.31%);\\n$gradient-virtual-swap-free: linear-gradient(58.51deg, #061828 28.06%, #1a3c60 93.51%);\\n\\n/* Wallets */\\n$ready-banner-bg-color: #e2f3f3;\\n$ready-banner-tick-bg-color: #4ab4b3;\\n$wallet-demo-bg-color: #fff8f9;\\n$wallet-dark-demo-bg-color: #140506;\\n$wallet-demo-divider-color: #fff0f1;\\n$wallet-box-shadow: 0px 12px 16px -4px rgba(14, 14, 14, 0.08), 0px 4px 6px -2px rgba(14, 14, 14, 0.03);\\n$btn-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.08), 0px 0px 24px 0px rgba(0, 0, 0, 0.08);\\n\\n/*------------------------------------*\\n *  # SASS Mixins and Functions\\n *------------------------------------*/\\n\\n/*\\n * SASS interpolation\\n */\\n// Requires the calc-interpolation function which can also be used independently\\n@function calc-interpolation($min-screen, $min-value, $max-screen, $max-value) {\\n    $a: ($max-value - $min-value) / ($max-screen - $min-screen);\\n    $b: $min-value - $a * $min-screen;\\n\\n    $sign: '+';\\n    @if ($b < 0) {\\n        $sign: '-';\\n        $b: abs($b);\\n    }\\n    @return calc(#{$a * 100}vw #{$sign} #{$b});\\n}\\n\\n@mixin interpolate($properties, $min-screen, $max-screen, $min-value, $max-value) {\\n    & {\\n        @each $property in $properties {\\n            #{$property}: $min-value;\\n        }\\n        @media screen and (min-width: $min-screen) {\\n            @each $property in $properties {\\n                #{$property}: calc-interpolation($min-screen, $min-value, $max-screen, $max-value);\\n            }\\n        }\\n        @media screen and (min-width: $max-screen) {\\n            @each $property in $properties {\\n                #{$property}: $max-value;\\n            }\\n        }\\n    }\\n}\\n\\n/*\\n * PX to EM\\n * @param $px - px value to be converted\\n * @param $base - base font size (in `em`)\\n * Note: 'em' values are calculate based on the element font-size\\n *       to properly converts 'px' to 'em', please pass in the element font-size with it\\n * Usage example:\\n    padding: em(16px, 1.6em); // font-size in 'em'\\n */\\n@function em($px, $base: $BASE_FONT_SIZE) {\\n    $list: ();\\n    @if length($px) != 1 {\\n        @for $i from 1 through length($px) {\\n            $val_em: (nth($px, $i) / $base) * 1em;\\n            $list: append($list, $val_em, space);\\n        }\\n        @return $list;\\n    } @else {\\n        @return ($px / $base) * 1em;\\n    }\\n}\\n\\n/*\\n * Set property by passing a property name, and values.\\n * @param $property name - padding, margin etc.\\n * @param $values        - values in `px` (space separated for multiple values)\\n * @param $font-size     - base font-size in `em`\\n * Usage example:\\n   @include toEm(padding, 8px 16px 8px, 1.6em);\\n */\\n@mixin toEm($property, $values, $font-size: $BASE_FONT_SIZE) {\\n    #{$property}: em($values, $font-size);\\n}\\n\\n/*\\n * Generate typefaces key-value pair of variable name and config\\n * Example:\\n   --paragraph-center-bold-black: (14px, center, bold, black)\\n */\\n@function generate-typefaces() {\\n    $typeface_list: ();\\n    @each $fontsize_name, $size in $FONT_SIZES {\\n        @each $textalign_name, $text_align in $TEXT_ALIGN {\\n            @each $color_name, $color in $FONT_COLORS {\\n                @each $fontweight_name, $weight in $FONT_WEIGHTS {\\n                    $key: --#{$fontsize_name}-#{$textalign_name}-#{$fontweight_name}-#{$color_name};\\n                    $val: ($size, $text_align, $weight, $color);\\n                    $typeface: (\\n                        $key: $val,\\n                    );\\n                    $typeface_list: map-merge($typeface_list, $typeface);\\n                }\\n            }\\n        }\\n    }\\n    // @debug $typeface_list; /* uncomment to debug */\\n    @return $typeface_list;\\n}\\n\\n/*\\n * Sets font-size, font-weight, color, text-transform, text-align and line-height\\n * Usage example:\\n   @include setTypeface(16px, bold, black, uppercase);\\n */\\n@mixin setTypeface($size, $align, $weight, $colour, $tt) {\\n    @if $size {\\n        font-size: $size;\\n    }\\n    @if $colour {\\n        color: $colour;\\n    }\\n    @if $weight {\\n        font-weight: $weight;\\n    }\\n    @if $tt {\\n        text-transform: $tt;\\n    }\\n    @if $align {\\n        text-align: $align;\\n    }\\n    @if $size == 1.6rem {\\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'large');\\n    } @else if $size == 1.4rem {\\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'medium');\\n    } @else if $size == 1.2rem {\\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'small');\\n    } @else if $size == 1rem {\\n        line-height: map-get($map: $LINEHEIGHTS, $key: 'xsmall');\\n    } @else {\\n        line-height: unset;\\n    }\\n}\\n\\n/*\\n * Set typefaces by passing a typeface variable name\\n * @param $var   - typeface variable\\n * @param $tt    - text-transform property\\n * @param $align - text-align property\\n * Usage example:\\n   @include typeface(--paragraph-bold-black, uppercase, center);\\n */\\n@mixin typeface($var, $tt: none) {\\n    $typeface_config: map-get(\\n        $map: $TYPEFACES_LIST,\\n        $key: $var,\\n    );\\n\\n    $size: nth($typeface_config, 1); // font-size\\n    $align: nth($typeface_config, 2); // text-align\\n    $weight: nth($typeface_config, 3); // font-weight\\n    $color: nth($typeface_config, 4); // color\\n    @include setTypeface($size, $align, $weight, $color, $tt);\\n}\\n\\n/*\\n * Range Slider Thumb styling is set here\\n */\\n@mixin thumbStyle() {\\n    appearance: none;\\n    width: 1em;\\n    height: 1em;\\n    border-radius: 100%;\\n    border: 0;\\n    cursor: pointer;\\n    transition: box-shadow 0.2s;\\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0);\\n\\n    &:hover {\\n        box-shadow: 0 0 0 0.5em var(--state-hover);\\n    }\\n}\\n\\n/*\\n * SVG icons colors\\n */\\n@mixin colorIcon($colors...) {\\n    @for $i from 1 through length($colors) {\\n        /* postcss-bem-linter: ignore */\\n        .color#{$i}-fill {\\n            fill: nth($colors, $i);\\n        }\\n        /* postcss-bem-linter: ignore */\\n        .color#{$i}-stroke {\\n            stroke: nth($colors, $i);\\n        }\\n    }\\n}\\n\\n/*\\n * Bar Spinner Animation\\n * @param $count    - number of bars\\n * @param $duration - duration of animation\\n * @param $phase    - each bar phase change delay\\n * Usage example:\\n   @include createBarspinnerAnimation(5, 1.2s, 0,1);\\n */\\n@mixin createBarspinnerAnimation($count, $duration, $phase) {\\n    animation: sk-stretchdelay $duration infinite ease-in-out;\\n\\n    @for $i from 1 through $count {\\n        &--#{$i} {\\n            animation-delay: -$duration + (($i - 1) * $phase);\\n        }\\n    }\\n}\\n\\n/*\\n * Tooltip colors\\n * @param $color - color property\\n * Usage example:\\n   @include tooltipColor($COLOR_RED);\\n */\\n@mixin tooltipColor($color) {\\n    &:before {\\n        background: $color;\\n    }\\n    &:after,\\n    &[data-tooltip-pos='top']:after {\\n        border-top-color: $color;\\n    }\\n    &[data-tooltip-pos='right']:after {\\n        border-top-color: transparent;\\n        border-right-color: $color;\\n    }\\n    &[data-tooltip-pos='left']:after {\\n        border-top-color: transparent;\\n        border-left-color: $color;\\n    }\\n    &[data-tooltip-pos='bottom']:after {\\n        border-top-color: transparent;\\n        border-bottom-color: $color;\\n    }\\n}\\n\\n/*\\n * Convert Tooltip colors\\n * @param $color - css color property\\n * Usage example:\\n   @include convertTooltipColor(var(--status-default));\\n */\\n@mixin convertTooltipColor($color) {\\n    &:before {\\n        background: $color;\\n    }\\n    &:after,\\n    &[data-tooltip-pos='top']:after {\\n        border-top-color: $color;\\n    }\\n    &[data-tooltip-pos='right']:after {\\n        border-top-color: transparent;\\n        border-right-color: $color;\\n    }\\n    &[data-tooltip-pos='left']:after {\\n        border-top-color: transparent;\\n        border-left-color: $color;\\n    }\\n    &[data-tooltip-pos='bottom']:after {\\n        border-top-color: transparent;\\n        border-bottom-color: $color;\\n    }\\n}\\n\\n/*\\n    Constants\\n*/\\n$FONT_STACK: 'IBM Plex Sans', sans-serif;\\n$BASE_FONT_SIZE: 10px;\\n\\n/*\\n    Variables\\n*/\\n$FONT_SIZES: (\\n    'xheading' 3.2rem,\\n    'heading' 3rem,\\n    'large' 2.8rem,\\n    'title' 1.6rem,\\n    'paragraph' 1.4rem,\\n    'small' 1.2rem,\\n    'xsmall' 1rem,\\n    'xxsmall' 0.8rem,\\n    'xxxsmall' 0.6rem\\n);\\n\\n$FONT_COLORS: (\\n    'active' var(--text-colored-background),\\n    'prominent' var(--text-prominent),\\n    'black' var(--text-general),\\n    'grey' var(--text-less-prominent),\\n    'disabled' var(--text-disabled),\\n    'green' var(--text-profit-success),\\n    'red' var(--text-loss-danger)\\n);\\n\\n$FONT_WEIGHTS: ('bold' 700, 'semibold' 500, 'normal' 400, 'light' 300);\\n\\n$TEXT_ALIGN: ('center' center, 'left' start, 'right' end);\\n\\n$LINEHEIGHTS: (\\n    'large': 1.75,\\n    'medium': 1.5,\\n    'small': 1.25,\\n    'xsmall': 1.4,\\n);\\n\\n/*\\n    List of all typefaces variables in the format: --$FONT_SIZES-$TEXT_ALIGN-$FONT_WEIGHTS-COLORS.\\n    See $FONT_SIZES, $TEXT_ALIGN, $FONT_WEIGHTS, $COLORS maps above for references.\\n    Variables name example: --title-center-semibold-red\\n */\\n$TYPEFACES_LIST: generate-typefaces();\\n\\n/*\\n    to use styles without modifier class on .inline-icon\\n    use @extend\\n\\n    e.g. style icon on parent hover:\\n        a:hover .inline-icon {\\n            @extend %inline-icon-active;\\n        }\\n*/\\n\\n%inline-icon {\\n    @include colorIcon(var(--text-general), none);\\n\\n    &.active,\\n    &-active {\\n        @include colorIcon(var(--text-prominent), none);\\n    }\\n    &.disabled,\\n    &-disabled {\\n        @include colorIcon(var(--text-disabled), none);\\n    }\\n    &.white,\\n    &-white {\\n        @include colorIcon(var(--text-prominent));\\n    }\\n    &.border_hover_color,\\n    &-border_hover_color {\\n        @include colorIcon(var(--text-prominent));\\n    }\\n    &.secondary,\\n    &-secondary {\\n        @include colorIcon(var(--text-less-prominent));\\n    }\\n}\\n\\n/**\\n * Define Breakpoints here.\\n */\\n$mobile-width: 320px;\\n$tablet-width: 768px;\\n$desktop-width: 1024px;\\n\\n@mixin tablet {\\n    @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {\\n        @content;\\n    }\\n}\\n\\n@mixin desktop {\\n    @media (min-width: #{$desktop-width}) {\\n        @content;\\n    }\\n}\\n\\n@mixin tablet-down {\\n    @media (max-width: #{$tablet-width}) {\\n        @content;\\n    }\\n}\\n\\n@mixin tablet-up {\\n    @media (min-width: #{$tablet-width}) {\\n        @content;\\n    }\\n}\\n\\n@mixin mobile-up {\\n    @media (min-width: #{$mobile-width}) {\\n        @content;\\n    }\\n}\\n\\n@mixin mobile {\\n    @media (min-width: #{$mobile-width}) and (max-width: #{$tablet-width - 1}) {\\n        @content;\\n    }\\n}\\n\\n@mixin mobile-landscape {\\n    @media only screen and (min-width: #{$mobile-width}) and (max-width: #{$desktop-width - 1}) and (orientation: landscape) {\\n        @content;\\n    }\\n}\\n\\n@mixin touch-device {\\n    // add css interaction media query to detect touch devices\\n    // refer to: https://caniuse.com/#feat=css-media-interaction\\n    @media (pointer: coarse) {\\n        @content;\\n    }\\n}\\n\\n@mixin mobile-tablet-mix {\\n    @media (min-width: #{$mobile-width}) and (max-width: #{$desktop-width - 1px}) {\\n        @content;\\n    }\\n}\\n\\n/** Need to add new breakpoints for mixins */\\n$max-mobile-width: 600px;\\n$min-desktop-width: 1280px;\\n\\n@mixin mobile-screen {\\n    @media (max-width: #{$max-mobile-width}) {\\n        @content;\\n    }\\n}\\n\\n@mixin tablet-screen {\\n    @media (min-width: #{$max-mobile-width + 1}) and (max-width: #{$min-desktop-width - 1}) {\\n        @content;\\n    }\\n}\\n\\n@mixin desktop-screen {\\n    @media (min-width: #{$min-desktop-width}) {\\n        @content;\\n    }\\n}\\n\\n@mixin mobile-or-tablet-screen {\\n    @media (max-width: #{$min-desktop-width - 1}) {\\n        @content;\\n    }\\n}\\n\\n@mixin tablet-or-desktop-screen {\\n    @media (min-width: #{$max-mobile-width + 1}) {\\n        @content;\\n    }\\n}\\n\\n@mixin tablet-portrait-screen {\\n    @media (min-width: #{$max-mobile-width + 1}) and (max-width: #{$min-desktop-width - 1}) and (orientation: portrait) {\\n        @content;\\n    }\\n}\\n\\n@mixin mobile-or-tablet-landscape {\\n    @media only screen and (max-width: #{$min-desktop-width - 1}) and (orientation: landscape) {\\n        @content;\\n    }\\n}\\n\\n.p2p-app-loader {\\n    height: 80vh;\\n    width: 100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVs0XSEuL3NyYy9wYWdlcy9pbmRleC5zY3NzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvcGFnZXMvaW5kZXguc2Nzcz83YWQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxuICogICMgQ29uc3RhbnRzXFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qUlRMIExhbmd1YWdlIE1peGluKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBjb2xvci1uby1oZXggKi9cXG4vKiBDT0xPUiBQQUxFVFRFICovXFxuLyogY29sb3JzICovXFxuLyogc3RhdHVzIGNvbG9ycyAqL1xcbi8qIGFscGhhIGNvbG9ycyAqL1xcbi8qIGdyYWRpZW50IGNvbG9ycyAqL1xcbi8qIFByZXNlcnZlIGxlZ2FjeSB2YXJpYWJsZXMgKi9cXG4vKiBQcmltYXJ5ICovXFxuLyogc3R5bGVsaW50LWVuYWJsZSBjb2xvci1uby1oZXggKi9cXG4vKiBXYWxsZXQgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbi8qIEFwcCBDYXJkcyBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuLyogV2FsbGV0cyAqL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcbiAqICAjIFNBU1MgTWl4aW5zIGFuZCBGdW5jdGlvbnNcXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLypcXG4gKiBTQVNTIGludGVycG9sYXRpb25cXG4gKi9cXG4vKlxcbiAqIFBYIHRvIEVNXFxuICogQHBhcmFtICRweCAtIHB4IHZhbHVlIHRvIGJlIGNvbnZlcnRlZFxcbiAqIEBwYXJhbSAkYmFzZSAtIGJhc2UgZm9udCBzaXplIChpbiBgZW1gKVxcbiAqIE5vdGU6ICdlbScgdmFsdWVzIGFyZSBjYWxjdWxhdGUgYmFzZWQgb24gdGhlIGVsZW1lbnQgZm9udC1zaXplXFxuICogICAgICAgdG8gcHJvcGVybHkgY29udmVydHMgJ3B4JyB0byAnZW0nLCBwbGVhc2UgcGFzcyBpbiB0aGUgZWxlbWVudCBmb250LXNpemUgd2l0aCBpdFxcbiAqIFVzYWdlIGV4YW1wbGU6XFxuICAgIHBhZGRpbmc6IGVtKDE2cHgsIDEuNmVtKTsgLy8gZm9udC1zaXplIGluICdlbSdcXG4gKi9cXG4vKlxcbiAqIFNldCBwcm9wZXJ0eSBieSBwYXNzaW5nIGEgcHJvcGVydHkgbmFtZSwgYW5kIHZhbHVlcy5cXG4gKiBAcGFyYW0gJHByb3BlcnR5IG5hbWUgLSBwYWRkaW5nLCBtYXJnaW4gZXRjLlxcbiAqIEBwYXJhbSAkdmFsdWVzICAgICAgICAtIHZhbHVlcyBpbiBgcHhgIChzcGFjZSBzZXBhcmF0ZWQgZm9yIG11bHRpcGxlIHZhbHVlcylcXG4gKiBAcGFyYW0gJGZvbnQtc2l6ZSAgICAgLSBiYXNlIGZvbnQtc2l6ZSBpbiBgZW1gXFxuICogVXNhZ2UgZXhhbXBsZTpcXG4gICBAaW5jbHVkZSB0b0VtKHBhZGRpbmcsIDhweCAxNnB4IDhweCwgMS42ZW0pO1xcbiAqL1xcbi8qXFxuICogR2VuZXJhdGUgdHlwZWZhY2VzIGtleS12YWx1ZSBwYWlyIG9mIHZhcmlhYmxlIG5hbWUgYW5kIGNvbmZpZ1xcbiAqIEV4YW1wbGU6XFxuICAgLS1wYXJhZ3JhcGgtY2VudGVyLWJvbGQtYmxhY2s6ICgxNHB4LCBjZW50ZXIsIGJvbGQsIGJsYWNrKVxcbiAqL1xcbi8qXFxuICogU2V0cyBmb250LXNpemUsIGZvbnQtd2VpZ2h0LCBjb2xvciwgdGV4dC10cmFuc2Zvcm0sIHRleHQtYWxpZ24gYW5kIGxpbmUtaGVpZ2h0XFxuICogVXNhZ2UgZXhhbXBsZTpcXG4gICBAaW5jbHVkZSBzZXRUeXBlZmFjZSgxNnB4LCBib2xkLCBibGFjaywgdXBwZXJjYXNlKTtcXG4gKi9cXG4vKlxcbiAqIFNldCB0eXBlZmFjZXMgYnkgcGFzc2luZyBhIHR5cGVmYWNlIHZhcmlhYmxlIG5hbWVcXG4gKiBAcGFyYW0gJHZhciAgIC0gdHlwZWZhY2UgdmFyaWFibGVcXG4gKiBAcGFyYW0gJHR0ICAgIC0gdGV4dC10cmFuc2Zvcm0gcHJvcGVydHlcXG4gKiBAcGFyYW0gJGFsaWduIC0gdGV4dC1hbGlnbiBwcm9wZXJ0eVxcbiAqIFVzYWdlIGV4YW1wbGU6XFxuICAgQGluY2x1ZGUgdHlwZWZhY2UoLS1wYXJhZ3JhcGgtYm9sZC1ibGFjaywgdXBwZXJjYXNlLCBjZW50ZXIpO1xcbiAqL1xcbi8qXFxuICogUmFuZ2UgU2xpZGVyIFRodW1iIHN0eWxpbmcgaXMgc2V0IGhlcmVcXG4gKi9cXG4vKlxcbiAqIFNWRyBpY29ucyBjb2xvcnNcXG4gKi9cXG4vKlxcbiAqIEJhciBTcGlubmVyIEFuaW1hdGlvblxcbiAqIEBwYXJhbSAkY291bnQgICAgLSBudW1iZXIgb2YgYmFyc1xcbiAqIEBwYXJhbSAkZHVyYXRpb24gLSBkdXJhdGlvbiBvZiBhbmltYXRpb25cXG4gKiBAcGFyYW0gJHBoYXNlICAgIC0gZWFjaCBiYXIgcGhhc2UgY2hhbmdlIGRlbGF5XFxuICogVXNhZ2UgZXhhbXBsZTpcXG4gICBAaW5jbHVkZSBjcmVhdGVCYXJzcGlubmVyQW5pbWF0aW9uKDUsIDEuMnMsIDAsMSk7XFxuICovXFxuLypcXG4gKiBUb29sdGlwIGNvbG9yc1xcbiAqIEBwYXJhbSAkY29sb3IgLSBjb2xvciBwcm9wZXJ0eVxcbiAqIFVzYWdlIGV4YW1wbGU6XFxuICAgQGluY2x1ZGUgdG9vbHRpcENvbG9yKCRDT0xPUl9SRUQpO1xcbiAqL1xcbi8qXFxuICogQ29udmVydCBUb29sdGlwIGNvbG9yc1xcbiAqIEBwYXJhbSAkY29sb3IgLSBjc3MgY29sb3IgcHJvcGVydHlcXG4gKiBVc2FnZSBleGFtcGxlOlxcbiAgIEBpbmNsdWRlIGNvbnZlcnRUb29sdGlwQ29sb3IodmFyKC0tc3RhdHVzLWRlZmF1bHQpKTtcXG4gKi9cXG4vKlxcbiAgICBDb25zdGFudHNcXG4qL1xcbi8qXFxuICAgIFZhcmlhYmxlc1xcbiovXFxuLypcXG4gICAgTGlzdCBvZiBhbGwgdHlwZWZhY2VzIHZhcmlhYmxlcyBpbiB0aGUgZm9ybWF0OiAtLSRGT05UX1NJWkVTLSRURVhUX0FMSUdOLSRGT05UX1dFSUdIVFMtQ09MT1JTLlxcbiAgICBTZWUgJEZPTlRfU0laRVMsICRURVhUX0FMSUdOLCAkRk9OVF9XRUlHSFRTLCAkQ09MT1JTIG1hcHMgYWJvdmUgZm9yIHJlZmVyZW5jZXMuXFxuICAgIFZhcmlhYmxlcyBuYW1lIGV4YW1wbGU6IC0tdGl0bGUtY2VudGVyLXNlbWlib2xkLXJlZFxcbiAqL1xcbi8qXFxuICAgIHRvIHVzZSBzdHlsZXMgd2l0aG91dCBtb2RpZmllciBjbGFzcyBvbiAuaW5saW5lLWljb25cXG4gICAgdXNlIEBleHRlbmRcXG5cXG4gICAgZS5nLiBzdHlsZSBpY29uIG9uIHBhcmVudCBob3ZlcjpcXG4gICAgICAgIGE6aG92ZXIgLmlubGluZS1pY29uIHtcXG4gICAgICAgICAgICBAZXh0ZW5kICVpbmxpbmUtaWNvbi1hY3RpdmU7XFxuICAgICAgICB9XFxuKi9cXG4vKipcXG4gKiBEZWZpbmUgQnJlYWtwb2ludHMgaGVyZS5cXG4gKi9cXG4vKiogTmVlZCB0byBhZGQgbmV3IGJyZWFrcG9pbnRzIGZvciBtaXhpbnMgKi9cXG4ucDJwLWFwcC1sb2FkZXIge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzt1Q0FBQTtBQUlBLHFCQUFBO0FBUUEsbUNBQUE7QUFFQSxrQkFBQTtBQUVBLFdBQUE7QUF3RUEsa0JBQUE7QUFRQSxpQkFBQTtBQXVCQSxvQkFBQTtBQStCQSw4QkFBQTtBQUNBLFlBQUE7QUFzREEsa0NBQUE7QUFzQkEsK0JBQUE7QUFtQkEsa0NBQUE7QUFJQSxZQUFBO0FBU0E7O3VDQUFBO0FBSUE7O0VBQUE7QUFrQ0E7Ozs7Ozs7O0VBQUE7QUFzQkE7Ozs7Ozs7RUFBQTtBQVlBOzs7O0VBQUE7QUF5QkE7Ozs7RUFBQTtBQWtDQTs7Ozs7OztFQUFBO0FBcUJBOztFQUFBO0FBa0JBOztFQUFBO0FBZ0JBOzs7Ozs7O0VBQUE7QUFrQkE7Ozs7O0VBQUE7QUE0QkE7Ozs7O0VBQUE7QUE0QkE7O0NBQUE7QUFNQTs7Q0FBQTtBQW9DQTs7OztFQUFBO0FBT0E7Ozs7Ozs7O0NBQUE7QUFtQ0E7O0VBQUE7QUErREEsNENBQUE7QUE4Q0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQTVsQkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxuICogICMgQ29uc3RhbnRzXFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qUlRMIExhbmd1YWdlIE1peGluKi9cXG5cXG5AbWl4aW4gcnRsIHtcXG4gICAgW2Rpcj0ncnRsJ10gJiB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBjb2xvci1uby1oZXggKi9cXG5cXG4vKiBDT0xPUiBQQUxFVFRFICovXFxuXFxuLyogY29sb3JzICovXFxuJGNvbG9yLWJsYWNrOiAjMGUwZTBlO1xcbiRjb2xvci1ibGFjay0xOiAjMzMzMzMzO1xcbiRjb2xvci1ibGFjay0zOiAjMTUxNzE3O1xcbiRjb2xvci1ibGFjay00OiAjMWQxZjIwO1xcbiRjb2xvci1ibGFjay01OiAjMjQyODI4O1xcbiRjb2xvci1ibGFjay02OiAjM2UzZTNlO1xcbiRjb2xvci1ibGFjay03OiAjMDAwMDAwO1xcbiRjb2xvci1ibGFjay04OiAjMzIzNzM4O1xcbiRjb2xvci1ibGFjay05OiAjNWM1YzVjO1xcbiRjb2xvci1ibHVlOiAjMzc3Y2ZjO1xcbiRjb2xvci1ibHVlLTE6ICMwZGMyZTc7XFxuJGNvbG9yLWJsdWUtMjogIzJhMzA1MjtcXG4kY29sb3ItYmx1ZS0zOiAjMDc5NmUwO1xcbiRjb2xvci1ibHVlLTQ6ICMwNjc3YWY7XFxuJGNvbG9yLWJsdWUtNTogI2RmZWFmZjtcXG4kY29sb3ItYmx1ZS02OiAjOTJiOGZmO1xcbiRjb2xvci1ibHVlLTc6ICMxODIxMzA7XFxuJGNvbG9yLWJsdWUtODogI2U2ZjVmZjtcXG4kY29sb3ItYmx1ZS05OiAjMDA0MjZhO1xcbiRjb2xvci1icm93bjogIzY2NDQwNztcXG4kY29sb3ItZ3JlZW46ICM4NWFjYjA7XFxuJGNvbG9yLWdyZWVuLTE6ICM0YmI0YjM7XFxuJGNvbG9yLWdyZWVuLTI6ICMzZDk0OTQ7XFxuJGNvbG9yLWdyZWVuLTM6ICMwMGE3OWU7XFxuJGNvbG9yLWdyZWVuLTQ6ICMwMDgwNzk7XFxuJGNvbG9yLWdyZWVuLTU6ICM0YmI0YjMyOTtcXG4kY29sb3ItZ3JlZW4tNjogIzE3ZWFiZDtcXG4kY29sb3ItZ3JlZW4tNzogI2U4ZmRmODtcXG4kY29sb3ItZ3JlZW4tODogI2NlZGRkZjtcXG4kY29sb3ItZ3JleTogI2MyYzJjMjtcXG4kY29sb3ItZ3JleS0xOiAjOTk5OTk5O1xcbiRjb2xvci1ncmV5LTI6ICNmMmYzZjQ7XFxuJGNvbG9yLWdyZXktMzogI2VhZWNlZDtcXG4kY29sb3ItZ3JleS00OiAjZTZlOWU5O1xcbiRjb2xvci1ncmV5LTU6ICNkNmRhZGI7XFxuJGNvbG9yLWdyZXktNjogI2Q2ZDZkNjtcXG4kY29sb3ItZ3JleS03OiAjNmU2ZTZlO1xcbiRjb2xvci1ncmV5LTg6ICNkN2Q3ZDc7XFxuJGNvbG9yX2dyZXktOTogIzg2ODY4NjtcXG4kY29sb3ItZ3JleS0xMDogIzkxOTE5MTtcXG4kY29sb3ItZ3JleS0xMTogI2ZhZmFmYTtcXG4kY29sb3ItZ3JleS0xMjogI2Y1ZjdmYTtcXG4kY29sb3ItZ3JleS0xMzogIzJlMmUyZTtcXG4kY29sb3ItZ3JleS0xNDogI2UyZTVlNztcXG4kY29sb3ItZ3JleS0xNTogI2YzZjRmNTtcXG4kY29sb3Itb3JhbmdlOiAjZmY2NDQ0O1xcbiRjb2xvci1vcmFuZ2UtMjogI2ZmOWMxMztcXG4kY29sb3ItcHVycGxlOiAjNzIyZmU0O1xcbiRjb2xvci1yZWQ6ICNmZjQ0NGY7XFxuJGNvbG9yLXJlZC0xOiAjZWMzZjNmO1xcbiRjb2xvci1yZWQtMjogI2NjMmUzZDtcXG4kY29sb3ItcmVkLTM6ICNhMzI0MzA7XFxuJGNvbG9yLXJlZC00OiAjZDMzNjM2O1xcbiRjb2xvci1yZWQtNTogI2ViM2U0ODtcXG4kY29sb3ItcmVkLTY6ICNlYzNmM2YyOTtcXG4kY29sb3ItcmVkLTc6ICNmZmUxZTM7XFxuJGNvbG9yLXJlZC04OiAjNjYxYjIwO1xcbiRjb2xvci1yZWQtOTogI2IzMzAzNztcXG4kY29sb3ItcmVkLTEwOiAjZmY0NDRmO1xcbiRjb2xvci1yZWQtMTE6ICNmY2UzZTM7XFxuJGNvbG9yLXJlZC0xMjogI2M0MDAwMDtcXG4kY29sb3ItdmlvbGV0OiAjNGEzODcxO1xcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcXG4kY29sb3IteWVsbG93OiAjZmZhZDNhO1xcbiRjb2xvci15ZWxsb3ctMTogI2IzNzYwZDtcXG4kY29sb3IteWVsbG93LTI6ICNmZmE5MTI7XFxuJGNvbG9yLXllbGxvdy0zOiByZ2JhKDI1NSwgMTczLCA1OCwgMC4xNik7XFxuJGNvbG9yLXllbGxvdy00OiAjZmZmN2U2O1xcbiRjb2xvci15ZWxsb3ctNTogIzZhNDgwMDtcXG4kY29sb3IteWVsbG93LTY6ICNmZmVhYmY7XFxuXFxuLyogc3RhdHVzIGNvbG9ycyAqL1xcbiRjb2xvci1zdGF0dXMtd2FybmluZzogcmdiYSgyNTUsIDE3MywgNTgsIDAuMTYpO1xcbiRjb2xvci1zdGF0dXMtaW5mb3JtYXRpb246IHJnYmEoNTUsIDEyNCwgMjUyLCAwLjE2KTtcXG4kY29sb3Itc3RhdHVzLWFubm91bmNlbWVudDogcmdiYSg3NSwgMTgwLCAxNzksIDAuMTYpO1xcbiRjb2xvci1zdGF0dXMtZXJyb3I6IHJnYmEoMjM2LCA2MywgNjMsIDAuMTYpO1xcbiRjb2xvci1zdGF0dXMtdmVyaWZpZWQ6IHJnYmEoMCwgMTIyLCAzNCk7XFxuJGNvbG9yLXN0YXR1cy1kYW5nZXI6IHJnYmEoMTk2LCAwLCAwKTtcXG5cXG4vKiBhbHBoYSBjb2xvcnMgKi9cXG4kYWxwaGEtY29sb3ItYmxhY2stMTogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsYWNrLTcsIDAuMjgpO1xcbiRhbHBoYS1jb2xvci1ibGFjay0yOiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItYmxhY2ssIDAuMDQpO1xcbiRhbHBoYS1jb2xvci1ibGFjay0zOiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItYmxhY2stNywgMC45Mik7XFxuJGFscGhhLWNvbG9yLWJsYWNrLTQ6IHRyYW5zcGFyZW50aXplKCRjb2xvci1ibGFjay03LCAwLjg0KTtcXG4kYWxwaGEtY29sb3ItYmxhY2stNTogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsYWNrLTcsIDAuMTYpO1xcbiRhbHBoYS1jb2xvci1ibGFjay02OiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItYmxhY2stNywgMC4zNik7XFxuJGFscGhhLWNvbG9yLWJsYWNrLTc6IHRyYW5zcGFyZW50aXplKCRjb2xvci1ibGFjaywgMC41KTtcXG4kYWxwaGEtY29sb3ItYmx1ZS0xOiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItYmx1ZSwgMC44NCk7XFxuJGFscGhhLWNvbG9yLWJsdWUtMjogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsdWUtMywgMC44NCk7XFxuJGFscGhhLWNvbG9yLWJsdWUtMzogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWJsdWUsIDAuOTIpO1xcbiRhbHBoYS1jb2xvci13aGl0ZS0xOiB0cmFuc3BhcmVudGl6ZSgkY29sb3Itd2hpdGUsIDAuMDQpO1xcbiRhbHBoYS1jb2xvci13aGl0ZS0yOiB0cmFuc3BhcmVudGl6ZSgkY29sb3Itd2hpdGUsIDAuODQpO1xcbiRhbHBoYS1jb2xvci13aGl0ZS0zOiB0cmFuc3BhcmVudGl6ZSgkY29sb3Itd2hpdGUsIDAuOTIpO1xcbiRhbHBoYS1jb2xvci13aGl0ZS00OiB0cmFuc3BhcmVudGl6ZSgkY29sb3Itd2hpdGUsIDAuMyk7XFxuJGFscGhhLWNvbG9yLXJlZC0xOiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItcmVkLCAwLjkyKTtcXG4kYWxwaGEtY29sb3ItcmVkLTI6IHRyYW5zcGFyZW50aXplKCRjb2xvci1yZWQsIDAuODQpO1xcbiRhbHBoYS1jb2xvci1yZWQtMzogdHJhbnNwYXJlbnRpemUoJGNvbG9yLXJlZCwgMC43Nik7XFxuJGFscGhhLWNvbG9yLWdyZWVuLTE6IHRyYW5zcGFyZW50aXplKCRjb2xvci1ncmVlbi0xLCAwLjA4KTtcXG4kYWxwaGEtY29sb3ItZ3JlZW4tMjogdHJhbnNwYXJlbnRpemUoJGNvbG9yLWdyZWVuLTMsIDAuMDgpO1xcbiRhbHBoYS1jb2xvci1ncmVlbi0zOiB0cmFuc3BhcmVudGl6ZSgkY29sb3ItZ3JlZW4tMywgMC44NCk7XFxuJGFscGhhLWNvbG9yLXllbGxvdy0xOiB0cmFuc3BhcmVudGl6ZSgkY29sb3IteWVsbG93LCAwLjg0KTtcXG5cXG4vKiBncmFkaWVudCBjb2xvcnMgKi9cXG4kZ3JhZGllbnQtY29sb3ItZ3JlZW4tMTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yLXdoaXRlLCB0cmFuc3BhcmVudGl6ZSgkY29sb3ItZ3JlZW4tMSwgMC44NCkpO1xcbiRncmFkaWVudC1jb2xvci1ncmVlbi0yOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3ItYmxhY2ssIHRyYW5zcGFyZW50aXplKCRjb2xvci1ncmVlbi0zLCAwLjg0KSk7XFxuJGdyYWRpZW50LWNvbG9yLXJlZC0xOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAkY29sb3Itd2hpdGUsIHRyYW5zcGFyZW50aXplKCRjb2xvci1yZWQsIDAuODQpKTtcXG4kZ3JhZGllbnQtY29sb3ItcmVkLTI6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICRjb2xvci1ibGFjaywgdHJhbnNwYXJlbnRpemUoJGNvbG9yLXJlZCwgMC44NCkpO1xcbiRjb250cmFjdC1ncmFkaWVudC1jb2xvci1yZWQtMTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yLXdoaXRlIDg1JSwgdHJhbnNwYXJlbnRpemUoJGNvbG9yLXJlZCwgMC44NCkpO1xcbiRjb250cmFjdC1ncmFkaWVudC1jb2xvci1yZWQtMjogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgJGNvbG9yLWJsYWNrIDg1JSwgdHJhbnNwYXJlbnRpemUoJGNvbG9yLXJlZCwgMC44NCkpO1xcbiRncmFkaWVudC1jb2xvci13aGl0ZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudGl6ZSgkY29sb3Itd2hpdGUsIDEpIC01JSwgJGNvbG9yLXdoaXRlIDcxJSk7XFxuJGdyYWRpZW50LWNvbG9yLWJsYWNrOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50aXplKCRjb2xvci1ibGFjaywgMSkgLTUlLCAkY29sb3ItYmxhY2sgNzElKTtcXG5cXG4kZ3JhZGllbnQtY29sb3ItcHVycGxlOiBsaW5lYXItZ3JhZGllbnQoMjc0LjczZGVnLCAjNWEyMDVkIDMuODIlLCAjN2YzODgzIDg4LjQ5JSk7XFxuJGdyYWRpZW50LWNvbG9yLWJsdWU6IGxpbmVhci1ncmFkaWVudCgyNzQuNzNkZWcsICMxYTIwNWUgMy44MiUsICMxMjJkOTYgODguNDklKTtcXG4kZ3JhZGllbnQtY29sb3Itb3JhbmdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlYjAwMWIgMCUsICNmNzllMWIgMTAwJSk7XFxuJGdyYWRpZW50LWNvbG9yLWJsYWNrLTI6IGxpbmVhci1ncmFkaWVudCgyNzQuNzNkZWcsICM0NjQ3NTAgMy44MiUsICMwZTBmMTEgODguNDklKTtcXG4kZ3JhZGllbnQtY29sb3Itb3JhbmdlLTI6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y4OWUzMiAwJSwgI2Y3OTMxYiAxMDMuMTIlKTtcXG4kZ3JhZGllbnQtY29sb3ItYmx1ZS0yOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzZDgzY2YgMCUsICMyNzc1Y2EgMTAwJSk7XFxuJGdyYWRpZW50LWNvbG9yLWdyZWVuLTM6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzk4Y2M1MyAwJSwgIzhkYzY0MCAxMDAlKTtcXG4kZ3JhZGllbnQtY29sb3ItYmx1ZS0zOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYTc3YWMgMCUsICMwMDY4YTMgMTAwJSk7XFxuJGdyYWRpZW50LWNvbG9yLW9yYW5nZS0zOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjc2MzUgMCUsICNmZjY3MWYgMTAwJSk7XFxuJGdyYWRpZW50LWNvbG9yLW9yYW5nZS00OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMzY5MzggMCUsICNmMjU4MjIgMTAwJSk7XFxuJGdyYWRpZW50LWNvbG9yLWJsdWUtNDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE4ZmZmIDAlLCAjMDA4M2ZmIDEwMCUpO1xcbiRncmFkaWVudC1jb2xvci1yZWQtMzogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY0NDRmIDAlLCAjMjExZDFlIDk1LjIyJSk7XFxuJGdyYWRpZW50LWNvbG9yLXJlZC00OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjY0NDQgMCUsICNmZjQ0NGYgMTAwJSk7XFxuJGdyYWRpZW50LWNvbG9yLWJsYWNrLTM6IGxpbmVhci1ncmFkaWVudCg1OC41MWRlZywgIzA2MTgyOCAyOC4wNiUsICMxYTNjNjAgOTMuNTElKTtcXG4kZ3JhZGllbnQtY29sb3ItYmxhY2stNDogbGluZWFyLWdyYWRpZW50KDI3NC4yNWRlZywgIzMzMzMzMyA5LjAxJSwgIzVjNWI1YiAxMDMuMzElKTtcXG4kZ3JhZGllbnQtY29sb3ItYmxhY2stNTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwKSA1MCUsIHJnYmEoMCwgMCwgMCwgMC4xNikgMTAwJSk7XFxuJGdyYWRpZW50LWNvbG9yLXdoaXRlLTI6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpIDEwMCUpO1xcbiRncmFkaWVudC1jb2xvci1ibHVlLTU6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYThhZiAwJSwgIzA0Y2ZkOCAxMDQuNDElKTtcXG4kZ3JhZGllbnQtY29sb3ItZ29sZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjc5MzFhIDAlLCAjZmZjNzFiIDEwNC40MSUpO1xcbiRncmFkaWVudC1jb2xvci1ncmVlbi00OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxZGIxOTMgMCUsICMwOWRhN2EgMTA0LjQxJSk7XFxuXFxuLyogUHJlc2VydmUgbGVnYWN5IHZhcmlhYmxlcyAqL1xcbi8qIFByaW1hcnkgKi9cXG5cXG4kQ09MT1JfQkxBQ0s6ICMwMDAwMDA7XFxuJENPTE9SX0JMQUNLXzI6ICMxZDFmMjA7XFxuJENPTE9SX0JMQUNLXzM6ICMwZTBlMGU7XFxuJENPTE9SX0dSRUVOXzE6ICMzOWIxOWQ7XFxuJENPTE9SX0dSRUVOXzI6ICMyZDlmOTM7XFxuJENPTE9SX0dSRUVOXzM6ICMyMWNlOTk7XFxuJENPTE9SX0dSRUVOXzQ6ICMwMGE3OWU7XFxuJENPTE9SX0dSRUVOXzU6ICM0YmI0YjM7XFxuJENPTE9SX09SQU5HRTogI2ZmOTkzMztcXG4kQ09MT1JfREFSS19PUkFOR0U6ICNmZjg4MDI7XFxuJENPTE9SX1BVUlBMRTogIzRmNjBhZTtcXG4kQ09MT1JfUkVEOiAjZTMxYzRiO1xcbiRDT0xPUl9SRURfMjogI2NjMmUzZDtcXG4kQ09MT1JfUkVEXzM6ICNlYzNmM2Y7XFxuJENPTE9SX0NPUkFMX1JFRDogI2ZmNDQ0ZjtcXG4kQ09MT1JfU0tZX0JMVUU6ICMyMTk2ZjM7XFxuJENPTE9SX1dISVRFOiAjZmZmZmZmO1xcbiRDT0xPUl9CTFVFOiAjMWM1YWUzO1xcblxcbi8vIExpZ2h0IHRoZW1lXFxuJENPTE9SX0xJR0hUX0JMQUNLXzE6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4kQ09MT1JfTElHSFRfQkxBQ0tfMjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiRDT0xPUl9MSUdIVF9CTEFDS18zOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbiRDT0xPUl9MSUdIVF9CTEFDS18zX1NPTElEXzE6ICNkNmQ2ZDY7XFxuJENPTE9SX0xJR0hUX0JMQUNLXzNfU09MSURfMjogI2IzYjNiMztcXG4kQ09MT1JfTElHSFRfQkxBQ0tfNDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG4kQ09MT1JfTElHSFRfQkxBQ0tfNF9TT0xJRDogI2Y0ZjRmNjtcXG4kQ09MT1JfTElHSFRfR1JBWV8xOiAjOTk5Y2FjO1xcbiRDT0xPUl9MSUdIVF9HUkFZXzI6IHJnYmEoMTUzLCAxNTYsIDE3MiwgMC4zMik7XFxuJENPTE9SX0xJR0hUX0dSQVlfMzogI2VhZWNlZDtcXG4kQ09MT1JfTElHSFRfR1JBWV80OiAjNmU2ZTZlO1xcbiRDT0xPUl9MSUdIVF9HUkFZXzU6ICNjMmMyYzI7XFxuJENPTE9SX0xJR0hUX0dSQVlfNjogI2YyZjNmNDtcXG4kQ09MT1JfTElHSFRfR1JFRU5fR1JBRElFTlQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMCwgMTQ4LCAxMTcsIDAuMTYpKTtcXG4kQ09MT1JfTElHSFRfUkVEX0dSQURJRU5UOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDIyNywgMjgsIDc1LCAwLjE2KSk7XFxuJENPTE9SX0xJR0hUX1dISVRFX0dSQURJRU5UOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xcbi8vIERhcmsgdGhlbWVcXG4kQ09MT1JfREFSS19CTEFDS19HUkFESUVOVDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE2LCAxOSwgMzIsIDEpLCByZ2JhKDE2LCAxOSwgMzIsIDApKTtcXG4kQ09MT1JfREFSS19CTFVFXzE6ICMwYjBlMTg7XFxuJENPTE9SX0RBUktfQkxVRV8yOiAjMTAxMzIwO1xcbiRDT0xPUl9EQVJLX0JMVUVfMzogIzE5MWMzMTtcXG4kQ09MT1JfREFSS19CTFVFXzQ6ICMyMDI2NDE7XFxuJENPTE9SX0RBUktfQkxVRV81OiAjMmEzMDUyO1xcbiRDT0xPUl9EQVJLX0JMVUVfNjogIzU1NTk3NTtcXG4kQ09MT1JfREFSS19CTFVFXzc6ICM3ZjgzOTc7XFxuJENPTE9SX0RBUktfQkxVRV84OiByZ2JhKDEyNywgMTMxLCAxNTEsIDAuMyk7XFxuJENPTE9SX0RBUktfR1JFRU5fR1JBRElFTlQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMTYsIDE5LCAzMiwgMCksIHJnYmEoMCwgMTQ4LCAxMTcsIDAuMTYpKTtcXG4kQ09MT1JfREFSS19SRURfR1JBRElFTlQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMTYsIDE5LCAzMiwgMCksIHJnYmEoMjI3LCAyOCwgNzUsIDAuMTYpKTtcXG4kQ09MT1JfREFSS19HUkFZXzE6ICMyODJhMzc7XFxuJENPTE9SX0RBUktfR1JBWV8yOiAjMzAzMzQyO1xcbiRDT0xPUl9EQVJLX0dSQVlfMzogIzU1NTk3NTtcXG4kQ09MT1JfREFSS19HUkFZXzQ6ICM5OTk5OTk7XFxuLyogc3R5bGVsaW50LWVuYWJsZSBjb2xvci1uby1oZXggKi9cXG5cXG4kQk9SREVSX1JBRElVUzogNHB4O1xcbiRCT1JERVJfUkFESVVTXzI6IDhweDtcXG5cXG4kTUFYX0NPTlRBSU5FUl9XSURUSDogMTQ0MHB4O1xcblxcbiRQT1NJVElPTlNfRFJBV0VSX1dJRFRIOiAyNDBweDtcXG4kUE9TSVRJT05TX0RSQVdFUl9NQVJHSU46IDhweDtcXG5cXG4kSEVBREVSX0hFSUdIVDogNDhweDtcXG4kRk9PVEVSX0hFSUdIVDogMzZweDtcXG5cXG4kTU9CSUxFX0hFQURFUl9IRUlHSFQ6IDQwcHg7XFxuJE1PQklMRV9IRUFERVJfRFRSQURFUl9WMl9IRUlHSFQ6IDQwcHg7XFxuJE1PQklMRV9IRUFERVJfRFRSQURFUl9WMl9XSVRIX0JBTk5FUl9IRUlHSFQ6IDEyOHB4O1xcbiRNT0JJTEVfSEVBREVSX0hFSUdIVF9EQVNIQk9BUkQ6IDQ4cHg7XFxuJE1PQklMRV9XUkFQUEVSX0hFQURFUl9IRUlHSFQ6IDQwcHg7XFxuJE1PQklMRV9XUkFQUEVSX0ZPT1RFUl9IRUlHSFQ6IDcwcHg7XFxuXFxuJFNJREVCQVJfV0lEVEg6IDI0MHB4O1xcblxcbi8qIFdhbGxldCBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuJGdyYWRpZW50LWFpcnRtOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYThmZmYgMCUsICMwMDgzZmYgMTAwJSk7XFxuJGdyYWRpZW50LWJhbnhhOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAwMDAgMCUsICM0YWMwYmEgOTYuMzUlKTtcXG4kZ3JhZGllbnQtYml0Y29pbjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjg5ZTMyIDAlLCAjZjc5MzFiIDEwMy4xMiUpO1xcbiRncmFkaWVudC1jcmVkaXQ6IGxpbmVhci1ncmFkaWVudCgyNzQuNzNkZWcsICM0NjQ3NTAgMy44MiUsICMwZTBmMTEgODguNDklKTtcXG4kZ3JhZGllbnQtZHAycDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY0NDRmIDAlLCAjMjExZDFlIDk1LjIyJSk7XFxuJGdyYWRpZW50LWZhc2FwYXk6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y2OTMxYyAwJSwgIzQ4NzNhYyA5NS4yMiUpO1xcbiRncmFkaWVudC1qZXRvbjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY3NjM1IDAlLCAjZmY2NzFmIDEwMCUpO1xcbiRncmFkaWVudC1tYXN0ZXJjYXJkOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlYjAwMWIgMCUsICNmNzllMWIgMTAwJSk7XFxuJGdyYWRpZW50LW5ldGVsbGVyOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM5OGNjNTMgMCUsICM4ZGM2NDAgMTAwJSk7XFxuJGdyYWRpZW50LXBheWxpdnJlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzNTJjYWEgMCUsICM5YTZiZmMgMTAwJSk7XFxuJGdyYWRpZW50LXBheXNhZmU6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2UzMDAxYiAwJSwgIzAwOGFjOSAxMDAlKTtcXG4kZ3JhZGllbnQtcGVyZmVjdG1vbmV5OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMTJjMmMgMCUsICNlZjE1MTUgMTAwJSk7XFxuJGdyYWRpZW50LXNrcmlsbDogbGluZWFyLWdyYWRpZW50KDI3NC43M2RlZywgIzVhMjA1ZCAzLjgyJSwgIzdmMzg4MyA4OC40OSUpO1xcbiRncmFkaWVudC1zdGljcGF5OiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMzY5MzggMCUsICNmMjU4MjIgMTAwJSk7XFxuJGdyYWRpZW50LXZpcnR1YWw6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNjQ0NCAwJSwgI2ZmNDQ0ZiAxMDAlKTtcXG4kZ3JhZGllbnQtdmlzYTogbGluZWFyLWdyYWRpZW50KDI3NC43M2RlZywgIzFhMjA1ZSAzLjgyJSwgIzEyMmQ5NiA4OC40OSUpO1xcbiRncmFkaWVudC13ZWJtb25leTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE3N2FjIDAlLCAjMDA2OGEzIDEwMCUpO1xcblxcbi8qIEFwcCBDYXJkcyBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuJGdyYWRpZW50LXZpcnR1YWw6IGxpbmVhci1ncmFkaWVudCgyNzQuMjVkZWcsICMzMzMzMzMgOS4wMSUsICM1YzViNWIgMTAzLjMxJSk7XFxuJGdyYWRpZW50LXZpcnR1YWwtc3dhcC1mcmVlOiBsaW5lYXItZ3JhZGllbnQoNTguNTFkZWcsICMwNjE4MjggMjguMDYlLCAjMWEzYzYwIDkzLjUxJSk7XFxuXFxuLyogV2FsbGV0cyAqL1xcbiRyZWFkeS1iYW5uZXItYmctY29sb3I6ICNlMmYzZjM7XFxuJHJlYWR5LWJhbm5lci10aWNrLWJnLWNvbG9yOiAjNGFiNGIzO1xcbiR3YWxsZXQtZGVtby1iZy1jb2xvcjogI2ZmZjhmOTtcXG4kd2FsbGV0LWRhcmstZGVtby1iZy1jb2xvcjogIzE0MDUwNjtcXG4kd2FsbGV0LWRlbW8tZGl2aWRlci1jb2xvcjogI2ZmZjBmMTtcXG4kd2FsbGV0LWJveC1zaGFkb3c6IDBweCAxMnB4IDE2cHggLTRweCByZ2JhKDE0LCAxNCwgMTQsIDAuMDgpLCAwcHggNHB4IDZweCAtMnB4IHJnYmEoMTQsIDE0LCAxNCwgMC4wMyk7XFxuJGJ0bi1zaGFkb3c6IDBweCAyNHB4IDI0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDBweCAwcHggMjRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXG4gKiAgIyBTQVNTIE1peGlucyBhbmQgRnVuY3Rpb25zXFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qXFxuICogU0FTUyBpbnRlcnBvbGF0aW9uXFxuICovXFxuLy8gUmVxdWlyZXMgdGhlIGNhbGMtaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB3aGljaCBjYW4gYWxzbyBiZSB1c2VkIGluZGVwZW5kZW50bHlcXG5AZnVuY3Rpb24gY2FsYy1pbnRlcnBvbGF0aW9uKCRtaW4tc2NyZWVuLCAkbWluLXZhbHVlLCAkbWF4LXNjcmVlbiwgJG1heC12YWx1ZSkge1xcbiAgICAkYTogKCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKSAvICgkbWF4LXNjcmVlbiAtICRtaW4tc2NyZWVuKTtcXG4gICAgJGI6ICRtaW4tdmFsdWUgLSAkYSAqICRtaW4tc2NyZWVuO1xcblxcbiAgICAkc2lnbjogJysnO1xcbiAgICBAaWYgKCRiIDwgMCkge1xcbiAgICAgICAgJHNpZ246ICctJztcXG4gICAgICAgICRiOiBhYnMoJGIpO1xcbiAgICB9XFxuICAgIEByZXR1cm4gY2FsYygjeyRhICogMTAwfXZ3ICN7JHNpZ259ICN7JGJ9KTtcXG59XFxuXFxuQG1peGluIGludGVycG9sYXRlKCRwcm9wZXJ0aWVzLCAkbWluLXNjcmVlbiwgJG1heC1zY3JlZW4sICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcXG4gICAgJiB7XFxuICAgICAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xcbiAgICAgICAgICAgICN7JHByb3BlcnR5fTogJG1pbi12YWx1ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtaW4tc2NyZWVuKSB7XFxuICAgICAgICAgICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcXG4gICAgICAgICAgICAgICAgI3skcHJvcGVydHl9OiBjYWxjLWludGVycG9sYXRpb24oJG1pbi1zY3JlZW4sICRtaW4tdmFsdWUsICRtYXgtc2NyZWVuLCAkbWF4LXZhbHVlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWF4LXNjcmVlbikge1xcbiAgICAgICAgICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XFxuICAgICAgICAgICAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLypcXG4gKiBQWCB0byBFTVxcbiAqIEBwYXJhbSAkcHggLSBweCB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcXG4gKiBAcGFyYW0gJGJhc2UgLSBiYXNlIGZvbnQgc2l6ZSAoaW4gYGVtYClcXG4gKiBOb3RlOiAnZW0nIHZhbHVlcyBhcmUgY2FsY3VsYXRlIGJhc2VkIG9uIHRoZSBlbGVtZW50IGZvbnQtc2l6ZVxcbiAqICAgICAgIHRvIHByb3Blcmx5IGNvbnZlcnRzICdweCcgdG8gJ2VtJywgcGxlYXNlIHBhc3MgaW4gdGhlIGVsZW1lbnQgZm9udC1zaXplIHdpdGggaXRcXG4gKiBVc2FnZSBleGFtcGxlOlxcbiAgICBwYWRkaW5nOiBlbSgxNnB4LCAxLjZlbSk7IC8vIGZvbnQtc2l6ZSBpbiAnZW0nXFxuICovXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGJhc2U6ICRCQVNFX0ZPTlRfU0laRSkge1xcbiAgICAkbGlzdDogKCk7XFxuICAgIEBpZiBsZW5ndGgoJHB4KSAhPSAxIHtcXG4gICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRweCkge1xcbiAgICAgICAgICAgICR2YWxfZW06IChudGgoJHB4LCAkaSkgLyAkYmFzZSkgKiAxZW07XFxuICAgICAgICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHZhbF9lbSwgc3BhY2UpO1xcbiAgICAgICAgfVxcbiAgICAgICAgQHJldHVybiAkbGlzdDtcXG4gICAgfSBAZWxzZSB7XFxuICAgICAgICBAcmV0dXJuICgkcHggLyAkYmFzZSkgKiAxZW07XFxuICAgIH1cXG59XFxuXFxuLypcXG4gKiBTZXQgcHJvcGVydHkgYnkgcGFzc2luZyBhIHByb3BlcnR5IG5hbWUsIGFuZCB2YWx1ZXMuXFxuICogQHBhcmFtICRwcm9wZXJ0eSBuYW1lIC0gcGFkZGluZywgbWFyZ2luIGV0Yy5cXG4gKiBAcGFyYW0gJHZhbHVlcyAgICAgICAgLSB2YWx1ZXMgaW4gYHB4YCAoc3BhY2Ugc2VwYXJhdGVkIGZvciBtdWx0aXBsZSB2YWx1ZXMpXFxuICogQHBhcmFtICRmb250LXNpemUgICAgIC0gYmFzZSBmb250LXNpemUgaW4gYGVtYFxcbiAqIFVzYWdlIGV4YW1wbGU6XFxuICAgQGluY2x1ZGUgdG9FbShwYWRkaW5nLCA4cHggMTZweCA4cHgsIDEuNmVtKTtcXG4gKi9cXG5AbWl4aW4gdG9FbSgkcHJvcGVydHksICR2YWx1ZXMsICRmb250LXNpemU6ICRCQVNFX0ZPTlRfU0laRSkge1xcbiAgICAjeyRwcm9wZXJ0eX06IGVtKCR2YWx1ZXMsICRmb250LXNpemUpO1xcbn1cXG5cXG4vKlxcbiAqIEdlbmVyYXRlIHR5cGVmYWNlcyBrZXktdmFsdWUgcGFpciBvZiB2YXJpYWJsZSBuYW1lIGFuZCBjb25maWdcXG4gKiBFeGFtcGxlOlxcbiAgIC0tcGFyYWdyYXBoLWNlbnRlci1ib2xkLWJsYWNrOiAoMTRweCwgY2VudGVyLCBib2xkLCBibGFjaylcXG4gKi9cXG5AZnVuY3Rpb24gZ2VuZXJhdGUtdHlwZWZhY2VzKCkge1xcbiAgICAkdHlwZWZhY2VfbGlzdDogKCk7XFxuICAgIEBlYWNoICRmb250c2l6ZV9uYW1lLCAkc2l6ZSBpbiAkRk9OVF9TSVpFUyB7XFxuICAgICAgICBAZWFjaCAkdGV4dGFsaWduX25hbWUsICR0ZXh0X2FsaWduIGluICRURVhUX0FMSUdOIHtcXG4gICAgICAgICAgICBAZWFjaCAkY29sb3JfbmFtZSwgJGNvbG9yIGluICRGT05UX0NPTE9SUyB7XFxuICAgICAgICAgICAgICAgIEBlYWNoICRmb250d2VpZ2h0X25hbWUsICR3ZWlnaHQgaW4gJEZPTlRfV0VJR0hUUyB7XFxuICAgICAgICAgICAgICAgICAgICAka2V5OiAtLSN7JGZvbnRzaXplX25hbWV9LSN7JHRleHRhbGlnbl9uYW1lfS0jeyRmb250d2VpZ2h0X25hbWV9LSN7JGNvbG9yX25hbWV9O1xcbiAgICAgICAgICAgICAgICAgICAgJHZhbDogKCRzaXplLCAkdGV4dF9hbGlnbiwgJHdlaWdodCwgJGNvbG9yKTtcXG4gICAgICAgICAgICAgICAgICAgICR0eXBlZmFjZTogKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICRrZXk6ICR2YWwsXFxuICAgICAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgICAgICAgICAgICAgJHR5cGVmYWNlX2xpc3Q6IG1hcC1tZXJnZSgkdHlwZWZhY2VfbGlzdCwgJHR5cGVmYWNlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAvLyBAZGVidWcgJHR5cGVmYWNlX2xpc3Q7IC8qIHVuY29tbWVudCB0byBkZWJ1ZyAqL1xcbiAgICBAcmV0dXJuICR0eXBlZmFjZV9saXN0O1xcbn1cXG5cXG4vKlxcbiAqIFNldHMgZm9udC1zaXplLCBmb250LXdlaWdodCwgY29sb3IsIHRleHQtdHJhbnNmb3JtLCB0ZXh0LWFsaWduIGFuZCBsaW5lLWhlaWdodFxcbiAqIFVzYWdlIGV4YW1wbGU6XFxuICAgQGluY2x1ZGUgc2V0VHlwZWZhY2UoMTZweCwgYm9sZCwgYmxhY2ssIHVwcGVyY2FzZSk7XFxuICovXFxuQG1peGluIHNldFR5cGVmYWNlKCRzaXplLCAkYWxpZ24sICR3ZWlnaHQsICRjb2xvdXIsICR0dCkge1xcbiAgICBAaWYgJHNpemUge1xcbiAgICAgICAgZm9udC1zaXplOiAkc2l6ZTtcXG4gICAgfVxcbiAgICBAaWYgJGNvbG91ciB7XFxuICAgICAgICBjb2xvcjogJGNvbG91cjtcXG4gICAgfVxcbiAgICBAaWYgJHdlaWdodCB7XFxuICAgICAgICBmb250LXdlaWdodDogJHdlaWdodDtcXG4gICAgfVxcbiAgICBAaWYgJHR0IHtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiAkdHQ7XFxuICAgIH1cXG4gICAgQGlmICRhbGlnbiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiAkYWxpZ247XFxuICAgIH1cXG4gICAgQGlmICRzaXplID09IDEuNnJlbSB7XFxuICAgICAgICBsaW5lLWhlaWdodDogbWFwLWdldCgkbWFwOiAkTElORUhFSUdIVFMsICRrZXk6ICdsYXJnZScpO1xcbiAgICB9IEBlbHNlIGlmICRzaXplID09IDEuNHJlbSB7XFxuICAgICAgICBsaW5lLWhlaWdodDogbWFwLWdldCgkbWFwOiAkTElORUhFSUdIVFMsICRrZXk6ICdtZWRpdW0nKTtcXG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSAxLjJyZW0ge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IG1hcC1nZXQoJG1hcDogJExJTkVIRUlHSFRTLCAka2V5OiAnc21hbGwnKTtcXG4gICAgfSBAZWxzZSBpZiAkc2l6ZSA9PSAxcmVtIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCRtYXA6ICRMSU5FSEVJR0hUUywgJGtleTogJ3hzbWFsbCcpO1xcbiAgICB9IEBlbHNlIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiB1bnNldDtcXG4gICAgfVxcbn1cXG5cXG4vKlxcbiAqIFNldCB0eXBlZmFjZXMgYnkgcGFzc2luZyBhIHR5cGVmYWNlIHZhcmlhYmxlIG5hbWVcXG4gKiBAcGFyYW0gJHZhciAgIC0gdHlwZWZhY2UgdmFyaWFibGVcXG4gKiBAcGFyYW0gJHR0ICAgIC0gdGV4dC10cmFuc2Zvcm0gcHJvcGVydHlcXG4gKiBAcGFyYW0gJGFsaWduIC0gdGV4dC1hbGlnbiBwcm9wZXJ0eVxcbiAqIFVzYWdlIGV4YW1wbGU6XFxuICAgQGluY2x1ZGUgdHlwZWZhY2UoLS1wYXJhZ3JhcGgtYm9sZC1ibGFjaywgdXBwZXJjYXNlLCBjZW50ZXIpO1xcbiAqL1xcbkBtaXhpbiB0eXBlZmFjZSgkdmFyLCAkdHQ6IG5vbmUpIHtcXG4gICAgJHR5cGVmYWNlX2NvbmZpZzogbWFwLWdldChcXG4gICAgICAgICRtYXA6ICRUWVBFRkFDRVNfTElTVCxcXG4gICAgICAgICRrZXk6ICR2YXIsXFxuICAgICk7XFxuXFxuICAgICRzaXplOiBudGgoJHR5cGVmYWNlX2NvbmZpZywgMSk7IC8vIGZvbnQtc2l6ZVxcbiAgICAkYWxpZ246IG50aCgkdHlwZWZhY2VfY29uZmlnLCAyKTsgLy8gdGV4dC1hbGlnblxcbiAgICAkd2VpZ2h0OiBudGgoJHR5cGVmYWNlX2NvbmZpZywgMyk7IC8vIGZvbnQtd2VpZ2h0XFxuICAgICRjb2xvcjogbnRoKCR0eXBlZmFjZV9jb25maWcsIDQpOyAvLyBjb2xvclxcbiAgICBAaW5jbHVkZSBzZXRUeXBlZmFjZSgkc2l6ZSwgJGFsaWduLCAkd2VpZ2h0LCAkY29sb3IsICR0dCk7XFxufVxcblxcbi8qXFxuICogUmFuZ2UgU2xpZGVyIFRodW1iIHN0eWxpbmcgaXMgc2V0IGhlcmVcXG4gKi9cXG5AbWl4aW4gdGh1bWJTdHlsZSgpIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDAsIDAsIDAsIDApO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuNWVtIHZhcigtLXN0YXRlLWhvdmVyKTtcXG4gICAgfVxcbn1cXG5cXG4vKlxcbiAqIFNWRyBpY29ucyBjb2xvcnNcXG4gKi9cXG5AbWl4aW4gY29sb3JJY29uKCRjb2xvcnMuLi4pIHtcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGNvbG9ycykge1xcbiAgICAgICAgLyogcG9zdGNzcy1iZW0tbGludGVyOiBpZ25vcmUgKi9cXG4gICAgICAgIC5jb2xvciN7JGl9LWZpbGwge1xcbiAgICAgICAgICAgIGZpbGw6IG50aCgkY29sb3JzLCAkaSk7XFxuICAgICAgICB9XFxuICAgICAgICAvKiBwb3N0Y3NzLWJlbS1saW50ZXI6IGlnbm9yZSAqL1xcbiAgICAgICAgLmNvbG9yI3skaX0tc3Ryb2tlIHtcXG4gICAgICAgICAgICBzdHJva2U6IG50aCgkY29sb3JzLCAkaSk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLypcXG4gKiBCYXIgU3Bpbm5lciBBbmltYXRpb25cXG4gKiBAcGFyYW0gJGNvdW50ICAgIC0gbnVtYmVyIG9mIGJhcnNcXG4gKiBAcGFyYW0gJGR1cmF0aW9uIC0gZHVyYXRpb24gb2YgYW5pbWF0aW9uXFxuICogQHBhcmFtICRwaGFzZSAgICAtIGVhY2ggYmFyIHBoYXNlIGNoYW5nZSBkZWxheVxcbiAqIFVzYWdlIGV4YW1wbGU6XFxuICAgQGluY2x1ZGUgY3JlYXRlQmFyc3Bpbm5lckFuaW1hdGlvbig1LCAxLjJzLCAwLDEpO1xcbiAqL1xcbkBtaXhpbiBjcmVhdGVCYXJzcGlubmVyQW5pbWF0aW9uKCRjb3VudCwgJGR1cmF0aW9uLCAkcGhhc2UpIHtcXG4gICAgYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgJGR1cmF0aW9uIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcblxcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRjb3VudCB7XFxuICAgICAgICAmLS0jeyRpfSB7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtJGR1cmF0aW9uICsgKCgkaSAtIDEpICogJHBoYXNlKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vKlxcbiAqIFRvb2x0aXAgY29sb3JzXFxuICogQHBhcmFtICRjb2xvciAtIGNvbG9yIHByb3BlcnR5XFxuICogVXNhZ2UgZXhhbXBsZTpcXG4gICBAaW5jbHVkZSB0b29sdGlwQ29sb3IoJENPTE9SX1JFRCk7XFxuICovXFxuQG1peGluIHRvb2x0aXBDb2xvcigkY29sb3IpIHtcXG4gICAgJjpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xcbiAgICB9XFxuICAgICY6YWZ0ZXIsXFxuICAgICZbZGF0YS10b29sdGlwLXBvcz0ndG9wJ106YWZ0ZXIge1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICAgICZbZGF0YS10b29sdGlwLXBvcz0ncmlnaHQnXTphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICAgICZbZGF0YS10b29sdGlwLXBvcz0nbGVmdCddOmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRjb2xvcjtcXG4gICAgfVxcbiAgICAmW2RhdGEtdG9vbHRpcC1wb3M9J2JvdHRvbSddOmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yO1xcbiAgICB9XFxufVxcblxcbi8qXFxuICogQ29udmVydCBUb29sdGlwIGNvbG9yc1xcbiAqIEBwYXJhbSAkY29sb3IgLSBjc3MgY29sb3IgcHJvcGVydHlcXG4gKiBVc2FnZSBleGFtcGxlOlxcbiAgIEBpbmNsdWRlIGNvbnZlcnRUb29sdGlwQ29sb3IodmFyKC0tc3RhdHVzLWRlZmF1bHQpKTtcXG4gKi9cXG5AbWl4aW4gY29udmVydFRvb2x0aXBDb2xvcigkY29sb3IpIHtcXG4gICAgJjpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xcbiAgICB9XFxuICAgICY6YWZ0ZXIsXFxuICAgICZbZGF0YS10b29sdGlwLXBvcz0ndG9wJ106YWZ0ZXIge1xcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICAgICZbZGF0YS10b29sdGlwLXBvcz0ncmlnaHQnXTphZnRlciB7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJGNvbG9yO1xcbiAgICB9XFxuICAgICZbZGF0YS10b29sdGlwLXBvcz0nbGVmdCddOmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRjb2xvcjtcXG4gICAgfVxcbiAgICAmW2RhdGEtdG9vbHRpcC1wb3M9J2JvdHRvbSddOmFmdGVyIHtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yO1xcbiAgICB9XFxufVxcblxcbi8qXFxuICAgIENvbnN0YW50c1xcbiovXFxuJEZPTlRfU1RBQ0s6ICdJQk0gUGxleCBTYW5zJywgc2Fucy1zZXJpZjtcXG4kQkFTRV9GT05UX1NJWkU6IDEwcHg7XFxuXFxuLypcXG4gICAgVmFyaWFibGVzXFxuKi9cXG4kRk9OVF9TSVpFUzogKFxcbiAgICAneGhlYWRpbmcnIDMuMnJlbSxcXG4gICAgJ2hlYWRpbmcnIDNyZW0sXFxuICAgICdsYXJnZScgMi44cmVtLFxcbiAgICAndGl0bGUnIDEuNnJlbSxcXG4gICAgJ3BhcmFncmFwaCcgMS40cmVtLFxcbiAgICAnc21hbGwnIDEuMnJlbSxcXG4gICAgJ3hzbWFsbCcgMXJlbSxcXG4gICAgJ3h4c21hbGwnIDAuOHJlbSxcXG4gICAgJ3h4eHNtYWxsJyAwLjZyZW1cXG4pO1xcblxcbiRGT05UX0NPTE9SUzogKFxcbiAgICAnYWN0aXZlJyB2YXIoLS10ZXh0LWNvbG9yZWQtYmFja2dyb3VuZCksXFxuICAgICdwcm9taW5lbnQnIHZhcigtLXRleHQtcHJvbWluZW50KSxcXG4gICAgJ2JsYWNrJyB2YXIoLS10ZXh0LWdlbmVyYWwpLFxcbiAgICAnZ3JleScgdmFyKC0tdGV4dC1sZXNzLXByb21pbmVudCksXFxuICAgICdkaXNhYmxlZCcgdmFyKC0tdGV4dC1kaXNhYmxlZCksXFxuICAgICdncmVlbicgdmFyKC0tdGV4dC1wcm9maXQtc3VjY2VzcyksXFxuICAgICdyZWQnIHZhcigtLXRleHQtbG9zcy1kYW5nZXIpXFxuKTtcXG5cXG4kRk9OVF9XRUlHSFRTOiAoJ2JvbGQnIDcwMCwgJ3NlbWlib2xkJyA1MDAsICdub3JtYWwnIDQwMCwgJ2xpZ2h0JyAzMDApO1xcblxcbiRURVhUX0FMSUdOOiAoJ2NlbnRlcicgY2VudGVyLCAnbGVmdCcgc3RhcnQsICdyaWdodCcgZW5kKTtcXG5cXG4kTElORUhFSUdIVFM6IChcXG4gICAgJ2xhcmdlJzogMS43NSxcXG4gICAgJ21lZGl1bSc6IDEuNSxcXG4gICAgJ3NtYWxsJzogMS4yNSxcXG4gICAgJ3hzbWFsbCc6IDEuNCxcXG4pO1xcblxcbi8qXFxuICAgIExpc3Qgb2YgYWxsIHR5cGVmYWNlcyB2YXJpYWJsZXMgaW4gdGhlIGZvcm1hdDogLS0kRk9OVF9TSVpFUy0kVEVYVF9BTElHTi0kRk9OVF9XRUlHSFRTLUNPTE9SUy5cXG4gICAgU2VlICRGT05UX1NJWkVTLCAkVEVYVF9BTElHTiwgJEZPTlRfV0VJR0hUUywgJENPTE9SUyBtYXBzIGFib3ZlIGZvciByZWZlcmVuY2VzLlxcbiAgICBWYXJpYWJsZXMgbmFtZSBleGFtcGxlOiAtLXRpdGxlLWNlbnRlci1zZW1pYm9sZC1yZWRcXG4gKi9cXG4kVFlQRUZBQ0VTX0xJU1Q6IGdlbmVyYXRlLXR5cGVmYWNlcygpO1xcblxcbi8qXFxuICAgIHRvIHVzZSBzdHlsZXMgd2l0aG91dCBtb2RpZmllciBjbGFzcyBvbiAuaW5saW5lLWljb25cXG4gICAgdXNlIEBleHRlbmRcXG5cXG4gICAgZS5nLiBzdHlsZSBpY29uIG9uIHBhcmVudCBob3ZlcjpcXG4gICAgICAgIGE6aG92ZXIgLmlubGluZS1pY29uIHtcXG4gICAgICAgICAgICBAZXh0ZW5kICVpbmxpbmUtaWNvbi1hY3RpdmU7XFxuICAgICAgICB9XFxuKi9cXG5cXG4laW5saW5lLWljb24ge1xcbiAgICBAaW5jbHVkZSBjb2xvckljb24odmFyKC0tdGV4dC1nZW5lcmFsKSwgbm9uZSk7XFxuXFxuICAgICYuYWN0aXZlLFxcbiAgICAmLWFjdGl2ZSB7XFxuICAgICAgICBAaW5jbHVkZSBjb2xvckljb24odmFyKC0tdGV4dC1wcm9taW5lbnQpLCBub25lKTtcXG4gICAgfVxcbiAgICAmLmRpc2FibGVkLFxcbiAgICAmLWRpc2FibGVkIHtcXG4gICAgICAgIEBpbmNsdWRlIGNvbG9ySWNvbih2YXIoLS10ZXh0LWRpc2FibGVkKSwgbm9uZSk7XFxuICAgIH1cXG4gICAgJi53aGl0ZSxcXG4gICAgJi13aGl0ZSB7XFxuICAgICAgICBAaW5jbHVkZSBjb2xvckljb24odmFyKC0tdGV4dC1wcm9taW5lbnQpKTtcXG4gICAgfVxcbiAgICAmLmJvcmRlcl9ob3Zlcl9jb2xvcixcXG4gICAgJi1ib3JkZXJfaG92ZXJfY29sb3Ige1xcbiAgICAgICAgQGluY2x1ZGUgY29sb3JJY29uKHZhcigtLXRleHQtcHJvbWluZW50KSk7XFxuICAgIH1cXG4gICAgJi5zZWNvbmRhcnksXFxuICAgICYtc2Vjb25kYXJ5IHtcXG4gICAgICAgIEBpbmNsdWRlIGNvbG9ySWNvbih2YXIoLS10ZXh0LWxlc3MtcHJvbWluZW50KSk7XFxuICAgIH1cXG59XFxuXFxuLyoqXFxuICogRGVmaW5lIEJyZWFrcG9pbnRzIGhlcmUuXFxuICovXFxuJG1vYmlsZS13aWR0aDogMzIwcHg7XFxuJHRhYmxldC13aWR0aDogNzY4cHg7XFxuJGRlc2t0b3Atd2lkdGg6IDEwMjRweDtcXG5cXG5AbWl4aW4gdGFibGV0IHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRoIC0gMXB4fSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIGRlc2t0b3Age1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGVza3RvcC13aWR0aH0pIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiB0YWJsZXQtZG93biB7XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyR0YWJsZXQtd2lkdGh9KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gdGFibGV0LXVwIHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHRhYmxldC13aWR0aH0pIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBtb2JpbGUtdXAge1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skbW9iaWxlLXdpZHRofSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIG1vYmlsZSB7XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtb2JpbGUtd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skdGFibGV0LXdpZHRoIC0gMX0pIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRtb2JpbGUtd2lkdGh9KSBhbmQgKG1heC13aWR0aDogI3skZGVza3RvcC13aWR0aCAtIDF9KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiB0b3VjaC1kZXZpY2Uge1xcbiAgICAvLyBhZGQgY3NzIGludGVyYWN0aW9uIG1lZGlhIHF1ZXJ5IHRvIGRldGVjdCB0b3VjaCBkZXZpY2VzXFxuICAgIC8vIHJlZmVyIHRvOiBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PWNzcy1tZWRpYS1pbnRlcmFjdGlvblxcbiAgICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIG1vYmlsZS10YWJsZXQtbWl4IHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1vYmlsZS13aWR0aH0pIGFuZCAobWF4LXdpZHRoOiAjeyRkZXNrdG9wLXdpZHRoIC0gMXB4fSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuLyoqIE5lZWQgdG8gYWRkIG5ldyBicmVha3BvaW50cyBmb3IgbWl4aW5zICovXFxuJG1heC1tb2JpbGUtd2lkdGg6IDYwMHB4O1xcbiRtaW4tZGVza3RvcC13aWR0aDogMTI4MHB4O1xcblxcbkBtaXhpbiBtb2JpbGUtc2NyZWVuIHtcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JG1heC1tb2JpbGUtd2lkdGh9KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gdGFibGV0LXNjcmVlbiB7XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtYXgtbW9iaWxlLXdpZHRoICsgMX0pIGFuZCAobWF4LXdpZHRoOiAjeyRtaW4tZGVza3RvcC13aWR0aCAtIDF9KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gZGVza3RvcC1zY3JlZW4ge1xcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3skbWluLWRlc2t0b3Atd2lkdGh9KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gbW9iaWxlLW9yLXRhYmxldC1zY3JlZW4ge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skbWluLWRlc2t0b3Atd2lkdGggLSAxfSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHRhYmxldC1vci1kZXNrdG9wLXNjcmVlbiB7XFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtYXgtbW9iaWxlLXdpZHRoICsgMX0pIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiB0YWJsZXQtcG9ydHJhaXQtc2NyZWVuIHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JG1heC1tb2JpbGUtd2lkdGggKyAxfSkgYW5kIChtYXgtd2lkdGg6ICN7JG1pbi1kZXNrdG9wLXdpZHRoIC0gMX0pIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gbW9iaWxlLW9yLXRhYmxldC1sYW5kc2NhcGUge1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICN7JG1pbi1kZXNrdG9wLXdpZHRoIC0gMX0pIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuLnAycC1hcHAtbG9hZGVyIHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[4]!./src/pages/index.scss\n"
                        );

                        /***/
                    },

                /***/ '../../node_modules/css-loader/dist/runtime/api.js':
                    /*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
                    /***/ module => {
                        'use strict';
                        eval(
                            '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === "string") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, ""]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanM/M2MxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/css-loader/dist/runtime/api.js\n'
                        );

                        /***/
                    },

                /***/ '../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js':
                    /*!****************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \****************************************************************************/
                    /***/ module => {
                        'use strict';
                        eval(
                            '\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function cssWithMappingToString(item) {\n  var _item = _slicedToArray(item, 4),\n      content = _item[1],\n      cssMapping = _item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === "function") {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n    var sourceMapping = "/*# ".concat(data, " */");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join("\\n");\n  }\n\n  return [content].join("\\n");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3AycC8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcz83NDc3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\n'
                        );

                        /***/
                    },

                /***/ './src/pages/index.scss':
                    /*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
                    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                        eval(
                            'var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[4]!./index.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[2].use[4]!./src/pages/index.scss");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === \'string\') {\n              content = [[module.id, content, \'\']];\n            }\n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9wMnAvLi9zcmMvcGFnZXMvaW5kZXguc2Nzcz80ZDg4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVs0XSEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.scss\n'
                        );

                        /***/
                    },

                /***/ '../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
                    /*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
                    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
                        'use strict';
                        eval(
                            "\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcz9iYzFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\n"
                        );

                        /***/
                    },

                /***/ './src/pages/index.tsx':
                    /*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
                    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                        'use strict';
                        eval(
                            '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index.scss");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar App = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | p2p-app */[__webpack_require__.e("defaultVendors-node_modules_deriv_components_utils_helper_js-node_modules_crc-32_crc32_js-nod-eab848"), __webpack_require__.e("p2p-app-components_src_hooks_i"), __webpack_require__.e("p2p-app-n"), __webpack_require__.e("p2p-app-src_h"), __webpack_require__.e("p2p-app-src_s"), __webpack_require__.e("p2p-app-src_utils_a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app */ "./src/pages/app.jsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, {\n    className: "p2p-app-loader"\n  });\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvcDJwLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlTGF6eUxvYWRlciwgbW9kdWxlTG9hZGVyIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBBcHAgPSBtYWtlTGF6eUxvYWRlcihcbiAgICAoKSA9PiBtb2R1bGVMb2FkZXIoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicDJwLWFwcFwiLCB3ZWJwYWNrUHJlbG9hZDogdHJ1ZSAqLyAnLi9hcHAnKSksXG4gICAgKCkgPT4gPExvYWRpbmcgY2xhc3NOYW1lPSdwMnAtYXBwLWxvYWRlcicgLz5cbikoKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n'
                        );

                        /***/
                    },

                /***/ '@deriv-com/analytics':
                    /*!***************************************!*\
  !*** external "@deriv-com/analytics" ***!
  \***************************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_com_analytics__;

                        /***/
                    },

                /***/ '@deriv/api':
                    /*!*****************************!*\
  !*** external "@deriv/api" ***!
  \*****************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_api__;

                        /***/
                    },

                /***/ '@deriv/components':
                    /*!************************************!*\
  !*** external "@deriv/components" ***!
  \************************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

                        /***/
                    },

                /***/ '@deriv/hooks':
                    /*!*******************************!*\
  !*** external "@deriv/hooks" ***!
  \*******************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_hooks__;

                        /***/
                    },

                /***/ '@deriv/shared':
                    /*!********************************!*\
  !*** external "@deriv/shared" ***!
  \********************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

                        /***/
                    },

                /***/ '@deriv/stores':
                    /*!********************************!*\
  !*** external "@deriv/stores" ***!
  \********************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_stores__;

                        /***/
                    },

                /***/ '@deriv/translations':
                    /*!**************************************!*\
  !*** external "@deriv/translations" ***!
  \**************************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

                        /***/
                    },

                /***/ formik:
                    /*!*************************!*\
  !*** external "formik" ***!
  \*************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE_formik__;

                        /***/
                    },

                /***/ 'lodash.debounce':
                    /*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_debounce__;

                        /***/
                    },

                /***/ 'prop-types':
                    /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

                        /***/
                    },

                /***/ react:
                    /*!************************!*\
  !*** external "react" ***!
  \************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

                        /***/
                    },

                /***/ 'react-dom':
                    /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

                        /***/
                    },

                /***/ 'react-router':
                    /*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
                    /***/ module => {
                        'use strict';
                        module.exports = __WEBPACK_EXTERNAL_MODULE_react_router__;

                        /***/
                    },

                /***/ 'react-router-dom':
                    /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
                    /***/ module => {
                        'use strict';
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
                        'p2p/js/p2p.' +
                        chunkId +
                        '.' +
                        {
                            404: '4ac5e7538aff30e65ca8',
                            'defaultVendors-node_modules_deriv_components_utils_helper_js-node_modules_crc-32_crc32_js-nod-eab848':
                                'a89c1bca24beb51bac88',
                            'p2p-app-components_src_hooks_i': '83405f262fafda47e16b',
                            'p2p-app-n': '13dc7944e76f05564cc2',
                            'p2p-app-src_h': '542b96ecc52acd379f82',
                            'p2p-app-src_s': '6cbe5788b057c5b37a8b',
                            'p2p-app-src_utils_a': 'b102293c12b6829c2c56',
                            'node_modules_sendbird_chat_lib___bundle-6af20da9_js': '38822167572c09c16693',
                            'node_modules_sendbird_chat_lib___bundle-7c3d40f4_js': '005f24b4cc291cb538c9',
                            'node_modules_sendbird_chat_lib___bundle-46d64517_js': '2bc082f0381a7bf73a87',
                            'ad-cancel-modal': '140c30add0d8743deea3',
                            'ad-created-modal': '16560a1a3999578ab561',
                            'ad-create-edit-error-modal': '96f338de47160636c10a',
                            'add-payment-method-error-modal': 'ea883de44661517821bb',
                            'ad-error-tooltip-modal': '913ac4c426d590d40d7a',
                            'ad-visibility-error-modal': '09a8c672ae375528d8e6',
                            'buy-sell-modal': '7665e8cdd96a16777d7f',
                            'block-user-filter-modal': '144170d3ce10d0a5c31f',
                            'block-user-modal': 'f40937955d594660802b',
                            'business-hour-modal': '18314a0865ad17c0233e',
                            'cancel-add-payment-method-modal': 'cc8bf13b17c5416e46ff',
                            'cancel-edit-payment-method-modal': '08d1bf0211b199270dbf',
                            'confirm-delete-payment-method-modal': '5c57792fbe0b1a57e15f',
                            'copy-advert-modal': '274516b3324ad66b8def',
                            'create-ad-add-payment-method-modal': 'b772b0e5426496ba2f72',
                            'currency-selector-modal': 'dc8948ce693d0c2214cc',
                            'daily-limit-modal': '5b1d40b30acb84f233b2',
                            'delete-payment-method-confirmation-modal': 'aa2b184aa470370429e7',
                            'delete-payment-method-error-modal': '30ff8a23e9f2c48816a9',
                            'edit-ad-cancel-modal': 'f74d7b4617b68a6d04fc',
                            'email-link-expired-modal': '7c87a3cbedede9466e8e',
                            'email-link-verified-modal': '6ba0d44f9a4977004dce',
                            'email-verification-modal': '38cd999847bfe340bcfe',
                            'error-modal': '1e1cfe08de82f5aae7bd',
                            'filter-modal': 'd7b9e613ec7ed2350311',
                            'invalid-verification-link-modal': 'c8f6c10e8bfcd05b104c',
                            'leave-page-modal': '67a356044e790df4112a',
                            'loading-modal': 'c33792b35573baeb626b',
                            'market-rate-change-error-modal': '3a078f675738ccf80e74',
                            'my-ads-delete-modal': '206209e1b6fbf6ac2796',
                            'my-ads-delete-error-modal': 'a0cc7fac4757bed45102',
                            'my-ads-floating-rate-switch-modal': '5afe7efc64b567eaa392',
                            'my-profile-balance-modal': '42ed45c1861224c72f29',
                            'nickname-modal': '54076868fdc1a1f26b28',
                            'order-details-cancel-modal': 'dde41c21517611a558a1',
                            'defaultVendors-node_modules_react-dropzone_dist_es_index_js-node_modules_react-transition-gro-6edbe2':
                                '18776dd5ec20c76097f9',
                            'order-details-confirm-modal': 'bb62a512e7a8c4b7d99c',
                            'order-time-tooltip-modal': 'a9177c78eea7d7fd952e',
                            'preferred-countries-modal': 'a4ff7b2ebca62bf445c9',
                            'quick-add-modal': '7401671422057f5dc445',
                            'rating-modal': '6893610b6ec47afeda07',
                            'recommended-modal': 'ca07c89725e3604a1c1c',
                            'defaultVendors-node_modules_html2canvas_dist_html2canvas_js-node_modules_qrcode_react_lib_esm-c85f85':
                                '11b7dc06d55758c1ca19',
                            'share-my-ads-modal': '46bd64ed70b9ba22eb81',
                            'src_components_routes_route-with-sub-routes_tsx': '93ba9142bd2c03597483',
                            'two-month-picker': '713e35508f6cc902c8b7',
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
                /******/ var dataWebpackPrefix = '@deriv/p2p:';
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
                /******/ var chunkLoadingGlobal = (self['webpackChunk_deriv_p2p'] =
                    self['webpackChunk_deriv_p2p'] || []);
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
            /******/ // module factories are used so entry inlining is disabled
            /******/ // startup
            /******/ // Load entry module and return exports
            /******/ var __webpack_exports__ = __webpack_require__('./src/pages/index.tsx');
            /******/ __webpack_exports__ = __webpack_exports__['default'];
            /******/
            /******/ return __webpack_exports__;
            /******/
        })();
    }
);
