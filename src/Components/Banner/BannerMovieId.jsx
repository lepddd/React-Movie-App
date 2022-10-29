import styled from "styled-components";
import { Icon } from "@iconify/react";
import MovieCardID from "../Card/MovieCardID";
import { LINK_IMAGES } from "../../linkImages";

const MovieImage = styled.div.attrs(({ image }) => ({
  style: {
    backgroundImage: `url( ${LINK_IMAGES.ORIGINAL + image}  )`,
  },
}))`
  position: relative;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 4px;
`;

const Backdrop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%);
  width: 100%;
  height: 100%;
  padding: 40px;
  border-radius: 4px;
`;

const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MovieTitle = styled.span`
  color: #f4f4f4;
  font-weight: 900;
  font-size: 32px;
`;

const MovieYear = styled.span`
  margin-left: 10px;
  font-weight: 500;
  font-size: 32px;
  color: #d4d4d8;
`;

const SectionInfo = styled.div`
  color: #f4f4f4;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const MovieOverview = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #f4f4f4;
  margin-top: 10px;
`;

const MovieTagline = styled.p`
  color: #d4d4d8;
  font-weight: 900;
  font-size: 20px;
  margin: 15px 0;
`;

const BannerMovieId = ({ movie }) => {
  function minToHour(num) {
    const hour = (num / 60).toFixed(2).toString().split(".");
    return `${hour[0]}h ${hour[1]}min`;
  }

  function getMovieYear(date) {
    return date.split("-")[0];
  }

  function getGenres(genres) {
    const array = [];
    genres.map((genre) => array.push(genre.name));
    return array.toString();
  }

  return (
    movie && (
      <>
        <MovieImage image={movie.backdrop_path}>
          <Backdrop>
            <MovieCardID img={movie.poster_path} />
            <MovieBox>
              <div>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieYear>({getMovieYear(movie.release_date)})</MovieYear>
              </div>
              <SectionInfo>
                {movie.release_date}
                <Icon icon="bi:dot" color="#f4f4f4" width="19" height="19" />
                {getGenres(movie.genres)}
                <Icon icon="bi:dot" color="#f4f4f4" width="19" height="19" />
                {minToHour(movie.runtime)}
              </SectionInfo>
              <MovieOverview>{movie.overview}</MovieOverview>
              <MovieTagline>{movie.tagline}</MovieTagline>
            </MovieBox>
          </Backdrop>
        </MovieImage>
      </>
    )
  );
};

export default BannerMovieId;
