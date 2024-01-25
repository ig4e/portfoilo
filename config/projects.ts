import ShareMe from "@/public/assets/projects/shareme.png";
import Kaboot from "@/public/assets/projects/kaboot.png";
import Emanga from "@/public/assets/projects/emanga.png";
import PhiBoutique from "@/public/assets/projects/phiboutique.png";
import WolfLand from "@/public/assets/projects/wolfland.png";
import WadinaFoods from "@/public/assets/projects/wadinafoods.png";
import MHTCE from "@/public/assets/projects/mhtce.png";

import { languages, skills, technologies, tools, databases } from "./skills";

export const projects = [
    {
        id: "shareme",
        image: ShareMe,
        name: {
            "ar-EG": "شيرمي",
            "en-US": "ShareMe",
        },
        shortDescription: {
            "ar-EG": "شيرمي هو بوت نشر المجتمعات الخاصة بديسكورد",
            "en-US": "ShareMe is a community sharing discord bot.",
        },
        description: {
            "ar-EG": "شيرمي هو بوت نشر المجتمعات الخاصة بديسكورد",
            "en-US": "ShareMe is a community sharing discord bot.",
        },
        workArea: {
            "ar-EG":
                "فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم",
            "en-US": "Front-end | Back-end | UI/UX Design",
        },
        color: "#4F46E5",
        links: {},
        stack: [
            languages.html,
            languages.css,
            languages.ts,
            technologies.nextjs,
            technologies.react,
            technologies.tailwind,
            technologies.nest,
            technologies.prisma,
            databases.mongodb,
            tools.vsc,
            tools.adobexd,
            tools.git,
            tools.github,
        ],
        createdAt: "2022/9/20",
    },
    {
        id: "kaboot",
        image: Kaboot,
        name: {
            "ar-EG": "كابووت",
            "en-US": "Kaboot",
        },
        shortDescription: {
            "ar-EG": ".تصميم موقع للتعلم التفاعلى مثل كاهووت",
            "en-US": "A kahoot redesign.",
        },
        description: {
            "ar-EG": "تصميم واعادة تصمميم موقع للتعلم التفاعلي زي كاهووت",
            "en-US": "A kahoot redesign.",
        },
        workArea: {
            "ar-EG": "تصميم واجهة المستخدم وتجربة المستخدم",
            "en-US": "UI/UX Design",
        },
        color: "#4453F9",
        links: {},
        stack: [tools.adobexd],
        createdAt: "2022/3/2",
    },
    {
        id: "phiboutique",
        image: PhiBoutique,
        name: {
            "ar-EG": "فاي بوتيك",
            "en-US": "Phi Boutique",
        },
        shortDescription: {
            "ar-EG": "مطعم فاى بوتيك بالرياض.",
            "en-US": "Phi Boutique is a resturant in riyad.",
        },
        description: {
            "ar-EG": "تصميم وصنع مينيو للمطعم من الصفر",
            "en-US": "Designing and building the resturant menu.",
        },
        workArea: {
            "ar-EG":
                "فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم",
            "en-US": "Front-end | Back-end | UI/UX Design",
        },
        color: "#F2E0D8",
        links: {},
        stack: [
            languages.html,
            languages.css,
            languages.ts,
            technologies.nextjs,
            technologies.react,
            technologies.tailwind,
            tools.vsc,
            tools.adobexd,
            tools.git,
            tools.github,
        ],
        createdAt: "2021/12/20",
    },
    {
        id: "mhtce",
        image: MHTCE,
        name: {
            "ar-EG": "ام اتش للتجارة والمقاولات",
            "en-US": "MH for Trading and Contracting",
        },
        shortDescription: {
            "ar-EG":
                "شركة إم إتش للتجارة والمقاولات (MHTC) هي شركة ذات خبرة عالية متخصصة في خدمات المقاولات وإعادة التأهيل والتجديد.",
            "en-US":
                "MH for Trading and Contracting (MHTC) is a highly experienced company specializing in contracting, rehabilitation, and renovation services.",
        },
        description: {
            "ar-EG": "تصميم الموقع",
            "en-US": "Designing the website.",
        },
        workArea: {
            "ar-EG": "تصميم واجهة المستخدم وتجربة المستخدم",
            "en-US": "UI/UX Design",
        },
        color: "#F8C32A",
        links: {},
        stack: [tools.adobexd],
        createdAt: "2022/4/0",
    },
];
