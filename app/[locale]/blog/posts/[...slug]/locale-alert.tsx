"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Locale } from "@/config/i18n";
import { Link } from "@/lib/navigation";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

function LocaleAlert({
    localizations,
    post,
}: {
    localizations: {
        id: string;
        locale: string;
        slug: string;
    }[];
    post: {
        id: string;
        slug: string;
        locale: string;
    };
}) {
    const t = useTranslations("blog");
    const locale = useLocale() as Locale;

    const currentLocaleLocalization = useMemo(
        () =>
            localizations.find(
                (localization) => localization.locale === locale,
            ),
        [localizations, locale],
    );

    return (
        <div>
            {post.locale !== locale && (
                <Alert className="flex flex-col gap-2">
                    <Languages className="h-4 w-4" />
                    <AlertTitle>
                        {currentLocaleLocalization
                            ? t("locale-alert.title")
                            : t("locale-not-found-alert.title")}
                    </AlertTitle>
                    <AlertDescription>
                        {currentLocaleLocalization
                            ? t("locale-alert.description")
                            : t("locale-not-found-alert.description")}
                    </AlertDescription>

                    <Link
                        href={`/blog/posts/${currentLocaleLocalization?.id || post.id}/${currentLocaleLocalization?.slug ?? post.slug}`}
                        className="w-full"
                    >
                        <Button
                            variant={"secondary"}
                            disabled={!currentLocaleLocalization}
                            size={"sm"}
                            className="mt-2 w-full"
                        >
                            <Languages className="h-4 w-4" />
                            {currentLocaleLocalization
                                ? t("locale-alert.switch")
                                : t("locale-not-found-alert.switch")}
                        </Button>
                    </Link>
                </Alert>
            )}
        </div>
    );
}

export default LocaleAlert;
