import React, { useEffect, useState } from "react";
import ModifiedNavbar from "../Navbars/ModifiedNavbar";
import Gallery from "../Gallery/Gallery";
import "./SearchPage.scss";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { PhotoActionTypes } from "../../types/photoState";
import { useInView } from "react-intersection-observer";
import { translate } from "../../i18n";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const searchState = useTypedSelector((state) => state.photos?.searchPhotos);
  const searchWordState = useTypedSelector((state) => state.word);
  const loadingState = useTypedSelector((state) => state.photos?.loading);
  const language = useTypedSelector((state) => state.lang.language);
  const [currentPage, setCurrentPage] = useState(1);
  const [dummy, setDummy] = useState(searchState);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 500,
  });

  useEffect(() => {
    dispatch({
      type: PhotoActionTypes.FETCH_PHOTOS,
      payload: [currentPage, searchWordState?.searchWord],
    });
    setCurrentPage((prevState) => prevState + 1);
  }, [inView, searchWordState?.searchWord]);

  useEffect(() => {
    setDummy(searchState);
  }, [searchState]);

  return (
    <div>
      <ModifiedNavbar />
      {loadingState ? (
        <div className="search-container">
          <div className="search-loading">
            <h1>{translate("loading", language)}</h1>
          </div>
        </div>
      ) : (
        <div className="search-container">
          <h1>
            {searchState?.length === 0
              ? translate("notFound", language)
              : `${translate("results", language)} ${
                  searchWordState?.searchWord
                }`}
          </h1>
          <Link to="/" className="return-button">
            {translate("comeBack", language)}
          </Link>
        </div>
      )}
      <Gallery photo={dummy} loading={loadingState} />
      <div className="intersection-observer" ref={ref}></div>
    </div>
  );
};

export const MemoizedSearchPage = React.memo(SearchPage);
