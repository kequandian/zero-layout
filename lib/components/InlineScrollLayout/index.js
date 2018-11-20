'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InlineScrollLayout = require('./InlineScrollLayout');

var _InlineScrollLayout2 = _interopRequireDefault(_InlineScrollLayout);

var _InlineScrollItem = require('./InlineScrollItem');

var _InlineScrollItem2 = _interopRequireDefault(_InlineScrollItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_InlineScrollLayout2.default.InlineScrollItem = _InlineScrollItem2.default;
exports.default = _InlineScrollLayout2.default;