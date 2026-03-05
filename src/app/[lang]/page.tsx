import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Link from "next/link";

export default async function Page(params: PageProps<'/[lang]'>) {
    const { lang } = await params.params

    if (!hasLocale(lang)) notFound()

    const dict = await getDictionary(lang)

    return (
        <div className="bg-sky-200 flex items-center justify-center">{dict.title}</div>
    );
}