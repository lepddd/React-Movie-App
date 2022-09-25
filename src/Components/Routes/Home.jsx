import HeaderBar from "../HeaderBar";
import Banner from "../Banner";
import MoviesContainer from "../MoviesContainer";

export const Home = () => {
  return (
    <>
      <HeaderBar />
      <Banner />
      <MoviesContainer
        endpoint={"upcoming"}
        qtn={5}
        title={"Upcoming"}
        link={"upcoming"}
      />
      <MoviesContainer
        endpoint={"top_rated"}
        qtn={10}
        title={"Top Rated"}
        link={"top_rated"}
      />
      <MoviesContainer
        endpoint={"popular"}
        qtn={10}
        title={"Most Popular"}
        link={"popular"}
      />
    </>
  );
};
