import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import TrendingContainer from "../Trending/TrendingContainer";
import Footer from "../Footer/Footer";
import Movies from "../Movies";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Movies title={"Popular"} more={true}/>
      <Movies title={"Top Rated"} more={true}/>
      <TrendingContainer />
      <Footer title={"RMovies"} />
    </>
  );
};
