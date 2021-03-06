"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectUtilityClasses = getSelectUtilityClasses;
exports.default = void 0;

var _core = require("@mui/core");

function getSelectUtilityClasses(slot) {
  return (0, _core.generateUtilityClass)('MuiSelect', slot);
}

const selectClasses = (0, _core.generateUtilityClasses)('MuiSelect', ['root', 'select', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput']);
var _default = selectClasses;
exports.default = _default;