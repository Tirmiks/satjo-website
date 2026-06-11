import Image from "next/image"

export default function Header() {
    const buttonAnimation = "inline-block relative pb-1 text-white text-lg after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#f7f7f7] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
    return (
        <header className="flex fixed top-0 left-0 z-50 align-center gap-20 p-5 w-full bg-[#1a1a1a]/70 backdrop-blur-md h-auto">
            <Image src="/logo.png" alt="Logo" width={188} height={87} />

            <nav className="flex items-center align-center gap-20">
                <a href="/about" className={buttonAnimation}>О нас</a>
                <a href="/vacancies" className={buttonAnimation}>Вакансии</a>
                <a href="/projects" className={buttonAnimation}>Проекты</a>
            </nav>

        </header>
    )
}