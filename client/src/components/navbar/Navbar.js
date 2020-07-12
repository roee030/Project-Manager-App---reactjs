import React from 'react';
import './Navbar.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import mainLogo from './logo.png';
import envelope from './envelope-open-regular.svg';
import fire from './fire.png';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className='navbar-Propit' position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div className='lNavbar'>
                <img src={mainLogo}></img>
                <img className='envelope' src={envelope}></img>
                077-9985041
            </div>
          </Typography>
          
          <div className='toggleNavbar'>
          <Button ><img src={fire}></img> לידים חמים</Button>
          <Button >קבל הצעות אישיות</Button>
          <Button >תגמול שותפים</Button>
          <Button >הוספת נכס</Button>
          <Button >מחשבון שטחים</Button>
          <Button >מועדפים</Button>
          <Button className='residence'>מגורים</Button>
          <Button >כניסה</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
