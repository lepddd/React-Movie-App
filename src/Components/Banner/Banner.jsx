import { useEffect, useReducer } from "react";
import { INITIAL_STATES, movieReducer } from "../../useMovies";
import { ACTION_TYPES } from "../../movieActionTypes";
import { LINK_IMAGES } from "../../linkImages";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import axios from "axios";

const ImgBanner = styled.div.attrs(({ image }) => ({
  style: {
    backgroundImage: `url(${LINK_IMAGES.ORIGINAL + image})`,
  },
}))`
  height: 300px;
  width: 100%;
  max-width: 1000px;
  min-width: 260px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  margin: 0 auto;
  border-radius: 10px;
`;

const BackdropBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding: 50px 60px;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%);
  border-radius: 10px;
`;

const TitleBanner = styled.div`
  font-weight: 800;
  font-size: 36px;
  color: #f4f4f4;
`;

const Banner = () => {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATES);

  const titleBanner = "Welcome.";  

  const fetchUrl = `https://hide-heroku-api.herokuapp.com/movie/popular`;

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = (url) => {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      axios
        .get(url, { signal })
        .then((res) => {
          const random = randomNumber(res.data.results.length);
          dispatch({
            type: ACTION_TYPES.FETCH_SUCCESS,
            payload: res.data.results[random],
          });
          return state.movies;
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Cancelled!!!");
          } else {
            dispatch({ type: ACTION_TYPES.FETCH_ERROR });
          }
        });
    };
    getData(fetchUrl);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {state.loading ? (
        <ImgBanner>
          <BackdropBanner>
            <TitleBanner>{titleBanner}</TitleBanner>
            <SearchBar />
          </BackdropBanner>
        </ImgBanner>
      ) : (
        <ImgBanner image={state.movies.backdrop_path}>
          <BackdropBanner>
            <TitleBanner>{titleBanner}</TitleBanner>
            <SearchBar />
          </BackdropBanner>
        </ImgBanner>
      )}
    </>
  );
};

export default Banner;
