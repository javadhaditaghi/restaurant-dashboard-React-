import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Colorswitch from './revenueChartColors';





const RevenueChart = ({ data }) => {




    const expenseData = data["expenseData"];
    const incomeData = data["incomeData"];
    const xLabels = data["Labels"];

    const orderData = data["orderData"]
    console.log(orderData)



    return (
        <LineChart
            grid={{ horizontal: true }}
            margin={{ top: 120, left: 100 }}
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
                }


            }}


        >
            {/* Passed as a child */}
            < Colorswitch />

        </LineChart >
    )
}


export default RevenueChart