import styled from "styled-components";
import BoxTitle from "./BoxTitle";

const Box = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
`;

const BoxContent = styled.div`
  height: 100%;
  width: 157px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #262626;
`;

const Values = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #262626;
`;

const MovieDetails = ({ movie }) => {
  function formatValue(num) {
    const formatNumber = new Intl.NumberFormat();
    return formatNumber.format(num);
  }

  return (
    movie && (
      <>
        <Box>
          <BoxTitle title={"Details"} />
          <BoxContent>
            <div>
              <Title>Original Title</Title>
              <Values>{movie.title}</Values>
            </div>

            <div>
              <Title>Status</Title>
              <Values>{movie.status}</Values>
            </div>

            <div>
              <Title>Original Language</Title>
              <Values>{movie.original_language}</Values>
            </div>

            <div>
              <Title>Budget</Title>
              <Values>
                {movie.budget === 0 ? "$ -" : "$" + formatValue(movie.budget)}
              </Values>
            </div>
          </BoxContent>
        </Box>
      </>
    )
  );
};

export default MovieDetails;
