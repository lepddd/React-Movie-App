import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery";

export const Popular = () => {
  return (
    <>
      <Header />
      <Banner />
      <Gallery title={'Popular'}/>
      <Footer />
    </>
  );
};
