import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";
import Sedan from "../icons/Sedan";
import Link from "next/link";

export default function Categories() {
    return (
        <div className="shadow w-fit my-10 mx-auto flex justify-between flex-wrap items-center rounded-md">
            <Link href='/categories/sedan'>
                <div className="text-center flex flex-col items-center m-1.5 bg-[#befa00] p-1.5 pb-0 rounded-md w-[100px]">
                    <p>Sedan</p>
                    <Sedan />
                </div>
            </Link>
            <Link href='/categories/suv'>
                <div className="text-center flex flex-col items-center m-1.5 bg-[#befa00] p-1.5 pb-0 rounded-md w-[100px]">
                    <p>Suv</p>
                    <Suv />
                </div>
            </Link>
            <Link href='/categories/hatchback'>
                <div className="text-center flex flex-col items-center m-1.5 bg-[#befa00] p-1.5 pb-0 rounded-md w-[100px]">
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>
            <Link href='/categories/sport'>
                <div className="text-center flex flex-col items-center m-1.5 bg-[#befa00] p-1.5 pb-0 rounded-md w-[100px]">
                    <p>Sport</p>
                    <Sport />
                </div>
            </Link>
        </div>
    )
}
