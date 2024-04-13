import PopularMovieCard from '@/components/ui/PopularMovieCard'
import React from 'react'

const PopularMovie = () => {
    return (
        <div className='bg-white p-3 rounded-md shadow-sm'>
            <h1 className='uppercase font-semibold text-gray-700'>Popular Movies</h1>
            <div className='mt-3 flex flex-col sm:flex-row lg:flex-col gap-8 lg:gap-3'>
                <PopularMovieCard />
                <PopularMovieCard />
            </div>
        </div>
    )
}

export default PopularMovie