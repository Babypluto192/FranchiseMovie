"use client"


import {ThemeProvider as NextThemesProvider} from "next-themes";
import {createTheme, NextUIProvider} from "@nextui-org/react"

const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {background: 'white', color: 'black'},
    }
})

const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {background: '212121', color: 'white'},
    }
})
const Providers = ({children}) => {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
            {children}
            </NextUIProvider>
        </NextThemesProvider>


    );
};

export default Providers;