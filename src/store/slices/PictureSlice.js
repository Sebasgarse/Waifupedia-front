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
    deletePicture: (state, { payload }) => {
      state.pictures = state.pictures.filter(
        (picture) => picture.id !== payload
      );
      state.loading = false;
    },
    addPictures: (state, { payload }) => {
      state.pictures = state.pictures.concat(payload);
      state.uploading = false;
    },
  },
});

export const {
  setUploading,
  setPictures,
  setLoadingImages,
  deletePicture,
  addPictures,
} = PictureSlice.actions;

export default PictureSlice.reducer;
