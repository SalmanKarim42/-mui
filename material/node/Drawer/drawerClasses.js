"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDrawerUtilityClass = getDrawerUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getDrawerUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiDrawer', slot);
}

const drawerClasses = (0, _core.generateUtilityClasses)('MuiDrawer', ['root', 'docked', 'paper', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedRight', 'paperAnchorDockedTop', 'paperAnchorDockedBottom', 'modal']);
var _default = drawerClasses;
exports.default = _default;