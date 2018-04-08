import styled from "styled-components";

import { Component } from "./component";

export const Styled = styled(Component)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 1em;

  > svg {
    fill: currentColor;
    flex-basis: 100%;
    stroke-width: 0;
    stroke: currentColor;
  }
`;
