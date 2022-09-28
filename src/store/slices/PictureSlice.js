import { createSlice } from "@reduxjs/toolkit";

const PictureSlice = createSlice({
  name: "name",
  initialState: {
    uploading: false,
    loading: false,
    pictures: [],
    alertMessage: "",
  },
  reducers: {
    setUploading: (state, { payload }) => {
      state.uploading = payload;
    },
    setLoadingImages: (state, { payload }) => {
      state.loading = payload;
    },
    setPictures: (state, { payload }) => {
      state.pictures = payload;
      state.loading = false;
    },
  },
});

export const { setUploading, setPictures, setLoadingImages } =
  PictureSlice.actions;

export default PictureSlice.reducer;
