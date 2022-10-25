import Container from "./Container";
import BoxTitle from "./BoxTitle";
import GradientBox from "./GradientBox";
import CastCard from "./Card/CastCard";
import axios from "axios";
import MovieDetails from "./MovieDetails";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  gap: 12px;
`;

const GetSimilar = ({ movieId, movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    function getCastById() {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=183f9e8b57c733b82d3f05b4e96c4398&language=en-US`;
      axios
        .get(url)
        .then((res) => {
          setCast((prevState) => (prevState = res.data.cast));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getCastById();
  }, []);

  return (
    <Box>
      <Container>
        <BoxTitle title={"Casting"} />
        <GradientBox>
          {cast.map((char) => (
            <CastCard key={char.id} cast={char} />
          ))}
        </GradientBox>
      </Container>
      <MovieDetails movie={movie} />
    </Box>
  );
};

export default GetSimilar;
