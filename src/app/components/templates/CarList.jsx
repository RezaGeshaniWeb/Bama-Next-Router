"use client"

import { useRouter } from "next/navigation"
import Back from "../icons/Back"
import Card from "../modules/Card"
import { useContext } from "react"
import { CreateContext } from "@/app/context/CreateMin"

export default function CarList({ data }) {
    const router = useRouter()

    const { setMin, setMax } = useContext(CreateContext)

    const backHandler = () => {
        router.back()
        setMin('')
        localStorage.setItem('minStatus', '')
        setMax('')
        localStorage.setItem('maxStatus', '')
    }

    return (
        <>
            <div className="w-full max-w-[1100px] mx-auto pt-10">
                <div onClick={backHandler} className="bg-[#befa00] flex items-center justify-center py-1.5 rounded-md gap-3 w-28 cursor-pointer">
                    <Back />
                    <p>Back</p>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-around max-w-[1200px] mx-auto pt-6">
                {
                    data.map(car => {
                        return (
                            <Card key={car.id} {...car} />
                        )
                    })
                }
            </div>
        </>
    )
}