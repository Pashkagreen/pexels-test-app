import React from "react";
import "./Gallery.scss";
import Image from "./Image";
import { Photo } from "pexels";
import Spinner from "../Spinner/Spinner";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type TGallery = {
  photo?: Photo[];
  loading?: boolean | undefined;
};

const Gallery: React.FC<TGallery> = ({ photo, loading }) => {
  const language = useTypedSelector((state) => state.lang.language);
  if (photo?.length === 0) return null;

  return (
    <div className="container">
      <div className="title-row">
        <span>{translate("galleryTitle", language)}</span>
      </div>
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
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default Gallery;
