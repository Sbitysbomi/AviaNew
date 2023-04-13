import React from 'react';
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import Ticket from "./Ticket";



function Tickets(props) {
  const tickets = props.tickets;
  const filters = props.filters ?? {};
  const filterHandler = () => {
    return true
  }
  return (
    <>
       <ButtonGroup fullWidth variant={"outlined"} sx={{mb:2}}>
         <Button>САМЫЙ ДЕШЕВЫЙ</Button>
         <Button>САМЫЙ БЫСТРЫЙ</Button>
         <Button>ОПТИМАЛЬНЫЙ</Button>
       </ButtonGroup>

       <Stack spacing={2}>
         {tickets.filter(filterHandler).map(i => <Ticket key={i.id} data={i} />)}
       </Stack>

       <Box sx={{my:2}}>
        <Button fullWidth variant={"outlined"}
                sx={{fontSize:10}}>Показать еще 5 билетов</Button>
       </Box>
    </>
  );
}

export default Tickets;