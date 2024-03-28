import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';




export default function DailyInfoChart({ data }) {
    const pData = data['pData']

    const xLabels = data['xLabels']

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
