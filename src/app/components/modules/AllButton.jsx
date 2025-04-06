import Link from "next/link";

export default function AllButton() {
  return (
    <div className="w-[440px] my-[50px] mx-auto *:bg-[#beff00] *:w-full *:block *:text-center *:py-2.5 *:cursor-pointer *:rounded-md">
        <Link href='/cars'>See all cars</Link>
    </div>
  )
}