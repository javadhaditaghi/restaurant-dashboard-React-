
import { Avatar, Chip, Rating, Typography, Box, Button } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import jsonData from './otherReviews.json'
import { useState } from "react";
import { SvgIcon } from "@mui/material";




export const ArrowDown = () => {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M18 12.5L12 18.5L6 12.5" stroke="#D3D6E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 5.5L12 11.5L6 5.5" stroke="#D3D6E4" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </SvgIcon>

    )
}
export const ArrowUp = () => {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M6 12.5001L12 6.50012L18 12.5001" stroke="#D3D6E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 19.5001L12 13.5001L18 19.5001" stroke="#D3D6E4" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </SvgIcon>

    )
}


const OtherReviews = ({ maxNum = 6 }) => {
    const [data, setData] = useState(jsonData.slice(0, maxNum))
    const [linkText, setLinkText] = useState('more');
    const [arrow, setArrow] = useState(<ArrowDown />);

    const clickHandler = () => {
        if (data.length == maxNum) {
            // If currently showing only the first 6 items, show all items
            setData(jsonData);
            setLinkText("less")
            setArrow(<ArrowUp />)
        } else {
            // If currently showing all items, show only the first 6 items
            setData(data.slice(0, maxNum));
            setLinkText("more")
            setArrow(<ArrowDown />)
        }
    }


    return (
        <>
            {
                data.map((item) => (
                    <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2} padding={2}>
                        <Grid2 md={10}>
                            <Box display={"flex"} width={"100%"}>
                                <Avatar
                                    alt="customer"
                                    src="/static/images/avatar/1.pg"
                                    sx={{ width: 55, height: 55, backgroundColor: "#C4C4C4", color: "#344038", mr: 2 }}>{item.customer_name[0]}</Avatar>

                                <Box width={"100%"}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography fontSize={"18px"} fontWeight={600}>{item.customer_name}</Typography>
                                            <Typography fontSize={"14px"} color={"#969BA0"}>{item.position_or_job_title}</Typography>
                                        </Box>

                                        <Box>
                                            {item.highlights.map(highlight => (
                                                <Chip label={highlight} sx={{ backgroundColor: "rgba(255, 109, 77, 0.10)", color: "#FF6D4D", fontWeight: 600, mx: 1 }} />
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography>
                                            {item.review}
                                        </Typography>
                                    </Box>
                                </Box>


                            </Box>


                        </Grid2>
                        <Grid2 md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography component="legend" fontSize={'30px'} fontWeight={700}>{item.rating}</Typography>
                            <Rating name="read-only" value={item.rating} precision={.5} readOnly sx={{ color: "#2F4CDD" }} emptyIcon={<StarIcon sx={{ opacity: 0.55 }} fontSize="inherit" />} />
                        </Grid2>



                    </Grid2>


                ))


            }

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>


                <Button
                    variant="contained"
                    endIcon={arrow}
                    onClick={
                        clickHandler
                    }> Load {linkText}</Button>

            </Box>
        </>


    )
}


export default OtherReviews