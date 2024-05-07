import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Colorswitch from './revenueChartColors';
import { Box } from '@mui/material';





const RevenueChart = ({ data }) => {




    const expenseData = data["expenseData"];
    const incomeData = data["incomeData"];
    const xLabels = data["Labels"];

    const orderData = data["orderData"]
    console.log(orderData)



    return (
        <Box sx={{ width: "100%" }}>
            <LineChart
                grid={{ horizontal: true }}
                margin={{ top: 120, left: 70 }}
                height={350}
                colors={['#2F4CDD', '#B519EC']}
                series={
                    orderData == undefined ?
                        [
                            { data: incomeData, label: 'Income', area: 'true' },
                            { data: expenseData, label: 'Expense', area: 'true' },
                        ] : [
                            { data: orderData, label: 'order', area: 'true' },
                        ]

                }
                xAxis={[{ scaleType: 'point', data: xLabels }]}

                slotProps={{
                    legend: {
                        direction: 'row',
                        position: { vertical: 'top', horizontal: 'left' },
                        itemGap: 62,
                    },
                }}
                sx={{
                    '.css-j6h5qe-MuiAreaElement-root': {
                        fill: 'url(#paint0_linear_45_2)',
                    },
                    '.css-tvglr0-MuiAreaElement-root': {
                        fill: 'url(#paint0_linear_45_3)',
                    },
                    '.MuiChartsAxis-line': {
                        display: 'none',
                    },
                    '.MuiChartsAxis-tick': {
                        display: 'none',
                    },
                    ".css-1u0lry5-MuiChartsLegend-root": {
                        display: { xs: "none", lg: "block" }
                    }


                }}


            >
                {/* Passed as a child */}
                < Colorswitch />

            </LineChart >
        </Box>
    )
}


export default RevenueChart