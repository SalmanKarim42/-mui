import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getCollapseUtilityClass(slot) {
  return generateUtilityClass('MuiCollapse', slot);
}
var collapseClasses = generateUtilityClasses('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
export default collapseClasses;