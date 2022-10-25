import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LINK_IMAGES } from "../../linkImages";

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

const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #f4f4f4;
  @media (max-width: 375px) {
    font-size: 16px;
  }
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
  color: #f4f4f4;
`;

const MovieCard = styled.div.attrs(({ image }) => ({
  style: {
    backgroundImage: `url( ${image}  )`,
  },
}))`
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

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`;

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};

const TrendingMovies = ({ movies }) => {
  const [current, setCurrent] = useState(0);

  function truncate(str, n) {
    if (str) {
      return str.length >= n ? str.substr(0, n) + "..." : str;
    }
  }

  function prevImg() {
    current > 0
      ? setCurrent((prev) => --prev)
      : setCurrent((prev) => (prev = movies.length - 1));
  }

  function nextImg() {
    current < movies.length - 1
      ? setCurrent((prev) => ++prev)
      : setCurrent((prev) => (prev = 0));
  }

  useEffect(() => {
    const interval = setInterval(() => nextImg(), 3000);
    return () => clearInterval(interval);
  });

  return (
    <Trending>
      {movies.length !== 0 && (
        <>
          <Image
          src={`${LINK_IMAGES.ORIGINAL + movies[current]?.backdrop_path}`}
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.2 },
            }}
          />
          <BackdropCover>
            <ArrowBtn onClick={() => prevImg()}>
              <Icon
                icon="ep:arrow-left"
                color="#f4f4f4"
                width="32"
                height="32"
              />
            </ArrowBtn>
            <MovieBox>
              <MovieCard
                image={`${LINK_IMAGES.W500 + movies[current]?.poster_path}`}
              />
              <MovieInfo>
                <TitleBox>
                  <Title>{movies[current]?.title}</Title>
                  <NoteBox>
                    <Icon
                      icon="bi:star-fill"
                      color="#fbbf24"
                      width="16"
                      height="16"
                    />
                    <NoteAvg>
                      {movies[current]?.vote_average.toFixed(1)}
                    </NoteAvg>
                  </NoteBox>
                </TitleBox>
                <MovieDesc>
                  {truncate(movies[current]?.overview, 200)}
                </MovieDesc>
              </MovieInfo>
            </MovieBox>
            <ArrowBtn onClick={() => nextImg()}>
              <Icon
                icon="ep:arrow-right"
                color="#f4f4f4"
                width="32"
                height="32"
              />
            </ArrowBtn>
          </BackdropCover>
        </>
      )}
    </Trending>
  );
};

export default TrendingMovies;
