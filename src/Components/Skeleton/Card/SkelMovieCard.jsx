import styled from "styled-components";
import { motion} from 'framer-motion'
import {animation,transition} from '../../../placeholderAnimation'

const Container = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  background-color: #eff6ff;
  width: 110px;
`;

const MovieImg = styled(motion.div)`
  position: relative;
  background-color: #d4d4d4;
  border-radius: 4px;
  height: 160px;
  width: 100%;
`;

const MovieTitle = styled(motion.div)`
  width: 110px;
  height: 45px;
  background-color: #d4d4d4;
  border-radius: 4px;
`;

const SkelMovieCard = () => {
  return (
    <Container>
      <MovieImg as={motion.div} animate={animation} transition={transition}/>
      <MovieTitle as={motion.div} animate={animation} transition={transition}/>
    </Container>
  );
};
export default SkelMovieCard;
