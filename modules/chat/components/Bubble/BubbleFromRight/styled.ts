import { styled } from "modules/core/styles";

import { Styled as BubbleFromLeft } from "../BubbleFromLeft/styled";

export const Styled = styled(BubbleFromLeft)`
  flex-direction: row;
  padding-right: ${(props) => (props.tails ? "" : props.theme.sizeBubbleTail)};

  > div {
    background: ${({ theme }) => theme.colorPrimary};
    border-top-right-radius: ${(props) => (props.tails ? 0 : props.theme.sizeCornerBubble)};
    border-top-left-radius: ${({ theme }) => theme.sizeCornerBubble};
  }

  > span {
    color: ${({ theme }) => theme.colorPrimary};
    transform: scaleX(1);
  }
`;
