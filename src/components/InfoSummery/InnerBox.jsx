import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function InnerBox(props) {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: '#FFF',
                        dark: '#0066CC',
                    },
                },
            }}
        >
            <Box
                sx={{
                    width: "19vw",
                    height: "8.5rem",
                    borderRadius: "1.25rem;",
                    bgcolor: 'primary.main',
                    boxShadow: "0px 12px 23px 0px rgba(62, 73, 84, 0.04)",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexShrink: 1,
                    padding: "7px",

                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                }}>{props.children}</Box>
        </ThemeProvider>
    );
}