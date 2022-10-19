import {React, useState} from "react";
import TextField from "@mui/material/textfield";

import './App.css';

import Footer from './Footer';
import Header from './Header';
import Central from './Central';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="search">
        <TextField

        />
      </div>
      <Central/>
    </div>
  );
}

export default App;
