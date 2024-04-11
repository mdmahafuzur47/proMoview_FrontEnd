import React, { SVGProps } from 'react'
import MovieCard from './MovieCard'
import Slider from './Slider'

const HomeCategory = ({ title }: {
    title: string
}) => {

    return (
        <section className='container pt-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold text-gray-700'>{title}</h1>
                <div className='flex items-center gap-[2.5px] text-white btnGradient px-3 rounded-sm py-1'>
                    <MaterialSymbolsListsRounded />
                    <p className='font-semibold'>View All</p>
                </div>
            </div>
            <div className='mt-5'>
            <Slider />
          </div>
        </section>
    )
}

export default HomeCategory



export function MaterialSymbolsListsRounded(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 20q-.825 0-1.412-.587T8 18t.588-1.412T10 16h10q.825 0 1.413.588T22 18t-.587 1.413T20 20zm0-6q-.825 0-1.412-.587T8 12t.588-1.412T10 10h10q.825 0 1.413.588T22 12t-.587 1.413T20 14zm0-6q-.825 0-1.412-.587T8 6t.588-1.412T10 4h10q.825 0 1.413.588T22 6t-.587 1.413T20 8zM4 8q-.825 0-1.412-.587T2 6t.588-1.412T4 4t1.413.588T6 6t-.587 1.413T4 8m0 6q-.825 0-1.412-.587T2 12t.588-1.412T4 10t1.413.588T6 12t-.587 1.413T4 14m0 6q-.825 0-1.412-.587T2 18t.588-1.412T4 16t1.413.588T6 18t-.587 1.413T4 20"></path></svg>
    )
}