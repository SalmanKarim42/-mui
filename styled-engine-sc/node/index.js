/** @license Material-UI v5.0.0-rc.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = styled;
Object.defineProperty(exports, "ThemeContext", {
  enumerable: true,
  get: function () {
    return _styledComponents.ThemeContext;
  }
});
Object.defineProperty(exports, "keyframes", {
  enumerable: true,
  get: function () {
    return _styledComponents.keyframes;
  }
});
Object.defineProperty(exports, "css", {
  enumerable: true,
  get: function () {
    return _styledComponents.css;
  }
});
Object.defineProperty(exports, "StyledEngineProvider", {
  enumerable: true,
  get: function () {
    return _StyledEngineProvider.default;
  }
});
Object.defineProperty(exports, "GlobalStyles", {
  enumerable: true,
  get: function () {
    return _GlobalStyles.default;
  }
});

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StyledEngineProvider = _interopRequireDefault(require("./StyledEngineProvider"));

var _GlobalStyles = _interopRequireDefault(require("./GlobalStyles"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function styled(tag, options) {
  let stylesFactory;

  if (options) {
    stylesFactory = (0, _styledComponents.default)(tag).withConfig({
      displayName: options.label,
      shouldForwardProp: options.shouldForwardProp
    });
  } else {
    stylesFactory = (0, _styledComponents.default)(tag);
  }

  if (process.env.NODE_ENV !== 'production') {
    return (...styles) => {
      const component = typeof tag === 'string' ? `"${tag}"` : 'component';

      if (styles.length === 0) {
        console.error([`Material-UI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(style => style === undefined)) {
        console.error(`Material-UI: the styled(${component})(...args) API requires all its args to be defined.`);
      }

      return stylesFactory(...styles);
    };
  }

  return stylesFactory;
}