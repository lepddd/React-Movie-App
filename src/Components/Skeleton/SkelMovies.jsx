import Container from "../Container";
import GradientBox from "../GradientBox";
import BoxTitleLink from "../BoxTitle/BoxTitleLink";
import SkelMovieCard from "./Card/SkelMovieCard";

const SkelMovies = ({ title }) => {
  const numberElements = 10;

  return (
    <Container>
      <BoxTitleLink title={title} />
      <GradientBox>
        {[...Array(numberElements)].map((elementInArray, index) => (
          <SkelMovieCard key={index} />
        ))}
      </GradientBox>
    </Container>
  );
};

export default SkelMovies;
