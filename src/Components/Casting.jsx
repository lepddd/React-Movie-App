import BoxTitle from "./BoxTitle/BoxTitle";
import Container from "./Container";
import GradientBox from "./GradientBox";
import CastCard from "./Card/CastCard";
import Details from "./Details";
import styled from "styled-components";
import { fetchData } from "../Fetchers/fetchData";
import { useQuery } from "react-query";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  gap: 12px;
  @media screen and (min-width: 800px){
    flex-direction: row;        
  }
`;

const Casting = ({ movie, movieId }) => {
  const url = `https://app-teste-weather.herokuapp.com/movie/cast/id?movieid=${movieId}`;

  const { data } = useQuery(["cast"], () => fetchData(url));

  return (
    <Box>
      <Container>
        <BoxTitle title={"Casting"} />
        <GradientBox>
          {data?.cast.map((cast) => (
            <CastCard key={cast.id} cast={cast} />
          ))}
        </GradientBox>
      </Container>
      <Details movie={movie} />
    </Box>
  );
};

export default Casting;
