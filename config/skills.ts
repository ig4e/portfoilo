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
          'ar-EG': 'إتش تي أم أل',
          'en-US': 'HTML',
        },
        description: {
          'ar-EG': 'إتش تي أم أل هو لغة ترميز الصفحات على الويب.',
          'en-US': 'HTML is the standard markup language for Web pages.',
        },
        color: '#e54d26',
        link: 'https://www.w3.org/TR/HTML',
      },
      {
        id: 'css',
        icon: Icons.css,
        name: {
          'ar-EG': 'سي إس إس',
          'en-US': 'CSS',
        },
        description: {
          'ar-EG':
            'سي إس إس هو لغة ورقة الأنماط المستخدمة لتحديد العرض والتنسيق للمستند.',
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
          'ar-EG':
            'جافا سكريبت هي لغة برمجة وتكنولوجيا أساسية على شبكة الإنترنت.',
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
            'تايب سكريبت هي لغة برمجة عالية المستوى تضيف الكتابة الثابتة مع التعليقات التوضيحية الاختيارية إلى جافا سكريبت',
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
          'ar-EG': 'بايثون هي لغة برمجة عالية المستوى وغرض عام.',
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
          'ar-EG': 'غراف كيو أل',
          'en-US': 'GraphQL',
        },
        description: {
          'ar-EG':
            'غراف كيو أل هو لغة استعلام وتلاعب في البيانات مفتوحة المصدر لواجهة برمجة التطبيقات.',
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
          'ar-EG':
            'غراف كيو أل هو لغة استعلام وتلاعب في البيانات مفتوحة المصدر لواجهة برمجة التطبيقات.',
          'en-US':
            'GraphQL is an open-source data query and manipulation language for APIs.',
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
          'ar-EG': 'نود جي اس',
          'en-US': 'Node.js',
        },
        description: {
          'ar-EG':
            'محرك جافاسكريبت بالوقت الفعلي مفتوح المصدر ومُصمم لكتابة تطبيقات متعدد المنصات.',
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
          'ar-EG': 'بان',
          'en-US': 'Bun',
        },
        description: {
          'ar-EG':
            'هو بيئة تشغيل سريعة لـ جافاسكريبت، كما أنه مجموعة أدوات شاملة.',
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
          'ar-EG': 'رياكت هو مكتبة جافا سكريبت لبناء واجهات المستخدم.',
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
          'ar-EG': 'فيو هو مكتبة جافا سكريبت لبناء واجهات المستخدم.',
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
          'ar-EG': 'سفلت هو إطار عمل جافا سكريبت لبناء واجهات المستخدم.',
          'en-US':
            'Svelte is a JavaScript library for building user interfaces.',
        },
        color: '#FF3E00',
        link: 'https://svelte.dev/',
      },
      {
        id: 'nextjs',
        icon: Icons.next,
        name: {
          'ar-EG': 'نيكست.جي إس',
          'en-US': 'Next.js',
        },
        description: {
          'ar-EG':
            'نيكست.جي إس يوفر تطبيقات الويب القائمة على رياكت مع تقديم الصفحات من الخادم وإنشاء مواقع ويب ثابتة.',
          'en-US':
            'Next.js is providing React applications with production features.',
        },
        color: '#FFF',
        link: 'https://nextjs.org/',
      },
      {
        id: 'nuxt',
        icon: Icons.nuxt,
        name: {
          'ar-EG': 'ناكست.جي إس',
          'en-US': 'Nuxt.js',
        },
        description: {
          'ar-EG': 'ناكست.جي إس هو نيكست.جي إس ولكن لـ فيو.',
          'en-US': 'Nuxt.js is Next.js but for Vue.',
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
          'ar-EG': 'إطار إنشاء موقع بسيط وقوي ومرن.',
          'en-US': 'Simple, powerful and flexible site generation framework.',
        },
        color: '#FFFFFF',
        link: 'https://nextra.site/',
      },
      {
        id: 'nest',
        icon: Icons.nest,
        name: {
          'ar-EG': 'نيست.جي إس (نود جي إس)',
          'en-US': 'Nest.js (Nodejs)',
        },
        description: {
          'ar-EG':
            'نيست جي إس هو إطار لبناء تطبيقات ويب فعالة وقابلة للتوسع باستخدام نود جي إس.',
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
          'ar-EG': 'إطار عمل ويب فائق السرعة لعدة بيئات تشغيل جافاسكريبت',
          'en-US': 'Ultrafast web framework for multiple JavaScript runtimes',
        },
        color: '#ff5b11',
        link: 'https://hono.dev/',
      },
      {
        id: 'express',
        icon: Icons.express,
        name: {
          'ar-EG': 'إكسبريس (نود جي إس)',
          'en-US': 'Express (Nodejs)',
        },
        description: {
          'ar-EG':
            'إكسبريس هو إطار تطبيق ويب خلفي لبناء واجهات برمجة التطبيقات RESTful.',
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
          'ar-EG': 'تي أر بي سي',
          'en-US': 'tRPC',
        },
        description: {
          'ar-EG': 'إطار إنشاء أبي أي بتقنية أر بي سي بسيط وقوي ومرن.',
          'en-US': 'Simple, powerful and flexible RPC Api framework.',
        },
        color: '#398ccb',
        link: 'https://trpc.io/',
      },
      {
        id: 'authjs',
        icon: Icons.authjs,
        name: {
          'ar-EG': 'أوث جي أس',
          'en-US': 'Auth.js',
        },
        description: {
          'ar-EG': 'إطار مصادقة بسيط وقوي ومرن.',
          'en-US': 'Simple, powerful and flexible auth framework.',
        },
        color: '#398ccb',
        link: 'https://authjs.dev/',
      },
      {
        id: 'prisma',
        icon: Icons.prisma,
        name: {
          'ar-EG': 'بريزما أورم',
          'en-US': 'Prisma ORM',
        },
        description: {
          'ar-EG': 'بريزما هو جيل جديد من نود جي إس وبرمجة النوع.',
          'en-US': 'Prisma is a next-generation Node.js and TypeScript ORM.',
        },
        color: '#5a67d9',
        link: 'https://www.prisma.io/',
      },
      {
        id: 'tailwind',
        icon: Icons.tailwind,
        name: {
          'ar-EG': 'تيلويند سي إس إس',
          'en-US': 'Tailwind CSS',
        },
        description: {
          'ar-EG': 'تيلويند سي إس إس هو إطار تنسيق CSS مفتوح المصدر.',
          'en-US': 'Tailwind CSS is an open-source CSS framework.',
        },
        color: '#0891b2',
        link: 'https://tailwindcss.com/',
      },
      {
        id: 'shadcnui',
        icon: Icons.shadcnui,
        name: {
          'ar-EG': 'شاد سي ان يو اي',
          'en-US': 'Shadcn UI',
        },
        description: {
          'ar-EG':
            'مكونات واجهة مستخدم مصممة بشكل جميل بـ راديكس يو أي وتيلوند سي أس أس',
          'en-US':
            'Beautifully designed ui components with radix ui and tailwindcss.',
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
          'ar-EG':
            'مكتبة مكونات واجهة مستخدم قابلة للتخصيص لبناء تطبيقات الويب',
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
          'ar-EG': 'راديكس يو أي',
          'en-US': 'Radix UI',
        },
        description: {
          'ar-EG':
            'المكونات والأيقونات والألوان لإنشاء واجهة مستخدم عالية الجودة ويمكن الوصول إليها.',
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
          'ar-EG': 'شاكرا يو أي',
          'en-US': 'Chakra UI',
        },
        description: {
          'ar-EG':
            'مكتبة مكونات بسيطة وقابلة للتخصيص وقابلة للوصول لبناء تطبيقات الويب بسرعة.',
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
          'ar-EG': 'نيكست إنت إل',
          'en-US': 'Next-intl',
        },
        description: {
          'ar-EG':
            'حل شامل للتدويل في تطبيقات نيكست.جي إس.',
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
        icon: Icons.meilisearch, // Assuming you have an icon for Meilisearch
        name: {
          'ar-EG': 'ميلي سيرش',
          'en-US': 'Meilisearch',
        },
        description: {
          'ar-EG': 'محرك بحث سريع وسهل الاستخدام للبيانات الخاصة بك',
          'en-US': 'Fast and easy-to-use search engine for your data',
        },
        color: '#FF4E62', // You can customize the color
        link: 'https://www.meilisearch.com/',
      },
      {
        id: 'orama',
        icon: Icons.orama, // Assuming you have an icon for Orama
        name: {
          'ar-EG': 'أوراما سيرش',
          'en-US': 'Orama Search',
        },
        description: {
          'ar-EG': 'محرك بحث هجين سريع و مفتوح المصدر',
          'en-US': 'Fast, open-source hybrid search engine',
        },
        color: '#43205b', // You can customize the color
        link: 'https://askorama.ai/',
      },
      {
        id: 'mongodb-atlas',
        icon: Icons.mongodb,
        name: {
          'ar-EG': 'مونغو دي بي اتلاس',
          'en-US': 'MongoDB Atlas',
        },
        description: {
          'ar-EG':
            'MongoDB Atlas هي مجموعة ادوات متكامله ل MongoDB',
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
          'ar-EG': 'مونغو دي بي',
          'en-US': 'MongoDB',
        },
        description: {
          'ar-EG':
            'MongoDB هي قاعدة بيانات NoSQL متاحة المصدر وموجهة نحو المستندات.',
          'en-US':
            'MongoDB is a source-available document-oriented NoSQL database.',
        },
        color: '#01ed64',
        link: 'https://www.mongodb.com/',
      },

      {
        id: 'postgresql',
        icon: Icons.postgresql, // Assuming you have an icon for PostgreSQL
        name: {
          'ar-EG': 'بوستجريس كيو إل',
          'en-US': 'PostgreSQL',
        },
        description: {
          'ar-EG': 'قاعدة بيانات مفتوحة المصدر متقدمة وعالية الأداء.',
          'en-US': 'Advanced open-source relational database system.',
        },
        color: '#336699', // You can customize the color
        link: 'https://www.postgresql.org/',
      },
      {
        id: 'mysql',
        icon: Icons.mysql, // Assuming you have an icon for MySQL
        name: {
          'ar-EG': 'ماي إس كيو إل',
          'en-US': 'MySQL',
        },
        description: {
          'ar-EG':
            'قاعدة بيانات مفتوحة المصدر شعبية لإدارة البيانات العلائقية.',
          'en-US': 'Popular open-source relational database management system.',
        },
        color: '#00758F', // You can customize the color
        link: 'https://www.mysql.com/',
      },
      {
        id: 'sqlite',
        icon: Icons.sqlite,
        name: {
          'ar-EG': 'سكيولايت',
          'en-US': 'SQLite',
        },
        description: {
          'ar-EG':
            'SQLite هي محرك قاعدة بيانات مدمجة ذاتية الإدارة وغير متصلة بالشبكة تدعم الـ SQL.',
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
          'ar-EG': 'سترابي',
          'en-US': 'Strapi',
        },
        description: {
          'ar-EG':
            'سترابي هو نظام إدارة محتوى فارغ الرأس مخصص لتطوير مواقع الويب، تطبيقات الهواتف المحمولة، متاجر التجارة الإلكترونية، وواجهات البرمجة (APIs).',
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
          'ar-EG': 'أدوبي إكس دي',
          'en-US': 'Adobe XD',
        },
        description: {
          'ar-EG':
            'أدوبي إكس دي هو أداة تصميم ناقلة لتطبيقات الويب والهواتف المحمولة.',
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
          'ar-EG': 'فيغما',
          'en-US': 'Figma',
        },
        description: {
          'ar-EG':
            'فيغما هو أداة تصميم ناقلة لتطبيقات الويب والهواتف المحمولة.',
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
          'ar-EG': 'في إس كود',
          'en-US': 'VS Code',
        },
        description: {
          'ar-EG': 'في إس كود هو محرر الشيفرة المصدرية الذي طورته مايكروسوفت.',
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
          'ar-EG': 'جيت',
          'en-US': 'Git',
        },
        description: {
          'ar-EG': 'جيت هو نظام التحكم في الإصدار الموزع.',
          'en-US': 'Git is a distributed version control system.',
        },
        color: '#ef5032',
        link: 'https://git-scm.com/',
      },
      {
        id: 'github',
        icon: Icons.gitHub,
        name: {
          'ar-EG': 'جيت هب',
          'en-US': 'Github',
        },
        description: {
          'ar-EG':
            'GitHub عبارة عن نظام أساسي للمطورين يتيح للمطورين إنشاء التعليمات البرمجية الخاصة بهم وتخزينها وإدارتها ومشاركتها.',
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
          'ar-EG': 'جيت هب - كود سبيسيس',
          'en-US': 'Github - Codespaces',
        },
        description: {
          'ar-EG': 'بيئة تطوير سحابية فورية لبناء وتشغيل الكود.',
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
          'ar-EG': 'بوست مان',
          'en-US': 'Postman',
        },
        description: {
          'ar-EG':
            'بوست مان هو تطبيق يتيح اختبار واستكشاف واستخدام وتصحيح الواجهات البرمجية للويب.',
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
          'ar-EG': 'مونجو دي بي كومباس',
          'en-US': 'MongoDB Compass',
        },
        description: {
          'ar-EG': 'أداة رسومية لإدارة قواعد بيانات مونجو دي بي',
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
