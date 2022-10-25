import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { LINK_IMAGES } from "../../linkImages";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 10px;
`;

const MovieImg = styled(Link).attrs(({ image }) => ({
  style: {
    backgroundImage: `url( ${LINK_IMAGES.W500 +image}  )`,
  },
}))`
  width: 320px;
  height: 180px;
  border-radius: 4px;
  background-size: cover;
`;

const BoxDetails = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const MovieName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #262626;
`;

const MovieVote = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #a3a3a3;
`;

const RecommendationCard = ({ movie }) => {
  return (
    <BoxContainer>
      <MovieImg image={movie.backdrop_path} to={`/id/${movie.id}`} />
      <BoxDetails>
        <MovieName>{movie.title}</MovieName>
        <MovieVote>{`${(movie.vote_average * 10).toFixed(0)}%`}</MovieVote>
      </BoxDetails>
    </BoxContainer>
  );
};

export default RecommendationCard;
