import { useEffect, useReducer } from "react";
import { INITIAL_STATES, movieReducer } from "../../useMovies";
import { ACTION_TYPES } from "../../movieActionTypes";
import axios from "axios";
import BoxTitle from "../BoxTitle"
import Container from "../Container";
import TrendingMovies from "./TrendingMovies";

const TrendingContainer = () => {
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATES);

  const url = `https://app-teste-weather.herokuapp.com/movie/trending`;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = (url) => {
      dispatch({ type: ACTION_TYPES.FETCH_START });

      axios
        .get(url, { signal })
        .then((res) => {
          const movies = res.data.results;
          dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: movies });
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Cancelled!!!");
          } else {
            dispatch({ type: ACTION_TYPES.FETCH_ERROR });
          }
        });
      return state;
    };
    getData(url);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BoxTitle title={'Trending'}/>
          <TrendingMovies movies={state.movies} />
        </>
      )}
    </Container>
  );
};
export default TrendingContainer;
