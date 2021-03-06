"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputBaseUtilityClass = getInputBaseUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getInputBaseUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiInputBase', slot);
}

const inputBaseClasses = (0, _core.generateUtilityClasses)('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
var _default = inputBaseClasses;
exports.default = _default;