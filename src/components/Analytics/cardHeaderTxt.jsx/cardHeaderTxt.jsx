import { Box, Typography } from "@mui/material"



const CardHeaderTxt = ({ title, subtitle }) => {
    return (
        <Box>
            <Typography variant="h7" fontWeight={700}>{title}</Typography>
            <Typography variant="caption" color={"#969BA0"} sx={{ display: "block" }}>{subtitle}</Typography>
        </Box>

    )

}

export default CardHeaderTxt