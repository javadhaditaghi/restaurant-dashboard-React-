
import { Avatar, Chip, Rating, Typography, Box } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import jsonData from './otherReviews.json'



const OtherReviews = () => {
    return (
        <>
            {
                jsonData.map((item) => (
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

        </>


    )
}


export default OtherReviews