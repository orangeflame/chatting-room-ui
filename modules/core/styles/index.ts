import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import * as themes from "./themes";
import { Theme } from "./themes";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, themes, withTheme, Theme };
export default styled;
