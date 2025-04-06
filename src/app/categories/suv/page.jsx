import CarList from "@/app/components/templates/CarList"
import carsData from "@/app/data/carsData"

export default function Suv() {
    const suvCars = carsData.filter(car => car.category === 'suv')

    return (
        <section>
            <CarList data={suvCars} />
        </section>
    )
}