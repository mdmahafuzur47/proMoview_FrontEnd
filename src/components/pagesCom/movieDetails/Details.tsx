/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { SVGProps } from 'react'

const Details = ({ data }: any) => {
    const { title, releaseDate, thumbImg, name, IMDBRating, genre, languages, downloadLinks } = data;
    return (
        <div className='bg-white shadow rounded-md text-gray-700'>
            <div className='px-5 pt-5 pb-3'>
                <h1 className='text-[18px] font-semibold text '>{title}</h1>
                <div className='mt-2 flex items-center gap-1'>
                    <IcBaselineAccessTime />
                    <p className='text-sm'>Published on: <span className='font-semibold'>{releaseDate}</span></p>
                </div>
            </div>
            <hr />

            <div className='p-5 flex flex-col items-center gap-3'>
                <p className='text-sm'>{title}</p>
                <div className=''>
                    <img className='w-[350px] rounded-md h-[500px]' src={thumbImg} alt="img" />
                </div>
                {/* movie details  */}
                <div className='mt-8 text-sm flex flex-col items-center'>
                    <p className='font-medium'>Title : <span className='font-[400]'>{name}</span></p>
                    <p className='font-medium'>IMDB Ratings: <span className='font-[400]'>{IMDBRating}/10</span></p>
                    <p className='font-medium'>Release date : <span className='font-[400]'>{releaseDate}</span></p>
                    <p className='font-medium'>Genres : {
                        genre?.map((item: string, index: number) => {
                            return <span className='font-[400]' key={index}>{item} , </span>
                        })
                    }</p>
                    <p className='font-medium'>Language : {
                        languages?.map((item: string, index: number) => {
                            return <span className='font-[400]' key={index}>{item} , </span>
                        })
                    }</p>
                    <p className='font-medium'>Quality :{
                        downloadLinks?.map((item: any, index: number) => {
                            return <span className='font-[400]' key={index}>{item.quality} , </span>
                        })
                    }</p>
                </div>
                {/* screenShot  */}
                {/* <div>
                    <h1 className='text-[18px] font-semibold text-center mb-5'>Screenshots</h1>
                    <div className='flex flex-col'>
                        {
                            screenshots?.map((link: string, index: number) => {
                                return (
                                    <div key={index}>
                                        <img className='w-[550px] h-[250px]' src={link} alt="img" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}

                <div className='mt-5'>
                    <h1 className='text-[18px] font-semibold text-center mb-5'>Download Links</h1>
                    <div className='flex flex-col gap-2'>
                    {
                        downloadLinks?.map((link: any, index: number) => {
                            return (
                                <div key={index} className='flex font-medium gap-2 items-center'>
                                    <h1 className='w-[130px]'>{link.quality}[{link.size}]</h1>
                                    <Link href={link.link}>
                                        <button className="btnGradient font-semibold px-3 text-white py-1 rounded-md text-sm">
                                            Download
                                        </button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details


export function IcBaselineAccessTime(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"></path><path fill="currentColor" d="M12.5 7H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"></path></svg>
    )
}