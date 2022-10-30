import Container from "./Container";
import GradientBox from "./GradientBox";
import BoxTitleLink from "./BoxTitle/BoxTitleLink";
import MovieCard from "./Card/MovieCard";
import { fetchData } from "../Fetchers/fetchData";
import { useQuery } from "react-query";

const Movies = ({ title }) => {
  const endpoint = title.split(" ").join("_").toLowerCase();

  const url = `https://app-teste-weather.herokuapp.com/movie/${endpoint}`;

  const { isError, isLoading, data, error } = useQuery(
    [title],
    () => fetchData(url),
    {
      staleTime: 3000,
    }
  );

  if (isLoading) {
    console.log("Loading...");
    return (
      <div>
        <h1>Loading...</h1>
      </div>
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
      <BoxTitleLink title={title} />
      <GradientBox>
        {data &&
          data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              vote={movie.vote_average}
              id={movie.id}
              title={movie.title}
            />
          ))}
      </GradientBox>
    </Container>
  );
};

export default Movies;