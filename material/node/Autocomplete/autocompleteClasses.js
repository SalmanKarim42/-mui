"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAutocompleteUtilityClass = getAutocompleteUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getAutocompleteUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiAutocomplete', slot);
}

const autocompleteClasses = (0, _core.generateUtilityClasses)('MuiAutocomplete', ['root', 'fullWidth', 'focused', 'focusVisible', 'tag', 'tagSizeSmall', 'tagSizeMedium', 'hasPopupIcon', 'hasClearIcon', 'inputRoot', 'input', 'inputFocused', 'endAdornment', 'clearIndicator', 'popupIndicator', 'popupIndicatorOpen', 'popper', 'popperDisablePortal', 'paper', 'listbox', 'loading', 'noOptions', 'option', 'groupLabel', 'groupUl']);
var _default = autocompleteClasses;
exports.default = _default;