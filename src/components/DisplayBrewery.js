import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from '@mui/material';

import * as api from '../api/index';
import ButtonB from './ButtonB';
import MainCard from './MainCard';

const useStyles = makeStyles(theme => ({
    mainDiv: {
        backgroundColor: theme.palette.primary.dark,
        minHeight: '100vh',
        backgroundSize: 'cover',
        paddingTop: '10em'
    },
    textFromTop: {
        textAlign: 'center',
        fontSize:'1.5em'
    },
    itemGrid: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width:'90%'
        }
    }
}))

const DisplayBrewery = () => {
    const classes = useStyles();
    const [singleBrewery, setSingleBrewery] = useState([])
    const { id } = useParams();

    const objectForMainDisplay = {
        name: singleBrewery.name,
        brewery_type: singleBrewery.brewery_type,
        street: singleBrewery.street,
        address_2: singleBrewery.address_2,
        address_3: singleBrewery.address_3,
        city: singleBrewery.city,
        state: singleBrewery.state,
        county_province: singleBrewery.county_province,
        postal_code: singleBrewery.postal_code
    }

    useEffect(() => {
        api.getBrewery(id).then(response => {
            setSingleBrewery(response.data)
        })
    }, [id])

    return (
        <Grid container direction='column' alignItems='center' className={classes.mainDiv}>
            <Grid item className={classes.itemGrid} sx={{backgroundColor:'white'}}>
                <Typography className={classes.textFromTop}>
                    Showing detail about each brewery
                </Typography>
            </Grid>
            <Grid item className={classes.itemGrid}>
                <MainCard brewery={objectForMainDisplay} />
            </Grid>
            <Grid item className={classes.itemGrid}>
                <ButtonB breweryId={null}>Back</ButtonB>
            </Grid>
        </Grid>
    )
}

export default DisplayBrewery
