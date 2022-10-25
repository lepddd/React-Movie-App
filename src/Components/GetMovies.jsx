import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container";
import GradientBox from "./GradientBox";
import BoxTitleLink from "./BoxTitleLink";
import MovieCard from "./Card/MovieCard";

const GetMovies = ({ title }) => {
  const [movies, setMovies] = useState([]);

  const endpoint = title.split(" ").join("_").toLowerCase();

  const url = `https://hide-heroku-api.herokuapp.com/movie/${endpoint}`;

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        const newMovies = res.data.results;
        setMovies((prevState) => (prevState = newMovies));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <Container>
      <BoxTitleLink title={title} />
      <GradientBox>
        {movies.map((movie) => (
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
