import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import backgroundImage from '../images/background.jpeg';
import profilePic from '../images/profilepic.jpeg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ellen Chan',
  description: "Ellen Chan",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: backgroundImage,
  name: `Ellen Chan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Victoria based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Instant Domains</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  imageSrc: backgroundImage,
  profileImageSrc: profilePic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    { label: 'Location', text: 'San Francisco, CA', Icon: MapIcon },
    { label: 'Interests', text: 'Sewing, Thrifting, Gaming', Icon: SparklesIcon },
    { label: 'Education', text: 'University of San Francisco\nUniversity of California, Davis', Icon: AcademicCapIcon },
    { label: 'Internship', text: 'Surefyre', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2021 – May 2024',
    location: 'University of San Francisco',
    title: 'Master of Science in Computer Science',
    content: <div>
      <p className="text-sm italic font-bold">Relevant Coursework</p>
      <p className="pl-3 text-sm">Algorithms</p>
      <p className="pl-3 text-sm">Systems Programming</p>
      <p className="pl-3 text-sm">Practical Software Development</p>
      <p className="pl-3 text-sm">Machine Learning</p>
      <p className="pl-3 text-sm">Network Programming</p>
      <p className="pl-3 text-sm">Cloud Computing</p>
    </div>,
  },
  {
    date: 'September 2013 – June 2017',
    location: 'University of California, Davis',
    title: 'Bachelor of Science in Chemical Engineering',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - Present',
    location: 'Surefyre',
    title: 'Software Engineering Intern',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'September 2022 – May 2023',
    location: 'University of San Francisco',
    title: 'Tutor/Teaching Assistant',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'ellenrchan@gmail.com',
      href: 'mailto:ellenrchan@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Ellen Chan',
      href: 'https://www.linkedin.com/in/ellen-chan-sf/',
    },
    {
      type: ContactType.Github,
      text: 'nahcnelle',
      href: 'https://github.com/nahcnelle',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/nahcnelle' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ellen-chan-sf/' },
];
