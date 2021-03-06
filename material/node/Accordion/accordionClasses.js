"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccordionUtilityClass = getAccordionUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getAccordionUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiAccordion', slot);
}

const accordionClasses = (0, _core.generateUtilityClasses)('MuiAccordion', ['root', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);
var _default = accordionClasses;
exports.default = _default;