import { useState, useEffect } from "react";
import { getCountries } from "./api/api";
import { CountryList } from "./store/countriesStore";
import GuessCountry from "./components/GuessCountry";

import "./App.css";

function App() {
  const [randomCountry, setRandomCountry] = useState("");

  useEffect(() => {
    return async () => {
      let res = await getCountries();
      setRandomCountry(res[Math.floor(Math.random() * res.length)]);
    };
  }, []);

  return (
    <CountryList.Provider value={{ randomCountry }}>
      <GuessCountry />
    </CountryList.Provider>
  );
}

export default App;
