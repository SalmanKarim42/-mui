import { generateUtilityClass, generateUtilityClasses } from '@mui/core';
export function getAvatarUtilityClass(slot) {
  return generateUtilityClass('MuiAvatar', slot);
}
const avatarClasses = generateUtilityClasses('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
export default avatarClasses;