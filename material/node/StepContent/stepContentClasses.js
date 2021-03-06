"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStepContentUtilityClass = getStepContentUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getStepContentUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiStepContent', slot);
}

const stepContentClasses = (0, _core.generateUtilityClasses)('MuiStepContent', ['root', 'last', 'transition']);
var _default = stepContentClasses;
exports.default = _default;