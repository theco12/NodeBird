webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginForm; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _templateObject,\n  _jsxFileName = \"/Users/thecorative/Desktop/NodeBird/NodeBird/components/LoginForm.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-top: 20px;\\n\"])));\n_c = ButtonWrapper;\nfunction LoginForm(_ref) {\n  _s();\n  var setIsLoggedIn = _ref.setIsLoggedIn;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n    Id = _useState[0],\n    setId = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n    Password = _useState2[0],\n    setPassword = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n    Passwordcheck = _useState3[0],\n    setPasswordcheck = _useState3[1];\n  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setId(e.target.value);\n  }, []);\n  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setPassword(e.target.value);\n  }, []);\n  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    console.log(Id, Password);\n    setIsLoggedIn(true);\n  }, [Id, Password]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    onFinish: onSubmitForm,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"user-id\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"\\uC544\\uC774\\uB514\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    name: \"user-id\",\n    value: Id,\n    onChange: onChangeId,\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"user-password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"\\uD328\\uC2A4\\uC6CC\\uB4DC\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    name: \"user-password\",\n    value: Password,\n    type: Password,\n    onChange: onChangePassword,\n    required: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  })), __jsx(ButtonWrapper, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: false,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, \"\\uB85C\\uADF8\\uC778\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/signup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"\\uD68C\\uC6D0\\uAC00\\uC785\")))));\n}\n_s(LoginForm, \"KX6zI47YbmaqC5WaabgaF+AZoBc=\");\n_c2 = LoginForm;\nvar _c, _c2;\n$RefreshReg$(_c, \"ButtonWrapper\");\n$RefreshReg$(_c2, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDM0OCJdLCJuYW1lcyI6WyJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTG9naW5Gb3JtIiwic2V0SXNMb2dnZWRJbiIsInVzZVN0YXRlIiwiSWQiLCJzZXRJZCIsIlBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJQYXNzd29yZGNoZWNrIiwic2V0UGFzc3dvcmRjaGVjayIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvblN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNkO0FBQ1U7QUFFdkMsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLHNLQUUvQjtBQUFDLEtBRklGLGFBQWE7QUFJSixTQUFTRyxTQUFTLE9BQW9CO0VBQUE7RUFBQSxJQUFqQkMsYUFBYSxRQUFiQSxhQUFhO0VBQy9DLGdCQUFvQkMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBekJDLEVBQUU7SUFBRUMsS0FBSztFQUNoQixpQkFBZ0NGLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQXJDRyxRQUFRO0lBQUVDLFdBQVc7RUFDNUIsaUJBQTBDSixzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUEvQ0ssYUFBYTtJQUFFQyxnQkFBZ0I7RUFFdEMsSUFBTUMsVUFBVSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUMsRUFBSztJQUNwQ1AsS0FBSyxDQUFDTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxnQkFBZ0IsR0FBR0oseURBQVcsQ0FBQyxVQUFDQyxDQUFDLEVBQUs7SUFDMUNMLFdBQVcsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUM3QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTUUsWUFBWSxHQUFHTCx5REFBVyxDQUFDLFlBQU07SUFDckNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxFQUFFLEVBQUVFLFFBQVEsQ0FBQztJQUN6QkosYUFBYSxDQUFDLElBQUksQ0FBQztFQUNyQixDQUFDLEVBQUUsQ0FBQ0UsRUFBRSxFQUFFRSxRQUFRLENBQUMsQ0FBQztFQUVsQixPQUNFLE1BQUMseUNBQUk7SUFBQyxRQUFRLEVBQUVVLFlBQWE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMzQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxPQUFPLEVBQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUFZLEVBQ3BDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBTSxFQUNOO0lBQU8sSUFBSSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUVaLEVBQUc7SUFBQyxRQUFRLEVBQUVNLFVBQVc7SUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUM5RCxFQUNOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLE9BQU8sRUFBQyxlQUFlO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBQWEsRUFDM0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ047SUFDRSxJQUFJLEVBQUMsZUFBZTtJQUNwQixLQUFLLEVBQUVKLFFBQVM7SUFDaEIsSUFBSSxFQUFFQSxRQUFTO0lBQ2YsUUFBUSxFQUFFUyxnQkFBaUI7SUFDM0IsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQ1IsQ0FDRSxFQUNOLE1BQUMsYUFBYTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1osTUFBQywyQ0FBTTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUMsUUFBUSxFQUFDLFFBQVE7SUFBQyxPQUFPLEVBQUUsS0FBTTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUUvQyxFQUNULE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUMsU0FBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ2xCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLDJDQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBQWMsQ0FDbkIsQ0FDQyxDQUNPLENBQ1g7QUFFWDtBQUFDLEdBaER1QmQsU0FBUztBQUFBLE1BQVRBLFNBQVM7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMjBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSh7IHNldElzTG9nZ2VkSW4gfSkge1xuICBjb25zdCBbSWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbUGFzc3dvcmRjaGVjaywgc2V0UGFzc3dvcmRjaGVja10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coSWQsIFBhc3N3b3JkKTtcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICB9LCBbSWQsIFBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17SWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7tjKjsiqTsm4zrk5w8L2xhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtQYXNzd29yZH1cbiAgICAgICAgICB0eXBlPXtQYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

})