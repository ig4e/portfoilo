import AvnologyLogo from '@/public/assets/companies/avnology.png';
import { Icons } from '@/components/ui/icons';
import { languages, runtimes, technologies, tools } from './skills';
import { projects } from './projects';

export const experience = [
  {
    id: 'avnology',
    name: {
      'ar-EG': 'أفنولوجي', // Placeholder Arabic name
      'en-US': 'AVNOLOGY',
    },
    role: {
      'ar-EG': 'مطور فول ستاك', // More common term
      'en-US': 'Full Stack Developer',
    },
    startDate: '2024/10/01',
    endDate: null, // null for present
    description: {
      'ar-EG':
        'بنساعد بحلول إبداعية للتصميم التفاعلي، التطوير، والتسويق الرقمي.', // More conversational
      'en-US':
        'We help with creative solutions to interactive design, development and digital marketing',
    },
    workArea: {
      'ar-EG': 'تطوير فول ستاك، تصميم واجهة وتجربة المستخدم (UI/UX)', // More common terms
      'en-US': 'Full Stack Development, UI/UX Design',
    },
    links: {
      website: 'https://avnology.com/en',
      linkedin: 'https://www.linkedin.com/company/avnology-com',
    },
    color: '#324589',
    logo: AvnologyLogo,
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
      tools.git,
      tools.github,
    ],
    whatIDidDo: {
      'ar-EG':
        'طورت نظام QR Code وصفحات تسويقية لعملاء باستخدام Next.js، React، و Tailwind CSS.', // More natural flow, use 'QR Code'
      'en-US':
        'Developed a QR code system and multiple marketing pages for clients using Next.js, React, and Tailwind CSS.',
    },
    projects: [projects.find((project) => project.id === 'taiba-lines')], // Link to projects
  },
  {
    id: 'freelance',
    name: {
      'ar-EG': 'عمل حر',
      'en-US': 'Freelance',
    },
    role: {
      'ar-EG': 'مطور فول ستاك / مصمم UI/UX', // Shorter, common terms
      'en-US': 'Full Stack Developer / UI/UX Designer', // Updated English role too
    },
    startDate: '2020/05/01',
    endDate: null, // null for present
    description: {
      'ar-EG':
        'تطوير وتصميم تطبيقات ويب وموبايل مع التركيز على تجربة المستخدم.', // Slightly more natural
      'en-US':
        'Web and mobile application development and design with focus on user experience',
    },
    workArea: {
      'ar-EG': 'تطوير فول ستاك، تصميم UI/UX، تطوير تطبيقات.', // Shorter, common terms
      'en-US': 'Full Stack Development, UI/UX Design, Application Development',
    },
    links: {},
    color: '#4A6FA5',
    logo: Icons.logo,
    location: {
      'ar-EG': 'الزقازيق، الشرقية، مصر · عن بعد',
      'en-US': 'Az Zaqāzīq, Sharkia, Egypt · Remote',
    },
    stack: [
      languages.ts,
      languages.js,
      runtimes.node,
      technologies.react,
      technologies.nextjs,
      technologies.tailwind,
      languages.html,
      languages.css,
      tools.figma,
      tools.vsc,
      tools.git,
      tools.github,
    ],
    whatIDidDo: {
      'ar-EG':
        'صممت وطورت مواقع وتطبيقات لعملاء باستخدام أحدث التكنولوجيات والأدوات.', // More active voice, common term 'تكنولوجيات'
      'en-US':
        'Designed and developed websites and applications for clients using modern technologies and tools',
    },
    projects: [], // Link to relevant projects
  },
];

export type Experience = (typeof experience)[number];
