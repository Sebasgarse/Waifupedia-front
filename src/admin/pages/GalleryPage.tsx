import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "../components/Gallery";
import { GalleryBar } from "../components/GalleryBar";
import { startLoadingImages } from "../../store/thunks/PictureThunks";
import { EditModal } from "../components/EditModal";

export const GalleryPage = () => {
  const dispatch = useDispatch();

  const { pictures } = useSelector((state: any) => state.pictures);

  React.useEffect(() => {
    dispatch(startLoadingImages());
  }, [dispatch]);

  return (
    <>
      <GalleryBar />
      <Gallery pictures={pictures || []} />
      <EditModal />
    </>
  );
};
