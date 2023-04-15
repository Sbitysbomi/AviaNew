
import {Box, Button, Container, Grid, Stack} from "@mui/material";
import {getCompanies, getCompany} from "./helper";
import SearchBlock from "./components/SearchBlock";
import {useEffect, useState} from "react";
import FilterCompanies from "./components/FilterCompanies";
import FilterStops from "./components/FilterStops";
import TicketsList from "./components/TicketsList";


const ticketKey = process.env.REACT_APP_TICKET_KEY;
const URL = "https://api.npoint.io/";

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

  const [tickets, setTickets] = useState(mockTickets);
  const fetchData = async () => {
    // fetch(URL + ticketKey)
    //     .then(response => response.json())
    //     .then(json =>{
    //       setTickets(json);
    //     });
     const d = (await fetch(URL + ticketKey));
     const data = (await d.json());
     setTickets(data);
  }
  useEffect( ()=>{
    fetchData();
   // let data = mockTickets; //data from api call
   // setTickets(data)
  },[])

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
              <Stack spacing={3}>
                <FilterCompanies filter={filter} setFilter={setFilter}/>
                <FilterStops  filter={filter} setFilter={setFilter}/>
              </Stack>
            </Grid>

            <Grid item xs={12} md={8}>
              <TicketsList filter={filter} setFilter={setFilter} tickets={tickets} setTickets={setTickets}/>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
  );
}

export default App;
