import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getButtonGroupUtilityClass(slot) {
  return generateUtilityClass('MuiButtonGroup', slot);
}
var buttonGroupClasses = generateUtilityClasses('MuiButtonGroup', ['root', 'contained', 'outlined', 'text', 'disableElevation', 'disabled', 'fullWidth', 'vertical', 'grouped', 'groupedHorizontal', 'groupedVertical', 'groupedText', 'groupedTextHorizontal', 'groupedTextVertical', 'groupedTextPrimary', 'groupedTextSecondary', 'groupedOutlined', 'groupedOutlinedHorizontal', 'groupedOutlinedVertical', 'groupedOutlinedPrimary', 'groupedOutlinedSecondary', 'groupedContained', 'groupedContainedHorizontal', 'groupedContainedVertical', 'groupedContainedPrimary', 'groupedContainedSecondary']);
export default buttonGroupClasses;