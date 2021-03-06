"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuItemUtilityClass = getMenuItemUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getMenuItemUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiMenuItem', slot);
}

const menuItemClasses = (0, _core.generateUtilityClasses)('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
var _default = menuItemClasses;
exports.default = _default;