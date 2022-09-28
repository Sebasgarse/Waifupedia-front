import { fileUpload } from "../../helpers/fileUpload";
import { getAllImages, imageDataUpload } from "../../helpers/imageDataHttp";
import {
  setUploading,
  setLoadingImages,
  setPictures,
} from "../slices/PictureSlice";

export const startUploadingFile = (files = []) => {
  return async (dispatch) => {
    dispatch(setUploading(true));

    const promises = [];
    for (const file of files) {
      promises.push(fileUpload(file));
    }
    const imageDatas = await Promise.all(promises);

    await imageDataUpload(imageDatas);
    console.log(imageDatas);

    dispatch(setUploading(false));
  };
};

export const startLoadingImages = () => {
  return async (dispatch) => {
    dispatch(setLoadingImages(true));

    const pictures = await getAllImages();

    dispatch(setPictures(pictures));
  };
};
