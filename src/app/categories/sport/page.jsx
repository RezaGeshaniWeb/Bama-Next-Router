import CarList from "@/app/components/templates/CarList"
import carsData from "@/app/data/carsData"

export default function Sport() {
    const sportCars = carsData.filter(car => car.category === 'sport')

    return (
        <section>
            <CarList data={sportCars} />
        </section>
    )
}