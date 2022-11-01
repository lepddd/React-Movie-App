import Container from "../Container";
import GradientBox from "../GradientBox";
import BoxTitle from "../BoxTitle/BoxTitle";
import SkelMovieCard from "./Card/SkelMovieCard";

const SkelMovies = ({ title }) => {
  const numberElements = 19;

  return (
    <Container>
      <BoxTitle title={title} />
      <GradientBox>
        {[...Array(numberElements)].map((elementInArray, index) => (
          <SkelMovieCard key={index} />
        ))}
      </GradientBox>
    </Container>
  );
};

export default SkelMovies;
