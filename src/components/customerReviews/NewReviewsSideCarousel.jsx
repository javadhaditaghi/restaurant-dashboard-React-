// Import Swiper React components
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Typography, Avatar, Chip, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import NewReviewsSideCarouselContent from './NewReviewsSideCarouselContent';



const NewReviewsSideCarousel = () => {
    return (
        <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            className='customSwiper1'
            style={{ overflow: "visible", overflowX: "clip" }}
        >
            <SwiperSlide>
                <NewReviewsSideCarouselContent />
            </SwiperSlide>
            <SwiperSlide>
                <NewReviewsSideCarouselContent />
            </SwiperSlide>
            <SwiperSlide><NewReviewsSideCarouselContent /></SwiperSlide>
            <SwiperSlide><NewReviewsSideCarouselContent /></SwiperSlide>

        </Swiper>
    );
};


export default NewReviewsSideCarousel