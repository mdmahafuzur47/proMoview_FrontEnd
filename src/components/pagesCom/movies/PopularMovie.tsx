import Loading from '@/components/ui/Loading'
import PopularMovieCard from '@/components/ui/PopularMovieCard'
import { getAllMovie } from '@/pages/api/api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const PopularMovie = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["movies"],
        queryFn: getAllMovie
    })

    if (isLoading) {
        return <Loading />
    }

    console.log(data.data);
    return (
        <div className='bg-white p-3 rounded-md shadow-sm'>
            <h1 className='uppercase font-semibold text-gray-700'>Popular Movies</h1>
            <div className='mt-3 flex flex-col sm:flex-row lg:flex-col gap-8 lg:gap-3'>
               {
                data.data?.slice(0,3).map((movie:any,index:number) => (
                    <PopularMovieCard key={index} movie={movie} />
                ))
               }
            </div>
        </div>
    )
}

export default PopularMovie