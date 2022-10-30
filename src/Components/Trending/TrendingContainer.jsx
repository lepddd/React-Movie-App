import BoxTitle from "../BoxTitle/BoxTitle";
import Container from "../Container";
import TrendingMovies from "./TrendingMovies";
import TrendingMoviesPlaceholder from "./TrendingMoviesPlaceholder";
import { fetchData } from "../../Fetchers/fetchData";
import { useQuery } from "react-query";

const TrendingContainer = () => {
  const url = `https://app-teste-weather.herokuapp.com/movie/trending`;

  const { isError, isLoading, data, error } = useQuery(
    ["trending"],
    () => fetchData(url),
    {
      staleTime: 3000,
    }
  );

  if (isLoading) {
    console.log("Loading...");
    return (
      <Container>
        <BoxTitle title={"Trending"} />
        <TrendingMoviesPlaceholder />
      </Container>
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
    <Container>
      <BoxTitle title={"Trending"} />
      <TrendingMovies movies={data.results} />
    </Container>
  );
};
export default TrendingContainer;
