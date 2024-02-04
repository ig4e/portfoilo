import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function hexToRgb(hex: string): { r: number; g: number; b: number };
export function hexToRgb(hex: string, toString: true): string;
export function hexToRgb(hex: string, toString = false) {
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
