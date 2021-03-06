import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getTimelineSeparatorUtilityClass(slot) {
  return generateUtilityClass('MuiTimelineSeparator', slot);
}
var timelineSeparatorClasses = generateUtilityClasses('MuiTimelineSeparator', ['root']);
export default timelineSeparatorClasses;