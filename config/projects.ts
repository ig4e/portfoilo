import Emanga from '@/public/assets/projects/emanga.png';
import Kaboot from '@/public/assets/projects/kaboot.png';
import MHTCE from '@/public/assets/projects/mhtce.png';
import PhiBoutique from '@/public/assets/projects/phiboutique.png';
import ShareMe from '@/public/assets/projects/shareme.png';
import WolfLand from '@/public/assets/projects/wolfland.png';
import HnzakrOnline from '@/public/assets/projects/hnzakronline.png';
import Ugurly from '@/public/assets/projects/ugurly.png';
import Blitzmarks from '@/public/assets/projects/blitzmarks.png';
import Taiba from '@/public/assets/projects/taiba.png';
import {
  databases,
  languages,
  runtimes,
  searchEngines,
  technologies,
  tools,
} from './skills';

export const categories = {
  'ux-ui': {
    id: 'ux-ui',
    'ar-EG': 'تصميم UX/UI',
    'en-US': 'UX/UX Design',
  },
  'front-end': {
    id: 'front-end',
    'ar-EG': 'برمجة فرونت-أيند',
    'en-US': 'Front-end Coding',
  },
  'back-end': {
    id: 'back-end',
    'ar-EG': 'برمجة باك-أيند',
    'en-US': 'Back-end Coding',
  },
  database: {
    id: 'database',
    'ar-EG': 'قاعدة بيانات',
    'en-US': 'Database',
  },
  'web-scrape': {
    id: 'web-scrape',
    'ar-EG': 'تجريف الويب',
    'en-US': 'Web scraping',
  },
};

export const mappedCategories = (
  Object.keys(categories) as (keyof typeof categories)[]
).map((key) => ({
  ...categories[key],
}));

