import { Box } from "@mui/material"
import Title from "../components/dashboardHeader/title"
import SelectData from "../components/dashboardHeader/select"


const Analytics = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center" }}>
                <Title title="Analytics" subtitle="Here is your restaurant summary with graph view" />
                <SelectData />
            </Box>

        </Box>
    )
}


export default Analytics