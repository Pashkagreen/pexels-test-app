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
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  let state = useTypedSelector((state) => state.photos?.photos);
  const [should, setShould] = useState(false);

  useEffect(() => {
    if (fetching) {
      dispatch(fetchPhotos(currentPage));
      console.log(state);
      setCurrentPage((prevState) => prevState + 1);
      setFetching(false);
    }
  }, [dispatch, fetching]);

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

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 100) {
      setShould(true);
    } else if (position < 100) {
      setShould(false);
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
        {should ? <ModifiedNavbar /> : null}
        <SearchField />
      </div>
      <Categories />
      <Gallery photo={state} />
    </div>
  );
};

export default MainPage;
