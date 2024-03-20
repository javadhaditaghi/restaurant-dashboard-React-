import * as React from 'react';
import InnerBox2 from './InnerBox2';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Typography } from "@mui/material"
import OrderInfHeader from './orderInfoHeader';
import NewOrders from './newOrders';
import DeliveryCards from './deliveryCards';







const OrdersInfo = () => {
    return (
        <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
            <Grid2 sm={12} lg={6}>
                <InnerBox2>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                        <Box>
                            <Typography variant="h7" fontWeight={700}>Orders Summary</Typography>
                            <Typography variant="caption" color={"#969BA0"} sx={{ display: "block" }}>Lorem ipsum dolor sit amet, consectetur</Typography>
                        </Box>
                        <Box>
                            <OrderInfHeader />
                        </Box>
                    </Box>
                    <Box>
                        <NewOrders />
                    </Box>
                    <Box>
                        <DeliveryCards />
                    </Box>
                </InnerBox2>
            </Grid2>
            <Grid2 sm={6} md={6}>
                <InnerBox2
                >
                </InnerBox2>

            </Grid2>

        </Grid2>


    )
}

export default OrdersInfo