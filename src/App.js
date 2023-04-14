
import {Box, Button, Container, Grid} from "@mui/material";
import FilterBlock from "./components/FilterBlock";
import TicketsList from "./components/TicketsList";
import {getCompany} from "./helper";
import SearchBlock from "./components/SearchBlock";
import {useEffect, useState} from "react";
import axios from 'axios';

const URL = "https://api.npoint.io/";
const COMPANY = process.env.REACT_APP_COMPANIES_KEY;
const TICK = process.env.REACT_APP_TICKET_KEY;

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
    id:3,  price:44444, companyId:"qwerty-XiamenAir",
    info:{
      stops:["MSK","NSB"],origin:"SPB",dateEnd:1659324614277,dateStart:1659313094277,duration:11520000,destination:"ICT"
    }
  },
]

function App() {
  const [filter, setFilter] = useState({
    dest:'',origin:'',from:'',to:'', company:'',transitions:[0]
  })

  const [tickets, setTickets] = useState({mockTickets})

  useEffect(()=>{
     fetch(URL + TICK)
         .then(res => {console.log(res.json())})
         .then((data) => console.log(data))
         .catch(err => console.log(err));
   // let data = mockTickets; //data from api call
   // setTickets(data)
  },[filter])

  return (
      <Box my={5}>
        <Container maxWidth={"md"}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display={'flex'} justifyContent={'center'}>
                <img src={getCompany('qwerty-s7').logo} alt={'image'} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <SearchBlock filter={filter} setFilter={setFilter}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <FilterBlock  filter={filter} setFilter={setFilter}/>
            </Grid>
            <Grid item xs={12} md={8}>
              <TicketsList tickets={tickets} filter={filter} />
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}

export default App;
