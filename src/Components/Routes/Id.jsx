import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import BannerMovieId from "../Banner/BannerMovieId";
import Footer from "../Footer/Footer";
import Similar from "../Similar";
import Casting from "../Casting";
import { fetchData } from "../../Fetchers/fetchData";
import { useQuery } from "react-query";
import SkelCasting from "../Skeleton/SkelCasting";
import SkelBanner from "../Skeleton/Banner/SkelBanner";
import SkelSimilar from '../Skeleton/SkelSimilar'

const Id = () => {
  const params = useParams();
  const movieId = params.movieId;
  const url = `https://app-teste-weather.herokuapp.com/movie/id?movieid=${movieId}`;

  const { isError, isLoading, data, error } = useQuery(
    [movieId],
    () => fetchData(url),
    {
      staleTime: 3000,
    }
  );

  if (isLoading) {
    console.log("Loading...");
    return (
      <>
        <Header />
        <SkelBanner />
        <SkelCasting />
        <SkelSimilar />
        <Footer />
      </>
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
    <>
      <Header />
      <BannerMovieId movie={data} />
      <Casting movieId={movieId} movie={data} />
      <Similar movieId={movieId} />
      <Footer />
    </>
  );
};

export default Id;
