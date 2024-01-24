import { Icons } from "@/components/ui/icons";

export const skills = [
    {
        type: "languages",
        items: [
            {
                icon: Icons.html,
                name: "HTML",
                description:
                    "HTML is the standard markup language for Web pages.",
                color: "#e54d26",
                link: `https://www.w3.org/TR/HTML`,
            },
            {
                icon: Icons.css,
                name: "CSS",
                description:
                    "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document",
                color: "#1572b7",
                link: `https://www.w3.org/TR/CSS`,
            },
            {
                icon: Icons.js,
                name: "JavaScript",
                description:
                    "JavaScript is a programming language and core technology of the World Wide Web.",
                color: "#f0db4e",
                link: `https://www.w3.org/TR/JS`,
            },
            {
                icon: Icons.py,
                name: "Python",
                description:
                    "Python is a high-level, general-purpose programming language.",
                color: "#356a96",
                link: `https://www.python.org/`,
            },
            {
                icon: Icons.react,
                name: "Graphql",
                description:
                    "GraphQL is an open-source data query and manipulation language for APIs.",
                color: "#f5009b",
                link: `https://graphql.org/`,
            },
        ],
    },

    {
        type: "libraries-frameworks",
        items: [
            {
                icon: Icons.react,
                name: "React",
                description:
                    "React is a JavaScript library for building user interfaces.",
                color: "#0ea5e9",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.vue,
                name: "Vue",
                description:
                    "Vue is a JavaScript library for building user interfaces.",
                color: "#48b383",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.svelte,
                name: "Svelte",
                description:
                    "Vue is a JavaScript library for building user interfaces.",
                color: "#FF3E00",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.next,
                name: "Next.js",
                description:
                    "Next.js is providing React-based web applications with server-side rendering and static website generation.",
                color: "#FFF",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.nuxt,
                name: "Nuxt.js",
                description: "Next.js but for Vue.",
                color: "#00DC82",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.nest,
                name: "Nest.js (Nodejs)",
                description:
                    "NestJS is a framework for building efficient, scalable Node.js web applications.",
                color: "#df234e",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.express,
                name: "Express (Nodejs)",
                description:
                    "Express is a back end web application framework for building RESTful APIs.",
                color: "#FFF",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.prisma,
                name: "Prisma ORM",
                description:
                    "Prisma is a next-generation Node.js and TypeScript ORM.",
                color: "#5a67d9",
                link: `https://www.prisma.io/`,
            },
            {
                icon: Icons.tailwind,
                name: "Tailwindcss",
                description: "Tailwind CSS is an open source CSS framework.",
                color: "#0891b2",
                link: `https://tailwindcss.com/`,
            },
        ],
    },
    {
        type: "databases",
        items: [
            {
                icon: Icons.mongodb,
                name: "MongoDB",
                description: "A NoSQL database",
                color: "#01ed64",
                link: `https://www.mongodb.com/`,
            },
        ],
    },

    {
        type: "tools",
        items: [
            {
                icon: Icons.react,
                name: "Adoboe XD",
                description:
                    "Adobe XD is a vector design tool for web and mobile applications.",
                color: "#0ea5e9",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.react,
                name: "Figma",
                description:
                    "Figma is a vector design tool for web and mobile applications.",
                color: "#0ea5e9",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.react,
                name: "VS Code",
                description:
                    "Visual Studio Code is a code editor developed by Microsoft.",
                color: "#0ea5e9",
                link: `https://react.dev/`,
            },
            {
                icon: Icons.react,
                name: "Git",
                description: "Git is a distributed version control system.",
                color: "#0ea5e9",
                link: `https://react.dev/`,
            },
        ],
    },
] as const;
