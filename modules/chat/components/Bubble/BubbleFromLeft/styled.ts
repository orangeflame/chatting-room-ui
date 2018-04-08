import { styled, ThemedProps } from "modules/core/styles";

import { Component, Props } from "./component";

const getBg = (props: ThemedProps<Props>) =>
  !props.type || props.type === "primary" ? props.theme.colorBg : props.theme.colorPrimary;

const getMarginBottom = ({ separation = false, theme }: ThemedProps<Props>) => {
  if (!separation) return "";
  if (separation === "big") return theme.sizeBubbleTail;
  return `calc(${theme.sizeBubbleTail} / 2)`;
};

export const Styled = styled(Component)`
  align-items: flex-start;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding-left: ${(props) => (props.tail ? "" : props.theme.sizeBubbleTail)};

  :not(:first-child) {
    margin-top: ${getMarginBottom};
  }

  > div {
    background: ${getBg};
    border-radius: ${(props) => props.theme.sizeCornerBubble};
    border-top-left-radius: ${(props) => (props.tail ? 0 : "")};
    box-shadow: ${(props) => props.theme.shadow};
    padding: ${(props) => props.theme.sizeIn(-10)} ${(props) => props.theme.sizeIn(-4)};
    position: relative;
  }

  > span {
    color: ${getBg};
    font-size: ${(props) => props.theme.sizeBubbleTail};
    transform: scaleX(-1);
    z-index: 1;
  }
`;
