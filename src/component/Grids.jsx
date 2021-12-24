import React from "react";
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper"

const Grids = () => {
    return(
        <>
        <Grid container spacing={3}>
            <Grid xs={12} sm={5} md={4} lg={3} xl={2} item>
                <Paper >1</Paper>
            </Grid>
            <Grid xs={12} sm={5} md={4} lg={3} xl={2} item>
                <Paper >2</Paper>
            </Grid>
            <Grid xs={12} sm={5} md={4} lg={3} xl={2} item>
                <Paper >3</Paper>
            </Grid>
            <Grid xs={12} sm={5} md={4} lg={3} xl={2} item>
                <Paper >4</Paper>
            </Grid>
            <Grid xs={12} sm={5} md={4} lg={3} xl={2} item>
                <Paper >5</Paper>
            </Grid>
            <Grid xs={12} sm={5} md={4} lg={3} xl={2} item>
                <Paper >6</Paper>
            </Grid>
            
           

        </Grid>
        </>
    )
}
export default Grids;