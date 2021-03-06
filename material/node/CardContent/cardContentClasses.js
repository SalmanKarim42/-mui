"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCardContentUtilityClass = getCardContentUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getCardContentUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiCardContent', slot);
}

const cardContentClasses = (0, _core.generateUtilityClasses)('MuiCardContent', ['root']);
var _default = cardContentClasses;
exports.default = _default;