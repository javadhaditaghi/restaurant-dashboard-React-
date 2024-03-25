import * as React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import InnerBox2 from "../ordersSummary/InnerBox2"
import DailyInfoHeader from './dailyInfoHeader';
import DailyInfoChart from './dailyInfoChart';



const DailyInfo = () => {
    return (

        <Grid2 sm={12} md={12} sx={{ position: "relative", pt: 3 }}>
            <InnerBox2>
                <DailyInfoHeader />
                <DailyInfoChart />


            </InnerBox2>

        </Grid2>
    )
}

export default DailyInfo