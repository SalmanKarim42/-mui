"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToolbarUtilityClass = getToolbarUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getToolbarUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiToolbar', slot);
}

const toolbarClasses = (0, _core.generateUtilityClasses)('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
var _default = toolbarClasses;
exports.default = _default;