import { createSlice } from "@reduxjs/toolkit";

const PictureSlice = createSlice({
  name: "name",
  initialState: {
    uploading: false,
    loading: false,
    pictures: [],
    alertMessage: "",
    selected: null,
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
    editPicture: (state, { payload }) => {
      console.log(payload);
      state.pictures = state.pictures.map((picture) =>
        picture.id === payload.id ? payload : picture
      );
      state.uploading = false;
    },
    selectPicture: (state, { payload }) => {
      state.selected = payload;
    },
    deselectPicture: (state) => {
      state.selected = null;
    },
  },
});

export const {
  setUploading,
  setPictures,
  setLoadingImages,
  deletePicture,
  addPictures,
  selectPicture,
  deselectPicture,
  editPicture,
} = PictureSlice.actions;

export default PictureSlice.reducer;
