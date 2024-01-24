import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import { locales } from "@/config/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import { DirectionProvider } from "@/components/direction-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});
const cairo = Cairo({
    subsets: ["arabic"],
    variable: "--font-ar",
});

export const metadata: Metadata = {
    title: "Home - Ahmed Mohamed",
    description: "I'm Ahmed Mohamed A Fullstack web engineer | UI/UX Designer",
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: (typeof locales)[number] };
}>) {
    unstable_setRequestLocale(locale);
    const messages = useMessages();
    const dir = locale === "ar-EG" ? "rtl" : "ltr";

    return (
        <html lang={locale} dir={dir}>
            <DirectionProvider dir={dir}>
                <body
                    className={cn(
                        "min-h-screen bg-background antialiased",
                        inter.className,
                        cairo.className,
                    )}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <NextIntlClientProvider messages={messages}>
                            <SiteHeader></SiteHeader>
                            <div className="">{children}</div>
                        </NextIntlClientProvider>
                    </ThemeProvider>
                </body>
            </DirectionProvider>
        </html>
    );
}
