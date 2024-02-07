"use client";

import { Locale } from "@/config/i18n";
import useViewport from "@/hooks/use-viewport";
import { CodeIcon, CropIcon, CursorArrowIcon } from "@radix-ui/react-icons";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

function HeroScrollText() {
    const [bottom, setBottom] = useState(0);
    const { scrollY } = useScroll();
    const locale = useLocale() as Locale;

    const translate = useTransform(
        scrollY,
        [0, bottom],
        locale === "ar-EG" ? [-18, 18] : [18, -18],
    );
    const translateSpring = useSpring(translate);
    const mapping = useTransform(() => `${translateSpring.get()}%`);

    const t = useTranslations("index.hero");

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (hero) setBottom(hero.getBoundingClientRect().bottom);
    }, []);

    return (
        <motion.div
            className="relative min-h-max"
            style={{
                x: mapping,
            }}
        >
            <p className="overflow-visible whitespace-nowrap text-[12vw] lowercase">
                {t("scroll-text")}
            </p>

            <div>
                <CropIcon className="absolute left-[20vw] top-[3vh] z-10 h-[5vh] w-[5vh] rotate-12 text-primary md:h-[20vh] md:w-[20vh]"></CropIcon>
                <CodeIcon className="absolute -top-[1vh] right-[20vw] z-10 h-[5vh] w-[5vh] -rotate-12 text-primary md:h-[20vh] md:w-[20vh]"></CodeIcon>
                <CursorArrowIcon className="absolute -bottom-[2vh] right-[60vw] z-10 h-[5vh] w-[5vh] -rotate-12 text-primary md:h-[20vh] md:w-[20vh]"></CursorArrowIcon>
            </div>
        </motion.div>
    );
}

export default HeroScrollText;
