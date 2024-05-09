import { Box, Typography } from "@mui/material"
import Title from "../components/dashboardHeader/title"
import SelectData from "../components/dashboardHeader/select"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InnerBox2 from "../components/ordersSummary/InnerBox2";
import AnalyticsOrder from "../components/Analytics/analyticsOrder/analyticsOrder";
import TrendingItems from "../components/Analytics/trendingItems/trendingItems";
import LeftSide from "../components/Analytics/leftSide/leftSide";
import RightSide from "../components/Analytics/rightSide/rightSide";



const Analytics = () => {


    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 0 } }}>
                <Title title="Analytics" subtitle="Here is your restaurant summary with graph view" />
                <SelectData />
            </Box>
            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
                <Grid2 sm={12} md={6}>
                    <LeftSide />
                </Grid2>
                <Grid2 sm={12} md={6}>
                    <RightSide />
                </Grid2>



            </Grid2>
        </Box>
    )
}


export default Analytics