import Labels from '@/components/pagesCom/movies/Labels'
import PopularMovie from '@/components/pagesCom/movies/PopularMovie'
import { useRouter } from 'next/router'
import React from 'react'
import { movieData } from '../../../public/data/movieData'
import Details from '@/components/pagesCom/movieDetails/Details'
import { useQuery } from '@tanstack/react-query'
import { getById } from '../api/api'
import Loading from '@/components/ui/Loading'

const MovieDetails = () => {

  const router = useRouter();
  const id = router?.query?.id as string;

  const { data, isLoading } = useQuery({
    queryKey: ["MovieById", id],
    queryFn: async () => getById(id),
  })

  if (isLoading) {
    return <Loading />
  }

  // console.log(data?.data);


  const SingleMovieData = movieData[0];

  return (
    <section className='container py-5'>
      <div className='flex gap-10 lg:flex-row flex-col'>
        {/* show movie by label  */}
        <div className='lg:w-[70%]'>
          <Details data={data?.data} />
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