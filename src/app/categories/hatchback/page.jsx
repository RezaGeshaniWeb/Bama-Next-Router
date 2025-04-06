import CarList from "@/app/components/templates/CarList"
import carsData from "@/app/data/carsData"

export default function Hatchback() {
    const hatchBackCars = carsData.filter(car => car.category === 'hatchback')

    return (
        <section>
            <CarList data={hatchBackCars} />
        </section>
    )
}