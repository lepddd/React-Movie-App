import Container from "./Container";
import BoxTitle from "./BoxTitle/BoxTitle";
import GradientBox from "./GradientBox";
import RecommendationCard from "./Card/RecommendationCard";
import { fetchData } from "../fetchData";

const GetSimilar = ({ movieId }) => {
  const url = `https://app-teste-weather.herokuapp.com/movie/similar?movieid=${movieId}`;

  const { loading, error, data } = fetchData(url);

  return (
    <Container>
      <BoxTitle title={"Recommendations"} />
      <GradientBox>
        {data.results?.map((movie) => (
          <RecommendationCard movie={movie} key={movie.id} />
        ))}
      </GradientBox>
    </Container>
  );
};

export default GetSimilar;
