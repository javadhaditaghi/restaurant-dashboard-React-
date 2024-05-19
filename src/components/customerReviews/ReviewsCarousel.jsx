
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//other imports
import ReviewsCarouselContent from './ReviewsCarouselContent';

{/* Navigation icons styling is in index.css*/ }

const ReviewsCarousel = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={3.4}
            navigation
            className='customSwiper'

            style={{ height: '100%' }}

            breakpoints={{
                576: {
                    // width: 576,
                    slidesPerView: 1,
                },
                768: {
                    // width: 768,
                    slidesPerView: 2,
                },
                900: {
                    // width: 768,
                    slidesPerView: 2.4,
                },
                1200: {
                    // width: 768,
                    slidesPerView: 3.4,
                },

            }}



        >

            <SwiperSlide>
                <ReviewsCarouselContent />
            </SwiperSlide>
            <SwiperSlide>
                <ReviewsCarouselContent />
            </SwiperSlide>
            <SwiperSlide>
                <ReviewsCarouselContent />
            </SwiperSlide>
            <SwiperSlide>
                <ReviewsCarouselContent />
            </SwiperSlide>
            <SwiperSlide>
                <ReviewsCarouselContent />
            </SwiperSlide>
            <SwiperSlide>
                <ReviewsCarouselContent />
            </SwiperSlide>


            <br></br>
        </Swiper>
    );
};

export default ReviewsCarousel
