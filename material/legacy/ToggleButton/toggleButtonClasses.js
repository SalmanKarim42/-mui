import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getToggleButtonUtilityClass(slot) {
  return generateUtilityClass('MuiToggleButton', slot);
}
var toggleButtonClasses = generateUtilityClasses('MuiToggleButton', ['root', 'disabled', 'selected', 'standard', 'primary', 'secondary', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
export default toggleButtonClasses;