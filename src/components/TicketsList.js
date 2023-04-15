import React, {useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import Ticket from "./Ticket";
import {getCompanies, getCompanyFromList} from "../helper";

const URL = "https://api.npoint.io/";
const companiesKey = process.env.REACT_APP_COMPANIES_KEY;
const companiesList = getCompanies();

function TicketsList(props) {
  const tickets = props.tickets;
  const filters = props.filter ?? {};

  const [companies, setCompanies] = useState(companiesList);
  const filterHandler = (item) => {
      if(filters.destination  && (item.info.destination != filters.destination)){
            console.log(item, filters);
          return false
      }
      if(filters.origin && (item.info.origin != filters.origin)){
          console.log(item, filters);
          return false
      }
    return true
  }
  useEffect(()=>{
      async function fetchCompanies () {
          (await fetch(URL + companiesKey)).json().then(data => {
              console.log('companies',data);
              setCompanies(data)
          });
      }
      fetchCompanies();
  },[])
  return (
    <>
       <ButtonGroup fullWidth variant={"outlined"} sx={{mb:2}}>
         <Button>САМЫЙ ДЕШЕВЫЙ</Button>
         <Button>САМЫЙ БЫСТРЫЙ</Button>
         <Button>ОПТИМАЛЬНЫЙ</Button>
       </ButtonGroup>

        <Stack spacing={2}>
            {tickets.filter(filterHandler).map(i => <Ticket key={i.id} company={getCompanyFromList(companies, i.companyId)} data={i} />)}
        </Stack>

        {/* <Stack spacing={2}>
         {tickets.filter(filterHandler).map(i => <Ticket key={i.id} data={i} />)}
       </Stack>*/}

       <Box sx={{my:2}}>
        <Button fullWidth variant={"outlined"}
                sx={{fontSize:10}}>Показать еще 5 билетов</Button>
       </Box>
    </>
  );
}

export default TicketsList;