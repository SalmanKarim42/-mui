"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormGroupUtilityClass = getFormGroupUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getFormGroupUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiFormGroup', slot);
}

const formGroupClasses = (0, _core.generateUtilityClasses)('MuiFormGroup', ['root', 'row']);
var _default = formGroupClasses;
exports.default = _default;