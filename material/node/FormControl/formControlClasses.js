"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormControlUtilityClasses = getFormControlUtilityClasses;
exports.default = void 0;

var _core = require("@mui/core");

function getFormControlUtilityClasses(slot) {
  return (0, _core.generateUtilityClass)('MuiFormControl', slot);
}

const formControlClasses = (0, _core.generateUtilityClasses)('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);
var _default = formControlClasses;
exports.default = _default;