import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="number">{counter}</h1>
      </div>
      <div className="btn-container">
        <button className="Increment" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <button className="Decrement" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
