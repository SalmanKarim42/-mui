import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getTimelineUtilityClass(slot) {
  return generateUtilityClass('MuiTimeline', slot);
}
const timelineClasses = generateUtilityClasses('MuiTimeline', ['root', 'positionLeft', 'positionRight', 'positionAlternate']);
export default timelineClasses;