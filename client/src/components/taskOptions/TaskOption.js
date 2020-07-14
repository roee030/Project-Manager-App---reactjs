import React from 'react';
import './TaskOption.css';
import NewTaskDialog from '../dialog/NewTaskDialog.js';
export default function TaskOption(props) {
    return (
        <div className='wrapper'>
            <p className="listOfCostumer">רשימת הלקוחות שלך</p>
            <button className='newTask'>
                <NewTaskDialog AddRow={props.AddRow} ></NewTaskDialog>
            </button>
            
        </div>
    )
}
