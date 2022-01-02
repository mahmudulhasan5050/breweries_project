import React from 'react';
import { makeStyles } from "@mui/styles";
import { Card, CardContent, Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        minHeight: 150,
    }
}))

const MainCard = ({ brewery }) => {
    const classes = useStyles();

    const elementsOfbrewery = Object.keys(brewery).map((key, index) =>
        brewery[key]
            ? <Typography key={index} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {key}: {brewery[key]}
            </Typography>
            : <Typography key={index} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {key}: {String(brewery[key])}
            </Typography>
    )

    return (
        <Card className={classes.card} sx={{ borderRadius: 0 }}>
            <CardContent>
                {elementsOfbrewery}
            </CardContent>
        </Card>
    )
}

export default MainCard;
