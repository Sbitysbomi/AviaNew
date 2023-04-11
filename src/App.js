import {Box, Button, Container, Grid} from "@mui/material";
import FilterBlock from "./components/FilterBlock";
import Tickets from "./components/Tickets";

function App() {
  return (
    <Box my={5}>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Box display={'flex'} justifyContent={'center'}>
              <img src={require('./img/Plane.png')} />
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <FilterBlock />
          </Grid>

          <Grid item xs={12} md={9}>
            <Tickets />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default App;
