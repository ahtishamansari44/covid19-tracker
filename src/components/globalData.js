import React, {Fragment, useEffect, useState} from 'react';
import {  makeStyles, Paper, Grid, Typography } from '@material-ui/core';
import {fetchGlobalData} from './api'


const useStyles = makeStyles((theme) => ({
    globalTitle: {

    },
    paper: { 
        margin: 0,
        textAlign: 'center',
        padding: 20,
        marginTop: 6,
        marginBottom: 10,
    },
    red: {
      color: 'red',
      padding: 1,
    },
    green: {
      color: 'green',
      padding: 1,
    },
    gray: {
      color: 'gray',
      padding: 1,
    },
  }));

export default function GlobalData() {
     const classes = useStyles();

    let [globalData, setGlobalData] = useState({});

    useEffect(()=>{
      const fetchAPI = async () =>{
        const data = await fetchGlobalData();
        setGlobalData(data);
      }
      fetchAPI()
    }, []);
    console.log(globalData)
  return (
      <Fragment>
        <Grid item xs={12} sm={4} md={3}>
         <div className='padding'>
        <Typography variant="h5" className={classes.globalTitle}>
        Global Data      
        </Typography>
        <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h4">
         {globalData.confirmed}
        </Typography>
        <Typography variant="h5" className='global-title'>
         Total     
        </Typography>
        </Paper>
        <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h4" className={classes.red}>
         {globalData.active}
        </Typography>
        <Typography variant="h5" className={classes.red}>
           Active     
        </Typography>
        </Paper>
        <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h4" className={classes.green}>
          {globalData.recovered}
        </Typography>
        <Typography variant="h5" className={classes.green}>
         Recovered    
        </Typography>
        </Paper>
        <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h4" className={classes.gray}>
         {globalData.deaths}
        </Typography>
        <Typography variant="h5" className={classes.gray}>
         Deaths 
        </Typography>
        </Paper>        
        </div>
        </Grid>
        </Fragment>
  );
    
}
