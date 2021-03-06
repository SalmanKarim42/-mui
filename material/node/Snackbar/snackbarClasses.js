"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSnackbarUtilityClass = getSnackbarUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getSnackbarUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiSnackbar', slot);
}

const snackbarClasses = (0, _core.generateUtilityClasses)('MuiSnackbar', ['root', 'anchorOriginTopCenter', 'anchorOriginBottomCenter', 'anchorOriginTopRight', 'anchorOriginBottomRight', 'anchorOriginTopLeft', 'anchorOriginBottomLeft']);
var _default = snackbarClasses;
exports.default = _default;