import styled from "styled-components";

const StyledLogo = styled.a`
  padding: 10px;
  background: #4f46e5;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #f4f4f4;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`;

const Logo = () => {
  return <StyledLogo href="/">RMovie</StyledLogo>;
};

export default Logo;
