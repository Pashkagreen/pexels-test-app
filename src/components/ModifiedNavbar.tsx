import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Dropdown.scss";
import "./Navbar.scss";
import Button from "./Button";
import SearchForm from "./SearchForm";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { SearchWordTypes } from "../types/searchWord";
import { searchPhotos } from "../store/action-creators/photo";
import { useNavigate } from "react-router-dom";

const Logo = require("../images/logo192.png");

const ModifiedNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const searchState = useTypedSelector((state) => state.word);

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

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: SearchWordTypes.SET_SEARCH_WORD, payload: search });
    dispatch(searchPhotos(1, search));
    navigate(`/search/${search}`);
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          paddingRight: "20px",
          width: "100%",
          position: "fixed",
          top: "0",
          backgroundColor: "#242222",
          zIndex: "200",
        }}
      >
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
        <div className="place-for-search">
          {
            <form className="search-block" onSubmit={submitHandler}>
              <SearchForm
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
              <button
                className="search-button"
                onKeyPress={(e) => e.key === "Enter" && submitHandler}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          }
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
              Найти фото
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Лицензия
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Загрузить
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
              Присоединиться
            </a>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default ModifiedNavbar;
