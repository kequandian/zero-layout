"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InlineScrollLayout = _interopRequireDefault(require("./InlineScrollLayout"));

var _InlineScrollItem = _interopRequireDefault(require("./InlineScrollItem"));

_InlineScrollLayout.default.InlineScrollItem = _InlineScrollItem.default;
var _default = _InlineScrollLayout.default;
exports.default = _default;