import styled from "styled-components";

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #262626;
`;

const Link = styled.a`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #60a5fa;
  text-decoration: none;
`;

const BoxTitleLink = ({ title}) => {
  const link = title.split(' ').join('_').toLowerCase()

  return (
    <BoxContainer>
      <Title>{title}</Title>
      <Link href={`/${link}`}>See more</Link>
    </BoxContainer>
  );
};

export default BoxTitleLink;
