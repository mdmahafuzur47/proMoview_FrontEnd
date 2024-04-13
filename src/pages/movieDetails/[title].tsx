import Labels from '@/components/pagesCom/movies/Labels'
import PopularMovie from '@/components/pagesCom/movies/PopularMovie'
import { useRouter } from 'next/router'
import React from 'react'
import { movieData } from '../../../public/data/movieData'
import Details from '@/components/pagesCom/movieDetails/Details'

const MovieDetails = () => {

  const router = useRouter();
  const title = router?.query?.title;

  const SingleMovieData = movieData[0];

  return (
    <section className='container py-5'>
      <div className='flex gap-10 lg:flex-row flex-col'>
        {/* show movie by label  */}
        <div className='lg:w-[70%]'>
         <Details data={SingleMovieData} />
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

export default MovieDetails