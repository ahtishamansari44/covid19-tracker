import React, {useEffect, useState, Fragment} from 'react'
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
    <Fragment>
        <Grid item xs={12} sm={8} md={9}>
          <div className="map">
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
          <Paper variant="" className={classes.paper}>
            <Typography variant="h5" className={classes.red}>
            {getCountry.confirmed}
        </Typography>
        <Typography variant="h6"  className={classes.red}>
         Confirmed 
        </Typography>
        </Paper>
         </Grid>
         <Grid item xs={12} sm={4} md={4}>
          <Paper variant="" className={classes.paper}>
          <Typography variant="h5" className={classes.green}>
          {getCountry.recovered}
        </Typography>
        <Typography variant="h6" className={classes.green}>
         Recovered    
        </Typography>
          </Paper>
         </Grid>
         <Grid item xs={12} sm={4} md={4}>
          <Paper variant="" className={classes.paper}>
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
          <Paper variant="" className={classes.paper}>
          <Typography variant="h5" className={classes.green}>
          {(getCountry.recovered/getCountry.confirmed * 100).toFixed(1)}%
        </Typography>
        <Typography variant="h6" className={classes.green}>
          Recovery Rate
        </Typography>
        </Paper>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper variant="outlined" className={classes.paper}>
          <Paper variant="" className={classes.paper}>
          <Typography variant="h5">
          {(getCountry.deaths/getCountry.confirmed * 100).toFixed(1)}%          
        </Typography>
        <Typography variant="h6">
        Fatality Rate
        </Typography>
        </Paper>
          </Paper>
        </Grid>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3}> */}
      <MyChart data={getCountry} />
      {/* </Grid> */}
    </div>
      </Grid>
      </Fragment>
  );
}
