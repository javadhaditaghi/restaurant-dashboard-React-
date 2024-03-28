import * as React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import InnerBox2 from "../ordersSummary/InnerBox2"
import DailyInfoHeader from './dailyInfoHeader';
import DailyInfoChart from './dailyInfoChart';
import jsonData from './data.json';
import { useState } from 'react';


const DailyInfo = () => {
    // Receiving data from jsonData file 
    const todayData = jsonData.hoursOfDayData;
    const monthlyData = jsonData.monthDaysData;
    const weeklyData = jsonData.daysOfWeekData;

    const [data, setData] = useState(todayData)

    const dataClick = (ind) => {
        setData(ind == 2 ? todayData : (ind == 1 ? weeklyData : monthlyData))
    }

    return (


        <Grid2 sm={12} md={12} sx={{ position: "relative", pt: 3 }}>
            <InnerBox2>
                <DailyInfoHeader dataClicked={dataClick} />
                <DailyInfoChart data={data} />
                {console.log(data)}


            </InnerBox2>

        </Grid2>
    )
}

export default DailyInfo