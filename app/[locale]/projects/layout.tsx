import { Locale, locales } from "@/config/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

function layout({
    params,
    children,
}: Readonly<{
    params: { locale: Locale };
    children: React.ReactNode;
}>) {
    const { locale } = params;

    console.log("[locale]/projects/layout.tsx", locale);
    unstable_setRequestLocale(locale);
    return <div className="min-h-[calc(100vh-4rem)]">{children}</div>;
}

export default layout;
