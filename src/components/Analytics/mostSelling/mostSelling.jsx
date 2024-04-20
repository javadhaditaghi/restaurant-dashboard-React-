import InnerBox2 from "../../ordersSummary/InnerBox2"
import CardHeaderTxt from "../cardHeaderTxt.jsx/cardHeaderTxt"
import OrderInfHeader from "../../ordersSummary/orderInfoHeader"
import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Avatar from "@mui/material/Avatar"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import jsonData from './mostSellingItems.json';
import { useState, useEffect } from "react"
import Link from "@mui/material/Link"


const MostSellingItems = ({ maxNum = 5 }) => {
    const dilyData = jsonData.daily
    const weeklyData = jsonData.weekly
    const monthlyData = jsonData.monthly

    // Differentiationg between daily, weekly and monthly and slicing the first 5 items
    const [data, setData] = useState(dilyData)
    const [filteredData, setFilteredData] = useState(data.slice(0, maxNum));
    const [linkText, setLinkText] = useState('more');


    // Update filteredData when data changes
    useEffect(() => {
        setFilteredData(data.slice(0, maxNum));
    }, [data, maxNum]);



    const onBottonClick = (index) => {
        setData(index == 2 ? dilyData : (index == 1 ? weeklyData : monthlyData))
    }



    const clickHandler = () => {
        if (filteredData.length == maxNum) {
            // If currently showing only the first 6 items, show all items
            setFilteredData(data);
            setLinkText("less")

        } else {
            // If currently showing all items, show only the first 6 items
            setFilteredData(data.slice(0, maxNum));
            setLinkText("more")

        }
    }



    return (
        <InnerBox2>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                <CardHeaderTxt title="Most Selling Items" subtitle="Lorem ipsum dolor sit amet, consectetur" />
                <OrderInfHeader onButtonClick={onBottonClick} />
            </Box>


            {filteredData.sort((a, b) => b.servingSize - a.servingSize).map((item, index) => (
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
            <Box sx={{ background: "linear-gradient(0deg, #FFF 4.49%, rgba(255, 255, 255, 0.00) 75%)", position: "relative", height: 245, top: "-230px", marginBottom: "-230px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "100%" }}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={
                            clickHandler
                        }

                    >
                        View {linkText}
                    </Link>
                </Box>
            </Box>


        </InnerBox2>

    )
}

export default MostSellingItems