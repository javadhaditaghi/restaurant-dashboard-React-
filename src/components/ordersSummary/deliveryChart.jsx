import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts';
import { Box } from '@mui/material';
import "./deliveryChart.css";
import Grid from '@mui/material/Grid';


const first = 10 / 45
const second = 15 / 45
const third = 20 / 45

const DeliveryChart = () => {
    const data = [
        { id: `On Delivery (${first.toFixed(3) * 100}%)`, value: first, first: first },
        { id: `Delivered (${second.toFixed(2) * 100}%)`, value: second, second: second },
        { id: `Canceled (${third.toFixed(3) * 100}%)`, value: third, third: third },
    ];



    const chartSetting = {

        width: 400,
        height: 200,
        colors: ['#3E4954', '#2BC155', '#FF6D4C'],

    };
    const valueFormatter = (value) => `${value.toFixed(3)}mm`;







    return (

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <PieChart
                        colors={['#3E4954', '#2BC155', '#FF6D4C']}
                        series={[
                            {
                                data: data,
                                innerRadius: 35,
                                outerRadius: 70,
                                paddingAngle: 5,
                                cornerRadius: 5,
                                startAngle: 0,
                                endAngle: 360,
                                cx: 100,
                                cy: 100,
                            }
                        ]}

                        height={200}
                        width={200}
                    />
                </Grid>



                <Grid item xs={12} sm={8} md={8}>
                    <BarChart
                        dataset={data}
                        yAxis={[{ scaleType: 'band', dataKey: 'id', categoryGapRatio: 0.7 }]}
                        series={[
                            { dataKey: 'value', valueFormatter },


                        ]}
                        layout="horizontal"
                        {...chartSetting}
                        // leftAxis={null}
                        bottomAxis={null}
                        sx={{ pt: 3 }}
                        slotProps={{

                            bar: {
                                rx: 5,
                                ry: 10,

                            }
                        }}

                        margin={{
                            left: 150,
                        }}




                    />


                </Grid>
            </Grid>
        </Box>





    );
}

export default DeliveryChart;
