"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/create",{

/***/ "./src/components/Sidebar/NavLink.tsx":
/*!********************************************!*\
  !*** ./src/components/Sidebar/NavLink.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction NavLink(_param) {\n    var icon = _param.icon, children = _param.children, rest = _objectWithoutProperties(_param, [\n        \"icon\",\n        \"children\"\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, _objectSpread({\n        display: \"flex\",\n        alignItems: \"center\"\n    }, rest, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                as: icon,\n                fontSize: \"20\"\n            }, void 0, false, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\NavLink.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                ml: \"4\",\n                fontWeight: \"medium\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\NavLink.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }), void 0, true, {\n        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\NavLink.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n}\n_c = NavLink;\nvar _c;\n$RefreshReg$(_c, \"NavLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL05hdkxpbmsudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN2RCxTQUFTRyxPQUFPLENBQUMsTUFBcUMsRUFBRyxDQUFDO1FBQXhDQyxJQUFJLEdBQUwsTUFBcUMsQ0FBcENBLElBQUksRUFBRUMsUUFBUSxHQUFmLE1BQXFDLENBQTlCQSxRQUFRLEVBQUtDLElBQUksNEJBQXhCLE1BQXFDO1FBQXBDRixDQUFJO1FBQUVDLENBQVE7O0lBQ3JDLE1BQU0sNkVBQ0hILGtEQUFJO1FBQUNLLE9BQU8sRUFBQyxDQUFNO1FBQUNDLFVBQVUsRUFBQyxDQUFRO09BQUtGLElBQUk7O3dGQUM5Q04sa0RBQUk7Z0JBQUNTLEVBQUUsRUFBRUwsSUFBSTtnQkFBRU0sUUFBUSxFQUFDLENBQUk7Ozs7Ozt3RkFDNUJULGtEQUFJO2dCQUFDVSxFQUFFLEVBQUMsQ0FBRztnQkFBQ0MsVUFBVSxFQUFDLENBQVE7MEJBQUVQLFFBQVE7Ozs7Ozs7Ozs7OztBQUdoRCxDQUFDO0tBUGVGLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9OYXZMaW5rLnRzeD81OWYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb24sIFRleHQsIExpbmssIExpbmtQcm9wcyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEVsZW1lbnRUeXBlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJpRGFzaGJvYXJkTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5cclxuaW50ZXJmYWNlIE5hdkxpbmtQcm9wIGV4dGVuZHMgTGlua1Byb3Bze1xyXG4gIGljb246IEVsZW1lbnRUeXBlOyAvLyBRdWFuZG8gZXUgcGFzc2EgYSByZWZlcmVuY2lhIGRvIGVsZW1lbnRvIHNvbWVudGUgcGVsbyBub21lIChhcz17UmlEYXNoYm9hcmRMaW5lfSlcclxuICBjaGlsZHJlbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2TGluayh7aWNvbiwgY2hpbGRyZW4sIC4uLnJlc3R9Ok5hdkxpbmtQcm9wICkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB7Li4ucmVzdH0+IFxyXG4gICAgICA8SWNvbiBhcz17aWNvbn0gZm9udFNpemU9XCIyMFwiIC8+XHJcbiAgICAgIDxUZXh0IG1sPVwiNFwiIGZvbnRXZWlnaHQ9XCJtZWRpdW1cIj57Y2hpbGRyZW59PC9UZXh0PlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJJY29uIiwiVGV4dCIsIkxpbmsiLCJOYXZMaW5rIiwiaWNvbiIsImNoaWxkcmVuIiwicmVzdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYXMiLCJmb250U2l6ZSIsIm1sIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Sidebar/NavLink.tsx\n");

/***/ }),

/***/ "./src/components/Sidebar/NavSection.tsx":
/*!***********************************************!*\
  !*** ./src/components/Sidebar/NavSection.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavSection\": function() { return /* binding */ NavSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction NavSection(param) {\n    var title = param.title, children = param.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                fontWeight: \"bold\",\n                color: \"gray.400\",\n                fontSize: \"small\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\NavSection.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                spacing: \"8\",\n                mt: \"8\",\n                align: \"stretch\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\NavSection.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\NavSection.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n}\n_c = NavSection;\nvar _c;\n$RefreshReg$(_c, \"NavSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL05hdlNlY3Rpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBUTVDLFNBQVNHLFVBQVUsQ0FBQyxLQUFrQyxFQUFFLENBQUM7UUFBcENDLEtBQUssR0FBTixLQUFrQyxDQUFqQ0EsS0FBSyxFQUFFQyxRQUFRLEdBQWhCLEtBQWtDLENBQTFCQSxRQUFRO0lBQ3pDLE1BQU0sNkVBQ0hMLGlEQUFHOzt3RkFDSEUsa0RBQUk7Z0JBQUNJLFVBQVUsRUFBQyxDQUFNO2dCQUFDQyxLQUFLLEVBQUMsQ0FBVTtnQkFBQ0MsUUFBUSxFQUFDLENBQU87MEJBQUVKLEtBQUs7Ozs7Ozt3RkFDL0RILG1EQUFLO2dCQUFDUSxPQUFPLEVBQUMsQ0FBRztnQkFBQ0MsRUFBRSxFQUFDLENBQUc7Z0JBQUNDLEtBQUssRUFBQyxDQUFTOzBCQUN0Q04sUUFBUTs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztLQVRlRixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvTmF2U2VjdGlvbi50c3g/NzZlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgTmF2U2VjdGlvblByb3BzIHtcclxuICB0aXRsZT86IHN0cmluZyxcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2U2VjdGlvbih7dGl0bGUsIGNoaWxkcmVufTogTmF2U2VjdGlvblByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwiZ3JheS40MDBcIiBmb250U2l6ZT1cInNtYWxsXCI+e3RpdGxlfTwvVGV4dD5cclxuICAgIDxTdGFjayBzcGFjaW5nPVwiOFwiIG10PVwiOFwiIGFsaWduPVwic3RyZXRjaFwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0YWNrPlxyXG4gIDwvQm94PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJCb3giLCJTdGFjayIsIlRleHQiLCJOYXZTZWN0aW9uIiwidGl0bGUiLCJjaGlsZHJlbiIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwic3BhY2luZyIsIm10IiwiYWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sidebar/NavSection.tsx\n");

