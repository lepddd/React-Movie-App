import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import BannerMovieId from "../BannerMovieId";
import Footer from "../Footer";
import GetSimilar from "../GetSimilar";
import GetCast from "../GetCast";

const Id = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();

  useEffect(() => {
    function getMovieById() {
      const url = `https://app-teste-weather.herokuapp.com/movie/id?movieid=${params.movieId}`;
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
      <GetCast movieId={params.movieId} movie={movie} />
      <GetSimilar movieId={params.movieId} />
      <Footer />
    </>
  );
};

export default Id;
