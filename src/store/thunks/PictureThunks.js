import { fileUpload } from "../../helpers/fileUpload";
import { imageDataUpload } from "../../helpers/imageDataHttp";
import { setUploading } from "../slices/PictureSlice";

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
