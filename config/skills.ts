/* eslint-disable @typescript-eslint/prefer-reduce-type-parameter --- for reduce function */
import { Icons } from '@/components/ui/icons';

export const skills = [
  /* Languages  */
  {
    type: 'languages',
    items: [
      {
        id: 'html',
        icon: Icons.html,
        name: {
          'ar-EG': 'HTML',
          'en-US': 'HTML',
        },
        description: {
          'ar-EG': 'HTML هي لغة الترميز الأساسية لصفحات الويب.',
          'en-US': 'HTML is the standard markup language for Web pages.',
        },
        color: '#e54d26',
        link: 'https://www.w3.org/TR/HTML',
      },
      {
        id: 'css',
        icon: Icons.css,
        name: {
          'ar-EG': 'CSS',
          'en-US': 'CSS',
        },
        description: {
          'ar-EG': 'CSS هي لغة تنسيق بنستخدمها عشان نحدد شكل وتنسيق أي مستند.',
          'en-US':
            'Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document.',
        },
        color: '#0284c7',
        link: 'https://www.w3.org/TR/CSS',
      },
      {
        id: 'js',
        icon: Icons.js,
        name: {
          'ar-EG': 'جافا سكريبت',
          'en-US': 'JavaScript',
        },
        description: {
          'ar-EG': 'جافا سكريبت هي لغة برمجة وتكنولوجيا أساسية للويب.',
          'en-US':
            'JavaScript is a programming language and core technology of the World Wide Web.',
        },
        color: '#f0db4e',
        link: 'https://www.w3.org/TR/JS',
      },
      {
        id: 'ts',
        icon: Icons.ts,
        name: {
          'ar-EG': 'تايب سكريبت',
          'en-US': 'TypeScript',
        },
        description: {
          'ar-EG':
            'تايب سكريبت لغة برمجة بتضيف أنواع ثابتة اختيارية للجافا سكريبت.',
          'en-US':
            'TypeScript is a high-level programming language that adds static typing with optional type annotations to JavaScript.',
        },
        color: '#2563eb',
        link: 'https://www.typescriptlang.org/',
      },
      {
        id: 'py',
        icon: Icons.py,
        name: {
          'ar-EG': 'بايثون',
          'en-US': 'Python',
        },
        description: {
          'ar-EG': 'بايثون لغة برمجة عالية المستوى ولأغراض عامة.',
          'en-US':
            'Python is a high-level, general-purpose programming language.',
        },
        color: '#356a96',
        link: 'https://www.python.org/',
      },
      {
        id: 'graphql',
        icon: Icons.graphql,
        name: {
          'ar-EG': 'GraphQL',
          'en-US': 'GraphQL',
        },
        description: {
          'ar-EG':
            'GraphQL هي لغة استعلام وتعديل بيانات مفتوحة المصدر للـ APIs.',
          'en-US':
            'GraphQL is an open-source data query and manipulation language for APIs.',
        },
        color: '#f5009b',
        link: 'https://graphql.org/',
      },
      {
        id: 'md',
        icon: Icons.md,
        name: {
          'ar-EG': 'مارك داون',
          'en-US': 'Markdown',
        },
        description: {
          'ar-EG': 'مارك داون لغة تنسيق خفيفة الوزن بنستخدمها لكتابة النصوص.',
          'en-US':
            'Markdown is a lightweight markup language for creating formatted text.',
        },
        color: '#FFFFFF',
        link: 'https://www.markdownguide.org',
      },
    ],
  },

  /* Runtimes */

  {
    type: 'runtimes',
    items: [
      {
        id: 'node',
        icon: Icons.nodejs,
        name: {
          'ar-EG': 'Node.js',
          'en-US': 'Node.js',
        },
        description: {
          'ar-EG':
            'Node.js بيئة تشغيل جافاسكريبت مفتوحة المصدر بتشتغل على أكتر من نظام.',
          'en-US':
            "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        color: '#417e38',
        link: 'https://nodejs.org',
      },
      {
        id: 'bun',
        icon: Icons.bun,
        name: {
          'ar-EG': 'Bun',
          'en-US': 'Bun',
        },
        description: {
          'ar-EG':
            'Bun بيئة تشغيل جافاسكريبت سريعة جداً، ومعاها مجموعة أدوات كاملة.',
          'en-US': 'Bun is a fast JavaScript runtime & all-in-one toolkit.',
        },
        color: '#ffffff',
        link: 'https://bun.sh',
      },
    ],
  },

  /* Libraries & Frameworks */

  {
    type: 'libraries-frameworks',
    items: [
      {
        id: 'react',
        icon: Icons.react,
        name: {
          'ar-EG': 'رياكت',
          'en-US': 'React',
        },
        description: {
          'ar-EG': 'رياكت مكتبة جافا سكريبت بنستخدمها لبناء واجهات المستخدم.',
          'en-US':
            'React is a JavaScript library for building user interfaces.',
        },
        color: '#0ea5e9',
        link: 'https://react.dev/',
      },
      {
        id: 'vue',
        icon: Icons.vue,
        name: {
          'ar-EG': 'فيو',
          'en-US': 'Vue',
        },
        description: {
          'ar-EG': 'فيو مكتبة جافا سكريبت بنستخدمها لبناء واجهات المستخدم.',
          'en-US': 'Vue is a JavaScript library for building user interfaces.',
        },
        color: '#48b383',
        link: 'https://vuejs.org/',
      },
      {
        id: 'svelte',
        icon: Icons.svelte,
        name: {
          'ar-EG': 'سفلت',
          'en-US': 'Svelte',
        },
        description: {
          'ar-EG': 'سفلت فريموورك جافا سكريبت بنستخدمه لبناء واجهات المستخدم.',
          'en-US':
            'Svelte is a JavaScript framework for building user interfaces.',
        },
        color: '#FF3E00',
        link: 'https://svelte.dev/',
      },
      {
        id: 'nextjs',
        icon: Icons.next,
        name: {
          'ar-EG': 'Next.js',
          'en-US': 'Next.js',
        },
        description: {
          'ar-EG':
            'Next.js فريموورك رياكت بيضيف مميزات للإنتاج زي الـSSR والـSSG.',
          'en-US':
            'Next.js is a React framework for production features like SSR and SSG.',
        },
        color: '#FFF',
        link: 'https://nextjs.org/',
      },
      {
        id: 'nuxt',
        icon: Icons.nuxt,
        name: {
          'ar-EG': 'Nuxt.js',
          'en-US': 'Nuxt.js',
        },
        description: {
          'ar-EG': 'Nuxt.js هو زي Next.js بس لـ Vue.',
          'en-US': 'Nuxt.js is like Next.js but for Vue.',
        },
        color: '#00DC82',
        link: 'https://nuxtjs.org/',
      },
      {
        id: 'nextra',
        icon: Icons.nextra,
        name: {
          'ar-EG': 'نيكسترا',
          'en-US': 'Nextra',
        },
        description: {
          'ar-EG': 'فريموورك بسيط وقوي ومرن عشان تعمل بيه مواقع.',
          'en-US': 'Simple, powerful and flexible site generation framework.',
        },
        color: '#FFFFFF',
        link: 'https://nextra.site/',
      },
      {
        id: 'nest',
        icon: Icons.nest,
        name: {
          'ar-EG': 'Nest.js',
          'en-US': 'Nest.js',
        },
        description: {
          'ar-EG':
            'Nest.js فريموورك عشان تبني تطبيقات ويب بـ Node.js تكون فعالة وتقدر تكبر معاك.',
          'en-US':
            'NestJS is a framework for building efficient, scalable Node.js web applications.',
        },
        color: '#df234e',
        link: 'https://nestjs.com/',
      },
      {
        id: 'hono',
        icon: Icons.hono,
        name: {
          'ar-EG': 'هونو',
          'en-US': 'Hono',
        },
        description: {
          'ar-EG':
            'فريموورك ويب سريع جداً بيشتغل على أكتر من بيئة تشغيل جافاسكريبت.',
          'en-US': 'Ultrafast web framework for multiple JavaScript runtimes',
        },
        color: '#ff5b11',
        link: 'https://hono.dev/',
      },
      {
        id: 'express',
        icon: Icons.express,
        name: {
          'ar-EG': 'Express.js',
          'en-US': 'Express.js',
        },
        description: {
          'ar-EG':
            'Express فريموورك لتطبيقات الويب (باك-إند) عشان تبني بيه RESTful APIs.',
          'en-US':
            'Express is a back-end web application framework for building RESTful APIs.',
        },
        color: '#FFF',
        link: 'https://expressjs.com/',
      },
      {
        id: 'trpc',
        icon: Icons.trpc,
        name: {
          'ar-EG': 'tRPC',
          'en-US': 'tRPC',
        },
        description: {
          'ar-EG': 'فريموورك APIs بسيط وقوي ومرن بيستخدم RPC.',
          'en-US': 'Simple, powerful and flexible RPC API framework.',
        },
        color: '#398ccb',
        link: 'https://trpc.io/',
      },
      {
        id: 'authjs',
        icon: Icons.authjs,
        name: {
          'ar-EG': 'Auth.js',
          'en-US': 'Auth.js',
        },
        description: {
          'ar-EG': 'فريموورك بسيط وقوي ومرن للمصادقة (Authentication).',
          'en-US': 'Simple, powerful and flexible auth framework.',
        },
        color: '#398ccb',
        link: 'https://authjs.dev/',
      },
      {
        id: 'prisma',
        icon: Icons.prisma,
        name: {
          'ar-EG': 'Prisma',
          'en-US': 'Prisma ORM',
        },
        description: {
          'ar-EG': 'Prisma هو ORM الجيل الجديد لـ Node.js و TypeScript.',
          'en-US': 'Prisma is a next-generation Node.js and TypeScript ORM.',
        },
        color: '#5a67d9',
        link: 'https://www.prisma.io/',
      },
      {
        id: 'tailwind',
        icon: Icons.tailwind,
        name: {
          'ar-EG': 'Tailwind CSS',
          'en-US': 'Tailwind CSS',
        },
        description: {
          'ar-EG': 'Tailwind CSS فريموورك CSS بيعتمد على الـ utility-first.',
          'en-US': 'Tailwind CSS is a utility-first CSS framework.',
        },
        color: '#0891b2',
        link: 'https://tailwindcss.com/',
      },
      {
        id: 'shadcnui',
        icon: Icons.shadcnui,
        name: {
          'ar-EG': 'Shadcn UI',
          'en-US': 'Shadcn UI',
        },
        description: {
          'ar-EG': 'مكونات UI شكلها حلو معمولة بـ Radix UI و Tailwind CSS.',
          'en-US':
            'Beautifully designed UI components built with Radix UI and Tailwind CSS.',
        },
        color: '#FFFFFF',
        link: 'https://ui.shadcn.com/',
      },

      {
        id: 'mantine',
        icon: Icons.mantine,
        name: {
          'ar-EG': 'مانتين',
          'en-US': 'Mantine',
        },
        description: {
          'ar-EG': 'مكتبة مكونات UI مرنة جداً عشان تبني بيها تطبيقات ويب.',
          'en-US':
            'Highly customizable UI component library for building web applications',
        },
        color: '#339af0',
        link: 'https://mantine.dev/',
      },
      {
        id: 'radixui',
        icon: Icons.radix,
        name: {
          'ar-EG': 'Radix UI',
          'en-US': 'Radix UI',
        },
        description: {
          'ar-EG':
            'مكونات وأيقونات وألوان عشان تبني UI عالي الجودة وسهل الاستخدام.',
          'en-US':
            'Components, icons, and colors for building high‑quality, accessible UI.',
        },
        color: '#FFFFFF',
        link: 'https://www.radix-ui.com',
      },
      {
        id: 'chakraui',
        icon: Icons.chakra,
        name: {
          'ar-EG': 'Chakra UI',
          'en-US': 'Chakra UI',
        },
        description: {
          'ar-EG':
            'مكتبة مكونات بسيطة ومقسمة وسهلة الاستخدام عشان تبني بيها تطبيقات رياكت بسرعة.',
          'en-US':
            'Simple, modular and accessible component library for building React applications quickly.',
        },
        color: '#319795',
        link: 'https://chakra-ui.com',
      },
      {
        id: 'nextintl',
        icon: Icons.nextintl,
        name: {
          'ar-EG': 'Next-intl',
          'en-US': 'Next-intl',
        },
        description: {
          'ar-EG':
            'حل كامل للـ Internationalization (تدويل) في تطبيقات Next.js.',
          'en-US':
            'Complete solution for internationalization in Next.js applications.',
        },
        color: '#000000',
        link: 'https://next-intl-docs.vercel.app',
      },
    ],
  },

  /* Search Engines */

  {
    type: 'search-engines',
    items: [
      {
        id: 'meilisearch',
        icon: Icons.meilisearch,
        name: {
          'ar-EG': 'Meilisearch',
          'en-US': 'Meilisearch',
        },
        description: {
          'ar-EG': 'محرك بحث سريع وسهل تستخدمه مع الداتا بتاعتك.',
          'en-US': 'Fast and easy-to-use search engine for your data',
        },
        color: '#FF4E62',
        link: 'https://www.meilisearch.com/',
      },
      {
        id: 'orama',
        icon: Icons.orama,
        name: {
          'ar-EG': 'Orama Search',
          'en-US': 'Orama Search',
        },
        description: {
          'ar-EG': 'محرك بحث هجين (Hybrid) سريع ومفتوح المصدر.',
          'en-US': 'Fast, open-source hybrid search engine',
        },
        color: '#43205b',
        link: 'https://askorama.ai/',
      },
      {
        id: 'mongodb-atlas',
        icon: Icons.mongodb,
        name: {
          'ar-EG': 'MongoDB Atlas',
          'en-US': 'MongoDB Atlas',
        },
        description: {
          'ar-EG': 'MongoDB Atlas منصة متكاملة لكل حاجة تخص MongoDB.',
          'en-US': 'MongoDB Atlas is an all-in-one platform for MongoDB.',
        },
        color: '#01ed64',
        link: 'https://www.mongodb.com/',
      },
    ],
  },

  /* Databases */

  {
    type: 'databases',
    items: [
      {
        id: 'mongodb',
        icon: Icons.mongodb,
        name: {
          'ar-EG': 'MongoDB',
          'en-US': 'MongoDB',
        },
        description: {
          'ar-EG':
            'MongoDB قاعدة بيانات NoSQL مفتوحة المصدر بتعتمد على المستندات (Documents).',
          'en-US':
            'MongoDB is a source-available document-oriented NoSQL database.',
        },
        color: '#01ed64',
        link: 'https://www.mongodb.com/',
      },

      {
        id: 'postgresql',
        icon: Icons.postgresql,
        name: {
          'ar-EG': 'PostgreSQL',
          'en-US': 'PostgreSQL',
        },
        description: {
          'ar-EG': 'نظام قواعد بيانات علائقية متقدم ومفتوح المصدر.',
          'en-US': 'Advanced open-source relational database system.',
        },
        color: '#336699',
        link: 'https://www.postgresql.org/',
      },
      {
        id: 'mysql',
        icon: Icons.mysql,
        name: {
          'ar-EG': 'MySQL',
          'en-US': 'MySQL',
        },
        description: {
          'ar-EG': 'نظام إدارة قواعد بيانات علائقية مفتوح المصدر ومشهور جداً.',
          'en-US': 'Popular open-source relational database management system.',
        },
        color: '#00758F',
        link: 'https://www.mysql.com/',
      },
      {
        id: 'sqlite',
        icon: Icons.sqlite,
        name: {
          'ar-EG': 'SQLite',
          'en-US': 'SQLite',
        },
        description: {
          'ar-EG':
            'SQLite محرك قواعد بيانات مدمج في ملف واحد، مش بيحتاج سيرفر.',
          'en-US':
            'SQLite is a self-contained, serverless, zero-configuration, database engine.',
        },
        color: '#398ccb',
        link: 'https://www.sqlite.org/',
      },
    ],
  },

  /* Content management systems */

  {
    type: 'cms',
    items: [
      {
        id: 'strapi',
        icon: Icons.strapi,
        name: {
          'ar-EG': 'Strapi',
          'en-US': 'Strapi',
        },
        description: {
          'ar-EG':
            'Strapi نظام إدارة محتوى (CMS) بدون واجهة أمامية (headless) لتطوير المواقع والتطبيقات.',
          'en-US':
            'Strapi is a headless CMS for developing websites, mobile apps.',
        },
        color: '#4945ff',
        link: 'https://strapi.io/',
      },
    ],
  },

  /* Tools */

  {
    type: 'tools',
    items: [
      {
        id: 'adobexd',
        icon: Icons.adobeXd,
        name: {
          'ar-EG': 'Adobe XD',
          'en-US': 'Adobe XD',
        },
        description: {
          'ar-EG':
            'Adobe XD أداة تصميم Vector بتستخدم لتصميم تطبيقات الويب والموبايل.',
          'en-US':
            'Adobe XD is a vector design tool for web and mobile applications.',
        },
        color: '#F572F8',
        link: 'https://www.adobe.com/products/xd.html',
      },
      {
        id: 'figma',
        icon: Icons.figma,
        name: {
          'ar-EG': 'Figma',
          'en-US': 'Figma',
        },
        description: {
          'ar-EG':
            'Figma أداة تصميم Vector بتستخدم لتصميم تطبيقات الويب والموبايل.',
          'en-US':
            'Figma is a vector design tool for web and mobile applications.',
        },
        color: '#a259ff',
        link: 'https://www.figma.com/',
      },
      {
        id: 'vsc',
        icon: Icons.vsc,
        name: {
          'ar-EG': 'VS Code',
          'en-US': 'VS Code',
        },
        description: {
          'ar-EG': 'VS Code محرر أكواد طورته مايكروسوفت.',
          'en-US':
            'Visual Studio Code is a code editor developed by Microsoft.',
        },
        color: '#0ea5e9',
        link: 'https://code.visualstudio.com/',
      },
      {
        id: 'git',
        icon: Icons.git,
        name: {
          'ar-EG': 'Git',
          'en-US': 'Git',
        },
        description: {
          'ar-EG': 'Git نظام تحكم في الإصدارات موزع (distributed).',
          'en-US': 'Git is a distributed version control system.',
        },
        color: '#ef5032',
        link: 'https://git-scm.com/',
      },
      {
        id: 'github',
        icon: Icons.gitHub,
        name: {
          'ar-EG': 'Github',
          'en-US': 'Github',
        },
        description: {
          'ar-EG':
            'Github منصة للمطورين عشان يكتبوا ويخزنوا ويديروا ويشاركوا الأكواد بتاعتهم.',
          'en-US':
            'GitHub is a developer platform that allows developers to create, store, manage and share their code.',
        },
        color: '#FFFFFF',
        link: 'https://github.com/',
      },
      {
        id: 'github-codespaces',
        icon: Icons.githubCodeSpaces,
        name: {
          'ar-EG': 'Github Codespaces',
          'en-US': 'Github Codespaces',
        },
        description: {
          'ar-EG': 'بيئة تطوير سحابية فورية عشان تكتب وتشغل الكود بتاعك.',
          'en-US':
            'Instant cloud-based development environments for building and running code.',
        },
        color: '#FFFFFF',
        link: 'https://github.com/',
      },
      {
        id: 'postman',
        icon: Icons.postman,
        name: {
          'ar-EG': 'Postman',
          'en-US': 'Postman',
        },
        description: {
          'ar-EG':
            'Postman برنامج بيخليك تختبر وتستكشف وتستخدم وتصلح الـ Web APIs.',
          'en-US':
            'Postman is an application that allows the testing of web APIs.',
        },
        color: '#ff6c37',
        link: 'https://www.postman.com',
      },
      {
        id: 'mongodbcompass',
        icon: Icons.mongodb,
        name: {
          'ar-EG': 'MongoDB Compass',
          'en-US': 'MongoDB Compass',
        },
        description: {
          'ar-EG': 'أداة بواجهة رسومية لإدارة قواعد بيانات MongoDB.',
          'en-US': 'Graphical tool for managing MongoDB databases',
        },
        color: '#01ed64',
        link: 'https://www.mongodb.com/products/tools/compass',
      },
    ],
  },
] as const;

export type Skills = typeof skills;

type MappedCategory<T extends Skills[number]> = {
  [key in T['items'][number]['id']]: T['items'][number];
};

export const languages = skills[0].items.reduce(
  (object, item) => {
    object[item.id] = item;
    return object;
  },
  {} as MappedCategory<Skills[0]>,
);

export const runtimes = skills[1].items.reduce(
  (object, item) => {
    object[item.id] = item;
    return object;
  },
  {} as MappedCategory<Skills[1]>,
);

export const technologies = skills[2].items.reduce(
  (object, item) => {
    object[item.id] = item;
    return object;
  },
  {} as MappedCategory<Skills[2]>,
);

export const searchEngines = skills[3].items.reduce(
  (object, item) => {
    object[item.id] = item;
    return object;
  },
  {} as MappedCategory<Skills[3]>,
);

export const databases = skills[4].items.reduce(
  (object, item) => {
    object[item.id] = item;
    return object;
  },
  {} as MappedCategory<Skills[4]>,
);

export const cms = skills[5].items.reduce(
  (object, item) => {
    object[item.id] = item;
    return object;
  },
  {} as MappedCategory<Skills[5]>,
);

export const tools = skills[6].items.reduce(
  (object, item) => {
    object[item.id] = item;
    return object;
  },
  {} as MappedCategory<Skills[6]>,
);
