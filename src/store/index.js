import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const reduxStore = configureStore({
  reducer: {
    product: authSlice.reducer,
  },
});
export default reduxStore;
