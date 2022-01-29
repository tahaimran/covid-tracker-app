import React, { useContext, useState } from 'react';
import { covidContext } from '../Config/context';
import { Grid, Paper } from '@mui/material'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
function Main() {
    let { covData } = useContext(covidContext);
    const [chData, setChData] = useState({
        labels: ['ActiveCases', "New Cases"],
        datasets: [{
            label: 'Data Cases',
            data:[covData.filter(e => e.Country  == "Bangladesh" ).map(e => e.ActiveCases) , covData.filter(e => e.Country == "Pakistan").map(e => e.ActiveCases)] ,
            backgroundColor: ["yellow", 'black']
        }]
    })

    return (
        <Grid container>
            <Grid item sm={6}>
                <Paper elevation={3} sx={{ width: '500px', backgroundColor: 'black', color: 'white' }}>
                    {covData.filter(e => e.Country == "Total:").map((e, i) => {
                        return (
                            <>                      
                            <h2>{e.Country}</h2>
                                <Grid >
                                    <Grid item xs={6}>

                                        <h4>ActiveCases : {e.ActiveCases}</h4>
                                        <h4>NewCases : {e.NewCases}</h4>
                                        <h4>NewDeaths : {e.NewDeaths}</h4>
                                        <h4>NewRecovered : {e.NewRecovered}</h4>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h4>TotalCases : {e.TotalCases}</h4>
                                        <h4>TotalDeaths : {e.TotalDeaths}</h4>
                                        <h4>TotalRecovered : {e.TotalRecovered}</h4>
                                    </Grid>
                                </Grid>
                            </>
                        )
                    })}

                </Paper>
            </Grid>
            <Grid item sm={6} style={{width : 400, height: 100}} >
                <Pie data={chData} />
            </Grid>
        </Grid>
    )
}

export default Main;
