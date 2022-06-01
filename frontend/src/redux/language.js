import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "EN",
};
export const languageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLanguageValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguageValue } = languageSlice.actions;

export default languageSlice.reducer;
