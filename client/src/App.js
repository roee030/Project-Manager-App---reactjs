import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/navbar/Navbar.js';
import Title from './components/title/Title.js';
import Dialog from './components/dialog/Dialog.js';
import BigTable from './components/bigTable/BigTable.js';

function App() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Title/>
            <BigTable/>
            
            
        </div>
    </>
  );
}

export default App;
