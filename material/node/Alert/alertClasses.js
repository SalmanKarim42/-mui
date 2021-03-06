"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlertUtilityClass = getAlertUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getAlertUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiAlert', slot);
}

const alertClasses = (0, _core.generateUtilityClasses)('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);
var _default = alertClasses;
exports.default = _default;