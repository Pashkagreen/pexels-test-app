import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";
import MainPage from "./components/pages/MainPage";
import SearchPage from "./components/pages/SearchPage";

const App = () => {
  const searchWordState = useTypedSelector((state) => state.word);
  const path = "/search/" + searchWordState?.searchWord;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={path} element={<SearchPage />} />
        <Route path="/search/*" element={<SearchPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
