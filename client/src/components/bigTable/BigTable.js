import React, {useState,useEffect} from 'react'
import SearchBar from '../searchBar/SearchBar.js';
import TaskOption from '../taskOptions/TaskOption.js';
import Table from '../table/Table.js';
export default function BigTable() {
    const [dataTable,setDataTable] = useState([]);
    return (
        <div>
            <SearchBar />
            <TaskOption/>
            <Table/>
        </div>
    )
}
