import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Gallery.scss";
import Image from "./Image";
import { Photo } from "pexels";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Spinner from "../Spinner/Spinner";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useLocation } from "react-router-dom";
import { writeStorage } from "@rehooks/local-storage";

type TGallery = {
  photo?: Photo[];
  loading?: boolean | undefined;
};

const Gallery: React.FC<TGallery> = ({ photo, loading }) => {
  const language = useTypedSelector((state) => state.lang.language);
  const [showOrientationDropdown, setShowOrientationDropdown] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [setFilters, setShowFilters] = useState(false);
  const [orientationFilter, setOrientationFilter] = useState("orientations");
  const [sizeFilter, setSizeFilter] = useState("");
  const dropdownEl = useRef<HTMLUListElement>(null);

  const location = useLocation();

  //Likes in LocalStorage
  const photoLike = (id: number, like: boolean | null) => {
    writeStorage(`${id}`, !like);
  };

  const handleClickOutside = useCallback(
    (e) => {
      if (
        showOrientationDropdown &&
        e.target.closest(".dropdown") !== dropdownEl.current
      ) {
        setShowOrientationDropdown(false);
      } else if (
        showSizeDropdown &&
        e.target.closest(".dropdown") !== dropdownEl.current
      ) {
        setShowSizeDropdown(false);
      }
    },
    [
      showSizeDropdown,
      setShowSizeDropdown,
      dropdownEl,
      showOrientationDropdown,
      setShowOrientationDropdown,
    ]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (location.pathname.includes("search")) {
      setShowFilterButton(true);
    } else {
      setShowFilterButton(false);
    }
  }, [location.pathname]);

  const orientationSwitch = (type: string) => {
    switch (type) {
      case "horizontal":
        return "landscape";
      case "vertical":
        return "portrait";
      default:
        return "large";
    }
  };

  return (
    <div className="container">
      <div className="title-row">
        <span>{translate("galleryTitle", language)}</span>
        {showFilterButton ? (
          <button
            className="filter-btn"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <p>{translate("filters", language)}</p>
              <FilterListIcon />
            </div>
          </button>
        ) : null}
      </div>
      {setFilters ? (
        <div className="filters">
          <div className="orientation">
            <div
              className="selected"
              onClick={() => setShowOrientationDropdown(true)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  {orientationFilter !== ""
                    ? translate(orientationFilter, language)
                    : translate("orientations", language)}
                </p>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            {showOrientationDropdown && (
              <ul className="dropdown" ref={dropdownEl}>
                <li onClick={() => setOrientationFilter("orientations")}>
                  {translate("orientations", language)}
                </li>
                <li onClick={() => setOrientationFilter("horizontal")}>
                  {translate("horizontal", language)}
                </li>
                <li onClick={() => setOrientationFilter("vertical")}>
                  {translate("vertical", language)}
                </li>
              </ul>
            )}
          </div>
          {/*<div className="size">*/}
          {/*  <div className="selected" onClick={() => setShowSizeDropdown(true)}>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        alignItems: "center",*/}
          {/*        justifyContent: "space-between",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <p>*/}
          {/*        {sizeFilter !== ""*/}
          {/*          ? translate(sizeFilter, language)*/}
          {/*          : translate("sizes", language)}*/}
          {/*      </p>*/}
          {/*      <KeyboardArrowDownIcon />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  {showSizeDropdown && (*/}
          {/*    <ul className="dropdown" ref={dropdownEl}>*/}
          {/*      <li onClick={() => setSizeFilter("sizes")}>*/}
          {/*        {translate("sizes", language)}*/}
          {/*      </li>*/}
          {/*      <li onClick={() => setSizeFilter("big")}>*/}
          {/*        {translate("big", language)}*/}
          {/*      </li>*/}
          {/*      <li onClick={() => setSizeFilter("small")}>*/}
          {/*        {translate("small", language)}*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
      ) : null}

      <div className="row">
        {photo?.map((item) => (
          <Image
            key={item.id}
            id={item.id}
            src={item.src[orientationSwitch(orientationFilter)]}
            photographer={item.photographer}
            photographer_url={item.photographer_url}
            onClick={() =>
              photoLike(
                item.id,
                JSON.parse(String(localStorage.getItem(`${item.id}`)))
              )
            }
          />
        ))}
      </div>
      {loading ? <Spinner /> : null}
    </div>
  );
};

export const MemoizedGallery = React.memo(Gallery);
