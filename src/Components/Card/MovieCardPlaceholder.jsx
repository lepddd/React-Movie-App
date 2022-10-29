import { motion } from "framer-motion";
import styled from "styled-components";
import ProgressBar from "../Card/ProgressBar";
import {animation, transition} from "../../placeholderAnimation"

const Container = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
`;

const MovieImg = styled(motion.div)`
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

const MovieCardPlaceholder = () => {
  return (
    <Container>
      <MovieImg
        as={motion.div}
        animate={animation}
        transition={transition}
      >
        <ProgressBar value={0} />
      </MovieImg>
      <MovieTitle>Movie Title</MovieTitle>
    </Container>
  );
};
export default MovieCardPlaceholder;
