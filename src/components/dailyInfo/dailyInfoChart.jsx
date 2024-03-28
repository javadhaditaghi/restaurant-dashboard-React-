import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



// Receiveing data fron dailyInfo.jsx with [data] props
export default function DailyInfoChart({ data }) {

    //Preparing data to pass to the chart    
    const pData = data['pData']
    const xLabels = data['xLabels']

    {/* The bar chart is here */ }
    return (
        <BarChart
            colors={['#2F4CDD']}
            grid={{ horizontal: "true" }}
            height={300}
            series={[
                {
                    data: pData,
                    id: 'pvId',
                    yAxisKey: 'leftAxisId',
                },
                ,
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band', categoryGapRatio: .6 }]}
            yAxis={[{ id: 'leftAxisId' }]}
            sx={{
                '.css-8fa8ub-MuiChartsAxis-root .MuiChartsAxis-line': {
                    display: 'none'
                },
                '.css-8fa8ub-MuiChartsAxis-root .MuiChartsAxis-tick': {
                    display: 'none'
                }
            }}

        />
    );
}
