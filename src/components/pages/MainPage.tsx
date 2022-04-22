import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ModifiedNavbar from "../ModifiedNavbar";
import SearchField from "../SearchField";
import Categories from "../Categories";
import Gallery from "../gallery/Gallery";
import { fetchPhotos, searchPhotos } from "../../store/action-creators/photo";
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
  }, [fetching]);

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
  }, [scrollHandler]);

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
  }, [handleScroll]);

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
