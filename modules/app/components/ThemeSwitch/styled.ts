import { styled } from "modules/core/styles";

import { ThemeSwitch as Component } from "./component";

export const ThemeSwitch = styled(Component)`
  background: transparent;
  border: none;
  left: 0;
  outline: none;
  position: fixed;
  top: 0;
  padding: ${(props) => props.theme.sizeIn(1)};
`;
