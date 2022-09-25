import styled from "styled-components";
import React from "react";

const StyleCardMovie = styled.div`
  position: relative;
  min-width: 134px;
  min-height: 200px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 4px;
  cursor: pointer;
`;
const VoteAvg = styled.p`
  padding-right: 10px;
  position: absolute;
  display: flex;
  justify-content: end;
  font-size: 16px;
  background: linear-gradient(90deg, rgba(23, 23, 23, 0.6) 0%, #171717 100%);
  width: 100%;
  color: #fbbf24;
`;

const CardMovie = ({ posterPath, avg }) => {
  const img = "https://image.tmdb.org/t/p/original/" + posterPath;
  return (
    <StyleCardMovie img={img}>
      <VoteAvg>{avg}</VoteAvg>
    </StyleCardMovie>
  );
};
export default CardMovie;
