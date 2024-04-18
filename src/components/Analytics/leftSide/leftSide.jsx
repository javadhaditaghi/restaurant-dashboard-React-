import { Box } from "@mui/material"
import AnalyticsOrder from "../analyticsOrder/analyticsOrder"
import FavoriteItems from "../favoriteItems/favoriteItems"


const LeftSide = () => {
    return (
        <Box>
            <Box sx={{ mb: 3 }}>
                <AnalyticsOrder />
            </Box>
            <Box>
                <FavoriteItems />
            </Box>

        </Box>
    )
}

export default LeftSide