import styled from "styled-components";

const StyleCardMovie = styled.div`
  width: 134px;
  height: 200px;
  background-image: url(${(props) => props.img});  
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 4px;
`;

const CardMovie = ({ posterPath }) => {
   const img = "https://image.tmdb.org/t/p/original/" + posterPath; 
  return <StyleCardMovie img={img} />;
};
export default CardMovie;
/*  */