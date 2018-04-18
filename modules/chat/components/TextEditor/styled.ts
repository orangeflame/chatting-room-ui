import { styled } from "modules/core/styles";

import { Component } from "./component";

export const Styled = styled(Component)`
  background-color: ${(props) => props.theme.colorBg};
  display: flex;
  flex-direction: row;
  padding: 1em;
  min-height: 2.75em;
  max-height: 20vh;
`;
