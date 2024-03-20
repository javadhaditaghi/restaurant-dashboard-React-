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
                <Box sx={{ borderRadius: "8px", background: "#2BC155", width: "87px", height: "44px", color: "#fff", mr: 2 }}>
                    <Typography sx={{ display: "block", fontWeight: "700", textAlign: "center", fontSize: "1.5rem", lineHeight: "1.85" }}>25</Typography>
                </Box>
                <StyledBadge color="secondary" variant="dot">

                    <Typography fontWeight={600}>New Orders</Typography>
                </StyledBadge>

            </Box>
            <Box>
                <Link href="#" underline="none">
                    {'Manage orders '}
                    <ArrowForwardIosIcon fontSize="small" sx={{ position: "relative", top: "5px" }} />
                </Link>
            </Box>


        </Box>

    )
}


export default NewOrders