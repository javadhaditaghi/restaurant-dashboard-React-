
import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InnerBox2 from "../../ordersSummary/InnerBox2";
import OrderInfHeader from "../../ordersSummary/orderInfoHeader";
import RevenueChart from "../../revenue/revenueChart";
import jsonData from "./ordersData.json"
import { useState } from "react";


const AnalyticsOrder = () => {
    const dailyRevenue = jsonData.daily
    const weeklyRevenue = jsonData.weekly
    const monthlyRevenue = jsonData.monthly


    const [data, setData] = useState(dailyRevenue)

    const handleData = (index) => {
        setData(index == 0 ? monthlyRevenue : (index == 1 ? weeklyRevenue : dailyRevenue))
    }

    return (
        <Grid2 sm={12} md={6}>
            <InnerBox2>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                    <Box>
                        <Typography variant="h7" fontWeight={700}>Chart Orders</Typography>
                        <Typography variant="caption" color={"#969BA0"} sx={{ display: "block" }}>Lorem ipsum dolor sit amet, consectetur</Typography>
                    </Box>
                    <Box>
                        <OrderInfHeader handleData={handleData} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                    <RevenueChart data={data} />
                </Box>

            </InnerBox2>
        </Grid2>

    )
}

export default AnalyticsOrder