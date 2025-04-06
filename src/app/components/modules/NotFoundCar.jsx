import Back from "../icons/Back";
import { useRouter } from "next/navigation"

export default function NotFoundCar() {
    const router = useRouter()

    return (
        <div className="w-full max-w-[1100px] mx-auto pt-10">
            <div onClick={() => router.back()} className="bg-[#befa00] flex items-center justify-center py-1.5 rounded-md gap-3 w-28 cursor-pointer">
                <Back />
                <p>Back</p>
            </div>
            <h1 className="text-center mt-28 italic text-5xl">Not Found Any Car</h1>
        </div>
    )
}