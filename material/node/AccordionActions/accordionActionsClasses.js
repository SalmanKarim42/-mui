"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccordionActionsUtilityClass = getAccordionActionsUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getAccordionActionsUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiAccordionActions', slot);
}

const accordionActionsClasses = (0, _core.generateUtilityClasses)('MuiAccordionActions', ['root', 'spacing']);
var _default = accordionActionsClasses;
exports.default = _default;