"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputLabelUtilityClasses = getInputLabelUtilityClasses;
exports.default = void 0;

var _core = require("@mui/core");

function getInputLabelUtilityClasses(slot) {
  return (0, _core.generateUtilityClass)('MuiInputLabel', slot);
}

const inputLabelClasses = (0, _core.generateUtilityClasses)('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);
var _default = inputLabelClasses;
exports.default = _default;