import Container from "../Container";
import BoxTitle from "../BoxTitle/BoxTitle";
import GradientBox from "../GradientBox";
import SkelCastCard from "./Card/SkelCastCard";
import styled from "styled-components";
import SkelDetails from "./Details/SkelDetails";

const Box = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  gap: 12px;
`;

const SkelCasting = () => {
  const numberElements = 10;

  return (
    <Box>
      <Container>
        <BoxTitle title={"Casting"} />
        <GradientBox>
          {[...Array(numberElements)].map((elementInArray, index) => (
            <SkelCastCard key={index} />
          ))}
        </GradientBox>
      </Container>
      <SkelDetails/>
    </Box>
  );
};

export default SkelCasting;
