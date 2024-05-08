import Title from "../dashboardHeader/title"
import SelectData from "../dashboardHeader/select"
import { Box } from "@mui/material"


const OrderHeader = ({ title }) => {
    console.log("this is the prop", title)
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 0 } }}>
            <Title title={title} subtitle="Here is your order list data" />
            <SelectData />
        </Box>

    )
}


export default OrderHeader