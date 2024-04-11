import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import MovieCard from './MovieCard';

const Slider = () => {
    return (
        <Swiper
            // slidesPerView={4}
            breakpoints={
                {
                    480: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1080: {
                        slidesPerView: 4
                    }
                }
            }
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><MovieCard /></SwiperSlide>
            <SwiperSlide><MovieCard /></SwiperSlide>
            <SwiperSlide><MovieCard /></SwiperSlide>
            <SwiperSlide><MovieCard /></SwiperSlide>

        </Swiper>
    )
}

export default Slider