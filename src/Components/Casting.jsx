import Container from "./Container";
import BoxTitle from "./BoxTitle/BoxTitle";
import GradientBox from "./GradientBox";
import CastCard from "./Card/CastCard";
import Details from "./Details";
import styled from "styled-components";
import { fetchData } from "../Fetchers/fetchData";
import { useQuery } from "react-query";

const Box = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  gap: 12px;
`;

const Casting = ({ movie, movieId }) => {
  const url = `https://app-teste-weather.herokuapp.com/movie/cast/id?movieid=${movieId}`;

  const { isError, isLoading, data, error } = useQuery(
    ["cast"],
    () => fetchData(url),
    {
      staleTime: 3000,
    }
  );

  if (isLoading) {
    console.log("Loading...");
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    console.log("Error: ", error);
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <Box>
      <Container>
        <BoxTitle title={"Casting"} />
        <GradientBox>
          {data.cast.map((cast) => (
            <CastCard key={cast.id} cast={cast} />
          ))}
        </GradientBox>
      </Container>
      <Details movie={movie} />
    </Box>
  );
};

export default Casting;
