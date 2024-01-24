import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Typography from "@/components/typography";
import { ModeToggle } from "./mode-toggle";
import { LocaleSelector } from "./locale-selector";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";
import { Icons } from "./ui/icons";

export function NavSheet() {
    const t = useTranslations("site-header");

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size={"icon"}>
                    <HamburgerMenuIcon className="h-5 w-5"></HamburgerMenuIcon>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
                <div className="mt-4 space-y-2">
                    {routes.map((route) => {
                        return (
                            <Link
                                key={route.title}
                                href={route.url}
                                className={cn(
                                    "flex select-none items-center gap-2 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                )}
                            >
                                {route?.icon && (
                                    <route.icon className="w-5"></route.icon>
                                )}

                                <div>
                                    <div className="text-sm font-medium leading-none">
                                        {t(`links.${route.title}`)}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <Button size={"sm"} className="w-full">
                        {t("get-in-touch")}
                    </Button>
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button variant={"secondary"} size={"icon"}>
                            <Icons.gitHub className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}
