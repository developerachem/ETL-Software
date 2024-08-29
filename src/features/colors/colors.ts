// authentication state

import { createSlice } from "@reduxjs/toolkit";

export interface ColorProps {
  primary: string;
  primary200: string;
}
const initialState = {
  color: {
    primary: "#2D62AE",
    primary200: "#2D62AE20",
    primary300: "#2D62AE30",
    primary400: "#2D62AE40",
    primary500: "#2D62AE50",
    primary600: "#2D62AE60",
    primary700: "#2D62AE70",
    primary800: "#2D62AE80",
    primary900: "#2D62AE99",
  },
};

/**
 * 
    primary: "#2D62AE",
    primary200: "#2D62AE20",
    primary300: "#2D62AE30",
    primary400: "#2D62AE40",
    primary500: "#2D62AE50",
    primary600: "#2D62AE60",
    primary700: "#2D62AE70",
    primary800: "#2D62AE80",
    primary900: "#2D62AE99",
 */

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    updateColor: (state, action) => {
      state.color = {
        primary: action.payload,
        primary200: action.payload + "20",
        primary300: action.payload + "30",
        primary400: action.payload + "40",
        primary500: action.payload + "50",
        primary600: action.payload + "60",
        primary700: action.payload + "70",
        primary800: action.payload + "80",
        primary900: action.payload + "99",
      };
    },
  },
});

export const { updateColor } = colorSlice.actions;

export default colorSlice.reducer;
