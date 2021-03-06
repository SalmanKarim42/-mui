import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getCheckboxUtilityClass(slot) {
  return generateUtilityClass('MuiCheckbox', slot);
}
var checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
export default checkboxClasses;