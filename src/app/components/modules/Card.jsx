import Link from "next/link";
import Location from "../icons/Location";

export default function Card({ id, name, model, year, distance, location, image, price }) {
    return (
        <Link href={`/cars/${id}`}>
            <div className="shadow w-fit rounded-md overflow-hidden p-[10px] m-4">
                <img src={image} alt={name} className="w-[300px] rounded-md" />
                <h4 className="my-2.5">{`${name} ${model}`}</h4>
                <p className="text-sm text-gray-700 my-1.5">{`${year} - ${distance}km`}</p>
                <div className="flex justify-between mt-5 mb-1.5">
                    <p className="bg-[#befa00] py-[3px] px-[5px] rounded-md text-sm font-bold">$ {price}</p>
                    <div className="flex items-center">
                        <p className="mr-1.5">{location}</p>
                        <Location />
                    </div>
                </div>
            </div>
        </Link>
    )
}