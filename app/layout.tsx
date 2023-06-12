"use client"; // This is a client component
import './globals.scss'
import {Inter} from 'next/font/google'
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {createTheme, NextUIProvider} from "@nextui-org/react"
import {ThemeProvider as NextThemesProvider} from 'next-themes';


const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {background: "white",}, // optional
    }
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {background: "#212121", text: "white"}, // optional
    }
})


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Damirsinba site',
  description: 'Damirsinba site',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">

        <head>
            <link href="//unpkg.com/@ividjs/ivid@latest/dist/ivid.min.css" rel="stylesheet"></link>
            <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

        </head>
      <body className={inter.className}>
      <script src="//unpkg.com/@ividjs/ivid@latest" type="module" async></script>
      <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
              light: lightTheme.className,
              dark: darkTheme.className
          }}
      >
          <NextUIProvider>
      <Header/>


          </NextUIProvider>
      </NextThemesProvider>
      {children}
      <Footer/>
      </body>
      </html>
  )
}
