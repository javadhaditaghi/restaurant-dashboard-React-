import { Box, Typography } from "@mui/material"


const ChartInfo = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: 3, position: "absolute", right: 40, top: 120 }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: 1 }}>
                <Box>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                        <rect width="3.54545" height="26" rx="1.77273" fill="#2F4CDD" />
                        <rect x="7.09088" y="7.09082" width="3.54545" height="18.9091" rx="1.77273" fill="#2F4CDD" fill-opacity="0.43" />
                        <rect x="14.1819" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#2F4CDD" />
                        <rect x="21.2728" y="3.54541" width="3.54545" height="22.4545" rx="1.77273" fill="#2F4CDD" fill-opacity="0.78" />
                    </svg>
                </Box>
                <Box>
                    <Typography fontSize={"12px"} fontWeight={400} sx={{ color: "#969BA0" }}>Income</Typography>
                    <Typography fontSize={"20   px"} fontWeight={600}>$126,000</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: 1 }}>
                <Box>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                        <rect width="3.54545" height="26" rx="1.77273" fill="#B519EC" />
                        <rect x="7.09088" y="7.09082" width="3.54545" height="18.9091" rx="1.77273" fill="#B519EC" fill-opacity="0.47" />
                        <rect x="14.1819" y="17.7273" width="3.54545" height="8.27273" rx="1.77273" fill="#B519EC" />
                        <rect x="21.2727" y="3.54541" width="3.54545" height="22.4545" rx="1.77273" fill="#B519EC" fill-opacity="0.67" />
                    </svg>
                </Box>
                <Box>
                    <Typography fontSize={"12px"} fontWeight={400} sx={{ color: "#969BA0" }}>Expense</Typography>
                    <Typography fontSize={"20px"} fontWeight={600}>$126,000</Typography>
                </Box>
            </Box>
        </Box>
    )
}


export default ChartInfo