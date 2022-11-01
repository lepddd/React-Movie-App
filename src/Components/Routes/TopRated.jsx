import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery";
import Footer from "../Footer/Footer";

export const TopRated = () => {
  return (
    <>
      <Header />
      <Banner />
      <Gallery title={"Top Rated"}/>
      <Footer />
    </>
  );
};
