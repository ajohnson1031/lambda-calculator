import React from "react";

const NumberButton = props => {
  const buttonClass = props.num === "0" ? "double" : null;
  return (
    <button className={buttonClass}>
      {props.num}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
