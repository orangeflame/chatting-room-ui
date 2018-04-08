import { styled } from "modules/core/styles";

import { Component } from "./component";

export const Styled = styled(Component)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin: ${(props) => props.theme.sizeIn(-10)};
  > div {
    background: ${({ theme }) => theme.colorBg};
    border-radius: ${({ theme }) => theme.sizeCornerBubble};
    border-top-left-radius: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: ${({ theme }) => theme.sizeIn(-10)} ${({ theme }) => theme.sizeIn(-4)};
    width: fit-content;
  }
  > span {
    color: ${({ theme }) => theme.colorBg};
    font-size: ${({ theme }) => theme.sizeIn(-10)};
    transform: rotateY(-180deg);
  }
`;
