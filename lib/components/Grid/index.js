"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var Grid = function Grid(props) {
  var _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'space-between' : _props$justify,
      _props$align = props.align,
      align = _props$align === void 0 ? 'middle' : _props$align,
      _props$colNumber = props.colNumber,
      colNumber = _props$colNumber === void 0 ? 4 : _props$colNumber,
      children = props.children,
      _props$rowProps = props.rowProps,
      rowProps = _props$rowProps === void 0 ? {} : _props$rowProps,
      _props$colProps = props.colProps,
      colProps = _props$colProps === void 0 ? {} : _props$colProps;
  return _react.default.createElement(_antd.Row, (0, _extends2.default)({
    type: "flex",
    justify: justify,
    align: align
  }, rowProps), _react.default.Children.map(children, function (child) {
    return _react.default.createElement(_antd.Col, (0, _extends2.default)({
      span: 24 / colNumber
    }, colProps), child);
  }));
};

var _default = Grid;
exports.default = _default;