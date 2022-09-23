import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  padding: 10px 100px;
  background: linear-gradient(180deg, #262626 0%, #171717 100%);
  width: 100%;
`;
const HeaderBar = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default HeaderBar;
