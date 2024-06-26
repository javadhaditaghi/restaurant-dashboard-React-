import MyBreadcrumbs from "../components/BreadCrumb/Breadcrumb"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Title from "../components/dashboardHeader/title"
import SelectData from "../components/dashboardHeader/select"
import ReviewsCarousel from "../components/customerReviews/ReviewsCarousel"
import InnerBox2 from "../components/ordersSummary/InnerBox2"
import { Box } from "@mui/material"
import OtherReviews from "../components/customerReviews/otherReviews"
import NewReviewsSideCarousel from "../components/customerReviews/NewReviewsSideCarousel"






const CustomerReviews = () => {
    return (


        <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", py: 3, alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 0 } }}>
                <Box>
                    <Title title="Reviews" />
                    <MyBreadcrumbs />
                </Box>
                <SelectData />
            </Box>
            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
                <ReviewsCarousel />

            </Grid2>
            <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexGrow={2}>
                <Grid2 md={9.5}>
                    <InnerBox2>
                        <Box padding={2}>
                            <Title title="Other Reviews" subtitle="Here is customer review about your restaurant" />
                        </Box>

                        <OtherReviews />


                    </InnerBox2>
                </Grid2>
                <Grid2 md={2.5}>
                    <InnerBox2 backColor="#3E4954" customHeight="auto" customPadding="0px">
                        <Box padding={"30px"}>
                            <Title title="🔥 Newest" customColor={"#ffffff"} />
                        </Box>



                        <NewReviewsSideCarousel />

                    </InnerBox2>
                </Grid2>

            </Grid2>
        </Box>




    )
}


export default CustomerReviews