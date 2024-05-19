import { Box, Typography, Avatar, Chip, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const NewReviewsSideCarouselContent = () => {
    return (
        <>
            <Box sx={{ px: "2vw", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1, mb: 2 }}>
                <Avatar
                    alt="Tuna soup spinach with himalaya salt"
                    src="/static/images/avatar/1.pg"

                    sx={{ width: 55, height: 55, backgroundColor: "#C4C4C4", color: "#344038" }}></Avatar>
                <Box>
                    <Typography color='#ffffff' fontSize={16}>Javad Haditaghi</Typography>
                    <Typography fontSize={13} color={"#969BA0"} fontWeight={400}>Food Taster</Typography>
                </Box>
            </Box>
            <Box sx={{ px: "2vw" }}>
                <Typography sx={{ fontSize: "18px", color: "#ffffff", pb: 2 }}>
                    This was not just great cooking but exceptional cooking using only the best
                    ingredients.
                    Fast, professional and friendly service, we ordered the six course tasting
                    menu and every dish was spectacular.
                </Typography>
                <Chip label="Excellent" sx={{ backgroundColor: "#25303C", color: "#798EA4", fontWeight: 600, m: 1 }} />
                <Chip label="Good Services" sx={{ backgroundColor: "#25303C", color: "#798EA4", fontWeight: 600, m: 1 }} />
                <Chip label="Recommended" sx={{ backgroundColor: "#25303C", color: "#798EA4", fontWeight: 600, m: 1 }} />
                <Chip label="Satisfying" sx={{ backgroundColor: "#25303C", color: "#798EA4", fontWeight: 600, m: 1 }} />
            </Box>
            <Box sx={{ backgroundColor: "#FF6D4D", position: "relative", bottom: 0, left: 0, right: 0, zIndex: 60, borderRadius: "1.25rem;", padding: "30px 15px", mt: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                    <Typography component="legend" fontSize={'30px'} fontWeight={700} color={"#ffffff"} >5</Typography>
                    <Rating name="read-only" value={4} precision={.5} readOnly sx={{ color: "#ffffff", fontSize: "32px" }} emptyIcon={<StarIcon sx={{ opacity: 0.55 }} fontSize="30px" />} />
                </Box>
            </Box>

        </>

    )
}


export default NewReviewsSideCarouselContent