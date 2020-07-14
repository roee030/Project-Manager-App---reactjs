import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import RegisterDialog from './RegisterDialog.js';import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [loginUserName, setLoginUserName] = React.useState();
  const [loginPassword, setLoginPassword] = React.useState();
  const [flag, setFlag] = React.useState(false);
  const [permission, setPermission] = React.useState(2);
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserOnChange = (e) => {
    setUserName(e.target.value)
  }
  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value)
  }
  const handleLoginUserOnChange = (e) => {
    setLoginUserName(e.target.value)
  }
  const handleLoginPasswordOnChange = (e) => {
    setLoginPassword(e.target.value)
  }
  const handlePermissionOnChange = (e) => {
      console.log('roor',e.target.value);
    setPermission(e.target.value)
  }
  const RegisterOpen = () =>{
    setFlag(true)
  }
  const LoginOpen = () =>{
    setFlag(false)
  }
  const Login = () => {
    
  }
 
  const Register = () =>{
    console.log(userName,password,permission);
    fetch('http://localhost:5000/insertUser', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body:JSON.stringify({User_Name: userName, Password:password, Permission: permission})
    })
    .then(response => {
        return response.json();
        
    })
    setOpen(false);
  }

  if(!flag)
  {
    return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            כניסה
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Login"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <TextField id="standard-basic" onChange={handleLoginUserOnChange}  label="User Name" /><br></br>
                <TextField id="standard-basic" onChange={handleLoginPasswordOnChange} type={values.showPassword ? 'text' : 'password'} defaultValue={password} label="Password" /><br></br>
                <Button onClick={Login} variant="contained" color="primary" disableElevation>
                    Sign in
                </Button>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={RegisterOpen} color="primary">
                Register
              </Button>
              
            </DialogActions>
          </Dialog>
        </div>
      )
  }
  else{
      return(
    <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      כניסה
    </Button>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"SignUp"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <TextField id="standard-basic" onChange={handleUserOnChange} defaultValue={userName} label="User Name" /><br></br>
          <TextField id="standard-basic" onChange={handlePasswordOnChange} type={values.showPassword ? 'text' : 'password'} defaultValue={password} label="Password" /><br></br>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Permission</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
            onChange={handlePermissionOnChange}
            >
            <MenuItem value={1}>Admin</MenuItem>
            <MenuItem value={2}>User</MenuItem>
            </Select>
      </FormControl><br></br>
          <Button onClick={Register} variant="contained" color="primary" disableElevation>
              Register
          </Button>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={LoginOpen} color="primary">
          Login
        </Button>
        
      </DialogActions>
    </Dialog>
  </div>

      )}
  
}
