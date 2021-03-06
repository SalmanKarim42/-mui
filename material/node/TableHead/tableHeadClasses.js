"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableHeadUtilityClass = getTableHeadUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getTableHeadUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiTableHead', slot);
}

const tableHeadClasses = (0, _core.generateUtilityClasses)('MuiTableHead', ['root']);
var _default = tableHeadClasses;
exports.default = _default;