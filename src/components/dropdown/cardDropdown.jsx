import * as React from 'react';
import { Box, Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const CardDropdown = ({ handleData }) => {
    const [age, setAge] = React.useState(0);

    const handleChange = (event) => {
        setAge(event.target.value);
        handleData(event.target.value)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: "#F4F5F9", borderRadius: "0.75rem",
                        '.MuiSelect-outlined': {
                            border: 0,
                            outline: 0,
                        },

                    }}

                >
                    <MenuItem value={0}>Monthly</MenuItem>
                    <MenuItem value={1}>Weekly</MenuItem>
                    <MenuItem value={2}>Today</MenuItem>
                </Select>
            </FormControl>
        </Box>

    )

}

export default CardDropdown