// authentication state

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
}

interface LoginPayload {
  user: User;
  token: string;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginState: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;

      // set token to the storage
      localStorage?.setItem("etl-auth-token", action.payload.token);
    },
    logout: (state) => {
      localStorage.removeItem("etl-auth-token");
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { loginState, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;
