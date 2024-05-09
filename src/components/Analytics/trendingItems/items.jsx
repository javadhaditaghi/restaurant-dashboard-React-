import * as React from 'react';
import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { SvgIcon } from '@mui/material';


export function Ascending() {
    return (
        <SvgIcon sx={{ fontSize: { xs: "30px", md: "45px" } }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 49 33" fill="none">
                <path d="M0.999023 31.5C2.98223 29.1574 8.75085 22.9517 12.9385 18.4459C14.1483 17.1442 16.0707 16.7963 17.6602 17.591L27.2952 22.4085C29.0006 23.2612 31.0708 22.7916 32.2414 21.2865L48.0199 1" stroke="#2BC155" stroke-width="2" />
                <path d="M12.8683 18.5215C8.68661 23.0208 2.97117 29.1705 0.999023 31.5H44.0199C46.229 31.5 48.0199 29.7091 48.0199 27.5V1L32.2414 21.2865C31.0708 22.7916 29.0006 23.2612 27.2952 22.4085L17.6602 17.591C16.0707 16.7963 14.1483 17.1442 12.9385 18.4459L12.8683 18.5215Z" fill="url(#paint0_linear_27_4)" />
                <defs>
                    <linearGradient id="paint0_linear_27_4" x1="24.5094" y1="4.8125" x2="26.4157" y2="31.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2BC155" stop-opacity="0.73" />
                        <stop offset="1" stop-color="#2BC155" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        </SvgIcon>
    )
}

export function Descending() {
    return (
        <SvgIcon sx={{ fontSize: { xs: "30px", md: "45px" } }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="33" viewBox="0 0 49 33" fill="none">
                <path d="M48.0195 31.5C46.0363 29.1574 40.2677 22.9517 36.0801 18.4459C34.8702 17.1442 32.9478 16.7963 31.3583 17.591L21.7234 22.4085C20.018 23.2612 17.9477 22.7916 16.7771 21.2865L0.998701 1" stroke="#F84E4E" stroke-width="2" />
                <path d="M36.1503 18.5215C40.3319 23.0208 46.0474 29.1705 48.0195 31.5H4.9987C2.78956 31.5 0.998699 29.7091 0.998699 27.5V1L16.7771 21.2865C17.9477 22.7916 20.018 23.2612 21.7234 22.4085L31.3583 17.591C32.9478 16.7963 34.8702 17.1442 36.0801 18.4459L36.1503 18.5215Z" fill="url(#paint0_linear_27_20)" />
                <defs>
                    <linearGradient id="paint0_linear_27_20" x1="24.5091" y1="4.8125" x2="22.6029" y2="31.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF6D4D" />
                        <stop offset="1" stop-color="#FF6D4D" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        </SvgIcon>
    )
}


const TrendingItem = ({ data }) => {


    return (
        <Box>
            {
                data.sort((a, b) => b.totalSale - a.totalSale).map((item, index) => (
                    <Box key={item.id}>
                        <Grid2 container spacing={1} sx={{ display: "flex", alignItems: "center" }}>
                            <Grid2 xs={1} sx={{ paddingRight: { xs: 3, md: 0 } }}>
                                <Typography fontWeight={600} color={"#969BA0"} sx={{ textAlign: "center", fontSize: { xs: 18, md: 22 } }}>{`#${index + 1}`}</Typography>

                            </Grid2>
                            <Grid2 xs={0} md={2} sx={{ display: "flex", justifyContent: "center" }}>
                                <Avatar sx={{ width: "75%", height: "75%", padding: "10px" }} variant="rounded" src={item.imgURL} />
                            </Grid2>
                            <Grid2 xs={7} md={6}>
                                <Typography fontWeight={600} sx={{ fontSize: { xs: 14, sm: 17 } }}>{item.title}</Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Box fontSize={"12px"} fontWeight={700} lineHeight={3.5}>${item.price} &ensp;&ensp;</Box>
                                    <Box fontSize={"12px"} fontWeight={600} lineHeight={3.5} color={"#2F4CDD"}>{item.type}</Box>

                                </Box>
                            </Grid2>
                            <Grid2 xs={3}>
                                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>

                                    <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", justifyContent: "center", margin: "3px" }}>
                                        {
                                            item.salesGrowth > 0 ?
                                                <Ascending />
                                                :
                                                <Descending />
                                        }

                                    </Box>

                                    <Box sx={{ margin: "3px" }}>
                                        <Typography fontWeight={600} sx={{ fontSize: { xs: 14, sm: 22 } }} >{item.totalSale}</Typography>
                                        <Typography sx={{ fontSize: { xs: 11, sm: 13 } }} color={"#969BA0"}> {`Sales (${item.salesGrowth}%)`}</Typography>
                                    </Box>

                                </Box>
                            </Grid2>

                        </Grid2>
                        <Divider />


                    </Box>

                ))
            }
        </Box>


    )
}

export default TrendingItem