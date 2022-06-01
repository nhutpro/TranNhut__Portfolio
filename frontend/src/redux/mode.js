import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};
export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setModeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModeValue } = modeSlice.actions;

export default modeSlice.reducer;
