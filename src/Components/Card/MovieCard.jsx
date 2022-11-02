import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { LINK_IMAGES } from "../../linkImages";
import notfound from "../../assets/img/notfound110x160.png";

const Container = styled.div`
  gap: 25px;
  height: 240px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`;

const MovieImg = styled(Link).attrs(({ image }) => ({
  style: {
    backgroundImage: `url( ${image}  )`,
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
  width: 110px;
  color: #262626;
  text-align: center;
`;

const MovieCard = ({ poster, vote, id, title }) => {
  const image = poster ? LINK_IMAGES.W500 + poster : notfound;

  return (
    <Container>
      <MovieImg image={image} to={`/id/${id}`}>
        <ProgressBar value={vote} />
      </MovieImg>
      <MovieTitle>{title}</MovieTitle>
    </Container>
  );
};
export default MovieCard;
