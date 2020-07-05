import React, {useEffect, useState} from 'react'
import { makeStyles, Grid, Paper, Typography } from '@material-ui/core';
import CountrySelector from './countrySelector'
import {fetchCountryData} from './api'
import MyChart from './myChart'

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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



export default function CountryData() {
  const classes = useStyles();
  let [getCountry, setCountry] = useState({})
  useEffect(()=>{
    const fetchCountry = async () =>{
      const data1 = await fetchCountryData();
      console.log(data1); 
      setCountry(data1) 
    }
    fetchCountry()
  }, []);
  
  let handleCountry = async (country) => {
    console.log(country)
      const data2 = await fetchCountryData(country);
      console.log(data2);
      setCountry(data2)
  }
  
console.log(getCountry)
  return (
    <div className="grid">
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
      <Typography variant="h5">
        Country Data    
        </Typography>
        <CountrySelector handleCountryChange={handleCountry} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper variant="outlined" className={classes.paper}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h5" className={classes.red}>
            {getCountry.recovered}
        </Typography>
        <Typography variant="h6"  className={classes.red}>
         Confirmed 
        </Typography>
        </Paper>
         </Grid>
         <Grid item xs={12} sm={4} md={4}>
          <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h5" className={classes.green}>
          {getCountry.confirmed}
        </Typography>
        <Typography variant="h6" className={classes.green}>
         Recovered    
        </Typography>
          </Paper>
         </Grid>
         <Grid item xs={12} sm={4} md={4}>
          <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h5"  className={classes.gray}>
          {getCountry.deaths}
        </Typography>
        <Typography variant="h6" className={classes.gray}>
         Deaths  
        </Typography>
          </Paper>
         </Grid>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h4">
          {(getCountry.deaths/getCountry.confirmed * 100).toFixed(1)}
        </Typography>
        <Typography variant="h6">
          Recovery Rate
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h4">
          {(getCountry.recovered/getCountry.confirmed * 100).toFixed(1)}
        </Typography>
        <Typography variant="h6">
          Recovery Rate
        </Typography>
          </Paper>
        </Grid>
      </Grid>
      <MyChart data={getCountry} />
    </div>
  );
}
