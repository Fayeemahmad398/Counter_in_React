import { FaArrowCircleRight, FaArrowCircleLeft, FaSync } from "react-icons/fa";
import { useState } from "react";
import "./Counter.css";

let count = 0;
function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }
  function resetCounter() {
    setCount(0);
  }

  return (
    <div className="counter_box">
      <div className="box">
        <button onClick={decreaseCount}>
          <FaArrowCircleLeft className="icons" />
        </button>
        <h1 id="counter_text">{count}</h1>
        <button onClick={increaseCount}>
          <FaArrowCircleRight className="icons" />
        </button>
      </div>
      <button>
        <FaSync className="icons" onClick={resetCounter} />
      </button>
    </div>
  );
}
export default Counter;
