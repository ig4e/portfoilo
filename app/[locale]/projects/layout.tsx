import { Locale, locales } from "@/config/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

function layout({
    params: { locale },
    children,
}: Readonly<{
    params: { locale: Locale };
    children: React.ReactNode;
}>) {
    unstable_setRequestLocale(locale);
    return <div className="min-h-[calc(100vh-4rem)]">{children}</div>;
}

export default layout;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
