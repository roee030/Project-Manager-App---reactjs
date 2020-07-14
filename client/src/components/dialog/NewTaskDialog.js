import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) { 
  console.log(props);
  const [open, setOpen] = React.useState(false);
  const [phone,setPhone] = useState();
  const [mail,setMail] = useState();
  const [task,setTask] = useState();
  const [user,setUser] = useState();
  const [data,setData] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function getData(){
    axios
          .get(`http://localhost:5000/getall`)
          .then(res => {
              console.log('rorrThe King', res.data.data)
              setData((res.data.data))
          })
          .catch(err =>{
              console.log(err)
          })
  }
  const AddTask = () => {
    console.log(user,phone,mail,task);
    fetch('http://localhost:5000/insert', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify({User_Name: user,Task: task, Mail:mail, Phone_Number: phone})
    })
    .then(response => {
        response.json();
        console.log('Ani Po', response);
        getData()
    })
    setOpen(false);

  }
  const handleUserOnChange = event => {
    setUser(event.target.value)
  };
  const handlePhoneOnChange = event => {
    setPhone(event.target.value)
  };
  const handleMailOnChange = event => {
    setMail(event.target.value)
  };
  const handleTaskOnChange = event => {
    setTask(event.target.value)
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>
        משימה חדשה
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField id="standard-basic" defaultValue={user} onChange={handleUserOnChange} label="שם משתמש" /><br></br>
            <TextField id="standard-basic" defaultValue={phone} onChange={handlePhoneOnChange} label="טלפון" /><br></br>
            <TextField id="standard-basic" defaultValue={mail} onChange={handleMailOnChange} label="מייל" /><br></br>
            <TextField id="standard-basic" defaultValue={task} onChange={handleTaskOnChange} label="משימה" /><br></br>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ביטול
          </Button>
          <Button onClick={AddTask} color="primary">
            הוסף
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
