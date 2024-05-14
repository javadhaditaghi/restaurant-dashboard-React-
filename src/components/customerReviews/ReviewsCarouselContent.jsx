
//other imports
import InnerBox2 from '../ordersSummary/InnerBox2';
import { Box, Avatar, Typography, Rating } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';






const ReviewsCarouselContent = () => {

    return (
        <InnerBox2>
            <Box sx={{ p: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, my: 2 }}>
                    <Avatar
                        alt="Tuna soup spinach with himalaya salt"
                        src="/static/images/avatar/1.pg"
                        variant="rounded"
                        sx={{ width: 87, height: 87, backgroundColor: "#344038", borderRadius: "15px" }}></Avatar>
                    <Box>
                        <Typography fontSize={18.5} fontWeight={600} lineHeight={"24px"} marginButtom="15px">Tuna soup spinach with himalaya salt</Typography>
                        <Typography fontSize={13} color={"#2F4CDD"} fontWeight={500} lineHeight={"24px"}>MAIN COURSE</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>
                        A very fine addition to the not over plentiful supply of good restaurants in this part of west London.
                    </Typography>
                </Box>

            </Box>
            <Box sx={{ px: 2 }} >
                <Box sx={{ width: "100%", height: "102px", background: "linear-gradient(99deg, #2C3B83 -7.58%, #3D018A 107.6%)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, m: 2 }}>
                        <Avatar
                            alt="Tuna soup spinach with himalaya salt"
                            src="/static/images/avatar/1.pg"

                            sx={{ width: 55, height: 55, backgroundColor: "#C4C4C4", color: "#344038" }}></Avatar>
                        <Box>
                            <Typography color='#ffffff'>Javad Haditaghi</Typography>
                            <Typography fontSize={13} color={"#ffffff"} fontWeight={400}>Food Taster</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", color: "#ffffff", m: 2 }}>
                        <Rating name="read-only" value={.6} max={1} precision={.2} emptyIcon={<StarBorderOutlinedIcon fontSize="inherit" sx={{ color: "#ffffff" }} />} readOnly />
                        <Typography>4.6</Typography>
                    </Box>
                </Box>
            </Box>
        </InnerBox2>

    )
}


export default ReviewsCarouselContent