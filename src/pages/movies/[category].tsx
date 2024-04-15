import Labels from '@/components/pagesCom/movies/Labels'
import PopularMovie from '@/components/pagesCom/movies/PopularMovie'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { SVGProps } from 'react'
import { getByCategory } from '../api/api'
import Loading from '@/components/ui/Loading'
import MovieCard from '@/components/ui/MovieCard'

const Movies = () => {
    const router = useRouter();
    const category = router?.query?.category as string;
    // console.log(category);

    let filter: string;

    if (category?.toLowerCase() === "genre-action") {
        filter = "Action"
    } else if (category?.toLowerCase() === "genre-adventure") {
        filter = "Adventure"
    } else if (category?.toLowerCase() === "genre-animation") {
        filter = "Animation"
    }
    else if (category?.toLowerCase() === "genre-cartoon") {
        filter = "Cartoon"
    }
    else if (category?.toLowerCase() === "genre-comedy") {
        filter = "Comedy"
    }
    else if (category?.toLowerCase() === "genre-crime") {
        filter = "Crime"
    }
    else if (category?.toLowerCase() === "genre-romance") {
        filter = "Romance"
    }
    else if (category?.toLowerCase() === "genre-fantasy") {
        filter = "Fantasy"
    }
    else if (category?.toLowerCase() === "genre-horror") {
        filter = "Horror"
    }
    else if (category?.toLowerCase() === "genre-thriller") {
        filter = "Thriller"
    }
    else if (category?.toLowerCase() === "genre-war") {
        filter = "War"
    }
    else if (category?.toLowerCase() === "genre-sports") {
        filter = "Sports"
    }
    else if (category?.toLowerCase() === "genre-family") {
        filter = "Family"
    }
    else if (category?.toLowerCase() === "genre") {
        filter = "HindiDubbed"
    }
    else if (category?.toLowerCase() === "hollywood") {
        filter = "Hollywood"
    }
    else if (category?.toLowerCase() === "bollywood") {
        filter = "Bollywood"
    }
    else{
        filter = "HindiDubbed"
    }

    const { data, isLoading } = useQuery({
        queryKey: ["searchByCategory", filter],
        queryFn: async () => getByCategory(filter)
    })


    if (isLoading) {
        return <Loading />
    }

    // console.log(data,filter);

    return (
        <section className='container py-5'>
            <div className='flex gap-10 lg:flex-row flex-col'>
                {/* show movie by label  */}
                <div className='lg:w-[70%]'>
                    <h1 className='font-medium text-gray-700 text-center'>Showing posts with label <span className='font-semibold'>{category}</span>.</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5'>
                        {
                            data?.data?.map((item: any, index: number) => {
                                return <MovieCard data={item} key={index} />
                            })
                        }
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
                    <Labels />
                    <PopularMovie />
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