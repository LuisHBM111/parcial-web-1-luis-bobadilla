import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Link from "next/link";
import UsersMap from "@/components/UsersMap";



export default async function Page(params: PageProps<'/[lang]'>) {
    const { lang } = await params.params

    if (!hasLocale(lang)) notFound()

    const dict = await getDictionary(lang)

    return (
        <div className="flex flex-col items-center h-full relative justify-center w-full gap-2 py-5">

            <div>
                <span className="text-3xl font-bold text-[#FDB608]">Personajes de Harry Potter</span>
            </div>

            <div>
                <a>Explora</a>
            </div>

            <UsersMap />



        </div>
    );
}