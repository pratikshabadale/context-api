import React, { createContext, useState } from "react";

const counterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
};

export { CounterProvider, counterContext };
