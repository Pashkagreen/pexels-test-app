import React from "react";
import { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Spinner from "../Spinner";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PhotoProps from "../../types/photoProps";

const Image: React.FC<PhotoProps> = ({
  id,
  src,
  photographer,
  photographer_url,
}) => {
  const state = useTypedSelector((state) => state.photos);

  const [like, setLike] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const photoLike = (prev: boolean) => {
    setLike((prev) => !prev);
  };

  const onMouseEnter = () => {
    setShowInfo(true);
  };
  const onMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      key={id}
      className="column"
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {state?.loading ? (
        <Spinner />
      ) : (
        <img
          src={src}
          alt={photographer}
          style={{ width: "100%" }}
          className="search-img"
        />
      )}
      <div
        className="photo-info"
        style={showInfo ? { display: "flex" } : undefined}
      >
        <a href={photographer_url}>Photo by {photographer}</a>
        <div className="photo-icons">
          <a
            className="download-icon"
            href={`https://www.pexels.com/photo/${id}/download`}
          >
            <FileDownloadOutlinedIcon fontSize={"large"} />
          </a>
          <div className="like-icon" onClick={(e) => photoLike(like)}>
            {like ? (
              <FavoriteIcon fontSize={"large"} style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon
                fontSize={"large"}
                style={{ color: "white" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
