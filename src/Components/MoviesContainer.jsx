import styled from "styled-components";
import axios from "axios";
import { useEffect, useReducer } from "react";
import CardMovie from "./CardMovie";
import { INITIAL_VALUES, movieReducer } from "../movieReducer";

const Container = styled.div`
  max-width: 750px;
  margin: 40px auto;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #f4f4f4;
  margin-bottom: 20px;
`;

const MoreBtn = styled.a`
  display: block;
  width: fit-content;
  text-decoration: none;
  background-color: #4f46e5;
  color: #f4f4f4;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  margin: 20px auto 0 auto;
  border-radius: 4px;
`;
/* https://api.themoviedb.org/3/movie/upcoming?api_key=183f9e8b57c733b82d3f05b4e96c4398&language=en-US&page=1
https://api.themoviedb.org/3/movie/top_rated?api_key=183f9e8b57c733b82d3f05b4e96c4398&language=en-US&page=1 */

const MoviesContainer = ({ title, endpoint, qtn, link }) => {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_VALUES);

  const url = `https://api.themoviedb.org/3/movie/${endpoint}?api_key=183f9e8b57c733b82d3f05b4e96c4398&language=en-US&page=1`;

  useEffect(() => {
    async function getData(url) {
      dispatch({ type: "FETCH_START" });
      const res = await axios.get(url);
      try {
        const data = res.data.results.slice(0, qtn);
        dispatch({ type: "FETCH_SUCCSESS", payload: data });
      } catch (error) {
        console.log(error.message);
        dispatch({ type: "FETCH_ERROR" });
      }
    }
    getData(url);
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      {Object.keys(state.movies).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Box>
          {state.movies.map((movie, index) => (
            <CardMovie
              key={index}
              posterPath={movie.poster_path}
              avg={movie.vote_average}
            />
          ))}
        </Box>
      )}
      <MoreBtn href={`${link}`}>More</MoreBtn>
    </Container>
  );
};

export default MoviesContainer;
