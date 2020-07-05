import React, {Fragment} from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

export default function MapData() {

  return (
      <Fragment>
        <Grid item xs={12} sm={8} md={9}>
         <div className='map'>
        <Typography variant="h5" className='mapTitle'>
         Map Data      
        </Typography>
          <Paper>xs=12 sm=6</Paper>
          <Paper>xs=12 sm=6</Paper>
          <Paper>xs=12 sm=6</Paper>
          <Paper>xs=12 sm=6</Paper>
          </div>
        </Grid>
        </Fragment>
  );
}
