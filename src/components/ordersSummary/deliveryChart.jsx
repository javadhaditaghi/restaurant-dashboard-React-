import { PieChart } from '@mui/x-charts/PieChart';

const DeliveryChart = () => {
    const data = [
        { id: 0, value: 10 },
        { id: 1, value: 15 },
        { id: 2, value: 20 },
    ];

    return (
        <PieChart
            colors={['#3E4954', '#2BC155', '#FF6D4C']}
            series={[
                {
                    data: data,
                    innerRadius: 50,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                    cx: 150,
                    cy: 150,
                }
            ]}

            height={280}
        />
    );
}

export default DeliveryChart;
