import React from "react";
import { GalleryCard } from "./GalleryCard";

import "./Gallery.css";

interface Picture {
  title: string;
  size_x: number;
  size_y: number;
  url: string;
}

interface GalleryProps {
  pictures: Picture[];
}

export const Gallery = (props: GalleryProps) => {
  const { pictures } = props;
  return (
    <div className="row gallery">
      {pictures.map((picture) => (
        <div key={picture.url} className="col-3 gallery__card-container">
          <GalleryCard {...picture} />
        </div>
      ))}
    </div>
  );
};
