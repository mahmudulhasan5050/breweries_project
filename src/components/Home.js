import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';

import * as api from '../api/index';
import DisplayAllBreweries from './DisplayAllBreweries';
import Search from './Search';



const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor: theme.palette.primary.dark,
        minHeight: '100vh',
        backgroundSize: 'cover',
    },
    itemGrid: {
        width: '80%',
        margin: 0,
        padding: 0,
    },
    itemTypography: {
        textAlign: 'center',
        backgroundColor: '#1565c0',
        color: '#e3f2fd'
    },
    searchMainGrid: {
        margin: '4em 0 4em 0',
        width: '100%'
    },
    searchInputGrid: {
        backgroundColor: '#f2f2f2',
    },
    itemDisplay: {
        width: '90%'
    }
}))

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [allBreweries, setAllBreweries] = useState([]);
    const [breweriesSearchChecked, setBreweriesSearchChecked] = useState([]);
    const [searchLetters, setSearchLetters] = useState('');

    useEffect(() => {
        api.getAllBreweries().then(response => {
            setAllBreweries(response.data)
        })

    }, [])

    return (
        <Grid container spacing={1} direction='column' alignItems='center' className={classes.mainContainer}>
            <Grid item className={classes.itemGrid}>
                <Grid container className={classes.searchMainGrid}>
                    <Grid item className={classes.searchInputGrid} xs={8}>
                        <Search allBreweries={allBreweries}
                            setBreweriesSearchChecked={setBreweriesSearchChecked}
                            searchLetters={searchLetters}
                            setSearchLetters={setSearchLetters}
                        />
                    </Grid>
                    <Grid item xs={4} className={classes.itemTypography}>
                        <Typography sx={{
                            marginTop: matchesSM ? '0.4em' : '0.2em',
                            fontSize: matchesSM ? '0.8em' : '1.1em'
                        }}>
                            Search Brewery
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.itemGrid}>
                <Grid container spacing={2}>
                    {searchLetters.length > 1
                        ? (breweriesSearchChecked.map(brewery => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={brewery.id} className={classes.itemDisplay}>
                                    <DisplayAllBreweries brewery={brewery} />
                                </Grid>)
                        }))
                        : (allBreweries.map(brewery => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={brewery.id} className={classes.itemDisplay}>
                                    <DisplayAllBreweries brewery={brewery} />
                                </Grid>)
                        }))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;
