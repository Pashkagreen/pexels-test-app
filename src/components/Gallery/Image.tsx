import React, { FC } from "react";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { PhotoProps } from "../../types/photoProps";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useLocalStorage } from "@rehooks/local-storage";

const Image: FC<PhotoProps> = ({
  id,
  src,
  photographer,
  photographer_url,
  onClick,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const language = useTypedSelector((state) => state.lang.language);
  const [isLike] = useLocalStorage(`${id}`);

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
      <img
        src={src}
        alt={photographer}
        style={{ width: "100%" }}
        className="search-img"
      />
      <div
        className="photo-info"
        style={showInfo ? { display: "flex" } : undefined}
      >
        <a href={photographer_url}>
          {translate("photoTitle", language)} {photographer}
        </a>
        <div className="photo-icons">
          <a
            className="download-icon"
            href={`https://www.pexels.com/photo/${id}/download`}
          >
            <FileDownloadOutlinedIcon fontSize={"large"} />
          </a>
          <div className="like-icon" onClick={onClick}>
            {isLike ? (
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

export default React.memo(Image);
