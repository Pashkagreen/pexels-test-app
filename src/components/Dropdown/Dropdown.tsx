import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";
import { Icon as UK } from "../../images/united_kingdom";
import { Icon as RUS } from "../../images/russia";

const Dropdown: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
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
            Войти
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-link"
            to="/"
            onClick={() => setClick(false)}
          >
            Присоединиться
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
          >
            <Link
              to="/"
              onClick={() => setClick(false)}
              className="change-lang"
            >
              Изменить язык
            </Link>
            <UK />
          </div>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
