import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Picture } from "../../interfaces/Pictures";
import { startDeletingImage } from "../../store/thunks/PictureThunks";
import { selectPicture } from "../../store/slices/PictureSlice";

interface GalleryCardProps {
  picture: Picture;
}

export const GalleryCard = (props: GalleryCardProps) => {
  const dispatch = useDispatch();
  const { uploading } = useSelector((state: any) => state.pictures);
  const { picture } = props;
  const { title, url, id } = picture;

  const handleDeleteImage = () => {
    dispatch(startDeletingImage(id));
  };

  const handleEditImage = () => {
    dispatch(selectPicture(picture));
  };

  return (
    <div className="gallery-card">
      <img className="gallery-card__image" src={url} alt={title} />
      <div className="gallery-card__buttons-container m-2">
        <button
          onClick={handleEditImage}
          className="gallery-card__button me-3"
          disabled={uploading}
        >
          <i className="fas fa-edit" />
        </button>
        <button
          onClick={handleDeleteImage}
          className="gallery-card__button"
          disabled={uploading}
        >
          <i className="fas fa-trash" />
        </button>
      </div>
    </div>
  );
};
