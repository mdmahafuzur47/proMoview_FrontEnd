import Labels from '@/components/pagesCom/movies/Labels'
import PopularMovie from '@/components/pagesCom/movies/PopularMovie'
import MovieCard from '@/components/ui/MovieCard'
import { useRouter } from 'next/router'
import React, { SVGProps } from 'react'

const Movies = () => {
    const router = useRouter();
    const category = router?.query?.category;
    return (
        <section className='container py-5'>
            <div className='flex gap-10'>
                {/* show movie by label  */}
                <div className='lg:w-[70%]'>
                    <h1 className='font-medium text-gray-700 text-center'>Showing posts with label <span className='font-semibold'>{category }</span>.</h1>
                    <div className='grid grid-cols-3 gap-3 mt-5'>
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                    </div>


                    <div className='flex justify-end mt-10'>
                        <div className="flex items-center gap-1 w-fit  btnGradient font-semibold px-5 text-white py-2 rounded-md text-sm">
                            <p >Next</p>
                            <MaterialSymbolsKeyboardDoubleArrowRight />
                        </div>
                    </div>

                </div>
                {/* side section  */}
                <div className='lg:w-[30%] flex flex-col gap-4'>
                    <PopularMovie />
                    <Labels />
                </div>
            </div>
        </section>
    )
}

export default Movies


export function MaterialSymbolsKeyboardDoubleArrowRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.575 12L5 7.4L6.4 6l6 6l-6 6L5 16.6zm6.6 0L11.6 7.4L13 6l6 6l-6 6l-1.4-1.4z"></path></svg>
    )
}