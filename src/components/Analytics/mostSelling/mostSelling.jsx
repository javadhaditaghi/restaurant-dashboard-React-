import InnerBox2 from "../../ordersSummary/InnerBox2"
import CardHeaderTxt from "../cardHeaderTxt.jsx/cardHeaderTxt"
import OrderInfHeader from "../../ordersSummary/orderInfoHeader"
import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Avatar from "@mui/material/Avatar"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import jsonData from './mostSellingItems.json';
import { useState } from "react"


const MostSellingItems = () => {
    const dilyData = jsonData.daily
    const weeklyData = jsonData.weekly
    const monthlyData = jsonData.monthly

    // Differentiationg between daily, weekly and monthly
    const [data, setData] = useState(dilyData)

    const onBottonClick = (index) => {
        setData(index == 2 ? dilyData : (index == 1 ? weeklyData : monthlyData))
    }


    return (
        <InnerBox2>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                <CardHeaderTxt title="Most Selling Items" subtitle="Lorem ipsum dolor sit amet, consectetur" />
                <OrderInfHeader onButtonClick={onBottonClick} />
            </Box>


            {data.map((item, index) => (
                <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: 4 }} key={index}>

                    <Grid2 md={1}></Grid2>
                    <Grid2 md={2}>
                        <Avatar variant="rounded" src={item.imgURL} sx={{ width: "100%", height: "auto", backgroundColor: "#F9F9F9", p: "10px", borderRadius: "15px" }}>
                            {item.name}
                        </Avatar>
                    </Grid2>
                    <Grid2 md={5}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                            <Typography fontWeight={600}>{item.name}</Typography>
                            <Typography sx={{ pt: 1, color: "#2F4CDD" }} textTransform={"uppercase"}>{item.type}</Typography>
                            <Typography sx={{ pt: 2, color: "#969BA0" }}>Serves for {item.servingSize} Person | {item.lastPurchase}mins</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 md={2}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <Typography fontWeight={700} fontSize={24} sx={{ display: "block" }}>${item.price}</Typography>
                        </Box>

                    </Grid2>
                    <Grid2 md={1}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                            <IconButton
                                aria-label="more info"
                                aria-haspopup="true"
                                color="inherit"
                            ><MoreHorizIcon /></IconButton>

                        </Box>

                    </Grid2>
                    <Grid2 md={1}></Grid2>

                </Grid2>
            ))}


        </InnerBox2>
    )
}

export default MostSellingItems