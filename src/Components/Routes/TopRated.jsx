import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import GetMovies from "../GetMovies";
import Footer from "../Footer";

export const TopRated = () => {
  return (
    <>
      <Header />
      <Banner />
      <GetMovies title={"Top Rated"} />
      <Footer />
    </>
  );
};
