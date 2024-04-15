import React from 'react'

const Loading = () => {
    return (
        <div className='container flex justify-center items-center h-[300px]'>
            <div className={`w-10 h-10 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin`} />
        </div>
    )
}

export default Loading