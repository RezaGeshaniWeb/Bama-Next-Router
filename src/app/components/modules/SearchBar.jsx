"use client"

import { CreateContext } from "@/app/context/CreateMin"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function SearchBar() {
    const router = useRouter()

    const { min, max, setMin, setMax } = useContext(CreateContext)

    const searchHandler = () => {
        if (min && max) {
            router.push(`/filter`)
        } else {
            toast.error('Please Enter minimum and maximum price!')
        }
    }

    const setMinHandler = (e) => {
        setMin(e.target.value)
        localStorage.setItem('minStatus', e.target.value)
    } 

    const setMaxHandler = (e) => {
        setMax(e.target.value)
        localStorage.setItem('maxStatus', e.target.value)
    } 

    return (
        <>
            <Toaster />
            <div className="w-[440px] my-10 mx-auto p-1 flex justify-between">
                <div className="flex flex-col gap-3 w-full *:border *:border-[#befa00] *:rounded-md *:outline-none *:p-2">
                    <input value={min} onChange={setMinHandler} type="text" placeholder="Enter min price" />
                    <input value={max} onChange={setMaxHandler} type="text" placeholder="Enter max price" />
                </div>
                <button onClick={searchHandler} className="my-1 bg-[#befa00] p-[10px] rounded-md cursor-pointer ml-[10px]">Search</button>
            </div>
        </>
    )
}