import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiToolbar', slot);
}
const toolbarClasses = generateUtilityClasses('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
export default toolbarClasses;