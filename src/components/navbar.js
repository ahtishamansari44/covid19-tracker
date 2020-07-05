import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, IconButton, Avatar } from '@material-ui/core';
import logo2 from '../images/logo2.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
     marginLeft: 12,
    },
    Avatar: {
        width: 40,
        height: 40,
        marginLeft: 10,
        
    },
  }));
  
  export default function Navbar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar alt="" src={logo2} className={classes.Avatar} />
            <Typography variant="h5" className={classes.title}>
              Covid-19 Tracker
            </Typography>
            </IconButton>        
          </Toolbar>
        </AppBar>
      </div>
    );
  }