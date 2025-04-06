import Link from "next/link";
import Logo from "../icons/Logo";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Email from "../icons/Email";
import Instagram from "../icons/Instagram";

export default function Layout({ children }) {
    return (
        <main className="bg-[#f8f8f7] text-black">
            <header className="flex flex-col gap-3 items-center justify-center h-48 border-b border-b-slate-400 bg-[#befa00]">
                <Link href='/'>
                    <Logo />
                </Link>
                <p className="font-semibold text-xl">Shortcut to the car market</p>
            </header>
            <div className="min-h-screen">
                {children}
            </div>
            <footer className="flex items-center justify-between border-t border-t-slate-400 py-5 px-32 bg-black text-slate-200">
                <a href="https://portfolio-beryl-nu-44.vercel.app/" target="_blank" className="font-bold text-xl">Reza Geshani</a>
                <div className="flex items-center gap-5">
                    <a href="https://www.linkedin.com/in/reza-geshani-web">
                        <Linkedin />
                    </a>
                    <a href="https://github.com/RezaGeshaniWeb/">
                        <Github />
                    </a>
                    <a href="mailto:rezageshaniweb@gmail.com">
                        <Email />
                    </a>
                    <a href="https://www.instagram.com/rezageshani_web">
                        <Instagram />
                    </a>
                </div>
            </footer>
        </main>
    )
}