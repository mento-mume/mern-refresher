import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlicer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
