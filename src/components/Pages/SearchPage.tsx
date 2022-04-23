import React, { useCallback, useEffect, useState } from "react";
import ModifiedNavbar from "../Navbars/ModifiedNavbar";
import Gallery from "../Gallery/Gallery";
import "./SearchPage.scss";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Spinner from "../Spinner/Spinner";
import { EMPTY_SEARCH, RESULT } from "../../constants/searchConstants";
import { searchPhotos } from "../../store/action-creators/photo";
import { useDispatch } from "react-redux";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const searchState = useTypedSelector((state) => state.photos?.searchPhotos);
  const searchWordState = useTypedSelector((state) => state.word);
  const loadingState = useTypedSelector((state) => state.photos?.loading);

  useEffect(() => {
    if (fetching) {
      dispatch(searchPhotos(currentPage, searchWordState?.searchWord));
      console.log(searchState);
      setCurrentPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [fetching]);

  const scrollHandler = useCallback(
    (e: any) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setFetching(true);
      }
    },
    [setFetching]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div>
      <ModifiedNavbar />
      {loadingState ? (
        <div className="search-container">
          <div className="search-loading">
            <h1>Идет загрузка фото...</h1>
            <Spinner />
          </div>
        </div>
      ) : (
        <div className="search-container">
          <h1>
            {searchState?.length === 0
              ? EMPTY_SEARCH
              : `${RESULT} ${searchWordState?.searchWord}`}
          </h1>
          <Link to="/" className="return-button">
            Вернуться на главную
          </Link>
        </div>
      )}
      <Gallery photo={searchState} />
    </div>
  );
};

export default SearchPage;
