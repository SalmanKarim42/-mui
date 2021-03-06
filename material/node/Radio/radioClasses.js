"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRadioUtilityClass = getRadioUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getRadioUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiRadio', slot);
}

const radioClasses = (0, _core.generateUtilityClasses)('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary']);
var _default = radioClasses;
exports.default = _default;