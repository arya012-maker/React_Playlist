import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice.js";

export const store = configureStore({
  reducer: todoReducer,
});
