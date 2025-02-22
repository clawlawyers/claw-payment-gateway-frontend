import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/gpt/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
