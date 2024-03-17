import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 6px',
    transition: ".1s",
    color: '#000',

    '&:hover': {
        borderBottom: '1px solid',
        backgroundColor: '#FFFFFF',
        borderRadius: '0',
        color: "#2F4CDD",
    },
    '&:active': {
        borderBottom: '1px solid'
    },

});



export default function TextButton(props) {
    return (

        <BootstrapButton variant="text" disableRipple>
            {props.children}
        </BootstrapButton>

    );
}