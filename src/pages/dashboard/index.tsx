import InputForm from '@/components/ui/InputFeild';
import ShowTable from '@/components/ui/ShowTable';
import React, { useState } from 'react'

const Dashboard = () => {
    const [tabs, setTabs] = useState("add")
    return (
        <div>
            <div className='flex justify-center mt-5 gap-3 font-medium text-gray-700'>
                <button className={`border px-4 py-[2px] shadow-md ${tabs === "add" ? "text-red-600": ""}`} onClick={() => setTabs("add")}>Add Movie</button>
                <button className={`border px-4 py-[2px] shadow-md ${tabs === "show" ? "text-red-600": ""}`} onClick={() => setTabs("show")}>show Movie</button>
            </div>
            {/* show and add section  */}
            <div>
                {
                    tabs === "add" && <InputForm />
                }
                {
                    tabs === "show" && <ShowTable />
                }
            </div>
        </div>
    )
}

export default Dashboard;