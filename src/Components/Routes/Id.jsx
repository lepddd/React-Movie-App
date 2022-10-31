import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import BannerMovieId from "../Banner/BannerMovieId";
import Footer from "../Footer/Footer";
import Similar from "../Similar";
import Casting from "../Casting";
import { fetchData } from "../../Fetchers/fetchData";
import { useQuery } from "react-query";
import SkelBannerMovieId from "../Skeleton/Banner/SkelBannerMovieId";
import SkelCasting from "../Skeleton/SkelCasting";
import SkelSimilar from "../Skeleton/SkelSimilar";
import { QueryCache } from "react-query";

const Id = () => {
  const params = useParams();
  const movieId = params.movieId;
  const url = `https://app-teste-weather.herokuapp.com/movie/id?movieid=${movieId}`;

  const queryCache = new QueryCache();

  queryCache.clear();

  const { isError, isLoading, data, error } = useQuery([movieId], () =>
    fetchData(url)
  );

  if (isLoading) {
    return (
      <>
        <Header />
        <SkelBannerMovieId />
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
/*
<Similar movieId={movieId} />
 */
