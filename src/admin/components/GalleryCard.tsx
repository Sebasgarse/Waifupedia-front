import React from "react";
import { Picture } from "../../interfaces/Pictures";

interface GalleryCardProps extends Picture {}

export const GalleryCard = (props: GalleryCardProps) => {
  const { title, url } = props;
  return (
    <div className="gallery-card">
      <img className="gallery-card__image" src={url} alt={title} />
    </div>
  );
};
