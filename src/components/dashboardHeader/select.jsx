import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import { SvgIcon } from '@mui/material';
import "./DashboardHeader.css";


const SelectData = ({ handleData }) => {
    const HomeIcon = (props) => (
        <SvgIcon {...props} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_10_368)">
                <path d="M22.428 2.856H21.868V1.428C21.868 0.56 21.28 0 20.44 0C19.6 0 19.012 0.56 19.012 1.428V2.856H9.716V1.428C9.716 0.56 9.156 0 8.288 0C7.42 0 6.86 0.56 6.86 1.428V2.856H5.572C2.856 2.856 0.559998 5.152 0.559998 7.868V23.016C0.559998 25.732 2.856 28.028 5.572 28.028H22.428C25.144 28.028 27.44 25.732 27.44 23.016V7.868C27.44 5.152 25.144 2.856 22.428 2.856ZM5.572 5.712H22.428C23.576 5.712 24.584 6.72 24.584 7.868V9.856H3.416V7.868C3.416 6.72 4.424 5.712 5.572 5.712ZM22.428 25.144H5.572C4.424 25.144 3.416 24.136 3.416 22.988V12.712H24.556V22.988C24.584 24.136 23.576 25.144 22.428 25.144Z" fill="#2F4CDD" />
            </g>
            <defs>
                <clipPath id="clip0_10_368">
                    <rect width="28" height="28" fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    );

    const [period, setPeriod] = React.useState(0); // Initialize age with the value of the first menu item

    const handleChange = (event) => {
        setPeriod(event.target.value);
        handleData(event.target.value)
    };

    return (
        <Box className="dashboardheader__timesort" sx={{ minWidth: 150 }}>
            <FormControl fullWidth>

                <Select

                    onChange={handleChange}
                    sx={{ backgroundColor: "#F4F5F9", borderRadius: "0.75rem", outline: "0px", border: "0px", position: "relative" }}

                    value={period}
                >

                    <MenuItem value={0} >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>


                            {period == 0 ? <HomeIcon /> : null}




                            <Box sx={{ px: 2.5 }}>
                                <Typography fontWeight={600}>Filter Periode</Typography>
                                <Typography fontSize={13}>4 June 2023 - Present</Typography>
                            </Box>



                        </Box>
                    </MenuItem>
                    <MenuItem value={1} >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            {period == 1 ? <HomeIcon /> : null}

                            <Box sx={{ px: 2.5 }}>
                                <Typography fontWeight={600}>Filter Periode</Typography>
                                <Typography fontSize={13}>4 June 2022 - 4 June 2023</Typography>
                            </Box>


                        </Box>
                    </MenuItem>
                    <MenuItem value={2} >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            {period == 2 ? <HomeIcon /> : null}

                            <Box sx={{ px: 2.5 }}>
                                <Typography fontWeight={600}>Filter Periode</Typography>
                                <Typography fontSize={13}>4 June 2021 - 4 June 2022</Typography>
                            </Box>


                        </Box>
                    </MenuItem>

                </Select>
            </FormControl>
        </Box>

    )
}

export default SelectData