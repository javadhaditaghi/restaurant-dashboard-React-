import { Box, Typography } from "@mui/material"
import Link from '@mui/material/Link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -10,
        top: 13,
        backgroundColor: "#2BC155"


    },
}));

const NewOrders = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#E9FFEF", width: "100%", minHight: "100px", borderRadius: "12px", padding: "12px", mt: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <Box sx={{ borderRadius: "8px", background: "#2BC155", color: "#fff", mr: 1 }}>
                    <Typography sx={{ display: "block", fontWeight: "700", textAlign: "center", fontSize: { xs: "1rem", md: "1.5rem" }, padding: { xs: ".4rem .5rem", md: ".6rem .8rem" } }}>25</Typography>
                </Box>
                <StyledBadge color="secondary" variant="dot">
                    <Typography fontWeight={600} fontSize={{ xs: "14px", md: "16px" }}>New Orders</Typography>
                </StyledBadge>

            </Box>
            <Box>
                <Link href="#" underline="none" display={"flex"}>
                    <Typography sx={{ display: { xs: "none", md: "block" } }}>Manage Orders</Typography>
                    <Typography sx={{ display: { xs: "block", md: "none" } }}>Orders</Typography>
                    <ArrowForwardIosIcon fontSize="small" sx={{ position: "relative", top: "2px" }} />
                </Link>
            </Box>


        </Box >

    )
}


export default NewOrders