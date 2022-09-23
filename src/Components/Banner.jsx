import styled from "styled-components";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-image: url(${(props) => props.backdrop});
  background-repeat: no-repeat;
  background-size: cover;
`;

const UpcomingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(23, 23, 23, 0.6) 0%, #171717 100%);
`;

const MovieInfo = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const MovieTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #f4f4f4;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

const MovieDesc = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #f4f4f4;
`;

const MovieVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fbbf24;
  font-weight: 400;
  font-size: 20px;
`;

const Banner = () => {
  const [movie, setMovie] = useState("");

  const url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=<<Key>>&language=en-US&page=1"; //colorcar no heroku

  useEffect(() => {
    async function fetchUpcoming(url) {
      const res = await axios.get(url);
      try {
        const data = res.data.results.slice(0, 1);
        setMovie(data[0]);
        console.log(movie);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUpcoming(url);
  }, []);

  return (
    <StyledBanner
      backdrop={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    >
      <UpcomingContainer>
        <CardMovie posterPath={"/spCAxD99U1A6jsiePFoqdEcY0dG.jpg"} />
        <MovieInfo>
          <MovieTitle>
            {movie.title}
            <MovieVote>
              <Icon icon="bxs:star" color="#fbbf24" width="18" height="18" />
              {movie.vote_average}
            </MovieVote>
          </MovieTitle>
          <MovieDesc>{movie.overview}</MovieDesc>
        </MovieInfo>
      </UpcomingContainer>
    </StyledBanner>
  );
};

export default Banner;
