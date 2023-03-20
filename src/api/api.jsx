import axios from "axios";

export const getCountries = () => {
  return axios
    .get("https://countriesnow.space/api/v0.1/countries/capital")
    .then((response) => response.data.data);
};
