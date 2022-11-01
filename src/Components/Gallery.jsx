import Container from "./Container";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useState } from "react";
import MovieCard from "./Card/MovieCard";

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;

const Gallery = ({ title }) => {
  const [page, setPage] = useState(1);

  const endpoint = title.split(" ").join("_").toLowerCase();

  const url = `https://app-teste-weather.herokuapp.com/movie/${endpoint}?page=`;

  const fetchProjects = (page = 1) =>
    fetch(url + page).then((res) => res.json());

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: [endpoint, page],
      queryFn: () => fetchProjects(page),
      keepPreviousData: true,
    });

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <Container>
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
          <div style={{ display: "flex", justifyContent:'center' }}>
            <button
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 1}
            >
              Previous Page
            </button>
            <span>Current Page: {page}</span>
            <button
              onClick={() => {
                if (page !== data.total_pages) {
                  setPage((old) => old + 1);
                }
              }}
            >
              Next Page
            </button>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Gallery;
