"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var InlineScrollLayout = function InlineScrollLayout(props) {
  var _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      children = props.children;
  var DefaultStyle = {
    display: 'flex'
  };
  return _react.default.createElement("div", {
    style: (0, _objectSpread2.default)({}, style, DefaultStyle),
    className: className
  }, children);
};

var _default = InlineScrollLayout;
exports.default = _default;