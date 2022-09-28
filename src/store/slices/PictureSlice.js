import { createSlice } from "@reduxjs/toolkit";

const PictureSlice = createSlice({
  name: "name",
  initialState: {
    uploading: false,
    pictures: [],
    alertMessage: "",
  },
  reducers: {
    setUploading: (state, { payload }) => {
      state.uploading = payload;
    },
    setPictures: (state, { payload }) => {
      state.pictures = payload;
    },
  },
});

export const { setUploading, setPictures } = PictureSlice.actions;

export default PictureSlice.reducer;
