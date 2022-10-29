import axios from "axios";
import { ACTION_TYPES } from "./movieActionTypes";
import { INITIAL_STATES, dataReducer } from "./useMovies";
import { useEffect, useReducer } from "react";

export const fetchData = (url) => {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATES);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  }, []);
  return state
};
