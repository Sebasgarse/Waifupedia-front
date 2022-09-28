import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "../components/Gallery";
import { GalleryBar } from "../components/GalleryBar";
import { startLoadingImages } from "../../store/thunks/PictureThunks";

export const GalleryPage = () => {
  const dispatch = useDispatch();
  const pictures = useSelector((state: any) => state.pictures.pictures) || [];
  React.useEffect(() => {
    dispatch(startLoadingImages());
  }, []);

  return (
    <>
      <GalleryBar />
      <Gallery pictures={pictures} />
    </>
  );
};
