import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startDeletingImage } from "../../store/thunks/PictureThunks";
import { selectPicture } from "../../store/slices/PictureSlice";

export const GalleryCard = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(false);
  const { uploading } = useSelector((state) => state.pictures);
  const { picture } = props;
  const { title, url, id } = picture;

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setState(true);
    };
    img.src = url;
  }, [url]);

  const handleDeleteImage = () => {
    dispatch(startDeletingImage(id));
  };

  const handleEditImage = () => {
    dispatch(selectPicture(picture));
  };

  const cssStyle = {
    "--animate-duration": `${1 + props.duration / 10}s`,
  };

  return (
    <>
      {state && (
        <div
          className="gallery-card animate__animated animate__fadeInDown"
          style={cssStyle}
        >
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
      )}
    </>
  );
};
