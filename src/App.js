import {React, useState} from "react";

import './App.css';

import Footer from './Footer';
import Header from './Header';
import Central from './Central';
import SearchBar from './SearchBar';

function App() {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="App">
            <Header/>
            <SearchBar setSearchText={setSearchText}/>
            <Central searchText={searchText} />
        </div>
    );
}

export default App;
