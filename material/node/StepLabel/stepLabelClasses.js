"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStepLabelUtilityClass = getStepLabelUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getStepLabelUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiStepLabel', slot);
}

const stepLabelClasses = (0, _core.generateUtilityClasses)('MuiStepLabel', ['root', 'horizontal', 'vertical', 'label', 'active', 'completed', 'error', 'disabled', 'iconContainer', 'alternativeLabel', 'labelContainer']);
var _default = stepLabelClasses;
exports.default = _default;