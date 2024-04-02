import OrderHeader from "../components/ordersHeader/ordersHeader"
import { Box } from "@mui/material"

const Orders = () => {
    return (

        <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <OrderHeader />
        </Box>

    )
}


export default Orders