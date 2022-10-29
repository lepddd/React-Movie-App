import Container from "./Container";
import BoxTitle from "./BoxTitle/BoxTitle";
import GradientBox from "./GradientBox";
import CastCard from "./Card/CastCard";
import MovieDetails from "./MovieDetails";
import styled from "styled-components";
import { fetchData } from "../fetchData";

const Box = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  gap: 12px;
`;

const GetSimilar = ({ movie, movieId }) => {
  const url = `https://app-teste-weather.herokuapp.com/movie/cast/id?movieid=${movieId}`;

  const { loading, error, data } = fetchData(url);

  return (
    <Box>
      <Container>
        <BoxTitle title={"Casting"} />
        <GradientBox>
          {data.cast?.map((cast) => (
            <CastCard key={cast.id} cast={cast} />
          ))}
        </GradientBox>
      </Container>
      <MovieDetails movie={movie} />
    </Box>
  );
};

export default GetSimilar;
