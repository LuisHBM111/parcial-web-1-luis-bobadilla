import ButtonLanguageSwitch from "@/components/ButtonLanguageSwitch";
import Link from "next/link";
import {getDictionary, hasLocale} from "@/app/[lang]/dictionaries";
import {Locale} from "@/app/[lang]/dictionaries";

const Header = async ({lang}:{lang:Locale}) => {

    const dict = await getDictionary(lang)

    return (
        <header className="sticky top-0 z-50">
            <div className="px-2 py-2">
                <div className="flex items-center w-full">

                    <div className="flex pr-2 justify-start">
                        <Link href="/" className="h-10 w-20 rounded-full shadow-2xl bg-linear-to-br from-cyan-400 to-purple-800 hover:scale-105 border border-default transition-transform cursor-pointer font-semibold flex items-center justify-center">Home</Link>
                    </div>

                    <div className="flex h-10 flex-1 justify-center">
                        <span className="w-full rounded-full bg-surface border border-be-border px-11 text-sm outline-none focus:ring-2 focus:ring-ring/10 items-center justify-center flex font-semibold bg-linear-to-br from-cyan-400 to-purple-800">{dict.welcome}</span>
                    </div>

                    <ButtonLanguageSwitch lang="es"/>

                </div>
            </div>
        </header>
    )
}
export default Header
