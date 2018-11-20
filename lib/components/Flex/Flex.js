'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _props$align = props.align,
      align = _props$align === undefined ? 'center' : _props$align,
      _props$justify = props.justify,
      justify = _props$justify === undefined ? 'space-between' : _props$justify,
      _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      children = props.children;

  var defaultStyle = (0, _extends3.default)({}, style, {
    alignItems: align,
    justifyContent: justify
  });
  var defaultClassName = 'Zele-Layout-flex ' + className;

  return _react2.default.createElement(
    'div',
    { style: defaultStyle, className: defaultClassName },
    children
  );
};