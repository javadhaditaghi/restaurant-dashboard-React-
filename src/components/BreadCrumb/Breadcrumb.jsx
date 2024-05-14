import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';


function handleClick(event) {
    event.preventDefault();
}

export default function MyBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" sx={{ cursor: "pointer", textDecoration: "none" }} color="inherit" to="/">
                    <Typography>Dashboard</Typography>
                </Link>

                <Typography color="text.primary">Customer Reviews</Typography>
            </Breadcrumbs>
        </div>
    );
}
