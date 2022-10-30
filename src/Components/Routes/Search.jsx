import { useParams } from "react-router-dom";
import MovieCard from "../Card/MovieCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container";
import BoxTitle from "../BoxTitle/BoxTitle";
import GradientBox from "../GradientBox";
import { fetchData } from "../../Fetchers/fetchData";
import { useQuery } from "react-query";
const Search = () => {
  const params = useParams();
  const movieName = params.movieName;
  const url = `https://app-teste-weather.herokuapp.com/movie/name?moviename=${movieName}`;

  const { isError, isLoading, data, error } = useQuery(
    [movieName],
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
    <>
      <Header />
      <Container>
        <BoxTitle title={"Results"} />
        <GradientBox>
          {data.results.map((movie) => (
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
      <Footer />
    </>
  );
};

export default Search;
