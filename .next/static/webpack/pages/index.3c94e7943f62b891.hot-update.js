"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        w: \"100vw\",\n        h: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n            as: \"form\",\n            width: \"100%\",\n            maxWidth: 360,\n            bg: \"gray.800\",\n            borderRadius: 8,\n            flexDir: \"column\",\n            p: \"8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                    spacing: 4,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        name: \"email\",\n                        type: \"email\",\n                        label: \"E-mail\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    type: \"submit\",\n                    colorScheme: \"pink\",\n                    mt: \"6\",\n                    size: \"lg\",\n                    children: \"Entrar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9GO0FBRXJFLFFBQVEsQ0FBQ0ksSUFBSSxHQUFHLENBQUM7SUFDOUIsTUFBTSw2RUFDSEgsa0RBQUk7UUFDSEksQ0FBQyxFQUFDLENBQU87UUFDVEMsQ0FBQyxFQUFDLENBQU87UUFDVEMsS0FBSyxFQUFDLENBQVE7UUFDZEMsT0FBTyxFQUFDLENBQVE7OEZBRWZQLGtEQUFJO1lBQ0hRLEVBQUUsRUFBQyxDQUFNO1lBQ1RDLEtBQUssRUFBQyxDQUFNO1lBQ1pDLFFBQVEsRUFBRSxHQUFHO1lBQ2JDLEVBQUUsRUFBQyxDQUFVO1lBQ2JDLFlBQVksRUFBRSxDQUFDO1lBQ2ZDLE9BQU8sRUFBQyxDQUFRO1lBQ2hCQyxDQUFDLEVBQUMsQ0FBRzs7NEZBR0paLG1EQUFLO29CQUFDYSxPQUFPLEVBQUUsQ0FBQzswR0FFZGQsbURBQUs7d0JBQUNlLElBQUksRUFBQyxDQUFPO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTzt3QkFBQ0MsS0FBSyxFQUFDLENBQVE7Ozs7Ozs7Ozs7OzRGQUloRG5CLG9EQUFNO29CQUFDa0IsSUFBSSxFQUFDLENBQVE7b0JBQUNFLFdBQVcsRUFBQyxDQUFNO29CQUFDQyxFQUFFLEVBQUMsQ0FBRztvQkFBQ0MsSUFBSSxFQUFDLENBQUk7OEJBQUMsQ0FFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztLQTlCdUJsQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZsZXgsIElucHV0LCBTdGFjaywgRm9ybUxhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIHc9XCIxMDB2d1wiXHJcbiAgICAgIGg9XCIxMDB2aFwiXHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCIgXHJcbiAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBtYXhXaWR0aD17MzYwfVxyXG4gICAgICAgIGJnPVwiZ3JheS44MDBcIlxyXG4gICAgICAgIGJvcmRlclJhZGl1cz17OH1cclxuICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICBwPVwiOFwiXHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8U3RhY2sgc3BhY2luZz17NH0+IFxyXG5cclxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBsYWJlbD1cIkUtbWFpbFwiLz5cclxuXHJcbiAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3JTY2hlbWU9XCJwaW5rXCIgbXQ9XCI2XCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICBFbnRyYXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gIClcclxufVxyXG4gIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZsZXgiLCJJbnB1dCIsIlN0YWNrIiwiSG9tZSIsInciLCJoIiwiYWxpZ24iLCJqdXN0aWZ5IiwiYXMiLCJ3aWR0aCIsIm1heFdpZHRoIiwiYmciLCJib3JkZXJSYWRpdXMiLCJmbGV4RGlyIiwicCIsInNwYWNpbmciLCJuYW1lIiwidHlwZSIsImxhYmVsIiwiY29sb3JTY2hlbWUiLCJtdCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});