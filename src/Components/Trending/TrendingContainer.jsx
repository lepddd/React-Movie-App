import BoxTitle from "../BoxTitle/BoxTitle";
import Container from "../Container";
import TrendingMovies from "./TrendingMovies";
import TrendingMoviesPlaceholder from "./TrendingMoviesPlaceholder";
import { fetchData } from "../../fetchData";

const TrendingContainer = () => {
  const url = `https://app-teste-weather.herokuapp.com/movie/trending`;

  const { data, loading, error } = fetchData(url);

  return (
    <Container>
      {loading ? (
        <>
          <BoxTitle title={"Trending"} />
          <TrendingMoviesPlaceholder /> 
        </>
      ) : (
        <>
          <BoxTitle title={"Trending"} />
          <TrendingMovies movies={data.results} />
        </>
      )}
    </Container>
  );
};
export default TrendingContainer;
/* useEffect(() => {
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
  }, []); */
