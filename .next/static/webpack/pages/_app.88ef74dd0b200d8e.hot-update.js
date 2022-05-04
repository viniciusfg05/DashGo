"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/services/mirage/index.tsx":
/*!***************************************!*\
  !*** ./src/services/mirage/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": function() { return /* binding */ makeServer; }\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n\n\nfunction makeServer() {\n    var server1 = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({}) //Partial torna os capos opcionais \n        },\n        // gerar dados em massa\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({\n                name: function name(i) {\n                    // resturn Vinicius Ferreira -> todos os usuario seria esse nome\n                    return \"User \".concat(i + 1) // user 1; user 2 é assim por diante \n                    ;\n                },\n                email: function email() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.internet.email().toLowerCase();\n                },\n                createdAt: function createdAt() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.date.recent(10) // usuario criandos nos ultimos 10 dias\n                    ;\n                }\n            })\n        },\n        seeds: function seeds(server) {\n            server.createList('user', 200) // cria 200 usuarios\n            ;\n        },\n        routes: function routes() {\n            this.namespace = 'api' // -> ../api/rota \n            ;\n            this.timing = 750;\n            this.get('/users', function(schema, request) {\n                var _queryParams // se passar para a pagia 3 \n                 = request.queryParams, _page = _queryParams.page, page = _page === void 0 ? 1 : _page, _perPage = _queryParams.perPage, perPage = _perPage === void 0 ? 10 : _perPage;\n                var total = schema.all('user').length;\n                var pageStart = (Number(page) - 1) * Number(perPage) // menos 1 igual a 2 * 10 = page 3 vai começar do 20 para o 30\n                ;\n                var pageEnd = pageStart + Number(perPage);\n                var users = this.serialize(schema.all('user')).users.splice(pageStart, pageEnd);\n            });\n            this.post('/users');\n            this.namespace = ''; // para não prejudica a rotas \"api\" do next -> ../pages/api/rota\n            this.passthrough() // todas as api passa pelo mirage e se não forem detectadas, passem adiante para rota original\n            ;\n        }\n    });\n    return server1;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFDaEI7QUFRaEMsU0FBU0ksVUFBVSxHQUFHLENBQUM7SUFFMUIsR0FBSyxDQUFDQyxPQUFNLEdBQUdMLHNEQUFZLENBQUMsQ0FBQztRQUN6Qk0sTUFBTSxFQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFTCxrREFBWSxDQUFnQixDQUFDLENBQUMsQ0FBRSxDQUFtQztRQUM3RSxDQUFDO1FBRUQsRUFBdUI7UUFDdkJPLFNBQVMsRUFBRSxDQUFDO1lBQ1JGLElBQUksRUFBRU4sb0RBQWMsQ0FBQyxDQUFDO2dCQUNsQlMsSUFBSSxFQUFKQSxRQUFRLENBQVJBLElBQUksQ0FBQ0MsQ0FBUyxFQUFFLENBQUM7b0JBQ2IsRUFBZ0U7b0JBQ2hFLE1BQU0sQ0FBRSxDQUFLLE9BQVEsT0FBTkEsQ0FBQyxHQUFHLENBQUMsQ0FBRyxDQUFxQyxFQUFDOztnQkFDaEU7Z0JBQ0RDLEtBQUssRUFBTEEsUUFBUSxDQUFSQSxLQUFLLEdBQUcsQ0FBQztvQkFDTCxNQUFNLENBQUNULGlFQUFvQixHQUFHVyxXQUFXO2dCQUM3QyxDQUFDO2dCQUNEQyxTQUFTLEVBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7b0JBQ1QsTUFBTSxDQUFDWiw4REFBaUIsQ0FBQyxFQUFFLENBQUUsQ0FBdUM7O2dCQUN4RSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRGUsS0FBSyxFQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ2IsTUFBTSxFQUFFLENBQUM7WUFDWEEsTUFBTSxDQUFDYyxVQUFVLENBQUMsQ0FBTSxPQUFFLEdBQUcsQ0FBQyxDQUFvQjs7UUFDdEQsQ0FBQztRQUVEQyxNQUFNLEVBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7WUFDTixJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFLLElBQUMsQ0FBa0I7O1lBQ3pDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7WUFFakIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFFLFFBQVEsQ0FBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFDM0MsR0FBSyxDQUE4QkEsWUFBbUIsQ0FBNkI7bUJBQWhEQSxPQUFPLENBQUNDLFdBQVcsVUFBbkJELFlBQW1CLENBQTlDRSxJQUFJLEVBQUpBLElBQUksc0JBQUcsQ0FBQyxxQkFBbUJGLFlBQW1CLENBQXBDRyxPQUFPLEVBQVBBLE9BQU8seUJBQUcsRUFBRTtnQkFFOUIsR0FBSyxDQUFDQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQU0sT0FBRUMsTUFBTTtnQkFFdkMsR0FBSyxDQUFDQyxTQUFTLElBQUtDLE1BQU0sQ0FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSU0sTUFBTSxDQUFDTCxPQUFPLENBQUMsQ0FBOEQsRUFBQzs7Z0JBQ3JILEdBQUksQ0FBQ00sT0FBTyxHQUFHRixTQUFTLEdBQUdDLE1BQU0sQ0FBQ0wsT0FBTztnQkFFMUMsR0FBSyxDQUFDTyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxTQUFTLENBQUNaLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQU0sUUFDN0NLLEtBQUssQ0FBQ0UsTUFBTSxDQUFDTCxTQUFTLEVBQUVFLE9BQU87WUFDcEMsQ0FBQztZQUNELElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQVE7WUFFbEIsSUFBSSxDQUFDakIsU0FBUyxHQUFHLENBQUUsRUFBRSxDQUFnRSxFQUFDO1lBQ3JGLElBQUcsQ0FBQ2tCLFdBQVcsRUFBRyxDQUE4Rjs7UUFDckgsQ0FBQztJQUVMLENBQUM7SUFFRCxNQUFNLENBQUNsQyxPQUFNO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL21pcmFnZS9pbmRleC50c3g/MmJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXIsIEZhY3RvcnksIE1vZGVsIH0gZnJvbSBcIm1pcmFnZWpzXCJcclxuaW1wb3J0IHsgZmFrZXIgfSBmcm9tICdAZmFrZXItanMvZmFrZXInO1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcih7XHJcbiAgICAgICAgbW9kZWxzOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IE1vZGVsLmV4dGVuZDxQYXJ0aWFsPFVzZXI+Pih7fSkgLy9QYXJ0aWFsIHRvcm5hIG9zIGNhcG9zIG9wY2lvbmFpcyBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBnZXJhciBkYWRvcyBlbSBtYXNzYVxyXG4gICAgICAgIGZhY3Rvcmllczoge1xyXG4gICAgICAgICAgICB1c2VyOiBGYWN0b3J5LmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lKGk6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc3R1cm4gVmluaWNpdXMgRmVycmVpcmEgLT4gdG9kb3Mgb3MgdXN1YXJpbyBzZXJpYSBlc3NlIG5vbWVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFVzZXIgJHtpICsgMX1gIC8vIHVzZXIgMTsgdXNlciAyIMOpIGFzc2ltIHBvciBkaWFudGUgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW1haWwoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZha2VyLmludGVybmV0LmVtYWlsKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdCgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFrZXIuZGF0ZS5yZWNlbnQoMTApIC8vIHVzdWFyaW8gY3JpYW5kb3Mgbm9zIHVsdGltb3MgMTAgZGlhc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZWVkcyhzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgc2VydmVyLmNyZWF0ZUxpc3QoJ3VzZXInLCAyMDApLy8gY3JpYSAyMDAgdXN1YXJpb3NcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByb3V0ZXMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlID0gJ2FwaScgLy8gLT4gLi4vYXBpL3JvdGEgXHJcbiAgICAgICAgICAgIHRoaXMudGltaW5nID0gNzUwOyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0KCcvdXNlcnMnLCBmdW5jdGlvbiAoc2NoZW1hLCByZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAgfSA9IHJlcXVlc3QucXVlcnlQYXJhbXMgLy8gc2UgcGFzc2FyIHBhcmEgYSBwYWdpYSAzIFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gc2NoZW1hLmFsbCgndXNlcicpLmxlbmd0aFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VTdGFydCA9ICggTnVtYmVyKHBhZ2UpIC0gMSkgKiBOdW1iZXIocGVyUGFnZSkvLyBtZW5vcyAxIGlndWFsIGEgMiAqIDEwID0gcGFnZSAzIHZhaSBjb21lw6dhciBkbyAyMCBwYXJhIG8gMzBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VFbmQgPSBwYWdlU3RhcnQgKyBOdW1iZXIocGVyUGFnZSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IHRoaXMuc2VyaWFsaXplKHNjaGVtYS5hbGwoJ3VzZXInKSlcclxuICAgICAgICAgICAgICAgIC51c2Vycy5zcGxpY2UocGFnZVN0YXJ0LCBwYWdlRW5kKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnBvc3QoJy91c2VycycpXHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZSA9ICcnOyAvLyBwYXJhIG7Do28gcHJlanVkaWNhIGEgcm90YXMgXCJhcGlcIiBkbyBuZXh0IC0+IC4uL3BhZ2VzL2FwaS9yb3RhXHJcbiAgICAgICAgICAgIHRoaXMucGFzc3Rocm91Z2goKSAvLyB0b2RhcyBhcyBhcGkgcGFzc2EgcGVsbyBtaXJhZ2UgZSBzZSBuw6NvIGZvcmVtIGRldGVjdGFkYXMsIHBhc3NlbSBhZGlhbnRlIHBhcmEgcm90YSBvcmlnaW5hbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzZXJ2ZXI7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyIiwiRmFjdG9yeSIsIk1vZGVsIiwiZmFrZXIiLCJtYWtlU2VydmVyIiwic2VydmVyIiwibW9kZWxzIiwidXNlciIsImV4dGVuZCIsImZhY3RvcmllcyIsIm5hbWUiLCJpIiwiZW1haWwiLCJpbnRlcm5ldCIsInRvTG93ZXJDYXNlIiwiY3JlYXRlZEF0IiwiZGF0ZSIsInJlY2VudCIsInNlZWRzIiwiY3JlYXRlTGlzdCIsInJvdXRlcyIsIm5hbWVzcGFjZSIsInRpbWluZyIsImdldCIsInNjaGVtYSIsInJlcXVlc3QiLCJxdWVyeVBhcmFtcyIsInBhZ2UiLCJwZXJQYWdlIiwidG90YWwiLCJhbGwiLCJsZW5ndGgiLCJwYWdlU3RhcnQiLCJOdW1iZXIiLCJwYWdlRW5kIiwidXNlcnMiLCJzZXJpYWxpemUiLCJzcGxpY2UiLCJwb3N0IiwicGFzc3Rocm91Z2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/mirage/index.tsx\n");

/***/ })

});