"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerUtilityClass = getContainerUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getContainerUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiContainer', slot);
}

const containerClasses = (0, _core.generateUtilityClasses)('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);
var _default = containerClasses;
exports.default = _default;