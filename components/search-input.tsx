import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex h-10 w-full min-w-16 items-center rounded-md border bg-background px-3 ring-offset-background transition focus-within:bg-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:bg-secondary active:bg-secondary",
                    className,
                )}
            >
                <Search className="me-2 h-4 w-4 shrink-0 opacity-50" />
                <input
                    ref={ref}
                    className="flex w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    {...props}
                />
            </div>
        );
    },
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
