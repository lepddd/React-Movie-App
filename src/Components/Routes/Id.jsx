import { fetchData } from "../../Fetchers/fetchData";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { QueryCache } from "react-query";
import { useState } from "react";

import Header from "../Header/Header";
import BannerMovieId from "../Banner/BannerMovieId";
import Footer from "../Footer/Footer";
import Similar from "../Similar";
import Casting from "../Casting";
import TrailerBox from "../Modal/TrailerBox";

import SkelBannerMovieId from "../Skeleton/Banner/SkelBannerMovieId";
import SkelCasting from "../Skeleton/SkelCasting";
import SkelSimilar from "../Skeleton/SkelSimilar";

const Id = () => {
  const [isActive, setIsActive] = useState(false);
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

  function closeModal() {
    setIsActive(false)
  }

  function openModal() {
    setIsActive(true)
  }

  return (
    <div style={{ position: "relative" }}>
      <TrailerBox isActive={isActive} onClick={() => closeModal()} movieId={movieId}/>
      <Header />
      <BannerMovieId movie={data} onClick={()=> openModal()}/>
      <Casting movieId={movieId} movie={data} />
      <Similar movieId={movieId} />
      <Footer />
    </div>
  );
};

export default Id;
/*
<Similar movieId={movieId} />
 */
