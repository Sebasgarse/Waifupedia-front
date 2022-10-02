import React from "react";
import { GalleryCard } from "./GalleryCard";
import { Picture } from "../../interfaces/Pictures";

import "./Gallery.css";

interface GalleryProps {
  pictures: Picture[];
}

export const Gallery = (props: GalleryProps) => {
  const { pictures } = props;
  return (
    <div className="row gallery">
      {pictures.map((picture) => (
        <div key={picture.url} className="col-3 gallery__card-container">
          <GalleryCard picture={picture} />
        </div>
      ))}
    </div>
  );
};