export const projects = [
  {
    id: 'taiba-lines',
    image: Taiba,
    name: {
      'ar-EG': 'طيبة لاينز',
      'en-US': 'Taiba Lines',
    },
    shortDescription: {
      'ar-EG': 'موقع لشركة طيبة لاينز معمول بأكتر من لغة وبأحدث التكنولوجيات.',
      'en-US': 'A localized website for Taiba Lines',
    },
    description: {
      'ar-EG':
        'موقع معمول بأكتر من لغة لشركة طيبة لاينز، استخدمت فيه أحدث التكنولوجيات عشان أقدم أحسن تجربة للمستخدم.',
      'en-US':
        'A localized website for Taiba Lines built with modern technologies',
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | UI/UX Design',
    },
    color: '#22c55e',
    links: {
      website: 'https://taibalines.com',
    },
    categories: [categories['ux-ui'], categories['front-end']],
    stack: [
      languages.ts,
      runtimes.bun,
      technologies.nextjs,
      technologies.react,
      technologies.chakraui,
      technologies.nextintl,
      languages.html,
      languages.css,
      languages.js,
      tools.vsc,
      tools.git,
      tools.github,
    ],
    createdAt: '2024/12/29',
  },
  {
    id: 'blitzmarks',
    image: Blitzmarks,
    name: {
      'ar-EG': 'بليتز ماركس',
      'en-US': 'BlitzMarks',
    },
    shortDescription: {
      'ar-EG':
        'عايز تعرف نتيجة الثانوية العامة؟ دور بالاسم أو رقم الجلوس وهتلاقي كل التفاصيل والدرجات لكل مادة.',
      'en-US':
        "Retrieve your high school exam results effortlessly. A simple search by name or seating number will provide you with comprehensive details of the student's performance in all subjects.",
    },
    description: {
      'ar-EG':
        'موقع بيجيبلك نتيجة الثانوية العامة بسهولة. بس دور بالاسم أو رقم الجلوس وهتلاقي كل تفاصيل الطالب ودرجاته في كل مادة.',
      'en-US':
        "Retrieve your high school exam results effortlessly. A simple search by name or seating number will provide you with comprehensive details of the student's performance in all subjects..",
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | Back-end | UI/UX Design',
    },
    color: '#1d4ed8',
    links: {
      github: undefined,
      website: 'https://blitzmarks.ahmedmohamed.dev',
    },
    categories: [
      categories['ux-ui'],
      categories['front-end'],
      categories['back-end'],
      categories.database,
    ],
    stack: [
      languages.ts,
      runtimes.bun,
      technologies.react,
      technologies.nextjs,
      technologies.tailwind,
      technologies.shadcnui,
      technologies.prisma,
      technologies.mantine,
      technologies.hono,
      searchEngines['mongodb-atlas'],
      databases.mysql,
      languages.html,
      languages.css,
      languages.js,
      tools.adobexd,
      tools.git,
      tools.github,
      tools['github-codespaces'],
    ],
    createdAt: '2024/8/6',
  },
  {
    id: 'ugurly',
    image: Ugurly,
    name: {
      'ar-EG': 'يوجورلي',
      'en-US': 'Ugurly',
    },
    shortDescription: {
      'ar-EG': 'يوجورلي: خدمة تقصير لينكات. اختصر لينكاتك، وزود إمكانياتك.',
      'en-US':
        'Ugurly - A URL shortener service shorten Your URL, Expand Your Possibilities',
    },
    description: {
      'ar-EG':
        'يوجورلي هو خدمة عشان تقصر بيها أي لينك طويل. اختصر لينكاتك، وزود إمكانياتك.',
      'en-US':
        'Ugurly - A URL shortener service shorten Your URL, Expand Your Possibilities.',
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | Back-end | UI/UX Design',
    },
    color: '#e11c47',
    links: {
      github: 'https://github.com/ig4e/ugurly',
      website: 'https://ugurly.vercel.app',
    },
    categories: [
      categories['ux-ui'],
      categories['front-end'],
      categories['back-end'],
      categories.database,
    ],
    stack: [
      languages.ts,
      runtimes.node,
      technologies.nextjs,
      technologies.react,
      technologies.tailwind,
      technologies.trpc,
      technologies.prisma,
      technologies.radixui,
      technologies.authjs,
      technologies.shadcnui,

      databases.sqlite,
      languages.html,
      languages.css,
      languages.js,
      tools.vsc,
      tools.git,
      tools.github,
      tools.postman,
    ],
    createdAt: '2024/4/12',
  },
  {
    id: 'shareme',
    image: ShareMe,
    name: {
      'ar-EG': 'شيرمي',
      'en-US': 'ShareMe',
    },
    shortDescription: {
      'ar-EG': 'بوت ديسكورد عشان الناس تشارك بيه حاجات في السيرفرات.',
      'en-US': 'Discord bot for community content sharing',
    },
    description: {
      'ar-EG':
        'شيرمي بوت ديسكورد بيسهل على الناس إنهم يشاركوا أي حاجة ويتفاعلوا مع بعض في السيرفرات. البوت سهل في استخدامه وإمكانياته عالية. الواجهة بتاعته معمولة بـHTML وCSS وTypescript عشان الأداء يكون أحسن. الفرونت-إند معمول بـNext.js وReact، واستخدمت Tailwind CSS عشان التصميم يكون شيك وسهل تعديله. الباك-إند معمول بـNest.js وPrisma عشان أضمن أمان الداتا وسرعة الأداء، وقاعدة البيانات كانت MongoDB. استخدمت أدوات زي Visual Studio Code وAdobe XD وGit وGitHub.',
      'en-US':
        'ShareMe is a Discord bot designed to facilitate content sharing and member interaction in digital communities. The bot features a user-friendly interface and advanced interactive capabilities. The user interface was built using HTML and CSS, enhanced with Typescript for improved code performance. The front-end was developed using Next.js and React to achieve a dynamic user experience, complemented by Tailwind CSS for an elegant and customizable design. The back-end utilizes Nest.js and Prisma for data security and performance efficiency, with MongoDB as the database. Efficient tools such as Visual Studio Code, Adobe XD, Git, and GitHub were employed in the development process.',
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | Back-end | UI/UX Design',
    },
    color: '#4F46E5',
    links: {},
    categories: [
      categories['ux-ui'],
      categories['front-end'],
      categories['back-end'],
      categories.database,
    ],
    stack: [
      languages.ts,
      runtimes.node,
      technologies.nextjs,
      technologies.react,
      technologies.tailwind,
      technologies.nest,
      technologies.prisma,
      technologies.radixui,
      databases.mongodb,
      languages.html,
      languages.css,
      languages.js,
      tools.vsc,
      tools.adobexd,
      tools.git,
      tools.github,
      tools.postman,
    ],
    createdAt: '2022/9/20',
  },
  {
    id: 'kaboot',
    image: Kaboot,
    name: {
      'ar-EG': 'كابووت',
      'en-US': 'Kaboot',
    },
    shortDescription: {
      'ar-EG': 'إعادة تصميم لمنصة تعليمية تفاعلية، شبه كاهووت كده.',
      'en-US':
        'A redesign of an interactive learning platform, inspired by Kahoot',
    },
    description: {
      'ar-EG':
        'صممت وعملت إعادة تصميم لموقع تعليمي تفاعلي، الفكرة مستوحاة من كاهووت. الهدف كان إني أحسن تجربة المستخدم وأخلي التعليم ممتع أكتر وفيه تفاعل.',
      'en-US':
        'Design and redesign of an interactive learning website, inspired by Kahoot. The project aims to enhance the user experience and make the learning process more engaging and interactive.',
    },
    workArea: {
      'ar-EG': 'تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'UI/UX Design',
    },
    color: '#4453F9',
    links: {},
    categories: [categories['ux-ui']],
    stack: [tools.adobexd],
    createdAt: '2022/3/2',
  },
  {
    id: 'phiboutique',
    image: PhiBoutique,
    name: {
      'ar-EG': 'فاي بوتيك',
      'en-US': 'Phi Boutique',
    },
    shortDescription: {
      'ar-EG': 'مطعم فاي بوتيك في الرياض.',
      'en-US': 'Phi Boutique is a restaurant in Riyadh',
    },
    description: {
      'ar-EG':
        'صممت وعملت منيو للمطعم ده من الألف للياء. الهدف كان تحسين تجربة الزباين وعمل واجهة شكلها حلو وسهلة. الواجهة معمولة بـHTML وCSS وTypescript. استخدمت Next.js وReact عشان التجربة تبقى سلسة، وTailwind CSS عشان التصميم يبقى شيك. اشتغلت على الفرونت-إند والباك-إند وتصميم الواجهة وتجربة المستخدم. استخدمت أدوات زي Visual Studio Code وAdobe XD وGit وGitHub.',
      'en-US':
        'Designing and building a restaurant menu from scratch. The project aims to enhance the customer experience by providing an attractive and user-friendly interface. I implemented the user interface using HTML and CSS, enhancing code performance with Typescript. Next.js and React technologies were used to create a smooth and dynamic user experience, along with Tailwind CSS for an elegant and customizable design. The areas I worked on include front-end, back-end, UI/UX design. Efficient tools such as Visual Studio Code, Adobe XD, Git, and GitHub were employed in the development process.',
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | Back-end | UI/UX Design',
    },
    color: '#F2E0D8',
    links: {
      github: 'https://github.com/ig4e/phi-boutique-website',
      website: 'https://phi-boutique-website.vercel.app/',
    },
    categories: [
      categories['ux-ui'],
      categories['front-end'],
      categories['back-end'],
    ],
    stack: [
      languages.ts,
      runtimes.node,
      technologies.nextjs,
      technologies.react,
      technologies.tailwind,
      languages.html,
      languages.css,
      languages.js,
      tools.vsc,
      tools.adobexd,
      tools.git,
      tools.github,
      tools.postman,
    ],
    createdAt: '2021/12/20',
  },
  {
    id: 'mhtce',
    image: MHTCE,
    name: {
      'ar-EG': 'ام اتش للتجارة والمقاولات',
      'en-US': 'MH for Trading and Contracting',
    },
    shortDescription: {
      'ar-EG':
        'شركة مقاولات وتأهيل وتجديد اسمها إم إتش للتجارة والمقاولات (MHTC).',
      'en-US':
        'MH for Trading and Contracting (MHTC) is a highly experienced company specializing in contracting, rehabilitation, and renovation services',
    },
    description: {
      'ar-EG': 'تصميم موقع الشركة.',
      'en-US': 'Designing the website',
    },
    workArea: {
      'ar-EG': 'تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'UI/UX Design',
    },
    color: '#F8C32A',
    links: {
      website: 'https://mhtce.com',
    },
    categories: [categories['ux-ui']],
    stack: [tools.adobexd],
    createdAt: '2022/4/0',
  },
  {
    id: 'emanga',
    image: Emanga,
    name: {
      'ar-EG': 'أيزي مانجا',
      'en-US': 'Easy Manga',
    },
    shortDescription: {
      'ar-EG': 'أسهل طريقة تقرا بيها مانجا ومانهوا.',
      'en-US': 'Easiest way to read manga and manhwas',
    },
    description: {
      'ar-EG':
        'صممت وعملت الموقع ده من الصفر، وعملت ويب سكريبت عشان أجيب الداتا من مواقع تانية.',
      'en-US':
        'Designing and building the web app, and creating a web script to scrape data from other websites',
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | Back-end | UI/UX Design',
    },
    color: '#0ea5e9',
    links: {
      github: 'https://github.com/ig4e/easymanga-frontend',
      website: 'https://easymanga-frontend.vercel.app/',
    },
    categories: [
      categories['ux-ui'],
      categories['front-end'],
      categories['back-end'],
      categories.database,
      categories['web-scrape'],
    ],
    stack: [
      languages.ts,
      runtimes.node,
      languages.graphql,
      technologies.nextjs,
      technologies.react,
      technologies.tailwind,
      languages.html,
      languages.css,
      languages.js,
      technologies.nest,
      tools.vsc,
      tools.adobexd,
      tools.git,
      tools.github,
      tools.postman,
    ],
    createdAt: '2022/9/9',
  },
  {
    id: 'wolfland',
    image: WolfLand,
    name: {
      'ar-EG': 'ولف لاند',
      'en-US': 'WolfLand',
    },
    shortDescription: {
      'ar-EG': 'موقع بيحسن تجربتك وانت بتلعب GTA V.',
      'en-US': 'Enhance your experience in playing Grand Theft Auto V',
    },
    description: {
      'ar-EG':
        'صممت وعملت الموقع ده من الصفر، وعملت لوحة تحكم عشان تتحكم في المحتوى.',
      'en-US':
        'Designing and building the web app, and creating a dashboard to control the content',
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | Back-end | UI/UX Design',
    },
    color: '#FFC64A',
    links: {
      github: 'https://github.com/ig4e/wolfland',
      website: 'https://wolfland.vercel.app/',
    },
    categories: [
      categories['ux-ui'],
      categories['front-end'],
      categories['back-end'],
      categories.database,
    ],
    stack: [
      languages.html,
      languages.css,
      languages.ts,
      runtimes.node,
      technologies.nextjs,
      technologies.react,
      technologies.tailwind,
      languages.js,
      tools.vsc,
      tools.adobexd,
      tools.git,
      tools.github,
    ],
    createdAt: '2021/12/20',
  },
  {
    id: 'hnzakronline-redesign',
    image: HnzakrOnline,
    name: {
      'ar-EG': 'هنذاكر اونلاين (نسخة)',
      'en-US': 'Hnzakr Online (clone)',
    },
    shortDescription: {
      'ar-EG':
        'إعادة تصميم لمنصة تعليمية اسمها هنذاكر أونلاين. قدرت أسحب كل المعلومات والشروحات اللي عليها وعملت هندسة عكسية لنظام الحسابات بتاعهم عشان أفهمه.',
      'en-US':
        'Redesign of the educational platform, extracting all information and explanations from it, and reverse engineering their authentication system.',
    },
    description: {
      'ar-EG':
        'عملت إعادة تصميم لمنصة تعليمية اسمها هنذاكر أونلاين. قدرت أسحب كل المعلومات والشروحات اللي عليها وعملت هندسة عكسية لنظام الحسابات بتاعهم عشان أفهمه.',
      'en-US':
        'Redesign of the educational platform, extracting all information and explanations from it, and reverse engineering their authentication system.',
    },
    workArea: {
      'ar-EG': 'فرونت-ايند | باك-ايند | تصميم واجهة المستخدم وتجربة المستخدم',
      'en-US': 'Front-end | Back-end | UI/UX Design',
    },
    color: '#22c55e',
    links: {
      github: 'https://github.com/ig4e/hnzakr-online-redesign',
      website: 'https://hnzakr-online-redesign.vercel.app',
    },
    categories: [
      categories['ux-ui'],
      categories['front-end'],
      categories['back-end'],
      categories['web-scrape'],
    ],
    stack: [
      technologies.nextjs,
      technologies.react,
      technologies.tailwind,
      technologies.trpc,
      technologies.shadcnui,
      languages.html,
      languages.css,
      languages.ts,
      languages.js,
      runtimes.node,
      tools.vsc,
      tools.adobexd,
      tools.git,
      tools.github,
      tools.postman,
    ],
    createdAt: '2023/9/16',
  },
];

export type Project = (typeof projects)[number];
