import { Box, Typography } from "@mui/material"
import Title from "../components/dashboardHeader/title"
import SelectData from "../components/dashboardHeader/select"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InnerBox2 from "../components/ordersSummary/InnerBox2";
import OrderInfHeader from "../components/ordersSummary/orderInfoHeader";
import RevenueChart from "../components/revenue/revenueChart";
import jsonData from "../components/Analytics/ordersData.json"
import { useState } from "react";


const Analytics = () => {
    const dailyRevenue = jsonData.daily
    const weeklyRevenue = jsonData.weekly
    const monthlyRevenue = jsonData.monthly




    const [data, setData] = useState(dailyRevenue)

    const handleData = (index) => {
        setData(index == 0 ? monthlyRevenue : (index == 1 ? weeklyRevenue : dailyRevenue))
    }

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center" }}>
                <Title title="Analytics" subtitle="Here is your restaurant summary with graph view" />
                <SelectData />
            </Box>
            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
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
                <Grid2 sm={12} md={6}>
                    <InnerBox2>

                    </InnerBox2>

                </Grid2>

            </Grid2>


        </Box >
    )
}


export default Analytics