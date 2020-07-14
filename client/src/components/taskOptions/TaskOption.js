import React from 'react';
import './TaskOption.css';
import NewTaskDialog from '../dialog/NewTaskDialog.js';
export default function TaskOption(props) {
    return (
        <div className='wrapper'>
            <p className="listOfCostumer">רשימת הלקוחות שלך</p>
            <button className='newTask'>
                <NewTaskDialog setRoee={props.getDataFunction}></NewTaskDialog>
            </button>
            
        </div>
    )
}
