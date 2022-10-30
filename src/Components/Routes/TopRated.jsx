import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Movies from "../Movies";
import Footer from "../Footer/Footer";

export const TopRated = () => {
  return (
    <>
      <Header />
      <Banner />
      <Movies title={"Top Rated"} />
      <Footer />
    </>
  );
};
