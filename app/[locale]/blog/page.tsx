import { Locale, locales } from "@/config/i18n";

import GenericHero from "@/components/generic-hero";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Posts } from "./posts";

async function Blog({
    params: { locale },
}: Readonly<{
    params: { locale: Locale };
}>) {
    unstable_setRequestLocale(locale);
    const t = await getTranslations("blog");

    return (
        <div className="mb-14 space-y-8">
            <GenericHero title={t("my-blog")} description={t("description")} />
            <Posts></Posts>
        </div>
    );
}

export default Blog;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
