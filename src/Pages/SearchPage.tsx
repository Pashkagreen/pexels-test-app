import React, { useEffect, useState } from "react";
import ModifiedNavbar from "../components/Navbars/ModifiedNavbar";
import { MemoizedGallery } from "../components/Gallery/Gallery";
import "./SearchPage.scss";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { PhotoActionTypes } from "../types/photoState";
import { useInView } from "react-intersection-observer";
import { translate } from "../i18n";
import { useLocalStorage, writeStorage } from "@rehooks/local-storage";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const searchState = useTypedSelector((state) => state.photos?.searchPhotos);

  const [searchWord] = useLocalStorage("searchWord");
  const [currentPage] = useLocalStorage("currentPage");
  const currentPageToNumber = Number(currentPage);

  const loadingState = useTypedSelector((state) => state.photos?.loading);
  const language = useTypedSelector((state) => state.lang.language);
  const [dummy, setDummy] = useState(searchState);

  const { ref, inView } = useInView({
    rootMargin: "0px 0px 350px",
  });

  useEffect(() => {
    dispatch({
      type: PhotoActionTypes.FETCH_SEARCH_PHOTOS,
      payload: [currentPageToNumber, searchWord],
    });
    writeStorage("currentPage", String(currentPageToNumber + 1));
  }, [inView]);

  useEffect(() => {
    setDummy(searchState);
  }, [searchState]);

  return (
    <div>
      <ModifiedNavbar />
      <div className="search-container">
        {loadingState ? (
          <div className="search-loading">
            <h1>{translate("loading", language)}</h1>
          </div>
        ) : (
          <h1>
            {searchState?.length === 0
              ? translate("notFound", language)
              : `${translate("results", language)} ${searchWord}`}
          </h1>
        )}
        <Link to="/" className="return-button">
          {translate("comeBack", language)}
        </Link>
      </div>
      <MemoizedGallery photo={dummy} loading={loadingState} />
      <div className="intersection-observer" ref={ref}></div>
    </div>
  );
};

export const MemoizedSearchPage = React.memo(SearchPage);
