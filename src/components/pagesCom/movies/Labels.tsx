import React from 'react'
import navLinks from '../../../../public/data/navLinks'
import Link from 'next/link'

const Labels = () => {
    return (
        <div className='w-full p-3 bg-white shadow-sm rounded-md'>
            <h1 className='uppercase font-semibold text-gray-700'>Labels</h1>
            <div className=' mt-3'>
                {
                    navLinks.map((link, index) => {
                        return (
                            <div key={index} className='flex flex-wrap gap-2'>
                                {
                                    link.children && 
                                    link.children.map((link,index) =>  (<Link key={index} href="" className='px-3 py-1 text-sm font-medium border rounded-md'>{link.title}</Link>))
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Labels