import { injectGlobal, Theme } from "modules/core/styles";

export const injectGlobalWithTheme = (theme: Theme) => injectGlobal`
  :root {
    background: ${theme.colorBg};
    box-sizing: border-box;
    color: ${theme.colorTextBase};
    font-family: ${theme.fontBase};
    margin: 0;
    min-height: 100%;
  }

  body {
    margin: 0;
    min-height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  a,
  a:visited {
    text-decoration: none;
  }
`;
