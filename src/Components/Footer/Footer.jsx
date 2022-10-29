import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const StyledFooter = styled.footer`
  padding: 20px 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`;
const Title = styled(Link)`
  font-size: 32px;
  line-height: 32px;
  font-weight: 800;
  background: linear-gradient(90deg, #22d3ee 0%, #60a5fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const GithubIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Title to="/">RMovies</Title>
      <GithubIcon href="https://github.com/lepddd">
        <Icon
          icon="akar-icons:github-outline-fill"
          color="#262626"
          width="24"
          height="24"
        />
      </GithubIcon>
    </StyledFooter>
  );
};

export default Footer;
