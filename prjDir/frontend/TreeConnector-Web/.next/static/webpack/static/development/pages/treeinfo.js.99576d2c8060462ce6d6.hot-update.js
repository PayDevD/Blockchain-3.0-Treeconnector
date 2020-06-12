webpackHotUpdate("static/development/pages/treeinfo.js",{

/***/ "./pages/treeinfo.js":
/*!***************************!*\
  !*** ./pages/treeinfo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_ApiUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ApiUrl */ \"./components/ApiUrl.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/media/jaeho/EXTSSD/gitlab/TreeConnector-Web/pages/treeinfo.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar TreeInfo = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(TreeInfo, _React$Component);\n\n  var _super = _createSuper(TreeInfo);\n\n  function TreeInfo() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, TreeInfo);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TreeInfo, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props = this.props,\n          diagnoses = _this$props.diagnoses,\n          treatments = _this$props.treatments;\n      var diagnosisList = diagnoses.map(function (diagnosis) {\n        return __jsx(\"li\", {\n          key: diagnosis.Id,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 26\n          }\n        }, diagnosis.Content, \" / \", new Date(diagnosis.Timestamp).toString(), \" / \\uB2F4\\uB2F9 : \", diagnosis.DoctorId);\n      });\n      var treatmentList = treatments.map(function (treatment) {\n        return __jsx(\"li\", {\n          key: treatment.Id,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 26\n          }\n        }, treatment.Content, \" / \", new Date(treatment.Timestamp).toString(), \" / \\uB2F4\\uB2F9 : \", treatment.TherapistId);\n      });\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }\n      }, \"\\uC9C4\\uB2E8\\uC11C \\uB9AC\\uC2A4\\uD2B8\", __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 17\n        }\n      }, diagnosisList), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 41\n        }\n      }), \"\\uCE58\\uB8CC \\uB0B4\\uC5ED \\uB9AC\\uC2A4\\uD2B8\", __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }\n      }, treatmentList));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n        var req, diagnoses, treatments;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                req = _ref.req;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_components_ApiUrl__WEBPACK_IMPORTED_MODULE_10__[\"default\"] + '/listdiagnoses');\n\n              case 3:\n                diagnoses = _context.sent;\n                _context.next = 6;\n                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_components_ApiUrl__WEBPACK_IMPORTED_MODULE_10__[\"default\"] + '/listreatments');\n\n              case 6:\n                treatments = _context.sent;\n                return _context.abrupt(\"return\", {\n                  diagnoses: diagnoses.data.response,\n                  treatments: treatments.data.response\n                });\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return TreeInfo;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TreeInfo);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90cmVlaW5mby5qcz9lOTdjIl0sIm5hbWVzIjpbIlRyZWVJbmZvIiwicHJvcHMiLCJkaWFnbm9zZXMiLCJ0cmVhdG1lbnRzIiwiZGlhZ25vc2lzTGlzdCIsIm1hcCIsImRpYWdub3NpcyIsIklkIiwiQ29udGVudCIsIkRhdGUiLCJUaW1lc3RhbXAiLCJ0b1N0cmluZyIsIkRvY3RvcklkIiwidHJlYXRtZW50TGlzdCIsInRyZWF0bWVudCIsIlRoZXJhcGlzdElkIiwicmVxIiwiYXhpb3MiLCJnZXQiLCJBUElfVVJMIiwiZGF0YSIsInJlc3BvbnNlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs2QkFVTztBQUFBOztBQUFBLHdCQUM2QixLQUFLQyxLQURsQztBQUFBLFVBQ0dDLFNBREgsZUFDR0EsU0FESDtBQUFBLFVBQ2NDLFVBRGQsZUFDY0EsVUFEZDtBQUVMLFVBQU1DLGFBQWEsR0FBR0YsU0FBUyxDQUFDRyxHQUFWLENBQ2xCLFVBQUFDLFNBQVM7QUFBQSxlQUFJO0FBQUksYUFBRyxFQUFFQSxTQUFTLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBd0JELFNBQVMsQ0FBQ0UsT0FBbEMsU0FBOEMsSUFBSUMsSUFBSixDQUFTSCxTQUFTLENBQUNJLFNBQW5CLEVBQThCQyxRQUE5QixFQUE5Qyx3QkFBZ0dMLFNBQVMsQ0FBQ00sUUFBMUcsQ0FBSjtBQUFBLE9BRFMsQ0FBdEI7QUFHQSxVQUFNQyxhQUFhLEdBQUdWLFVBQVUsQ0FBQ0UsR0FBWCxDQUNsQixVQUFBUyxTQUFTO0FBQUEsZUFBSTtBQUFJLGFBQUcsRUFBRUEsU0FBUyxDQUFDUCxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXdCTyxTQUFTLENBQUNOLE9BQWxDLFNBQThDLElBQUlDLElBQUosQ0FBU0ssU0FBUyxDQUFDSixTQUFuQixFQUE4QkMsUUFBOUIsRUFBOUMsd0JBQWdHRyxTQUFTLENBQUNDLFdBQTFHLENBQUo7QUFBQSxPQURTLENBQXRCO0FBSUEsYUFDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLWCxhQUFMLENBRkosRUFFNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUY1QixrREFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUtTLGFBQUwsQ0FKSixDQURKO0FBUUg7Ozs7Ozs7Ozs7QUExQjhCRyxtQixRQUFBQSxHOzt1QkFDSEMsNENBQUssQ0FBQ0MsR0FBTixDQUFVQywyREFBTyxHQUFHLGdCQUFwQixDOzs7QUFBbEJqQix5Qjs7dUJBQ21CZSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVDLDJEQUFPLEdBQUcsZ0JBQXBCLEM7OztBQUFuQmhCLDBCO2lEQUNDO0FBQ0hELDJCQUFTLEVBQUVBLFNBQVMsQ0FBQ2tCLElBQVYsQ0FBZUMsUUFEdkI7QUFFSGxCLDRCQUFVLEVBQUVBLFVBQVUsQ0FBQ2lCLElBQVgsQ0FBZ0JDO0FBRnpCLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSlFDLDRDQUFLLENBQUNDLFM7O0FBOEJkdkIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy90cmVlaW5mby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBBUElfVVJMIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpVXJsJztcblxuY2xhc3MgVHJlZUluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXF9KSB7XG4gICAgICAgIGNvbnN0IGRpYWdub3NlcyA9IGF3YWl0IGF4aW9zLmdldChBUElfVVJMICsgJy9saXN0ZGlhZ25vc2VzJyk7XG4gICAgICAgIGNvbnN0IHRyZWF0bWVudHMgPSBhd2FpdCBheGlvcy5nZXQoQVBJX1VSTCArICcvbGlzdHJlYXRtZW50cycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlhZ25vc2VzOiBkaWFnbm9zZXMuZGF0YS5yZXNwb25zZSxcbiAgICAgICAgICAgIHRyZWF0bWVudHM6IHRyZWF0bWVudHMuZGF0YS5yZXNwb25zZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRpYWdub3NlcywgdHJlYXRtZW50cyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZGlhZ25vc2lzTGlzdCA9IGRpYWdub3Nlcy5tYXAoXG4gICAgICAgICAgICBkaWFnbm9zaXMgPT4gPGxpIGtleT17ZGlhZ25vc2lzLklkfT57ZGlhZ25vc2lzLkNvbnRlbnR9IC8ge25ldyBEYXRlKGRpYWdub3Npcy5UaW1lc3RhbXApLnRvU3RyaW5nKCl9IC8g64u064u5IDoge2RpYWdub3Npcy5Eb2N0b3JJZH08L2xpPlxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHRyZWF0bWVudExpc3QgPSB0cmVhdG1lbnRzLm1hcChcbiAgICAgICAgICAgIHRyZWF0bWVudCA9PiA8bGkga2V5PXt0cmVhdG1lbnQuSWR9Pnt0cmVhdG1lbnQuQ29udGVudH0gLyB7bmV3IERhdGUodHJlYXRtZW50LlRpbWVzdGFtcCkudG9TdHJpbmcoKX0gLyDri7Tri7kgOiB7dHJlYXRtZW50LlRoZXJhcGlzdElkfTwvbGk+XG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIOynhOuLqOyEnCDrpqzsiqTtirhcbiAgICAgICAgICAgICAgICA8dWw+e2RpYWdub3Npc0xpc3R9PC91bD48YnIgLz5cbiAgICAgICAgICAgICAgICDsuZjro4wg64K07JetIOumrOyKpO2KuFxuICAgICAgICAgICAgICAgIDx1bD57dHJlYXRtZW50TGlzdH08L3VsPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVJbmZvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/treeinfo.js\n");

/***/ })

})