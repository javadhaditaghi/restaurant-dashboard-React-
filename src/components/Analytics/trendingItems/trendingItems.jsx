import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InnerBox2 from "../../ordersSummary/InnerBox2";
import { Box } from "@mui/material";
import CardHeaderTxt from "../cardHeaderTxt.jsx/cardHeaderTxt";
import CardDropdown from "../../dropdown/cardDropdown";
import TrendingItem from "./items";



const TrendingItems = () => {
    return (
        <Grid2 sm={12} md={6}>
            <InnerBox2>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                    <CardHeaderTxt title="🔥 Trending Items" subtitle="Lorem ipsum dolor sit amet, consectetur" />
                    <CardDropdown />
                </Box>
                <Box sx={{ padding: "10px 20px" }}>
                    <TrendingItem />

                </Box>


            </InnerBox2>
        </Grid2>


    )
}

export default TrendingItems