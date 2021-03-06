"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuUtilityClass = getMenuUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getMenuUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiMenu', slot);
}

const menuClasses = (0, _core.generateUtilityClasses)('MuiMenu', ['root', 'paper', 'list']);
var _default = menuClasses;
exports.default = _default;