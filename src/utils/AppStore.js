import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import reducer from "./cartSlice";
import cartReducer from "./cartSlice";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default AppStore;
