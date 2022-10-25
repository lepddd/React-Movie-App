import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import GetMovies from "../GetMovies";
import TrendingContainer from "../Trending/TrendingContainer";
import Footer from "../Footer";


export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <GetMovies title={'Popular'}/>   
      <GetMovies title={'Top Rated'}/>   
      <TrendingContainer />
      <Footer title={'RMovies'}/>
    </>
  );
};
