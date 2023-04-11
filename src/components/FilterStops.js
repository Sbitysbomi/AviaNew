import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, FormLabel, Paper} from "@mui/material";

function FilterStops(props) {
  return (
    <Paper sx={{p:2}}>
      <FormGroup>
        <FormLabel>Количество пересадок</FormLabel>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Без пересадок" />
        <FormControlLabel control={<Checkbox  />} label="Одна пересадка" />
        <FormControlLabel control={<Checkbox  />} label="Две пересадки" />
        <FormControlLabel control={<Checkbox  />} label="Три пересадки и больше" />
      </FormGroup>
    </Paper>
  );
}

export default FilterStops;