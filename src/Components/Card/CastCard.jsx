import { LINK_IMAGES } from "../../linkImages";
import styled from "styled-components";
import notFound from "../../assets/img/notfound.png";

const Container = styled.div`
  padding: 5px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const MovieImg = styled.div.attrs(({ image }) => ({
  style: {
    backgroundImage: `url( ${image}  )`,
  },
}))`
  position: relative;
  background-size: cover;
  border-radius: 4px;
  height: 240px;
  width: 165px;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #404040;
`;

const MovieName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #a3a3a3;
`;
const CastCard = ({ cast }) => {

  const image = cast.profile_path ? LINK_IMAGES.W500 + cast.profile_path : notFound;

  return (
    <Container>
      <MovieImg image={image} />
      <Name>{cast.name}</Name>
      <MovieName>{cast.character}</MovieName>
    </Container>
  );
};

export default CastCard;
