"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTabScrollButtonUtilityClass = getTabScrollButtonUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getTabScrollButtonUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiTabScrollButton', slot);
}

const tabScrollButtonClasses = (0, _core.generateUtilityClasses)('MuiTabScrollButton', ['root', 'vertical', 'horizontal', 'disabled']);
var _default = tabScrollButtonClasses;
exports.default = _default;