import ButtonLanguageSwitch from "@/components/ButtonLanguageSwitch";
import Link from "next/link";
import {getDictionary, hasLocale} from "@/app/[lang]/dictionaries";
import {Locale} from "@/app/[lang]/dictionaries";
import Image from "next/image";

const Header = async ({lang}:{lang:Locale}) => {

    const dict = await getDictionary(lang)

    return (
        <header className="sticky top-0 z-50 bg-[#FDB608]">
            <div className="px-2 py-2">
                <div className="flex flex-col items-center w-full">

                    <div className="flex h-50 flex-1 justify-center">
                        <Link href="/" className="flex items-center justify-center">
                            <Image src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png" alt="Home" width={400} height={400} />
                        </Link>
                    </div>

                    <ButtonLanguageSwitch />

                </div>
            </div>
        </header>
    )
}
export default Header
