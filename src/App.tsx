import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { MemoizedMainPage } from "./components/Pages/MainPage";
import { MemoizedSearchPage } from "./components/Pages/SearchPage";

const App = () => {
  const searchWordState = useTypedSelector((state) => state.word);
  const path = "/search/" + searchWordState?.searchWord;

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

export default App;
