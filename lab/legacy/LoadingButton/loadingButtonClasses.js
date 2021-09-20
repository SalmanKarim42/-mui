import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getLoadingButtonUtilityClass(slot) {
  return generateUtilityClass('MuiLoadingButton', slot);
}
var loadingButtonClasses = generateUtilityClasses('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
export default loadingButtonClasses;