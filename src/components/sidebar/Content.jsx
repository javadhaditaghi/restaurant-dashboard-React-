import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material"
// Imported Sections
import OrdersInfo from '../ordersSummary/ordersInfo';
import Revenue from '../revenue/revenue';
import DailyInfo from '../dailyInfo/dailyInfo';
import MiniDrawer from "./sidebar";
import DashboardTop from "../InfoSummery/dashboardTop";




const Content = () => {
    return (

        < Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <DashboardTop />
            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
                <OrdersInfo />
                <Revenue />
            </Grid2>
            <DailyInfo />
        </Box>




    )

}



export default Content;