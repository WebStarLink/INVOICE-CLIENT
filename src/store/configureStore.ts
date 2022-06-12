import globalResponseSlice from "./global";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    globalStore: globalResponseSlice,
  },
});
