import Container from "./Container";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useState } from "react";
import MovieCard from "./Card/MovieCard";
import BoxTitle from "./BoxTitle/BoxTitle";
import Pagination from "./Pagination";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(5, 120px);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const Gallery = ({ title }) => {
  const [page, setPage] = useState(1);

  const endpoint = title.split(" ").join("_").toLowerCase();

  const url = `https://app-teste-weather.herokuapp.com/movie/${endpoint}?page=`;

  const fetchProjects = (page = 1) =>
    fetch(url + page).then((res) => res.json());

  const { isLoading, isError, error, data } = useQuery({
    queryKey: [endpoint, page],
    queryFn: () => fetchProjects(page),
    keepPreviousData: true,
  });

  function prevPage() {
    setPage((old) => Math.max(old - 1, 0));
  }

  function nextPage() {
    setPage((old) => old + 1, data.total_pages);
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <Container>
          <BoxTitle title={title} />
          <Box>
            {data.results.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                vote={movie.vote_average}
                id={movie.id}
                title={movie.title}
              />
            ))}
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              currentPage={page}
              maxPages={data.total_pages}
              nextPage={() => nextPage()}
              prevPage={() => prevPage()}
            />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Gallery;