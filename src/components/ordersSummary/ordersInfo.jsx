import InnerBox from "../InfoSummery/InnerBox"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"


const OrdersInfo = () => {
    return (
        <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
            <Grid2 sm={6} md={6}>
                <InnerBox>
                </InnerBox>

            </Grid2>
            <Grid2 sm={6} md={6}>
                <InnerBox>
                </InnerBox>

            </Grid2>

        </Grid2>


    )
}

export default OrdersInfo