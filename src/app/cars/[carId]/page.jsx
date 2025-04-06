"use client"

import CarDetails from "@/app/components/templates/CarDetails"
import carsData from "@/app/data/carsData"
import { usePathname } from "next/navigation"

export default function CarDetail() {
    const carIndex = usePathname().slice(-1)
    const car = carsData[carIndex - 1]

    return <CarDetails {...car} />
}