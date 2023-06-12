import './globals.scss'
import {Inter} from 'next/font/google'
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Damirsinba site',
    description: 'Damirsinba site',
    httpEquiv: "Content-Security-Policy",
    content: "upgrade-insecure-requests",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">


        <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}