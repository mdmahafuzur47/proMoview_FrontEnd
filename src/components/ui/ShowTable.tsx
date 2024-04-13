/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { SVGProps, useEffect, useState } from 'react'

const ShowTable = () => {

    const [data, setData] = useState([]);
    // const [value, setValue] = useState("false");
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("")

    useEffect(() => {
        const fetchData = async (name: string) => {
            try {
                setLoading(true)
                const res = await axios.get(`http://localhost:5000/api/movies?name=${name}`)
                setData(res.data.data);
                setLoading(false)
            } catch (err) {
                console.log(err);
                setLoading(true);
            }
        }
        fetchData(name);
    }, [name])

    console.log(data);

    const onChange = (name: string) => {
        // setValue(value === "false" ? "true" : "false");
        setName(name)
    }

    if (loading) {
        return <div className='container flex justify-center items-center h-[300px]'>
            <div className={`w-10 h-10 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin`} />
        </div>
    }

    return (
        <div className='container mt-10 min-h-screen '>
            <table className="table-auto text-gray-600 w-full">
                <thead>
                    <tr className=''>
                        <th className="px-4 py-2 border">#ID</th>
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? data?.map((item: any, i) => {
                            return (
                                <tr key={i}>
                                    <td className="border text-center px-2 py-1 font-bold">{i + 1}.</td>
                                    <td className="border text-center flex justify-center px-2 py-1"><img src={item?.thumbImg} alt="Item Image" className="w-10 md:h-8 shadow-md rounded-md" /></td>
                                    <td className="border text-center text-sm md:text-md md:font-medium  px-2 py-1">{item?.name}</td>
                                    <td className="border px-2 py-1 text-center">
                                        <div className='flex justify-center'>
                                            <select
                                                value={item?.isView?.toString()}
                                                onChange={() => onChange(item?.name)}
                                                className={`block w-[100px] px-2 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${item?.isView ? "bg-blue-100" : "bg-red-100"}`}
                                            >
                                                <option className="font-medium" value={"true"}>Show</option>
                                                <option className='font-medium' value={"false"}>Hidden</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="border text-center px-2 py-1">
                                        <button className='px-2 text-white py-1 bg-red-600 shadow-md rounded-md'><MaterialSymbolsDeleteForever /></button>
                                    </td>
                                </tr>
                            )
                        }) : <div>No Movie Now...</div>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowTable



export function MaterialSymbolsDeleteForever(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"></path></svg>
    )
}