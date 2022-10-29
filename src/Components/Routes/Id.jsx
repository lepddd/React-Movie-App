import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import BannerMovieId from "../Banner/BannerMovieId";
import Footer from "../Footer/Footer";
import GetSimilar from "../GetSimilar";
import GetCast from "../GetCast";

const Id = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();

  const movieId = params.movieId

  useEffect(() => {
    function getMovieById() {
      const url = `https://app-teste-weather.herokuapp.com/movie/id?movieid=${movieId}`;
      axios
        .get(url)
        .then((res) => {
          setMovie((prevState) => (prevState = res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getMovieById();
  }, []);

  return (
    <>
      <Header />
      <BannerMovieId movie={movie} />
      <GetCast movieId={movieId} movie={movie} />
      <GetSimilar movieId={movieId} />
      <Footer />
    </>
  );
};

export default Id;
