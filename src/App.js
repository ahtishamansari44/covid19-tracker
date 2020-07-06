import React from 'react';

import './App.css';
import Navbar from './components/navbar'
import Grid from '@material-ui/core/Grid';
import GlobalData from './components/globalData'
import CountryData from './components/countryData'
// import MapData from './components/mapData'


function App() {
  return (
    <div className="">
      <Navbar />
      <Grid container>
      <GlobalData />
      {/* <MapData /> */}
      <CountryData />
      </Grid>
      <hr />
    </div>
  );
}

export default App;
