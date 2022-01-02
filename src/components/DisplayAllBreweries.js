import React from 'react';

import MainCard from './MainCard';
import ButtonB from './ButtonB';


const DisplayAllBreweries = ({ brewery }) => {

    const objectForMainDisplay = {
        name: brewery.name,
        breweryType: brewery.brewery_type,
        city: brewery.city
    }

    return (
        <div>
            <MainCard brewery={objectForMainDisplay} />
            <ButtonB breweryId={brewery.id}></ButtonB>
        </div>
    )
}

export default DisplayAllBreweries;
