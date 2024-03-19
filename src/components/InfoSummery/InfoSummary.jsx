import InnerBox from "./InnerBox"
import { Box, Typography } from "@mui/material"
import infoSummary from "./InfoSummart.json"


const InfoSummary = () => {

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: "20px" }}>

            {


                infoSummary.map((item) => (
                    <InnerBox>
                        <Box>
                            <img src={item.ImgSrc} width={70} />
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight={700}>{item.statistics}</Typography>
                            <Typography variant="body1" color={"#3E4954"}>{item.title}</Typography>
                            <Box variant="span">
                                <img src={parseInt(item.condition) > 0 ? item.growth : item.decline} />

                                <Typography variant="caption" color={"#969BA0"}>{item.condition} (30 days)</Typography>
                            </Box>

                        </Box>
                    </InnerBox>


                ))
            }




        </Box>
    )
}


export default InfoSummary