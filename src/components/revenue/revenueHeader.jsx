import * as React from 'react';
import { Box, Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RevenueHeaderText from './revenueHeaderText';
import CardDropdown from '../dropdown/cardDropdown';


const RevenueHeader = ({ handleData }) => {




    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
            <RevenueHeaderText />
            <CardDropdown handleData={handleData} />

        </Box>
    )

}

export default RevenueHeader