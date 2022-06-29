import React, { useEffect, useState } from "react";
import Navbar from "../Navbars/Navbar";
import ModifiedNavbar from "../Navbars/ModifiedNavbar";
import SearchField from "../SearchField/SearchField";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PhotoActionTypes } from "../../types/photoState";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  let state = useTypedSelector((state) => state.photos?.photos);
  const loadingState = useTypedSelector((state) => state.photos?.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [dummy, setDummy] = useState(state);
  const [shouldNavbarFixed, setShouldNavbarFixed] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 500,
  });

  useEffect(() => {
    dispatch({
      type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
      currentPage,
    });
    setCurrentPage((prevState) => prevState + 1);
  }, [inView]);

  useEffect(() => {
    setDummy(state);
  }, [state]);

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
      <Gallery photo={dummy} loading={loadingState} />
      <div className="intersection-observer" ref={ref}></div>
    </div>
  );
};

export const MemoizedMainPage = React.memo(MainPage);
