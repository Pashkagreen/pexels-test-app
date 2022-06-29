import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import "../Dropdown/Dropdown.scss";
import "./Navbar.scss";
import Button from "../Button/Button";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";
const Logo = require("../../images/logo192.png");

const Navbar: React.FC = () => {
  const language = useTypedSelector((state) => state.lang.language);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo"
          style={{ display: "flex", gap: "16px" }}
        >
          <img
            src={Logo}
            alt="Pexels"
            style={{ width: "40px", height: "40px" }}
          />
          <span>Pexels</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className="place-for-search"></div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
              {translate("findPhoto", language)}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              {translate("license", language)}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              {translate("download", language)}
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <i className="fa-solid fa-ellipsis"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <a
              href="https://www.pexels.com/ru-ru/onboarding/"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              {translate("join", language)}
            </a>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
