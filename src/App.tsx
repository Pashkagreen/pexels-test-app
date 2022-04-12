import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchField from "./components/SearchField";
import Categories from "./components/Categories";
import Gallery from "./components/photos/Gallery";

function App() {
  return (
    <Router>
        <div className='wrapper'>
            <Navbar/>
            <SearchField/>
        </div>
        <Categories/>
        <Gallery/>
    </Router>
  );
}

export default App;
