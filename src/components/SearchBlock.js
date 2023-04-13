import React, {useState} from 'react';
import {Box, Grid, IconButton, Paper, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';



function SearchBlock({filter, setFilter}) {
    const [origin, setOrigin] = useState('');
    const [dest, setDest] = useState('');
    const swap = () => {
        const temp = origin;
        const newOrigin = dest;
        setOrigin(newOrigin);
        setDest(temp);
        setFilter({...filter, origin:newOrigin, dest:temp})
    }
    const updOrigin = (e) => {
        setOrigin(e.target.value);
        setFilter({...filter, origin:e.target.value})
    }
    const updDest = (e) => {
        setDest(e.target.value);
        setFilter({...filter, dest:e.target.value})
    }



    return (
        <Paper>
            <Grid container>
                <Grid item xs={6} sm={3} sx={{borderRight:"lightgray 1px solid"}}>
                    <Box p={2} position={'relative'} >
                        <TextField id="standard-basic" label="Пункт отправления" variant="standard" value={origin}
                                   onInput={updOrigin} />
                        <Box position={'absolute'} bgcolor={'white'} right={0} top={'50%'} border={'lightgray 1px solid'}
                             sx={{transform:'translate(50%, -20%)'}}
                             borderRadius={'50%'} >
                            <IconButton aria-label="fingerprint" color="info" sx={{p:"2px"}} onClick={swap}>
                                <CompareArrowsIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box p={2}>
                        <TextField id="standard-basic" label="Пункт назначения" variant="standard" value={dest}
                                   onInput={updDest}  />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box p={2}>
                        <DatePicker label={"От"}
                                    views={['year', 'month', 'day']} />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box p={2}>
                        <DatePicker label={"По"} />
                    </Box>
                </Grid>
            </Grid>

        </Paper>
    );
}

export default SearchBlock;