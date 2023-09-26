import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import backgroundImage from '../images/background.jpeg';
import profilePic from '../images/profilepic.jpeg';
import {
  About,
  ContactSection,
  ContactType,
  HomepageMeta,
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
 * About section
 */
export const aboutData: About = {
  imageSrc: backgroundImage,
  profileImageSrc: profilePic,
  description: `I'm currently working towards a Master's degree in Computer Science at the University of San Francisco, while 
  also gaining hands-on experience as a software engineer through my internship at Surefyre. 
  My journey in the tech world has been incredibly rewarding, allowing me to apply my academic knowledge to real-world projects. 
  I'm eager to further refine my skills and contribute to a team that values continuous growth and development.`,
  aboutItems: [
    { label: 'Location', text: 'San Francisco, CA', Icon: MapIcon },
    { label: 'Interests', text: 'Sewing, Thrifting, Gaming', Icon: SparklesIcon },
    { label: 'Education', text: 'University of San Francisco\nUniversity of California, Davis', Icon: AcademicCapIcon },
    { label: 'Internship', text: 'Surefyre', Icon: BuildingOffice2Icon },
    { label: 'Affiliations', text: 'Committee on Information Technology Strategy', Icon: UserGroupIcon },
  ],
};

/**
 * Resume section
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
    content: <p className="pl-3 text-sm"></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - Present',
    location: 'Surefyre',
    title: 'Software Engineering Intern',
    content: (
      <p className="pl-3 text-sm">
        As an intern, I began by enhancing and updating the schemas for platform forms. As I gained experience, my roles have expanded. 
        I'm actively contributing to the integration of billing functionality into the platform. 
        This involves managing data flow between the PostgreSQL database, Django models, and external billing services. 
        I am also currently working on designing a webhook integration system, 
        using Python-based Django view functions to improve real-time communication with the external billing services.
      </p>
    ),
  },
  {
    date: 'September 2022 – May 2023',
    location: 'University of San Francisco',
    title: 'Tutor/Teaching Assistant',
    content: (
      <p className="pl-3 text-sm">
        I provided peer support and mentorship to fellow computer science students, 
        assisting with understanding various topics and software troubleshooting. 
        I also conducted lab sessions to reinforce learning and participated in grading assignments 
        for a Python-based scientific computation and machine learning course.
      </p>
    ),
  },
];

export const projects: TimelineItem[] = [
  {
    date: 'February 2023 – March 2023',
    location: 'Network Compression Detection App',
    title: 'Developer',
    content: <p className="pl-3 text-sm">
      I developed network applications in C to identify network compression in both cooperative and uncooperative scenarios. 
      The project involved implementing key network protocols such as TCP, UDP, and raw sockets 
      to facilitate packet transmission, reception, and monitoring. 
      I configured IP and TCP packet headers to ensure the inclusion of essential components like checksums, 
      flags, and timeouts, optimizing functionality.
    </p>,
  },
  {
    date: 'November 2022 – December 2022',
    location: 'Hotel Review Website',
    title: 'Developer',
    content: <p className="pl-3 text-sm">
      I created a hotel review website using Java, which enabled user registration, user login, 
      hotel searches, and the ability to compose and edit reviews.
      To ensure data integrity, I employed a MySQL database for storing crucial information 
      such as hotel details, user reviews, and password encryption.
      To enhance user experience, I integrated Ajax to dynamically update web pages as users navigate through review sections, 
      favorite hotels, and access real-time weather information for hotel locations, all without requiring page reloads.
    </p>,
  },
  {
    date: 'June 2022 - August 2022',
    location: 'Racing Roguelike Video Game',
    title: 'Developer',
    content: <p className="pl-3 text-sm">
      I contributed to the development of an in-browser video game that blended aspects of car racing and roguelike genres. 
      While leveraging TypeScript and the Phaser framework, I focusing on implementing the procedural generation 
      of race tracks and map terrain as 2D tile maps.
      These maps were apart of the model component in the MVC design pattern utilized for this project.
      In addition, I took charge of setting up an efficient CI/CD pipeline through GitHub Actions, 
      ensuring seamless automatic game building and deployment on GitHub Pages every time code was committed to the repository.
      </p>,
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
