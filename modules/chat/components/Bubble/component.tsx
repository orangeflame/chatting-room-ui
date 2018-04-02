import styled from "modules/core/styles";
const Container = styled.div`
  background: ${({ theme }) => theme.colorPrimary};
`;

export const Bubble = () => <Container>Hello, Bubble</Container>;
