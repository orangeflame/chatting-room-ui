import { styled } from "modules/core/styles";

import { Component } from "./component";

export const Styled = styled(Component)`
  background: #fff;
  border-radius: ${({ theme }) => theme.sizeCornerBubble};
  padding: 0.5em;
  flex: 1;
  overflow-y: auto;
  outline: none;
`;
