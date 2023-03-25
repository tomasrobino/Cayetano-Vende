import {React, useState} from "react";

import './App.css';

import Footer from './Footer';
import Header from './Header';
import Central from './Central';
import SearchBar from './SearchBar';

import { Route, Routes } from "react-router-dom";
import AddTutorial from "./AddTutorial";

function App() {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="App">
            {/*<Header/>
            <SearchBar setSearchText={setSearchText}/>
            <Central searchText={searchText}/>*/}
            <AddTutorial/>

            <div>
                <Routes>
                    {/*<Route path="/" element={<TutorialsList/>} />*/}
                    {/*<Route path="/tutorials" element={<TutorialsList/>} />*/}
                    <Route path="/add" element={<AddTutorial/>} />
                    {/*<Route path="/tutorials/:id" element={<Tutorial/>} />*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
