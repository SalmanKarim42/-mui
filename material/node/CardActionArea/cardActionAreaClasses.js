"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCardActionAreaUtilityClass = getCardActionAreaUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getCardActionAreaUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiCardActionArea', slot);
}

const cardActionAreaClasses = (0, _core.generateUtilityClasses)('MuiCardActionArea', ['root', 'focusVisible', 'focusHighlight']);
var _default = cardActionAreaClasses;
exports.default = _default;