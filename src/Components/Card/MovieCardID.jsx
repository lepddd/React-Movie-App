import styled from "styled-components";
import { LINK_IMAGES } from "../../linkImages";

const BoxContent = styled.div`
  position: relative;
  min-width: 220px;
  height: 320px;
  min-height: 320px;
  border-radius: 4px;
`;

const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(38, 38, 38, 0.49);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &::before {
    content: "Watch Trailer";
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    color: #f4f4f4;
  }
`;

const MovieImg = styled.div.attrs(({ image }) => ({
  style: {
    backgroundImage: `url(${LINK_IMAGES.W500 + image}  )`,
  },
}))`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MovieCardID = ({ img, onClick }) => {
  return (
    <BoxContent>
      <Backdrop onClick={onClick} />
      <MovieImg image={img} />
    </BoxContent>
  );
};

export default MovieCardID;
