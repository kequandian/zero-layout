'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineScrollItem = function InlineScrollItem(props) {
  var _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      _props$width = props.width,
      width = _props$width === undefined ? '100%' : _props$width,
      _props$height = props.height,
      height = _props$height === undefined ? '100%' : _props$height,
      _props$flex = props.flex,
      flex = _props$flex === undefined ? '0 1 auto' : _props$flex,
      children = props.children;

  var DefaultStyle = {
    width: width,
    height: height,
    flex: flex,
    overflow: 'auto'
  };

  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, style, DefaultStyle) },
    children
  );
};
exports.default = InlineScrollItem;