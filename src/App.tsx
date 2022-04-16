import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchField from "./components/SearchField";
import Categories from "./components/Categories";
import Gallery from "./components/photos/Gallery";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {fetchPhoto, searchPhotos} from "./store/action-creators/photo";



const App = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [searchFor, setSearchFor] = useState('');
    const [page, setPage] = useState(1);
    const state = useTypedSelector(state => state.photos)

    useEffect(() => {
        dispatch(fetchPhoto(2014422))
    },[])


    const searchPhotosHandler = (query: string) => {
        setSearchFor(query);
        dispatch(searchPhotos(page, query))
        console.log(searchFor)
    }

  return (
    <Router>
        <div className='wrapper'>
            <Navbar onSearch={searchPhotosHandler}/>
            <SearchField onSearch={searchPhotosHandler}/>
        </div>
        <Categories/>
        <Gallery setSearch={searchFor}/>
    </Router>
  );
}

export default App;
