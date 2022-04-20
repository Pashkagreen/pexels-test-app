import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ModifiedNavbar from "../ModifiedNavbar";
import SearchField from "../SearchField";
import Categories from "../Categories";
import Gallery from "../photos/Gallery";
import { fetchPhotos } from "../../store/action-creators/photo";
import { useDispatch } from "react-redux";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const [should, setShould] = useState(false);

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
      <Gallery />
    </div>
  );
};

export default MainPage;
