"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChipUtilityClass = getChipUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getChipUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiChip', slot);
}

const chipClasses = (0, _core.generateUtilityClasses)('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorPrimary', 'colorSecondary', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'focusVisible']);
var _default = chipClasses;
exports.default = _default;