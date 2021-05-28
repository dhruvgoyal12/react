import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      const newTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    case "REMOVE_ITEM_FROM_CART":
      const existingCartItemIndex1 = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingCartItem1 = state.items[existingCartItemIndex1];
      const updateTotalAmount = state.totalAmount - existingCartItem1.price;
      let updatedItems1;
      let updatedItem1;

      if (existingCartItem1.amount === 1) {
        updatedItems1 = state.items.filter((item) => item.id !== action.id);
      } else {
        updatedItem1 = {
          ...existingCartItem1,
          amount: existingCartItem1.amount - 1,
        };
        updatedItems1 = [...state.items];
        updatedItems1[existingCartItemIndex1] = updatedItem1;
      }

      return {
        items: updatedItems1,
        totalAmount: updateTotalAmount,
      };

    case "CLEAR":
      return defaultCartState;
    default:
      return state;
  }
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM_TO_CART",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM_FROM_CART",
      id: id,
    });
  };

  const clearCartHandler = () => {
    dispatchCartAction({
      type: "CLEAR",
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItems: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
