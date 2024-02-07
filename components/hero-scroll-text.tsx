"use client";

import useViewport from "@/hooks/use-viewport";
import { CodeIcon, CropIcon, CursorArrowIcon } from "@radix-ui/react-icons";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

function HeroScrollText() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({});
    const { isMobile } = useViewport();
    const componentWidth = heroRef.current?.clientWidth ?? 200;
    const translate = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile
            ? [-componentWidth / 5.5, componentWidth / 2]
            : [-componentWidth, componentWidth],
    );
    const translateSpring = useSpring(translate);
    const t = useTranslations("index.hero");

    return (
        <motion.div
            ref={heroRef}
            className="relative min-h-max"
            style={{
                x: translateSpring,
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
