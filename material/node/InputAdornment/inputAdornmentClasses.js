"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputAdornmentUtilityClass = getInputAdornmentUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getInputAdornmentUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiInputAdornment', slot);
}

const inputAdornmentClasses = (0, _core.generateUtilityClasses)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
var _default = inputAdornmentClasses;
exports.default = _default;