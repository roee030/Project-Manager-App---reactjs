import React from 'react';
import './TaskOption.css';
import NewTaskDialog from '../dialog/NewTaskDialog.js';
export default function TaskOption() {
    return (
        <div className='wrapper'>
            <p className="listOfCostumer">רשימת הלקוחות שלך</p>
            <button className='newTask'>
                <NewTaskDialog></NewTaskDialog>
            </button>
            
        </div>
    )
}
