"use client";

import * as React from "react";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useViewport from "@/hooks/use-viewport";

const modes = ["light", "dark", "system"] as const;

export function ModeToggle() {
    const { isMobile } = useViewport();
    const { setTheme } = useTheme();
    const t = useTranslations("mode-toggle");
    const tModals = useTranslations("modals");

    if (isMobile)
        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="ghost" size={"icon"}>
                        <SunIcon className="block h-[1.2rem] w-[1.2rem] dark:hidden" />
                        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
                        <span className="sr-only">{t("toggle-theme")}</span>
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{t("toggle-theme")}</DrawerTitle>
                    </DrawerHeader>

                    <div className="space-y-2">
                        {modes.map((mode) => {
                            const ModeIcon =
                                mode === "light"
                                    ? SunIcon
                                    : mode === "dark"
                                      ? MoonIcon
                                      : DesktopIcon;

                            return (
                                <Button
                                    key={mode}
                                    variant="secondary"
                                    className="w-full"
                                    onClick={() => setTheme(mode)}
                                >
                                    <ModeIcon className="h-4 w-4" />

                                    {t(mode)}
                                </Button>
                            );
                        })}
                    </div>

                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="outline" className="w-full">
                                {tModals("cancel")}
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"icon"}>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">{t("toggle-theme")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{t("toggle-theme")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    <SunIcon className="h-4 w-4" />
                    {t("light")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <MoonIcon className="h-4 w-4" />
                    {t("dark")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    <DesktopIcon className="h-4 w-4" />
                    {t("system")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
