"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

/**
 * 用于两列的 flex 布局
 *
 * @param {object} leftProps
 * @param {object} rightProps
 */
var LRLayout = function LRLayout(props) {
  var _props$span = props.span,
      span = _props$span === void 0 ? [12, 12] : _props$span,
      children = props.children,
      _props$align = props.align,
      align = _props$align === void 0 ? 'middle' : _props$align,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'space-between' : _props$justify,
      className = props.className,
      style = props.style,
      _props$leftProps = props.leftProps,
      leftProps = _props$leftProps === void 0 ? {} : _props$leftProps,
      _props$rightProps = props.rightProps,
      rightProps = _props$rightProps === void 0 ? {} : _props$rightProps,
      leftStyle = props.leftStyle,
      rightStyle = props.rightStyle;

  var _ref = (0, _toConsumableArray2.default)(_react.default.Children.toArray(children)),
      left = _ref[0],
      right = _ref[1];

  return _react.default.createElement(_antd.Row, {
    type: "flex",
    align: align,
    justify: justify,
    className: className,
    style: style
  }, _react.default.createElement(_antd.Col, (0, _extends2.default)({
    span: span[0],
    style: leftStyle
  }, leftProps), left), _react.default.createElement(_antd.Col, (0, _extends2.default)({
    span: span[1],
    style: rightStyle
  }, rightProps), right));
};

var _default = LRLayout;
exports.default = _default;