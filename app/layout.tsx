import './globals.scss'
import {Inter} from 'next/font/google'
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/app/provider";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Fracnhise site',
    description: 'Franchise site',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru"  suppressHydrationWarning>




        <body className={inter.className}   >
        <Providers>
        <Header />
        {children}

        </Providers>
        </body>

        </html>
    )
}