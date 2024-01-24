"use client";

import useViewport from "@/hooks/use-viewport";
import { CodeIcon, CropIcon, CursorArrowIcon } from "@radix-ui/react-icons";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import { useRef } from "react";

function HeroScrollText() {
    const [{ y }] = useWindowScroll();
    const compref = useRef<HTMLElement>(null);
    const windowSize = typeof window !== "undefined" ? window.innerWidth : 1;
    const componentWidth = compref.current?.clientWidth ?? 200;
    const { isDesktop } = useViewport()
    const multiplier = (windowSize / (componentWidth - windowSize)) * (isDesktop ? 20 : 10);
    const final = (windowSize / ((y || 1) < 180 ? 180 : y || 1)) * multiplier;
    const t = useTranslations("index.hero");

    return (
        <section
            ref={compref}
            className="relative min-h-max"
            style={{
                transform: `translate(${final}px)`,
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
        </section>
    );
}

export default HeroScrollText;
