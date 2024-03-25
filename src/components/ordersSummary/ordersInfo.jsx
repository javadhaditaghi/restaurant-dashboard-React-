import * as React from 'react';
import InnerBox2 from './InnerBox2';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Typography } from "@mui/material"
import OrderInfHeader from './orderInfoHeader';
import NewOrders from './newOrders';
import DeliveryCards from './deliveryCards';
import DeliveryChart from './deliveryChart';







const OrdersInfo = () => {
    return (

        <Grid2 sm={12} md={6}>
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
                <Box>
                    <DeliveryChart />
                </Box>
            </InnerBox2>
        </Grid2>





    )
}

export default OrdersInfo