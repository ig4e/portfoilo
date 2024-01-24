"use client";
import {
    DirectionProvider as RxDirectionProvider,
    DirectionProviderProps,
} from "@radix-ui/react-direction";

export function DirectionProvider({ children, ...props }: DirectionProviderProps) {
    return <RxDirectionProvider {...props}>{children}</RxDirectionProvider>;
}
