import { configureStore } from "@reduxjs/toolkit";
import PictureSlice from "./slices/PictureSlice";

export const store = configureStore({
  reducer: { pictures: PictureSlice },
});
