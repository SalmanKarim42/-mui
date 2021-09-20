import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getCardHeaderUtilityClass(slot) {
  return generateUtilityClass('MuiCardHeader', slot);
}
var cardHeaderClasses = generateUtilityClasses('MuiCardHeader', ['root', 'avatar', 'action', 'content', 'title', 'subheader']);
export default cardHeaderClasses;