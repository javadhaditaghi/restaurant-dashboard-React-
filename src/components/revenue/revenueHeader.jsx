import * as React from 'react';
import { Box, Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const RevenueHeader = () => {
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
            <Box>
                <Typography variant="h7" fontWeight={700}>Revenue</Typography>
                <Typography variant="caption" color={"#969BA0"} sx={{ display: "block" }}>Lorem ipsum dolor sit amet, consectetur</Typography>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={{ outline: 0, border: 0 }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        sx={{ backgroundColor: "#F4F5F9", borderRadius: "0.75rem" }}
                    >
                        <MenuItem value={10}>Monthly</MenuItem>
                        <MenuItem value={20}>Weekly</MenuItem>
                        <MenuItem value={30}>Today</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )

}

export default RevenueHeader