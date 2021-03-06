"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBottomNavigationActionUtilityClass = getBottomNavigationActionUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getBottomNavigationActionUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiBottomNavigationAction', slot);
}

const bottomNavigationActionClasses = (0, _core.generateUtilityClasses)('MuiBottomNavigationAction', ['root', 'iconOnly', 'selected', 'label']);
var _default = bottomNavigationActionClasses;
exports.default = _default;