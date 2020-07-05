import React, {useEffect, useState} from 'react';
import { makeStyles, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { fetchAllCountry } from './api'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 350,
    
  },
}));

export default function CountrySelector({handleCountryChange}) {
  const classes = useStyles();
  const [country, setCountry] = useState([]);

  useEffect(()=>{
    const allCountry = async () => {
      const getCountries = await fetchAllCountry();
      setCountry(getCountries)
    } 
    allCountry();
  }, []);
  console.log(country)

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          defaultValue=""
          onChange={(e)=>handleCountryChange(e.target.value)}
        >
          <MenuItem value="">
            <em>Golobal Data</em>
            </MenuItem>
            {country.map((countries, ind) => <MenuItem key={ind} value={countries}>{countries}</MenuItem>)}        
        </Select>
      </FormControl>
    </div>
  );
}
