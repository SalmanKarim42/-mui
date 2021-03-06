"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRatingUtilityClass = getRatingUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getRatingUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiRating', slot);
}

const ratingClasses = (0, _core.generateUtilityClasses)('MuiRating', ['root', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'readOnly', 'disabled', 'focusVisible', 'visuallyHidden', 'pristine', 'label', 'labelEmptyValueActive', 'icon', 'iconEmpty', 'iconFilled', 'iconHover', 'iconFocus', 'iconActive', 'decimal']);
var _default = ratingClasses;
exports.default = _default;