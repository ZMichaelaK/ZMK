import React from "react";
import Counter from "./Counter";
import Calculator from "./Calculator";

const ParentComponent = () => {
  return (
    <div className="parent-container">
      <Counter />
      <Calculator />
    </div>
  );
};

export default ParentComponent;
