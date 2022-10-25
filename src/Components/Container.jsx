import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-width: 260px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto 0 auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
