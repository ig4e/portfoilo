import React from "react";
import { Icons } from "./ui/icons";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "./mode-toggle";
import Typography from "./typography";
import {
    NextIntlClientProvider,
    useMessages,
    useTranslations,
} from "next-intl";
import { LocaleSelector } from "./locale-selector";
import { Link } from "@/lib/navigation";
import { NavSheet } from "./nav-sheet";
import { routes } from "@/config/routes";

function SiteHeader() {
    const t = useTranslations("site-header");

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="flex items-center gap-4">
                    <Link href={"/"} className="group flex items-center gap-2">
                        <Icons.logo className="h-8 w-8"></Icons.logo>
                        <Typography element="h4" as={"h5"} className="relative">
                            <span className="block whitespace-nowrap group-hover:hidden">
                                セカイ
                            </span>
                            <span className="hidden group-hover:block">
                                {t("name")}
                            </span>
                        </Typography>
                    </Link>

                    <div className="hidden items-center gap-4 md:flex">
                        {routes.map((route) => {
                            return (
                                <Link href={route.url} key={route.title}>
                                    <Typography element="h4" as={"link"}>
                                        {t(`links.${route.title}`)}
                                    </Typography>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav
                        className="flex items-center gap-2"
                        suppressHydrationWarning
                    >
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hidden md:flex"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "aspect-square !h-9 !w-9 px-0",
                                )}
                            >
                                <Icons.gitHub className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>

                        <ModeToggle />
                        <LocaleSelector />

                        <Button size={"sm"} className="hidden md:flex">
                            {t("get-in-touch")}
                        </Button>

                        <div className="block md:hidden">
                            <NavSheet />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
