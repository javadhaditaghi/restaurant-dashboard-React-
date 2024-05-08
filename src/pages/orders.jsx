import OrderHeader from "../components/ordersHeader/ordersHeader"
import { Box } from "@mui/material"
import EnhancedTable from "../components/orderTable/orderTable"

const Orders = () => {
    return (

        <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <OrderHeader title={"Orders"} />
            <EnhancedTable />
        </Box>

    )
}


export default Orders