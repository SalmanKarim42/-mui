"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListItemUtilityClass = getListItemUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getListItemUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiListItem', slot);
}

const listItemClasses = (0, _core.generateUtilityClasses)('MuiListItem', ['root', 'container', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'padding', 'button', 'secondaryAction', 'selected']);
var _default = listItemClasses;
exports.default = _default;