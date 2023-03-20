import React from "react";

export default function InputField({ placeholder, setGuess, setMessage }) {
  return (
    <input
      onChange={(event) => {
        setGuess(event.target.value);
        setMessage("");
      }}
      className="common-input"
      placeholder={placeholder}
    />
  );
}
