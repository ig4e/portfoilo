import { Icons } from "@/components/ui/icons";

export const oldSkills = [
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
                color: "#FFFFFF",
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
                color: "#FFFFFF",
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

export const skills = [
    {
        type: "languages",
        items: [
            {
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
                color: "#1572b7",
                link: "https://www.w3.org/TR/CSS",
            },
            {
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
                icon: Icons.next,
                name: {
                    "ar-EG": "نيكست.جي إس",
                    "en-US": "Next.js",
                },
                description: {
                    "ar-EG":
                        "نيكست.جي إس يوفر تطبيقات الويب القائمة على رياكت مع تقديم الصفحات من الخادم وإنشاء مواقع ويب ثابتة.",
                    "en-US":
                        "Next.js is providing React-based web applications with server-side rendering and static website generation.",
                },
                color: "#FFF",
                link: "https://nextjs.org/",
            },
            {
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
        ],
    },
    {
        type: "databases",
        items: [
            {
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
                icon: Icons.react,
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
                color: "#0ea5e9",
                link: "https://www.adobe.com/products/xd.html",
            },
            {
                icon: Icons.react,
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
                color: "#0ea5e9",
                link: "https://www.figma.com/",
            },
            {
                icon: Icons.react,
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
                icon: Icons.react,
                name: {
                    "ar-EG": "جيت",
                    "en-US": "Git",
                },
                description: {
                    "ar-EG": "جيت هو نظام التحكم في الإصدار الموزع.",
                    "en-US": "Git is a distributed version control system.",
                },
                color: "#0ea5e9",
                link: "https://git-scm.com/",
            },
        ],
    },
] as const;
