import { configureStore } from "@reduxjs/toolkit";
import { RegisterSlice } from "./RegisterSlice";

export const store = configureStore({
  reducer: {
    register: RegisterSlice.reducer,
  },
});
