'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineScrollLayout = function InlineScrollLayout(props) {
  var _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      children = props.children;

  var DefaultStyle = {
    display: 'flex'
  };

  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, style, DefaultStyle), className: className },
    children
  );
};
exports.default = InlineScrollLayout;