import HocComponent from "../HocComponent";
import {fetchData} from '../../fetchData'
export const Teste = () => {

  // 'https://app-teste-weather.herokuapp.com/movie/top_rated'
  // 'https://app-teste-weather.herokuapp.com/movie/cast/id?movieid=${movieId}'

  const url = `https://app-teste-weather.herokuapp.com/movie/top_rated`;

  const { loading, error, data } = fetchData(url);

  console.log(data);

  /* return loading ? (
    <h1>Loading...</h1>
  ) : (
    data.map((movie) => <h3 key={movie.id}>{movie.title}</h3>)
  ); */
};
