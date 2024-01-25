import { Icons } from "@/components/ui/icons";

export const skills = [
    {
        type: "languages",
        items: [
            {
                id: "html",
                icon: Icons.html,
                name: {
                    "ar-EG": "إتش تي أم أل",
                    "en-US": "HTML",
                },
                description: {
                    "ar-EG": "إتش تي أم أل هو لغة ترميز الصفحات على الويب.",
                    "en-US":
                        "HTML is the standard markup language for Web pages.",
                },
                color: "#e54d26",
                link: "https://www.w3.org/TR/HTML",
            },
            {
                id: "css",
                icon: Icons.css,
                name: {
                    "ar-EG": "سي إس إس",
                    "en-US": "CSS",
                },
                description: {
                    "ar-EG":
                        "سي إس إس هو لغة ورقة الأنماط المستخدمة لتحديد العرض والتنسيق للمستند.",
                    "en-US":
                        "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document.",
                },
                color: "#0284c7",
                link: "https://www.w3.org/TR/CSS",
            },
            {
                id: "js",
                icon: Icons.js,
                name: {
                    "ar-EG": "جافا سكريبت",
                    "en-US": "JavaScript",
                },
                description: {
                    "ar-EG":
                        "جافا سكريبت هي لغة برمجة وتكنولوجيا أساسية على شبكة الإنترنت.",
                    "en-US":
                        "JavaScript is a programming language and core technology of the World Wide Web.",
                },
                color: "#f0db4e",
                link: "https://www.w3.org/TR/JS",
            },
            {
                id: "ts",
                icon: Icons.ts,
                name: {
                    "ar-EG": "تايب سكريبت",
                    "en-US": "TypeScript",
                },
                description: {
                    "ar-EG":
                        "تايب سكريبت هي لغة برمجة عالية المستوى تضيف الكتابة الثابتة مع التعليقات التوضيحية الاختيارية إلى جافا سكريبت",
                    "en-US":
                        "TypeScript is a high-level programming language that adds static typing with optional type annotations to JavaScript.",
                },
                color: "#2563eb",
                link: "https://www.typescriptlang.org/",
            },
            {
                id: "py",
                icon: Icons.py,
                name: {
                    "ar-EG": "بايثون",
                    "en-US": "Python",
                },
                description: {
                    "ar-EG": "بايثون هي لغة برمجة عالية المستوى وغرض عام.",
                    "en-US":
                        "Python is a high-level, general-purpose programming language.",
                },
                color: "#356a96",
                link: "https://www.python.org/",
            },
            {
                id: "graphql",
                icon: Icons.react,
                name: {
                    "ar-EG": "غراف كيو أل",
                    "en-US": "GraphQL",
                },
                description: {
                    "ar-EG":
                        "غراف كيو أل هو لغة استعلام وتلاعب في البيانات مفتوحة المصدر لواجهة برمجة التطبيقات.",
                    "en-US":
                        "GraphQL is an open-source data query and manipulation language for APIs.",
                },
                color: "#f5009b",
                link: "https://graphql.org/",
            },
        ],
    },
    {
        type: "libraries-frameworks",
        items: [
            {
                id: "react",
                icon: Icons.react,
                name: {
                    "ar-EG": "رياكت",
                    "en-US": "React",
                },
                description: {
                    "ar-EG":
                        "رياكت هو مكتبة جافا سكريبت لبناء واجهات المستخدم.",
                    "en-US":
                        "React is a JavaScript library for building user interfaces.",
                },
                color: "#0ea5e9",
                link: "https://react.dev/",
            },
            {
                id: "vue",
                icon: Icons.vue,
                name: {
                    "ar-EG": "فيو",
                    "en-US": "Vue",
                },
                description: {
                    "ar-EG": "فيو هو مكتبة جافا سكريبت لبناء واجهات المستخدم.",
                    "en-US":
                        "Vue is a JavaScript library for building user interfaces.",
                },
                color: "#48b383",
                link: "https://vuejs.org/",
            },
            {
                id: "svelte",
                icon: Icons.svelte,
                name: {
                    "ar-EG": "سفلت",
                    "en-US": "Svelte",
                },
                description: {
                    "ar-EG":
                        "سفلت هو إطار عمل جافا سكريبت لبناء واجهات المستخدم.",
                    "en-US":
                        "Svelte is a JavaScript library for building user interfaces.",
                },
                color: "#FF3E00",
                link: "https://svelte.dev/",
            },
            {
                id: "nextjs",
                icon: Icons.next,
                name: {
                    "ar-EG": "نيكست.جي إس",
                    "en-US": "Next.js",
                },
                description: {
                    "ar-EG":
                        "نيكست.جي إس يوفر تطبيقات الويب القائمة على رياكت مع تقديم الصفحات من الخادم وإنشاء مواقع ويب ثابتة.",
                    "en-US":
                        "Next.js is providing React applications with production features.",
                },
                color: "#FFF",
                link: "https://nextjs.org/",
            },
            {
                id: "nuxt",
                icon: Icons.nuxt,
                name: {
                    "ar-EG": "ناكست.جي إس",
                    "en-US": "Nuxt.js",
                },
                description: {
                    "ar-EG": "ناكست.جي إس هو نيكست.جي إس ولكن لـ فيو.",
                    "en-US": "Nuxt.js is Next.js but for Vue.",
                },
                color: "#00DC82",
                link: "https://nuxtjs.org/",
            },
            {
                id: "nest",
                icon: Icons.nest,
                name: {
                    "ar-EG": "نيست.جي إس (نود جي إس)",
                    "en-US": "Nest.js (Nodejs)",
                },
                description: {
                    "ar-EG":
                        "نيست جي إس هو إطار لبناء تطبيقات ويب فعالة وقابلة للتوسع باستخدام نود جي إس.",
                    "en-US":
                        "NestJS is a framework for building efficient, scalable Node.js web applications.",
                },
                color: "#df234e",
                link: "https://nestjs.com/",
            },
            {
                id: "express",
                icon: Icons.express,
                name: {
                    "ar-EG": "إكسبريس (نود جي إس)",
                    "en-US": "Express (Nodejs)",
                },
                description: {
                    "ar-EG":
                        "إكسبريس هو إطار تطبيق ويب خلفي لبناء واجهات برمجة التطبيقات RESTful.",
                    "en-US":
                        "Express is a back-end web application framework for building RESTful APIs.",
                },
                color: "#FFF",
                link: "https://expressjs.com/",
            },
            {
                id: "prisma",
                icon: Icons.prisma,
                name: {
                    "ar-EG": "بريزما أورم",
                    "en-US": "Prisma ORM",
                },
                description: {
                    "ar-EG": "بريزما هو جيل جديد من نود جي إس وبرمجة النوع.",
                    "en-US":
                        "Prisma is a next-generation Node.js and TypeScript ORM.",
                },
                color: "#5a67d9",
                link: "https://www.prisma.io/",
            },
            {
                id: "tailwind",
                icon: Icons.tailwind,
                name: {
                    "ar-EG": "تيلويند سي إس إس",
                    "en-US": "Tailwind CSS",
                },
                description: {
                    "ar-EG": "تيلويند سي إس إس هو إطار تنسيق CSS مفتوح المصدر.",
                    "en-US": "Tailwind CSS is an open-source CSS framework.",
                },
                color: "#0891b2",
                link: "https://tailwindcss.com/",
            },
            {
                id: "shadcnui",
                icon: Icons.shadcnui,
                name: {
                    "ar-EG": "شاد سي ان يو اي",
                    "en-US": "ShadCN UI",
                },
                description: {
                    "ar-EG": "مكونات واجهة مستخدم مصممة بشكل جميل.",
                    "en-US": "Beautifully designed ui components.",
                },
                color: "#FFFFFF",
                link: "https://ui.shadcn.com/",
            },
        ],
    },
    {
        type: "databases",
        items: [
            {
                id: "mongodb",
                icon: Icons.mongodb,
                name: {
                    "ar-EG": "مونغو دي بي",
                    "en-US": "MongoDB",
                },
                description: {
                    "ar-EG": "قاعدة بيانات NoSQL.",
                    "en-US": "A NoSQL database.",
                },
                color: "#01ed64",
                link: "https://www.mongodb.com/",
            },
        ],
    },
    {
        type: "tools",
        items: [
            {
                id: "adobexd",
                icon: Icons.adobeXd,
                name: {
                    "ar-EG": "أدوبي إكس دي",
                    "en-US": "Adobe XD",
                },
                description: {
                    "ar-EG":
                        "أدوبي إكس دي هو أداة تصميم ناقلة لتطبيقات الويب والهواتف المحمولة.",
                    "en-US":
                        "Adobe XD is a vector design tool for web and mobile applications.",
                },
                color: "#F572F8",
                link: "https://www.adobe.com/products/xd.html",
            },
            {
                id: "figma",
                icon: Icons.figma,
                name: {
                    "ar-EG": "فيغما",
                    "en-US": "Figma",
                },
                description: {
                    "ar-EG":
                        "فيغما هو أداة تصميم ناقلة لتطبيقات الويب والهواتف المحمولة.",
                    "en-US":
                        "Figma is a vector design tool for web and mobile applications.",
                },
                color: "#a259ff",
                link: "https://www.figma.com/",
            },
            {
                id: "vsc",
                icon: Icons.vsc,
                name: {
                    "ar-EG": "في إس كود",
                    "en-US": "VS Code",
                },
                description: {
                    "ar-EG":
                        "في إس كود هو محرر الشيفرة المصدرية الذي طورته مايكروسوفت.",
                    "en-US":
                        "Visual Studio Code is a code editor developed by Microsoft.",
                },
                color: "#0ea5e9",
                link: "https://code.visualstudio.com/",
            },
            {
                id: "git",
                icon: Icons.git,
                name: {
                    "ar-EG": "جيت",
                    "en-US": "Git",
                },
                description: {
                    "ar-EG": "جيت هو نظام التحكم في الإصدار الموزع.",
                    "en-US": "Git is a distributed version control system.",
                },
                color: "#ef5032",
                link: "https://git-scm.com/",
            },
            {
                id: "github",
                icon: Icons.gitHub,
                name: {
                    "ar-EG": "جيت هب",
                    "en-US": "Github",
                },
                description: {
                    "ar-EG":
                        "GitHub عبارة عن نظام أساسي للمطورين يتيح للمطورين إنشاء التعليمات البرمجية الخاصة بهم وتخزينها وإدارتها ومشاركتها.",
                    "en-US":
                        "GitHub is a developer platform that allows developers to create, store, manage and share their code.",
                },
                color: "#FFFFFF",
                link: "https://github.com/",
            },
        ],
    },
] as const;

type MappedCategory<T extends (typeof skills)[number]> = {
    [key in T["items"][number]["id"]]: T["items"][number];
};

export const languages = skills[0].items.reduce(
    (object, item) => {
        object[item.id] = item;
        return object;
    },
    {} as MappedCategory<(typeof skills)[0]>,
);

export const technologies = skills[1].items.reduce(
    (object, item) => {
        object[item.id] = item;
        return object;
    },
    {} as MappedCategory<(typeof skills)[1]>,
);

export const databases = skills[2].items.reduce(
    (object, item) => {
        object[item.id] = item;
        return object;
    },
    {} as MappedCategory<(typeof skills)[2]>,
);

export const tools = skills[3].items.reduce(
    (object, item) => {
        object[item.id] = item;
        return object;
    },
    {} as MappedCategory<(typeof skills)[3]>,
);
