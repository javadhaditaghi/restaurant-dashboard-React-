import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// Receiving ordersData as props from ordersInfo.jsx
const DeliveryCards = ({ ordersData }) => {

    return (
        <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2} sx={{ mt: 2 }}>
            {/* Pie -------------------------- Start of delivery Info Cards in orders summery secion -------------------*/}
            {
                ordersData.map((item, index) => (
                    <Grid2 key={index} xs={6} sm={4}>
                        <Box sx={{ borderRadius: "12px", border: "1px solid #F2F2F2", width: "100%", p: 2 }}>
                            <Typography variant="h5" fontWeight={700}>{item.content}</Typography>
                            <Typography color={"#969BA0"} fontWeight={600}>{item.title}</Typography>
                        </Box>
                    </Grid2>
                ))
            }
            {/* Pie -------------------------- End of delivery Info Cards in orders summery secion -------------------*/}
        </Grid2>
    );
};

export default DeliveryCards;