import React, { useState } from "react";
import makeID from "../../../makeID";
import NumberButton from "./NumberButton";
//import any components needed
import { numbers } from "../../../data";
//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className="number-buttons">
      {" "}
      {numbers.map(number => {
        return <NumberButton num={number} key={makeID(5)} />;
      })}{" "}
    </div>
  );
};

export default Numbers;
