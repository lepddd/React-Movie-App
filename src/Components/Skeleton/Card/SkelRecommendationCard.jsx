import styled from "styled-components";
import { motion } from "framer-motion";
import { animation, transition } from "../../../placeholderAnimation";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  background-color: #eff6ff;
`;

const BoxImg = styled.div`
  width: 320px;
  height: 180px;
  border-radius: 4px;
  background-color: #d4d4d4;
`;

const MovieName = styled.div`
  background-color: #d4d4d4;
  width: 100%;
  height: 19px;
  border-radius: 4px;
`;

const SkelRecommendationCard = () => {
  return (
    <BoxContainer>
      <BoxImg as={motion.div} animate={animation} transition={transition} />
      <MovieName as={motion.div} animate={animation} transition={transition} />
    </BoxContainer>
  );
};

export default SkelRecommendationCard;
