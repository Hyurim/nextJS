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

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar initialState = {\n    user: {\n        isLoggedIn: false,\n        user: null,\n        signUpData: {},\n        loginData: {}\n    },\n    post: {\n        mainPosts: []\n    }\n};\n// async action creator\n//action creator\n/* const changeNickname = (data) => {\r\n    return {\r\n        type: 'CHANGE_NICKNAME',\r\n        data,\r\n    }\r\n};\r\n\r\nchangeNickname('홍길동1');\r\n */ // (이전상태, 액션) => 다음상태\nvar rootReducer = function() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:\n            return _objectSpread({}, state, action.payload);\n        default:\n            return state; //이게 없으면 return 값이 undefind가 되버림.\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBRzdDLElBQU1DLFlBQVksR0FBRztJQUNqQkMsSUFBSSxFQUFFO1FBQ0ZDLFVBQVUsRUFBQyxLQUFLO1FBQ2hCRCxJQUFJLEVBQUMsSUFBSTtRQUNURSxVQUFVLEVBQUUsRUFBRTtRQUNkQyxTQUFTLEVBQUUsRUFBRTtLQUNoQjtJQUNEQyxJQUFJLEVBQUU7UUFDRkMsU0FBUyxFQUFFLEVBQUU7S0FFaEI7Q0FDSjtBQUVELHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEI7QUFXb0IsSUFBZEM7UUFBZUMsS0FBSztJQUN0QixPQUFRQzs7OztZQUtJLE9BQU9ELEtBQUs7S0FDdkI7Q0FDSjtBQUVELGVBQWVELFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9pbmRleC5qcz9iOWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgICBpc0xvZ2dlZEluOmZhbHNlLFxyXG4gICAgICAgIHVzZXI6bnVsbCxcclxuICAgICAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgICAgICBsb2dpbkRhdGE6IHt9LFxyXG4gICAgfSxcclxuICAgIHBvc3Q6IHtcclxuICAgICAgICBtYWluUG9zdHM6IFtdLFxyXG5cclxuICAgIH0sXHJcbn1cclxuXHJcbi8vIGFzeW5jIGFjdGlvbiBjcmVhdG9yXHJcbi8vYWN0aW9uIGNyZWF0b3JcclxuLyogY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5cclxuY2hhbmdlTmlja25hbWUoJ+2Zjeq4uOuPmTEnKTtcclxuICovXHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm57Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTsgLy/snbTqsowg7JeG7Jy866m0IHJldHVybiDqsJLsnbQgdW5kZWZpbmTqsIAg65CY67KE66a8LlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sIm5hbWVzIjpbIkhZRFJBVEUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJwb3N0IiwibWFpblBvc3RzIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

});