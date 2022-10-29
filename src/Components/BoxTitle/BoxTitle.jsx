import styled from "styled-components";

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #262626;
`;

const BoxTitle = ({ title }) => {
  return <Title>{title}</Title>;
};
export default BoxTitle;
