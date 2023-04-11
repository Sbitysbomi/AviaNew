import React from 'react';
import {Box, Grid, Paper, Typography} from "@mui/material";
import {getCompanies, getCompany} from "../helper";
import Moment from "react-moment";
import {duration} from "moment";


function Ticket({data}) {
  const company = getCompany(data.companyId);
  const start = new Date(data.info.dateStart);
  const end = new Date(data.info.dateEnd);
  const d = duration(data.info.duration, 'ms');
  console.log(d);

  return (
    <Paper sx={{p:2}}>
      <Box display={'flex'} mb={2} width={'100%'} justifyContent={'space-between'}>
        <Typography variant={'h5'}>
          {data.price} Р
        </Typography>
        <img src={company.logo ?? ''} style={{height:'36px',width:'110px'}}/>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant={'subtitle2'} color={'darkgray'} fontSize={12}>
            {data.info.origin} - {data.info.destination}
          </Typography>
          <Typography variant={'subtitle2'} fontSize={14}>
            <Moment date={start} format="hh:mm" /> - <Moment date={end} format="hh:mm" />
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant={'subtitle2'} color={'darkgray'} fontSize={12}>
            В ПУТИ
          </Typography>
          <Typography variant={'subtitle2'} fontSize={14}>
            {d.hours()}ч {d.minutes()}мин
          </Typography>
        </Grid>

        <Grid item xs={4}>
          {data.info.stops.length == 0
            && <Typography variant={'subtitle2'} color={'darkgray'}
                           fontSize={12}>БЕЗ ПЕРЕСАДОК</Typography>}
          {data.info.stops.length > 0
            && <Typography variant={'subtitle2'} color={'darkgray'}
                           fontSize={12}>ПЕРЕСАДОК: {data.info.stops.length}</Typography>}
          <Typography variant={'subtitle2'} fontSize={14}>
            {data.info.stops.join(', ')}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Ticket;