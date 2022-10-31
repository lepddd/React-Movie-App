import styled from "styled-components";
import { motion } from "framer-motion";
import { animation, transition } from "../../../placeholderAnimation";

const MovieImage = styled(motion.div)`
  position: relative;
  padding: 40px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 400px;
  background-color: #d4d4d4;
  border-radius: 4px;
`;

const SkelBannerMovieId = () => {
  return (
    <MovieImage as={motion.div} animate={animation} transition={transition} />
  );
};

export default SkelBannerMovieId;
