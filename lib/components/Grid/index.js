'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(props) {
  var _props$justify = props.justify,
      justify = _props$justify === undefined ? 'space-between' : _props$justify,
      _props$align = props.align,
      align = _props$align === undefined ? 'middle' : _props$align,
      _props$colNumber = props.colNumber,
      colNumber = _props$colNumber === undefined ? 4 : _props$colNumber,
      children = props.children,
      _props$rowProps = props.rowProps,
      rowProps = _props$rowProps === undefined ? {} : _props$rowProps,
      _props$colProps = props.colProps,
      colProps = _props$colProps === undefined ? {} : _props$colProps;


  return _react2.default.createElement(
    _antd.Row,
    (0, _extends3.default)({ type: 'flex', justify: justify, align: align }, rowProps),
    _react2.default.Children.map(children, function (child) {
      return _react2.default.createElement(
        _antd.Col,
        (0, _extends3.default)({ span: 24 / colNumber }, colProps),
        child
      );
    })
  );
};
exports.default = Grid;