import React from 'react';
import { Stack} from "@mui/material";
import FilterCompanies from "./FilterCompanies";
import FilterStops from "./FilterStops";

function FilterBlock() {
  return (
    <Stack spacing={3}>
      <FilterCompanies />
      <FilterStops />
    </Stack>

  );
}

export default FilterBlock;