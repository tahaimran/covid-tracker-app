import React, { useContext } from 'react';
import { covidContext } from '../Config/context';


function CountryShow() {
    let { covData } = useContext(covidContext);
    let { data } = useContext(covidContext);

    return (
        <>{
            covData.filter(e => e.id == data).map((e, i) => {
                return (
                    <div>
                        <h2>{e.Country}</h2>
                        <p>{e.ActiveCases}</p>
                        <p>{e.TotalCases}</p>
                        <p>{e.TotalRecovered}</p>
                    </div>
                )
            })
        }</>

    );
}

export default CountryShow;
