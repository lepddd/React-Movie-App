import { fetchData } from "../../Fetchers/fetchData";
import { isError, useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";

import YouTube from "react-youtube";
import styled from "styled-components";

const Backdrop = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  position: absolute;
  background-color: rgba(38, 38, 38, 0.8);
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const VideoBox = styled.div`
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  height: 320px;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

const TopBar = styled.div`
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  padding: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #000;
`;

const TrailerBox = ({ isActive, movieId, onClick }) => {
  const playerRef = useRef();

  const url = `https://app-teste-weather.herokuapp.com/movie/trailer/id?movieid=${movieId}`;

  const { data } = useQuery(["Trailer"], () => fetchData(url));

  function getMovieTrailer() {
    if (data?.results[0]) {
      return data?.results.filter((movie) => movie.type === "Trailer")[0].key;
    } else {
      return "videoNotFound";
    }
  }

  function handleClick() {
    playerRef.current.internalPlayer.stopVideo();
    onClick();
  }

  return (
    <Backdrop active={isActive}>
      <TopBar>
        <CloseBtn onClick={() => handleClick()}>
          <Icon
            icon="system-uicons:close"
            color="black"
            width="32"
            height="32"
          />
        </CloseBtn>
      </TopBar>
      <VideoBox>
        <YouTube
          ref={playerRef}
          videoId={getMovieTrailer()}
          opts={{ width: 100 + "%", height: "320px" }}
        />
      </VideoBox>
    </Backdrop>
  );
};

export default TrailerBox;
