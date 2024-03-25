import * as React from 'react';
import { Box, Typography } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OrderInfHeader from '../ordersSummary/orderInfoHeader';


const DailyInfoHeader = () => {

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
            <Box>
                <Typography variant="h7" fontWeight={700}>Customer Map</Typography>
                <Typography variant="caption" color={"#969BA0"} sx={{ display: "block" }}>Lorem ipsum dolor sit amet, consectetur</Typography>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <OrderInfHeader />

            </Box>
        </Box>
    )

}

export default DailyInfoHeader