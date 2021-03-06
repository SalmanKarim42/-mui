"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDialogTitleUtilityClass = getDialogTitleUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getDialogTitleUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiDialogTitle', slot);
}

const dialogTitleClasses = (0, _core.generateUtilityClasses)('MuiDialogTitle', ['root']);
var _default = dialogTitleClasses;
exports.default = _default;