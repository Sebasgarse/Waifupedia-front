import React from "react";

interface GalleryCardProps {
  title: string;
  size_x: number;
  size_y: number;
  url: string;
}

export const GalleryCard = (props: GalleryCardProps) => {
  const { title, url } = props;
  return (
    <div className="gallery-card">
      <img className="gallery-card__image" src={url} alt={title} />
    </div>
  );
};
