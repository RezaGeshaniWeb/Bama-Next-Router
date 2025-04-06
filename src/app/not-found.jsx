import Link from "next/link";

export default function notFound() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-5 max-w-[1200px] mx-auto">
            <h1 className="mt-20 text-8xl">404 Error</h1>
            <h2 className="text-4xl my-10">Page Not Found</h2>
            <Link href='/' className="bg-[#befa00] p-4 rounded-md">
                Go to Home Page
            </Link>
        </div>
    )
}