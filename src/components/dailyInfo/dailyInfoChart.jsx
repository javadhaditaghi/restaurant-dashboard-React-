import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



const pData = [30, 60, 24, 43, 27, 51, 55, 30, 60, 24, 43, 27, 51, 55, 30, 60, 24, 43, 27, 51, 55, 30, 60, 24, 43, 27, 51, 55, 33, 41];

const xLabels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30 ',
];

export default function DailyInfoChart() {
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

        />
    );
}
