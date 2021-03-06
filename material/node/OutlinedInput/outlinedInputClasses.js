"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOutlinedInputUtilityClass = getOutlinedInputUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getOutlinedInputUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiOutlinedInput', slot);
}

const outlinedInputClasses = (0, _core.generateUtilityClasses)('MuiOutlinedInput', ['root', 'colorSecondary', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'notchedOutline', 'input', 'inputSizeSmall', 'inputMultiline', 'inputAdornedStart', 'inputAdornedEnd']);
var _default = outlinedInputClasses;
exports.default = _default;