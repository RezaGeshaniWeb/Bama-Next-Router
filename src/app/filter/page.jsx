"use client"

import NotFoundCar from "@/app/components/modules/NotFoundCar"
import CarList from "@/app/components/templates/CarList"
import carsData from "@/app/data/carsData"
import { useContext } from "react"
import { CreateContext } from "../context/CreateMin"

export default function FilteredCard() {
    const { min, max } = useContext(CreateContext)
    const filteredData = carsData.filter(car => car.price > min && car.price < max)
    if (!filteredData.length) return <NotFoundCar />
    return <CarList data={filteredData} />
}