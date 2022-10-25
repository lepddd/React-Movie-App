import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { LINK_IMAGES } from "../../linkImages";

const Container = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MovieImg = styled(Link).attrs(({ image }) => ({
  style: {
    backgroundImage: `url( ${LINK_IMAGES.W500 + image}  )`,
  },
}))`
  position: relative;
  background-size: cover;
  border-radius: 4px;
  height: 160px;
  width: 110px;
`;

const MovieTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  color: #262626;
  text-align: center;
`;

const MovieCard = ({ poster, vote, id, title }) => {
  return (
    <Container>
      <MovieImg image={poster} to={`/id/${id}`}>
        <ProgressBar value={vote} />
      </MovieImg>
      <MovieTitle>{title}</MovieTitle>
    </Container>
  );
};
export default MovieCard;
