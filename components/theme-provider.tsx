"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            {...props}
            disableTransitionOnChange={false}
            defaultTheme="dark"
        >
            {children}
        </NextThemesProvider>
    );
}
