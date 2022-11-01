import styled from "styled-components";
import { Link } from "react-router-dom";
import { LINK_IMAGES } from "../../linkImages";
import { QueryCache } from "react-query";
import notfound from "../../assets/img/notfound320x160.png";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
`;

const BoxImg = styled(Link)`
  width: 320px;
  height: 180px;
  overflow: hidden;
  border-radius: 4px;
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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
  const image = movie.backdrop_path
    ? LINK_IMAGES.W500 + movie.backdrop_path
    : notfound;

  return (
    <BoxContainer>
      <BoxImg to={`${movie.id}`} onClick={() => clearCache()}>
        <MovieImg src={image} />
      </BoxImg>
      <BoxDetails>
        <MovieName>{movie.title}</MovieName>
        <MovieVote>{`${(movie.vote_average * 10).toFixed(0)}%`}</MovieVote>
      </BoxDetails>
    </BoxContainer>
  );
};

export default RecommendationCard;
