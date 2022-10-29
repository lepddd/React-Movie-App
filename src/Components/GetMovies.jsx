import { useEffect, useReducer } from "react";
import Container from "./Container";
import GradientBox from "./GradientBox";
import BoxTitleLink from "./BoxTitle/BoxTitleLink";
import MovieCard from "./Card/MovieCard";
import MovieCardPlaceholder from "./Card/MovieCardPlaceholder";
import { fetchData } from "../fetchData";

const GetMovies = ({ title }) => {
  const endpoint = title.split(" ").join("_").toLowerCase();

  const url = `https://app-teste-weather.herokuapp.com/movie/${endpoint}`;

  const { loading, error, data } = fetchData(url);

  const placeholder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <Container>
      <BoxTitleLink title={title} />
      <GradientBox>
        {loading
          ? placeholder.map((indice) => <MovieCardPlaceholder key={indice} />)
          : data.results?.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                vote={movie.vote_average}
                id={movie.id}
                title={movie.title}
              />
            ))}
      </GradientBox>
    </Container>
  );
};

export default GetMovies;
