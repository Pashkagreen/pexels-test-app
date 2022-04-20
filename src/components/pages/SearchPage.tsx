import React from "react";
import ModifiedNavbar from "../ModifiedNavbar";
import Gallery from "../photos/Gallery";
import "./SearchPage.scss";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Spinner from "../Spinner";

const SearchPage: React.FC = () => {
  const state = useTypedSelector((state) => state.photos);
  const searchState = useTypedSelector((state) => state.word);
  const loadingState = useTypedSelector((state) => state.photos?.loading);

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
          {state?.searchPhotos.length === 0 ? (
            <h1>По вашему запросу ничего не найдено</h1>
          ) : (
            <h1>Результаты поиска по запросу "{searchState?.searchWord}":</h1>
          )}
          <Link to="/" className="return-button">
            Вернуться на главную
          </Link>
        </div>
      )}
      <Gallery />
    </div>
  );
};

export default SearchPage;
