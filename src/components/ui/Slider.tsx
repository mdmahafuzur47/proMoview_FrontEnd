import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import MovieCard from './MovieCard';
import { getAllMovie, getByCategory } from '@/pages/api/api';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const Slider = ({ filter }: {
    filter: string | undefined
}) => {

    // console.log(filter);
    const { data, isLoading } = useQuery({
        queryKey: ["searchByCategory", filter],
        queryFn: async () => getByCategory(filter)
    })

    if (isLoading) {
        return <Loading />
    }

    // console.log(data.data);

    return (
        <Swiper
            // slidesPerView={4}
            breakpoints={
                {
                    480: {
                        slidesPerView: 1,
                    },
                    588: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3
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
            {/* <SwiperSlide><MovieCard /></SwiperSlide>
            <SwiperSlide><MovieCard /></SwiperSlide>
            <SwiperSlide><MovieCard /></SwiperSlide>
            <SwiperSlide><MovieCard /></SwiperSlide> */}
            {
                data?.data?.map((item: any, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <MovieCard data={item} />
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default Slider