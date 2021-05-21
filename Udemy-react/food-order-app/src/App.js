import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = (event) => {
    setCartIsShown(false);
  };
  const showCartHandler = (event) => {
    setCartIsShown(true);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseClick={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
