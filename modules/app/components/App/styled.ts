import { styled } from "modules/core/styles";

import { App as Component } from "./component";

export const App = styled(Component)`
  background: ${(props) => props.theme.colorBg};
  box-sizing: border-box;
  color: ${(props) => props.theme.colorTextBase};
  font-family: ${(props) => props.theme.fontBase};
  margin: 0;
  min-height: 100%;
`;
