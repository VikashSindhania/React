import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // reducer: {} Here this one is the big Reducer. Here reducer is containing a small reducer which is here is a cart Reducer
    cart: cartReducer, // :{cart: cartReducer}  this whole is Our App Reducer.S similarly you can develop userReducer, Theme Reducer etc.
  },
});

export default appStore;
