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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        as: \"header\",\n        w: \"100%\",\n        maxWidth: 1080,\n        h: \"20\",\n        mx: \"auto\",\n        mt: \"4\",\n        px: \"6\",\n        align: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            fontSize: \"3xl\",\n            fontWeight: \"bold\",\n            \"letter-spacing\": \"tight\" //deixa as fonts um pouco mais grudadas\n            ,\n            w: \"64\",\n            children: [\n                \"DashGo\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    as: \"span\",\n                    ml: \"1\",\n                    color: \"pink.500\",\n                    children: \".\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                    as: \"label\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Header.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRDO0FBR3JDLFNBQVNFLE1BQU0sR0FBRyxDQUFDO0lBQ3hCLE1BQU0sNkVBQ0hGLGtEQUFJO1FBQ0xHLEVBQUUsRUFBQyxDQUFRO1FBQ1hDLENBQUMsRUFBQyxDQUFNO1FBQ1JDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLENBQUMsRUFBQyxDQUFJO1FBQ05DLEVBQUUsRUFBQyxDQUFNO1FBQ1RDLEVBQUUsRUFBQyxDQUFHO1FBQ05DLEVBQUUsRUFBQyxDQUFHO1FBQ05DLEtBQUssRUFBQyxDQUFROzhGQUVYVCxrREFBSTtZQUNIVSxRQUFRLEVBQUMsQ0FBSztZQUNkQyxVQUFVLEVBQUMsQ0FBTTtZQUNqQkMsQ0FBYyxpQkFBQyxDQUFPLE1BQUMsQ0FBdUM7O1lBQzlEVCxDQUFDLEVBQUMsQ0FBSTs7Z0JBQ1AsQ0FFQzs0RkFBQ0gsa0RBQUk7b0JBQUNFLEVBQUUsRUFBQyxDQUFNO29CQUFDVyxFQUFFLEVBQUMsQ0FBRztvQkFBQ0MsS0FBSyxFQUFDLENBQVU7OEJBQUMsQ0FBQzs7Ozs7OzRGQUd4Q2Ysa0RBQUk7b0JBQ0hHLEVBQUUsRUFBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQixDQUFDO0tBOUJlRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3g/YTY5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBUZXh0fSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICBhcz1cImhlYWRlclwiXHJcbiAgICB3PScxMDAlJ1xyXG4gICAgbWF4V2lkdGg9ezEwODB9XHJcbiAgICBoPScyMCdcclxuICAgIG14PVwiYXV0b1wiXHJcbiAgICBtdD0nNCdcclxuICAgIHB4PSc2J1xyXG4gICAgYWxpZ249J2NlbnRlcidcclxuICAgID5cclxuICAgICAgPFRleHRcclxuICAgICAgICBmb250U2l6ZT1cIjN4bFwiXHJcbiAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgIGxldHRlci1zcGFjaW5nPVwidGlnaHRcIiAvL2RlaXhhIGFzIGZvbnRzIHVtIHBvdWNvIG1haXMgZ3J1ZGFkYXNcclxuICAgICAgICB3PVwiNjRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgRGFzaEdvXHJcbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgbWw9XCIxXCIgY29sb3I9XCJwaW5rLjUwMFwiPi48L1RleHQ+XHJcblxyXG5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgYXM9XCJsYWJlbFwiXHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvRmxleD5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiRmxleCIsIlRleHQiLCJIZWFkZXIiLCJhcyIsInciLCJtYXhXaWR0aCIsImgiLCJteCIsIm10IiwicHgiLCJhbGlnbiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxldHRlci1zcGFjaW5nIiwibWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ })

});