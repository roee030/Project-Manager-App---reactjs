import React, {useState,useEffect} from 'react';
import './Table.css'
import axios from 'axios';
import check from './img/check.svg';
import eye from './img/eye.svg';
import pen from './img/pen.svg';
import times from './img/times.svg';
import trash from './img/trash.svg';
import Dialog from '../dialog/Dialog.js';
import DeleteDialog from '../dialog/DeleteDialog.js';
import EditDialog from '../dialog/EditDialog.js';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TaskOption from '../taskOptions/TaskOption.js';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default function AcccessibleTable() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios
        .get(`http://localhost:5000/getall`)
        .then(res => {
            console.log(res.data.data)
            setData(res.data.data)

        })
        .catch(err =>{
            console.log(err)
        })
        }, [])

       const deleteRow = (rowIndex) => {
          const newData = [...data];
          newData.splice(rowIndex, 1)
          setData(newData)
       }
       
       const updateTask = () => {
        const newData = [...data];
        setData(newData)

       }

       const AddRow = (name,pn,task,mail,id) => {
        const newData = [...data];
        newData.push({
          name,
          pn,
          task,
          mail,
          id
        })
        setData(newData)
     }
        function action(row, rowIndex) {
          console.log('action', rowIndex);
          if(row.User_Name) { 
           return(
             
             <div className="actions">
               <div className="action"> <Dialog data={row} > </Dialog><div>צפייה</div> </div>
               <div className="action"><EditDialog  data={row} updateTask={updateTask} > </EditDialog><div>עריכה</div></div>
               <div className="action"><DeleteDialog  data={row} deleteRow={deleteRow}  > </DeleteDialog><div>מחיקה</div></div>
             </div>
              )
          }
     }


    return (
      <>
      <TaskOption AddRow={AddRow} />
        <TableContainer dir='rtl' className="tablefff" component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow className="rowBar">
            <TableCell align="right">שם משתמש</TableCell>
            <TableCell align="right">טלפון</TableCell>
            <TableCell align="right">מייל</TableCell>
            <TableCell align="right">תאריך יצירת המשימה</TableCell>
            <TableCell align="right">פעולות </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {data.length ? data.map((row,index) => {
            
              return (
                <TableRow key={index} className ='rows'>
                  <TableCell align="right" component="th" scope="row">{row.User_Name}</TableCell>
                  <TableCell align="right">{row.Phone_Number}</TableCell>
                  <TableCell align="right">{row.Mail}</TableCell>
                  <TableCell align="right">{(row.Date).substring(0,10)}</TableCell>
                  <TableCell align="right">{action(row,index)}</TableCell>
                </TableRow>
              )
            }) : <CircularProgress disableShrink />}
          </TableBody>
        </Table>
      </TableContainer>
      </>
  );
}
