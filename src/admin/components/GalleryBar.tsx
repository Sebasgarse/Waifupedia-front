import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUploadingFile } from "../../store/thunks/PictureThunks";

export const GalleryBar = () => {
  const dispatch = useDispatch();
  const { uploading } = useSelector((state: any) => state.pictures);
  const uploadFileInputRef = React.useRef<HTMLInputElement>();
  const handleFileSelect = ({ target }) => {
    if (target.files === 0) return;

    dispatch(startUploadingFile(target.files));
  };
  return (
    <div className="mt-3 mb-3">
      <input
        type="file"
        multiple
        onChange={handleFileSelect}
        ref={uploadFileInputRef}
        style={{ display: "none" }}
      />
      <button
        className="btn btn-primary"
        disabled={uploading}
        onClick={() => uploadFileInputRef.current.click()}
      >
        <i className="fas fa-plus" /> Add Image
      </button>
    </div>
  );
};
