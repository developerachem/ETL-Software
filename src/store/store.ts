import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { API } from "../features/API/API";
import authSlice from "../features/auth/auth-slice";
import colorSlice from "../features/colors/colors";
import modalSlice from "../features/modal/modal-slice";
import titleSlice from "../features/page-title/pate-title";
import scrollSlice from "../window/window";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    color: colorSlice,
    scroll: scrollSlice,
    auth: authSlice,
    modal: modalSlice.reducer,
    title: titleSlice.reducer,
  },

  devTools: import.meta.env.MODE !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 100,
      },
    }).concat(API.middleware),
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
