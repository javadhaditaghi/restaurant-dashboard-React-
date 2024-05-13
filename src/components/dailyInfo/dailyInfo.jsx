import * as React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import InnerBox2 from "../ordersSummary/InnerBox2"
import DailyInfoHeader from './dailyInfoHeader';
import DailyInfoChart from './dailyInfoChart';
import jsonData from './data.json';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';



export function Reviews() {
    return (
        <SvgIcon sx={{ fontSize: "10vw", position: "absolute", right: 0, top: 0 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="245" height="248" viewBox="0 0 245 248" fill="none">
                <path d="M95.8359 98.1875H36.3516C16.307 98.1875 0 81.8805 0 61.8359V2.35156C0 -17.693 16.307 -34 36.3516 -34H95.8359C115.881 -34 132.188 -17.693 132.188 2.35156V61.8359C132.188 81.8805 115.881 98.1875 95.8359 98.1875ZM36.3516 -16.375C26.0255 -16.375 17.625 -7.97448 17.625 2.35156V61.8359C17.625 72.162 26.0255 80.5625 36.3516 80.5625H95.8359C106.162 80.5625 114.562 72.162 114.562 61.8359V2.35156C114.562 -7.97448 106.162 -16.375 95.8359 -16.375H36.3516Z" fill="white" fill-opacity="0.04" />
                <path d="M245.648 98.1875H186.164C166.119 98.1875 149.812 81.8805 149.812 61.8359V2.35156C149.812 -17.693 166.119 -34 186.164 -34H245.648C265.693 -34 282 -17.693 282 2.35156V61.8359C282 81.8805 265.693 98.1875 245.648 98.1875ZM186.164 -16.375C175.838 -16.375 167.438 -7.97448 167.438 2.35156V61.8359C167.438 72.162 175.838 80.5625 186.164 80.5625H245.648C255.974 80.5625 264.375 72.162 264.375 61.8359V2.35156C264.375 -7.97448 255.974 -16.375 245.648 -16.375H186.164Z" fill="white" fill-opacity="0.04" />
                <path d="M215.906 248C179.462 248 149.812 218.35 149.812 181.906C149.812 145.462 179.462 115.812 215.906 115.812C252.35 115.812 282 145.462 282 181.906C282 218.35 252.35 248 215.906 248ZM215.906 133.438C189.181 133.438 167.438 155.181 167.438 181.906C167.438 208.632 189.181 230.375 215.906 230.375C242.632 230.375 264.375 208.632 264.375 181.906C264.375 155.181 242.632 133.438 215.906 133.438Z" fill="white" fill-opacity="0.04" />
                <path d="M95.8359 248H36.3516C16.307 248 0 231.693 0 211.648V152.164C0 132.119 16.307 115.812 36.3516 115.812H95.8359C115.881 115.812 132.188 132.119 132.188 152.164V211.648C132.188 231.693 115.881 248 95.8359 248ZM36.3516 133.438C26.0255 133.438 17.625 141.838 17.625 152.164V211.648C17.625 221.974 26.0255 230.375 36.3516 230.375H95.8359C106.162 230.375 114.562 221.974 114.562 211.648V152.164C114.562 141.838 106.162 133.438 95.8359 133.438H36.3516Z" fill="white" fill-opacity="0.04" />
            </svg>
        </SvgIcon>
    )
}

export function Reviews2() {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <g clip-path="url(#clip0_18_141)">
                    <path d="M14.9531 20.625H5.67188C2.54435 20.625 0 18.0806 0 14.9531V5.67188C0 2.54435 2.54435 0 5.67188 0H14.9531C18.0806 0 20.625 2.54435 20.625 5.67188V14.9531C20.625 18.0806 18.0806 20.625 14.9531 20.625ZM5.67188 2.75C4.06072 2.75 2.75 4.06072 2.75 5.67188V14.9531C2.75 16.5643 4.06072 17.875 5.67188 17.875H14.9531C16.5643 17.875 17.875 16.5643 17.875 14.9531V5.67188C17.875 4.06072 16.5643 2.75 14.9531 2.75H5.67188Z" fill="white" />
                    <path d="M38.3281 20.625H29.0469C25.9194 20.625 23.375 18.0806 23.375 14.9531V5.67188C23.375 2.54435 25.9194 0 29.0469 0H38.3281C41.4556 0 44 2.54435 44 5.67188V14.9531C44 18.0806 41.4556 20.625 38.3281 20.625ZM29.0469 2.75C27.4357 2.75 26.125 4.06072 26.125 5.67188V14.9531C26.125 16.5643 27.4357 17.875 29.0469 17.875H38.3281C39.9393 17.875 41.25 16.5643 41.25 14.9531V5.67188C41.25 4.06072 39.9393 2.75 38.3281 2.75H29.0469Z" fill="white" />
                    <path d="M33.6875 44C28.0012 44 23.375 39.3738 23.375 33.6875C23.375 28.0012 28.0012 23.375 33.6875 23.375C39.3738 23.375 44 28.0012 44 33.6875C44 39.3738 39.3738 44 33.6875 44ZM33.6875 26.125C29.5176 26.125 26.125 29.5176 26.125 33.6875C26.125 37.8574 29.5176 41.25 33.6875 41.25C37.8574 41.25 41.25 37.8574 41.25 33.6875C41.25 29.5176 37.8574 26.125 33.6875 26.125Z" fill="white" />
                    <path d="M14.9531 44H5.67188C2.54435 44 0 41.4556 0 38.3281V29.0469C0 25.9194 2.54435 23.375 5.67188 23.375H14.9531C18.0806 23.375 20.625 25.9194 20.625 29.0469V38.3281C20.625 41.4556 18.0806 44 14.9531 44ZM5.67188 26.125C4.06072 26.125 2.75 27.4357 2.75 29.0469V38.3281C2.75 39.9393 4.06072 41.25 5.67188 41.25H14.9531C16.5643 41.25 17.875 39.9393 17.875 38.3281V29.0469C17.875 27.4357 16.5643 26.125 14.9531 26.125H5.67188Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_18_141">
                        <rect width="44" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>

    )
}
export function RightArrow() {
    return (
        <SvgIcon sx={{ color: "#ffffff", fontSize: "15px", fontWeight: 700 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </SvgIcon>
    )

}


const DailyInfo = () => {
    // Receiving data from jsonData file 
    const todayData = jsonData.hoursOfDayData;
    const monthlyData = jsonData.monthDaysData;
    const weeklyData = jsonData.daysOfWeekData;

    // using useSatate to make a connection between dailyInfoChart and buttons inside daily info header
    const [data, setData] = useState(todayData)
    const dataClick = (ind) => {
        setData(ind == 2 ? todayData : (ind == 1 ? weeklyData : monthlyData))
    }

    return (




        <>
            <Grid2 sm={12} md={10} sx={{ position: "relative", pt: 3 }}>
                <InnerBox2>
                    <DailyInfoHeader dataClicked={dataClick} />
                    <DailyInfoChart data={data} />
                    {console.log(data)}


                </InnerBox2>

            </Grid2>
            <Grid2 md={2} sx={{ position: "relative", pt: 3, textDecoration: "none" }} component={Link} to={"/customer_reviews"}>

                <InnerBox2 backColor="#3E4954">
                    <Reviews />
                    <Box sx={{ position: "relative", top: "50%", paddingX: "25px" }}>

                        <Reviews2 />
                        <Typography color={"#ffffff"}>Manage<br />Shop Reviews</Typography>
                        <Typography sx={{ color: "rgba(255, 255, 255, 0.53)", fontSize: "12px" }}>Lorem ipsum dolor sit amet, consectetur</Typography>
                        <RightArrow />
                    </Box>
                </InnerBox2>


            </Grid2>
        </>


    )
}

export default DailyInfo