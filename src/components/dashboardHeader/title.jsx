import { Box, Typography } from "@mui/material"


const Title = (props) => {
    return (
        <Box>
            <Typography variant="h6" fontWeight={700}>{props.title}</Typography>
            <Typography variant="body1" color={"#969BA0"}>{props.subtitle}</Typography>
        </Box>
    )
}


export default Title