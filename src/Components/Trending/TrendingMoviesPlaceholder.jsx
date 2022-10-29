import styled from "styled-components";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { transition, animation } from "../../placeholderAnimation";

const Trending = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  @media (max-width: 767px) {
    height: 500px;
  }
`;

const BackdropCover = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 10px;
  background: linear-gradient(270deg, rgba(38, 38, 38, 0.5) 0%, #262626 100%);
  border-radius: 4px;
  z-index: 9999;
  padding: 70px 20px;
  @media (max-width: 767px) {
    padding: 0px;
  }
`;

const MovieBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  height: 24px;
  background-color: #a4a4a4;
  border-radius: 99px;
`;

const NoteBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const NoteAvg = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #fbbf24;
`;

const MovieDesc = styled.div`
  width: 100%;
  max-width: 555px;
  font-weight: 700;
  font-size: 14px;
  background-color: #a4a4a4;
`;

const MovieCard = styled(motion.div)`
  background-size: cover;
  position: relative;
  background-size: cover;
  border-radius: 4px;
  min-height: 192px;
  min-width: 132px;
`;

const ArrowBtn = styled.div`
  background-color: transparent;
  cursor: pointer;
  color: #f4f4f4;
`;



const TrendingMovies = () => {
  return (
    <Trending>
      <BackdropCover>
        <ArrowBtn>
          <Icon icon="ep:arrow-left" color="#f4f4f4" width="32" height="32" />
        </ArrowBtn>
        <MovieBox>
          <MovieCard
            as={motion.div}
            animate={animation}
            transition={transition}
          />
          <MovieInfo>
            <TitleBox>
              <Title></Title>
              <NoteBox>
                <Icon
                  icon="bi:star-fill"
                  color="#fbbf24"
                  width="16"
                  height="16"
                />
                <NoteAvg>0.0</NoteAvg>
              </NoteBox>
            </TitleBox>
            <MovieDesc></MovieDesc>
          </MovieInfo>
        </MovieBox>
        <ArrowBtn>
          <Icon icon="ep:arrow-right" color="#f4f4f4" width="32" height="32" />
        </ArrowBtn>
      </BackdropCover>
    </Trending>
  );
};

export default TrendingMovies;
