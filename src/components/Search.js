import React from 'react';
import InputBase from '@mui/material/InputBase';


const Search = ({ allBreweries, setBreweriesSearchChecked, searchLetters, setSearchLetters }) => {


    const filterBreweriesData = (val) => {
        setSearchLetters(val)
        if (searchLetters !== '') {
            const filteredData = allBreweries.filter(item => {
                return Object.values(item).join('').toLowerCase().includes(searchLetters.toLowerCase());
            })
            setBreweriesSearchChecked(filteredData);
        }
        else {
            setBreweriesSearchChecked(allBreweries);
        }
    }

    return (
        <div>
            <InputBase sx={{width:'100%'}} value={searchLetters} onChange={(e) => filterBreweriesData(e.target.value)}></InputBase>
        </div>

    );
}
export default Search;