webpackHotUpdate("static/development/pages/doctortreatment.js",{

/***/ "./pages/doctortreatment.js":
/*!**********************************!*\
  !*** ./pages/doctortreatment.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ApiUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ApiUrl */ \"./components/ApiUrl.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\nvar _jsxFileName = \"/media/jaeho/EXTSSD/gitlab/TreeConnector-Web/pages/doctortreatment.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar DoctorTreatment = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DoctorTreatment, _React$Component);\n\n  var _super = _createSuper(DoctorTreatment);\n\n  function DoctorTreatment(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DoctorTreatment);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      id: '1',\n      treeId: '1',\n      doctorId: 'doctor1',\n      content: '',\n      timestamp: ''\n    };\n    _this.handleContentChange = _this.handleContentChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DoctorTreatment, [{\n    key: \"handleContentChange\",\n    value: function handleContentChange(event) {\n      this.setState({\n        content: event.target.value\n      });\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      this.setState({\n        timestamp: new Date().toISOString\n      });\n      console.log(new Date().toISOString);\n      var data = qs__WEBPACK_IMPORTED_MODULE_10___default.a.stringify({\n        \"Id\": this.state.id,\n        \"TreeId\": this.state.treeId,\n        \"DoctorId\": this.state.doctorId,\n        \"Content\": this.state.content,\n        \"Timestamp\": this.state.timestamp\n      });\n      axios__WEBPACK_IMPORTED_MODULE_9___default()({\n        url: _components_ApiUrl__WEBPACK_IMPORTED_MODULE_8__[\"default\"] + '/adddiagnosis',\n        method: 'post',\n        data: data\n      }).then(function (res) {\n        alert('진단서가 등록되었습니다.');\n      })[\"catch\"](function (err) {\n        alert(err);\n      });\n      event.preventDefault();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, __jsx(\"form\", {\n        onSubmit: this.handleSubmit,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 17\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }\n      }, \"ID:\", __jsx(\"input\", {\n        type: \"text\",\n        disabled: true,\n        value: this.state.id,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 25\n        }\n      })), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }\n      }), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }\n      }, \"TreeID:\", __jsx(\"select\", {\n        value: this.state.treeId,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 25\n        }\n      }, __jsx(\"option\", {\n        value: \"1\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 29\n        }\n      }, \"1\"))), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }\n      }, \"Content:\", __jsx(\"textarea\", {\n        value: this.state.content,\n        onChange: this.handleContentChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 25\n        }\n      })), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }), __jsx(\"input\", {\n        type: \"submit\",\n        value: \"Submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      })));\n    }\n  }]);\n\n  return DoctorTreatment;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoctorTreatment);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kb2N0b3J0cmVhdG1lbnQuanM/N2E3MCJdLCJuYW1lcyI6WyJEb2N0b3JUcmVhdG1lbnQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJ0cmVlSWQiLCJkb2N0b3JJZCIsImNvbnRlbnQiLCJ0aW1lc3RhbXAiLCJoYW5kbGVDb250ZW50Q2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJheGlvcyIsInVybCIsIkFQSV9VUkwiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwiYWxlcnQiLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxlOzs7OztBQUNGLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsUUFBRSxFQUFDLEdBRE07QUFFVEMsWUFBTSxFQUFDLEdBRkU7QUFHVEMsY0FBUSxFQUFDLFNBSEE7QUFJVEMsYUFBTyxFQUFDLEVBSkM7QUFLVEMsZUFBUyxFQUFDO0FBTEQsS0FBYjtBQU9BLFVBQUtDLG1CQUFMLEdBQTJCLE1BQUtBLG1CQUFMLENBQXlCQyxJQUF6Qix5R0FBM0I7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLHlHQUFwQjtBQVZlO0FBV2xCOzs7O3dDQUdtQkUsSyxFQUFPO0FBQ3ZCLFdBQUtDLFFBQUwsQ0FBYztBQUFDTixlQUFPLEVBQUVLLEtBQUssQ0FBQ0UsTUFBTixDQUFhQztBQUF2QixPQUFkO0FBQ0g7OztpQ0FFWUgsSyxFQUFPO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYztBQUFDTCxpQkFBUyxFQUFFLElBQUlRLElBQUosR0FBV0M7QUFBdkIsT0FBZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFJSCxJQUFKLEdBQVdDLFdBQXZCO0FBRUEsVUFBTUcsSUFBSSxHQUFHQywwQ0FBRSxDQUFDQyxTQUFILENBQWE7QUFDdEIsY0FBTSxLQUFLbkIsS0FBTCxDQUFXQyxFQURLO0FBRXRCLGtCQUFVLEtBQUtELEtBQUwsQ0FBV0UsTUFGQztBQUd0QixvQkFBWSxLQUFLRixLQUFMLENBQVdHLFFBSEQ7QUFJdEIsbUJBQVcsS0FBS0gsS0FBTCxDQUFXSSxPQUpBO0FBS3RCLHFCQUFhLEtBQUtKLEtBQUwsQ0FBV0s7QUFMRixPQUFiLENBQWI7QUFRQWUsa0RBQUssQ0FBQztBQUNGQyxXQUFHLEVBQUVDLDBEQUFPLEdBQUcsZUFEYjtBQUVGQyxjQUFNLEVBQUUsTUFGTjtBQUdGTixZQUFJLEVBQUVBO0FBSEosT0FBRCxDQUFMLENBS0NPLElBTEQsQ0FLTSxVQUFBQyxHQUFHLEVBQUk7QUFDVEMsYUFBSyxDQUFDLGVBQUQsQ0FBTDtBQUNILE9BUEQsV0FRTyxVQUFBQyxHQUFHLEVBQUk7QUFDVkQsYUFBSyxDQUFDQyxHQUFELENBQUw7QUFDSCxPQVZEO0FBWUFsQixXQUFLLENBQUNtQixjQUFOO0FBQ0g7Ozs2QkFFUTtBQUNMLGFBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxnQkFBUSxFQUFFLEtBQUtwQixZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLE1BQTNCO0FBQTRCLGFBQUssRUFBRSxLQUFLUixLQUFMLENBQVdDLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQURKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFSTtBQUFRLGFBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdFLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGFBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQUZKLENBTkosRUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWkosRUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVJO0FBQVUsYUFBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0ksT0FBNUI7QUFBcUMsZ0JBQVEsRUFBRSxLQUFLRSxtQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBYkosRUFpQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWpCSixFQWtCSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbEJKLENBREosQ0FESjtBQXdCSDs7OztFQXZFeUJ1Qiw0Q0FBSyxDQUFDQyxTOztBQTJFckJoQyw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2RvY3RvcnRyZWF0bWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFQSV9VUkwgZnJvbSAnLi4vY29tcG9uZW50cy9BcGlVcmwnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxcyBmcm9tICdxcyc7XG5cblxuY2xhc3MgRG9jdG9yVHJlYXRtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpZDonMScsXG4gICAgICAgICAgICB0cmVlSWQ6JzEnLFxuICAgICAgICAgICAgZG9jdG9ySWQ6J2RvY3RvcjEnLFxuICAgICAgICAgICAgY29udGVudDonJyxcbiAgICAgICAgICAgIHRpbWVzdGFtcDonJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlQ29udGVudENoYW5nZSA9IHRoaXMuaGFuZGxlQ29udGVudENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVDb250ZW50Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmd9KTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUoKS50b0lTT1N0cmluZylcblxuICAgICAgICBjb25zdCBkYXRhID0gcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiSWRcIjogdGhpcy5zdGF0ZS5pZCxcbiAgICAgICAgICAgIFwiVHJlZUlkXCI6IHRoaXMuc3RhdGUudHJlZUlkLFxuICAgICAgICAgICAgXCJEb2N0b3JJZFwiOiB0aGlzLnN0YXRlLmRvY3RvcklkLFxuICAgICAgICAgICAgXCJDb250ZW50XCI6IHRoaXMuc3RhdGUuY29udGVudCxcbiAgICAgICAgICAgIFwiVGltZXN0YW1wXCI6IHRoaXMuc3RhdGUudGltZXN0YW1wXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgdXJsOiBBUElfVVJMICsgJy9hZGRkaWFnbm9zaXMnLFxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBhbGVydCgn7KeE64uo7ISc6rCAIOuTseuhneuQmOyXiOyKteuLiOuLpC4nKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBJRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPXt0aGlzLnN0YXRlLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgVHJlZUlEOlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS50cmVlSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvbnRlbnRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JUcmVhdG1lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/doctortreatment.js\n");

/***/ })

})