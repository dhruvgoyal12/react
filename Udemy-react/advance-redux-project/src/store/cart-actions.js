import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(
        "https://react-http-bc473-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );

      await sendData();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: e.message,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "fetching",
          title: "fetching...",
          message: "fetching cart data",
        })
      );

      const response = await fetch(
        "https://react-http-bc473-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart data",
        })
      );

      const data = await response.json();

      dispatch(uiActions.removeNotification());
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: e.message,
        })
      );
    }
  };
};
