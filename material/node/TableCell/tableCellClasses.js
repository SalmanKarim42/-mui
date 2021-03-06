"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableCellUtilityClass = getTableCellUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getTableCellUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiTableCell', slot);
}

const tableCellClasses = (0, _core.generateUtilityClasses)('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
var _default = tableCellClasses;
exports.default = _default;