import React from "react";

export default function InputField({ placeholder, setGuess }) {
  return (
    <input
      onChange={(event) => {
        setGuess(event.target.value);
      }}
      className="common-input"
      placeholder={placeholder}
    />
  );
}
