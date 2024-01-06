import { createSlice } from "@reduxjs/toolkit";

// export const signInRegister = createAsyncThunk(
//   "register/signInRegister",
//   async function (data, { rejectWithValue, dispatch }) {
//     const dataRegisterItem = {
//       email: data.email,
//       password: data.password,
//       returnSecureToken: false,
//     };
//     try {
//       const response = await fetch(`${SIGN_IN}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataRegisterItem),
//       });
//       if (!response.ok) {
//         return response.json().then((data) => {
//           let errorMessage = "Authorization failed";

//           if (data && data.error && data.error.message) {
//             errorMessage = data.error.message;
//             throw new Error(errorMessage);
//           }
//         });
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const signUpRegister = createAsyncThunk(
//   "register/signUpRegister",
//   async function (data, { rejectWithValue, dispatch }) {
//     const dataRegisterItem = {
//       email: data.email,
//       password: data.password,
//       returnSecureToken: true,
//     };
//     try {
//       const response = await fetch(`${SIGN_IN}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataRegisterItem),
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error("Error response:", errorData);
//         let errorMessage = "Authorization failed";

//         if (errorData && errorData.error && errorData.error.message) {
//           errorMessage = errorData.error.message;
//           throw new Error(errorMessage);
//         }
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
