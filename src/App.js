// --------Context api---------
//there is one state this state we want to access in all components without using prop drilling
// we can store this state in context api and then used this state in all components.

import React from "react";
import { CounterProvider } from "./context/Counter";
// import { CartProvider } from "./context/Cart";
import Counter from "./components/Counter";
// import Item from "./components/Item";
// import Cart from "./components/Cart";

const App = () => {
  return (
    <CounterProvider>
      {/* <CartProvider> */}
      <Counter />
      {/* <Item name='iphone' price={10000} />
      // <Item name='macbook' price={50000} />
      // <Cart /> */}
    </CounterProvider>
    // </CartProvider>
  );
};

export default App;
