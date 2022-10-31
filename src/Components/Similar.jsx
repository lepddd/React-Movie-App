import Container from "./Container";
import BoxTitle from "./BoxTitle/BoxTitle";
import GradientBox from "./GradientBox";
import RecommendationCard from "./Card/RecommendationCard";
import { fetchData } from "../Fetchers/fetchData";
import { useQuery } from "react-query";
import SkelSimilar from "./Skeleton/SkelSimilar";

const Similar = ({ movieId }) => {
  const url = `https://app-teste-weather.herokuapp.com/movie/similar?movieid=${movieId}`;

  const { isError, isLoading, data, error } = useQuery(
    ["similar"],
    () => fetchData(url),
    {
      staleTime: 3000,
    }
  );

  return (
    <Container>
      <BoxTitle title={"Recommendations"} />
      <GradientBox>
        {data.results.map((movie) => (
          <RecommendationCard movie={movie} key={movie.id} />
        ))}
      </GradientBox>
    </Container>
  );
};

export default Similar;
