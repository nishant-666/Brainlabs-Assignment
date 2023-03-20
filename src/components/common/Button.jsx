import React from "react";

export default function Button({ title, onClick, disabled, type = "submit" }) {
  return (
    <button
      className={disabled ? "disabled" : ""}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}
