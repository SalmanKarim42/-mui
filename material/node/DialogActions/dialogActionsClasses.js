"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDialogActionsUtilityClass = getDialogActionsUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getDialogActionsUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiDialogActions', slot);
}

const dialogActionsClasses = (0, _core.generateUtilityClasses)('MuiDialogActions', ['root', 'spacing']);
var _default = dialogActionsClasses;
exports.default = _default;