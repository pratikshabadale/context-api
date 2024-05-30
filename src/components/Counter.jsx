import React from "react";
import { counterContext } from "../context/Counter";
import { useContext } from "react";
const Counter = () => {
  const { count, setCount } = useContext(counterContext);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
