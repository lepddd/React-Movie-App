import Container from "./Container";
import BoxTitle from "./BoxTitle";
import GradientBox from "./GradientBox";
import RecommendationCard from "./Card/RecommendationCard";
import axios from "axios";
import { useEffect, useState } from "react";

const GetSimilar = ({ movieId }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    function getSimilar() {
      
      const url = `https://app-teste-weather.herokuapp.com/movie/similar?movieid=${movieId}`;
      axios
        .get(url)
        .then((res) => {
          setSimilar((prevState) => (prevState = res.data.results));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getSimilar();
  }, []);

  return (
    <Container>
      <BoxTitle title={"Recommendations"} />
      <GradientBox>
        {similar.map((movie) => (
          <RecommendationCard movie={movie} key={movie.id} />
        ))}
      </GradientBox>
    </Container>
  );
};

export default GetSimilar;
