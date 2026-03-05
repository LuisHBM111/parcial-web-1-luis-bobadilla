import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import Link from "next/link";

export default async function Page(params: PageProps<'/[lang]'>) {
    const { lang } = await params.params

    if (!hasLocale(lang)) notFound()

    const dict = await getDictionary(lang)

    return (
        <div className="bg-sky-200 flex items-center justify-start mask-radial-at-left mask-radial-from-50% mask-radial-to-80%">
            <Link href="/profile" className="font-bold text-6xl">{dict.profile}</Link>
        </div>
    );
}