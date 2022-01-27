import React, { useEffect, useState } from 'react'
import Main from './Components/Main';
import Filters from './Components/Filter';
import {covidContext} from './Config/context'
import axios from 'axios'
import CountryShow from './Components/CountryShow';

function App() {
  const [covData, setCovData] = useState([]);
  const [data, setData] = useState('63492a0f-56d7-4c00-9ac1-d64fd5414029')

  useEffect(() => {
     const apiData = async () =>  {
     let data = await axios.get("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
          "x-rapidapi-key": "b909f129cdmsh75f010d21dd4b35p1034d1jsncbdb91ac1a42"
        }
      })
        .then(response => {
          setCovData(response.data);
        })
        .catch(err => {
          console.error(err);
        });
    };
    apiData()
  }, [])
  return (
    <covidContext.Provider value={{covData, data, setData}}>
      <Filters/>
      <Main />
      <CountryShow/>
    </covidContext.Provider>
  )
}

export default App;