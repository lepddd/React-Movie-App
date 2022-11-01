import styled from "styled-components";
import BoxTitle from "./BoxTitle/BoxTitle";

const Box = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const BoxContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: space-between;
  @media screen and (min-width: 450px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 800px) {
    flex-direction: column;
    width: 157px;
  }
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

const Details = ({ movie }) => {
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

export default Details;
