import Container from "./Container";
import BoxTitle from "./BoxTitle/BoxTitle";
import GradientBox from "./GradientBox";
import CastCard from "./Card/CastCard";
import Details from "./Details";
import styled from "styled-components";
import { fetchData } from "../Fetchers/fetchData";
import { useQuery } from "react-query";
import SkelCasting from "./Skeleton/SkelCasting";

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
