import { cn } from "@/lib/utils";
import { CopyButton } from "./copy";
import Typography from "../typography";

export function Pre({ className, ...props }: any) {
    return (
        <div className="overflow-hidden rounded-md border">
            <div className="flex w-full items-center justify-between rounded-md bg-background px-4 py-2">
                <p className="m-0 text-muted-foreground first-letter:uppercase">
                    {props["data-language"]}
                </p>
                <CopyButton text={props.raw} />
            </div>
            <pre
                className={cn(
                    className,
                    "shiki shiki-themes relative m-0 border bg-secondary",
                )}
                {...props}
            >
                {props.children}
            </pre>
        </div>
    );
}
