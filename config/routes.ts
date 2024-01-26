import { Icons } from "@/components/ui/icons";

export const routes = [
    {
        icon: Icons.logo,
        title: "about-me",
        url: "/#about",
    },
    {
        icon: Icons.logo,
        title: "experience",
        url: "/#experience",
    },
    {
        icon: Icons.logo,
        title: "skills",
        url: "/#skills",
    },
    {
        icon: Icons.logo,
        title: "my-projects",
        url: "/projects",
    },
] as const;
