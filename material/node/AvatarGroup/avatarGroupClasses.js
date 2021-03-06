"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvatarGroupUtilityClass = getAvatarGroupUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getAvatarGroupUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiAvatarGroup', slot);
}

const avatarGroupClasses = (0, _core.generateUtilityClasses)('MuiAvatarGroup', ['root', 'avatar']);
var _default = avatarGroupClasses;
exports.default = _default;