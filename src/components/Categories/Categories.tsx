import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Categories: React.FC = () => {
  const language = useTypedSelector((state) => state.lang.language);

  return (
    <>
      <ul className="categories">
        <li>
          <Link to="/">{translate("main", language)}</Link>
        </li>
        <li>
          <Link to="/search">{translate("find", language)}</Link>
        </li>
        <li>
          <Link to="/">{translate("best", language)}</Link>
        </li>
        <li>
          <Link to="/">{translate("authors", language)}</Link>
        </li>
      </ul>
      <div className="underline"></div>
    </>
  );
};

export default Categories;
