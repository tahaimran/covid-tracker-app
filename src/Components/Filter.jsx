import React, { useContext, useState } from 'react';
import { covidContext } from '../Config/context';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function Filters() {

    let { covData} = useContext(covidContext);
    let { data, setData} = useContext(covidContext);

    const handleChange = (e) => {
        setData(e.target.value)
    }
    return (
        
        <FormControl   sx={{width:' 350px'}}>
            <InputLabel id="">Country</InputLabel>
            <Select
                value={data}
                label="Country"
                onChange={handleChange}
            >
                {
                   covData.map((e, i) => {
                        return (
                            <MenuItem key={i} value={e.id}>{e.Country}</MenuItem>
                        )
                    })
                }

            </Select>
        </FormControl>
    )
}

export default Filters;
