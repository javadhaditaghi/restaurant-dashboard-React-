import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InnerBox2 from "../../ordersSummary/InnerBox2";
import { Box } from "@mui/material";
import CardHeaderTxt from "../cardHeaderTxt.jsx/cardHeaderTxt";
import CardDropdown from "../../dropdown/cardDropdown";
import TrendingItem from "./items";
import jsonData from "./itemsData.json";
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';




const TrendingItems = () => {

    const dailyTrend = jsonData.today
    const weeklyTrend = jsonData.weekly
    const monthlyTrend = jsonData.monthly

    const [data, setData] = useState(monthlyTrend)

    const handleData = (index) => {
        setData(index == 0 ? monthlyTrend : (index == 1 ? weeklyTrend : dailyTrend))
    }


    const isMdScreen = useMediaQuery('(min-width: 768px)');


    return (

        <InnerBox2>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                {isMdScreen && <CardHeaderTxt title="🔥 Trending Items" subtitle="Lorem ipsum dolor sit amet, consectetur" />}
                {!isMdScreen && <CardHeaderTxt title="🔥 Trending" />}
                <CardDropdown handleData={handleData} />
            </Box>
            <Box sx={{ padding: "10px 20px" }}>
                <TrendingItem data={data} />
            </Box>

        </InnerBox2>



    )
}

export default TrendingItems