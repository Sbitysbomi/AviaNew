import React, {useEffect, useState} from 'react';
import {Box, Button, ButtonGroup,  Stack, Typography} from "@mui/material";
import Ticket from "./Ticket";
import Pagination from '@mui/material/Pagination';
import {getCompanies, getCompanyFromList} from "../helper";

const URL = "https://api.npoint.io/";
const companiesKey = process.env.REACT_APP_COMPANIES_KEY;
const companiesList = getCompanies();
let ticketSlice = [0, 5]

function TicketsList(props) {
    const tickets = props.tickets;
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);
  const filters = props.filter ?? {};
  const [loading, setLoading] = useState(true);

  const [companies, setCompanies] = useState(companiesList);
    const handlePageChange = (e, value) => {
      if(value > pageCount)
          value = 1;
      setPage(value);
    }


  useEffect(()=>{
      async function fetchCompanies () {
          (await fetch(URL + companiesKey)).json().then(data => {
              setCompanies(data);
          }).finally(()=>{
              setLoading(false);
          });
      }
      fetchCompanies();
  },[])
  useEffect(()=>{
      setPageCount(Math.floor(tickets.length / perPage + (tickets.length % perPage ? 1 : 0)));
  },[tickets])


  return (
    <>
       <ButtonGroup fullWidth variant={"outlined"} sx={{mb:2}}>
         <Button onClick={() => {props.setFilter({...props.filter, sort:'price'})}}>САМЫЙ ДЕШЕВЫЙ</Button>
         <Button onClick={() => {props.setFilter({...props.filter, sort:'duration'})}}>САМЫЙ БЫСТРЫЙ</Button>
         <Button onClick={() => {props.setFilter({...props.filter, sort:''})}}>сброс</Button>
       </ButtonGroup>

        <Stack spacing={2}>
            <Pagination count={pageCount} variant="outlined"
                        onChange={handlePageChange}
                        color="primary" />
            {loading ? <Typography variant={'h4'} textAlign={'center'}>Загрузка...</Typography> : (tickets
                .slice((page-1) * perPage, (page-1) * perPage + perPage))
                .map(i => <Ticket key={i.id}
                                  company={getCompanyFromList(companies, i.companyId)} data={i} />)}

        </Stack>

        {/* <Stack spacing={2}>
         {tickets.filter(filterHandler).map(i => <Ticket key={i.id} data={i} />)}
       </Stack>*/}

       <Box sx={{my:2}}>

        <Button fullWidth variant={"outlined"}
                sx={{fontSize:10}} onClick={ ()=> handlePageChange(null, page + 1) }>Показать еще 5 билетов</Button>
       </Box>
    </>
  );
}

export default TicketsList;