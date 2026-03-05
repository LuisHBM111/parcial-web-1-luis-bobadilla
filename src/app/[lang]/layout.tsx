import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import {Locale} from "@/app/[lang]/dictionaries";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

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
        <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-gray-600`}>
        <Header lang={(await params).lang as Locale}/>
        {children}
        </body>
        </html>
    )
}