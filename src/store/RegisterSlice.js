import { createSlice } from "@reduxjs/toolkit";

export const RegisterSlice = createSlice({
  name: "register",
  initialState: {
    isLogin: true,
  },

  reducers: {
    loginHandler: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { loginHandler } = RegisterSlice.actions;
