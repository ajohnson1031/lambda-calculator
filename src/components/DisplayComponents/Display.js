import React, { useState } from "react";

const Display = props => {
  return <div className="display">{props.currentValue}</div>;
};

export default Display;
