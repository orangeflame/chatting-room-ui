import { BubbleFromLeft } from "../BubbleFromLeft";

export const Styled = BubbleFromLeft.extend`
  flex-direction: row;
  padding-right: ${(props) => (props.tail ? "" : props.theme.sizeBubbleTail)};

  > div {
    border-top-left-radius: ${(props) => props.theme.sizeCornerBubble};
    border-top-right-radius: ${(props) => (props.tail ? 0 : "")};
  }

  > span {
    transform: none;
  }
`;
