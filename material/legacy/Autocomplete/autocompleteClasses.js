import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getAutocompleteUtilityClass(slot) {
  return generateUtilityClass('MuiAutocomplete', slot);
}
var autocompleteClasses = generateUtilityClasses('MuiAutocomplete', ['root', 'fullWidth', 'focused', 'focusVisible', 'tag', 'tagSizeSmall', 'tagSizeMedium', 'hasPopupIcon', 'hasClearIcon', 'inputRoot', 'input', 'inputFocused', 'endAdornment', 'clearIndicator', 'popupIndicator', 'popupIndicatorOpen', 'popper', 'popperDisablePortal', 'paper', 'listbox', 'loading', 'noOptions', 'option', 'groupLabel', 'groupUl']);
export default autocompleteClasses;