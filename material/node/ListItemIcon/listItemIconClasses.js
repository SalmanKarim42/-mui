"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListItemIconUtilityClass = getListItemIconUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getListItemIconUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiListItemIcon', slot);
}

const listItemIconClasses = (0, _core.generateUtilityClasses)('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
var _default = listItemIconClasses;
exports.default = _default;