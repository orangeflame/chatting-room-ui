import styled from "modules/core/styles";
const Container = styled.div`
  background: ${({ theme }) => theme.colorPrimary};
  border-radius: ${({ theme }) => theme.sizeCornerBubble};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: "0.25em 0.5em";
`;

export const Bubble = (props) => <Container>{props.children}</Container>;
