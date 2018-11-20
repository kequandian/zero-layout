'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$flex = _ref.flex,
      flex = _ref$flex === undefined ? '0 1 auto' : _ref$flex;

  var defaultStyle = (0, _extends3.default)({}, style, {
    flex: flex
  });
  var defaultClassName = className;
  return _react2.default.createElement(
    'div',
    { style: defaultStyle, className: defaultClassName },
    children
  );
};