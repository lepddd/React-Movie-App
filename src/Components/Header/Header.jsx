import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 10px 40px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  min-width: 250px;
`;

const Title = styled(Link)`
  width: fit-content;
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(90deg, #22d3ee 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title to="/">RMovies</Title>
    </StyledHeader>
  );
};
export default Header;
