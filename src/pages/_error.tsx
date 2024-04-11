/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const _error = () => {
    return (
        <div className='max-w-3xl mx-auto pt-20 pb-8 flex justify-between gap-20 items-center'>
            <img className='max-w-[250px]' src="/404.png" alt="img" />
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1 text-5xl font-bold text-gray-700'><h1>OOPS! PAGE</h1>
                    <h1>NOT FOUND.</h1></div>
                <p className='font-medium'>You must have picked the wrong door because I haven&apos;t been able to lay my eye on the page you&apos;ve been searching for.</p>
                <Link href={"/"}>
                <button className='btnGradient px-10 py-2 font-semibold w-fit text-white rounded-md'>BACK TO HOME</button></Link>
            </div>
        </div>
    )
}

export default _error