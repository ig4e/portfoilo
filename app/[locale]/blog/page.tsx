import { Locale } from "@/config/i18n";

import React from "react";
import Categories from "./categories";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Posts } from "./posts";
import GenericHero from "@/components/generic-hero";
import { useTranslations } from "next-intl";

async function Blog({
    params: { locale },
}: Readonly<{
    params: { locale: Locale };
}>) {
    unstable_setRequestLocale(locale);
    const t = await getTranslations("blog");

    return (
        <div className="space-y-8 mb-14">
            <GenericHero title={t("my-blog")} description={t("description")} />
            <Posts></Posts>
        </div>
    );
}

export default Blog;