/***/ }),

/***/ "./src/components/Sidebar/SideBarNav.tsx":
/*!***********************************************!*\
  !*** ./src/components/Sidebar/SideBarNav.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideBarNav\": function() { return /* binding */ SideBarNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink */ \"./src/components/Sidebar/NavLink.tsx\");\n/* harmony import */ var _NavSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavSection */ \"./src/components/Sidebar/NavSection.tsx\");\n\n\n\n\n\nfunction SideBarNav() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n        spacing: \"12\",\n        align: \"flex-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavSection__WEBPACK_IMPORTED_MODULE_2__.NavSection, {\n                title: \"GERAL\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n                        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiDashboardLine,\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\SideBarNav.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n                        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiContactsLine,\n                        children: \"Usu\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\SideBarNav.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\SideBarNav.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavSection__WEBPACK_IMPORTED_MODULE_2__.NavSection, {\n                title: \"AUTOMA\\xc7\\xc2O\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n                        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiInputMethodLine,\n                        children: \"Formularios\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\SideBarNav.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavLink__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n                        icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiGitMergeLine,\n                        children: \"Automa\\xe7\\xe3o\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\SideBarNav.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\SideBarNav.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\MEU PROJETO\\\\DashGo\\\\src\\\\components\\\\Sidebar\\\\SideBarNav.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n_c = SideBarNav;\nvar _c;\n$RefreshReg$(_c, \"SideBarNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGVCYXJOYXYudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzJEO0FBQ2hFO0FBQ007QUFFbEMsU0FBU08sVUFBVSxHQUFHLENBQUM7SUFDNUIsTUFBTSw2RUFDSFAsbURBQUs7UUFBQ1EsT0FBTyxFQUFDLENBQUk7UUFBQ0MsS0FBSyxFQUFDLENBQVk7O3dGQUNuQ0gsbURBQVU7Z0JBQUNJLEtBQUssRUFBQyxDQUFPOztnR0FDdEJMLDZDQUFPO3dCQUFDTSxJQUFJLEVBQUVULDJEQUFlO2tDQUFFLENBQVM7Ozs7OztnR0FDeENHLDZDQUFPO3dCQUFDTSxJQUFJLEVBQUVWLDBEQUFjO2tDQUFFLENBQU87Ozs7Ozs7Ozs7Ozt3RkFHdENLLG1EQUFTO2dCQUFDSSxLQUFLLEVBQUMsQ0FBVzs7Z0dBQ3hCTCw2Q0FBSzt3QkFBQ00sSUFBSSxFQUFFUCw2REFBaUI7a0NBQUUsQ0FBVzs7Ozs7O2dHQUM1Q0MsNkNBQU87d0JBQUNNLElBQUksRUFBRVIsMERBQWM7a0NBQUUsQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhELENBQUM7S0FkZUksVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGVCYXJOYXYudHN4P2EzY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBSaUNvbnRhY3RzTGluZSwgUmlEYXNoYm9hcmRMaW5lLCBSaUdpdE1lcmdlTGluZSwgUmlJbnB1dE1ldGhvZExpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCIuL05hdkxpbmtcIjtcclxuaW1wb3J0IHsgTmF2U2VjdGlvbiB9IGZyb20gXCIuL05hdlNlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlQmFyTmF2KCkge1xyXG4gIHJldHVybihcclxuICAgIDxTdGFjayBzcGFjaW5nPVwiMTJcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgPE5hdlNlY3Rpb24gdGl0bGU9XCJHRVJBTFwiPlxyXG4gICAgICAgIDxOYXZMaW5rIGljb249e1JpRGFzaGJvYXJkTGluZX0+RGFzaGJvYXJkPC9OYXZMaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rIGljb249e1JpQ29udGFjdHNMaW5lfT5Vc3XDoXJpbzwvTmF2TGluaz5cclxuICAgICAgPC9OYXZTZWN0aW9uPlxyXG5cclxuICAgICAgPE5hdlNlY3Rpb24gdGl0bGU9XCJBVVRPTUHDh8OCT1wiPlxyXG4gICAgICAgIDxOYXZMaW5rIGljb249e1JpSW5wdXRNZXRob2RMaW5lfT5Gb3JtdWxhcmlvczwvTmF2TGluaz5cclxuICAgICAgICA8TmF2TGluayBpY29uPXtSaUdpdE1lcmdlTGluZX0+QXV0b21hw6fDo288L05hdkxpbms+XHJcbiAgICAgIDwvTmF2U2VjdGlvbj5cclxuICAgIDwvU3RhY2s+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlN0YWNrIiwiUmlDb250YWN0c0xpbmUiLCJSaURhc2hib2FyZExpbmUiLCJSaUdpdE1lcmdlTGluZSIsIlJpSW5wdXRNZXRob2RMaW5lIiwiTmF2TGluayIsIk5hdlNlY3Rpb24iLCJTaWRlQmFyTmF2Iiwic3BhY2luZyIsImFsaWduIiwidGl0bGUiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sidebar/SideBarNav.tsx\n");

/***/ })

});