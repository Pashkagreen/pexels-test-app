import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import Image from "./Image";
import { Photo } from "pexels";

type TGallery = {
  photo?: Photo[];
};

const Gallery: React.FC<TGallery> = ({ photo }) => {
  if (photo?.length === 0) return null;

  return (
    <div className="container">
      <span>Бесплатные стоковые фото</span>
      <div className="row">
        {photo?.map((item) => (
          <Image
            key={item.id}
            id={item.id}
            src={item.src.large}
            photographer={item.photographer}
            photographer_url={item.photographer_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
