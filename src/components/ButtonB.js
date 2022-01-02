import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';



const ButtonB = ({ breweryId }) => {
    const navigate = useNavigate();


    const buttonClicked = () => {
        if (breweryId) {
            navigate(`/${breweryId}`)
        } else {
            navigate('/')
        }
    }
    return (
            <Button sx={{ width: '100%', borderRadius: 0}}
                onClick={buttonClicked}
                variant='contained'>

                {breweryId ? "View Detail" : "Go Back"}
            
            </Button>
    )
}

export default ButtonB
