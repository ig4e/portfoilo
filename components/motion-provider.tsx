"use client";
import type { MotionConfigProps } from "framer-motion";
import { MotionConfig } from "framer-motion";

export function MotionProvider({ children, ...props }: MotionConfigProps) {
    return <MotionConfig {...props}>{children}</MotionConfig>;
}
