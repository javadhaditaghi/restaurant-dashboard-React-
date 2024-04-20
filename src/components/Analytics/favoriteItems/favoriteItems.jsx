import CardHeaderTxt from "../cardHeaderTxt.jsx/cardHeaderTxt"
import InnerBox2 from "../../ordersSummary/InnerBox2"
import { Box } from "@mui/material"
import OrderInfHeader from "../../ordersSummary/orderInfoHeader"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Chip from '@mui/material/Chip';
import SvgIcon from '@mui/material/SvgIcon';
import jsonData from './items.json';
import { useState, useEffect } from "react";
import Link from '@mui/material/Link';


export function Heart() {
    return (
        <SvgIcon>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z" stroke="#2F4CDD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </SvgIcon>
    );
}


const FavoriteItems = ({ maxNum = 6 }) => {

    // Receiving data from jsonData file 
    const todayItems = jsonData.daily
    const weekItems = jsonData.weekly
    const monthItems = jsonData.monthly

    const [data, setData] = useState(todayItems);
    const [filteredData, setFilteredData] = useState(data.slice(0, maxNum));
    const [linkText, setLinkText] = useState('more');

    // Update filteredData when data changes
    useEffect(() => {
        setFilteredData(data.slice(0, maxNum));
    }, [data, maxNum]);

    const onBottonClick = (index) => {
        setData(index === 2 ? todayItems : (index === 1 ? weekItems : monthItems));
    };

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
                <CardHeaderTxt title="Most Favorites Items" subtitle="Lorem ipsum dolor sit amet, consectetur" />
                <OrderInfHeader onButtonClick={onBottonClick} />
            </Box>

            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: 4 }}>
                {
                    filteredData.sort((a, b) => b.reviewCount - a.reviewCount).map((item, index) => (
                        <Grid2 md={4} key={index}>
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }} >
                                <Avatar variant="rounded" src={item.imgURL} sx={{ width: "100%", height: "auto", backgroundColor: "#F9F9F9", p: "20px", borderRadius: "15px" }}>
                                    {item.name}
                                </Avatar>
                                <Typography fontWeight={600} sx={{ mt: "10px" }}>{item.name}</Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1, alignItems: "center" }}>
                                        <Rating name="read-only" size="medium" value={item.starRate} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                                        <Typography fontSize={14} color={"#969BA0"}>({item.reviewCount} reviews)</Typography>
                                    </Box>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" sx={{ backgroundColor: "rgba(47, 76, 221, 0.0)" }}><Heart /></Avatar>}
                                        label={`${item.likesCount} Like it`}
                                        variant="filled"
                                        sx={{ mt: 1, backgroundColor: "rgba(47, 76, 221, 0.10)", py: "20px !important", px: "10px !important", color: "#2F4CDD" }}
                                    />
                                </Box>
                            </Box>

                        </Grid2>

                    ))

                }
            </Grid2>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
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





        </InnerBox2 >

    )
}

export default FavoriteItems

