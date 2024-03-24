import * as React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import InnerBox2 from "../ordersSummary/InnerBox2"
import RevenueHeader from "./revenueHeader"
import RevenueChart from './revenueChart';


const Revenue = () => {
    return (

        <Grid2 sm={12} md={6}>
            <InnerBox2>
                <RevenueHeader />
                <RevenueChart />

            </InnerBox2>

        </Grid2>
    )
}

export default Revenue