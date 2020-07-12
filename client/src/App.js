import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/navbar/Navbar.js';
import Title from './components/title/Title.js';
import SearchBar from './components/searchBar/SearchBar.js';
function App() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Title/>
            <SearchBar/>
        </div>
    </>
  );
}

export default App;
