import styled from "styled-components";
import { motion } from "framer-motion";
import { animation, transition } from "../../../placeholderAnimation";

const Container = styled.div`
  padding: 5px;
  width: fit-content;
  border-radius: 4px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background-color: #eff6ff;//#eff6ff
`;

const MovieImg = styled(motion.div)`
  position: relative;
  background-color: #d4d4d4;
  border-radius: 4px;
  height: 240px;
  width: 165px;
`;

const Name = styled(motion.div)`
  height: 19px;
  width: 100%;
  border-radius: 4px;
  background-color: #d4d4d4;
`;

const MovieName = styled(motion.div)`
  height: 38px;
  width: 100%;
  border-radius: 4px;
  color: #d4d4d4;
`;
const SkelCastCard = () => {
  return (
    <Container>
      <MovieImg as={motion.div} animate={animation} transition={transition} />
      <Name as={motion.div} animate={animation} transition={transition} />
      <MovieName as={motion.div} animate={animation} transition={transition} />
    </Container>
  );
};

export default SkelCastCard;
