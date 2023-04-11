import React from 'react';
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import Ticket from "./Ticket";

const mockTickets = [
  {
    id:1,  price:22222, companyId:"qwerty-s7",
    info:{
      stops:["HKG"],origin:"PTB",dateEnd:1659324614277,dateStart:1659313094277,duration:11520000,destination:"JNB"
    }
  },
  {
    id:2,  price:33333, companyId:"qwerty-XiamenAir",
    info:{
      stops:[],origin:"PTB",dateEnd:1659324814277,dateStart:1659318094277,duration:11520000,destination:"JNB"
    }
  },
  {
    id:4,  price:44444, companyId:"qwerty-XiamenAir",
    info:{
      stops:["MSK","NSB"],origin:"SPB",dateEnd:1659324614277,dateStart:1659313094277,duration:11520000,destination:"ICT"
    }
  },
  {
    id:5,  price:44444, companyId:"qwerty-XiamenAir",
    info:{
      stops:["MSK","NSB"],origin:"SPB",dateEnd:1659324614277,dateStart:1659313094277,duration:15520000,destination:"ICT"
    }
  },
  {
    id:3,  price:44444, companyId:"qwerty-XiamenAir",
    info:{
      stops:["MSK","NSB"],origin:"SPB",dateEnd:1659324614277,dateStart:1659313094277,duration:13520000,destination:"ICT"
    }
  },
]

function Tickets(props) {
  const tickets = props.tickets ?? mockTickets;
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