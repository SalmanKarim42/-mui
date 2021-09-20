import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getTooltipUtilityClass(slot) {
  return generateUtilityClass('MuiTooltip', slot);
}
var tooltipClasses = generateUtilityClasses('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);
export default tooltipClasses;