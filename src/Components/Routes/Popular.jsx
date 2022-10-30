import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Movies from "../Movies";
import Footer from "../Footer/Footer";

export const Popular = () => {
  return (
    <>
      <Header />
      <Banner />
      <Movies title={"Popular"} />
      <Footer />
    </>
  );
};
