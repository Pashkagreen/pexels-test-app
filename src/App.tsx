import React, {useEffect} from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchField from "./components/SearchField";
import Categories from "./components/Categories";
import Gallery from "./components/photos/Gallery";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {fetchPhoto} from "./store/action-creators/photo";


function App() {
    const dispatch = useDispatch()
    const state = useTypedSelector(state => state.photos?.background)
    useEffect(() => {
        dispatch(fetchPhoto(2014422))
    },[])
    console.log(state)


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
