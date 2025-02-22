import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    plan: null,
  },
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const { setPlan } = authSlice.actions;

export default authSlice.reducer;
