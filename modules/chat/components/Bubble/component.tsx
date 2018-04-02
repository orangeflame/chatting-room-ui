import styled from "modules/core/styles";
const Container = styled.div`
  background: ${({ theme }) => theme.colorPrimary};
  border-radius: 5px;
  color: white;
  width: fit-content;
  padding: 5px;
`;

export const Bubble = (props) => <Container>{props.children}</Container>;
