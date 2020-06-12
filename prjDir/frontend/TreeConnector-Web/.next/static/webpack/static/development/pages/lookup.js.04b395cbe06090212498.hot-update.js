webpackHotUpdate("static/development/pages/lookup.js",{

/***/ "./pages/lookup.js":
/*!*************************!*\
  !*** ./pages/lookup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_ApiUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ApiUrl */ \"./components/ApiUrl.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/media/jaeho/EXTSSD/gitlab/TreeConnector-Web/pages/lookup.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar LookUp = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(LookUp, _React$Component);\n\n  var _super = _createSuper(LookUp);\n\n  function LookUp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, LookUp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(LookUp, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var trees = this.props.trees;\n\n      if (typeof trees === \"undefined\") {\n        __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }\n        }, \"\\uB098\\uBB34 \\uC870\\uD68C\", __jsx(\"ul\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 17\n          }\n        }, treeList));\n      } else {\n        var _treeList = trees.map(function (tree) {\n          return __jsx(\"li\", {\n            key: tree.Id,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 25\n            }\n          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {\n            href: \"/treeinfo?treeid=1\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 43\n            }\n          }, __jsx(\"a\", {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 75\n            }\n          }, tree.Id)));\n        });\n\n        return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }\n        }, \"\\uB098\\uBB34 \\uC870\\uD68C\", __jsx(\"ul\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 21\n          }\n        }, _treeList));\n      }\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var req, response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                req = _ref.req;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_components_ApiUrl__WEBPACK_IMPORTED_MODULE_10__[\"default\"] + '/listtrees');\n\n              case 3:\n                response = _context.sent;\n                return _context.abrupt(\"return\", {\n                  trees: response.data.response\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return LookUp;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LookUp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb29rdXAuanM/M2NjOSJdLCJuYW1lcyI6WyJMb29rVXAiLCJ0cmVlcyIsInByb3BzIiwidHJlZUxpc3QiLCJtYXAiLCJ0cmVlIiwiSWQiLCJyZXEiLCJheGlvcyIsImdldCIsIkFQSV9VUkwiLCJyZXNwb25zZSIsImRhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs2QkFRTztBQUFBOztBQUFBLFVBRUdDLEtBRkgsR0FFYSxLQUFLQyxLQUZsQixDQUVHRCxLQUZIOztBQUlMLFVBQUcsT0FBT0EsS0FBUCxLQUFpQixXQUFwQixFQUFpQztBQUM3QixjQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNLRSxRQURMLENBRko7QUFNSCxPQVBELE1BUUs7QUFDRCxZQUFNQSxTQUFRLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUNiLFVBQUFDLElBQUk7QUFBQSxpQkFBSTtBQUFJLGVBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBa0IsTUFBQyxpREFBRDtBQUFNLGdCQUFJLEVBQUMsb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUlELElBQUksQ0FBQ0MsRUFBVCxDQUFoQyxDQUFsQixDQUFKO0FBQUEsU0FEUyxDQUFqQjs7QUFHQSxlQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0tILFNBREwsQ0FGSixDQURKO0FBUUg7QUFDSjs7Ozs7Ozs7OztBQWhDOEJJLG1CLFFBQUFBLEc7O3VCQUNKQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVDLDJEQUFPLEdBQUcsWUFBcEIsQzs7O0FBQWpCQyx3QjtpREFDRTtBQUNKVix1QkFBSyxFQUFFVSxRQUFRLENBQUNDLElBQVQsQ0FBY0Q7QUFEakIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFIS0UsNENBQUssQ0FBQ0MsUzs7QUFxQ1pkLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbG9va3VwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBUElfVVJMIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpVXJsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIExvb2tVcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxfSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KEFQSV9VUkwgKyAnL2xpc3R0cmVlcycpO1xyXG4gICAgICAgIHJldHVybiAge1xyXG4gICAgICAgICAgICB0cmVlczogcmVzcG9uc2UuZGF0YS5yZXNwb25zZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHRyZWVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YgdHJlZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIOuCmOustCDsobDtmoxcclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7dHJlZUxpc3R9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyZWVMaXN0ID0gdHJlZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgdHJlZSA9PiA8bGkga2V5PXt0cmVlLklkfT48TGluayBocmVmPVwiL3RyZWVpbmZvP3RyZWVpZD0xXCI+PGE+e3RyZWUuSWR9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIOuCmOustCDsobDtmoxcclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb29rVXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/lookup.js\n");

/***/ })

})