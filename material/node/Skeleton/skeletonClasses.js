"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSkeletonUtilityClass = getSkeletonUtilityClass;
exports.default = void 0;

var _core = require("@mui/core");

function getSkeletonUtilityClass(slot) {
  return (0, _core.generateUtilityClass)('MuiSkeleton', slot);
}

const skeletonClasses = (0, _core.generateUtilityClasses)('MuiSkeleton', ['root', 'text', 'rectangular', 'circular', 'pulse', 'wave', 'withChildren', 'fitContent', 'heightAuto']);
var _default = skeletonClasses;
exports.default = _default;