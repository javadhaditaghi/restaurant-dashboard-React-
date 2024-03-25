import * as React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import InnerBox2 from "../ordersSummary/InnerBox2"
import RevenueHeader from "./revenueHeader"
import RevenueChart from './revenueChart';
import ChartInfo from './revenueChartInfo';


const Revenue = () => {
    return (

        <Grid2 sm={12} md={6} sx={{ position: "relative" }}>
            <InnerBox2>
                <RevenueHeader />
                <ChartInfo />
                <RevenueChart />

            </InnerBox2>

        </Grid2>
    )
}

export default Revenue