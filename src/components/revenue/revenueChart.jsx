import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Colorswitch from './revenueChartColors';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 6490, 5321, 1321];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 10000, 1000, 7500];
const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
];



const RevenueChart = () => {
    return (
        <LineChart
            grid={{ horizontal: true }}
            margin={{ top: 100, left: 100 }}
            height={350}
            colors={['#2F4CDD', '#B519EC']}
            series={
                [
                    { data: pData, label: 'Income', area: 'true' },
                    { data: uData, label: 'Expense', area: 'true' },
                ]}
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