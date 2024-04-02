import * as React from 'react';
import Box from '@mui/material/Box';
import "./DashboardHeader.css";

import Title from './title';
import SelectData from './select';




const DashboardHeader = ({ handleData }) => {





    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center" }}>
            <Title title="Dashboard" subtitle="Welcome to Davur Admin!" />
            <SelectData handleData={handleData} />
        </Box>
    );
}

export default DashboardHeader;
