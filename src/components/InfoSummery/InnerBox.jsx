import * as React from 'react';
import { Box } from '@mui/material';

export default function InnerBox(props) {
    return (

        <Box
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: "1.25rem;",
                bgcolor: '#FFF',
                boxShadow: "0px 12px 23px 0px rgba(62, 73, 84, 0.04)",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexShrink: 1,
                padding: "20px 10px 20px 10px",
                transition: ".5s ease-in-out",



                '&:hover': {
                    boxShadow: "0px 12px 23px 0px rgba(62, 73, 84, 0.2)",
                },
            }}>{props.children}</Box>

    );
}