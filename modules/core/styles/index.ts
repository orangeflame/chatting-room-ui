import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule, ThemeProps as OriginalThemeProps } from "styled-components";

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

type ThemeProps = OriginalThemeProps<Theme>;
type ThemedProps<Props> = Props & ThemeProps;

export { css, injectGlobal, keyframes, ThemeProvider, themes, withTheme, Theme, styled, ThemeProps, ThemedProps };
