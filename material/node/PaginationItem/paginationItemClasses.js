"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginationItemUtilityClass = getPaginationItemUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getPaginationItemUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiPaginationItem', slot);
}

const paginationItemClasses = (0, _core.generateUtilityClasses)('MuiPaginationItem', ['root', 'page', 'sizeSmall', 'sizeLarge', 'text', 'textPrimary', 'textSecondary', 'outlined', 'outlinedPrimary', 'outlinedSecondary', 'rounded', 'ellipsis', 'firstLast', 'previousNext', 'focusVisible', 'disabled', 'selected', 'icon']);
var _default = paginationItemClasses;
exports.default = _default;