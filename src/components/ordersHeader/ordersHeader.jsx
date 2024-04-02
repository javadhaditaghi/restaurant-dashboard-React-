import Title from "../dashboardHeader/title"
import SelectData from "../dashboardHeader/select"
import { Box } from "@mui/material"


const OrderHeader = () => {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center" }}>
            <Title title="Orders" subtitle="Here is your order list data" />
            <SelectData />
        </Box>

    )
}


export default OrderHeader