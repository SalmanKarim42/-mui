import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getTableUtilityClass(slot) {
  return generateUtilityClass('MuiTable', slot);
}
const tableClasses = generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);
export default tableClasses;