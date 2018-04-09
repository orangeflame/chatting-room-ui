import { styled } from "modules/core/styles";

import { Component } from "./component";

export const Styled = styled(Component)`
  display: flex;
  flex-direction: row;
  min-height: 10vh;
  max-height: 20vh;
  padding: 1em;
`;
