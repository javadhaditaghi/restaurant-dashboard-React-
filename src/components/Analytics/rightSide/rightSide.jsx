

import TrendingItems from "../trendingItems/trendingItems"
import InnerBox2 from "../../ordersSummary/InnerBox2"
import MostSellingItems from "../mostSelling/mostSelling"
import { Box } from "@mui/material"


const RightSide = () => {
    return (
        <Box>
            <Box sx={{ mb: 3 }}>
                <TrendingItems />
            </Box>
            <Box>
                <MostSellingItems />
            </Box>

        </Box>




    )
}

export default RightSide
