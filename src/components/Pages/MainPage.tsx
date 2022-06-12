import React, { useEffect, useState } from "react";
import Navbar from "../Navbars/Navbar";
import ModifiedNavbar from "../Navbars/ModifiedNavbar";
import SearchField from "../SearchField/SearchField";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import { fetchPhotos } from "../../store/action-creators/photo";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  let state = useTypedSelector((state) => state.photos?.photos);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [dummy, setDummy] = useState(state);
  const [shouldNavbarFixed, setShouldNavbarFixed] = useState(false);

  useEffect(() => {
    if (fetching) {
      dispatch(fetchPhotos(currentPage));
      setCurrentPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [fetching, dispatch]);

  useEffect(() => {
    setDummy(state);
  }, [state]);

  console.log("state:", state);
  console.log("dummy_state:", dummy);

  //For infinite scroll
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  //For navbar
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 100) {
      setShouldNavbarFixed(true);
    } else if (position < 100) {
      setShouldNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Navbar />
        {shouldNavbarFixed ? <ModifiedNavbar /> : null}
        <SearchField />
      </div>
      <Categories />
      <Gallery photo={dummy} />
    </div>
  );
};

export default MainPage;
