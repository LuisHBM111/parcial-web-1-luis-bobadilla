'use client'

import { usePathname, useRouter } from "next/navigation";
import {Locale} from "@/app/[lang]/dictionaries";


function setCookie(name: string, value: string) {
    document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

const ButtonLanguageSwitch = ({lang}:{lang:Locale}) => {

    const router = useRouter()
    const pathname = usePathname()

    function changeLanguage(nextLang:Locale) {

        setCookie("NEXT_LOCALE", nextLang);

        const newPath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${nextLang}`)

        router.push(newPath)

        router.refresh()

    }

    return (
        <div className="flex gap-2 pl-2">
            <button className="ml-auto h-10 w-20 rounded-full shadow-2xl bg-linear-to-br from-cyan-400 to-purple-800 hover:scale-105 border border-default transition-transform cursor-pointer font-semibold" onClick={ () => changeLanguage("en") }>EN</button>
            <button className="ml-auto h-10 w-20 rounded-full shadow-2xl bg-linear-to-br from-cyan-400 to-purple-800 hover:scale-105 border border-default transition-transform cursor-pointer font-semibold" onClick={ () => changeLanguage("es") }>ES</button>
        </div>
    )
}
export default ButtonLanguageSwitch
