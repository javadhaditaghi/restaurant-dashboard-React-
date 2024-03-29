import * as React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import InnerBox2 from "../ordersSummary/InnerBox2"
import RevenueHeader from "./revenueHeader"
import RevenueChart from './revenueChart';
import ChartInfo from './revenueChartInfo';
import { useState } from 'react';
import jsonData from './revenueData.json'


const Revenue = () => {
    const dailyRevenue = jsonData.daily
    const weeklyRevenue = jsonData.weekly
    const monthlyRevenue = jsonData.monthly




    const [data, setData] = useState(dailyRevenue)

    const handleData = (index) => {
        setData(index == 0 ? monthlyRevenue : (index == 1 ? weeklyRevenue : dailyRevenue))
    }

    return (


        < Grid2 sm={12} md={6} sx={{ position: "relative" }}>
            <InnerBox2>
                <RevenueHeader handleData={handleData} />
                <ChartInfo />
                <RevenueChart data={data} />
                {console.log(data)}

            </InnerBox2>

        </Grid2 >
    )
}

export default Revenue