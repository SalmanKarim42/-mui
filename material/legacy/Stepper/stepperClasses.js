import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getStepperUtilityClass(slot) {
  return generateUtilityClass('MuiStepper', slot);
}
var stepperClasses = generateUtilityClasses('MuiStepper', ['root', 'horizontal', 'vertical', 'alternativeLabel']);
export default stepperClasses;