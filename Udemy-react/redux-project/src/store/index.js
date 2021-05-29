import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const storeReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggleCounter") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }

//   return state;
// };
// const store = createStore(storeReducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
