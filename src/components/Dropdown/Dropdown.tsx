import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { Icon as UK } from "../../images/united_kingdom";
import { Icon as RUS } from "../../images/russia";
import { setLanguage } from "../../store/action-creators/langActions";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

const Dropdown: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const language = useTypedSelector((state) => state.lang.language);
  const dispatch = useDispatch();

  const changeLanguageHandler = (value: string) => {
    switch (value) {
      case "EN":
        return "RU";
      case "RU":
        return "EN";
      default:
        return "RU";
    }
  };

  const chooseLanguageHandler = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li>
          <Link
            className="dropdown-link"
            to="/"
            onClick={() => setClick(false)}
          >
            {translate("signIn", language)}
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            to="/"
            onClick={() => setClick(false)}
          >
            {translate("join", language)}
          </Link>
        </li>
        <li>
          <div
            className="dropdown-link"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() =>
              chooseLanguageHandler(changeLanguageHandler(language))
            }
          >
            <div onClick={() => setClick(false)} className="change-lang">
              {translate("changeLanguage", language)}
            </div>
            {language === "EN" ? <RUS /> : <UK />}
          </div>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
