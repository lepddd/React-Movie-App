import axios from "axios";

export const fetchData = async (url) => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};
