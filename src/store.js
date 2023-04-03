import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Redux/index";
const store = configureStore({
  reducer: {
    user: authSlice,
  },
});

export default store;
