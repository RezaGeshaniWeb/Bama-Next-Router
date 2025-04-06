import CarList from "@/app/components/templates/CarList"
import carsData from "@/app/data/carsData"

export default function Sedan() {
    const sedanCars = carsData.filter(car => car.category === 'sedan')

    return (
        <section>
            <CarList data={sedanCars} />
        </section>
    )
}