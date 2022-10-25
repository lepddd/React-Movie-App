import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../Card/MovieCard";
import Header from "../Header/Header";
import Footer from "../Footer";
const Search = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://app-teste-weather.herokuapp.com/movie/name?moviename=${params.movieName}`
      )
      .then((res) => {
        setMovies((prev) => (prev = res.data.results));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          vote={movie.vote_average}
          id={movie.id}
          poster={movie.poster_path}
        />
      ))}
      <Footer />
    </>
  );
};

export default Search;
