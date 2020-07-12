import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/navbar/Navbar.js';
import Title from './components/title/Title.js';
import SearchBar from './components/searchBar/SearchBar.js';
import TaskOption from './components/taskOptions/TaskOption.js';
import Table from './components/table/Table.js';
function App() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Title/>
            <SearchBar/>
            <TaskOption/>
            <Table/>
        </div>
    </>
  );
}

export default App;
