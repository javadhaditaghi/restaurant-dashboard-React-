import OrderHeader from "../components/ordersHeader/ordersHeader"
import { Box } from "@mui/material"
import EnhancedTable from "../components/orderTable/orderTable"


const Customers = () => {

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <OrderHeader title={"Customers"} />
            <EnhancedTable />
        </Box>
    )
}

export default Customers