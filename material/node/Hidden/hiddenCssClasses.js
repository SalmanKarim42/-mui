"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHiddenCssUtilityClass = getHiddenCssUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getHiddenCssUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('PrivateHiddenCss', slot);
}

const hiddenCssClasses = (0, _core.generateUtilityClasses)('PrivateHiddenCss', ['root', 'xlDown', 'xlUp', 'onlyXl', 'lgDown', 'lgUp', 'onlyLg', 'mdDown', 'mdUp', 'onlyMd', 'smDown', 'smUp', 'onlySm', 'xsDown', 'xsUp', 'onlyXs']);
var _default = hiddenCssClasses;
exports.default = _default;