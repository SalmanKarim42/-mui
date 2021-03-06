"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMobileStepperUtilityClass = getMobileStepperUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getMobileStepperUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiMobileStepper', slot);
}

const mobileStepperClasses = (0, _core.generateUtilityClasses)('MuiMobileStepper', ['root', 'positionBottom', 'positionTop', 'positionStatic', 'dots', 'dot', 'dotActive', 'progress']);
var _default = mobileStepperClasses;
exports.default = _default;