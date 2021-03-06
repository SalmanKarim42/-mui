/** @license Material-UI v5.0.0-rc.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import scStyled from 'styled-components';
export default function styled(tag, options) {
  var stylesFactory;

  if (options) {
    stylesFactory = scStyled(tag).withConfig({
      displayName: options.label,
      shouldForwardProp: options.shouldForwardProp
    });
  } else {
    stylesFactory = scStyled(tag);
  }

  if (process.env.NODE_ENV !== 'production') {
    return function () {
      var component = typeof tag === 'string' ? "\"".concat(tag, "\"") : 'component';

      for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      if (styles.length === 0) {
        console.error(["Material-UI: Seems like you called `styled(".concat(component, ")()` without a `style` argument."), 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(function (style) {
        return style === undefined;
      })) {
        console.error("Material-UI: the styled(".concat(component, ")(...args) API requires all its args to be defined."));
      }

      return stylesFactory.apply(void 0, styles);
    };
  }

  return stylesFactory;
}
export { ThemeContext, keyframes, css } from 'styled-components';
export { default as StyledEngineProvider } from './StyledEngineProvider';
export { default as GlobalStyles } from './GlobalStyles';