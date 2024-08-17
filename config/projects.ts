import Emanga from '@/public/assets/projects/emanga.png';
import Kaboot from '@/public/assets/projects/kaboot.png';
import MHTCE from '@/public/assets/projects/mhtce.png';
import PhiBoutique from '@/public/assets/projects/phiboutique.png';
import ShareMe from '@/public/assets/projects/shareme.png';
import WolfLand from '@/public/assets/projects/wolfland.png';
import HnzakrOnline from '@/public/assets/projects/hnzakronline.png';
import Ugurly from '@/public/assets/projects/ugurly.png';
import Blitzmarks from '@/public/assets/projects/blitzmarks.png';
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
    id: 'blitzmarks',
    image: Blitzmarks,
    name: {
      'ar-EG': 'بليتز ماركس',
      'en-US': 'BlitzMarks',
    },
    shortDescription: {
      'ar-EG':
        'شوف نتيجة الثانوية العامة بسهولة! دوّر بالاسم أو رقم الجلوس وهتلاقي كل تفاصيل الطالب ودرجاته في كل مادة.',
      'en-US':
        "Retrieve your high school exam results effortlessly. A simple search by name or seating number will provide you with comprehensive details of the student's performance in all subjects.",
    },
    description: {
      'ar-EG':
        'شوف نتيجة الثانوية العامة بسهولة! دوّر بالاسم أو رقم الجلوس وهتلاقي كل تفاصيل الطالب ودرجاته في كل مادة.',
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
      'ar-EG': 'يوجورلي - خدمة تقصير روابط URL اختصر روابطك، ووسّع إمكانياتك',
      'en-US':
        'Ugurly - A URL shortener service shorten Your URL, Expand Your Possibilities',
    },
    description: {
      'ar-EG': 'يوجورلي - خدمة تقصير روابط URL اختصر روابطك، ووسّع إمكانياتك',
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
      'ar-EG': 'بوت ديسكورد لمشاركة المحتوى في المجتمعات',
      'en-US': 'Discord bot for community content sharing',
    },
    description: {
      'ar-EG':
        'شيرمي هو بوت ديسكورد يُسهل عملية مشاركة المحتوى وتفاعل الأعضاء في المجتمعات الرقمية. يتميز البوت بواجهة سهلة الاستخدام وقدرات تفاعلية متقدمة. تم بناء واجهة المستخدم باستخدام HTML و CSS مع Typescript لتحسين أداء الشيفرة. الجزء الأمامي من التطبيق تم تطويره باستخدام Next.js و React، بينما استُخدمت Tailwind CSS لتحقيق تصميم أنيق وسهل التخصيص. بالنسبة للجزء الخلفي، تم استخدام Nest.js و Prisma لضمان أمان البيانات وكفاءة الأداء، وكانت قاعدة البيانات MongoDB. تم استخدام أدوات فعّالة مثل Visual Studio Code و Adobe XD و Git و GitHub في عملية التطوير.',
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
      'ar-EG': 'إعادة تصميم لمنصة التعلم التفاعلي، مستوحاة من كاهووت',
      'en-US':
        'A redesign of an interactive learning platform, inspired by Kahoot',
    },
    description: {
      'ar-EG':
        'تصميم وإعادة تصميم موقع للتعلم التفاعلي، مستوحى من منصة كاهووت. يهدف المشروع إلى تحسين تجربة المستخدم وجعل عملية التعلم أكثر إشراكًا وتفاعلًا.',
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
      'ar-EG': 'مطعم فاي بوتيك بالرياض',
      'en-US': 'Phi Boutique is a restaurant in Riyadh',
    },
    description: {
      'ar-EG':
        'تصميم وإنشاء قائمة للمطعم من البداية، بهدف تحسين تجربة الزبائن وتوفير واجهة جذابة وفعالة. قمت بتنفيذ واجهة المستخدم باستخدام HTML و CSS مع تحسين أداء الشيفرة باستخدام Typescript. استخدمت تقنيات Next.js و React لبناء تجربة مستخدم سلسة وديناميكية، بالإضافة إلى Tailwind CSS لتحقيق تصميم أنيق وسهل التخصيص. المجالات التي عملت فيها تشمل الفرونت-ايند والباك-ايند وتصميم واجهة المستخدم وتجربة المستخدم. تم استخدام أدوات فعّالة مثل Visual Studio Code و Adobe XD و Git و GitHub في عملية التطوير.',
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
        'شركة إم إتش للتجارة والمقاولات (MHTC) هي شركة ذات خبرة عالية متخصصة في خدمات المقاولات وإعادة التأهيل والتجديد',
      'en-US':
        'MH for Trading and Contracting (MHTC) is a highly experienced company specializing in contracting, rehabilitation, and renovation services',
    },
    description: {
      'ar-EG': 'تصميم الموقع',
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
      'ar-EG': 'أسهل طريقة لقراءة المانجا والمانهوا',
      'en-US': 'Easiest way to read manga and manhwas',
    },
    description: {
      'ar-EG':
        'تصميم وصنع الموقع من الصفر، وعمل ويب سكريبت للحصول على المعلومات من مواقع أخرى',
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
      'ar-EG': 'تحسين تجربتك في لعب Grand Theft Auto V',
      'en-US': 'Enhance your experience in playing Grand Theft Auto V',
    },
    description: {
      'ar-EG': 'تصميم وصنع الموقع من الصفر، وإنشاء لوحة تحكم للتحكم في المحتوى',
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
        'أعادة تصميم للمنصة التعليمية واستخراج جميع المعلومات والشروحات منها وهندسة عكسية لنظام الحسابات الخاص بيهم',
      'en-US':
        'Redesign of the educational platform, extracting all information and explanations from it, and reverse engineering their authentication system.',
    },
    description: {
      'ar-EG':
        'أعادة تصميم للمنصة التعليمية واستخراج جميع المعلومات والشروحات منها وهندسة عكسية لنظام الحسابات الخاص بيهم',
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
