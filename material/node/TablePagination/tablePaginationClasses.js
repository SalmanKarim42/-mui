"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTablePaginationUtilityClass = getTablePaginationUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getTablePaginationUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiTablePagination', slot);
}

const tablePaginationClasses = (0, _core.generateUtilityClasses)('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
var _default = tablePaginationClasses;
exports.default = _default;