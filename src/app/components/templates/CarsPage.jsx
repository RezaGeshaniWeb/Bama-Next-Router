import Card from "../modules/Card"

export default function CarsPage({ data }) {
    return (
        <div className="w-full flex flex-wrap justify-around max-w-[1200px] mx-auto">
            {
                data.map(car => {
                    return (
                        <Card key={car.id} {...car} />
                    )
                })
            }
        </div>
    )
}