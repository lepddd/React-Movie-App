import Container from "../Container";
import BoxTitle from "../BoxTitle/BoxTitle";
import GradientBox from "../GradientBox";
import SkelRecommendationCard from "./Card/SkelRecommendationCard";

const SkelSimilar = () => {
  const numberElements = 10;

  return (
    <Container>
      <BoxTitle title={"Recommendations"} />
      <GradientBox>
        {[...Array(numberElements)].map((elementInArray, index) => (
          <SkelRecommendationCard key={index} />
        ))}
      </GradientBox>
    </Container>
  );
};

export default SkelSimilar;
