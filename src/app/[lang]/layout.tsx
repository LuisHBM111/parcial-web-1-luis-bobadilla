import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import {Locale} from "@/app/[lang]/dictionaries";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Parcial web",
    description: "Parcial 1 de web - luis bobadilla",
};

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: LayoutProps<'/[lang]'>) {
    return (
        <html lang={(await params).lang}>
            <body className={`min-h-screen antialiased`}>
                <Header lang={(await params).lang as Locale}/>
                    <main className="bg-[#e0e0e0] w-full h-full">{children}</main>
                <Footer />
            </body>
        </html>
    )
}