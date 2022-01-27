import React, { useContext } from 'react';
import { covidContext } from '../Config/context';
import { Grid, Paper } from '@mui/material'
function Main() {
    let { covData } = useContext(covidContext);
    console.log(covData)
    return (
        <Grid container>
            <Paper elevation={3} sx={{ width: '500px', backgroundColor: 'black', color: 'white' }}>
                <h2>{covData[0].Country}</h2>
                <Grid container>
                    <Grid item xs={6}>

                        <h4>ActiveCases : {covData[0].ActiveCases}</h4>
                        <h4>NewCases : {covData[0].NewCases}</h4>
                        <h4>NewDeaths : {covData[0].NewDeaths}</h4>
                        <h4>NewRecovered : {covData[0].NewRecovered}</h4>
                    </Grid>
                    <Grid item xs={6}>
                        <h4>TotalCases : {covData[0].TotalCases}</h4>
                        <h4>TotalDeaths : {covData[0].TotalDeaths}</h4>
                        <h4>TotalRecovered : {covData[0].TotalRecovered}</h4>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Main;
