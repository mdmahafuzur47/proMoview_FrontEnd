import axios from "axios";
import React, { SVGProps, useEffect, useState } from "react";
import { toast } from "sonner";
import { GenreData } from "../../../public/data/genre";

interface MovieFormData {
    title: string;
    name: string;
    year: string;
    releaseDate: string;
    IMDBRating: string;
}

const InputForm: React.FC = () => {

    const [genre, setGenre] = useState<string[]>([])

    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState<string | undefined>(undefined)
    const [thumbImg, setThumbImg] = useState<File | null>(null);
    const [languages, setLanguages] = useState("")
    const [quality, setQuality] = useState("")
    const [downloadLinks, setDownloadLinks] = useState("")
    const [formData, setFormData] = useState<MovieFormData>({
        title: "",
        name: "",
        year: "",
        releaseDate: "",
        IMDBRating: "",
    });

    const handleDeleteGenre = (data: string) => {
        console.log(data);
        setGenre(genre.filter(item => item !== data))
    }

    const onChange = async (e: any) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (value !== undefined && !genre.includes(value)) {
            setGenre(prevGenre => [...prevGenre, value])
        }
    }, [value]);

    console.log(genre);


    const handleImgaeUplaod = async (payload: any) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", payload)
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=949d8410e87a2cc60b7ab1c4dc673990`, formData);

            // console.log(res?.data?.data?.url);
            return res?.data?.data?.url;
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let imgUrl;
        if (thumbImg) {
            imgUrl = await handleImgaeUplaod(thumbImg)
        }
        const data = {
            ...formData,
            genre,
            languages: languages.split(","),
            quality: quality.split(","),
            downloadLinks: downloadLinks.split(","),
            thumbImg: imgUrl,
        }

        try {
            const res = await axios.post("http://localhost:5000/api/movies", data);
            console.log("Response", res);
            toast.success("Movie successfully added...");
            setLoading(false);
        } catch (e: any) {
            const errorMessage = e?.response?.data?.message;
            setLoading(false);
            toast.error(errorMessage);
        }

    };

    return (
        <div className="container mx-auto mt-10 px-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Title:</label>
                        <input
                            required
                            type="text"
                            onChange={(e) => setFormData({
                                ...formData, title: e.target.value
                            })}
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Name:</label>
                        <input
                            required
                            type="text"
                            onChange={(e) => setFormData({
                                ...formData, name: e.target.value
                            })}
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Year:</label>
                        <input
                            required
                            type="text"
                            onChange={(e) => setFormData({
                                ...formData, year: e.target.value
                            })}
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Release Date:</label>
                        <input
                            required
                            type="text"
                            onChange={(e) => setFormData({
                                ...formData, releaseDate: e.target.value
                            })}
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-1">Thumbnail Image:(.webp or .png) <a href="https://squoosh.app/" target="_black" className="text-blue-700 font-semibold underline">converter...</a></label>
                        <input
                            required
                            type="file"
                            name="thumbImg"
                            onChange={(e: any) => setThumbImg(e.target.files[0])}
                            className="border border-gray-400 rounded px-4 py-[5.5px] w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">IMDB Rating:</label>
                        <input
                            required
                            type="text"
                            onChange={(e) => setFormData({
                                ...formData, IMDBRating: e.target.value
                            })}
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Genre:</label>
                        <div className="flex border border-gray-400 rounded px-4 py-[6px]">
                            <div className="w-full flex-wrap flex items-center gap-1">
                                {
                                    genre?.length > 0 && genre?.map((item, i) => {
                                        return <div key={i} className="btnGradient w-fit rounded-md shadow-md flex">
                                            <button className="font-medium text-sm px-2 text-white">{item}</button>
                                            <div onClick={() => handleDeleteGenre(item)} className="text-white bg-red-900 w-fit p-1 rounded-md font-semibold">
                                                <SolarShieldCrossBroken />
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="w-[200px]">
                                <select
                                    value={value?.toString()}
                                    onChange={(e) => onChange(e)}
                                    className="block w-full px-4 py-[2px] border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    {
                                        GenreData?.map((genre, index) => {
                                            return (
                                                <option key={index} className='font-medium shadow-sm' value={genre?.value}>{genre.value}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1">Languages (Comma-separated):</label>
                        <input
                            required
                            type="text"
                            name="languages"
                            onChange={(e: any) => setLanguages(e.target.value)}
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Quality (Comma-separated):</label>
                        <input
                            required
                            type="text"
                            name="quality"
                            onChange={(e: any) => setQuality(e.target.value)}
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div>
                    {/* <div>
                        <label className="block mb-1">Screenshots (One URL per line):</label>
                        <textarea
                            name="screenshots"
                            className="border border-gray-400 rounded px-4 py-2 w-full"
                        />
                    </div> */}
                    <div className="sm:col-span-2">
                        <label className="block mb-1 ">Download Links (Comma-separated):</label>
                        <textarea
                            required
                            name="downloadLinks"
                            onChange={(e: any) => setDownloadLinks(e.target.value)}
                            className="border border-gray-400 rounded px-4 py-2 w-full "
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {
                        loading ? "Loading..." : " Add Movie"
                    }
                </button>
            </form>
        </div>
    );
};

export default InputForm;




export function SolarShieldCrossBroken(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 9.5l-5 5m0-5l5 5M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473c.579-.252 1.231-.58 1.899-.994"></path></svg>
    )
}
