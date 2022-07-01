import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MemoizedMainPage } from "./Pages/MainPage";
import { MemoizedSearchPage } from "./Pages/SearchPage";
import { useLocalStorage } from "@rehooks/local-storage";

const App = () => {
  const [searchWord] = useLocalStorage("searchWord");
  const path = "/search/" + searchWord;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemoizedMainPage />} />
        <Route path={path} element={<MemoizedSearchPage />} />
        <Route path="/search/*" element={<MemoizedSearchPage />} />
        <Route path="*" element={<MemoizedMainPage />} />
      </Routes>
    </Router>
  );
};

export const MemoizedApp = React.memo(App);
