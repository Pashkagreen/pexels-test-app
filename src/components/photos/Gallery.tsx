import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Image from "./Image";
import { Photo } from "pexels";

const Gallery = (): JSX.Element => {
  let state = useTypedSelector((state) => state.photos?.photos);
  const searchState = useTypedSelector((state) => state.photos?.searchPhotos);

  const location = window.location.pathname;
  console.log(location);
  console.log(state);
  console.log(searchState);

  return (
    <div className="container">
      <span>Бесплатные стоковые фото</span>
      <div className="row">
        {location.includes("search")
          ? searchState?.map((item) => (
              <Image
                key={item.id}
                id={item.id}
                src={item.src.large}
                photographer={item.photographer}
                photographer_url={item.photographer_url}
              />
            ))
          : state?.map((item) => (
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
