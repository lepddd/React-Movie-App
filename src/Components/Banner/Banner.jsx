import { LINK_IMAGES } from "../../linkImages";
import { fetchData } from "../../Fetchers/fetchData";
import { useQuery } from "react-query";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SkelBanner from "../Skeleton/Banner/SkelBanner";

const ImgBanner = styled.div.attrs(({ image }) => ({
  style: {
    backgroundImage: `url(${LINK_IMAGES.ORIGINAL + image})`,
  },
}))`
  height: 300px;
  width: 100%;
  max-width: 1000px;
  min-width: 260px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  margin: 0 auto;
  border-radius: 10px;
`;

const BackdropBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding: 50px 60px;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%);
  border-radius: 10px;
`;

const TitleBanner = styled.div`
  font-weight: 800;
  font-size: 36px;
  color: #f4f4f4;
`;

const Banner = () => {
  const titleBanner = "Welcome.";
  const url = `https://app-teste-weather.herokuapp.com/movie/popular`;
  const { isError, isLoading, data, error } = useQuery(
    ["HomeBanner"],
    () => fetchData(url),
    {
      staleTime: Infinity,
    }
  );

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  if (isLoading) {
    return <SkelBanner />;
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <ImgBanner
      image={data.results[randomNumber(data.results.length)].backdrop_path}
    >
      <BackdropBanner>
        <TitleBanner>{titleBanner}</TitleBanner>
        <SearchBar />
      </BackdropBanner>
    </ImgBanner>
  );
};

export default Banner;
