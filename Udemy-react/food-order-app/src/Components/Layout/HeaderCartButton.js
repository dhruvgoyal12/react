import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
