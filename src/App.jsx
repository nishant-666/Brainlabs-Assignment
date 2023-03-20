import { useState, useEffect } from "react";
import { getCountries } from "./api/api";
import { CountryList } from "./store/countriesStore";
import GuessCountry from "./components/GuessCountry";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState("");

  useEffect(() => {
    return async () => {
      let res = await getCountries();
      setCountries(res);
      setRandomCountry(res[Math.floor(Math.random() * res.length)]);
    };
  }, []);

  return (
    <CountryList.Provider value={{ countries, randomCountry }}>
      <GuessCountry />
    </CountryList.Provider>
  );
}

export default App;
