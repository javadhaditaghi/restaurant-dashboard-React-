import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material"
// Imported Sections
import DashboardHeader from '../dashboardHeader/DashboardHeader';
import InfoSummary from '../InfoSummery/InfoSummary';
import OrdersInfo from '../ordersSummary/ordersInfo';
import Revenue from '../revenue/revenue';
import DailyInfo from '../dailyInfo/dailyInfo';
import MiniDrawer from "./sidebar";


const Content = () => {
    return (
        < MiniDrawer >
            < Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "#F9F9F9", display: "flex", flexDirection: "column" }}>

                <DashboardHeader />
                <InfoSummary />

                <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
                    <OrdersInfo />
                    <Revenue />
                </Grid2>
                <DailyInfo />
            </Box >
        </MiniDrawer >



    )

}



export default Content;