'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 用于两列的 flex 布局
 *
 * @param {object} leftProps
 * @param {object} rightProps
 */
var LRLayout = function LRLayout(props) {
  var _props$span = props.span,
      span = _props$span === undefined ? [12, 12] : _props$span,
      children = props.children,
      _props$align = props.align,
      align = _props$align === undefined ? 'middle' : _props$align,
      _props$justify = props.justify,
      justify = _props$justify === undefined ? 'space-between' : _props$justify,
      className = props.className,
      style = props.style,
      _props$leftProps = props.leftProps,
      leftProps = _props$leftProps === undefined ? {} : _props$leftProps,
      _props$rightProps = props.rightProps,
      rightProps = _props$rightProps === undefined ? {} : _props$rightProps,
      leftStyle = props.leftStyle,
      rightStyle = props.rightStyle;

  var _ref = [].concat((0, _toConsumableArray3.default)(_react2.default.Children.toArray(children))),
      left = _ref[0],
      right = _ref[1];

  return _react2.default.createElement(
    _antd.Row,
    { type: 'flex',
      align: align,
      justify: justify,
      className: className, style: style
    },
    _react2.default.createElement(
      _antd.Col,
      (0, _extends3.default)({ span: span[0], style: leftStyle }, leftProps),
      left
    ),
    _react2.default.createElement(
      _antd.Col,
      (0, _extends3.default)({ span: span[1], style: rightStyle }, rightProps),
      right
    )
  );
};
exports.default = LRLayout;