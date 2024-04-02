import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import { SvgIcon } from '@mui/material';
import "./DashboardHeader.css";

import Title from './title';
import SelectData from './select';




const DashboardHeader = ({ handleData }) => {





    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center" }}>
            <Title />

            <SelectData handleData={handleData} />
        </Box>
    );
}

export default DashboardHeader;
