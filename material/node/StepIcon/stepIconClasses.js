"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStepIconUtilityClass = getStepIconUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getStepIconUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiStepIcon', slot);
}

const stepIconClasses = (0, _core.generateUtilityClasses)('MuiStepIcon', ['root', 'active', 'completed', 'error', 'text']);
var _default = stepIconClasses;
exports.default = _default;