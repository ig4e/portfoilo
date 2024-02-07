import Typography from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Noise } from "@/components/ui/images";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

function NotFoundPage() {
    const t = useTranslations("404");
    const locale = useLocale();

    return (
        <div className="min-h-[calc(100vh-9.5rem)]">
            <section className="flex min-h-[50vh] flex-col items-center justify-center gap-12 overflow-hidden text-center">
                <div className="overflow-hidden">
                    <div className="absolute inset-x-0 top-0 -z-[10] min-h-[40vh] animate-cardlight rounded-b-full bg-gradient-to-b from-rose-500 to-red-100 opacity-80 blur-3xl dark:from-rose-900 md:min-h-[60vh]" />
                    <div
                        className="top-18 absolute inset-0 -z-[5] mix-blend-overlay"
                        style={{
                            backgroundRepeat: "repeat",
                            backgroundImage: `url('${Noise.src}')`,
                            opacity: 0.1,
                        }}
                    />
                </div>

                <div className="container flex flex-col items-center gap-12">
                    <div className="mt-12 space-y-8">
                        <Typography
                            element="h1"
                            className={cn(
                                "container text-balance text-center text-[3rem] font-semibold leading-tight sm:text-6xl  md:leading-normal lg:text-7xl xl:text-8xl",
                                {
                                    "text-5xl leading-relaxed sm:text-7xl lg:text-8xl xl:text-9xl":
                                        locale === "ar-EG",
                                },
                            )}
                        >
                            {t("title")}
                        </Typography>

                        <Typography
                            element="p"
                            as="h3"
                            className="font-normal text-muted-foreground"
                        >
                            {t("description")}
                        </Typography>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <Link href={"/"}>
                            <Button size={"xl"}>{t("go-back")}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFoundPage;
