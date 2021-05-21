import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
export default function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onCloseClick={props.onCloseClick}>
      {cartItems}
      <div className={classes.total}>Total Amount</div>
      <div>35.6</div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
