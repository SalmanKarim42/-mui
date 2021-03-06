"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCardUtilityClass = getCardUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getCardUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiCard', slot);
}

const cardClasses = (0, _core.generateUtilityClasses)('MuiCard', ['root']);
var _default = cardClasses;
exports.default = _default;