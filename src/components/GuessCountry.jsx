import React, { useContext, useEffect, useState } from "react";
import { CountryList } from "../store/countriesStore";
import InputField from "./common/InputField";
import Button from "./common/Button";

export default function GuessCountry() {
  let { countries, randomCountry } = useContext(CountryList);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const checkRandomCountry = () => {
    if (countries?.map((country) => country.capital).includes(guess)) {
      setMessage("Your Answer is Correct!");
    } else {
      setMessage(
        `Incorrect. The capital of ${randomCountry.name} is ${randomCountry.capital}.`
      );
    }
  };

  return (
    <div className="guess-country">
      <h1>Capital Guessing Game!</h1>
      <h2>What is the capital of {randomCountry.name}?</h2>
      {message ? <h3>{message}</h3> : <></>}
      <InputField
        setGuess={setGuess}
        placeholder={"Type a City Name to Guess.."}
      />

      <Button
        disabled={!guess.length > 0 ? true : false}
        onClick={checkRandomCountry}
        title="Guess!"
      />
    </div>
  );
}
