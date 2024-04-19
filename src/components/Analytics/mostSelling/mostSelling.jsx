import InnerBox2 from "../../ordersSummary/InnerBox2"
import CardHeaderTxt from "../cardHeaderTxt.jsx/cardHeaderTxt"
import OrderInfHeader from "../../ordersSummary/orderInfoHeader"
import { Box, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Avatar from "@mui/material/Avatar"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';


const MostSellingItems = () => {
    return (
        <InnerBox2>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                <CardHeaderTxt title="Most Selling Items" subtitle="Lorem ipsum dolor sit amet, consectetur" />
                <OrderInfHeader />
            </Box>
            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: 4 }}>
                <Grid2 md={1}></Grid2>
                <Grid2 md={2}>
                    <Avatar variant="rounded" src="../../../src/assets/images/foods/Food_15.png" sx={{ width: "100%", height: "auto", backgroundColor: "#F9F9F9", p: "10px", borderRadius: "15px" }}>
                        Medium Spicy Pizza with Kemangi Leaf
                    </Avatar>
                </Grid2>
                <Grid2 md={5}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        <Typography fontWeight={600}>Medium Spicy Pizza with Kemangi Leaf</Typography>
                        <Typography sx={{ pt: 1, color: "#2F4CDD" }} textTransform={"uppercase"}>SPAGETHI</Typography>
                        <Typography sx={{ pt: 2, color: "#969BA0" }}>Serves for 4 Person | 24mins</Typography>
                    </Box>
                </Grid2>
                <Grid2 md={2}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <Typography fontWeight={700} fontSize={24} sx={{ display: "block" }}>$12.56</Typography>
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

        </InnerBox2>
    )
}

export default MostSellingItems