"use client";
import React, { useEffect, useState } from "react";

const screens = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1400,
};

export type Screen = keyof typeof screens;

function useViewport() {
    const [width, setWidth] = useState<number>(
        (typeof window !== "undefined" ? window : { innerWidth: 1280 }).innerWidth
    );

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const currentScreen = Object.keys(screens).find(
        (screen) => screens[screen as Screen] <= width
    ) as Screen;

    return {
        screen: currentScreen,
        isMobile: screens["md"] >= width,
        isTablet: screens["md"] <= width && screens["lg"] >= width,
        isDesktop:
            screens["md"] <= width &&
            screens["lg"] <= width &&
            screens["xl"] >= width,
        isLargeDesktop: screens["xl"] <= width,
    };
}

export default useViewport;
