import * as React from 'react';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import "./orderInfoHeader.css"

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    padding: '5px 10px',
    transition: ".1s",
    color: '#969BA0',
    backgroundColor: 'transparent',
    fontSize: "12px",

    '&:hover': {

        borderRadius: "6px",
        background: "linear-gradient(108deg, #FFF - 4.95 %, rgba(255, 255, 255, 0.92) 109.2 %)",
        backgroundColor: "#ffffff",
        color: "#000",
        fontWeight: "bold",
    },
    '&.active': {
        borderRadius: "6px",
        background: "linear-gradient(108deg, #FFF - 4.95 %, rgba(255, 255, 255, 0.92) 109.2 %)",
        backgroundColor: "#ffffff",
        color: "#000",
        fontWeight: "bold",

    },

});


// Receiving onBottonClick function from ordersInfo.jsx
// Receiving dataClicked function from dailyInfoHeader.jsx
const OrderInfHeader = ({ onButtonClick, dataClicked }) => {

    // Differentiation between the buttons by setting index
    const [chosenButton, setChosenButton] = useState(2);


    const handleButtonClick = (index) => {
        setChosenButton(index);
        if (onButtonClick) {
            onButtonClick(index);
        } else {
            dataClicked(index)
        }
    };

    return (
        <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ backgroundColor: "#F4F5F9", padding: "5px 2px" }}>
            <CustomButton className={chosenButton === 0 ? "active" : ""} onClick={() => handleButtonClick(0)} sx={{ mx: 1 }}>Monthly</CustomButton>
            <CustomButton className={chosenButton === 1 ? "active" : ""} onClick={() => handleButtonClick(1)} sx={{ mx: 1 }}>Weekly</CustomButton>
            <CustomButton className={chosenButton === 2 ? "active" : ""} onClick={() => handleButtonClick(2)} sx={{ mx: 1 }}>Today</CustomButton>
        </ButtonGroup>
    );
}

export default OrderInfHeader;