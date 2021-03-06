"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTouchRippleUtilityClass = getTouchRippleUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getTouchRippleUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiTouchRipple', slot);
}

const touchRippleClasses = (0, _core.generateUtilityClasses)('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
var _default = touchRippleClasses;
exports.default = _default;