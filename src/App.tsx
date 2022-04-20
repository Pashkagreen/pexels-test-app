import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypedSelector";
import {
  fetchPhoto,
  fetchPhotos,
  searchPhotos,
} from "./store/action-creators/photo";
import MainPage from "./components/pages/MainPage";
import SearchPage from "./components/pages/SearchPage";

const App = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const state = useTypedSelector((state) => state.photos?.photos);
  const searchState = useTypedSelector((state) => state.word);

  const path = "/search/" + searchState?.searchWord;

  // For main page background
  // useEffect(() => {
  //     dispatch(fetchPhoto(2014422))
  // },[])

  useEffect(() => {
    if (fetching) {
      if (searchState?.searchWord === "" || state?.length === 0) {
        console.log("searchWord is empty, first render");
        dispatch(fetchPhotos(currentPage));
        setCurrentPage((prevState) => prevState + 1);
        setFetching(false);
      } else {
        console.log(searchState?.searchWord);
        dispatch(searchPhotos(currentPage, searchState?.searchWord));
        setCurrentPage((prevState) => prevState + 1);
        setFetching(false);
      }
    }
  }, [fetching, dispatch]);

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={path} element={<SearchPage />} />
        <Route path={path + "#"} element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
