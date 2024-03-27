import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts';
import { Box } from '@mui/material';
import "./deliveryChart.css";
import Grid from '@mui/material/Grid';




const DeliveryChart = ({ ordersData }) => {

    {/* Pie -------------------------- Start of Preparing the Information for Charts -------------------*/ }
    // Extracting content values from ordersData
    const onDelivery = parseInt(ordersData.find(item => item.title === 'On Delivery').content);
    const delivered = parseInt(ordersData.find(item => item.title === 'Delivered').content);
    const canceled = parseInt(ordersData.find(item => item.title === 'Canceled').content);

    // Calculating ratios based on extracted content values
    const first = onDelivery / (onDelivery + delivered + canceled);
    const second = delivered / (onDelivery + delivered + canceled);
    const third = canceled / (onDelivery + delivered + canceled);

    //Providing Data for the Charts
    const data = [
        { id: `On Delivery (${(first * 100).toFixed(2)}%)`, value: onDelivery, number: onDelivery },
        { id: `Delivered (${(second * 100).toFixed(2)}%)`, value: delivered, number: delivered },
        { id: `Canceled (${(third * 100).toFixed(2)}%)`, value: canceled, number: canceled },
    ];


    {/* Pie -------------------------- End of Preparing the Information for Charts -------------------*/ }




    // Preparing Chart Settings
    const chartSetting = {
        width: 400,
        height: 200,
    };
    const valueFormatter = (number) => `${number}`;


    return (

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>

                    {/* Pie -------------------------- Start of Pie Chart -------------------*/}
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
                    {/* Pie -------------------------- End of Pie Chart -------------------*/}
                </Grid>

                <Grid item xs={12} sm={8} md={8}>

                    {/* Pie -------------------------- Start of Bar Chart -------------------*/}
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
                    {/* Pie -------------------------- End of Bar Chart -------------------*/}


                </Grid>
            </Grid>
        </Box>





    );
}

export default DeliveryChart;
