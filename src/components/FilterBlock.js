import React from 'react';
import {Box, Paper, Stack} from "@mui/material";
import FilterCompanies from "./FilterCompanies";
import FilterStops from "./FilterStops";

function FilterBlock(props) {
  return (
    <Stack spacing={2}>
      <FilterCompanies />
      <FilterStops />
    </Stack>

  );
}

export default FilterBlock;