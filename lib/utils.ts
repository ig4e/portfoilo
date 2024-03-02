import { clsx, type ClassValue } from "clsx";
import { useLocale } from "next-intl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

// eslint-disable-next-line no-unused-vars
export function hexToRgb(hex: string): { r: number; g: number; b: number };
// eslint-disable-next-line no-redeclare, no-unused-vars
export function hexToRgb(hex: string, toString: true): string;
// eslint-disable-next-line no-redeclare
export function hexToRgb(
    hex: string,
    toString = false,
): string | { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const color = result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : { r: 255, g: 255, b: 255 };

    return toString ? `${color.r}, ${color.g}, ${color.b}` : color;
}

export function calculateRT(string = ""): number {
    const wpm = 225;
    const words = string.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
}

export function toLocaleDateString(date = new Date()): string {
    const locale = useLocale();

    return new Date(date).toLocaleDateString(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
