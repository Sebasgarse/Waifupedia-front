import { fileUpload } from "../../helpers/fileUpload";
import {
  deleteImageFromServer,
  getAllImages,
  imageDataUpload,
} from "../../helpers/imageDataHttp";
import {
  setUploading,
  setLoadingImages,
  setPictures,
  deletePicture,
  addPictures,
} from "../slices/PictureSlice";

export const startUploadingFile = (files = []) => {
  return async (dispatch) => {
    dispatch(setUploading(true));

    const promises = [];
    for (const file of files) {
      promises.push(fileUpload(file));
    }
    const imageDatas = await Promise.all(promises);

    const imageNewDatas = await imageDataUpload(imageDatas);
    console.log(imageNewDatas);

    dispatch(addPictures(imageNewDatas));
  };
};

export const startLoadingImages = () => {
  return async (dispatch) => {
    dispatch(setLoadingImages(true));

    const pictures = await getAllImages();

    dispatch(setPictures(pictures));
  };
};

export const startDeletingImage = (id) => {
  return async (dispatch) => {
    dispatch(setLoadingImages(true));

    await deleteImageFromServer(id);

    dispatch(deletePicture(id));
  };
};
