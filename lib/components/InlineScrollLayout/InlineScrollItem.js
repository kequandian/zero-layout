"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var InlineScrollItem = function InlineScrollItem(props) {
  var _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$width = props.width,
      width = _props$width === void 0 ? '100%' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? '100%' : _props$height,
      _props$flex = props.flex,
      flex = _props$flex === void 0 ? '0 1 auto' : _props$flex,
      children = props.children;
  var DefaultStyle = {
    width: width,
    height: height,
    flex: flex,
    overflow: 'auto'
  };
  return _react.default.createElement("div", {
    style: (0, _objectSpread2.default)({}, style, DefaultStyle)
  }, children);
};

var _default = InlineScrollItem;
exports.default = _default;