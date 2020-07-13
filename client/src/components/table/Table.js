import React, {useState,useEffect} from 'react';
import './Table.css'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24),
// ];

export default function AcccessibleTable() {
    const classes = useStyles();
    const [data,setData] = useState([]);
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
        },[])
   
    return (
    <TableContainer dir='rtl' className="tablefff" component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow className="rowBar">
          <TableCell align="right">שם משתמש</TableCell>
          <TableCell align="right">טלפון</TableCell>
          <TableCell align="right">מייל</TableCell>
          <TableCell align="right">תאריך יצירת המשימה</TableCell>
          <TableCell align="right">פעולות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data ? data.map((row) => (
            <TableRow key={row.User_Name} className ='rows'>
              <TableCell align="right" component="th" scope="row">{row.User_Name}</TableCell>
              <TableCell align="right">{row.Phone_Number}</TableCell>
              <TableCell align="right">{row.Mail}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          )) : <div>Loading</div>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
