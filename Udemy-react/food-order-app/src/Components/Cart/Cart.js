import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    console.log(cartCtx.items);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            onAdd={onAddHandler.bind(null, item)}
            onRemove={onRemoveHandler.bind(null, item.id)}
            {...item}
          />
        </li>
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  useEffect(() => {
    if (cartCtx.items.length === 0) setIsCheckout(false);
  }, [cartCtx.items]);

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseClick}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  return (
    <Modal onCloseClick={props.onCloseClick}>
      {cartItems}
      <div className={classes.total}>Total Amount</div>
      <div>{totalAmount}</div>
      {isCheckout && <Checkout onClose={props.onCloseClick} />}
      {!isCheckout && modalActions}
    </Modal>
  );
}
