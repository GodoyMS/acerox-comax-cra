import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";
import thunk from "redux-thunk";

export const userStore = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
  middleware: [thunk],
});
