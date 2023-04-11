import React from 'react';
import {getCompanies} from "../helper";
import {FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup} from "@mui/material";
const companies = getCompanies();

function FilterCompanies(props) {

  return (
    <Paper sx={{p:2}}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Компании</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="eu"
          name="company"
        >
          <FormControlLabel  value="all" control={<Radio />} label="Все" />
          {companies.map( i => <FormControlLabel key={i.id} value={i.id} control={<Radio />} label={i.name} />)}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}

export default FilterCompanies;