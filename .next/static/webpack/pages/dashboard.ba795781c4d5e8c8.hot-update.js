"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        as: \"header\",\n        w: \"100%\",\n        maxWidth: 1080,\n        h: \"20\",\n        mx: \"auto\",\n        mt: \"4\",\n        px: \"6\",\n        align: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                fontSize: \"3xl\",\n                fontWeight: \"bold\",\n                \"letter-spacing\": \"tight\" //deixa as fonts um pouco mais grudadas\n                ,\n                w: \"64\",\n                children: [\n                    \"DashGo\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        as: \"span\",\n                        ml: \"1\",\n                        color: \"pink.500\",\n                        children: \".\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                as: \"label\",\n                flex: \"1\",\n                py: \"4\",\n                px: \"8\",\n                ml: \"6\",\n                maxWidth: 400,\n                alignSelf: \"center\",\n                color: \"gray-200\",\n                position: \"relative\",\n                bg: \"gray.800\",\n                borderRadius: \"full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                    color: \"gray.50\",\n                    variables: \"unstyled\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBRzVDLFNBQVNHLE1BQU0sR0FBRyxDQUFDO0lBQ3hCLE1BQU0sNkVBQ0hILGtEQUFJO1FBQ0xJLEVBQUUsRUFBQyxDQUFRO1FBQ1hDLENBQUMsRUFBQyxDQUFNO1FBQ1JDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLENBQUMsRUFBQyxDQUFJO1FBQ05DLEVBQUUsRUFBQyxDQUFNO1FBQ1RDLEVBQUUsRUFBQyxDQUFHO1FBQ05DLEVBQUUsRUFBQyxDQUFHO1FBQ05DLEtBQUssRUFBQyxDQUFROzt3RkFFWFQsa0RBQUk7Z0JBQ0hVLFFBQVEsRUFBQyxDQUFLO2dCQUNkQyxVQUFVLEVBQUMsQ0FBTTtnQkFDakJDLENBQWMsaUJBQUMsQ0FBTyxNQUFDLENBQXVDOztnQkFDOURULENBQUMsRUFBQyxDQUFJOztvQkFDUCxDQUVDO2dHQUFDSCxrREFBSTt3QkFBQ0UsRUFBRSxFQUFDLENBQU07d0JBQUNXLEVBQUUsRUFBQyxDQUFHO3dCQUFDQyxLQUFLLEVBQUMsQ0FBVTtrQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7d0ZBRzFDaEIsa0RBQUk7Z0JBQ0RJLEVBQUUsRUFBQyxDQUFPO2dCQUNWYSxJQUFJLEVBQUMsQ0FBRztnQkFDUkMsRUFBRSxFQUFDLENBQUc7Z0JBQ05SLEVBQUUsRUFBQyxDQUFHO2dCQUNOSyxFQUFFLEVBQUMsQ0FBRztnQkFDTlQsUUFBUSxFQUFFLEdBQUc7Z0JBQ2JhLFNBQVMsRUFBQyxDQUFRO2dCQUNsQkgsS0FBSyxFQUFDLENBQVU7Z0JBQ2hCSSxRQUFRLEVBQUMsQ0FBVTtnQkFDbkJDLEVBQUUsRUFBQyxDQUFVO2dCQUNiQyxZQUFZLEVBQUMsQ0FBTTtzR0FFbEJyQixtREFBSztvQkFDSmUsS0FBSyxFQUFDLENBQVM7b0JBQ2ZPLFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQyxDQUFDO0tBMUNlcEIsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4P2E2OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSW5wdXQsIFRleHR9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgIGFzPVwiaGVhZGVyXCJcclxuICAgIHc9JzEwMCUnXHJcbiAgICBtYXhXaWR0aD17MTA4MH1cclxuICAgIGg9JzIwJ1xyXG4gICAgbXg9XCJhdXRvXCJcclxuICAgIG10PSc0J1xyXG4gICAgcHg9JzYnXHJcbiAgICBhbGlnbj0nY2VudGVyJ1xyXG4gICAgPlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGZvbnRTaXplPVwiM3hsXCJcclxuICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc9XCJ0aWdodFwiIC8vZGVpeGEgYXMgZm9udHMgdW0gcG91Y28gbWFpcyBncnVkYWRhc1xyXG4gICAgICAgIHc9XCI2NFwiXHJcbiAgICAgID5cclxuICAgICAgICBEYXNoR29cclxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBtbD1cIjFcIiBjb2xvcj1cInBpbmsuNTAwXCI+LjwvVGV4dD5cclxuICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgPEZsZXhcclxuICAgICAgICAgIGFzPVwibGFiZWxcIlxyXG4gICAgICAgICAgZmxleD1cIjFcIlxyXG4gICAgICAgICAgcHk9XCI0XCJcclxuICAgICAgICAgIHB4PVwiOFwiXHJcbiAgICAgICAgICBtbD1cIjZcIlxyXG4gICAgICAgICAgbWF4V2lkdGg9ezQwMH1cclxuICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXHJcbiAgICAgICAgICBjb2xvcj1cImdyYXktMjAwXCJcclxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgYmc9XCJncmF5LjgwMFwiXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS41MFwiXHJcbiAgICAgICAgICAgIHZhcmlhYmxlcz1cInVuc3R5bGVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJGbGV4IiwiSW5wdXQiLCJUZXh0IiwiSGVhZGVyIiwiYXMiLCJ3IiwibWF4V2lkdGgiLCJoIiwibXgiLCJtdCIsInB4IiwiYWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXItc3BhY2luZyIsIm1sIiwiY29sb3IiLCJmbGV4IiwicHkiLCJhbGlnblNlbGYiLCJwb3NpdGlvbiIsImJnIiwiYm9yZGVyUmFkaXVzIiwidmFyaWFibGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ })

});