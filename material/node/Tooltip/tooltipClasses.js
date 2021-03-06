"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTooltipUtilityClass = getTooltipUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getTooltipUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiTooltip', slot);
}

const tooltipClasses = (0, _core.generateUtilityClasses)('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);
var _default = tooltipClasses;
exports.default = _default;